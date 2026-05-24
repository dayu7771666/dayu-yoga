import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Yoga Jackets — Zenlume Yoga" };

export default function JacketsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Outerwear"
        title="Yoga"
        titleBold="Jackets."
        subtitle="Lightweight warmup jackets and zip-ups for studio and outdoor wear. Custom lining, zipper hardware, print and logo application."
        heroImage="/service-logo.jpg"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="14–21 days"
        technique="Custom print / embroidery"
        customOptions={[
          { label: "Style", choices: ["Full-zip hoodie", "Half-zip pullover", "Track jacket", "Bomber jacket", "Cropped zip-up"] },
          { label: "Fabric (Shell)", choices: ["Polyester fleece", "Nylon ripstop", "Stretch woven", "French terry", "Recycled Polyester"] },
          { label: "Lining", choices: ["Mesh lining", "Fleece lining", "No lining", "Custom print lining"] },
          { label: "Hardware", choices: ["YKK zipper (black)", "YKK zipper (custom color)", "Branded zipper pull", "Snap buttons"] },
          { label: "Logo Application", choices: ["Embroidery (chest)", "Embroidery (back)", "Screen print", "Woven patch", "Rubber badge"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Folded box packaging"] },
        ]}
        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your style, fabric, hardware and logo details. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample jacket is produced and shipped for your approval before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Full bulk production with QC on stitching, hardware, print and logo at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}
        relatedProducts={[
          { label: "Winter Yoga Wear", href: "/products/winter", image: "/about-studio.jpg" },
          { label: "Relaxed Tops", href: "/products/relaxed-tops", image: "/service-packaging.jpg" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/hero-visual.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}
