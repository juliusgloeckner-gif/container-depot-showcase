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

test("renders all six specialty container landing pages", async () => {
  const pages = [
    ["/refrigerated-containers", /Ten days of testing/i, /Every refrigerated-container purchase includes a 10-day depot electrical testing period/i, /Get my tested-reefer quote/i],
    ["/open-side-containers", /Open the right bay/i, /two roll-up doors along the long side of a 20FT unit or four along a 40FT unit/i, /Get my configuration quote/i],
    ["/double-door-containers", /Load from either end/i, /paired ISO cargo doors at both short ends/i, /Get my configuration quote/i],
    ["/insulated-containers", /Slow the temperature swing/i, /does not create or guarantee a fixed temperature/i, /Get my insulated-container quote/i],
    ["/office-containers", /Put the office on site/i, /occupancy and egress reviewed/i, /Get my office-container quote/i],
    ["/hazardous-material-storage", /Design to the hazard/i, /ordinary shipping container is not automatically suitable or compliant/i, /Request configuration review/i],
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

test("separates ten popular uses from six specialty container types", async () => {
  const response = await render("/");
  const html = await response.text();
  const useLinks = ["/construction", "/farm", "/business", "/moving", "/renovation", "/vehicles", "/events", "/institutions", "/international-shipping-containers", "/disaster-relief-containers"];
  const specialtyLinks = ["/refrigerated-containers", "/open-side-containers", "/double-door-containers", "/insulated-containers", "/office-containers", "/hazardous-material-storage"];
  assert.match(html, /Popular uses/i);
  assert.match(html, /Specialty containers/i);
  for (const href of [...useLinks, ...specialtyLinks]) assert.match(html, new RegExp(`href="${href}"`, "i"));
  assert.equal(new Set([...useLinks, ...specialtyLinks]).size, 16);
  assert.match(html, /<link rel="canonical" href="https:\/\/unitedcontainerdepot\.com\/"/i);
  assert.doesNotMatch(html, /juliusgloeckner-gif\.github\.io/i);
});

test("classifies international shipping as a popular use and keeps freight scope explicit", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const useSection = source.match(/const uses = \[([\s\S]*?)\n\];/)?.[1] ?? "";
  const specialtySection = source.match(/const specialtyTypes = \[([\s\S]*?)\n\];/)?.[1] ?? "";
  assert.match(useSection, /International Shipping & Export/);
  assert.doesNotMatch(specialtySection, /International Shipping/);
});

test("keeps international shipping scope on the container and hands freight to a forwarder", async () => {
  const response = await render("/international-shipping-containers");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Purchase the container with no rental packing deadline/i);
  assert.match(html, /CSC Safety Approval Plate and current examination status/i);
  assert.match(html, /United Container Depot is not a freight forwarder/i);
  assert.match(html, /Does CSC status guarantee that a shipping line will accept my container/i);
  assert.match(html, /No\. CSC status addresses container structural safety/i);
  assert.match(html, /A licensed freight forwarder must arrange ocean or international transport/i);
  assert.match(html, /10-day depot electrical test/i);
  assert.match(html, /does not replace any carrier-required pre-trip inspection/i);
  assert.match(html, /United Container Depot does not approve cargo or imply affiliation with any charity/i);
  assert.match(html, /ONE CONTAINER\. TWO CLEAR RESPONSIBILITIES/i);
  assert.match(html, /UCD: CONTAINER \+ DEPOT INSPECTION/i);
  assert.doesNotMatch(html, /PAIRED CARGO DOORS AT BOTH SHORT ENDS/i);
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
  assert.match(html, /Fresh produce/i);
  assert.match(html, /Pharmaceuticals and biologics/i);
  assert.match(html, /exact-unit qualification, temperature mapping and monitoring/i);
});

test("shows a diversified reefer use mosaic without implying product validation", async () => {
  const response = await render("/refrigerated-containers");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const use of [
    "Pharmaceuticals and biologics",
    "Laboratory reagents and diagnostics",
    "Sensitive electronic components",
    "Art and archival materials",
    "Approved temperature-sensitive industrial materials",
  ]) assert.match(html, new RegExp(use, "i"));
  assert.match(html, /does not by itself validate storage for a particular product/i);
  assert.match(html, /exact-unit qualification, temperature mapping and monitoring/i);
  assert.match(html, /reefer-use-mosaic-v2\.webp/i);
});

test("shows all eight business-overflow audiences with visual tiles", async () => {
  const response = await render("/business");
  const html = await response.text();
  for (const label of ["Retail stores", "Restaurants", "Manufacturers", "Warehouses", "Distributors", "Service businesses", "Offices", "Auto dealerships"]) {
    assert.match(html, new RegExp(label, "i"));
  }
  for (const image of ["business-manufacturer-v2.webp", "business-distributor-v2.webp", "business-auto-v2.webp", "office-20ft-v2.webp"]) {
    assert.match(html, new RegExp(image.replaceAll(".", "\\."), "i"));
  }
});

test("keeps safety-sensitive specialty pages qualified", async () => {
  const insulatedHtml = await (await render("/insulated-containers")).text();
  assert.match(insulatedHtml, /Insulation slows heat transfer/i);
  assert.match(insulatedHtml, /does not actively cool the space or guarantee a temperature/i);
  const officeHtml = await (await render("/office-containers")).text();
  assert.match(officeHtml, /Local building, zoning, fire, electrical, accessibility and workplace requirements/i);
  assert.match(officeHtml, /clear exit route/i);
  const hazmatHtml = await (await render("/hazardous-material-storage")).text();
  assert.match(hazmatHtml, /standard container may lack the required ventilation, containment, electrical design/i);
  assert.match(hazmatHtml, /Provide current safety data sheets/i);
  assert.match(hazmatHtml, /Does adding vents make a container compliant/i);
});

test("builds disaster relief around logistics and responsible inventory control", async () => {
  const response = await render("/disaster-relief-containers");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Stage it securely/i);
  assert.match(html, /water, blankets, tarps, PPE and recovery tools/i);
  assert.match(html, /A dry or insulated container is not a medical cold-chain unit/i);
  assert.match(html, /United Container Depot sells and delivers container capacity/i);
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

test("ships project-bound visuals for every new page and use-case mosaic", async () => {
  const names = [
    "reefer-hero.webp", "reefer-restaurant.webp", "reefer-farm.webp", "reefer-interior.webp",
    "open-side-hero.webp", "open-side-landscape.webp", "open-side-school.webp", "open-side-interior.webp",
    "tunnel-hero.webp", "tunnel-construction.webp", "tunnel-warehouse.webp", "tunnel-interior.webp",
    "export-retirement-relocation-v1.webp", "export-young-relocation-v1.webp", "export-humanitarian-v1.webp",
    "reefer-use-mosaic-v1.webp", "reefer-use-mosaic-v2.webp", "business-overflow-mosaic-v1.webp", "disaster-relief-hero-v1.webp",
    "insulated-container-hero-v1.webp", "office-container-hero-v1.webp", "hazmat-container-hero-v1.webp",
  ];
  await Promise.all(names.map((name) => access(new URL(`../public/specialty/${name}`, import.meta.url))));
});

test("ships the mobile-first authentic hero set and references every file", async () => {
  const names = [
    "construction-hero-v2.webp", "farm-hero-v3.webp", "business-hero-v2.webp",
    "moving-hero-v2.webp", "vehicles-hero-v2.webp", "events-hero-v2.webp",
    "export-hero-v2.webp", "open-side-hero-v2.webp", "office-hero-v2.webp",
    "disaster-relief-hero-v2.webp", "hazmat-hero-v2.webp",
  ];
  const source = `${await readFile(new URL("../app/verticals.ts", import.meta.url), "utf8")}\n${await readFile(new URL("../app/knowledge/knowledge-data.json", import.meta.url), "utf8")}`;
  await Promise.all(names.map((name) => access(new URL(`../public/authentic/${name}`, import.meta.url))));
  for (const name of names) assert.match(source, new RegExp(`/authentic/${name.replaceAll(".", "\\.")}`));
});

test("shows a contextual quote reminder on every standard use-case page", async () => {
  const pages = [
    ["/construction", /Already know your ZIP and preferred size/i],
    ["/farm", /Tell us your ZIP and what you need to protect/i],
    ["/business", /Tell us your ZIP and what you need to protect/i],
    ["/moving", /Tell us your ZIP and what you need to protect/i],
    ["/renovation", /Tell us your ZIP and what you need to protect/i],
    ["/vehicles", /Tell us your ZIP and what you need to protect/i],
    ["/events", /Tell us your ZIP and what you need to protect/i],
    ["/institutions", /Tell us your ZIP and what you need to protect/i],
  ];
  for (const [pathname, reminder] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /class="scroll-quote-strip"/i, pathname);
    assert.match(html, reminder, pathname);
    assert.match(html, /href="#quote-form"/i, pathname);
  }
});

test("keeps the quote form low-friction and connected to Formspree", async () => {
  const response = await render("/farm");
  const html = await response.text();
  assert.match(html, /action="https:\/\/formspree\.io\/f\/mvzepnvd"/i);
  assert.match(html, /No payment\. No obligation\. No spam\./i);
});

test("uses distinct, accurate specialty inventory images without encoding artifacts", async () => {
  const tunnelHtml = await (await render("/double-door-containers")).text();
  assert.match(tunnelHtml, /tunnel-high-cube-v3\.webp/i);
  assert.doesNotMatch(tunnelHtml, /â†’/i);

  const insulatedHtml = await (await render("/insulated-containers")).text();
  assert.match(insulatedHtml, /insulated-monitored-interior-v2\.webp/i);
  assert.doesNotMatch(insulatedHtml, /â†’/i);
});

test("does not add invented specialty testimonials", async () => {
  for (const pathname of ["/refrigerated-containers", "/open-side-containers", "/double-door-containers", "/insulated-containers", "/office-containers", "/hazardous-material-storage", "/international-shipping-containers", "/disaster-relief-containers"]) {
    const response = await render(pathname);
    const html = await response.text();
    assert.doesNotMatch(html, /Buyer feedback/i);
  }
});

test("menu details close on navigation, outside click and Escape", async () => {
  const source = await readFile(new URL("../app/AutoClosingDetails.tsx", import.meta.url), "utf8");
  assert.match(source, /usePathname/);
  assert.match(source, /removeAttribute\("open"\)/);
  assert.match(source, /pointerdown/);
  assert.match(source, /event\.key === "Escape"/);
  assert.match(source, /closest\("a"\)/);
});
