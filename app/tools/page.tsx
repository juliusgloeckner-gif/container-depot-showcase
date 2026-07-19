import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, MobileBar } from "../SiteShell";
export const metadata: Metadata = { title: "Shipping Container Buying Tools", description: "Professional container cost, size, buy-versus-rent, delivery-clearance and condition-grade tools for better purchase decisions.", alternates: { canonical: "https://unitedcontainerdepot.com/tools" } };
const tools = [
  ["Delivered-cost worksheet", "Build the complete scenario from written unit, delivery, site and modification costs.", "/tools/delivered-cost", "01"],
  ["20FT versus 40FT selector", "Compare proportional size, footprint, volume and common fit before requesting inventory.", "/tools/container-size", "02"],
  ["Buy versus rent calculator", "Compare complete ownership and rental cash flows across the actual holding period.", "/tools/buy-vs-rent", "03"],
  ["Delivery-clearance checker", "Screen approach length, width, overhead clearance, surface and turning constraints.", "/tools/delivery-clearance", "04"],
  ["Condition-grade comparison", "Understand One Trip, Cargo Worthy, Wind and Watertight, and As Is without mixing the terms.", "/tools/condition-grades", "05"],
];
export default function ToolsHub(){return <main className="tools-page"><Header/><header className="resource-hero tools-hub-hero"><div className="wrap"><span className="eyebrow">Container decision center</span><h1>Make the expensive decisions before the truck is scheduled.</h1><p>Five practical tools built around measured inputs, written quotes and explicit verification gates. No fake national pricing and no automated delivery approval.</p></div></header><section className="section"><div className="wrap tool-hub-grid">{tools.map(([title,text,href,index])=><Link href={href} key={href}><b>{index}</b><div><h2>{title}</h2><p>{text}</p><span>Open tool ›</span></div></Link>)}</div></section><section className="final-cta"><div className="wrap final-inner"><div><span className="eyebrow">Need the exact number?</span><h2>Get local inventory and one delivered price.</h2></div><Link className="button primary" href="/?quote=1#quote-form">Get a free quote</Link></div></section><Footer/><MobileBar/></main>}
