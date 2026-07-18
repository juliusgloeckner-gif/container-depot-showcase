import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    label: "Before delivery",
    title: "Prepare the pad, access route and door orientation.",
    description: "A visual field guide to bearing points, drainage, truck approach and placement failures.",
    image: "/hero-construction.jpg",
    alt: "Construction container placed beside an active jobsite",
    href: "/construction/guides/container-site-preparation",
  },
  {
    label: "Protect the tools",
    title: "Build a security routine the crew can close every night.",
    description: "Placement, lock hardware, lighting, cameras, key control and a named closer.",
    image: "/lock-theft.jpg",
    alt: "Construction container lock and door hardware",
    href: "/construction/guides/construction-site-theft-prevention",
  },
  {
    label: "Choose with confidence",
    title: "See what 20FT, 40FT and High Cube are built to handle.",
    description: "Choose one size and see its proportions, capacity, common jobsite uses and delivery checks.",
    image: "/container-40ft-hc.jpg",
    alt: "Standard and high cube construction container comparison",
    href: "/construction/calculators/container-size",
  },
];

export function KnowledgeHubSection() {
  return (
    <section className="knowledge-hub knowledge-hub-compact section" id="construction-guides">
      <div className="wrap">
        <div className="knowledge-intro conversion-support-intro">
          <div>
            <span className="eyebrow dark">Construction Resource Center</span>
            <h2>Plan it correctly. Then get the container delivered.</h2>
          </div>
          <div className="knowledge-intro-action">
            <p>Field guides, diagrams and checklists for contractors who want the site ready before the truck arrives.</p>
            <a href="#quote-form">Already know what you need? <b>Get the delivered price →</b></a>
          </div>
        </div>

        <div className="knowledge-feature-grid knowledge-feature-grid-visual">
          {featured.map((item) => (
            <Link className="knowledge-feature-card" href={item.href} key={item.href}>
              <figure><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" /></figure>
              <div><span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><b>Open resource →</b></div>
            </Link>
          ))}
        </div>

        <div className="knowledge-proof-row">
          <div><strong>32</strong><span>field guides</span></div>
          <div><strong>100</strong><span>contractor questions</span></div>
          <div><strong>1</strong><span>size education center</span></div>
          <div><strong>11</strong><span>printable resources</span></div>
          <div className="knowledge-proof-actions"><Link className="button primary" href="/construction/resources">Explore resource center</Link><a className="button outline-dark" href="#quote-form">Get a free quote</a></div>
        </div>
      </div>
    </section>
  );
}
