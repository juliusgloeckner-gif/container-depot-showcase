import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the construction hub, resource library, question library, a guide and both decision tools", async () => {
  const pages = [
    ["/construction", /Construction Resource Center/i],
    ["/construction/resources", /Field answers you can use before the truck reaches the gate/i],
    ["/construction/resources/construction-container-statistics", /Five numbers that sharpen a jobsite storage decision/i],
    ["/construction/questions", /100 construction container questions/i],
    ["/construction/guides/construction-site-theft-prevention", /Construction Site Theft Prevention/i],
    ["/construction/calculators/container-size", /Choose a size\. See the space\. Know what it is for/i],
    ["/construction/calculators/ownership", /Compare buying with renting/i],
  ];

  for (const [pathname, expected] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(await response.text(), expected);
  }
});

test("ships exactly 100 construction container questions across ten topics", async () => {
  const faq = JSON.parse(await readFile(new URL("../app/construction/faq-data.json", import.meta.url), "utf8"));
  const categories = new Map();

  for (const item of faq) {
    categories.set(item.category, (categories.get(item.category) ?? 0) + 1);
    assert.ok(item.question.length >= 12);
    assert.ok(item.answer.length >= 40);
  }

  assert.equal(faq.length, 100);
  assert.equal(categories.size, 10);
  assert.ok([...categories.values()].every((count) => count === 10));
});

test("keeps high-risk FAQ guidance qualified and source-gated", async () => {
  const faq = JSON.parse(await readFile(new URL("../app/construction/faq-data.json", import.meta.url), "utf8"));
  const byId = new Map(faq.map((item) => [item.id, item.answer]));
  const allAnswers = faq.map((item) => item.answer).join("\n");

  assert.match(byId.get(21), /carrier controls.*exclusion zone/i);
  assert.match(byId.get(31), /loaded weight.*modified.*site-specific foundation/i);
  assert.match(byId.get(35), /grading.*surrounding base.*not.*sloping the container/i);
  assert.match(byId.get(54), /point loads.*data plate.*Do not infer/i);
  assert.match(byId.get(56), /not a universal legal interval/i);
  assert.match(byId.get(71), /qualified people.*permits.*inspection/i);
  assert.match(byId.get(88), /upright.*secured.*ventilation.*unventilated/i);
  assert.match(byId.get(89), /not allow workers to be locked inside/i);
  assert.match(byId.get(98), /Never assume.*written carrier approval/i);
  assert.doesNotMatch(allAnswers, /slight planned drainage strategy|perform a documented weekly inspection|loaded for relocation|at minimum, confirm soil bearing/i);
});

test("renders dimension graphics with defensible relative proportions and visible limits", async () => {
  const visual = await readFile(new URL("../app/construction/ConstructionDataVisuals.tsx", import.meta.url), "utf8");
  const short = visual.match(/<rect x="90" y="67" width="(\d+)" height="(\d+)"/);
  const long = visual.match(/<rect x="90" y="201" width="(\d+)" height="(\d+)"/);
  assert.ok(short && long);
  assert.equal(Number(long[1]) / Number(short[1]), 2);
  assert.equal(Number(long[2]), Number(short[2]));
  assert.match(visual, /NOMINAL PLAN VIEW - RELATIVE SCALE - SAME 8FT WIDTH/);
  assert.match(visual, /REPRESENTATIVE CAPACITY - ACTUAL UNITS VARY/);

  const guideVisual = await readFile(new URL("../app/construction/GuideVisual.tsx", import.meta.url), "utf8");
  assert.match(guideVisual, /width=\{160\} height=\{68\}/);
  assert.match(guideVisual, /width=\{320\} height=\{68\}/);
  assert.match(guideVisual, /SCHEMATIC ONLY - VERIFY THE ACTUAL UNIT AND SITE/);

  const social = await readFile(new URL("../public/social/construction-container-footprint.svg", import.meta.url), "utf8");
  assert.match(social, /width="320" height="70"/);
  assert.match(social, /width="640" height="70"/);

  const lostTimeSocial = await readFile(new URL("../public/social/construction-recoverable-lost-time.svg", import.meta.url), "utf8");
  assert.match(visual, /PRIMARY \+ SECONDARY TIME 68%/);
  assert.match(visual, /EXAMPLES ARE NOT INDIVIDUAL SHARES/);
  assert.match(lostTimeSocial, /RECOVERABLE LOST TIME 32%/);
  assert.match(lostTimeSocial, /PRIMARY \+ SECONDARY TIME 68%/);
  assert.match(lostTimeSocial, /32% \+ 68% = 100%/);
  assert.match(lostTimeSocial, /RECOVERABLE EXAMPLES/);
  assert.match(visual, /TOTAL ACTIVE-SITE TIME = 100%/);
  assert.doesNotMatch(visual, /x="350" y="12" width="174"/);
  assert.match(visual, /x="430" y="153"/);
});

test("uses a topic-specific icon for every field-guide card", async () => {
  const response = await render("/construction/resources");
  const html = await response.text();
  const icons = [...html.matchAll(/data-guide-icon="([^"]+)"/g)].map((match) => match[1]);
  const explorer = await readFile(new URL("../app/construction/resources/ResourceExplorer.tsx", import.meta.url), "utf8");

  assert.equal(icons.length, 32);
  assert.equal(new Set(icons).size, 32);
  assert.doesNotMatch(explorer, /<i><\/i>/);
});

test("turns the size selector into a direct education and quote handoff", async () => {
  const sizeCalculator = await readFile(new URL("../app/SizeEducationTool.tsx", import.meta.url), "utf8");
  const quoteForm = await readFile(new URL("../app/QuoteForm.tsx", import.meta.url), "utf8");
  const ownershipCalculator = await readFile(new URL("../app/construction/calculators/OwnershipCalculator.tsx", import.meta.url), "utf8");
  const questionPage = await readFile(new URL("../app/construction/questions/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(sizeCalculator, /<select/i);
  assert.match(sizeCalculator, /20FT Standard/);
  assert.match(sizeCalculator, /40FT Standard/);
  assert.match(sizeCalculator, /40FT High Cube/);
  assert.match(sizeCalculator, /What this size is for/);
  assert.match(sizeCalculator, /\?size=\$\{encodeURIComponent\(selected\.quoteValue\)\}#quote-form/);
  assert.match(quoteForm, /new URLSearchParams\(window\.location\.search\)\.get\("size"\)/);
  assert.match(quoteForm, /value=\{selectedSize\}/);
  assert.match(ownershipCalculator, /Example inputs only/);
  assert.match(ownershipCalculator, /not a quote or financial recommendation/i);
  assert.match(questionPage, /screening resource, not a site authorization/i);
  assert.match(questionPage, /OSHA compressed gases/);
  assert.match(questionPage, /ICC container guidance/);
  assert.match(questionPage, /FMCSA securement/);
});

test("keeps quote reminders at key landing-page decision points", async () => {
  const response = await render("/construction");
  const html = await response.text();

  assert.match(html, /id="mid-page-quote"/);
  assert.match(html, /id="delivery-process"/);
  assert.match(html, /Already know your ZIP and preferred size/i);
  assert.ok((html.match(/href="#quote-form"/g) ?? []).length >= 8);
});

test("keeps all ten popular-use links beside the construction guide navigation", async () => {
  const response = await render("/construction");
  const html = await response.text();
  const decodedHtml = html.replaceAll("&amp;", "&");
  const expectedUses = [
    ["/construction", "Construction sites"],
    ["/farm", "Farms & Ranches"],
    ["/business", "Business overflow"],
    ["/moving", "Moving & Relocation"],
    ["/renovation", "Renovation storage"],
    ["/vehicles", "Vehicles & Recreation"],
    ["/events", "Events & Production"],
    ["/institutions", "Government, Schools & Institutions"],
    ["/international-shipping-containers", "International Shipping & Export"],
    ["/disaster-relief-containers", "Disaster Relief & Emergency Response"],
  ];

  assert.match(html, /Popular uses/i);
  assert.match(html, /Construction guides/i);
  for (const [href, label] of expectedUses) {
    assert.match(decodedHtml, new RegExp(`href="${href}"[^>]*>${label}<`, "i"));
  }
});

test("ships a complete evergreen guide library", async () => {
  const source = await readFile(new URL("../app/construction/guide-data.ts", import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  const library = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
  const { guides, guideCategories } = library;
  const slugs = guides.map((guide) => guide.slug);
  const categories = guideCategories.map((category) => category.key);

  assert.equal(slugs.length, 32);
  assert.equal(new Set(slugs).size, 32);
  assert.equal(categories.length, 10);
  assert.equal(new Set(categories).size, 10);
  assert.ok(guides.every((guide) => categories.includes(guide.category)));
  assert.ok(guides.every((guide) => guide.fieldNotes.length >= 4));
  assert.ok(guides.every((guide) => guide.checklist.length >= 6));
  assert.ok(guides.every((guide) => guide.mistakes.length >= 4));
  assert.ok(guides.every((guide) => guide.faq.length >= 2));
  assert.ok(guides.flatMap((guide) => guide.sources ?? []).every((sourceLink) => sourceLink.href.startsWith("https://")));
});

test("includes six in-depth reports, five printable field checklists and five social charts", async () => {
  const files = [
    "ucd-100-construction-container-questions.pdf",
    "ucd-20ft-vs-40ft-construction-report.pdf",
    "ucd-construction-container-buyers-handbook.pdf",
    "ucd-jobsite-container-security-playbook.pdf",
    "ucd-jobsite-delivery-placement-field-manual.pdf",
    "ucd-construction-container-data-brief.pdf",
    "ucd-construction-site-preparation-checklist.pdf",
    "ucd-construction-delivery-checklist.pdf",
    "ucd-construction-security-checklist.pdf",
    "ucd-construction-weekly-inspection-checklist.pdf",
    "ucd-construction-buying-checklist.pdf",
  ];

  await Promise.all(files.map((file) => access(new URL(`../public/downloads/${file}`, import.meta.url))));

  const social = [
    "construction-container-footprint",
    "construction-container-internal-volume",
    "construction-recoverable-lost-time",
    "construction-heavy-equipment-theft",
    "construction-productivity-management",
  ];
  await Promise.all(social.flatMap((file) => ["png", "svg"].map((extension) => access(new URL(`../public/social/${file}.${extension}`, import.meta.url)))));
});

test("guide pages do not fight manual scrolling after anchor navigation", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /html \{ scroll-behavior:auto; \}/);
  assert.match(css, /\.guide-page \{ overflow-anchor:none; \}/);
});
