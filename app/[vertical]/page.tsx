import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { QuoteForm } from "../QuoteForm";
import { Footer, Header, MobileBar } from "../SiteShell";
import { verticals } from "../verticals";

export function generateStaticParams() {
  return Object.keys(verticals).map((vertical) => ({ vertical }));
}

export async function generateMetadata({ params }: { params: Promise<{ vertical: string }> }): Promise<Metadata> {
  const { vertical } = await params;
  const data = verticals[vertical];
  if (!data) return {};
  return { title: `${data.nav} Storage Containers for Sale`, description: data.lead };
}

export default async function VerticalPage({ params }: { params: Promise<{ vertical: string }> }) {
  const { vertical } = await params;
  const data = verticals[vertical];
  if (!data) notFound();
  return (
    <main>
      <Header />
      <section className="vertical-hero" id="quote" style={{ backgroundImage: `url(${data.hero})` }}>
        <div className="hero-overlay" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{data.eyebrow}</span>
            <h1>{data.title}<br /><em>{data.emphasis}</em></h1>
            <p className="hero-lead">{data.lead}</p>
            <ul className="check-list light"><li>Steel lockbox doors included</li><li>Wind and watertight grades available</li><li>One delivered price with no hidden fees</li></ul>
          </div>
          <QuoteForm compact context={data.context} />
        </div>
      </section>
      <section className="proof-strip"><div className="wrap proof-grid"><div><strong>4,200+</strong><span>containers delivered</span></div><div><strong>5 to 10</strong><span>day delivery</span></div><div><strong>48</strong><span>states served</span></div><div><strong>$0</strong><span>hidden fees</span></div></div></section>

      <section className="section benefits-section">
        <div className="wrap">
          <div className="section-heading split-heading"><div><span className="eyebrow dark">Made for {data.nav.toLowerCase()}</span><h2>{data.benefitsTitle}</h2></div><p>Own secure storage exactly where you need it, without monthly bills, return dates or surprise delivery charges.</p></div>
          <div className="benefit-grid">{data.benefits.map((b, i) => <article key={b.title}><b>0{i + 1}</b><h3>{b.title}</h3><p>{b.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section vertical-use-section">
        <div className="wrap vertical-use-grid">
          <div className="vertical-photo"><Image src={data.hero} alt={`${data.nav} shipping container in use`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="vertical-use-copy"><span className="eyebrow dark">What fits inside</span><h2>Room for the things that keep your operation moving.</h2><div className="application-list">{data.applications.map((item) => <span key={item}>✓ {item}</span>)}</div><a className="button primary" href="#quote">Check local inventory</a></div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="wrap process-grid">
          <div><span className="eyebrow">Clear process</span><h2>From ZIP code to placed container.</h2><p>One specialist handles the quote, inventory match and delivery details.</p></div>
          <ol><li><b>01</b><span><strong>Send your ZIP and size</strong>We check the closest available inventory.</span></li><li><b>02</b><span><strong>Approve one delivered price</strong>You see the total before you commit.</span></li><li><b>03</b><span><strong>Confirm access and placement</strong>We make sure the truck can reach your spot.</span></li><li><b>04</b><span><strong>Receive your container</strong>The driver tilts it into place, ready to use.</span></li></ol>
        </div>
      </section>

      <section className="section testimonial-feature"><div className="wrap"><span className="stars">★★★★★</span><blockquote>“{data.testimonial}”</blockquote><p>{data.person}</p></div></section>

      <section className="section faq-section"><div className="wrap faq-grid"><div><span className="eyebrow dark">Questions from buyers</span><h2>Know before delivery.</h2><p>Call a container specialist at <a href="tel:18555250902">(855) 525-0902</a>.</p></div><div className="faq-list">{data.faq.map((item, i) => <details open={i === 0} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
      <section className="final-cta"><div className="wrap final-inner"><div><span className="eyebrow">Get storage handled</span><h2>A secure container, delivered where you need it.</h2></div><div className="cta-actions"><a className="button primary" href="#quote">Get my free quote</a><a className="button outline-light" href="tel:18555250902">Call (855) 525-0902</a></div></div></section>
      <Footer /><MobileBar />
    </main>
  );
}
