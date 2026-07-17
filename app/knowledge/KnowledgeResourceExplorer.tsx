"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { KnowledgeCategory, KnowledgeGuide, KnowledgeVertical } from "./data";
import { KnowledgeGuideIcon } from "./KnowledgeGuideIcon";

export function KnowledgeResourceExplorer({ vertical, guides, categories }: { vertical: KnowledgeVertical; guides: KnowledgeGuide[]; categories: KnowledgeCategory[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return guides.filter((guide) => (category === "all" || guide.category === category) && (!normalized || `${guide.title} ${guide.description} ${guide.navTitle}`.toLowerCase().includes(normalized)));
  }, [guides, query, category]);

  return <div className="resource-explorer"><div className="resource-controls"><label><span>Find a field answer</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try: delivery, moisture, security, 20FT..." type="search" /></label><div className="resource-filter" aria-label="Filter guides by topic"><button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")} type="button">All</button>{categories.map((item) => <button className={category === item.key ? "active" : ""} onClick={() => setCategory(item.key)} type="button" key={item.key}>{item.name}</button>)}</div></div>
    <div className="resource-result-head"><b>{filtered.length} field guides</b><span>Direct answer first. Exact-unit verification throughout.</span></div>
    <div className="resource-guide-grid">{filtered.map((guide) => { const originalIndex = guides.findIndex((item) => item.slug === guide.slug); return <Link className={`resource-guide-card resource-guide-${guide.category}`} href={`/${vertical}/guides/${guide.slug}`} key={guide.slug}><div className="resource-guide-visual" aria-hidden="true"><span>{String(originalIndex + 1).padStart(2, "0")}</span><KnowledgeGuideIcon category={guide.category}/></div><div><span>{guide.category.replaceAll("-", " ")}</span><h2>{guide.navTitle}</h2><p>{guide.description}</p><b>Open field guide →</b></div></Link>; })}</div>
    {!filtered.length && <div className="resource-empty"><h2>No exact match.</h2><p>Try a broader term or call a container specialist at <a href="tel:18555250902">(855) 525-0902</a>.</p></div>}
  </div>;
}
