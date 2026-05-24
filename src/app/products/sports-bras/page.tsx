import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Sports Bras — Zenlume Yoga" };

export default function SportsBrasPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Tops"
        title="Sports"
        titleBold="Bras."
        subtitle="Low to high impact sports bras with custom strap design, fabric selection and logo application. Your silhouette, your brand."
        heroImage="/service-logo.jpg"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"
        customOptions={[
          { label: "Support Level", choices: ["Low impact (strappy)", "Medium impact", "High impact (encapsulation)"] },
          { label: "Strap Style", choices: ["Racerback", "Cross-back", "Spaghetti straps", "Wide straps", "Longline"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Screen print", "Solid color dye", "Color block"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Rubber patch"] },
          { label: "Details", choices: ["Removable pads", "Mesh panels", "Bonded seams", "Adjustable straps"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your fabric choice, print files, logo and quantity. We review and confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval before any bulk run begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, we move to full bulk production with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Fitted Tops", href: "/products/fitted-tops", image: "/hero-visual.jpg" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/about-studio.jpg" },
          { label: "Full-length Leggings", href: "/products/leggings", image: "/service-packaging.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}
