import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "./QuoteForm";
import { Footer, Header, MobileBar } from "./SiteShell";

const inventory = [
  { name: "20FT Standard", price: "$1,950", image: "/container-20ft.jpg", detail: "160 sq ft. Easy to place. The all-around storage workhorse." },
  { name: "40FT Standard", price: "$4,490", image: "/container-40ft-standard.jpg", detail: "320 sq ft. More capacity and the best value per square foot." },
  { name: "40FT High Cube", price: "$4,890", image: "/container-40ft-hc.jpg", detail: "Extra 12 inches of height for bulky equipment and stacked inventory." },
  { name: "Custom Modified", price: "Built to spec", image: "/container-custom.jpg", detail: "Add shelving, lighting, insulation, personnel doors and windows." },
];

const uses = [
  { title: "Construction sites", text: "Lock up tools, materials and equipment directly on the job site.", href: "/construction", image: "/hero-construction.jpg", cta: "Construction storage" },
  { title: "Farms and ranches", text: "Keep feed, seed, implements and supplies dry, secure and close at hand.", href: "/farm", image: "/ag-gallery1.jpg", cta: "Farm storage" },
  { title: "Business overflow", text: "Put inventory, furniture, records and seasonal stock beside your premises.", href: "/business", image: "/business-overflow.png", cta: "Business storage" },
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="home-hero" id="quote">
        <div className="hero-overlay" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Buy direct. Own it outright.</span>
            <h1>Shipping containers.<br /><em>In stock. Delivered.</em></h1>
            <p className="hero-lead">New and used steel containers at straightforward prices. Tell us your ZIP. We handle the container and the delivery.</p>
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

      <section className="section inventory-section" id="inventory">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><span className="eyebrow dark">Ready to deliver</span><h2>The container you need. Nothing you do not.</h2></div>
            <p>Choose by size and condition. We will confirm local inventory and give you the complete delivered price for your ZIP.</p>
          </div>
          <div className="inventory-grid">
            {inventory.map((item) => (
              <article className="inventory-card" key={item.name}>
                <div className="image-wrap"><Image src={item.image} alt={`${item.name} shipping container`} fill sizes="(max-width: 760px) 100vw, 25vw" /></div>
                <div className="inventory-body">
                  <span className="stock">In stock</span>
                  <h3>{item.name}</h3>
                  <strong className="card-price">{item.price}</strong>
                  <p>{item.detail}</p>
                  <a href="#quote">Get delivered price <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
          <p className="price-note">Starting prices shown. Final price depends on container condition, local availability and delivery ZIP.</p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="wrap">
          <div className="section-heading split-heading light-heading">
            <div><span className="eyebrow">Storage that works where you work</span><h2>Built for real sites, farms and businesses.</h2></div>
            <p>Go straight to the page designed around your job. Every route ends with the same thing: a secure container delivered where you need it.</p>
          </div>
          <div className="use-grid">
            {uses.map((use) => (
              <Link className="use-card" href={use.href} key={use.title}>
                <Image src={use.image} alt={`${use.title} shipping container storage`} fill sizes="(max-width: 760px) 100vw, 33vw" />
                <span className="use-shade" />
                <span className="use-copy"><strong>{use.title}</strong><span>{use.text}</span><b>{use.cta} →</b></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section applications">
        <div className="wrap application-grid">
          <div className="application-copy">
            <span className="eyebrow dark">One steel box. Hundreds of uses.</span>
            <h2>If it needs to stay secure and dry, a container can store it.</h2>
            <p>Home moves, classic cars, contractor tools, farm supplies, restaurant furniture, retail inventory and more. We specialize in containers, so you get a straight answer about size, condition and delivery.</p>
            <div className="tag-list"><span>Moving</span><span>Vehicle storage</span><span>Equipment</span><span>Seasonal stock</span><span>Records</span><span>Home renovation</span></div>
            <a className="button primary" href="#quote">Tell us what you are storing</a>
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
        <div className="wrap final-inner"><div><span className="eyebrow">Ready when you are</span><h2>Get the right container at the right delivered price.</h2></div><div className="cta-actions"><a className="button primary" href="#quote">Get my free quote</a><a className="button outline-light" href="tel:18555250902">Call (855) 525-0902</a></div></div>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
