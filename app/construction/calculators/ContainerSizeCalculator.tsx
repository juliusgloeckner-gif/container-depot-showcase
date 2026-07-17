"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Answer = "small" | "large" | "high";

export function ContainerSizeCalculator() {
  const [access, setAccess] = useState<Answer>("small");
  const [crew, setCrew] = useState<Answer>("small");
  const [bulky, setBulky] = useState<Answer>("small");
  const [zones, setZones] = useState<Answer>("small");

  const result = useMemo(() => {
    const values = [access, crew, bulky, zones];
    const largeScore = values.filter((value) => value === "large").length;
    const highScore = values.filter((value) => value === "high").length;
    if (highScore >= 2) return { name: "40FT High Cube to verify", note: "Your answers point to bulky or vertically stored equipment. Verify the largest item, exact door opening, interior height and carrier-approved overhead envelope before selecting it." };
    if (access === "small" && largeScore < 3) return { name: "20FT Standard to verify", note: "The smaller nominal footprint may protect placement flexibility. Draw the actual item footprints, shelving and retrieval aisle before selecting it." };
    return { name: "40FT Standard to verify", note: "Your answers favor more floor area and separate zones. Verify the actual contents and obtain carrier approval for the longer placement and unload envelope." };
  }, [access, crew, bulky, zones]);

  return <div className="calculator-card">
    <div className="calculator-questions">
      <label>How constrained is the placement area?<select value={access} onChange={(event) => setAccess(event.target.value as Answer)}><option value="small">Tight or changing site</option><option value="large">Long, clear placement available</option><option value="high">Clear area with overhead room</option></select></label>
      <label>How many people or trades share the storage?<select value={crew} onChange={(event) => setCrew(event.target.value as Answer)}><option value="small">One small crew</option><option value="large">Several crews or trades</option><option value="high">Several crews with stacked stock</option></select></label>
      <label>What is the largest storage challenge?<select value={bulky} onChange={(event) => setBulky(event.target.value as Answer)}><option value="small">Hand tools and small equipment</option><option value="large">Long stock and material zones</option><option value="high">Tall or bulky equipment</option></select></label>
      <label>How much internal separation is needed?<select value={zones} onChange={(event) => setZones(event.target.value as Answer)}><option value="small">One organized tool zone</option><option value="large">Tools, material and controlled area</option><option value="high">Vertical racks plus several zones</option></select></label>
    </div>
    <div className="calculator-result" aria-live="polite"><span>Screening result only</span><h2>{result.name}</h2><p>{result.note}</p><ul><li>Measure every critical item and the exact unit opening.</li><li>Verify weights, point loads, aisle and safe retrieval.</li><li>Obtain carrier access approval and required local review.</li></ul><small>This is not a purchase recommendation. Exact contents, dimensions, weight, site, local inventory and the carrier&apos;s delivery review control.</small><Link className="button primary" href="/construction#quote-form">Verify with a specialist</Link></div>
  </div>;
}
