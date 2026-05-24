import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Matching Sets — Zenlume Yoga" };

export default function MatchingSetsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Sets"
        title="Matching"
        titleBold="Sets."
        subtitle="Coordinated top and bottom sets with unified fabric, print and logo. The complete branded look — produced together, delivered together."
        heroImage="/about-studio.jpg"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 sets"
        leadTime="10–18 days"
        technique="Unified print / dye"
        customOptions={[
          { label: "Set Combination", choices: ["Sports bra + leggings", "Sports bra + shorts", "Fitted top + leggings", "Fitted top + shorts", "Relaxed top + leggings"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend"] },
          { label: "Print Technique", choices: ["Matching sublimation (all-over)", "Solid color (matched dye lot)", "Color block", "Tonal print"] },
          { label: "Logo Application", choices: ["Embroidery (both pieces)", "Woven label", "Heat transfer", "Rubber patch"] },
          { label: "Packaging", choices: ["Individual poly bags", "Bundled set packaging", "Custom gift box", "Branded tissue wrap"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your fabric, print files, logo and set combination. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Set", desc: "A complete sample set (top + bottom) is produced and shipped for your approval." },
          { step: "03", title: "Bulk Production", desc: "Full bulk production of the complete set with matched dye lots and unified QC." },
          { step: "04", title: "Delivery", desc: "Sets packed and shipped together. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Full-length Leggings", href: "/products/leggings", image: "/hero-visual.jpg" },
          { label: "Sports Bras", href: "/products/sports-bras", image: "/service-logo.jpg" },
          { label: "Fitted Tops", href: "/products/fitted-tops", image: "/service-packaging.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}
