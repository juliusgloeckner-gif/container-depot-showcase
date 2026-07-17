import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, MobileBar } from "../../SiteShell";
import { ContainerSizeCalculator } from "../ContainerSizeCalculator";

export const metadata: Metadata = { title: "Construction Container Size Selector", description: "Choose a practical construction container size from site access, crew count, equipment and storage zones.", robots: { index: true, follow: true }, alternates: { canonical: "https://unitedcontainerdepot.com/construction/calculators/container-size" } };

export default function SizeCalculatorPage() {
  return <main className="calculator-page"><Header /><div className="guide-topbar"><div className="wrap"><Link href="/construction">Construction containers</Link><span>/</span><Link href="/construction#construction-guides">Resource center</Link><span>/</span><b>Size selector</b></div></div><header className="calculator-hero"><div className="wrap"><span className="eyebrow dark">Interactive planning tool</span><h1>Which construction container size fits the way your site works?</h1><p>Answer four operational questions. The result is a planning starting point, followed by the access checks that must happen before delivery.</p></div></header><section className="section"><div className="wrap"><ContainerSizeCalculator /><div className="calculator-followup"><h2>Before you order</h2><div><p><b>Measure the actual contents.</b> Include attachments, packaging, door clearance and the aisle needed to retrieve equipment.</p><p><b>Measure the site.</b> The placement footprint is smaller than the truck’s required approach and unloading zone.</p><p><b>Confirm current inventory.</b> Size, condition and delivery price depend on the nearest suitable unit.</p></div></div></div></section><Footer /><MobileBar /></main>;
}
