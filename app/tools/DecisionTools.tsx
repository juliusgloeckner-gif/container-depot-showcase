"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const currency = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);
const safeNumber = (raw: string) => Math.max(0, Number(raw) || 0);

export function DeliveredCostCalculator() {
  const [values, setValues] = useState({ unit: 0, delivery: 0, prep: 0, modifications: 0, tax: 0, permits: 0, contingency: 0 });
  const total = Object.values(values).reduce((sum, value) => sum + value, 0);
  const update = (key: keyof typeof values, raw: string) => setValues((current) => ({ ...current, [key]: safeNumber(raw) }));
  const fields: Array<[keyof typeof values, string, string]> = [
    ["unit", "Written container price", "Exact unit and condition grade"],
    ["delivery", "Delivery and placement", "Carrier quote to the delivery ZIP"],
    ["prep", "Site preparation", "Gravel, blocking, drainage or access work"],
    ["modifications", "Modifications", "Shelving, lockbox, vents, power or approved fabrication"],
    ["tax", "Tax", "Use the amount shown on the written quote"],
    ["permits", "Permits and professional review", "Local requirements, if applicable"],
    ["contingency", "Planning contingency", "Optional amount for unresolved scope"],
  ];
  return <div className="decision-tool cost-tool"><section className="tool-input-panel"><div className="tool-panel-heading"><span>01</span><div><h2>Enter written costs</h2><p>No invented mileage rate or generic national price is used.</p></div></div>{fields.map(([key, label, help]) => <label className="tool-money-input" key={key}><span><b>{label}</b><small>{help}</small></span><i>$</i><input inputMode="decimal" type="number" min="0" value={values[key] || ""} placeholder="0" onChange={(event) => update(key, event.target.value)} /></label>)}</section><aside className="tool-result-panel"><span className="eyebrow">Scenario total</span><strong>{currency(total)}</strong><dl>{fields.filter(([key]) => values[key] > 0).map(([key, label]) => <div key={key}><dt>{label}</dt><dd>{currency(values[key])}</dd></div>)}</dl><p>This is arithmetic from your inputs, not a quote. Final price depends on the exact unit, local inventory, tax, carrier route and approved placement.</p><Link className="button primary" href="/?quote=1#quote-form">Request the actual delivered price</Link></aside></div>;
}

export function DeliveryClearanceChecker() {
  const [size, setSize] = useState<"20" | "40">("20");
  const [approach, setApproach] = useState(80);
  const [width, setWidth] = useState(12);
  const [height, setHeight] = useState(14);
  const [firm, setFirm] = useState(true);
  const [straight, setStraight] = useState(true);
  const minimum = size === "20" ? 80 : 120;
  const checks = [
    { label: "Straight approach", actual: `${approach} ft`, target: `screen at ${minimum}+ ft`, pass: approach >= minimum },
    { label: "Clear width", actual: `${width} ft`, target: "screen at 12+ ft", pass: width >= 12 },
    { label: "Overhead clearance", actual: `${height} ft`, target: "screen at 14+ ft", pass: height >= 14 },
    { label: "Firm, reasonably level route", actual: firm ? "Confirmed" : "Not confirmed", target: "required for carrier review", pass: firm },
    { label: "No tight turn in unload line", actual: straight ? "Confirmed" : "Needs review", target: "straight unload preferred", pass: straight },
  ];
  const passed = checks.every((item) => item.pass);
  return <div className="decision-tool clearance-tool"><section className="tool-input-panel"><div className="tool-panel-heading"><span>01</span><div><h2>Screen the proposed route</h2><p>Use measured site values, not estimates from a map.</p></div></div><label className="tool-select">Container length<select value={size} onChange={(event) => setSize(event.target.value as "20" | "40")}><option value="20">20FT container</option><option value="40">40FT or 40FT High Cube</option></select></label><div className="tool-measure-grid"><label>Straight approach, ft<input type="number" min="0" value={approach} onChange={(event) => setApproach(safeNumber(event.target.value))}/></label><label>Clear width, ft<input type="number" min="0" value={width} onChange={(event) => setWidth(safeNumber(event.target.value))}/></label><label>Overhead clearance, ft<input type="number" min="0" value={height} onChange={(event) => setHeight(safeNumber(event.target.value))}/></label></div><label className="tool-check"><input type="checkbox" checked={firm} onChange={(event) => setFirm(event.target.checked)}/><span>Route and placement area are firm and reasonably level</span></label><label className="tool-check"><input type="checkbox" checked={straight} onChange={(event) => setStraight(event.target.checked)}/><span>No tight turn, gate, branch, wire or structure interrupts the unload line</span></label></section><aside className={`tool-result-panel ${passed ? "tool-pass" : "tool-review"}`}><span className="eyebrow">Screening result</span><h2>{passed ? "Ready for carrier confirmation" : "Resolve these items before scheduling"}</h2><div className="clearance-results">{checks.map((item) => <div key={item.label} className={item.pass ? "pass" : "review"}><b>{item.pass ? "Pass" : "Review"}</b><span><strong>{item.label}</strong><small>{item.actual} | {item.target}</small></span></div>)}</div><p>This is a conservative early screen, not delivery approval. Truck type, slope, soil, weather, utilities, turning geometry and the driver still control. The delivery carrier must approve the exact route and placement.</p><Link className="button primary" href="/?quote=1#quote-form">Send the site details for review</Link></aside></div>;
}

export function ConditionGradeComparison() {
  const [priority, setPriority] = useState<"appearance" | "export" | "storage" | "budget">("storage");
  const recommendation = { appearance: "One Trip", export: "Cargo Worthy with current survey and CSC confirmation", storage: "Wind and Watertight", budget: "Wind and Watertight after exact-unit inspection" }[priority];
  const grades = [
    { name: "One Trip", best: "Appearance and long ownership", facts: ["Usually one cargo trip from manufacturing origin", "Minimal wear is typical, but handling marks can remain", "Exact doors, floor, roof and seals still require inspection"] },
    { name: "Cargo Worthy", best: "Export-capable structure after current verification", facts: ["Structurally suitable for cargo transport when properly surveyed", "Export requires current certification and carrier acceptance", "Cosmetic wear is normal and does not define structural status"] },
    { name: "Wind and Watertight", best: "Stationary dry storage", facts: ["Intended to exclude normal wind and rain in stationary use", "Not the same as Cargo Worthy or export certified", "Condition, patches, doors and seals must be checked on the exact unit"] },
    { name: "As Is", best: "Repair projects only", facts: ["No weather or structural performance should be assumed", "Inspection and repair scope are essential", "Not a substitute for a graded unit when contents need protection"] },
  ];
  return <div className="condition-tool"><div className="condition-priority"><span className="eyebrow dark">What matters most?</span>{[["appearance","Clean appearance"],["export","International export"],["storage","Stationary dry storage"],["budget","Lowest responsible budget"]].map(([key,label]) => <button key={key} type="button" className={priority === key ? "active" : ""} onClick={() => setPriority(key as typeof priority)}>{label}</button>)}<p><b>Start by asking for:</b> {recommendation}</p></div><div className="grade-comparison-grid">{grades.map((grade) => <article key={grade.name}><span>{grade.best}</span><h2>{grade.name}</h2><ul>{grade.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></article>)}</div><div className="tool-verification-note"><b>Condition language is not a substitute for the exact-unit record.</b><span>Ask for current photos or inspection access, written grade, leak and door checks, and current cargo certification when export is intended.</span><Link href="/?quote=1#quote-form">Request a graded container</Link></div></div>;
}
