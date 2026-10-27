import { contactLeadSchema, type ContactLead } from "@/lib/contact";

export const RENTAL_TECH_AUDIT_FORM_NAME = "rental-tech-audit";
export const RENTAL_TECH_AUDIT_ENDPOINT = "/__forms.html";
export const RENTAL_TECH_AUDIT_SUBJECT = "New Rental Tech Audit lead";

/**
 * Field names registered in public/__forms.html.
 * The AJAX body must use this set exactly. Netlify rejects unknown names.
 */
export const RENTAL_TECH_AUDIT_FIELDS = [
  "form-name",
  "subject",
  "name",
  "email",
  "phone",
  "company",
  "fleetSize",
  "businessNeeds",
  "firstName",
  "lastName",
  "currentSoftware",
  "language",
  "bot-field",
] as const;

export type RentalTechAuditField = (typeof RENTAL_TECH_AUDIT_FIELDS)[number];

export type RentalTechAuditDraft = {
  firstName: unknown;
  lastName: unknown;
  company: unknown;
  email: unknown;
  phone: unknown;
  fleetSize: unknown;
  currentSoftware: unknown;
  challenge: unknown;
  language: unknown;
  website: unknown;
  botField: unknown;
};

export type PreparedRentalTechAudit =
  | { ok: true; kind: "honeypot" }
  | { ok: true; kind: "lead"; body: URLSearchParams }
  | { ok: false; reason: "fleetSize" | "invalid" };

export type RentalTechAuditSubmitOutcome =
  | { status: "success" }
  | { status: "error"; reason: "fleetSize" | "invalid" | "rejected" };

const REJECTION_BODY = /form not found|page not found|submission has been rejected/i;

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function formText(form: HTMLFormElement, name: string): string {
  const value = new FormData(form).get(name);
  return typeof value === "string" ? value : "";
}

export function buildRentalTechAuditBody(lead: ContactLead): URLSearchParams {
  const params = new URLSearchParams();
  params.set("form-name", RENTAL_TECH_AUDIT_FORM_NAME);
  params.set("subject", RENTAL_TECH_AUDIT_SUBJECT);
  params.set("name", `${lead.firstName} ${lead.lastName}`.replace(/\s+/g, " ").trim());
  params.set("email", lead.email);
  params.set("phone", lead.phone);
  params.set("company", lead.company);
  params.set("fleetSize", lead.fleetSize);
  params.set("businessNeeds", lead.challenge);
  params.set("firstName", lead.firstName);
  params.set("lastName", lead.lastName);
  params.set("currentSoftware", lead.currentSoftware);
  params.set("language", lead.language);
  params.set("bot-field", "");
  return params;
}

export function prepareRentalTechAuditSubmission(
  draft: RentalTechAuditDraft,
): PreparedRentalTechAudit {
  const website = asText(draft.website);
  const botField = asText(draft.botField);
  if (website.trim() !== "" || botField.trim() !== "") {
    return { ok: true, kind: "honeypot" };
  }

  const parsed = contactLeadSchema.safeParse({
    firstName: draft.firstName,
    lastName: draft.lastName,
    company: draft.company,
    email: draft.email,
    phone: draft.phone,
    fleetSize: draft.fleetSize,
    currentSoftware: draft.currentSoftware,
    challenge: draft.challenge,
    language: draft.language,
  });

  if (!parsed.success) {
    const fleetIssue = parsed.error.issues.some((issue) => issue.path[0] === "fleetSize");
    return { ok: false, reason: fleetIssue ? "fleetSize" : "invalid" };
  }

  return { ok: true, kind: "lead", body: buildRentalTechAuditBody(parsed.data) };
}

export async function postRentalTechAudit(
  body: URLSearchParams,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean> {
  const response = await fetchImpl(RENTAL_TECH_AUDIT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) {
    return false;
  }

  const text = await response.text();
  return !REJECTION_BODY.test(text);
}

export async function submitRentalTechAuditForm(
  draft: RentalTechAuditDraft,
  fetchImpl: typeof fetch = fetch,
): Promise<RentalTechAuditSubmitOutcome> {
  const prepared = prepareRentalTechAuditSubmission(draft);
  if (prepared.ok === false) {
    return { status: "error", reason: prepared.reason };
  }
  if (prepared.kind === "honeypot") {
    return { status: "success" };
  }

  try {
    const accepted = await postRentalTechAudit(prepared.body, fetchImpl);
    return accepted ? { status: "success" } : { status: "error", reason: "rejected" };
  } catch {
    return { status: "error", reason: "rejected" };
  }
}
