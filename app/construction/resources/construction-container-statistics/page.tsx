import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, MobileBar } from "../../SiteShell";
import { DataGraphics, dataSources } from "../../ConstructionDataVisuals";

export const metadata: Metadata = {
  title: "Construction Container Statistics: Size, Capacity, Theft and Productivity",
  description: "A source-backed construction container data brief covering 20FT and 40FT footprint, internal volume, recoverable lost time, heavy equipment theft and labor productivity.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unitedcontainerdepot.com/construction/resources/construction-container-statistics" },
  openGraph: {
    title: "Construction Container Data Brief",
    description: "Five source-backed charts for construction storage planning, security and field operations.",
    images: ["/social/construction-container-internal-volume.png"],
  },
};

const stories = [
  {
    id: "footprint",
    kicker: "Sizing decision",
    title: "40FT provides twice the nominal exterior footprint of 20FT.",
    statistic: "160 vs 320 sq ft",
    explanation: "The nominal exterior footprint is calculated from each size name and the standard eight-foot width. It is useful for early site planning, but the unloading zone, cargo-door swing and access route require additional space.",
    takeaway: "A 20FT container may be the better operational choice when gate width, turning space or phased site congestion controls placement.",
    Graphic: DataGraphics.Footprint,
    sources: [
      { label: "Hapag-Lloyd 20FT standard specification", href: dataSources.twenty },
      { label: "Hapag-Lloyd 40FT standard specification", href: dataSources.forty },
    ],
    asset: "construction-container-footprint",
  },
  {
    id: "volume",
    kicker: "Capacity decision",
    title: "High Cube adds height without increasing the 40FT footprint.",
    statistic: "2,694 cu ft",
    explanation: "Hapag-Lloyd lists representative internal capacities of 1,172 cubic feet for a 20FT standard, 2,390 cubic feet for a 40FT standard and 2,694 cubic feet for a 40FT High Cube. The High Cube figure is about 12.7% greater than the 40FT standard figure.",
    takeaway: "Choose High Cube when vertical clearance, stacked stock or tall equipment drives the requirement. Confirm exact unit and door dimensions before purchase.",
    Graphic: DataGraphics.Volume,
    sources: [
      { label: "Hapag-Lloyd 20FT standard specification", href: dataSources.twenty },
      { label: "Hapag-Lloyd 40FT standard specification", href: dataSources.forty },
      { label: "Hapag-Lloyd 40FT High Cube specification", href: dataSources.highCube },
    ],
    asset: "construction-container-internal-volume",
  },
  {
    id: "lost-time",
    kicker: "Field workflow",
    title: "FMI found approximately 32% recoverable lost time on active construction sites.",
    statistic: "32%",
    explanation: "FMI defines recoverable lost time to include rework, waiting for materials, tools, information or access, looking for material, and unplanned delays. Organized point-of-use storage can address a narrow part of that problem, but it cannot eliminate the entire 32%.",
    takeaway: "Use the container as a controlled work zone: label locations, keep a retrieval aisle, assign a closer and replenish against the look-ahead plan.",
    Graphic: DataGraphics.LostTime,
    sources: [{ label: "FMI, Stopping Supply Chain Risks from Impacting the Field", href: dataSources.lostTime }],
    asset: "construction-recoverable-lost-time",
  },
  {
    id: "theft",
    kicker: "Security exposure",
    title: "NER estimates $300 million to $1 billion in heavy equipment is stolen each year.",
    statistic: "$300M to $1B",
    explanation: "The National Equipment Register presents this as an estimated annual range for heavy equipment theft. It is not a count of theft from shipping containers, and a container alone does not remove the risk.",
    takeaway: "Layer placement, protected locking hardware, lighting, camera coverage, inventory control and a named nightly closer.",
    Graphic: DataGraphics.Theft,
    sources: [{ label: "National Equipment Register theft prevention and recovery solutions", href: dataSources.theft }],
    asset: "construction-heavy-equipment-theft",
  },
  {
    id: "productivity",
    kicker: "Management opportunity",
    title: "79% of contractors could improve labor productivity by at least 6% with better management.",
    statistic: "79%",
    explanation: "FMI's 2023 labor productivity study also found that three of the top four internal productivity factors were related to planning, communication and collaboration. Storage is only one operating system inside that wider management opportunity.",
    takeaway: "Make storage visible in the weekly plan: responsible person, delivery dates, minimum stock, retrieval zones and closeout exceptions.",
    Graphic: DataGraphics.Productivity,
    sources: [{ label: "FMI, Construction Labor Productivity: The $20 Billion Opportunity", href: dataSources.productivity }],
    asset: "construction-productivity-management",
  },
] as const;

const faq = [
  {
    question: "How much floor area does a 20FT or 40FT container provide?",
    answer: "The nominal exterior footprints are 160 square feet for a 20FT container and 320 square feet for a 40FT container. The final operating area must also account for cargo-door swing, retrieval space, truck approach and unloading clearance.",
  },
  {
    question: "How much more internal volume does a 40FT High Cube provide?",
    answer: "Using Hapag-Lloyd's representative specifications, the 40FT High Cube provides 2,694 cubic feet compared with 2,390 cubic feet for the 40FT standard, an increase of about 12.7%. Exact dimensions vary by manufacturer and unit.",
  },
  {
    question: "Does a shipping container eliminate jobsite theft or lost time?",
    answer: "No. A container is one part of a wider operating system. Security still requires placement, locks, lighting, cameras, inventory control and closeout. Productivity still depends on planning, communication, access and crew routines.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dataset",
      name: "Construction Container Statistics and Jobsite Storage Data Brief",
      description: metadata.description,
      creator: { "@type": "Organization", name: "United Container Depot" },
      url: "https://unitedcontainerdepot.com/construction/resources/construction-container-statistics",
      citation: Object.values(dataSources),
      variableMeasured: ["Container footprint", "Internal container volume", "Recoverable lost time", "Heavy equipment theft estimate", "Labor productivity improvement potential"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

export default function ConstructionContainerStatisticsPage() {
  return (
    <main className="data-brief-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <div className="guide-topbar"><div className="wrap"><Link href="/construction">Construction containers</Link><span>/</span><Link href="/construction/resources">Resource center</Link><span>/</span><b>Data brief</b></div></div>

      <header className="data-brief-hero">
        <div className="wrap data-brief-hero-grid">
          <div>
            <span className="eyebrow">Construction Container Data Brief</span>
            <h1>Five numbers that sharpen a jobsite storage decision.</h1>
            <p>Source-backed container dimensions, construction productivity findings and equipment-theft context. Each chart includes the practical limit of the statistic, a field takeaway and a social-ready download.</p>
            <div className="data-brief-hero-actions"><a className="button primary" href="#data-stories">Explore the data</a><Link className="button outline-light" href="/construction?quote=1#quote-form">Get delivered price</Link></div>
          </div>
          <figure>
            <Image src="/social/construction-container-internal-volume.png" alt="Construction container internal volume comparison chart" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
          </figure>
        </div>
      </header>

      <section className="data-method-strip">
        <div className="wrap"><strong>Method note</strong><p>Container dimensions are representative fleet specifications. Jobsite findings describe construction-wide conditions, not the guaranteed effect of buying a container. Calculations and limitations are stated beside each chart.</p></div>
      </section>

      <section className="section data-stories" id="data-stories">
        <div className="wrap">
          {stories.map(({ id, kicker, title, statistic, explanation, takeaway, Graphic, sources, asset }, index) => (
            <article className="data-story" id={id} key={id}>
              <div className="data-story-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="data-story-graphic"><Graphic /></div>
              <div className="data-story-copy">
                <span>{kicker}</span>
                <h2>{title}</h2>
                <strong>{statistic}</strong>
                <p>{explanation}</p>
                <div className="data-field-takeaway"><b>Field takeaway</b><p>{takeaway}</p></div>
                <div className="data-source-list"><b>Primary source{sources.length > 1 ? "s" : ""}</b>{sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label}</a>)}</div>
                <div className="data-downloads"><a href={`/social/${asset}.png`} download>Download social PNG</a><a href={`/social/${asset}.svg`} download>Download SVG</a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section social-kit-section">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Social source kit</span><h2>Five square graphics, ready to post.</h2></div><p>Each 1200 by 1200 graphic carries the statistic, a plain-language qualification, the primary source and the United Container Depot construction URL.</p></div>
          <div className="social-kit-grid">{stories.map((story) => <a href={`/social/${story.asset}.png`} download key={story.asset}><Image src={`/social/${story.asset}.png`} alt={`${story.title} social media graphic`} width={1200} height={1200} sizes="(max-width: 800px) 100vw, 33vw" /><span>Download PNG</span></a>)}</div>
          <div className="social-kit-report"><div><span>Printable data brief</span><h3>Take all five charts into a planning meeting.</h3><p>The PDF includes the source notes, limits and field takeaways shown on this page.</p></div><a className="button primary" href="/downloads/ucd-construction-container-data-brief.pdf" download>Download PDF brief</a></div>
        </div>
      </section>

      <section className="section data-faq-section">
        <div className="wrap"><div className="section-heading"><span className="eyebrow dark">Direct answers</span><h2>How to use these statistics.</h2></div><div className="data-faq-grid">{faq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></div>
      </section>

      <section className="resource-conversion-cta"><div className="wrap"><div><span className="eyebrow">Turn the data into a real quote</span><h2>Confirm the size, ZIP and jobsite access.</h2><p>A specialist will match nearby inventory and provide one written delivered price.</p></div><div><Link className="button primary" href="/construction?quote=1#quote-form">Get my delivered price</Link><a href="tel:18555250902">Call (855) 525-0902</a></div></div></section>
      <Footer /><MobileBar />
    </main>
  );
}
