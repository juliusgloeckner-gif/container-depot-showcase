import test from "node:test";
import fs from "node:fs";
import assert from "node:assert/strict";

const trackingSource = fs.readFileSync(
  new URL("../public/marketing-tracking.js", import.meta.url),
  "utf8",
);
const legacySource = fs.readFileSync(
  new URL("../public/legacy-form-fix.js", import.meta.url),
  "utf8",
);
const quoteFormSource = fs.readFileSync(
  new URL("../app/QuoteForm.tsx", import.meta.url),
  "utf8",
);

test("names every campaign landing page clearly in Formspree", () => {
  for (const name of [
    "General Landing Page",
    "Construction Landing Page",
    "Farm Landing Page",
    "Business Overflow Landing Page",
    "Moving and Relocation Landing Page",
    "Home Renovation Landing Page",
    "Vehicle Storage Landing Page",
    "Event Storage Landing Page",
    "Schools and Institutions Landing Page",
    "International Shipping Containers Landing Page",
    "Disaster Relief Containers Landing Page",
    "Refrigerated / Reefer Containers Landing Page",
    "Open Side Containers Landing Page",
    "Double Door Containers Landing Page",
    "Insulated Containers Landing Page",
    "Office Containers Landing Page",
    "Hazardous Material Storage Landing Page",
  ]) {
    assert.match(trackingSource, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), name);
  }
});

test("writes plain-English landing-page and version fields into Formspree", () => {
  assert.match(trackingSource, /data\.set\("source", formspreeSourceLabel\(\)\)/);
  assert.match(trackingSource, /data\.set\("landing_page_name", landingPageName\(\)\)/);
  assert.match(trackingSource, /data\.set\("website_version", websiteVersionLabel\(\)\)/);
  assert.match(trackingSource, /Version A \(Original design\)/);
  assert.match(trackingSource, /Version B \(Redesigned design\)/);
  assert.match(trackingSource, /New UCD lead \|/);
});

test("keeps the non-experiment general and niche pages labeled as redesigned", () => {
  assert.match(trackingSource, /if \(!context\.active\) return "Redesigned website"/);
  assert.match(quoteFormSource, /name="source" value=\{`\$\{context\} \| Redesigned website`\}/);
});

test("gives legacy A forms readable fallback sources", () => {
  assert.match(legacySource, /Construction Landing Page \| Version A \(Original design\)/);
  assert.match(legacySource, /Farm Landing Page \| Version A \(Original design\)/);
  assert.match(legacySource, /Business Overflow Landing Page \| Version A \(Original design\)/);
});
