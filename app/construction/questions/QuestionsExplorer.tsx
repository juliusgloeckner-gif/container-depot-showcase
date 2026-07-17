"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type QuestionItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

const guideLinks: Record<string, { label: string; href: string }> = {
  Buying: { label: "Construction buying guide", href: "/construction/guides/construction-container-buying-guide" },
  Sizing: { label: "20FT vs 40FT guide", href: "/construction/guides/20ft-vs-40ft-construction" },
  Delivery: { label: "Delivery clearance guide", href: "/construction/guides/container-delivery-clearance" },
  "Site Preparation": { label: "Site preparation guide", href: "/construction/guides/container-site-preparation" },
  Security: { label: "Theft prevention guide", href: "/construction/guides/construction-site-theft-prevention" },
  Operations: { label: "Tool organization guide", href: "/construction/guides/container-tool-organization-shelving" },
  "Weather and Maintenance": { label: "Moisture control guide", href: "/construction/guides/container-ventilation-moisture-control" },
  Modifications: { label: "Electrical and lighting guide", href: "/construction/guides/container-electrical-lighting" },
  "Rules and Insurance": { label: "Permits guide", href: "/construction/guides/construction-container-permits" },
  "Cost and Ownership": { label: "Ownership calculator", href: "/construction/calculators/ownership" },
};

export function QuestionsExplorer({ items }: { items: QuestionItem[] }) {
  const categories = Array.from(new Set(items.map((item) => item.category)));
  const [category, setCategory] = useState("All questions");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const categoryMatch = category === "All questions" || item.category === category;
      const searchMatch = !normalized || `${item.question} ${item.answer}`.toLowerCase().includes(normalized);
      return categoryMatch && searchMatch;
    });
  }, [items, category, query]);

  const grouped = categories.map((name) => ({ name, items: filtered.filter((item) => item.category === name) })).filter((group) => group.items.length);

  return (
    <div className="question-explorer">
      <div className="question-controls">
        <label><span>Search all 100 answers</span><input type="search" placeholder="Try: muddy site, 20FT, lockbox, permit..." value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        <div className="question-filter" aria-label="Filter contractor questions">
          {["All questions", ...categories].map((name) => <button className={category === name ? "active" : ""} type="button" key={name} onClick={() => setCategory(name)}>{name}</button>)}
        </div>
      </div>

      <div className="question-count"><strong>{filtered.length}</strong><span>answers shown</span></div>
      {grouped.map((group) => (
        <section className="question-group" key={group.name} id={group.name.toLowerCase().replaceAll(" ", "-")}>
          <div className="question-group-head"><div><span>{String(categories.indexOf(group.name) + 1).padStart(2, "0")}</span><h2>{group.name}</h2></div><Link href={guideLinks[group.name].href}>{guideLinks[group.name].label} →</Link></div>
          <div className="question-list">
            {group.items.map((item) => <details key={item.id} id={`question-${item.id}`}><summary><span>{String(item.id).padStart(3, "0")}</span>{item.question}</summary><div><p>{item.answer}</p><Link href={guideLinks[group.name].href}>Go deeper: {guideLinks[group.name].label} →</Link></div></details>)}
          </div>
        </section>
      ))}
      {!filtered.length && <div className="resource-empty"><h2>No exact match.</h2><p>Try a shorter phrase or ask a container specialist at <a href="tel:18555250902">(855) 525-0902</a>.</p></div>}
    </div>
  );
}
