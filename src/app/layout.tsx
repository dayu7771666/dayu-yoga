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

export const metadata: Metadata = {
  title: "Zenlume Yoga — Crafting the Soul of Your Yoga Brand",
  description:
    "One-click custom yoga branding for designers and entrepreneurs. From bespoke logos to premium packaging, we bring your yoga brand to life.",
  keywords: "yoga branding, custom logo, yoga packaging, brand identity, yoga studio design, one-click customization",
  openGraph: {
    title: "Zenlume Yoga — Crafting the Soul of Your Yoga Brand",
    description: "One-click custom yoga branding for designers and entrepreneurs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
