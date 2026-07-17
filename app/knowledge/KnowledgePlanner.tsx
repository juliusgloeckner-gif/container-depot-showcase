"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { KnowledgeConfig } from "./data";

type Result = { title: string; text: string; checks: string[] };

export function KnowledgePlanner({ config }: { config: KnowledgeConfig }) {
  const [result, setResult] = useState<Result | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const site = String(data.get("site"));
    const volume = String(data.get("volume"));
    const access = String(data.get("access"));
    const likely40 = site === "40" && (volume === "large" || access === "reserve");
    const title = likely40 ? "Start the quote with a 40FT comparison." : "Start the quote with a 20FT comparison.";
    const text = likely40 ? "The available site and stated storage pattern make a 40FT option worth pricing beside a 20FT alternative." : "The stated site or retrieval pattern makes a 20FT option the safer first comparison. A 40FT may still be useful if the route and exact workflow support it.";
    const verticalCheck = config.key === "farm" ? "List any feed, seed, pesticides, fertilizers, fuel, batteries or animal health products separately." : config.key === "business" ? "List food, chemicals, electronics, records or other sensitive inventory separately." : "Measure the exact vehicle, mirrors, door opening, driver exit space and loading approach.";
    setResult({ title, text, checks: [verticalCheck, "Send current route and placement photos with measured clearances.", "Verify the exact unit dimensions and condition before purchase.", "Treat this as a quote starting point, not a fit, site or safety approval."] });
  }
  return <div className="knowledge-planner"><form onSubmit={submit}><div><span>01</span><label>Longest available straight placement area<select name="site" defaultValue="20"><option value="20">About 20FT plus working clearance</option><option value="40">About 40FT plus working clearance</option><option value="unknown">Not measured yet</option></select></label></div><div><span>02</span><label>Amount of storage<select name="volume" defaultValue="medium"><option value="small">A focused group of items</option><option value="medium">Mixed everyday and reserve items</option><option value="large">Pallets, bulky gear or seasonal reserve</option></select></label></div><div><span>03</span><label>How the space will be accessed<select name="access" defaultValue="daily"><option value="daily">Daily or several times a week</option><option value="seasonal">Seasonally</option><option value="reserve">Mostly reserve capacity</option></select></label></div><button className="button primary" type="submit">Build my starting shortlist</button></form>{result && <aside className="planner-result" aria-live="polite"><span>Planning result</span><h2>{result.title}</h2><p>{result.text}</p><ul>{result.checks.map((item) => <li key={item}>{item}</li>)}</ul><Link className="button primary" href={`/${config.key}?quote=1#quote-form`}>Price this shortlist</Link></aside>}</div>;
}
