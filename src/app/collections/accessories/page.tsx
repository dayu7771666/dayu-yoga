import CollectionPageTemplate from "@/components/CollectionPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Yoga Accessories — Zenlume Yoga" };

const subCategories = [
  {
    label: "Yoga Mats",
    href: "/contact",
    image: "/hero-visual.jpg",
    desc: "Custom printed yoga mats. Choose thickness, texture and print design. MOQ 100 units.",
  },
  {
    label: "Yoga Bags & Carriers",
    href: "/contact",
    image: "/service-packaging.jpg",
    desc: "Mat carriers and gym bags. Custom fabric, color and logo application.",
  },
  {
    label: "Yoga Towels",
    href: "/contact",
    image: "/about-studio.jpg",
    desc: "Microfiber and cotton towels. Custom size, print and branded label.",
  },
  {
    label: "Resistance Bands",
    href: "/contact",
    image: "/service-logo.jpg",
    desc: "Fabric and latex resistance bands. Custom color, logo and packaging.",
  },
];

export default function AccessoriesCollectionPage() {
  return (
    <>
      <Navbar />
      <CollectionPageTemplate
        eyebrow="Collection"
        title="Yoga"
        titleBold="Accessories."
        subtitle="Custom yoga accessories manufactured to your specifications. Choose materials, define your branding, and we handle production at scale."
        heroImage="/about-studio.jpg"
        subCategories={subCategories}
        ctaTitle="Need a custom\naccessories line?"
        ctaBody="Tell us what you need and we will produce it. MOQ and pricing confirmed within 24 hours."
      />
      <Footer />
    </>
  );
}
