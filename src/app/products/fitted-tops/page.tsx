import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fitted Tops — Zenlume Yoga",
  description:
    "Custom fitted yoga tops including crop and full-length styles. Private label with custom neckline, fabric, print and logo. MOQ 50 units.",
  keywords: "custom yoga tops, private label fitted tops, wholesale yoga shirts, yoga crop top manufacturer",
  alternates: { canonical: "https://www.yogaoh.com/products/fitted-tops" },
  openGraph: {
    title: "Fitted Tops — Zenlume Yoga",
    description:
      "Custom fitted yoga tops including crop and full-length styles. Private label with custom neckline, fabric, print and logo. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/fitted-tops",
    siteName: "Zenlume Yoga",
  },
};

export default function FittedTopsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Tops"
        title="Fitted"
        titleBold="Tops."
        subtitle="Crop and full-length fitted tops for studio and everyday wear. Custom neckline, fabric, print and logo — produced exactly as you specify."
        heroImage="/yoga/fitted-tops.png"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"
        customOptions={[
          { label: "Length", choices: ["Crop (above navel)", "Mid-length", "Full-length (tucked)"] },
          { label: "Neckline", choices: ["Round neck", "V-neck", "Square neck", "Scoop neck", "Mock neck"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Ribbed knit", "Bamboo Blend"] },
          { label: "Sleeve", choices: ["Sleeveless", "Short sleeve", "Long sleeve", "Cap sleeve"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Screen print", "Solid color dye", "Color block"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Rubber patch"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your fabric choice, print files, logo and quantity. We review and confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval before any bulk run begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, we move to full bulk production with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Sports Bras", href: "/products/sports-bras", image: "/yoga/sports-bras.png" },
          { label: "Relaxed Tops", href: "/products/relaxed-tops", image: "/yoga/relaxed-tops.png" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/yoga/matching-sets.png" },
        ]}
      />
      <Footer />
    </>
  );
}
