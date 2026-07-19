import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://unitedcontainerdepot.com/"),
  title: {
    default: "Shipping Containers for Sale | United Container Depot",
    template: "%s | United Container Depot",
  },
  description:
    "Affordable new and used shipping containers delivered across the continental United States. Get a clear delivered price with no hidden fees.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Shipping Containers. Every Size. Delivered.",
    description: "Affordable new, used and specialty containers for real-world storage needs, delivered across 48 states.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "United Container Depot shipping containers in every size and delivered" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping Containers. Every Size. Delivered.",
    description: "Affordable new, used and specialty containers for real-world storage needs, delivered across 48 states.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://unitedcontainerdepot.com/#organization",
    name: "United Container Depot",
    url: "https://unitedcontainerdepot.com",
    telephone: "+1-855-525-0902",
    email: "info@unitedcontainerdepot.com",
    areaServed: { "@type": "Country", name: "United States" },
  };
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script src="/marketing-tracking.js" defer></script>
      </body>
    </html>
  );
}
