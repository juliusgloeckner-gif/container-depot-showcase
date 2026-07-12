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
          <Link href="/" className="wordmark" aria-label="United Container Depot home">
            <span className="flag-mark" aria-hidden="true"><Image src="/us-flag.png" alt="" fill sizes="52px" /></span>
            <span>United Container Depot</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#inventory">Containers</Link>
            <Link href="/#industries">Storage uses</Link>
          </nav>
          <div className="nav-actions">
            <a className="phone" href="tel:18555250902">(855) 525-0902</a>
            <Link className="button small primary" href="#quote-form">Get a quote</Link>
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
          <Link href="/#inventory">20FT Standard</Link>
          <Link href="/#inventory">40FT Standard</Link>
          <Link href="/#inventory">40FT High Cube</Link>
          <Link href="/#inventory">Custom Modified</Link>
        </div>
        <div>
          <h3>Storage uses</h3>
          <Link href="/construction">Construction sites</Link>
          <Link href="/farm">Farms and ranches</Link>
          <Link href="/business">Business overflow</Link>
          <Link href="/moving">Moving and relocation</Link>
          <Link href="/renovation">Renovation storage</Link>
          <Link href="/vehicles">Vehicles and recreation</Link>
          <Link href="/events">Events and production</Link>
          <Link href="/institutions">Schools and institutions</Link>
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
