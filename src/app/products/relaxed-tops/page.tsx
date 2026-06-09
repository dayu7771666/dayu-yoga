import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Relaxed Tops — Zenlume Yoga",
  description:
    "Custom relaxed and oversized yoga tops. Flowy tanks, draped tops and boxy crops with custom fabric, print and branding. MOQ 50 units.",
  keywords: "custom relaxed yoga tops, oversized yoga shirts, flowy yoga tops manufacturer, private label yoga tops",
  alternates: { canonical: "https://www.yogaoh.com/products/relaxed-tops" },
  openGraph: {
    title: "Relaxed Tops — Zenlume Yoga",
    description:
      "Custom relaxed and oversized yoga tops. Flowy tanks, draped tops and boxy crops with custom fabric, print and branding. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/relaxed-tops",
    siteName: "Zenlume Yoga",
  },
};

export default function RelaxedTopsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Tops"
        title="Relaxed"
        titleBold="Tops."
        subtitle="Flowy and oversized silhouettes for the studio, the street and everything in between. Custom cut, fabric and branding at any scale."
        heroImage="/yoga/relaxed-tops.png"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"
        customOptions={[
          { label: "Silhouette", choices: ["Oversized tee", "Flowy tank", "Draped top", "Boxy crop", "Tunic length"] },
          { label: "Neckline", choices: ["Round neck", "V-neck", "Wide neck", "Cowl neck"] },
          { label: "Fabric", choices: ["Modal/Spandex", "Bamboo Jersey", "Cotton/Spandex", "Linen blend", "Recycled Polyester"] },
          { label: "Sleeve", choices: ["Sleeveless", "Short sleeve", "Long sleeve", "3/4 sleeve"] },
          { label: "Print Technique", choices: ["Screen print", "Sublimation", "Pigment dye", "Tie-dye", "Solid color"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Screen print"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your fabric choice, print files, logo and quantity. We review and confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval before any bulk run begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, we move to full bulk production with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Fitted Tops", href: "/products/fitted-tops", image: "/yoga/fitted-tops.png" },
          { label: "Sports Bras", href: "/products/sports-bras", image: "/yoga/sports-bras.png" },
          { label: "Jackets", href: "/products/jackets", image: "/yoga/outerwear-warmup.png" },
        ]}
      />
      <Footer />
    </>
  );
}
