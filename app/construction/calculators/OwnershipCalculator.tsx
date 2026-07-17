"use client";

import { useMemo, useState } from "react";

function money(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);
}

export function OwnershipCalculator() {
  const [purchase, setPurchase] = useState(4490);
  const [delivery, setDelivery] = useState(650);
  const [mods, setMods] = useState(750);
  const [moves, setMoves] = useState(1);
  const [moveCost, setMoveCost] = useState(650);
  const [maintenance, setMaintenance] = useState(300);
  const [resale, setResale] = useState(2500);
  const [months, setMonths] = useState(18);
  const [rent, setRent] = useState(225);
  const [rentalTransport, setRentalTransport] = useState(900);

  const totals = useMemo(() => {
    const ownership = purchase + delivery + mods + moves * moveCost + maintenance - resale;
    const rental = months * rent + rentalTransport;
    return { ownership, rental, difference: rental - ownership };
  }, [purchase, delivery, mods, moves, moveCost, maintenance, resale, months, rent, rentalTransport]);

  const update = (setter: (value: number) => void) => (raw: string) => setter(Math.max(0, Number(raw) || 0));
  const input = (label: string, value: number, setter: (value: number) => void) => <label>{label}<span>$</span><input type="number" min="0" value={value} onChange={(event) => update(setter)(event.target.value)} /></label>;

  return <div className="ownership-calculator">
    <div className="ownership-inputs">
      <section><h2>Ownership assumptions</h2><p className="calculator-assumption-note">Example inputs only. Replace every field with written project quotes.</p>{input("Container purchase price", purchase, setPurchase)}{input("Delivery and site preparation", delivery, setDelivery)}{input("Modifications", mods, setMods)}<label>Planned future moves<span>#</span><input type="number" min="0" value={moves} onChange={(event) => update(setMoves)(event.target.value)} /></label>{input("Cost per future move", moveCost, setMoveCost)}{input("Maintenance and storage", maintenance, setMaintenance)}{input("Conservative resale value", resale, setResale)}</section>
      <section><h2>Rental comparison</h2><p className="calculator-assumption-note">Use the same duration and complete transport scope.</p><label>Months needed<span>#</span><input type="number" min="1" value={months} onChange={(event) => setMonths(Math.max(1, Number(event.target.value) || 1))} /></label>{input("Monthly rent", rent, setRent)}{input("Delivery, pickup and fees", rentalTransport, setRentalTransport)}</section>
    </div>
    <div className="ownership-result" aria-live="polite"><div><span>Scenario ownership cost</span><strong>{money(totals.ownership)}</strong></div><div><span>Scenario rental cost</span><strong>{money(totals.rental)}</strong></div><p className={totals.difference >= 0 ? "positive" : "negative"}>{totals.difference >= 0 ? `Ownership is lower by ${money(totals.difference)} in this input scenario.` : `Rental is lower by ${money(Math.abs(totals.difference))} in this input scenario.`}</p><small>Arithmetic only, not a quote or financial recommendation. Replace every example input. Taxes, financing, damage, permits, actual transport, storage and resale may differ.</small></div>
  </div>;
}
