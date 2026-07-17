"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { KnowledgeQuestion, KnowledgeVertical } from "./data";

export function KnowledgeQuestionsExplorer({ vertical, items }: { vertical: KnowledgeVertical; items: KnowledgeQuestion[] }) {
  const categories = Array.from(new Set(items.map((item) => item.category)));
  const [category, setCategory] = useState("All questions");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => { const normalized = query.trim().toLowerCase(); return items.filter((item) => (category === "All questions" || item.category === category) && (!normalized || `${item.question} ${item.answer}`.toLowerCase().includes(normalized))); }, [items, category, query]);
  const grouped = categories.map((name) => ({ name, items: filtered.filter((item) => item.category === name) })).filter((group) => group.items.length);
  return <div className="question-explorer"><div className="question-controls"><label><span>Search all 100 answers</span><input type="search" placeholder="Try: wet ground, 20FT, lockbox, permit..." value={query} onChange={(event) => setQuery(event.target.value)} /></label><div className="question-filter" aria-label="Filter questions">{["All questions", ...categories].map((name) => <button className={category === name ? "active" : ""} type="button" key={name} onClick={() => setCategory(name)}>{name}</button>)}</div></div><div className="question-count"><strong>{filtered.length}</strong><span>answers shown</span></div>
    {grouped.map((group) => <section className="question-group" key={group.name}><div className="question-group-head"><div><span>{String(categories.indexOf(group.name) + 1).padStart(2, "0")}</span><h2>{group.name}</h2></div><Link href={`/${vertical}/guides/${group.items[0].guideSlug}`}>{group.items[0].guideTitle} →</Link></div><div className="question-list">{group.items.map((item) => <details key={item.id} id={`question-${item.id}`}><summary><span>{String(item.id).padStart(3, "0")}</span>{item.question}</summary><div><p>{item.answer}</p><Link href={`/${vertical}/guides/${item.guideSlug}`}>Go deeper: {item.guideTitle} →</Link></div></details>)}</div></section>)}
    {!filtered.length && <div className="resource-empty"><h2>No exact match.</h2><p>Try a shorter phrase or call <a href="tel:18555250902">(855) 525-0902</a>.</p></div>}
  </div>;
}
