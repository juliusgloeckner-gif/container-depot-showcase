import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, MobileBar } from "../../SiteShell";
import { GuideVisual } from "../../GuideVisual";
import { guideBySlug, guides, relatedGuides } from "../../guide-data";
import { presentationFor } from "../../guide-presentation";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) return {};
  const presentation = presentationFor(guide.category);
  return {
    title: guide.title,
    description: guide.description,
    robots: { index: true, follow: true },
    alternates: { canonical: `https://unitedcontainerdepot.com/construction/guides/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, images: [presentation.image] },
  };
}

const flowLabels: Record<string, [string, string, string]> = {
  security: ["Deter", "Detect", "Close out"],
  buying: ["Define need", "Compare scope", "Confirm delivery"],
  planning: ["Access", "Bearing", "Placement"],
  specifications: ["Measure", "Verify unit", "Plan clearance"],
  operations: ["Organize", "Inspect", "Correct"],
  regulations: ["Identify rule", "Confirm authority", "Document approval"],
  "use-cases": ["Map work", "Zone storage", "Review phase"],
  costs: ["Acquire", "Operate", "Recover value"],
  faq: ["Ask", "Act", "Verify"],
  "field-scenarios": ["People", "Place", "Routine"],
};

function DecisionFlow({ category }: { category: string }) {
  const steps = flowLabels[category] || flowLabels.planning;
  return (
    <div className="guide-decision-flow" aria-label={`${steps.join(", ")} decision flow`}>
      {steps.map((step, index) => (
        <div key={step}>
          <span>0{index + 1}</span>
          <b>{step}</b>
          {index < steps.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) notFound();
  const related = relatedGuides(guide);
  const presentation = presentationFor(guide.category);
  const articleUrl = `https://unitedcontainerdepot.com/construction/guides/${guide.slug}`;
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: guide.title,
        description: guide.description,
        image: `https://unitedcontainerdepot.com${presentation.image}`,
        dateModified: "2026-07-17",
        author: { "@type": "Organization", name: "United Container Depot" },
        publisher: { "@type": "Organization", name: "United Container Depot", url: "https://unitedcontainerdepot.com" },
        mainEntityOfPage: articleUrl,
        about: "Construction storage containers",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Construction Containers", item: "https://unitedcontainerdepot.com/construction" },
          { "@type": "ListItem", position: 2, name: "Construction Resource Center", item: "https://unitedcontainerdepot.com/construction/resources" },
          { "@type": "ListItem", position: 3, name: guide.navTitle, item: articleUrl },
        ],
      },
      faqSchema,
    ],
  };

  return (
    <main className="guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <div className="guide-topbar">
        <div className="wrap">
          <Link href="/construction">Construction containers</Link><span>/</span>
          <Link href="/construction/resources">Resource center</Link><span>/</span>
          <b>{guide.navTitle}</b>
        </div>
      </div>

      <header className="guide-hero guide-hero-visual">
        <div className="wrap guide-hero-grid">
          <div className="guide-hero-copy">
            <span className="guide-category">{guide.category.replace("-", " ")}</span>
            <h1>{guide.title}</h1>
            <p>{guide.description}</p>
            <aside className="guide-answer">
              <span>Quick answer</span>
              <p>{guide.quickAnswer}</p>
              <a href="#field-notes">Go to field notes ↓</a>
            </aside>
            <div className="guide-meta"><span>UCD field guide</span><span>Reviewed for practical jobsite use</span><span>Updated July 2026</span></div>
          </div>
          <figure className="guide-hero-media">
            <Image src={presentation.image} alt={presentation.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 44vw" />
            <figcaption>{presentation.label}</figcaption>
            <div className="guide-stat-row">
              {presentation.stats.map(([value, label]) => <div key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </figure>
        </div>
      </header>

      <div className="wrap guide-layout">
        <aside className="guide-toc" aria-label="On this page">
          <span>On this page</span>
          <a href="#quick-answer">Visual overview</a>
          <a href="#field-notes">Field notes</a>
          {guide.table && <a href="#comparison">Comparison</a>}
          <a href="#checklist">Site checklist</a>
          <a href="#mistakes">Common mistakes</a>
          <a href="#questions">Questions</a>
          <a href="#related">Related guides</a>
          <Link className="toc-quote" href="/construction?quote=1#quote-form">Get delivered price</Link>
        </aside>

        <article className="guide-article">
          <section id="quick-answer" className="guide-overview-section">
            <span className="article-kicker">See the decision</span>
            <GuideVisual category={guide.category} presentation={presentation} />
            <DecisionFlow category={guide.category} />
          </section>

          <section id="field-notes">
            <span className="article-kicker">What matters in the field</span>
            <h2>Recommendations that survive an active jobsite.</h2>
            <div className="field-note-list">
              {guide.fieldNotes.map((note, index) => <div key={note}><b>{String(index + 1).padStart(2, "0")}</b><p>{note}</p></div>)}
            </div>
          </section>

          {guide.table && (
            <section id="comparison">
              <span className="article-kicker">Side-by-side</span>
              <h2>Use the tradeoffs, not a generic rule.</h2>
              <div className="guide-table-wrap">
                <table>
                  <thead><tr>{guide.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                  <tbody>{guide.table.rows.map((row) => <tr key={row.join("-")}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </section>
          )}

          <section id="checklist" className="guide-checklist-section">
            <div className="guide-checklist-head">
              <div><span className="article-kicker">Take it to the site</span><h2>Working checklist.</h2></div>
              <a className="download-pill" href={presentation.download.href} download>Download PDF</a>
            </div>
            <p>Assign an owner, record exceptions and close the loop before the next phase begins.</p>
            <ol>{guide.checklist.map((item) => <li key={item}><span aria-hidden="true"></span>{item}</li>)}</ol>
            <a className="guide-download-link" href={presentation.download.href} download>{presentation.download.label} <span>PDF ↓</span></a>
          </section>

          <section id="mistakes">
            <span className="article-kicker">Avoidable failures</span>
            <h2>Common mistakes that create cost later.</h2>
            <div className="mistake-grid">{guide.mistakes.map((mistake) => <div key={mistake}><span>!</span><p>{mistake}</p></div>)}</div>
          </section>

          <aside className="guide-commercial-cta">
            <div><span>Need the container next?</span><h2>Get size, condition and delivery in one written price.</h2><p>Send the delivery ZIP and project use. A container specialist will match nearby inventory and confirm access requirements.</p></div>
            <Link className="button primary" href="/construction?quote=1#quote-form">Get my delivered price</Link>
          </aside>

          <section id="questions">
            <span className="article-kicker">Questions contractors ask</span>
            <h2>Short answers before you act.</h2>
            <div className="guide-faq">{guide.faq.map((item, index) => <details open={index === 0} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
            <Link className="question-library-link" href="/construction/questions"><span>100 contractor questions</span><b>Search the complete question library</b><i>→</i></Link>
          </section>

          {guide.sources && (
            <section className="guide-sources">
              <span className="article-kicker">Primary references</span>
              <h2>Rules and specifications used in this guide.</h2>
              <ul>{guide.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul>
              <p>Always confirm the current rule with the authority having jurisdiction and the exact specification for the container being purchased.</p>
            </section>
          )}

          <section id="related" className="related-guides">
            <span className="article-kicker">Keep planning</span>
            <h2>Related construction container guides.</h2>
            <div>{related.map((item) => <Link key={item.slug} href={`/construction/guides/${item.slug}`}><span>{item.category.replace("-", " ")}</span><b>{item.navTitle}</b><i>→</i></Link>)}</div>
          </section>
        </article>
      </div>
      <Footer /><MobileBar />
    </main>
  );
}
