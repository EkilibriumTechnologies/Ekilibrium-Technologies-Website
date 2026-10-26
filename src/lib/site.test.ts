import assert from "node:assert/strict";
import { test } from "node:test";
import { SITE_ORIGIN, absoluteUrl } from "./site";

test("absoluteUrl keeps the production origin for site paths", () => {
  assert.equal(absoluteUrl("/"), `${SITE_ORIGIN}/`);
  assert.equal(absoluteUrl("/es"), `${SITE_ORIGIN}/es`);
  assert.equal(absoluteUrl("/og-image.png"), `${SITE_ORIGIN}/og-image.png`);
});

test("absoluteUrl preserves an already absolute URL", () => {
  assert.equal(
    absoluteUrl("https://cdn.example.test/og.png"),
    "https://cdn.example.test/og.png",
  );
});
