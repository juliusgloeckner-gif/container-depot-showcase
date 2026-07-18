"use client";

import Link from "next/link";
import { useState } from "react";

type SizeKey = "20ft" | "40ft" | "high-cube";
type ProfileKey = "construction" | "farm" | "business" | "vehicles";

type SizeChoice = {
  key: SizeKey;
  name: string;
  quoteValue: string;
  length: string;
  height: string;
  footprint: string;
  volume: string;
  width: number;
  bodyHeight: number;
};

const sizes: SizeChoice[] = [
  { key: "20ft", name: "20FT Standard", quoteValue: "20FT Standard", length: "20FT", height: "8FT 6IN", footprint: "160 sq ft", volume: "1,172 cu ft", width: 250, bodyHeight: 106 },
  { key: "40ft", name: "40FT Standard", quoteValue: "40FT Standard", length: "40FT", height: "8FT 6IN", footprint: "320 sq ft", volume: "2,390 cu ft", width: 500, bodyHeight: 106 },
  { key: "high-cube", name: "40FT High Cube", quoteValue: "40FT High Cube", length: "40FT", height: "9FT 6IN", footprint: "320 sq ft", volume: "2,694 cu ft", width: 500, bodyHeight: 119 },
];

const fitByProfile: Record<ProfileKey, Record<SizeKey, { summary: string; uses: string[]; verify: string }>> = {
  construction: {
    "20ft": { summary: "A compact jobsite store when placement is tight and one crew needs fast access.", uses: ["Power tools and consumables", "One crew or trade", "Shorter urban or infill sites"], verify: "Confirm the tool layout, shelving depth and retrieval aisle. The delivery truck still needs more working room than the container footprint." },
    "40ft": { summary: "Twice the nominal floor area for long stock, shared equipment and separate work zones.", uses: ["Several crews or trades", "Long material and pallet zones", "Tools plus controlled inventory"], verify: "Confirm a straight truck approach, the full unload envelope and enough room to keep the cargo doors useful after placement." },
    "high-cube": { summary: "The 40FT footprint with one additional exterior foot for tall equipment and vertical storage.", uses: ["Tall or bulky equipment", "High shelving and stacked stock", "Maximum dry volume on a 40FT pad"], verify: "Confirm the exact interior height and door opening. High Cube height does not solve width, weight, aisle or delivery-clearance limits." },
  },
  farm: {
    "20ft": { summary: "Compact storage beside a barn or shop for everyday supplies and smaller equipment.", uses: ["Hand tools and fencing supplies", "Animal-health products kept in approved storage", "One organized maintenance zone"], verify: "Separate feed, seed, pesticides, fertilizer, fuel and batteries according to their own storage requirements." },
    "40ft": { summary: "More floor area for palletized supplies, seasonal stock and multiple farm work zones.", uses: ["Feed or seed in suitable packaged storage", "Seasonal equipment and implements", "Bulk fencing and maintenance stock"], verify: "Confirm ground bearing, drainage, truck access and the storage requirements of every agricultural product before loading." },
    "high-cube": { summary: "A 40FT unit with additional height for bulky attachments and taller organized storage.", uses: ["Tall tractor attachments", "Stacked packaged supplies", "High shelving for seasonal inventory"], verify: "Verify exact openings and equipment dimensions. Do not mix incompatible chemicals or sensitive agricultural products." },
  },
  business: {
    "20ft": { summary: "A compact overflow room for businesses with limited rear-lot or side-lot space.", uses: ["Records and fixtures", "Service tools and parts", "Focused retail or restaurant overflow"], verify: "Check landlord, fire-access, zoning and property requirements before selecting the placement area." },
    "40ft": { summary: "Twice the nominal floor area for pallets, packaging and high-volume reserve inventory.", uses: ["Palletized warehouse overflow", "Retail and seasonal stock", "Restaurant furniture or packaging"], verify: "Plan inventory rotation and retrieval aisles. A full container with poor access is not useful operating capacity." },
    "high-cube": { summary: "Additional height for tall racking, bulky fixtures and stacked dry inventory.", uses: ["Tall commercial shelving", "Bulky displays and fixtures", "High-volume seasonal reserve"], verify: "Confirm exact interior and door dimensions, load limits, ventilation needs and any fire-code implications." },
  },
  vehicles: {
    "20ft": { summary: "A compact option for one suitably sized vehicle, motorcycles or focused recreational gear.", uses: ["One compact classic car", "Motorcycles or dirt bikes", "ATVs and riding equipment"], verify: "Measure the vehicle, mirrors, cargo-door opening, ramp angle and safe driver exit space before choosing a unit." },
    "40ft": { summary: "More working room for mixed vehicles, parts and four seasons of recreational equipment.", uses: ["Vehicle plus parts and tools", "Kayaks, bicycles and camping gear", "Several motorcycles or ATVs"], verify: "Plan ramps, tire stops, ventilation, moisture control and local fire rules for fuel and batteries." },
    "high-cube": { summary: "Extra height for tall recreational equipment and organized vertical gear storage.", uses: ["Tall racks for seasonal gear", "Bulky recreational equipment", "Mixed vehicle and overhead storage"], verify: "Extra container height does not guarantee vehicle entry. The cargo-door opening and exact vehicle dimensions still control." },
  },
};

export function SizeEducationTool({ profile = "construction", quotePath = "/construction" }: { profile?: ProfileKey; quotePath?: string }) {
  const [selectedKey, setSelectedKey] = useState<SizeKey>("20ft");
  const selected = sizes.find((size) => size.key === selectedKey) ?? sizes[0];
  const fit = fitByProfile[profile][selected.key];
  const x = (620 - selected.width) / 2;
  const y = 190 - selected.bodyHeight;
  const quoteHref = `${quotePath}?size=${encodeURIComponent(selected.quoteValue)}#quote-form`;

  return <div className="size-education-tool">
    <div className="size-choice-row" role="group" aria-label="Choose a container size to compare">
      {sizes.map((size) => <button key={size.key} type="button" className={selected.key === size.key ? "size-choice active" : "size-choice"} aria-pressed={selected.key === size.key} onClick={() => setSelectedKey(size.key)}><span>{size.name}</span><small>{size.footprint}{size.key === "high-cube" ? " + extra height" : " nominal"}</small></button>)}
    </div>

    <div className="size-education-stage">
      <figure className="size-education-visual">
        <figcaption><span>Selected size</span><strong>{selected.name}</strong></figcaption>
        <svg viewBox="0 0 620 275" role="img" aria-label={`${selected.name} proportional side view, ${selected.length} long and ${selected.height} high`}>
          <rect width="620" height="275" fill="#e8edf0" />
          <line x1="34" y1="218" x2="586" y2="218" stroke="#9baab5" strokeWidth="4" />
          <g className="size-container-body">
            <rect x={x} y={y} width={selected.width} height={selected.bodyHeight} fill="#34495b" stroke="#081421" strokeWidth="6" />
            {Array.from({ length: selected.key === "20ft" ? 10 : 20 }, (_, index) => <line key={index} x1={x + ((index + 1) * selected.width) / (selected.key === "20ft" ? 11 : 21)} y1={y + 7} x2={x + ((index + 1) * selected.width) / (selected.key === "20ft" ? 11 : 21)} y2={y + selected.bodyHeight - 7} stroke="#657887" strokeWidth="2" />)}
            <rect x={x + selected.width - 15} y={y + 5} width="10" height={selected.bodyHeight - 10} fill="#f26a18" />
          </g>
          <path d={`M${x} 238h${selected.width}M${x} 230v16M${x + selected.width} 230v16`} stroke="#d85109" strokeWidth="4" />
          <text x="310" y="266" textAnchor="middle" className="size-svg-label">{selected.length} NOMINAL LENGTH</text>
          <path d={`M${x - 22} ${y}v${selected.bodyHeight}M${x - 30} ${y}h16M${x - 30} ${y + selected.bodyHeight}h16`} stroke="#2c6a45" strokeWidth="4" />
          <text x={Math.max(58, x - 45)} y={y + selected.bodyHeight / 2} textAnchor="middle" transform={`rotate(-90 ${Math.max(58, x - 45)} ${y + selected.bodyHeight / 2})`} className="size-svg-label">{selected.height}</text>
        </svg>
        <small>Relative exterior proportions. Verify the exact unit and cargo-door opening before purchase.</small>
      </figure>

      <section className="size-education-detail" aria-live="polite">
        <span className="eyebrow dark">What this size is for</span>
        <h2>{selected.name}</h2>
        <p className="size-education-summary">{fit.summary}</p>
        <dl className="size-fact-grid"><div><dt>Length</dt><dd>{selected.length}</dd></div><div><dt>Footprint</dt><dd>{selected.footprint}</dd></div><div><dt>Representative volume</dt><dd>{selected.volume}</dd></div></dl>
        <h3>Common fit</h3>
        <ul>{fit.uses.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="size-verification"><b>Verify before delivery:</b> {fit.verify}</p>
        <Link className="button primary" href={quoteHref}>Choose {selected.name} and get delivered price</Link>
        <small>Your size carries into the quote form. You can still change it there.</small>
      </section>
    </div>
  </div>;
}
