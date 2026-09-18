import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import {
  CONTACT_SOURCE,
  WEBHOOK_SECRET_HEADER,
  processContactRequest,
  resetRateLimitStore,
  type ContactEnv,
} from "./contact";

const webhookUrl = "https://n8n.example.test/webhook/contact";
const webhookSecret = "test-webhook-secret";

const validEnglishLead = {
  firstName: "Ada",
  lastName: "Lovelace",
  company: "Analytical Engines",
  email: "ada@example.com",
  phone: "+1 555 0100",
  fleetSize: "11-25",
  currentSoftware: "Turo",
  challenge: "Reservations and payments are disconnected.",
  language: "en",
};

const validSpanishLead = {
  firstName: "José",
  lastName: "Martínez",
  company: "Aventuras Jeep",
  email: "jose@example.com",
  fleetSize: "6-10",
  challenge: "La comunicación con clientes es manual.",
  language: "es",
};

function mockFetch(response: Partial<Response> = { ok: true, status: 200 }) {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const fetchImpl: typeof fetch = async (url, init) => {
    calls.push({ url: String(url), init: init ?? {} });
    return {
      ok: response.ok ?? true,
      status: response.status ?? 200,
    } as Response;
  };
  return { fetchImpl, calls };
}

function request(
  body: unknown,
  options?: {
    method?: string;
    ip?: string;
    env?: ContactEnv;
    fetchImpl?: typeof fetch;
    now?: number;
  },
) {
  return processContactRequest({
    method: options?.method ?? "POST",
    ip: options?.ip ?? "203.0.113.10",
    body,
    env: options?.env ?? { webhookUrl, webhookSecret },
    fetchImpl: options?.fetchImpl,
    now: options?.now,
  });
}

beforeEach(() => {
  resetRateLimitStore();
});

afterEach(() => {
  resetRateLimitStore();
});

test("valid English submission is forwarded to the webhook", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(validEnglishLead, { fetchImpl });

  assert.equal(result.status, 200);
  assert.deepEqual(result.body, { ok: true });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, webhookUrl);

  const headers = calls[0].init.headers as Record<string, string>;
  assert.equal(headers[WEBHOOK_SECRET_HEADER], webhookSecret);

  const payload = JSON.parse(String(calls[0].init.body));
  assert.equal(payload.firstName, "Ada");
  assert.equal(payload.lastName, "Lovelace");
  assert.equal(payload.company, "Analytical Engines");
  assert.equal(payload.email, "ada@example.com");
  assert.equal(payload.phone, "+1 555 0100");
  assert.equal(payload.fleetSize, "11-25");
  assert.equal(payload.currentSoftware, "Turo");
  assert.equal(payload.challenge, "Reservations and payments are disconnected.");
  assert.equal(payload.language, "en");
  assert.equal(payload.source, CONTACT_SOURCE);
  assert.equal(typeof payload.submittedAt, "string");
  assert.ok(Number.isNaN(Date.parse(payload.submittedAt)) === false);
});

test("valid Spanish submission is forwarded with language es", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(validSpanishLead, {
    fetchImpl,
    ip: "203.0.113.11",
  });

  assert.equal(result.status, 200);
  assert.deepEqual(result.body, { ok: true });
  assert.equal(calls.length, 1);

  const payload = JSON.parse(String(calls[0].init.body));
  assert.equal(payload.language, "es");
  assert.equal(payload.firstName, "José");
  assert.equal(payload.phone, "");
  assert.equal(payload.currentSoftware, "");
  assert.equal(payload.fleetSize, "6-10");
  assert.equal(payload.source, CONTACT_SOURCE);
});

test("invalid email is rejected", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(
    { ...validEnglishLead, email: "not-an-email" },
    { fetchImpl, ip: "203.0.113.12" },
  );

  assert.equal(result.status, 400);
  assert.deepEqual(result.body, { ok: false, error: "invalid_request" });
  assert.equal(calls.length, 0);
});

test("missing required field is rejected", async () => {
  const { fetchImpl, calls } = mockFetch();
  const withoutCompany = { ...validEnglishLead };
  delete withoutCompany.company;
  const result = await request(withoutCompany, {
    fetchImpl,
    ip: "203.0.113.13",
  });

  assert.equal(result.status, 400);
  assert.deepEqual(result.body, { ok: false, error: "invalid_request" });
  assert.equal(calls.length, 0);
});

test("invalid fleetSize is rejected", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(
    { ...validEnglishLead, fleetSize: "thousands" },
    { fetchImpl, ip: "203.0.113.14" },
  );

  assert.equal(result.status, 400);
  assert.deepEqual(result.body, { ok: false, error: "invalid_request" });
  assert.equal(calls.length, 0);
});

test("honeypot submission is accepted without forwarding", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(
    { ...validEnglishLead, website: "https://spam.example" },
    { fetchImpl, ip: "203.0.113.15" },
  );

  assert.equal(result.status, 200);
  assert.deepEqual(result.body, { ok: true });
  assert.equal(calls.length, 0);
});

test("wrong HTTP method is rejected", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(validEnglishLead, {
    method: "GET",
    fetchImpl,
    ip: "203.0.113.16",
  });

  assert.equal(result.status, 405);
  assert.deepEqual(result.body, { ok: false, error: "method_not_allowed" });
  assert.equal(result.headers?.Allow, "POST");
  assert.equal(calls.length, 0);
});

test("missing webhook configuration fails closed", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(validEnglishLead, {
    fetchImpl,
    ip: "203.0.113.17",
    env: {},
  });

  assert.equal(result.status, 500);
  assert.deepEqual(result.body, { ok: false, error: "submission_failed" });
  assert.equal(calls.length, 0);
});

test("webhook failure returns a controlled server error", async () => {
  const { fetchImpl, calls } = mockFetch({ ok: false, status: 500 });
  const result = await request(validEnglishLead, {
    fetchImpl,
    ip: "203.0.113.18",
  });

  assert.equal(result.status, 502);
  assert.deepEqual(result.body, { ok: false, error: "submission_failed" });
  assert.equal(calls.length, 1);
});

test("successful webhook forwarding trims and normalizes input", async () => {
  const { fetchImpl, calls } = mockFetch();
  const result = await request(
    {
      ...validEnglishLead,
      firstName: "  Ada  ",
      email: "  Ada@Example.COM  ",
      phone: "  +1 555 0100  ",
    },
    { fetchImpl, ip: "203.0.113.19" },
  );

  assert.equal(result.status, 200);
  const payload = JSON.parse(String(calls[0].init.body));
  assert.equal(payload.firstName, "Ada");
  assert.equal(payload.email, "ada@example.com");
  assert.equal(payload.phone, "+1 555 0100");
  assert.equal(payload.fleetSize, "11-25");
});

test("duplicate submissions over the window limit are rate limited", async () => {
  const { fetchImpl, calls } = mockFetch();
  const ip = "203.0.113.20";
  const start = 1_000_000;

  for (let i = 0; i < 5; i += 1) {
    const result = await request(validEnglishLead, {
      fetchImpl,
      ip,
      now: start + i,
    });
    assert.equal(result.status, 200);
  }

  const limited = await request(validEnglishLead, {
    fetchImpl,
    ip,
    now: start + 5,
  });

  assert.equal(limited.status, 429);
  assert.deepEqual(limited.body, { ok: false, error: "rate_limited" });
  assert.equal(calls.length, 5);
});
