import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Capri Leggings — Zenlume Yoga" };

export default function CapriPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Bottoms"
        title="Capri"
        titleBold="Leggings."
        subtitle="7/8-length leggings — the versatile studio-to-street silhouette. Custom fabric, print and branding produced at scale."
        heroImage="/service-packaging.jpg"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"
        customOptions={[
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend"] },
          { label: "Length", choices: ["7/8 length (capri)", "Cropped (below knee)"] },
          { label: "Waistband Style", choices: ["High-waist straight", "High-waist fold-over", "Mid-rise", "Wide waistband"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Screen print", "Heat transfer", "Solid color dye"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Rubber patch"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Custom tissue wrap"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your fabric choice, print files, logo and quantity. We review and confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval before any bulk run begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, we move to full bulk production with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Full-length Leggings", href: "/products/leggings", image: "/hero-visual.jpg" },
          { label: "Shorts", href: "/products/shorts", image: "/about-studio.jpg" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/service-logo.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}
