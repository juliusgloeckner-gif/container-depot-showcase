import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, MobileBar } from "../../SiteShell";
import { ContainerSizeCalculator } from "../ContainerSizeCalculator";

export const metadata: Metadata = { title: "Construction Container Size Education Center", description: "Compare 20FT, 40FT and 40FT High Cube containers with proportional visuals, capacity and practical jobsite uses.", robots: { index: true, follow: true }, alternates: { canonical: "https://unitedcontainerdepot.com/construction/calculators/container-size" } };

export default function SizeCalculatorPage() {
  return <main className="calculator-page"><Header /><div className="guide-topbar"><div className="wrap"><Link href="/construction">Construction containers</Link><span>/</span><Link href="/construction#construction-guides">Resource center</Link><span>/</span><b>Size education center</b></div></div><header className="calculator-hero"><div className="wrap"><span className="eyebrow dark">Container size education center</span><h1>Choose a size. See the space. Know what it is for.</h1><p>Select 20FT, 40FT or 40FT High Cube. The proportional visual, capacity and common jobsite uses update immediately. Your choice then carries into the real quote form.</p></div></header><section className="section"><div className="wrap"><ContainerSizeCalculator /><div className="calculator-followup"><h2>Three checks before delivery</h2><div><p><b>Measure the actual contents.</b> Include attachments, packaging, cargo-door clearance and the aisle needed to retrieve equipment.</p><p><b>Measure the site.</b> The container footprint is smaller than the truck&apos;s required approach and unloading zone.</p><p><b>Confirm the exact unit.</b> Interior dimensions, door opening, condition and delivered price depend on nearby inventory.</p></div></div></div></section><Footer /><MobileBar /></main>;
}
