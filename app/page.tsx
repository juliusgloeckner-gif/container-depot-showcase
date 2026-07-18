import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InventorySection } from "./InventorySection";
import { QuoteForm } from "./QuoteForm";
import { Footer, Header, MobileBar } from "./SiteShell";

const homepageInventoryImages = ["/inventory-v3/generic-20.jpg", "/inventory-v3/generic-40.jpg", "/inventory-v2/generic-3.jpg", "/inventory-v3/generic-custom.jpg"] as [string, string, string, string];

export const metadata: Metadata = {
  alternates: { canonical: "https://unitedcontainerdepot.com/" },
};

const uses = [
  { title: "Construction Sites", text: "Lock up tools, materials and equipment directly on the job site.", href: "/construction", image: "/hero-construction.jpg", cta: "Job site storage" },
  { title: "Farms & Ranches", text: "Keep feed, fencing, tools and seasonal equipment dry beside the barn.", href: "/farm", image: "/farm-storage-real.png", cta: "Farm storage" },
  { title: "Business overflow", text: "Put inventory, furniture and seasonal stock beside your premises.", href: "/business", image: "/business-overflow.png", cta: "Business storage" },
  { title: "Moving & relocation", text: "Buy one container, pack at your pace and keep it through the move and beyond.", href: "/moving", image: "/moving-hero.png", cta: "Moving storage for sale" },
  { title: "Renovation storage", text: "Clear the work zone and protect furniture, fixtures and household contents.", href: "/renovation", image: "/renovation-hero.png", cta: "Renovation storage" },
  { title: "Vehicles & recreation", text: "Secure classic cars, motorcycles, ATVs and four seasons of gear.", href: "/vehicles", image: "/vehicles-hero.png", cta: "Vehicle storage" },
  { title: "Events & production", text: "Keep cases, staging, tents and production equipment ready for load-in.", href: "/events", image: "/events-hero.png", cta: "Production storage" },
  { title: "Government, Schools & Institutions", text: "Add capacity for furniture, athletics, facilities and public operations.", href: "/institutions", image: "/institutions-hero.png", cta: "Institutional storage" },
  { title: "International Shipping & Export", text: "Buy the container, pack at your pace, then ship it through your freight forwarder.", href: "/international-shipping-containers", image: "/specialty/export-retirement-relocation-v1.webp", cta: "Export-ready purchase" },
  { title: "Disaster Relief & Emergency Response", text: "Stage secure supplies, recovery tools and response equipment before they are needed.", href: "/disaster-relief-containers", image: "/specialty/disaster-relief-hero-v1.webp", cta: "Emergency readiness" },
];

const specialtyTypes = [
  { title: "Refrigerated Containers (Reefers)", text: "Powered cold storage with a standard 10-day depot electrical test and detailed report before delivery.", href: "/refrigerated-containers", image: "/specialty/reefer-hero.webp", label: "Tested cold storage" },
  { title: "Open Side Containers", text: "Two long-side access bays on 20FT units or four on 40FT units for faster retrieval.", href: "/open-side-containers", image: "/specialty/open-side-hero.webp", label: "Multi-door access" },
  { title: "Double Door Containers (Tunnel)", text: "Paired cargo doors at both short ends for two-way staging, long materials and FIFO flow.", href: "/double-door-containers", image: "/specialty/tunnel-hero.webp", label: "Access both ends" },
  { title: "Insulated Containers", text: "Lined dry storage that slows temperature swings and helps manage condensation-sensitive contents.", href: "/insulated-containers", image: "/specialty/insulated-container-hero-v1.webp", label: "Reduced heat transfer" },
  { title: "Office Containers", text: "Purpose-built workspace with personnel access, windows, power, HVAC and a site-approved layout.", href: "/office-containers", image: "/specialty/office-container-hero-v1.webp", label: "Work where the work is" },
  { title: "Hazardous Material Storage", text: "Engineered storage configured around the exact material, quantity, containment and local requirements.", href: "/hazardous-material-storage", image: "/specialty/hazmat-container-hero-v1.webp", label: "Designed to the hazard" },
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="home-hero" id="quote" style={{ backgroundImage: "url(/hero-depot-inventory.png)" }}>
        <Image className="hero-background" src="/hero-depot-inventory.png" alt="Rows of shipping containers ready for nationwide delivery" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Container specialists. Nationwide inventory.</span>
            <h1>Shipping containers.<br /><em>Every size. Delivered.</em></h1>
            <p className="hero-lead">One company focused on one thing: affordable new and used containers. Choose your size, tell us your ZIP, and we handle delivery.</p>
            <div className="price-callout">
              <span>20FT containers from</span>
              <strong>$1,950 delivered</strong>
            </div>
            <ul className="check-list light">
              <li>20FT, 40FT, High Cube and custom options</li>
              <li>Wind and watertight, lockable steel</li>
              <li>One delivered price with no hidden fees</li>
            </ul>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      <section className="proof-strip" aria-label="Company facts">
        <div className="wrap proof-grid">
          <div><strong>4,200+</strong><span>containers delivered</span></div>
          <div><strong>5 to 10</strong><span>day delivery</span></div>
          <div><strong>48</strong><span>states served</span></div>
          <div><strong>$0</strong><span>hidden fees</span></div>
        </div>
      </section>

      <section className="section dark-section industry-first" id="industries">
        <div className="wrap">
          <div className="section-heading split-heading light-heading">
            <div><span className="eyebrow">Popular uses</span><h2>Start with the reason you need more space.</h2></div>
            <p>Choose the setting that looks like yours. Each page shows what fits, where the container belongs and what to expect on delivery day.</p>
          </div>
          <div className="use-grid">
            {uses.map((use, index) => (
              <Link className="use-card" href={use.href} key={use.title}>
                <Image src={use.image} alt={`${use.title} shipping container storage`} fill sizes="(max-width: 760px) 100vw, 33vw" />
                <span className="use-shade" />
                <span className="use-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="use-copy"><strong>{use.title}</strong><span>{use.text}</span><b>View buyer page →</b></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section specialty-home-section" id="specialty-containers">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><span className="eyebrow dark">Specialty containers</span><h2>Start with the configuration when the hardware matters.</h2></div>
            <p>These pages begin with a specific container type, then show where it fits, what the configuration requires and what must be confirmed before delivery.</p>
          </div>
          <div className="specialty-home-grid">
            {specialtyTypes.map((item) => <Link className="specialty-home-card" href={item.href} key={item.title}>
              <div className="specialty-home-image"><Image src={item.image} alt={`${item.title} specialty shipping container`} fill sizes="(max-width: 800px) 100vw, 33vw" /><span>{item.label}</span></div>
              <div><h3>{item.title}</h3><p>{item.text}</p><b>Explore this container type →</b></div>
            </Link>)}
          </div>
        </div>
      </section>

      <InventorySection images={homepageInventoryImages} context="general storage" homepage />

      <section className="section applications">
        <div className="wrap application-grid">
          <div className="application-copy">
            <span className="eyebrow dark">One steel box. Hundreds of uses.</span>
            <h2>If it needs to stay secure and dry, a container can store it.</h2>
            <p>Home moves, classic cars, contractor tools, farm supplies, restaurant furniture, retail inventory and more. We specialize in containers, so you get a straight answer about size, condition and delivery.</p>
            <div className="tag-list"><span>Moving</span><span>Vehicle storage</span><span>Equipment</span><span>Seasonal stock</span><span>Records</span><span>Home renovation</span></div>
            <a className="button primary" href="#quote-form">Tell us what you are storing</a>
          </div>
          <div className="delivery-panel">
            <span className="panel-label">Simple delivery</span>
            <ol>
              <li><b>01</b><div><strong>Tell us your ZIP</strong><span>We match your need with nearby inventory.</span></div></li>
              <li><b>02</b><div><strong>Get one delivered price</strong><span>No surprise fuel charges or add-on fees.</span></div></li>
              <li><b>03</b><div><strong>Choose your container</strong><span>One Trip, Cargo Worthy or Wind and Watertight.</span></div></li>
              <li><b>04</b><div><strong>We place it on site</strong><span>Tilt-bed delivery, usually within 5 to 10 days.</span></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section condition-section">
        <div className="wrap">
          <div className="section-heading centered"><span className="eyebrow dark">Buy with your eyes open</span><h2>Three honest condition grades.</h2><p>We explain exactly what you are buying before it leaves the depot.</p></div>
          <div className="condition-grid">
            <article><span>Best appearance</span><h3>One Trip</h3><p>Like-new condition with minimal wear. A strong choice when appearance matters.</p></article>
            <article className="featured"><span>Best all-around value</span><h3>Cargo Worthy</h3><p>Structurally sound, lockable and suitable for transport or dependable storage.</p></article>
            <article><span>Lowest-cost storage</span><h3>Wind and Watertight</h3><p>Used, secure and dry. Cosmetic wear outside, useful storage space inside.</p></article>
          </div>
        </div>
      </section>

      <section className="section reviews">
        <div className="wrap">
          <div className="section-heading centered"><span className="eyebrow dark">Straight from buyers</span><h2>Delivered as promised.</h2></div>
          <div className="review-grid">
            <blockquote><span>★★★★★</span><p>“The price quoted was the price I paid. The driver put it exactly where we marked it.”</p><footer>Mike R. <b>General contractor, Arizona</b></footer></blockquote>
            <blockquote><span>★★★★★</span><p>“Keeps our feed dry and the rodents out. It was delivered right beside the equipment barn.”</p><footer>Wade H. <b>Cattle rancher, Texas</b></footer></blockquote>
            <blockquote><span>★★★★★</span><p>“We replaced an off-site storage unit with a 40-footer behind the shop. Much easier.”</p><footer>Rachel M. <b>Retail owner, Florida</b></footer></blockquote>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap faq-grid">
          <div><span className="eyebrow dark">Common questions</span><h2>Before you buy.</h2><p>Need a faster answer? Call a container specialist at <a href="tel:18555250902">(855) 525-0902</a>.</p></div>
          <div className="faq-list">
            <details open><summary>How much does a shipping container cost?</summary><p>20FT containers start from $1,950 delivered. The exact price depends on condition, local inventory and your delivery ZIP.</p></details>
            <details><summary>How much room does the delivery truck need?</summary><p>A tilt-bed truck generally needs a straight, firm approach roughly twice the container length. We confirm access before scheduling.</p></details>
            <details><summary>Can I inspect the container before buying?</summary><p>Yes. Ask your specialist about inspection options and current photos for the unit or local inventory.</p></details>
            <details><summary>Do you rent containers?</summary><p>We focus on direct sales. You buy once, own the asset outright and avoid ongoing rental bills.</p></details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap final-inner"><div><span className="eyebrow">Ready when you are</span><h2>Get the right container at the right delivered price.</h2></div><div className="cta-actions"><a className="button primary" href="#quote-form">Get my free quote</a><a className="button outline-light" href="tel:18555250902">Call (855) 525-0902</a></div></div>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
