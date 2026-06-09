import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Capri Leggings — Zenlume Yoga",
  description:
    "Custom capri yoga leggings with private label. Cropped 7/8 and mid-calf styles with detailed fabric guide, length comparison and quality standards. MOQ 50 units.",
  keywords: "custom capri leggings, private label capri pants, wholesale yoga capri, cropped leggings manufacturer",
  alternates: { canonical: "https://www.yogaoh.com/products/capri" },
  openGraph: {
    title: "Capri Leggings — Zenlume Yoga",
    description: "Custom capri yoga leggings. Cropped styles with custom fabric, print and logo. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/capri",
    siteName: "Zenlume Yoga",
  },
};

export default function CapriPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Bottoms"
        title="Capri"
        titleBold="Leggings."
        subtitle="Cropped leggings that balance coverage and freedom. From 7/8 length to mid-calf, every cut is designed to move with your customer — and stand out on the shelf."
        heroImage="/yoga/capri-leggings.png"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"

        fabricDetails={[
          {
            name: "Nylon/Spandex 80/20",
            stretch: 5,
            breathability: 4,
            feel: "Silky, lightweight and body-hugging",
            bestFor: "Hot yoga, pilates, barre, studio classes",
            brandTier: "Premium / boutique studios",
            priceRange: "High",
            note: "The premium choice for capri leggings. The cropped length makes breathability even more important — nylon's moisture-wicking properties keep legs cool and dry during intense sessions. The silky finish looks exceptional in product photography.",
          },
          {
            name: "Polyester/Spandex 88/12",
            stretch: 4,
            breathability: 3,
            feel: "Structured, firm compression with a matte finish",
            bestFor: "Gym training, cycling, general fitness classes",
            brandTier: "Mass market / value brands",
            priceRange: "Mid",
            note: "The most cost-effective option for capri leggings. Excellent for sublimation printing — if your capri design features bold patterns or colour blocking, polyester delivers the most vibrant results. Durable and easy to care for.",
          },
          {
            name: "Recycled Nylon (ECONYL®)",
            stretch: 5,
            breathability: 4,
            feel: "Identical to virgin nylon — silky and smooth",
            bestFor: "All yoga and fitness activities — with an eco story",
            brandTier: "Sustainable / eco-conscious brands",
            priceRange: "High",
            note: "For brands that want premium performance and a sustainability narrative. Capri leggings are a popular entry-point product for eco-conscious consumers — the shorter length means slightly less fabric cost compared to full-length, making the premium price more accessible.",
          },
          {
            name: "Bamboo Blend",
            stretch: 3,
            breathability: 5,
            feel: "Soft, breathable and naturally cooling",
            bestFor: "Outdoor yoga, warm-weather practice, resort wear",
            brandTier: "Natural / wellness lifestyle brands",
            priceRange: "Mid",
            note: "Capri length is ideal for bamboo fabric — the exposed lower leg benefits from the fabric's natural temperature regulation. Perfect for outdoor yoga retreats, beach-side classes or warm-climate markets.",
          },
        ]}

        styleGuide={{
          title: "Length guide —",
          subtitle: "which crop is right?",
          items: [
            {
              name: "7/8 Length",
              visual: "Hits just above the ankle — creates the illusion of longer legs while showing a sliver of ankle",
              functional: "Maximum coverage with the freedom of a cropped cut. Ideal for transitioning from studio to street.",
              bestFor: "Versatile everyday wear, studio-to-street brands, customers who want coverage without full-length",
              tip: "7/8 is the most commercially successful capri length — it flatters most body types and works across all seasons.",
            },
            {
              name: "Mid-calf (Classic Capri)",
              visual: "Classic capri silhouette — hits at the widest part of the calf for a bold, defined crop",
              functional: "Maximum lower-leg freedom. Popular for cycling, barre and pilates where ankle mobility matters.",
              bestFor: "Pilates, barre, cycling, warm-weather markets",
              tip: "The hem placement on mid-calf styles is critical — consider offering a flared or ruched hem to counterbalance the visual effect at the widest calf point.",
            },
            {
              name: "Above-knee (Bermuda)",
              visual: "Bold, fashion-forward crop that sits just above the knee",
              functional: "Maximum leg freedom — ideal for high-kick movements, dance fitness and hot yoga",
              bestFor: "Dance fitness, hot yoga, fashion-forward brands, warm climates",
              tip: "This length is trending in the athleisure space. Pair with a longline sports bra or oversized top for a strong brand look.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Sublimation (All-over Print)",
            colorQuality: "Full-colour, photographic quality — unlimited colours",
            durability: 5,
            bestFor: "Bold patterns, colour blocking, tropical or floral prints",
            fabricLimit: "Polyester-based fabrics only",
            cost: "Mid",
            note: "Capri leggings are a great canvas for statement prints — the shorter length means the pattern is prominently displayed. Sublimation is the only technique that can reproduce complex, multi-colour designs with full accuracy.",
          },
          {
            name: "Colour Blocking",
            colorQuality: "Clean, graphic colour transitions — two or more solid colours",
            durability: 5,
            bestFor: "Modern, graphic brand aesthetics — no print files needed",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Colour blocking is achieved by cutting and sewing panels of different coloured fabric. No printing required — the design comes from the construction. Works beautifully on capri styles where the panel lines can follow the crop hem.",
          },
          {
            name: "Screen Print",
            colorQuality: "Bold, opaque colours with a tactile finish",
            durability: 4,
            bestFor: "Logo placement, calf-band branding, limited-colour designs",
            fabricLimit: "Most fabrics",
            cost: "Low",
            note: "For capri leggings, screen print is most commonly used for a branded calf band or logo placement near the hem — a subtle but effective branding technique that doesn't require all-over printing.",
          },
          {
            name: "Solid Colour Dye",
            colorQuality: "Pure, even colour throughout",
            durability: 5,
            bestFor: "Minimalist brands, premium basics, core colour collections",
            fabricLimit: "All fabrics",
            cost: "Low",
            note: "Build your core collection in 4–6 key colours — black, slate, sage, blush, navy, white — and let the quality speak for itself. Solid-colour capris in premium fabrics are perennial best-sellers.",
          },
        ]}

        customOptions={[
          { label: "Length", choices: ["7/8 length (above ankle)", "Mid-calf (classic capri)", "Above-knee (Bermuda)"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend"] },
          { label: "Waistband Style", choices: ["High-waist straight", "High-waist fold-over", "Mid-rise", "Wide waistband with pocket"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Colour blocking", "Screen print", "Solid colour dye"] },
          { label: "Hem Detail", choices: ["Clean cut hem", "Ruched hem", "Mesh hem band", "Flared hem", "Laser-cut hem"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Rubber patch"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Custom tissue wrap", "Retail box"] },
        ]}

        qualityStandards={[
          {
            label: "Stretch Recovery",
            value: "≥ 95%",
            detail: "5% random sample per batch tested at 50 stretch cycles. Fabric must recover to ≥ 95% of original dimensions.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. Minimum Grade 4 rating — no significant colour transfer or fading after 30 wash cycles.",
          },
          {
            label: "Hem Alignment",
            value: "± 0.5 cm",
            detail: "Crop hem placement measured and verified against the approved spec. Tolerance ± 0.5 cm ensures consistent length across all units in a batch.",
          },
          {
            label: "Seam Strength",
            value: "≥ 80N",
            detail: "Seam burst strength tested at ≥ 80 Newtons. All flatlock and overlock seams inspected for consistent stitch density.",
          },
          {
            label: "Size Tolerance",
            value: "± 1 cm",
            detail: "Waist, hip and length measurements verified against approved spec sheet for every size in the run.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit visually inspected before packing. Checks include print alignment, logo placement, label attachment and hem finish.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your length preference, fabric choice, print files and quantity. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval. Hem placement and fit are verified before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, full bulk production begins with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "Which capri length sells best?",
            a: "7/8 length is consistently the best-selling capri style across markets. It flatters most body types, works year-round and transitions easily from studio to street. If you're launching a capri for the first time, we recommend starting with 7/8 in your core colours.",
          },
          {
            q: "Can I order different lengths in the same order?",
            a: "Yes. You can order different lengths as separate styles within the same production run. Each length is treated as a separate SKU with its own MOQ of 50 units.",
          },
          {
            q: "How do I choose between colour blocking and sublimation printing?",
            a: "Colour blocking is ideal if your design is based on clean geometric panels — it's achieved through cutting and sewing, not printing, so it works on any fabric including nylon. Sublimation is better for complex patterns, gradients or photographic designs, but is limited to polyester fabrics. If you're unsure, share your design concept and we'll recommend the best technique.",
          },
          {
            q: "Can the hem detail be different from the waistband style?",
            a: "Absolutely. Mix and match is encouraged — for example, a wide waistband with a ruched hem creates a distinctive silhouette. We'll produce a sample to confirm the combination looks as intended before bulk production.",
          },
          {
            q: "Do you offer plus-size or extended size ranges?",
            a: "Yes. We can produce in sizes XS through 3XL. Extended sizing (2XL, 3XL) may require a slightly higher MOQ per size due to fabric consumption. Please specify your size range when submitting your enquiry.",
          },
          {
            q: "What's the difference between a woven label and an embroidered logo?",
            a: "A woven label is a separate fabric label sewn into the garment — typically at the waistband interior or side seam. It's the most durable branding method and gives a premium, clean finish. Embroidery stitches your logo directly into the fabric — it's more visible and tactile, often used on the waistband exterior or calf area for a bold brand statement.",
          },
        ]}

        relatedProducts={[
          { label: "Full-length Leggings", href: "/products/leggings", image: "/yoga/full-length-leggings.png" },
          { label: "Yoga Shorts", href: "/products/shorts", image: "/yoga/shorts.png" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/yoga/matching-sets.png" },
        ]}
      />
      <Footer />
    </>
  );
}
