import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matching Sets — Zenlume Yoga",
  description:
    "Custom yoga matching sets: sports bra + leggings, shorts and more. Colour consistency guide, set combination options and quality standards. MOQ 50 sets.",
  keywords: "custom yoga matching sets, private label yoga sets, coordinated yoga outfits, yoga set manufacturer",
  alternates: { canonical: "https://www.yogaoh.com/products/matching-sets" },
  openGraph: {
    title: "Matching Sets — Zenlume Yoga",
    description: "Custom yoga matching sets with colour consistency guide and set combination options. MOQ 50 sets.",
    type: "website",
    url: "https://www.yogaoh.com/products/matching-sets",
    siteName: "Zenlume Yoga",
  },
};

export default function MatchingSetsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Sets"
        title="Matching"
        titleBold="Sets."
        subtitle="Coordinated top and bottom sets with unified fabric, print and logo. The complete branded look — produced together, delivered together."
        heroImage="/yoga/matching-sets.png"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 sets"
        leadTime="10–18 days"
        technique="Unified print / dye"

        fabricDetails={[
          {
            name: "Nylon/Spandex 80/20",
            stretch: 5,
            breathability: 4,
            feel: "Silky, premium and consistent across both pieces",
            bestFor: "Premium matching sets, studio wear, boutique brand collections",
            brandTier: "Premium / boutique brands",
            priceRange: "High",
            note: "The premium standard for matching sets. Nylon's silky surface and consistent dye absorption ensure perfect colour matching between the top and bottom. When both pieces are cut from the same fabric roll and dyed in the same batch, the colour match is exact — a critical quality factor for matching sets.",
          },
          {
            name: "Polyester/Spandex 88/12",
            stretch: 4,
            breathability: 3,
            feel: "Firm, structured and consistent — excellent for sublimation prints",
            bestFor: "Printed matching sets, performance sets, value-positioned brands",
            brandTier: "Performance / mass market brands",
            priceRange: "Mid",
            note: "The best choice for sublimation-printed matching sets. When the same print file is applied to both the top and bottom in the same production run, the colour and pattern alignment is perfect. Polyester's consistent dye absorption makes it the most reliable fabric for colour-matched sets.",
          },
          {
            name: "Recycled Nylon (ECONYL®)",
            stretch: 5,
            breathability: 4,
            feel: "Identical to virgin nylon — premium and consistent",
            bestFor: "Sustainable premium sets, eco-conscious brand collections",
            brandTier: "Eco-conscious / sustainable brands",
            priceRange: "High",
            note: "A matching set in ECONYL® is a powerful product story — premium performance, beautiful aesthetics and a sustainability narrative. The set format amplifies the eco message: two pieces, one sustainable story.",
          },
          {
            name: "Bamboo Blend",
            stretch: 3,
            breathability: 5,
            feel: "Soft, natural and consistently breathable across both pieces",
            bestFor: "Lifestyle matching sets, resort wear, low-intensity yoga collections",
            brandTier: "Natural / wellness lifestyle brands",
            priceRange: "Mid",
            note: "Bamboo matching sets have a softer, more relaxed aesthetic than synthetic sets. Ideal for brands targeting the wellness lifestyle market rather than high-performance athletes. The natural colour variation in bamboo fabric can make exact colour matching slightly more challenging — we recommend ordering both pieces in the same dye batch.",
          },
        ]}

        styleGuide={{
          title: "Set combinations —",
          subtitle: "build your collection.",
          items: [
            {
              name: "Sports Bra + Leggings",
              visual: "The classic yoga set — a complete, coordinated studio look from head to toe",
              functional: "Full coverage and support for all yoga styles. The matching print or colour creates a cohesive brand statement.",
              bestFor: "Core collection, all yoga styles, the most commercially versatile set combination",
              tip: "This is the best-selling set combination in the activewear market. If you're launching a matching set for the first time, start here. It's the combination customers search for most.",
            },
            {
              name: "Sports Bra + Shorts",
              visual: "A more exposed, athletic look — popular for warm climates and high-intensity training",
              functional: "Maximum freedom of movement and airflow. The shorter bottom creates a lighter, more energetic aesthetic.",
              bestFor: "Warm-climate markets, HIIT, cycling, summer collections",
              tip: "Bra + shorts sets photograph exceptionally well for summer campaigns. If your brand has a warm-weather or resort positioning, this combination should be in your collection.",
            },
            {
              name: "Fitted Top + Leggings",
              visual: "More coverage than a bra set — a complete, modest studio look",
              functional: "Full torso coverage with the same coordinated aesthetic. Ideal for customers who prefer more coverage.",
              bestFor: "Brands targeting customers who prefer modest coverage, cooler climates, studio-to-street collections",
              tip: "Fitted top + leggings sets appeal to a broader demographic than bra sets — they work for customers across all ages and preferences. A strong choice for brands targeting a wide customer base.",
            },
            {
              name: "Three-piece Set",
              visual: "Bra + top + leggings or shorts — a complete, layered wardrobe solution",
              functional: "Maximum versatility — the top can be worn over the bra for coverage or removed for a more exposed look.",
              bestFor: "Premium collections, gift sets, customers who want a complete wardrobe solution",
              tip: "Three-piece sets command a significantly higher retail price and make exceptional gift products. They're a strong option for holiday collections or premium brand launches.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Matching Sublimation",
            colorQuality: "Perfect colour and pattern match across both pieces",
            durability: 5,
            bestFor: "All-over printed sets, pattern-matched sets, brand statement collections",
            fabricLimit: "Polyester-based fabrics only",
            cost: "Mid",
            note: "The most powerful technique for matching sets. Both pieces are printed from the same file in the same production run — the pattern aligns perfectly across the top and bottom. This creates a head-to-toe brand statement that is immediately recognisable and highly photogenic.",
          },
          {
            name: "Solid Colour (Matched Dye Lot)",
            colorQuality: "Exact colour match across both pieces — produced from the same dye batch",
            durability: 5,
            bestFor: "Core colour collections, minimalist brands, premium basics",
            fabricLimit: "All fabrics",
            cost: "Low",
            note: "The key to a perfect solid-colour matching set is producing both pieces from the same dye batch. Even with the same colour code, pieces dyed in different batches can have subtle variations. We always produce matching set pieces in the same batch to guarantee colour consistency.",
          },
          {
            name: "Colour Blocking",
            colorQuality: "Clean, graphic colour transitions — coordinated across both pieces",
            durability: 5,
            bestFor: "Modern, graphic brand aesthetics — no print files needed",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Colour-blocked matching sets create a bold, architectural look. The panel lines can be designed to flow continuously from the top to the bottom, creating a unified silhouette. A distinctive and commercially strong approach that works on any fabric.",
          },
          {
            name: "Tonal Print",
            colorQuality: "Subtle pattern in a tone-on-tone colour — sophisticated and understated",
            durability: 5,
            bestFor: "Premium brands, sophisticated aesthetics, customers who prefer subtle design",
            fabricLimit: "Polyester-based fabrics (sublimation) or jacquard knit",
            cost: "High",
            note: "A tonal print — where the pattern is woven or printed in a colour close to the base fabric — creates a luxurious, sophisticated aesthetic. It's the activewear equivalent of a tone-on-tone suit. This technique signals premium quality and is a strong differentiator in a market saturated with bold, high-contrast prints.",
          },
        ]}

        customOptions={[
          { label: "Set Combination", choices: ["Sports bra + leggings", "Sports bra + shorts", "Fitted top + leggings", "Fitted top + shorts", "Three-piece set"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend"] },
          { label: "Print Technique", choices: ["Matching sublimation (all-over)", "Solid colour (matched dye lot)", "Colour blocking", "Tonal print"] },
          { label: "Logo Application", choices: ["Embroidery (both pieces)", "Woven label", "Heat transfer", "Rubber patch"] },
          { label: "Packaging", choices: ["Individual poly bags", "Bundled set packaging", "Custom gift box", "Branded tissue wrap"] },
        ]}

        qualityStandards={[
          {
            label: "Colour Consistency",
            value: "ΔE ≤ 1.0",
            detail: "Colour difference between top and bottom measured using spectrophotometer. ΔE (Delta E) value must be ≤ 1.0 — a difference imperceptible to the human eye. Both pieces produced from the same dye batch.",
          },
          {
            label: "Print Alignment",
            value: "± 0.5 cm",
            detail: "For sublimation-printed sets: print pattern alignment verified across both pieces. Pattern must align within ± 0.5 cm at the waistband junction.",
          },
          {
            label: "Stretch Recovery",
            value: "≥ 95%",
            detail: "Both pieces tested independently. Each must recover to ≥ 95% of original dimensions after 50 stretch cycles.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. Both pieces tested together — no colour transfer between pieces after 30 wash cycles.",
          },
          {
            label: "Size Tolerance",
            value: "± 1 cm",
            detail: "Both pieces measured against approved spec sheet. Size consistency verified across the complete set.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100% sets",
            detail: "Every set inspected together before packing. Top and bottom verified for colour match, print alignment and consistent construction quality.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your set combination, fabric, print files and quantity. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Set", desc: "A complete sample set (top + bottom) is produced and shipped for your approval. Colour match and print alignment verified." },
          { step: "03", title: "Bulk Production", desc: "Full bulk production of the complete set with matched dye lots and unified QC across both pieces." },
          { step: "04", title: "Delivery", desc: "Sets packed and shipped together. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "Why is it important to order both pieces of a matching set at the same time?",
            a: "Colour consistency between the top and bottom is the most critical quality factor for matching sets. Even with the same colour code, pieces produced in different dye batches can have subtle variations that are visible when worn together. Ordering both pieces in the same production run guarantees they are dyed from the same batch — the only way to ensure a perfect match.",
          },
          {
            q: "Can I order different quantities of tops and bottoms?",
            a: "Yes. Many brands order more bottoms than tops (e.g. 100 leggings and 60 sports bras) to account for customers who already own a top or prefer to mix and match. Each piece has its own MOQ of 50 units. Please specify your required quantities for each piece when submitting your enquiry.",
          },
          {
            q: "Can I mix different fabrics for the top and bottom?",
            a: "Yes, but with a caveat: if you choose different fabrics (e.g. nylon bra + polyester leggings), we cannot guarantee a perfect colour match between pieces, as different fabrics absorb dye differently. For solid-colour sets, we recommend using the same fabric for both pieces. For printed sets, sublimation on polyester is the most reliable approach for both pieces.",
          },
          {
            q: "What does a three-piece set typically include?",
            a: "The most popular three-piece configuration is: sports bra + fitted top + leggings. The top is designed to be worn over the bra for coverage or removed for a more exposed look. Three-piece sets are a strong gift product and command a retail price 40–60% higher than a two-piece set.",
          },
          {
            q: "How should I price a matching set?",
            a: "Matching sets typically retail at 1.5–1.8× the price of the individual pieces sold separately. The 'set discount' is a strong purchase driver — customers feel they're getting value, while you benefit from a higher average order value. We recommend pricing your set at a 10–15% discount versus buying the pieces individually.",
          },
          {
            q: "Can I create a matching set with pieces from different product categories?",
            a: "Yes. For example, a relaxed top + biker shorts is a popular combination for lifestyle brands. Any combination of our top and bottom products can be produced as a matching set. The key requirement is that both pieces use the same fabric type to ensure colour consistency.",
          },
        ]}

        relatedProducts={[
          { label: "Full-length Leggings", href: "/products/leggings", image: "/yoga/full-length-leggings.png" },
          { label: "Sports Bras", href: "/products/sports-bras", image: "/yoga/sports-bras.png" },
          { label: "Yoga Shorts", href: "/products/shorts", image: "/yoga/shorts.png" },
        ]}
      />
      <Footer />
    </>
  );
}
