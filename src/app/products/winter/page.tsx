import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Winter Yoga Wear — Zenlume Yoga" };

export default function WinterPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Outerwear"
        title="Winter Yoga"
        titleBold="Wear."
        subtitle="Thermal and insulated yoga wear for cold-weather practice. Custom fabric weight, lining, print and branding — built for warmth without sacrificing movement."
        heroImage="/about-studio.jpg"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="14–21 days"
        technique="Custom print / embroidery"
        customOptions={[
          { label: "Product Type", choices: ["Thermal leggings", "Fleece-lined leggings", "Insulated jacket", "Thermal long-sleeve top", "Warm-up pants"] },
          { label: "Fabric (Outer)", choices: ["Thermal knit", "Fleece-back polyester", "Brushed nylon/spandex", "Recycled Polyester fleece"] },
          { label: "Lining / Inner", choices: ["Brushed fleece lining", "Thermal layer", "Mesh lining", "No lining"] },
          { label: "Warmth Level", choices: ["Lightweight (indoor cold)", "Mid-weight (outdoor autumn)", "Heavyweight (outdoor winter)"] },
          { label: "Logo Application", choices: ["Embroidery", "Heat transfer", "Woven label", "Rubber patch"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Folded box packaging"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your product type, fabric weight, warmth level and logo. We confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped for your approval before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Full bulk production with QC on fabric, warmth performance and branding at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Yoga Jackets", href: "/products/jackets", image: "/service-logo.jpg" },
          { label: "Full-length Leggings", href: "/products/leggings", image: "/hero-visual.jpg" },
          { label: "Relaxed Tops", href: "/products/relaxed-tops", image: "/service-packaging.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}
