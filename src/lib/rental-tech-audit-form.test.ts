import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { test } from "node:test";
import {
  RENTAL_TECH_AUDIT_ENDPOINT,
  RENTAL_TECH_AUDIT_FIELDS,
  RENTAL_TECH_AUDIT_FORM_NAME,
  RENTAL_TECH_AUDIT_SUBJECT,
  prepareRentalTechAuditSubmission,
  submitRentalTechAuditForm,
  type RentalTechAuditDraft,
} from "./rental-tech-audit-form";

const englishDraft: RentalTechAuditDraft = {
  firstName: "  Ada  ",
  lastName: "Lovelace",
  company: "Analytical Engines",
  email: "  Ada@Example.COM  ",
  phone: "  +1 555 0100  ",
  fleetSize: "11-25",
  currentSoftware: "Turo",
  challenge: "Reservations and payments are disconnected.",
  language: "en",
  website: "",
  botField: "",
};

function bodyEntries(body: URLSearchParams): Record<string, string> {
  return Object.fromEntries(body.entries());
}

function staticFieldNames(): string[] {
  const html = readFileSync(path.join(process.cwd(), "public/__forms.html"), "utf8");
  const names: string[] = [];
  const tagRe = /<(input|textarea)\b[^>]*>/gi;
  for (const tag of html.match(tagRe) ?? []) {
    const nameMatch = tag.match(/\bname="([^"]+)"/);
    if (nameMatch) {
      names.push(nameMatch[1]);
    }
  }
  return names;
}

test("static form definition matches the submitted field set", () => {
  const html = readFileSync(path.join(process.cwd(), "public/__forms.html"), "utf8");
  assert.match(html, /name="rental-tech-audit"/);
  assert.match(html, /data-netlify="true"/);
  assert.match(html, /netlify-honeypot="bot-field"/);
  assert.match(html, /action="\/__forms\.html"/);
  assert.deepEqual(staticFieldNames(), [...RENTAL_TECH_AUDIT_FIELDS]);
});

test("English lead body matches the registered form and notification fields", () => {
  const prepared = prepareRentalTechAuditSubmission(englishDraft);
  assert.equal(prepared.ok, true);
  if (!prepared.ok || prepared.kind !== "lead") {
    return;
  }

  const entries = bodyEntries(prepared.body);
  assert.deepEqual(Object.keys(entries), [...RENTAL_TECH_AUDIT_FIELDS]);
  assert.equal(entries["form-name"], RENTAL_TECH_AUDIT_FORM_NAME);
  assert.equal(entries.subject, RENTAL_TECH_AUDIT_SUBJECT);
  assert.equal(entries.name, "Ada Lovelace");
  assert.equal(entries.email, "ada@example.com");
  assert.equal(entries.phone, "+1 555 0100");
  assert.equal(entries.company, "Analytical Engines");
  assert.equal(entries.fleetSize, "11-25");
  assert.equal(entries.businessNeeds, "Reservations and payments are disconnected.");
  assert.equal(entries.firstName, "Ada");
  assert.equal(entries.lastName, "Lovelace");
  assert.equal(entries.currentSoftware, "Turo");
  assert.equal(entries.language, "en");
  assert.equal(entries["bot-field"], "");
  assert.equal(prepared.body.has("website"), false);
  assert.equal(prepared.body.has("challenge"), false);
});

test("Spanish lead keeps language es and the same fields", () => {
  const prepared = prepareRentalTechAuditSubmission({
    ...englishDraft,
    firstName: "José",
    lastName: "Martínez",
    company: "Aventuras Jeep",
    email: "jose@example.com",
    phone: "",
    fleetSize: "6-10",
    currentSoftware: "",
    challenge: "La comunicación con clientes es manual.",
    language: "es",
  });

  assert.equal(prepared.ok, true);
  if (!prepared.ok || prepared.kind !== "lead") {
    return;
  }

  const entries = bodyEntries(prepared.body);
  assert.deepEqual(Object.keys(entries), [...RENTAL_TECH_AUDIT_FIELDS]);
  assert.equal(entries.name, "José Martínez");
  assert.equal(entries.language, "es");
  assert.equal(entries.phone, "");
  assert.equal(entries.fleetSize, "6-10");
  assert.equal(entries.businessNeeds, "La comunicación con clientes es manual.");
});

test("website honeypot is accepted without a Netlify post", async () => {
  let called = false;
  const fetchImpl: typeof fetch = async () => {
    called = true;
    return new Response("", { status: 200 });
  };

  const outcome = await submitRentalTechAuditForm(
    { ...englishDraft, website: "https://spam.example" },
    fetchImpl,
  );

  assert.deepEqual(outcome, { status: "success" });
  assert.equal(called, false);
});

test("Netlify honeypot is accepted without a Netlify post", async () => {
  let called = false;
  const fetchImpl: typeof fetch = async () => {
    called = true;
    return new Response("", { status: 200 });
  };

  const outcome = await submitRentalTechAuditForm(
    { ...englishDraft, botField: "bot" },
    fetchImpl,
  );

  assert.deepEqual(outcome, { status: "success" });
  assert.equal(called, false);
});

test("missing fleet size is rejected before submit", async () => {
  let called = false;
  const fetchImpl: typeof fetch = async () => {
    called = true;
    return new Response("", { status: 200 });
  };

  const outcome = await submitRentalTechAuditForm(
    { ...englishDraft, fleetSize: "" },
    fetchImpl,
  );

  assert.deepEqual(outcome, { status: "error", reason: "fleetSize" });
  assert.equal(called, false);
});

test("invalid email is rejected before submit", async () => {
  const outcome = await submitRentalTechAuditForm({
    ...englishDraft,
    email: "not-an-email",
  });

  assert.deepEqual(outcome, { status: "error", reason: "invalid" });
});

test("accepted submission posts urlencoded data to /__forms.html", async () => {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const fetchImpl: typeof fetch = async (url, init) => {
    calls.push({ url: String(url), init: init ?? {} });
    return new Response("", { status: 200 });
  };

  const outcome = await submitRentalTechAuditForm(englishDraft, fetchImpl);

  assert.deepEqual(outcome, { status: "success" });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, RENTAL_TECH_AUDIT_ENDPOINT);
  assert.equal(calls[0].url.includes("/api/contact"), false);
  assert.equal(calls[0].init.method, "POST");
  const headers = calls[0].init.headers as Record<string, string>;
  assert.equal(headers["Content-Type"], "application/x-www-form-urlencoded");
  const params = new URLSearchParams(String(calls[0].init.body));
  assert.equal(params.get("form-name"), RENTAL_TECH_AUDIT_FORM_NAME);
  assert.equal(params.get("name"), "Ada Lovelace");
  assert.equal(params.get("businessNeeds"), "Reservations and payments are disconnected.");
});

test("non-ok and form-not-found responses are not reported as success", async () => {
  const rejected = await submitRentalTechAuditForm(englishDraft, async () => {
    return new Response("no", { status: 404 });
  });
  assert.deepEqual(rejected, { status: "error", reason: "rejected" });

  const notFound = await submitRentalTechAuditForm(englishDraft, async () => {
    return new Response("Form not found", { status: 200 });
  });
  assert.deepEqual(notFound, { status: "error", reason: "rejected" });
});

test("network failure is not reported as success", async () => {
  const outcome = await submitRentalTechAuditForm(englishDraft, async () => {
    throw new Error("offline");
  });
  assert.deepEqual(outcome, { status: "error", reason: "rejected" });
});
