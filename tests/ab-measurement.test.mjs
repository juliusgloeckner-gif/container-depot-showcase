import test from "node:test";
import fs from "node:fs";
import assert from "node:assert/strict";

const trackingSource = fs.readFileSync(
  new URL("../public/marketing-tracking.js", import.meta.url),
  "utf8",
);

test("records exposure for each active landing-page experiment", () => {
  assert.match(trackingSource, /"ucd-construction-redesign-2026"[\s\S]{0,180}active: true/);
  assert.match(trackingSource, /"ucd-farm-redesign-2026"[\s\S]{0,180}active: true/);
  assert.match(trackingSource, /"ucd-business-redesign-2026"[\s\S]{0,180}active: true/);
  assert.match(trackingSource, /window\.gtag\("event", "experiment_exposure"/);
  assert.match(trackingSource, /experiment_id: context\.id/);
  assert.match(trackingSource, /experiment_variant: variant/);
});

test("keeps the general landing page out of A/B experiment reporting", () => {
  assert.match(
    trackingSource,
    /"ucd-general-redesign-2026"[\s\S]{0,180}active: false/,
  );
});

test("adds the same experiment dimensions to confirmed lead events", () => {
  assert.match(trackingSource, /window\.gtag\("event", "form_submit", eventParameters\)/);
  assert.match(trackingSource, /window\.gtag\("event", "generate_lead", eventParameters\)/);
  assert.match(
    trackingSource,
    /var eventParameters = \{[\s\S]{0,420}experiment_id: context\.id[\s\S]{0,220}experiment_variant: variant/,
  );
});
