import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { knowledgeConfig, knowledgeKeys } from "../../knowledge/data";
import { KnowledgePlanner } from "../../knowledge/KnowledgePlanner";
import { KnowledgeFooter, KnowledgeHeader, KnowledgeMobileBar } from "../../knowledge/KnowledgeSiteShell";

export function generateStaticParams() { return knowledgeKeys.map((vertical) => ({ vertical })); }

export async function generateMetadata({ params }: { params: Promise<{ vertical: string }> }): Promise<Metadata> {
  const { vertical } = await params;
  const config = knowledgeConfig(vertical);
  if (!config) return {};
  return { title: `${config.name} Container Size Education Center`, description: `Compare 20FT, 40FT and High Cube capacity, proportions and common uses for ${config.context}.`, alternates: { canonical: `https://unitedcontainerdepot.com/${config.key}/planner` } };
}

export default async function PlannerPage({ params }: { params: Promise<{ vertical: string }> }) {
  const { vertical } = await params;
  const config = knowledgeConfig(vertical);
  if (!config) notFound();
  return <main className="resource-page"><KnowledgeHeader config={config}/><div className="guide-topbar"><div className="wrap"><Link href={`/${config.key}`}>{config.name} containers</Link><span>/</span><Link href={`/${config.key}/resources`}>Resource center</Link><span>/</span><b>Size education center</b></div></div><header className="planner-hero"><div className="wrap"><span className="eyebrow">Choose the size first</span><h1>See the space, capacity and common uses before you request a quote.</h1><p>Select 20FT, 40FT or 40FT High Cube. One clear comparison replaces the old multi-question shortlist, and your choice carries directly into the quote form.</p></div></header><section className="section planner-section"><div className="wrap"><KnowledgePlanner config={config}/><div className="planner-limits"><span className="eyebrow dark">What size alone does not decide</span><h2>The exact unit, contents and site still control.</h2><div>{config.safetyGates.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section><KnowledgeFooter config={config}/><KnowledgeMobileBar config={config}/></main>;
}
