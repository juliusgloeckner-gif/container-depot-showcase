import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const data = JSON.parse(readFileSync(join(root, "app/knowledge/knowledge-data.json"), "utf8")).verticals;
const keys = ["farm", "business", "vehicles"];

test("each knowledge hub has the promised depth", () => {
  for (const key of keys) {
    assert.equal(data[key].guides.length, 32, `${key} guide count`);
    assert.equal(data[key].questions.length, 100, `${key} question count`);
    assert.equal(data[key].categories.length, 8, `${key} category count`);
    assert.equal(data[key].downloads.length, 4, `${key} download count`);
    assert.equal(new Set(data[key].guides.map((guide) => guide.slug)).size, 32, `${key} unique guide slugs`);
  }
});

test("all photos and downloadable reports exist", () => {
  for (const key of keys) {
    for (const image of [data[key].heroImage, ...data[key].featureImages]) assert.ok(existsSync(join(root, "public", image)), `${key} missing ${image}`);
    for (const item of data[key].downloads) assert.ok(existsSync(join(root, "public", item.href)), `${key} missing ${item.href}`);
  }
});

test("guide content contains explicit verification boundaries", () => {
  for (const key of keys) {
    for (const guide of data[key].guides) {
      const text = JSON.stringify(guide).toLowerCase();
      assert.match(text, /verify|confirm|follow|qualified|approval/, `${key}/${guide.slug} needs a verification boundary`);
      assert.ok(guide.checklist.length >= 6, `${key}/${guide.slug} checklist depth`);
      assert.ok(guide.fieldNotes.length >= 4, `${key}/${guide.slug} field-note depth`);
      assert.ok(guide.faq.length >= 3, `${key}/${guide.slug} FAQ depth`);
    }
  }
});

test("high-risk topic wording stays fail-safe", () => {
  const all = JSON.stringify(data).toLowerCase();
  for (const phrase of ["never store pesticides or other chemicals with food, feed, seed or medical supplies", "never run an engine inside the container", "a plain container is not automatically suitable for feed or seed", "a standard container is food-grade"]) assert.ok(all.includes(phrase), `missing safety phrase: ${phrase}`);
  assert.ok(all.includes("stationary storage and highway cargo securement are different tasks"));
});

test("drafted knowledge copy does not use long dashes", () => {
  const files = ["app/knowledge/knowledge-data.json", "app/knowledge/KnowledgeHubSection.tsx", "app/knowledge/KnowledgeVisual.tsx", "app/[vertical]/guides/[slug]/page.tsx", "app/[vertical]/resources/page.tsx", "app/[vertical]/questions/page.tsx", "app/[vertical]/planner/page.tsx", "app/[vertical]/resources/planning-brief/page.tsx"];
  for (const file of files) assert.ok(!readFileSync(join(root, file), "utf8").includes("—"), `${file} contains an em dash`);
});

test("knowledge routes return to the correct quote form", () => {
  const files = ["app/knowledge/KnowledgeSiteShell.tsx", "app/[vertical]/guides/[slug]/page.tsx", "app/[vertical]/resources/page.tsx", "app/[vertical]/questions/page.tsx", "app/[vertical]/planner/page.tsx"];
  const text = files.map((file) => readFileSync(join(root, file), "utf8")).join("\n");
  assert.match(text, /\?quote=1#quote-form/);
  const quote = readFileSync(join(root, "app/QuoteForm.tsx"), "utf8");
  assert.match(quote, /https:\/\/formspree\.io\/f\/mvzepnvd/);
});
