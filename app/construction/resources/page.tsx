import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, MobileBar } from "../SiteShell";
import { guideCategories, guides } from "../guide-data";
import { ResourceExplorer } from "./ResourceExplorer";

export const metadata: Metadata = {
  title: "Construction Container Resource Center",
  description: "Practical construction container guides, calculators, diagrams, checklists and contractor answers for planning, delivery, security and ownership.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unitedcontainerdepot.com/construction/resources" },
};

const downloads = [
  { title: "Construction Container Buyer’s Handbook", description: "Size, condition, delivery and purchase decisions in one illustrated field guide.", file: "/downloads/ucd-construction-container-buyers-handbook.pdf", pages: "Guide" },
  { title: "Delivery and Placement Field Manual", description: "Truck approach, bearing points, clearance, door orientation and acceptance.", file: "/downloads/ucd-jobsite-delivery-placement-field-manual.pdf", pages: "Manual" },
  { title: "Jobsite Security Playbook", description: "Layered theft prevention, lock hardware, lighting and nightly closeout.", file: "/downloads/ucd-jobsite-container-security-playbook.pdf", pages: "Playbook" },
  { title: "20FT vs 40FT Comparison Report", description: "Capacity, access, retrieval and total delivered-cost tradeoffs.", file: "/downloads/ucd-20ft-vs-40ft-construction-report.pdf", pages: "Report" },
  { title: "100 Construction Container Questions", description: "A printable contractor reference organized into ten practical topics.", file: "/downloads/ucd-100-construction-container-questions.pdf", pages: "Handbook" },
  { title: "Construction Container Data Brief", description: "Five source-backed charts for sizing, capacity, field workflow, theft exposure and management.", file: "/downloads/ucd-construction-container-data-brief.pdf", pages: "Data brief" },
];

export default function ResourcesPage() {
  return (
    <main className="resource-page">
      <Header />
      <div className="guide-topbar"><div className="wrap"><Link href="/construction">Construction containers</Link><span>/</span><b>Resource center</b></div></div>

      <header className="resource-hero">
        <div className="wrap resource-hero-grid">
          <div>
            <span className="eyebrow">Construction Resource Center</span>
            <h1>Field answers you can use before the truck reaches the gate.</h1>
            <p>Built for superintendents, project managers and trade contractors. Start with a question, use the diagram or checklist, then confirm the actual site and delivered scope.</p>
            <div className="resource-hero-actions"><a className="button primary" href="#all-guides">Find a field guide</a><Link className="button outline-light" href="/construction?quote=1#quote-form">Get delivered price</Link></div>
          </div>
          <figure>
            <Image src="/storage-tools2.jpg" alt="Construction tools organized inside a jobsite storage container" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
            <figcaption><strong>32</strong><span>practical field guides</span><strong>100</strong><span>contractor questions</span></figcaption>
          </figure>
        </div>
      </header>

      <section className="resource-paths section">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Start with the next decision</span><h2>Three fast ways into the library.</h2></div><p>The resource center supports a purchase decision. If you already know the size and ZIP, go directly to the quote.</p></div>
          <div className="resource-path-grid">
            <Link href="/construction/calculators/container-size"><span>01</span><h3>Compare container sizes</h3><p>See proportional 20FT, 40FT and High Cube visuals, capacity and common jobsite uses.</p><b>Open size education center</b></Link>
            <Link href="/construction/guides/container-site-preparation"><span>02</span><h3>Prepare the site</h3><p>Plan approach, bearing points, drainage and door swing.</p><b>Open delivery guide →</b></Link>
            <Link href="/construction/guides/construction-site-theft-prevention"><span>03</span><h3>Secure the tools</h3><p>Layer placement, hardware, cameras and nightly closeout.</p><b>Open security guide →</b></Link>
            <Link href="/construction/questions"><span>100</span><h3>Ask a direct question</h3><p>Search ten contractor topics and follow the deeper guide.</p><b>Search questions →</b></Link>
          </div>
        </div>
      </section>

      <section className="resource-data-spotlight">
        <div className="wrap resource-data-spotlight-grid">
          <figure><Image src="/social/construction-recoverable-lost-time.png" alt="Recoverable lost time construction data graphic" fill sizes="(max-width: 800px) 100vw, 38vw" /></figure>
          <div><span className="eyebrow">New source-backed resource</span><h2>Construction storage by the numbers.</h2><p>Compare container footprint and internal volume, then put the decision in context with FMI productivity findings and National Equipment Register theft estimates.</p><ul><li>Five accessible charts</li><li>Primary-source links and limitations</li><li>Square PNG and SVG downloads for social media</li></ul><div><Link className="button primary" href="/construction/resources/construction-container-statistics">Open the data brief</Link><Link className="button outline-light" href="/construction?quote=1#quote-form">Get delivered price</Link></div></div>
        </div>
      </section>

      <section className="section resource-library" id="all-guides">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Complete guide library</span><h2>Find the exact jobsite problem.</h2></div><p>Filter by topic or search the language your crew uses. Every guide links to related decisions, downloads and a delivered-price request.</p></div>
          <ResourceExplorer guides={guides} categories={guideCategories.map(({ key, name }) => ({ key, name }))} />
        </div>
      </section>

      <section className="section resource-downloads" id="downloads">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Downloadable field library</span><h2>Print it. Mark it up. Take it to the site.</h2></div><p>Six substantial contractor resources plus the original single-page checklists for mobilization and weekly control.</p></div>
          <div className="report-grid">{downloads.map((item, index) => <a href={item.file} download key={item.file}><div><span>{String(index + 1).padStart(2, "0")}</span><em>{item.pages}</em></div><h3>{item.title}</h3><p>{item.description}</p><b>Download PDF ↓</b></a>)}</div>
          <div className="checklist-row">
            <a href="/downloads/ucd-construction-site-preparation-checklist.pdf" download>Site preparation checklist <span>PDF ↓</span></a>
            <a href="/downloads/ucd-construction-delivery-checklist.pdf" download>Delivery day checklist <span>PDF ↓</span></a>
            <a href="/downloads/ucd-construction-security-checklist.pdf" download>Security checklist <span>PDF ↓</span></a>
            <a href="/downloads/ucd-construction-weekly-inspection-checklist.pdf" download>Weekly inspection <span>PDF ↓</span></a>
          </div>
        </div>
      </section>

      <section className="resource-conversion-cta"><div className="wrap"><div><span className="eyebrow">Ready to price the container?</span><h2>Turn the plan into one delivered number.</h2><p>Send the delivery ZIP, size and jobsite use. A specialist will match nearby inventory and review access.</p></div><div><Link className="button primary" href="/construction?quote=1#quote-form">Get my delivered price</Link><a href="tel:18555250902">Call (855) 525-0902</a></div></div></section>
      <Footer /><MobileBar />
    </main>
  );
}
