import CollectionPageTemplate from "@/components/CollectionPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Yoga Apparel — Zenlume Yoga" };

const subCategories = [
  {
    label: "Full-length Leggings",
    href: "/products/leggings",
    image: "/hero-visual.jpg",
    desc: "High-waist, 4-way stretch. Custom fabric, print & logo. MOQ 50 units.",
  },
  {
    label: "Capri Leggings",
    href: "/products/capri",
    image: "/service-packaging.jpg",
    desc: "7/8 length. Ideal for studio and outdoor practice. Custom colorways.",
  },
  {
    label: "Shorts",
    href: "/products/shorts",
    image: "/about-studio.jpg",
    desc: "Biker shorts and training shorts. Custom waistband and print options.",
  },
  {
    label: "Sports Bras",
    href: "/products/sports-bras",
    image: "/service-logo.jpg",
    desc: "Low to high impact. Custom strap design, fabric and logo application.",
  },
  {
    label: "Fitted Tops",
    href: "/products/fitted-tops",
    image: "/hero-visual.jpg",
    desc: "Crop and full-length fitted tops. Custom neckline, fabric and print.",
  },
  {
    label: "Relaxed Tops",
    href: "/products/relaxed-tops",
    image: "/service-packaging.jpg",
    desc: "Flowy and oversized silhouettes. Custom cut, fabric and branding.",
  },
  {
    label: "Matching Sets",
    href: "/products/matching-sets",
    image: "/about-studio.jpg",
    desc: "Coordinated top and bottom sets. Unified fabric, print and logo.",
  },
  {
    label: "Outerwear & Warmup",
    href: "/products/jackets",
    image: "/service-logo.jpg",
    desc: "Jackets and winter yoga wear. Custom lining, zipper and branding.",
  },
];

export default function YogaCollectionPage() {
  return (
    <>
      <Navbar />
      <CollectionPageTemplate
        eyebrow="Collection"
        title="Yoga"
        titleBold="Apparel."
        subtitle="Select your category, choose your fabrics, define your prints and logo application — we handle production from sample to bulk delivery."
        heroImage="/hero-visual.jpg"
        subCategories={subCategories}
        ctaTitle="Ready to produce\nyour yoga apparel line?"
        ctaBody="Share your specs and receive a detailed production quote within 24 hours. MOQ from 50 units per style."
      />
      <Footer />
    </>
  );
}
