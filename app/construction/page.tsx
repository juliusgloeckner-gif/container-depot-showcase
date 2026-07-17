import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InventorySection } from "../InventorySection";
import { QuoteForm } from "../QuoteForm";
import { Footer, Header, MobileBar } from "./SiteShell";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { verticals } from "../verticals";
import { KnowledgeHubSection } from "./KnowledgeHubSection";
import { ConstructionStatsTeaser } from "./ConstructionDataVisuals";
import { guides } from "./guide-data";

const data = verticals.construction;

export const metadata: Metadata = {
  title: "Construction Storage Containers and Jobsite Resource Center",
  description: "Buy secure construction storage containers and use practical field guides for size, delivery, site preparation, security, operations and ownership.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unitedcontainerdepot.com/construction" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Construction Storage Containers and Jobsite Resource Center",
      description: metadata.description,
      isPartOf: { "@type": "WebSite", name: "United Container Depot", url: "https://unitedcontainerdepot.com" },
      mainEntity: { "@id": "https://unitedcontainerdepot.com/construction#product" },
    },
    {
      "@type": "Product",
      "@id": "https://unitedcontainerdepot.com/construction#product",
      name: "Construction Storage Containers",
      category: "Shipping containers for jobsite storage",
      brand: { "@type": "Brand", name: "United Container Depot" },
      offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "1950", offerCount: "4", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "ItemList",
      name: "Construction Container Guides",
      numberOfItems: guides.length,
      itemListElement: guides.map((guide, index) => ({ "@type": "ListItem", position: index + 1, name: guide.title, url: `https://unitedcontainerdepot.com/construction/guides/${guide.slug}` })),
    },
  ],
};

export default function ConstructionHubPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <section className="vertical-hero vertical-construction construction-hub-hero" id="quote" style={{ backgroundImage: `url(${data.hero})` }}>
        <Image className="hero-background" src={data.hero} alt="Construction storage container on an active jobsite" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{data.eyebrow}</span>
            <h1>{data.title}<br /><em>{data.emphasis}</em></h1>
            <p className="hero-lead">{data.lead}</p>
            <ul className="check-list light"><li>Steel lockbox doors included</li><li>Wind and watertight grades available</li><li>One delivered price with no hidden fees</li></ul>
            <a className="hero-resource-link" href="#construction-guides">Browse construction field guides ↓</a>
          </div>
          <QuoteForm compact context={data.context} />
        </div>
      </section>

      <section className="proof-strip"><div className="wrap proof-grid"><div><strong>4,200+</strong><span>containers delivered</span></div><div><strong>5 to 10</strong><span>day delivery</span></div><div><strong>48</strong><span>states served</span></div><div><strong>$0</strong><span>hidden fees</span></div></div></section>

      <section className="section benefits-section">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Made for construction</span><h2>{data.benefitsTitle}</h2></div><p>Own secure storage exactly where you need it, without monthly bills, return dates or surprise delivery charges.</p></div>
          <div className="benefit-grid">{data.benefits.map((benefit, index) => <article key={benefit.title}><b>0{index + 1}</b><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
        </div>
      </section>

      <section className="scroll-quote-strip" id="mid-page-quote" aria-label="Get a delivered container price">
        <div className="wrap scroll-quote-inner">
          <div><span>Ready when you are</span><p><strong>Already know your ZIP and preferred size?</strong> Get one complete delivered price before you keep comparing.</p></div>
          <a className="button primary" href="#quote-form">Get my delivered price</a>
        </div>
      </section>

      <section className="section vertical-gallery-section">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Storage in the real world</span><h2>See how the space gets used.</h2></div><p>Secure steel storage placed where the work happens, with the capacity to keep everyday supplies organized and close.</p></div>
          <div className="vertical-gallery">{data.gallery.map((item) => <figure key={item.image}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><figcaption>{item.caption}</figcaption></figure>)}</div>
        </div>
      </section>

      <ConstructionStatsTeaser />

      <section className="section vertical-use-section">
        <div className="wrap vertical-use-grid">
          <div className="vertical-photo"><Image src={data.featureImage} alt="Construction tools organized inside a shipping container" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="vertical-use-copy"><span className="eyebrow dark">What fits inside</span><h2>Room for the tools and materials that keep the project moving.</h2><div className="application-list">{data.applications.map((item) => <span key={item}>✓ {item}</span>)}</div><a className="button primary" href="#quote-form">Check local inventory</a></div>
        </div>
      </section>

      <InventorySection images={data.inventoryImages} context="construction site storage" />

      <section className="section dark-section" id="delivery-process">
        <div className="wrap process-grid">
          <div><span className="eyebrow">Clear process</span><h2>From ZIP code to placed container.</h2><p>One specialist handles the quote, inventory match and delivery details.</p><a className="button outline-light process-quote-button" href="#quote-form">Get delivered price</a></div>
          <ol><li><b>01</b><span><strong>Send your ZIP and size</strong>We check the closest available inventory.</span></li><li><b>02</b><span><strong>Approve one delivered price</strong>You see the total before you commit.</span></li><li><b>03</b><span><strong>Confirm access and placement</strong>We make sure the truck can reach your spot.</span></li><li><b>04</b><span><strong>Receive your container</strong>The driver tilts it into place, ready to use.</span></li></ol>
        </div>
      </section>

      <TestimonialCarousel testimonials={data.testimonials} />
      <KnowledgeHubSection />

      <section className="section faq-section"><div className="wrap faq-grid"><div><span className="eyebrow dark">Questions from contractors</span><h2>Know before delivery.</h2><p>Start with the short answers here, then use the <Link href="/construction/guides/construction-container-faq">complete contractor FAQ</Link> for planning, safety and ownership questions.</p><p>Call a container specialist at <a href="tel:18555250902">(855) 525-0902</a>.</p></div><div className="faq-list">{data.faq.map((item, index) => <details open={index === 0} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
      <section className="final-cta"><div className="wrap final-inner"><div><span className="eyebrow">Get storage handled</span><h2>A secure container, delivered to the jobsite.</h2></div><div className="cta-actions"><a className="button primary" href="#quote-form">Get my free quote</a><a className="button outline-light" href="tel:18555250902">Call (855) 525-0902</a></div></div></section>
      <Footer /><MobileBar />
    </main>
  );
}
