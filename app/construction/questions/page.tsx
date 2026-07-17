import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, MobileBar } from "../SiteShell";
import questionData from "../faq-data.json";
import { QuestionsExplorer, type QuestionItem } from "./QuestionsExplorer";

const questions = questionData as QuestionItem[];

export const metadata: Metadata = {
  title: "100 Construction Container Questions Answered",
  description: "Direct contractor answers about buying, sizing, delivery, site preparation, security, operations, modifications, rules and construction container ownership.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://unitedcontainerdepot.com/construction/questions" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

export default function QuestionsPage() {
  return (
    <main className="questions-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <div className="guide-topbar"><div className="wrap"><Link href="/construction">Construction containers</Link><span>/</span><Link href="/construction/resources">Resource center</Link><span>/</span><b>100 questions</b></div></div>
      <header className="questions-hero">
        <div className="wrap questions-hero-grid">
          <div><span className="eyebrow">Contractor question library</span><h1>100 construction container questions. Direct answers first.</h1><p>Search the question your superintendent, estimator or project manager is asking. Each answer connects to a deeper guide, calculator or field checklist.</p><div className="resource-hero-actions"><a className="button primary" href="#question-library">Search the answers</a><a className="button outline-light" href="/downloads/ucd-100-construction-container-questions.pdf" download>Download handbook</a></div></div>
          <figure><Image src="/container-20ft.jpg" alt="Twenty foot construction container ready for a jobsite delivery decision" fill priority sizes="(max-width: 800px) 100vw, 42vw" /><figcaption><strong>10</strong><span>practical topics</span><strong>100</strong><span>direct answers</span></figcaption></figure>
        </div>
      </header>
      <section className="faq-safety-gate" aria-labelledby="faq-safety-title">
        <div className="wrap">
          <div className="faq-safety-intro"><span className="eyebrow dark">Before you act on an answer</span><h2 id="faq-safety-title">Five decisions still require project-specific verification.</h2><p>This library is a screening resource, not a site authorization, engineering design or hazardous-material approval. The exact container, site and intended use control.</p></div>
          <ol className="faq-safety-grid">
            <li><strong>Carrier</strong><span>Approves route, equipment, unload zone and any loaded move.</span></li>
            <li><strong>Site and utilities</strong><span>Confirms bearing, drainage, underground services and overhead hazards.</span></li>
            <li><strong>Local authority</strong><span>Confirms permits for permanent, modified or occupied use.</span></li>
            <li><strong>Qualified design</strong><span>Controls foundations, structural cuts, electrical work and occupancy.</span></li>
            <li><strong>SDS and safety rules</strong><span>Control fuels, chemicals, batteries and compressed gases.</span></li>
          </ol>
          <div className="faq-source-row"><span>Primary safety references:</span><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.250" target="_blank" rel="noreferrer">OSHA material storage</a><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.350" target="_blank" rel="noreferrer">OSHA compressed gases</a><a href="https://codes.iccsafe.org/content/ICCG52019/current-code-requirements" target="_blank" rel="noreferrer">ICC container guidance</a><a href="https://www.fmcsa.dot.gov/regulations/cargo-securement/cargo-securement-rules" target="_blank" rel="noreferrer">FMCSA securement</a></div>
        </div>
      </section>
      <section className="section question-library-section" id="question-library"><div className="wrap"><QuestionsExplorer items={questions} /></div></section>
      <section className="resource-conversion-cta"><div className="wrap"><div><span className="eyebrow">Have the answer?</span><h2>Now get the delivered price for the project.</h2><p>Send the ZIP, size and jobsite use. A specialist will confirm nearby inventory and access requirements.</p></div><div><Link className="button primary" href="/construction?quote=1#quote-form">Get my delivered price</Link><a href="tel:18555250902">Call (855) 525-0902</a></div></div></section>
      <Footer /><MobileBar />
    </main>
  );
}
