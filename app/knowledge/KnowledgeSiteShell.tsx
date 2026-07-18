import Image from "next/image";
import Link from "next/link";
import { AutoClosingDetails } from "../AutoClosingDetails";
import { popularUses, specialtyContainers } from "../navigation";
import type { KnowledgeConfig } from "./data";

export function KnowledgeHeader({ config }: { config: KnowledgeConfig }) {
  const quoteHref = `/${config.key}?quote=1#quote-form`;
  return <>
    <div className="utility-bar"><div className="wrap utility-inner"><span>American owned since 2015</span><span>4,200+ containers delivered</span><span>48 states served</span></div></div>
    <header className="site-header construction-site-header">
      <div className="wrap nav-inner">
        <Link href={`/${config.key}`} className="wordmark" aria-label={`United Container Depot ${config.name}`}>
          <span className="flag-mark" aria-hidden="true"><Image src="/us-flag.png" alt="" fill sizes="52px" /></span><span>United Container Depot</span>
        </Link>
        <AutoClosingDetails className="mobile-menu" summary={<><span className="menu-icon" aria-hidden="true"></span><span>Menu</span></>}>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-main"><Link href={`/${config.key}`}>{config.name} containers</Link><Link href={`/${config.key}/resources`}>Resource center</Link><a href="tel:18555250902">Call (855) 525-0902</a><Link className="mobile-menu-quote" href={quoteHref}>Get a quote</Link></div>
            <span className="mobile-menu-label">Popular uses</span><div className="mobile-menu-links">{popularUses.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
            <span className="mobile-menu-label">{config.shortName} guides</span><div className="mobile-menu-links">{config.categories.map((category) => { const guide = config.guides.find((item) => item.category === category.key); return guide ? <Link href={`/${config.key}/guides/${guide.slug}`} key={category.key}>{category.name}</Link> : null; })}<Link href={`/${config.key}/questions`}>100 questions</Link><Link href={`/${config.key}/planner`}>Size education center</Link></div>
          </div>
        </AutoClosingDetails>
        <nav aria-label="Main navigation">
          <Link href={`/${config.key}#inventory`}>Container options</Link>
          <AutoClosingDetails className="desktop-use-menu" name={`${config.key}-header-menu`} summary="Popular uses"><div className="desktop-use-dropdown"><span className="desktop-menu-heading">Choose a use</span>{popularUses.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<span className="desktop-menu-heading desktop-menu-subheading">Specialty containers</span>{specialtyContainers.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div></AutoClosingDetails>
          <AutoClosingDetails className="desktop-use-menu" name={`${config.key}-header-menu`} summary={`${config.shortName} guides`}><div className="desktop-use-dropdown knowledge-menu-dropdown"><span className="desktop-menu-heading">Plan {config.context}</span>{config.categories.map((category) => { const guide = config.guides.find((item) => item.category === category.key); return guide ? <Link href={`/${config.key}/guides/${guide.slug}`} key={category.key}>{category.name}</Link> : null; })}<Link href={`/${config.key}/resources`}>All 32 guides</Link><Link href={`/${config.key}/questions`}>100 questions</Link><Link href={`/${config.key}/planner`}>Size education center</Link></div></AutoClosingDetails>
        </nav>
        <div className="nav-actions"><a className="phone" href="tel:18555250902">(855) 525-0902</a><Link className="button small primary" href={quoteHref}>Get a quote</Link></div>
      </div>
    </header>
  </>;
}

export function KnowledgeFooter({ config }: { config: KnowledgeConfig }) {
  return <footer className="footer"><div className="wrap footer-grid"><div><div className="wordmark footer-wordmark"><span className="flag-mark" aria-hidden="true"><Image src="/us-flag.png" alt="" fill sizes="52px" /></span><span>United Container Depot</span></div><p>New and used shipping containers delivered across the continental United States.</p><a className="footer-phone" href="tel:18555250902">(855) 525-0902</a></div><div><h3>{config.name}</h3><Link href={`/${config.key}`}>Container options</Link><Link href={`/${config.key}/planner`}>Size education center</Link><Link href={`/${config.key}/questions`}>100 questions</Link><Link href={`/${config.key}?quote=1#quote-form`}>Get delivered price</Link></div><div><h3>Resource center</h3><Link href={`/${config.key}/resources`}>All 32 field guides</Link>{config.categories.slice(0, 4).map((category) => { const guide = config.guides.find((item) => item.category === category.key); return guide ? <Link href={`/${config.key}/guides/${guide.slug}`} key={category.key}>{category.name}</Link> : null; })}<Link href={`/${config.key}/resources#downloads`}>Downloads</Link></div><div><h3>Company</h3><a href="mailto:info@unitedcontainerdepot.com">info@unitedcontainerdepot.com</a><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div></div><div className="wrap legal">© 2026 United Container Depot. All rights reserved.</div></footer>;
}

export function KnowledgeMobileBar({ config }: { config: KnowledgeConfig }) {
  return <div className="mobile-bar"><a href="tel:18555250902">Call now</a><Link href={`/${config.key}?quote=1#quote-form`}>Get free quote</Link></div>;
}
