import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Winter Yoga Wear — Zenlume Yoga",
  description:
    "Custom thermal and insulated winter yoga wear. Warmth level guide, fabric comparison and quality standards for cold-weather practice. MOQ 50 units.",
  keywords: "custom winter yoga wear, thermal yoga leggings, fleece yoga clothing manufacturer, cold weather yoga apparel",
  alternates: { canonical: "https://www.yogaoh.com/products/winter" },
  openGraph: {
    title: "Winter Yoga Wear — Zenlume Yoga",
    description: "Custom winter yoga wear with warmth level guide, fabric comparison and quality standards. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/winter",
    siteName: "Zenlume Yoga",
  },
};

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

        fabricDetails={[
          {
            name: "Brushed Nylon/Spandex",
            stretch: 5,
            breathability: 3,
            feel: "Silky outer surface with a soft, warm brushed interior — the premium thermal fabric",
            bestFor: "Fleece-lined leggings, thermal fitted tops, cold-weather studio wear",
            brandTier: "Premium / boutique brands",
            priceRange: "High",
            note: "Brushed nylon/spandex is the premium choice for winter yoga leggings. The outer surface retains the silky, performance feel of standard nylon leggings, while the brushed interior provides a layer of warmth against the skin. Customers who already love nylon leggings will immediately recognise the quality upgrade.",
          },
          {
            name: "Fleece-back Polyester",
            stretch: 4,
            breathability: 3,
            feel: "Smooth outer surface with a thick, warm fleece interior",
            bestFor: "Thermal leggings, warm-up pants, cold-weather outdoor yoga",
            brandTier: "Performance / mass market brands",
            priceRange: "Mid",
            note: "Fleece-back polyester is the most widely used fabric for thermal activewear. The fleece backing provides excellent insulation while the smooth outer surface allows for sublimation printing. Available in different fleece weights (150gsm for light warmth, 250gsm for heavy insulation).",
          },
          {
            name: "Thermal Knit (Waffle Texture)",
            stretch: 3,
            breathability: 4,
            feel: "Textured, slightly thick — the classic thermal underwear aesthetic",
            bestFor: "Thermal base layers, long-sleeve thermal tops, lifestyle winter wear",
            brandTier: "Lifestyle / casual wellness brands",
            priceRange: "Mid",
            note: "Thermal knit (waffle texture) is the fabric of classic thermal underwear. The waffle weave traps warm air in its cells, providing excellent insulation relative to its weight. The textured surface gives a distinctive, recognisable aesthetic that customers associate with warmth and comfort.",
          },
          {
            name: "Recycled Polyester Fleece",
            stretch: 3,
            breathability: 3,
            feel: "Soft, warm and slightly textured — identical to virgin polyester fleece",
            bestFor: "Warm-up pants, winter jackets, cold-weather cover-ups",
            brandTier: "Eco-conscious / sustainable brands",
            priceRange: "Mid",
            note: "Made from recycled plastic bottles (rPET). Performance and feel are identical to virgin polyester fleece. A strong sustainability story for winter wear — a category where customers are increasingly conscious of environmental impact. GRS certification available upon request.",
          },
        ]}

        styleGuide={{
          title: "Warmth level guide —",
          subtitle: "match the climate.",
          items: [
            {
              name: "Lightweight (Indoor Cold)",
              visual: "Looks like standard activewear — the warmth is hidden in the fabric construction",
              functional: "Adds 3–5°C of warmth compared to standard activewear. Ideal for cold studios, air-conditioned gyms or mild winter climates.",
              bestFor: "Cold studios, air-conditioned gyms, mild winter climates (10–15°C)",
              tip: "Lightweight thermal wear is the most commercially accessible winter category — it appeals to customers in mild climates who want a little extra warmth without bulk. A strong year-round seller in air-conditioned markets.",
            },
            {
              name: "Mid-weight (Outdoor Autumn)",
              visual: "Slightly thicker silhouette — the warmth is visible in the fabric weight",
              functional: "Adds 5–10°C of warmth. Suitable for outdoor yoga in autumn temperatures or cold indoor environments.",
              bestFor: "Outdoor yoga in autumn, cold indoor environments, climates of 5–10°C",
              tip: "Mid-weight thermal wear is the sweet spot for most markets. It provides meaningful warmth without the bulk of heavyweight insulation, and works across a wide range of temperatures.",
            },
            {
              name: "Heavyweight (Outdoor Winter)",
              visual: "Noticeably thicker and more structured — warmth is the primary function",
              functional: "Maximum insulation for outdoor practice in cold temperatures. May include wind-resistant outer layers.",
              bestFor: "Outdoor yoga in winter, cold climates below 5°C, extreme weather markets",
              tip: "Heavyweight winter wear is a niche but loyal category. Customers in cold climates who practice outdoor yoga year-round are highly motivated buyers who will pay a premium for quality cold-weather gear.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Embroidery",
            colorQuality: "Tactile, raised logo with a premium handcrafted quality",
            durability: 5,
            bestFor: "Logo placement on all winter wear styles",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Embroidery is the preferred branding technique for winter wear. The raised thread detail is visible and tactile on textured fabrics like fleece and thermal knit. For brushed nylon leggings, embroidery on the waistband is a premium branding detail.",
          },
          {
            name: "Heat Transfer",
            colorQuality: "Precise logo reproduction on smooth surfaces",
            durability: 4,
            bestFor: "Logo placement on smooth fleece-back polyester",
            fabricLimit: "Smooth fabric surfaces",
            cost: "Low",
            note: "Heat transfer is a cost-effective branding option for winter wear. Works best on smooth outer surfaces — not recommended for heavily textured fabrics like waffle thermal knit or high-pile fleece.",
          },
          {
            name: "Sublimation (Outer Layer)",
            colorQuality: "Full-colour print on the outer surface",
            durability: 5,
            bestFor: "Printed thermal leggings, branded warm-up pants",
            fabricLimit: "Polyester-based fabrics only",
            cost: "Mid",
            note: "Sublimation can be applied to the outer surface of fleece-back polyester fabrics. The print is on the smooth outer layer — the fleece interior remains unaffected. This allows for bold printed thermal leggings that look like standard printed leggings but with added warmth.",
          },
          {
            name: "Woven Label / Rubber Patch",
            colorQuality: "Precise, detailed logo reproduction",
            durability: 5,
            bestFor: "Premium branding on all winter wear styles",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Woven labels and rubber patches are particularly effective on winter wear — the thicker fabric provides a stable base for sewn-on branding elements. A rubber patch on a fleece jacket or thermal leggings waistband is a strong, premium brand statement.",
          },
        ]}

        customOptions={[
          { label: "Product Type", choices: ["Thermal leggings", "Fleece-lined leggings", "Warm-up pants", "Thermal long-sleeve top", "Insulated jacket"] },
          { label: "Fabric (Outer)", choices: ["Brushed nylon/spandex", "Fleece-back polyester", "Thermal knit (waffle)", "Recycled polyester fleece"] },
          { label: "Lining / Inner", choices: ["Brushed fleece lining", "Thermal layer", "Mesh lining", "No lining"] },
          { label: "Warmth Level", choices: ["Lightweight (indoor cold)", "Mid-weight (outdoor autumn)", "Heavyweight (outdoor winter)"] },
          { label: "Logo Application", choices: ["Embroidery", "Heat transfer", "Woven label", "Rubber patch"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Folded box packaging"] },
        ]}

        qualityStandards={[
          {
            label: "Thermal Performance",
            value: "Verified",
            detail: "Fabric thermal resistance (CLO value) verified against specification. Lightweight: 0.3–0.5 CLO. Mid-weight: 0.5–0.8 CLO. Heavyweight: 0.8+ CLO.",
          },
          {
            label: "Lining Attachment",
            value: "Secure",
            detail: "Lining attachment seams tested for secure bonding. No separation, bunching or shifting after 20 wash cycles.",
          },
          {
            label: "Stretch Recovery",
            value: "≥ 90%",
            detail: "For stretch thermal fabrics: tested at 50 stretch cycles. Must recover to ≥ 90% of original dimensions — slightly lower threshold than standard activewear due to the thicker fabric construction.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. Minimum Grade 4 rating — no significant colour transfer or fading after 30 wash cycles.",
          },
          {
            label: "Size Tolerance",
            value: "± 1.5 cm",
            detail: "Winter wear has a slightly wider size tolerance due to thicker fabric construction. All measurements verified against approved spec sheet.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit inspected before packing. Checks include lining quality, logo placement, seam integrity and fabric weight consistency.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your product type, fabric weight, warmth level and logo. We confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped for your approval. Warmth, fit and construction are verified before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Full bulk production with QC on fabric, warmth performance and branding at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "What's the difference between brushed nylon and fleece-back polyester for thermal leggings?",
            a: "Brushed nylon/spandex has a silky outer surface and a soft brushed interior — it looks and feels like premium nylon leggings with added warmth. Fleece-back polyester has a smooth outer surface (good for printing) and a thicker fleece interior — it provides more insulation but has a slightly less premium outer feel. For a premium brand, brushed nylon is the better choice. For a printed thermal legging, fleece-back polyester is more practical.",
          },
          {
            q: "Can I order thermal leggings that look like regular leggings?",
            a: "Yes. Brushed nylon/spandex thermal leggings look identical to standard nylon leggings from the outside — the warmth is hidden in the brushed interior. Customers only discover the thermal lining when they put them on. This 'hidden warmth' quality is a strong selling point.",
          },
          {
            q: "What warmth level is right for my market?",
            a: "For indoor studio markets (air-conditioned gyms, cold studios), lightweight thermal wear is sufficient. For markets with cold winters (Northern Europe, Canada, Northern US), mid-weight is the most commercially viable option. Heavyweight thermal wear is a niche product for extreme cold climates or dedicated outdoor yoga practitioners.",
          },
          {
            q: "Can I get thermal leggings with a printed design?",
            a: "Yes. Fleece-back polyester thermal leggings can be sublimation-printed on the outer surface. The print is applied to the smooth outer layer — the fleece interior is unaffected. This allows for bold printed thermal leggings that provide warmth without sacrificing design.",
          },
          {
            q: "How do I care for thermal yoga wear?",
            a: "We recommend washing thermal yoga wear in cold water on a gentle cycle and air drying. Tumble drying can damage the fleece lining and reduce its insulating properties over time. We include care instructions on all garment labels and can customise the care label text to match your brand's voice.",
          },
          {
            q: "Is winter yoga wear a good category to add to my collection?",
            a: "Yes — winter yoga wear is an underserved category with strong seasonal demand. Most activewear brands focus on warm-weather products, leaving a gap in the market for cold-weather yoga gear. If your brand targets customers in cold climates or year-round outdoor practitioners, winter yoga wear can be a high-margin, low-competition category.",
          },
        ]}

        relatedProducts={[
          { label: "Yoga Jackets", href: "/products/jackets", image: "/yoga/outerwear-warmup.png" },
          { label: "Full-length Leggings", href: "/products/leggings", image: "/yoga/full-length-leggings.png" },
          { label: "Relaxed Tops", href: "/products/relaxed-tops", image: "/yoga/relaxed-tops.png" },
        ]}
      />
      <Footer />
    </>
  );
}
