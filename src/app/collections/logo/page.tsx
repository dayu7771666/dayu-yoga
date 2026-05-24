import CollectionPageTemplate from "@/components/CollectionPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Logo Application — Zenlume Yoga" };

const subCategories = [
  {
    label: "Embroidery",
    href: "/contact",
    image: "/service-logo.jpg",
    desc: "Thread-stitched logo on apparel and accessories. Durable, premium finish. MOQ 50 units.",
  },
  {
    label: "Heat Transfer",
    href: "/contact",
    image: "/hero-visual.jpg",
    desc: "Soft-hand heat transfer print. Ideal for detailed logos on performance fabrics.",
  },
  {
    label: "Screen Printing",
    href: "/contact",
    image: "/service-packaging.jpg",
    desc: "Bold, vibrant screen print. Best for large logo areas and graphic prints.",
  },
  {
    label: "Woven Labels",
    href: "/contact",
    image: "/about-studio.jpg",
    desc: "Custom woven brand labels. Choose size, thread color and attachment method.",
  },
  {
    label: "Rubber Patches",
    href: "/contact",
    image: "/service-logo.jpg",
    desc: "3D rubber or silicone logo patches. Custom shape, color and texture.",
  },
  {
    label: "Sublimation Print",
    href: "/contact",
    image: "/hero-visual.jpg",
    desc: "All-over sublimation printing. Full-color, edge-to-edge design on polyester fabrics.",
  },
];

export default function LogoCollectionPage() {
  return (
    <>
      <Navbar />
      <CollectionPageTemplate
        eyebrow="Collection"
        title="Logo"
        titleBold="Application."
        subtitle="Your logo, applied exactly as you intend. Choose the technique that fits your product and brand — we handle the rest."
        heroImage="/service-logo.jpg"
        subCategories={subCategories}
        ctaTitle="Ready to apply your\nlogo at scale?"
        ctaBody="Submit your logo files and product specs. We will confirm the best application method and provide a quote within 24 hours."
      />
      <Footer />
    </>
  );
}
