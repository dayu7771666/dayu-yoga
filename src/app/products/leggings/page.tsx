import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Full-length Leggings — Zenlume Yoga" };

export default function LeggingsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Bottoms"
        title="Full-length"
        titleBold="Leggings."
        subtitle="High-waist, 4-way stretch leggings built for performance and brand identity. You choose every detail — we produce it at scale."
        heroImage="/hero-visual.jpg"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"
        customOptions={[
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend", "Cotton/Spandex"] },
          { label: "Waistband Style", choices: ["High-waist fold-over", "High-waist straight", "Mid-rise", "Wide waistband with pocket"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Screen print", "Heat transfer", "Solid color dye"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Rubber patch", "Silicone print"] },
          { label: "Finish & Details", choices: ["Mesh panels", "Side pockets", "Hidden waistband pocket", "Seam detailing", "Laser-cut hem"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Custom tissue wrap", "Retail box"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your fabric choice, print files, logo and quantity. We review and confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval before any bulk run begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, we move to full bulk production with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Capri Leggings", href: "/products/capri", image: "/service-packaging.jpg" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/about-studio.jpg" },
          { label: "Sports Bras", href: "/products/sports-bras", image: "/service-logo.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}
