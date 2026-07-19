import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InventorySection } from "../InventorySection";
import { QuoteForm } from "../QuoteForm";
import { Footer, Header, MobileBar } from "../SiteShell";
import { SpecialtyDiagram } from "../SpecialtyDiagram";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { UseCaseMosaic } from "../UseCaseMosaic";
import { verticals } from "../verticals";
import { KnowledgeHubSection } from "../knowledge/KnowledgeHubSection";
import { OptimizedImage } from "../OptimizedImage";

export function generateStaticParams() {
  return Object.keys(verticals).map((vertical) => ({ vertical }));
}

export async function generateMetadata({ params }: { params: Promise<{ vertical: string }> }): Promise<Metadata> {
  const { vertical } = await params;
  const data = verticals[vertical];
  if (!data) return {};
  return {
    title: data.seoTitle ?? `${data.nav} Storage Containers for Sale`,
    description: data.seoDescription ?? data.lead,
    alternates: { canonical: `https://unitedcontainerdepot.com/${data.key}` },
  };
}

export default async function VerticalPage({ params }: { params: Promise<{ vertical: string }> }) {
  const { vertical } = await params;
  const data = verticals[vertical];
  if (!data) notFound();

  const structuredData = data.specialtyType ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: data.seoTitle,
        description: data.seoDescription,
        category: data.navGroup === "use" ? "Shipping container use case" : "Specialty shipping container",
        brand: { "@type": "Brand", name: "United Container Depot" },
        url: `https://unitedcontainerdepot.com/${data.key}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  } : null;
  const heroChecks = data.heroChecks ?? ["Steel lockbox doors included", "Wind and watertight grades available", "One delivered price with no hidden fees"];
  const processSteps = data.processSteps ?? [
    { title: data.specialtyType ? "Send your ZIP and configuration" : "Send your ZIP and size", text: data.specialtyType ? "We check the closest suitable inventory or modification path." : "We check the closest suitable inventory for your use." },
    { title: "Approve one delivered price", text: "You see the total before you commit." },
    { title: "Confirm access and placement", text: data.specialtyType ? "We make sure the truck and specialty setup can work at your site." : "We make sure the delivery truck can reach the approved placement area." },
    { title: "Receive your container", text: "The driver places it in the approved position, ready for setup." },
  ];
  const scrollQuote = data.specialtyType ? {
    eyebrow: data.scrollQuote?.eyebrow ?? "Match the complete setup",
    strong: data.scrollQuote?.strong ?? "Tell us the use, ZIP and required configuration.",
    text: data.scrollQuote?.text ?? "We will confirm the nearest suitable inventory or modification path before you commit.",
    button: data.scrollQuote?.button ?? "Get my configuration quote",
  } : {
    eyebrow: `Storage for ${data.nav.toLowerCase()}`,
    strong: "Tell us your ZIP and what you need to protect.",
    text: "We will match the right size, condition and delivery plan before you commit.",
    button: "Get my delivered price",
  };

  return (
    <main>
      {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />}
      <Header />
      <section className={`vertical-hero vertical-${data.key}`} id="quote">
        <OptimizedImage className="hero-background" src={data.hero} alt={`${data.nav} shipping container storage`} priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{data.eyebrow}</span>
            <h1>{data.title}<br /><em>{data.emphasis}</em></h1>
            <p className="hero-lead">{data.lead}</p>
            <ul className="check-list light">{heroChecks.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <QuoteForm compact context={data.context} containerOptions={data.quoteOptions} eyebrow={data.quoteCopy?.eyebrow} heading={data.quoteCopy?.heading} intro={data.quoteCopy?.intro} buttonText={data.quoteCopy?.buttonText} note={data.quoteCopy?.note} />
        </div>
      </section>

      <section className="proof-strip"><div className="wrap proof-grid"><div><strong>4,200+</strong><span>containers delivered</span></div>{data.proofItem ? <div><strong>{data.proofItem.value}</strong><span>{data.proofItem.label}</span></div> : data.specialtyType ? <div><strong>Site</strong><span>requirements checked</span></div> : <div><strong>5 to 10</strong><span>day delivery</span></div>}<div><strong>48</strong><span>states served</span></div><div><strong>$0</strong><span>hidden fees</span></div></div></section>

      <section className="section benefits-section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><span className="eyebrow dark">Made for {data.nav.toLowerCase()}</span><h2>{data.benefitsTitle}</h2></div>
            <p>{data.benefitsLead ?? (data.specialtyType ? "The right specialty container starts with the workflow, site and exact configuration, not only the nominal size." : "Own secure storage exactly where you need it, without monthly bills, return dates or surprise delivery charges.")}</p>
          </div>
          <div className="benefit-grid">{data.benefits.map((benefit, index) => <article key={benefit.title}><b>0{index + 1}</b><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
        </div>
      </section>

      {data.ownershipReasons && <section className="section ownership-reasons-section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><span className="eyebrow dark">{data.ownershipEyebrow}</span><h2>{data.ownershipTitle}</h2></div>
            <p>{data.ownershipLead}</p>
          </div>
          <div className="ownership-reason-grid">{data.ownershipReasons.map((reason, index) => <article key={reason.title}><b>0{index + 1}</b><h3>{reason.title}</h3><p>{reason.text}</p></article>)}</div>
        </div>
      </section>}

      <section className="scroll-quote-strip" aria-label={`Request a ${data.nav.toLowerCase()} container quote`}><div className="wrap scroll-quote-inner"><div><span>{scrollQuote.eyebrow}</span><p><strong>{scrollQuote.strong}</strong> {scrollQuote.text}</p></div><a className="button primary" href="#quote-form">{scrollQuote.button}</a></div></section>

      <section className="section vertical-gallery-section">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Storage in the real world</span><h2>{data.galleryTitle ?? "See how the space gets used."}</h2></div><p>{data.galleryLead ?? "Secure steel storage placed where the work happens, with the capacity to keep everyday supplies organized and close."}</p></div>
          <div className="vertical-gallery">{data.gallery.map((item, index) => <figure key={`${item.image}-${index}`}><div><OptimizedImage src={item.image} alt={item.alt} sizes="(max-width: 800px) 100vw, 33vw" /></div><figcaption>{item.caption}</figcaption></figure>)}</div>
        </div>
      </section>

      {data.useCaseMosaic && <UseCaseMosaic {...data.useCaseMosaic} />}

      <section className="section vertical-use-section">
        <div className="wrap vertical-use-grid">
          <div className="vertical-photo">
            <OptimizedImage src={data.featureImage} alt={`${data.nav} supplies organized inside a shipping container`} sizes="(max-width: 800px) 100vw, 50vw" />
            {data.visualTags && <div className="visual-tag-grid" aria-label="Typical business overflow contents">{data.visualTags.map((tag) => <span key={tag.label}><b>{tag.icon}</b>{tag.label}</span>)}</div>}
          </div>
          <div className="vertical-use-copy">
            <span className="eyebrow dark">{data.featureEyebrow ?? "What fits inside"}</span>
            <h2>{data.featureTitle ?? "Room for the things that keep your operation moving."}</h2>
            {data.featureLead && <p className="visual-list-note">{data.featureLead}</p>}
            {data.visualTags ? <p className="visual-list-note">Flexible overflow capacity for the stock, fixtures and supplies that crowd your daily operation.</p> : <div className="application-list">{data.applications.map((item) => <span key={item}>✓ {item}</span>)}</div>}
            <a className="button primary" href="#quote-form">Check local inventory</a>
          </div>
        </div>
      </section>

      {data.specialtyType && data.technicalNotes && <SpecialtyDiagram type={data.specialtyType} notes={data.technicalNotes} />}

      <InventorySection images={data.inventoryImages} context={data.context.toLowerCase()} options={data.inventoryOptions} heading={data.inventoryHeading} lead={data.inventoryLead} stockLabel={data.inventoryStockLabel} />

      <section className="section dark-section">
        <div className="wrap process-grid">
          <div><span className="eyebrow">Clear process</span><h2>{data.processTitle ?? "From ZIP code to placed container."}</h2><p>{data.processLead ?? "One specialist handles the quote, inventory match and delivery details."}</p></div>
          <ol>{processSteps.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong>{step.text}</span></li>)}</ol>
        </div>
      </section>

      {data.testimonials.length > 0 && <TestimonialCarousel testimonials={data.testimonials} />}

      {(["farm", "business", "vehicles"] as string[]).includes(data.key) && <KnowledgeHubSection vertical={data.key} />}

      <section className="section faq-section"><div className="wrap faq-grid"><div><span className="eyebrow dark">Questions from buyers</span><h2>Know before delivery.</h2><p>Call a container specialist at <a href="tel:18555250902">(855) 525-0902</a>.</p></div><div className="faq-list">{data.faq.map((item, index) => <details open={index === 0} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
      <section className="final-cta"><div className="wrap final-inner"><div><span className="eyebrow">{data.finalEyebrow ?? (data.specialtyType ? "Get the configuration right" : "Get storage handled")}</span><h2>{data.finalTitle ?? (data.specialtyType ? "A specialty container matched to the way you work." : "A secure container, delivered where you need it.")}</h2></div><div className="cta-actions"><a className="button primary" href="#quote-form">{data.finalCta ?? "Get my free quote"}</a><a className="button outline-light" href="tel:18555250902">Call (855) 525-0902</a></div></div></section>
      <Footer /><MobileBar />
    </main>
  );
}
