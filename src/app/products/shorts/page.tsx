import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Yoga Shorts — Zenlume Yoga" };

export default function ShortsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Bottoms"
        title="Yoga"
        titleBold="Shorts."
        subtitle="Biker shorts, training shorts and flowy styles. Custom fabric, waistband, print and logo — produced to your exact specification."
        heroImage="/about-studio.jpg"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"
        customOptions={[
          { label: "Style", choices: ["Biker shorts (mid-thigh)", "Training shorts (loose)", "Flowy shorts", "Compression shorts"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Woven nylon", "Recycled Polyester"] },
          { label: "Waistband", choices: ["High-waist elastic", "Drawstring", "Fold-over", "Wide waistband"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Screen print", "Solid color dye", "Tie-dye effect"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Silicone print"] },
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
          { label: "Sports Bras", href: "/products/sports-bras", image: "/service-logo.jpg" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/about-studio.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}
