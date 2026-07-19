import type { Metadata } from "next";
import { Footer, Header } from "../SiteShell";
export const metadata: Metadata = { title: "Terms of Service", description: "United Container Depot quote, inventory, delivery-access, site-preparation and purchase terms.", alternates: { canonical: "https://unitedcontainerdepot.com/terms" } };
export default function Terms() { return <main><Header /><article className="legal-page wrap"><h1>Terms of Service</h1><p>Quoted prices depend on container condition, local inventory, delivery distance and verified site access. Final product and delivery details are confirmed in writing before purchase.</p><p>Customers are responsible for local permits, zoning, site preparation and safe access unless otherwise agreed in writing.</p></article><Footer /></main>; }
