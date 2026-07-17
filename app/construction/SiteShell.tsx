import Link from "next/link";
import Image from "next/image";

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
      <header className="site-header">
        <div className="wrap nav-inner">
          <Link href="/construction" className="wordmark" aria-label="United Container Depot construction containers">
            <span className="flag-mark" aria-hidden="true"><Image src="/us-flag.png" alt="" fill sizes="52px" /></span>
            <span>United Container Depot</span>
          </Link>
          <details className="mobile-menu">
            <summary><span className="menu-icon" aria-hidden="true"></span><span>Menu</span></summary>
            <div className="mobile-menu-panel">
              <div className="mobile-menu-main">
                <Link href="/construction#inventory">Container options</Link>
                <Link href="/construction/resources">Resource center</Link>
                <a href="tel:18555250902">Call (855) 525-0902</a>
                <Link className="mobile-menu-quote" href="/construction?quote=1#quote-form">Get a quote</Link>
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
            </div>
          </details>
          <nav aria-label="Main navigation">
            <Link href="/construction#inventory">Container options</Link>
            <details className="desktop-use-menu">
              <summary>Construction guides</summary>
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
            </details>
          </nav>
          <div className="nav-actions">
            <a className="phone" href="tel:18555250902">(855) 525-0902</a>
            <Link className="button small primary" href="/construction?quote=1#quote-form">Get a quote</Link>
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
        </div>
        <div>
          <h3>Resource center</h3>
          <Link href="/construction/resources">All field guides</Link>
          <Link href="/construction/questions">100 contractor questions</Link>
          <Link href="/construction/calculators/container-size">Size selector</Link>
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
      <Link href="/construction?quote=1#quote-form">Get free quote</Link>
    </div>
  );
}
