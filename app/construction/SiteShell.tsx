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
      <header className="site-header construction-site-header">
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
                <a className="mobile-menu-quote" href="#quote-form">Get a quote</a>
              </div>
              <span className="mobile-menu-label">Storage by use</span>
              <div className="mobile-menu-links">
                <Link href="/construction">Construction sites</Link>
                <Link href="/farm">Farms and ranches</Link>
                <Link href="/business">Business overflow</Link>
                <Link href="/moving">Moving and relocation</Link>
                <Link href="/renovation">Renovation storage</Link>
                <Link href="/vehicles">Vehicles and recreation</Link>
                <Link href="/events">Events and production</Link>
                <Link href="/institutions">Schools and institutions</Link>
              </div>
              <span className="mobile-menu-label">Specialty containers and export</span>
              <div className="mobile-menu-links">
                <Link href="/refrigerated-containers">Refrigerated / reefers</Link>
                <Link href="/open-side-containers">Open side / roll-up</Link>
                <Link href="/double-door-containers">Double door / tunnel</Link>
                <Link href="/international-shipping-containers">International shipping / export</Link>
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
            <details className="desktop-use-menu" name="construction-header-menu">
              <summary>Storage solutions</summary>
              <div className="desktop-use-dropdown">
                <span className="desktop-menu-heading">Shop by use</span>
                <Link href="/construction">Construction sites</Link>
                <Link href="/farm">Farms and ranches</Link>
                <Link href="/business">Business overflow</Link>
                <Link href="/moving">Moving and relocation</Link>
                <Link href="/renovation">Renovation storage</Link>
                <Link href="/vehicles">Vehicles and recreation</Link>
                <Link href="/events">Events and production</Link>
                <Link href="/institutions">Schools and institutions</Link>
                <span className="desktop-menu-heading desktop-menu-subheading">Specialty containers and export</span>
                <Link href="/refrigerated-containers">Refrigerated / reefers</Link>
                <Link href="/open-side-containers">Open side / roll-up</Link>
                <Link href="/double-door-containers">Double door / tunnel</Link>
                <Link href="/international-shipping-containers">International shipping / export</Link>
              </div>
            </details>
            <details className="desktop-use-menu" name="construction-header-menu">
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
          <Link href="/refrigerated-containers">Refrigerated / Reefers</Link>
          <Link href="/open-side-containers">Open Side / Roll-Up</Link>
          <Link href="/double-door-containers">Double Door / Tunnel</Link>
          <Link href="/international-shipping-containers">International Shipping / Export</Link>
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
      <a href="#quote-form">Get free quote</a>
    </div>
  );
}
