import Link from "next/link";
import Image from "next/image";
import { AutoClosingDetails } from "../AutoClosingDetails";
import { popularUses, specialtyContainers } from "../navigation";

export function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="wrap utility-inner">
          <span>American owned since 2015</span>
          <span>4,200+ containers delivered</span>
          <span>48 states served</span>
        </div>
      </div>
      <header className="site-header construction-site-header">
        <div className="wrap nav-inner">
          <Link href="/construction" className="wordmark" aria-label="United Container Depot construction containers">
            <span className="flag-mark" aria-hidden="true"><Image src="/us-flag.png" alt="" fill sizes="52px" /></span>
            <span>United Container Depot</span>
          </Link>
          <AutoClosingDetails className="mobile-menu" summary={<><span className="menu-icon" aria-hidden="true"></span><span>Menu</span></>}>
            <div className="mobile-menu-panel">
              <span className="mobile-menu-label">Popular uses</span>
              <div className="mobile-menu-links">
                {popularUses.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              </div>
              <Link className="mobile-menu-feature" href="/tools"><span>Buyer tools</span><strong>Decision tools</strong></Link>
              <span className="mobile-menu-label">Specialty containers</span>
              <div className="mobile-menu-links">
                {specialtyContainers.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              </div>
              <span className="mobile-menu-label">Construction guides</span>
              <div className="mobile-menu-links">
                <Link href="/construction/guides/construction-site-theft-prevention">Security</Link>
                <Link href="/construction/guides/construction-container-buying-guide">Buying guides</Link>
                <Link href="/construction/guides/container-site-preparation">Site planning</Link>
                <Link href="/construction/guides/container-tool-organization-shelving">Jobsite operations</Link>
                <Link href="/construction/calculators/ownership">Cost and ownership</Link>
                <Link href="/construction/resources/construction-container-statistics">Construction data</Link>
                <Link href="/construction/questions">100 questions</Link>
              </div>
              <div className="mobile-menu-main mobile-menu-actions">
                <a href="tel:18555250902">Call (855) 525-0902</a>
                <a className="mobile-menu-quote" href="#quote-form">Get a quote</a>
              </div>
            </div>
          </AutoClosingDetails>
          <nav aria-label="Main navigation">
            <AutoClosingDetails className="desktop-use-menu" name="construction-header-menu" summary="Popular uses">
              <div className="desktop-use-dropdown">
                <span className="desktop-menu-heading">Choose a use</span>
                {popularUses.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
                <span className="desktop-menu-heading desktop-menu-subheading">Specialty containers</span>
                {specialtyContainers.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              </div>
            </AutoClosingDetails>
            <AutoClosingDetails className="desktop-use-menu" name="construction-header-menu" summary="Construction guides">
              <div className="desktop-use-dropdown">
                <span className="desktop-menu-heading">Plan and run jobsite storage</span>
                <Link href="/construction/guides/construction-site-theft-prevention">Security</Link>
                <Link href="/construction/guides/construction-container-buying-guide">Buying guides</Link>
                <Link href="/construction/guides/container-site-preparation">Site planning</Link>
                <Link href="/construction/guides/container-tool-organization-shelving">Jobsite operations</Link>
                <Link href="/construction/calculators/ownership">Cost and ownership</Link>
                <Link href="/construction/resources/construction-container-statistics">Construction data</Link>
                <Link href="/construction/resources">All 32 guides</Link>
                <Link href="/construction/questions">100 questions</Link>
              </div>
            </AutoClosingDetails>
            <Link href="/tools">Decision tools</Link>
          </nav>
          <div className="nav-actions">
            <a className="phone" href="tel:18555250902">(855) 525-0902</a>
            <a className="button small primary" href="#quote-form">Get a quote</a>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="wordmark footer-wordmark"><span className="flag-mark" aria-hidden="true"><Image src="/us-flag.png" alt="" fill sizes="52px" /></span><span>United Container Depot</span></div>
          <p>New and used shipping containers delivered across the continental United States.</p>
          <a className="footer-phone" href="tel:18555250902">(855) 525-0902</a>
        </div>
        <div>
          <h3>Containers</h3>
          <Link href="/construction#inventory">20FT Standard</Link>
          <Link href="/construction#inventory">40FT Standard</Link>
          <Link href="/construction#inventory">40FT High Cube</Link>
          <Link href="/construction#inventory">Custom Modified</Link>
          {specialtyContainers.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Resource center</h3>
          <Link href="/construction/resources">All field guides</Link>
          <Link href="/construction/questions">100 contractor questions</Link>
          <Link href="/construction/calculators/container-size">Size education center</Link>
          <Link href="/construction/calculators/ownership">Ownership calculator</Link>
          <Link href="/construction/resources/construction-container-statistics">Construction data brief</Link>
          <Link href="/construction/resources#downloads">Downloads</Link>
        </div>
        <div>
          <h3>Company</h3>
          <a href="mailto:info@unitedcontainerdepot.com">info@unitedcontainerdepot.com</a>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of service</Link>
        </div>
      </div>
      <div className="wrap legal">© 2026 United Container Depot. All rights reserved.</div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href="tel:18555250902">Call now</a>
      <a href="#quote-form">Get free quote</a>
    </div>
  );
}
