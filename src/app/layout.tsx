import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const BASE_URL = "https://www.yogaoh.com";

export const metadata: Metadata = {
  title: "Zenlume Yoga — Crafting the Soul of Your Yoga Brand",
  description:
    "One-click custom yoga branding for designers and entrepreneurs. From bespoke logos to premium packaging, we bring your yoga brand to life.",
  keywords: "yoga branding, custom logo, yoga packaging, brand identity, yoga studio design, one-click customization",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Zenlume Yoga — Crafting the Soul of Your Yoga Brand",
    description: "One-click custom yoga branding for designers and entrepreneurs.",
    type: "website",
    url: BASE_URL,
    siteName: "Zenlume Yoga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenlume Yoga — Crafting the Soul of Your Yoga Brand",
    description: "One-click custom yoga branding for designers and entrepreneurs.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zenlume Yoga",
  url: BASE_URL,
  logo: `${BASE_URL}/zenlume-logo.png`,
  description:
    "One-click custom yoga branding for designers and entrepreneurs. From bespoke logos to premium packaging, we bring your yoga brand to life.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Chinese"],
  },
  sameAs: ["https://www.instagram.com/zenlumeyoga"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zenlume Yoga",
  url: BASE_URL,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
