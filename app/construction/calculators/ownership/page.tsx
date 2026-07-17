import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, MobileBar } from "../../SiteShell";
import { OwnershipCalculator } from "../OwnershipCalculator";

export const metadata: Metadata = { title: "Construction Container Buy vs Rent Calculator", description: "Compare construction container ownership cost with monthly rental, delivery, moves, maintenance and conservative resale value.", robots: { index: true, follow: true }, alternates: { canonical: "https://unitedcontainerdepot.com/construction/calculators/ownership" } };

export default function OwnershipCalculatorPage() {
  return <main className="calculator-page"><Header /><div className="guide-topbar"><div className="wrap"><Link href="/construction">Construction containers</Link><span>/</span><Link href="/construction#construction-guides">Resource center</Link><span>/</span><b>Ownership calculator</b></div></div><header className="calculator-hero"><div className="wrap"><span className="eyebrow dark">Scenario calculator</span><h1>Compare buying with renting across the project life.</h1><p>Use the full cash picture: delivered purchase, modifications, future moves, maintenance, storage and resale compared with rent, delivery, pickup and recurring charges.</p></div></header><section className="section"><div className="wrap"><OwnershipCalculator /><div className="calculator-followup"><h2>Use three scenarios.</h2><div><p><b>Low case.</b> Short holding period, limited future use and conservative resale.</p><p><b>Base case.</b> Awarded work only, planned moves and normal maintenance.</p><p><b>High-use case.</b> Several projects with documented rental and handling costs avoided.</p></div></div></div></section><Footer /><MobileBar /></main>;
}
