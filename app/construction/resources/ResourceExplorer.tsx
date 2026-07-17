"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GuideCardIcon } from "./GuideCardIcon";

export type ResourceGuide = {
  slug: string;
  title: string;
  navTitle: string;
  description: string;
  category: string;
};

export type ResourceCategory = {
  key: string;
  name: string;
};

export function ResourceExplorer({ guides, categories }: { guides: ResourceGuide[]; categories: ResourceCategory[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return guides.filter((guide) => {
      const categoryMatch = category === "all" || guide.category === category;
      const queryMatch = !normalized || `${guide.title} ${guide.description} ${guide.navTitle}`.toLowerCase().includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [guides, query, category]);

  return (
    <div className="resource-explorer">
      <div className="resource-controls">
        <label>
          <span>Find a field answer</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try: delivery clearance, lockbox, 20FT..." type="search" />
        </label>
        <div className="resource-filter" aria-label="Filter guides by topic">
          <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")} type="button">All</button>
          {categories.map((item) => <button className={category === item.key ? "active" : ""} onClick={() => setCategory(item.key)} type="button" key={item.key}>{item.name}</button>)}
        </div>
      </div>

      <div className="resource-result-head"><b>{filtered.length} field guides</b><span>Direct answer first. Detailed operating guidance below.</span></div>
      <div className="resource-guide-grid">
        {filtered.map((guide, index) => (
          <Link className={`resource-guide-card resource-guide-${guide.category}`} href={`/construction/guides/${guide.slug}`} key={guide.slug}>
            <div className="resource-guide-visual" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><GuideCardIcon slug={guide.slug} /></div>
            <div><span>{guide.category.replace("-", " ")}</span><h2>{guide.navTitle}</h2><p>{guide.description}</p><b>Open field guide →</b></div>
          </Link>
        ))}
      </div>
      {!filtered.length && <div className="resource-empty"><h2>No exact match yet.</h2><p>Try a broader term or call a container specialist at <a href="tel:18555250902">(855) 525-0902</a>.</p></div>}
    </div>
  );
}
