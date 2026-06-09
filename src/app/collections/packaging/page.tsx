import type { Metadata } from "next";
import CollectionPageTemplate from "@/components/CollectionPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom Packaging — Zenlume Yoga",
  description:
    "Custom yoga brand packaging including shopping bags, gift boxes, hang tags, tissue paper and inserts. Full branding solutions from China manufacturer. MOQ 100 units.",
  keywords: "custom yoga packaging, branded gift boxes, yoga hang tags, private label packaging manufacturer",
  alternates: { canonical: "https://www.yogaoh.com/collections/packaging" },
  openGraph: {
    title: "Custom Packaging — Zenlume Yoga",
    description:
      "Custom yoga brand packaging including shopping bags, gift boxes, hang tags, tissue paper and inserts. Full branding solutions from China manufacturer.",
    type: "website",
    url: "https://www.yogaoh.com/collections/packaging",
    siteName: "Zenlume Yoga",
  },
};

const subCategories = [
  {
    label: "Shopping Bags",
    href: "/contact",
    image: "/service-packaging.jpg",
    desc: "Paper and fabric shopping bags. Custom size, material, print and handle. MOQ 100 units.",
  },
  {
    label: "Gift Boxes",
    href: "/contact",
    image: "/hero-visual.jpg",
    desc: "Rigid and folding gift boxes. Custom dimensions, finish and logo deboss.",
  },
  {
    label: "Hang Tags & Labels",
    href: "/contact",
    image: "/service-logo.jpg",
    desc: "Woven, printed and leather hang tags. Custom shape, color and branding.",
  },
  {
    label: "Tissue Paper & Inserts",
    href: "/contact",
    image: "/about-studio.jpg",
    desc: "Custom printed tissue paper and branded inserts. MOQ 200 sheets.",
  },
];

export default function PackagingCollectionPage() {
  return (
    <>
      <Navbar />
      <CollectionPageTemplate
        eyebrow="Collection"
        title="Custom"
        titleBold="Packaging."
        subtitle="Your packaging is the first physical touchpoint of your brand. Choose your materials, define your print, and we produce it exactly as specified."
        heroImage="/service-packaging.jpg"
        subCategories={subCategories}
        ctaTitle="Ready to produce\nyour brand packaging?"
        ctaBody="Share your packaging specs and receive a production quote within 24 hours. All materials NDA-protected."
      />
      <Footer />
    </>
  );
}
