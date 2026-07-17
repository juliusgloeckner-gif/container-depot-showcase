import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders all three specialty container landing pages", async () => {
  const pages = [
    ["/refrigerated-containers", /Ten days of testing/i, /Every refrigerated-container purchase includes a 10-day depot electrical testing period/i, /Get my tested-reefer quote/i],
    ["/open-side-containers", /Open the right bay/i, /two roll-up doors along the long side of a 20FT unit or four along a 40FT unit/i, /Get my configuration quote/i],
    ["/double-door-containers", /Load from either end/i, /paired ISO cargo doors at both short ends/i, /Get my configuration quote/i],
  ];
  for (const [pathname, heading, technicalCopy, quoteCopy] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, heading);
    assert.match(html, technicalCopy);
    assert.match(html, quoteCopy);
    assert.match(html, /application\/ld\+json/i);
    assert.ok((html.match(/href="#quote-form"/g) ?? []).length >= 5);
  }
});

test("separates eight use cases from three specialty container types in navigation", async () => {
  const response = await render("/");
  const html = await response.text();
  const useLinks = ["/construction", "/farm", "/business", "/moving", "/renovation", "/vehicles", "/events", "/institutions"];
  const specialtyLinks = ["/refrigerated-containers", "/open-side-containers", "/double-door-containers"];
  assert.match(html, /Shop by use/i);
  assert.match(html, /Specialty container types/i);
  for (const href of [...useLinks, ...specialtyLinks]) assert.match(html, new RegExp(`href="${href}"`, "i"));
});

test("makes moving and relocation purchase-only instead of rental-led", async () => {
  for (const pathname of ["/moving", "/relocation"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /This is a container purchase, not a rental or lease/i);
    assert.match(html, /For sale only, not rented or leased/i);
    assert.match(html, /When buying makes more sense than renting/i);
    assert.match(html, /Do you rent or lease moving containers/i);
    assert.match(html, /Buy a 20FT moving container/i);
    assert.match(html, /No monthly container rent/i);
  }
});

test("keeps reefer delivery behind the standard ten-day electrical test", async () => {
  const response = await render("/refrigerated-containers");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /10-day depot electrical testing with every purchase/i);
  assert.match(html, /detailed electrical report provided for warranty support/i);
  assert.match(html, /Testing is standard and cannot be skipped/i);
  assert.match(html, /Does a reefer deliver in the standard 5 to 10 days/i);
  assert.match(html, /Receive the report, then schedule delivery/i);
  const proof = html.match(/<section class="proof-strip">([\s\S]*?)<\/section>/i)?.[1] ?? "";
  assert.match(proof, /10 days/i);
  assert.match(proof, /depot electrical testing/i);
  assert.doesNotMatch(proof, />5 to 10</i);
});

test("keeps specialty technical claims qualified and product geometry explicit", async () => {
  const source = await readFile(new URL("../app/verticals.ts", import.meta.url), "utf8");
  const diagram = await readFile(new URL("../app/SpecialtyDiagram.tsx", import.meta.url), "utf8");
  assert.match(source, /voltage, phase, amperage, plug/i);
  assert.match(source, /performance vary by model, refrigerant, condition and ambient temperature/i);
  assert.match(source, /two roll-up doors along the long side of a 20FT container and four along the long side of a 40FT container/i);
  assert.match(source, /one pair of standard cargo doors at each short end/i);
  assert.match(source, /Both long corrugated sides remain solid/i);
  assert.match(diagram, /width="260"/);
  assert.match(diagram, /width="520"/);
  assert.match(diagram, /\[72, 183\]/);
  assert.match(diagram, /\[362, 480, 598, 716\]/);
  assert.match(diagram, /PAIRED CARGO DOORS AT BOTH SHORT ENDS/);
});

test("ships compressed project-bound visuals for every specialty page", async () => {
  const names = [
    "reefer-hero.webp", "reefer-restaurant.webp", "reefer-farm.webp", "reefer-interior.webp",
    "open-side-hero.webp", "open-side-landscape.webp", "open-side-school.webp", "open-side-interior.webp",
    "tunnel-hero.webp", "tunnel-construction.webp", "tunnel-warehouse.webp", "tunnel-interior.webp",
  ];
  await Promise.all(names.map((name) => access(new URL(`../public/specialty/${name}`, import.meta.url))));
});

test("does not add invented specialty testimonials", async () => {
  for (const pathname of ["/refrigerated-containers", "/open-side-containers", "/double-door-containers"]) {
    const response = await render(pathname);
    const html = await response.text();
    assert.doesNotMatch(html, /Buyer feedback/i);
  }
});
