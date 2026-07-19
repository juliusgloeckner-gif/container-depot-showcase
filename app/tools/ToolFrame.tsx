import Link from "next/link";
import { Footer, Header, MobileBar } from "../SiteShell";

export function ToolFrame({ title, eyebrow, lead, children }: { title: string; eyebrow: string; lead: string; children: React.ReactNode }) {
  return <main className="tools-page"><Header/><div className="guide-topbar"><div className="wrap"><Link href="/">Containers</Link><span>/</span><Link href="/tools">Decision tools</Link><span>/</span><b>{eyebrow}</b></div></div><header className="calculator-hero tools-hero"><div className="wrap"><span className="eyebrow dark">Professional buying tool</span><h1>{title}</h1><p>{lead}</p></div></header><section className="section"><div className="wrap">{children}</div></section><Footer/><MobileBar/></main>;
}
