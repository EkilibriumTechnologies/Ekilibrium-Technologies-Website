import { z } from "zod";

export const FLEET_SIZES = [
  "1-5",
  "6-10",
  "11-25",
  "26-50",
  "51-100",
  "100+",
] as const;

export const CONTACT_SOURCE = "ekilibrium-technologies-website";
export const WEBHOOK_SECRET_HEADER = "X-Ekilibrium-Webhook-Secret";
export const WEBHOOK_TIMEOUT_MS = 8_000;
export const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
export const RATE_LIMIT_MAX_REQUESTS = 5;
export const CLIENT_IP_MAX_LENGTH = 64;

/**
 * In-memory / serverless rate limiting limitations:
 *
 * - Each Node/serverless isolate keeps its own Map. Concurrent instances on
 *   Netlify do not share counters, so an attacker can exceed the limit by
 *   spreading requests across cold starts or instances.
 * - Counters reset on process recycle / cold start.
 * - On Netlify, x-nf-client-connection-ip is preferred when present.
 *   X-Forwarded-For is only a fallback (first hop). Other forwarded headers
 *   are ignored. Spoofed headers outside a trusted proxy can still bypass
 *   or cluster keys.
 * - This is a best-effort abuse brake, not a substitute for WAF/CDN limits
 *   or a shared store such as Redis.
 */
const rateLimitBuckets = new Map<string, number[]>();

export type ClientIpHeaders = {
  [header: string]: string | string[] | undefined;
};

function firstHeaderValue(value: string | string[] | undefined): string {
  if (typeof value === "string") {
    return value.trim();
  }
  if (Array.isArray(value) && typeof value[0] === "string") {
    return value[0].trim();
  }
  return "";
}

function normalizeIp(value: string, takeFirstForwardedHop: boolean): string {
  let candidate = value.trim();
  if (!candidate) {
    return "";
  }
  if (takeFirstForwardedHop) {
    candidate = candidate.split(",")[0]?.trim() ?? "";
  }
  return candidate.slice(0, CLIENT_IP_MAX_LENGTH);
}

/**
 * Resolve a rate-limit key from the incoming request.
 *
 * Preference order:
 * 1. x-nf-client-connection-ip (Netlify client connection IP)
 * 2. first hop of x-forwarded-for
 * 3. socket remoteAddress (local Next.js / Node)
 * 4. "unknown"
 *
 * Do not log the resolved value.
 */
export function resolveClientIp(input: {
  headers?: ClientIpHeaders;
  remoteAddress?: string | null;
}): string {
  const headers = input.headers ?? {};

  const netlifyIp = normalizeIp(
    firstHeaderValue(headers["x-nf-client-connection-ip"]),
    false,
  );
  if (netlifyIp) {
    return netlifyIp;
  }

  const forwardedIp = normalizeIp(firstHeaderValue(headers["x-forwarded-for"]), true);
  if (forwardedIp) {
    return forwardedIp;
  }

  const socketIp = (input.remoteAddress ?? "").trim().slice(0, CLIENT_IP_MAX_LENGTH);
  if (socketIp) {
    return socketIp;
  }

  return "unknown";
}

export type ContactLead = z.infer<typeof contactLeadSchema>;

export type ContactEnv = {
  webhookUrl?: string;
  webhookSecret?: string;
};

export type ContactRequestInput = {
  method?: string;
  ip?: string;
  body: unknown;
  env: ContactEnv;
  now?: number;
  fetchImpl?: typeof fetch;
};

export type ContactResponse = {
  status: number;
  body: { ok: true } | { ok: false; error: string };
  headers?: Record<string, string>;
};

const optionalLimitedText = (max: number) =>
  z
    .union([z.string(), z.undefined(), z.null()])
    .transform((value) => (typeof value === "string" ? value.trim() : ""))
    .pipe(z.string().max(max));

export const contactLeadSchema = z
  .object({
    firstName: z.string().trim().min(1).max(80),
    lastName: z.string().trim().min(1).max(80),
    company: z.string().trim().min(1).max(120),
    email: z
      .string()
      .trim()
      .min(1)
      .max(254)
      .email()
      .transform((value) => value.toLowerCase()),
    phone: optionalLimitedText(40),
    fleetSize: z.enum(FLEET_SIZES),
    currentSoftware: optionalLimitedText(120),
    challenge: z.string().trim().min(1).max(2000),
    language: z.enum(["en", "es"]),
  })
  .strict();

export function resetRateLimitStore() {
  rateLimitBuckets.clear();
}

export function isRateLimited(ip: string, now = Date.now()): boolean {
  const key = ip.trim().slice(0, CLIENT_IP_MAX_LENGTH) || "unknown";
  const timestamps = (rateLimitBuckets.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  const limited = timestamps.length >= RATE_LIMIT_MAX_REQUESTS;

  timestamps.push(now);
  if (timestamps.length > RATE_LIMIT_MAX_REQUESTS + 1) {
    timestamps.splice(0, timestamps.length - (RATE_LIMIT_MAX_REQUESTS + 1));
  }
  rateLimitBuckets.set(key, timestamps);

  if (rateLimitBuckets.size > 10_000) {
    for (const [bucketKey, bucketTimes] of rateLimitBuckets) {
      const active = bucketTimes.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
      );
      if (active.length === 0) {
        rateLimitBuckets.delete(bucketKey);
      } else {
        rateLimitBuckets.set(bucketKey, active);
      }
    }
  }

  return limited;
}

function jsonOk(status = 200): ContactResponse {
  return { status, body: { ok: true } };
}

function jsonError(status: number, error: string, headers?: Record<string, string>): ContactResponse {
  return { status, body: { ok: false, error }, headers };
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  if (!("website" in body)) {
    return false;
  }
  const honeypot = body.website;
  return typeof honeypot === "string" && honeypot.trim() !== "";
}

function isValidWebhookUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

export function toWebhookPayload(lead: ContactLead, submittedAt: string) {
  return {
    firstName: lead.firstName,
    lastName: lead.lastName,
    company: lead.company,
    email: lead.email,
    phone: lead.phone,
    fleetSize: lead.fleetSize,
    currentSoftware: lead.currentSoftware,
    challenge: lead.challenge,
    language: lead.language,
    source: CONTACT_SOURCE,
    submittedAt,
  };
}

async function forwardToWebhook(
  lead: ContactLead,
  env: ContactEnv,
  submittedAt: string,
  fetchImpl: typeof fetch,
): Promise<ContactResponse> {
  const webhookUrl = env.webhookUrl?.trim();
  if (!webhookUrl || !isValidWebhookUrl(webhookUrl)) {
    console.error("contact_misconfigured");
    return jsonError(500, "submission_failed");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const secret = env.webhookSecret?.trim();
  if (secret) {
    headers[WEBHOOK_SECRET_HEADER] = secret;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetchImpl(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(toWebhookPayload(lead, submittedAt)),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error("contact_webhook_failed", { status: response.status });
      return jsonError(502, "submission_failed");
    }

    return jsonOk(200);
  } catch (error) {
    const aborted =
      (error instanceof Error && error.name === "AbortError") ||
      (typeof error === "object" &&
        error !== null &&
        "name" in error &&
        error.name === "AbortError");
    console.error(aborted ? "contact_webhook_timeout" : "contact_webhook_failed");
    return jsonError(502, "submission_failed");
  } finally {
    clearTimeout(timeout);
  }
}

export async function processContactRequest(
  input: ContactRequestInput,
): Promise<ContactResponse> {
  if (input.method !== "POST") {
    return jsonError(405, "method_not_allowed", { Allow: "POST" });
  }

  const now = input.now ?? Date.now();
  if (isRateLimited(input.ip ?? "unknown", now)) {
    return jsonError(429, "rate_limited");
  }

  if (!isPlainObject(input.body)) {
    return jsonError(400, "invalid_request");
  }

  if ("website" in input.body && typeof input.body.website !== "string") {
    return jsonError(400, "invalid_request");
  }

  if (isHoneypotTriggered(input.body)) {
    return jsonOk(200);
  }

  const leadFields = { ...input.body };
  delete leadFields.website;
  const parsed = contactLeadSchema.safeParse(leadFields);
  if (!parsed.success) {
    return jsonError(400, "invalid_request");
  }

  return forwardToWebhook(
    parsed.data,
    input.env,
    new Date(now).toISOString(),
    input.fetchImpl ?? fetch,
  );
}
