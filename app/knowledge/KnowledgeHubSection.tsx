import Image from "next/image";
import Link from "next/link";
import { knowledgeConfig } from "./data";

export function KnowledgeHubSection({ vertical }: { vertical: string }) {
  const config = knowledgeConfig(vertical);
  if (!config) return null;
  const featured = [config.guides[4], config.guides[8], config.guides[20]];
  return <section className="knowledge-hub knowledge-hub-compact section" id={`${config.key}-guides`}><div className="wrap">
    <div className="knowledge-intro conversion-support-intro"><div><span className="eyebrow dark">{config.name} Resource Center</span><h2>Plan the storage correctly. Then price the right container.</h2></div><div className="knowledge-intro-action"><p>Field guides, professional diagrams and printable checks built around the decisions buyers make before delivery.</p><a href="#quote-form">Already know what you need? <b>Get the delivered price →</b></a></div></div>
    <div className="knowledge-feature-grid knowledge-feature-grid-visual">{featured.map((guide, index) => <Link className="knowledge-feature-card" href={`/${config.key}/guides/${guide.slug}`} key={guide.slug}><figure><Image src={config.featureImages[index]} alt={config.featureAlts[index]} fill sizes="(max-width: 800px) 100vw, 33vw" /></figure><div><span>{guide.category.replaceAll("-", " ")}</span><h3>{guide.navTitle}</h3><p>{guide.description}</p><b>Open field guide →</b></div></Link>)}</div>
    <div className="knowledge-proof-row"><div><strong>32</strong><span>field guides</span></div><div><strong>100</strong><span>direct answers</span></div><div><strong>1</strong><span>planning tool</span></div><div><strong>4</strong><span>downloadable reports</span></div><div className="knowledge-proof-actions"><Link className="button primary" href={`/${config.key}/resources`}>Explore resource center</Link><a className="button outline-dark" href="#quote-form">Get a free quote</a></div></div>
  </div></section>;
}
