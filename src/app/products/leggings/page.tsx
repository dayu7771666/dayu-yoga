import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Full-length Leggings — Zenlume Yoga",
  description:
    "Custom full-length yoga leggings with private label. Choose fabric, waistband, print technique and logo. Detailed fabric guide, quality standards and FAQ. MOQ 50 units.",
  keywords: "custom yoga leggings, private label leggings, wholesale yoga pants, yoga leggings manufacturer, full length leggings OEM",
  alternates: { canonical: "https://www.yogaoh.com/products/leggings" },
  openGraph: {
    title: "Full-length Leggings — Zenlume Yoga",
    description:
      "Custom full-length yoga leggings with private label. Choose fabric, waistband, print technique and logo. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/leggings",
    siteName: "Zenlume Yoga",
  },
};

export default function LeggingsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Bottoms"
        title="Full-length"
        titleBold="Leggings."
        subtitle="High-waist, 4-way stretch leggings built for performance and brand identity. You choose every detail — we produce it at scale."
        heroImage="/yoga/full-length-leggings.png"
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
            feel: "Silky, second-skin fit with a subtle sheen",
            bestFor: "Hot yoga, high-intensity training, studio classes",
            brandTier: "Premium / boutique studios",
            priceRange: "High",
            note: "The gold standard for premium yoga leggings. Nylon gives a luxurious surface sheen and excellent shape retention — leggings hold their form even after 100+ washes. If your brand is priced at $70+ per unit retail, this is your fabric. Comparable to what Lululemon Align uses.",
          },
          {
            name: "Polyester/Spandex 88/12",
            stretch: 4,
            breathability: 3,
            feel: "Firm, structured hold with a matte finish",
            bestFor: "Everyday gym sessions, fitness classes, casual wear",
            brandTier: "Mass market / value-focused brands",
            priceRange: "Mid",
            note: "The most widely used fabric in the activewear industry. More affordable than nylon, with excellent durability and colour vibrancy — especially for sublimation printing. Slightly less soft than nylon but holds compression well. Ideal for brands targeting the $30–60 retail range.",
          },
          {
            name: "Recycled Nylon (ECONYL®)",
            stretch: 5,
            breathability: 4,
            feel: "Identical to virgin nylon — silky and smooth",
            bestFor: "Hot yoga, training — same performance as virgin nylon, with sustainability credentials",
            brandTier: "Eco-conscious / sustainable brands",
            priceRange: "High",
            note: "Made from regenerated ocean plastic and industrial waste. Performance is on par with virgin nylon, but your brand gains a powerful sustainability story. Increasingly important for brands targeting environmentally aware consumers. Certifications available upon request.",
          },
          {
            name: "Bamboo Blend",
            stretch: 3,
            breathability: 5,
            feel: "Soft, natural drape — closer to cotton than synthetics",
            bestFor: "Restorative yoga, meditation, low-intensity movement, loungewear crossover",
            brandTier: "Natural / wellness lifestyle brands",
            priceRange: "Mid",
            note: "Bamboo fabric is naturally antibacterial and temperature-regulating — ideal for slow-flow or yin yoga where breathability matters more than compression. The softer drape gives a relaxed, lifestyle aesthetic rather than a performance look. Not recommended for high-sweat activities.",
          },
          {
            name: "Cotton/Spandex",
            stretch: 3,
            breathability: 4,
            feel: "Familiar cotton softness with added stretch",
            bestFor: "Casual wear, beginner yoga, lifestyle brand crossover",
            brandTier: "Lifestyle / casual wellness brands",
            priceRange: "Mid",
            note: "The most accessible option for customers who prefer natural fibres. Less technical than nylon or polyester — it absorbs moisture rather than wicking it, so it can feel heavy during intense workouts. Best suited for brands positioning leggings as everyday lifestyle pieces rather than performance gear.",
          },
        ]}

        styleGuide={{
          title: "Waistband styles —",
          subtitle: "find your fit.",
          items: [
            {
              name: "High-waist Fold-over",
              visual: "Creates a defined waist silhouette; the fold adds a layered, relaxed aesthetic",
              functional: "Adjustable coverage — fold down for a lower rise, fold up for full high-waist support. No rigid waistband means maximum comfort during floor poses.",
              bestFor: "Yoga studios, lifestyle brands, customers who prefer a relaxed waistline",
              tip: "This style photographs beautifully and is popular in lifestyle brand imagery. Great for Instagram-first brands.",
            },
            {
              name: "High-waist Straight",
              visual: "Clean, sleek silhouette with a smooth, uninterrupted waistline",
              functional: "Firm compression and consistent coverage. The most popular style for performance-focused leggings.",
              bestFor: "Performance brands, gym-goers, customers who prioritise a streamlined look",
              tip: "Add a hidden waistband pocket to this style for extra functionality — a strong selling point for runners and gym users.",
            },
            {
              name: "Mid-rise",
              visual: "Sits at or just below the natural waist — a more relaxed, casual look",
              functional: "Less compression than high-waist styles. More comfortable for customers who find high-waist bands restrictive.",
              bestFor: "Casual and lifestyle brands, customers who prefer a lower rise",
              tip: "Mid-rise is making a comeback as a fashion-forward choice. Pair with a cropped top for a trendy aesthetic.",
            },
            {
              name: "Wide Waistband with Pocket",
              visual: "Bold, architectural waistband that becomes a design feature in itself",
              functional: "Maximum core support and compression. The wide band distributes pressure evenly — ideal for customers with back sensitivity.",
              bestFor: "Performance and athleisure brands, customers who want storage and support",
              tip: "The pocket is a key purchase driver — many customers specifically search for leggings with phone pockets. This style commands a higher retail price.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Sublimation (All-over Print)",
            colorQuality: "Full-colour, photographic quality — unlimited colours",
            durability: 5,
            bestFor: "All-over patterns, gradients, watercolour designs, photographic prints",
            fabricLimit: "Polyester-based fabrics only. Not suitable for nylon or cotton.",
            cost: "Mid",
            note: "Sublimation ink is permanently bonded into the fabric fibres — it cannot crack, peel or fade. The only limitation is fabric compatibility. If your design features complex patterns or gradients, this is the only technique that can reproduce them accurately.",
          },
          {
            name: "Screen Print",
            colorQuality: "Bold, opaque colours with a tactile, slightly raised finish",
            durability: 4,
            bestFor: "Logos, text, geometric shapes, limited-colour designs (1–6 colours)",
            fabricLimit: "Works on most fabrics including nylon, polyester and cotton blends",
            cost: "Low",
            note: "Most cost-effective for large quantities with simple designs. Each colour requires a separate screen, so costs increase with colour count. The ink sits on top of the fabric, giving a slightly raised texture. Not ideal for intricate details or gradients.",
          },
          {
            name: "Heat Transfer",
            colorQuality: "Precise, detailed reproduction — good for complex logos",
            durability: 3,
            bestFor: "Complex logos, small-area branding, metallic or reflective effects",
            fabricLimit: "Compatible with most fabrics",
            cost: "Mid",
            note: "Ideal for applying a detailed brand logo to a solid-colour garment. Best used for accent branding rather than full-coverage prints. The transfer can crack or peel over time if not cared for properly.",
          },
          {
            name: "Solid Colour Dye",
            colorQuality: "Pure, even colour throughout the fabric — no print",
            durability: 5,
            bestFor: "Minimalist brands, premium basics, letting the fabric and silhouette speak",
            fabricLimit: "All fabrics",
            cost: "Low",
            note: "The most underrated option. A perfectly dyed, well-cut legging in a premium fabric needs no print to look expensive. This approach lets your brand identity come through woven labels, hang tags and packaging. Lowest cost, highest perceived quality when executed well.",
          },
        ]}

        customOptions={[
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend", "Cotton/Spandex"] },
          { label: "Waistband Style", choices: ["High-waist fold-over", "High-waist straight", "Mid-rise", "Wide waistband with pocket"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Screen print", "Heat transfer", "Solid colour dye"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Rubber patch", "Silicone print"] },
          { label: "Finish & Details", choices: ["Mesh panels", "Side pockets", "Hidden waistband pocket", "Seam detailing", "Laser-cut hem"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Custom tissue wrap", "Retail box"] },
        ]}

        qualityStandards={[
          {
            label: "Stretch Recovery",
            value: "≥ 95%",
            detail: "Each batch: 5% random sample tested at 50 stretch cycles. Fabric must recover to ≥ 95% of original dimensions.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. Minimum Grade 4 rating required — no significant colour transfer or fading after 30 wash cycles.",
          },
          {
            label: "Seam Strength",
            value: "≥ 80N",
            detail: "Seam burst strength tested at ≥ 80 Newtons. All flatlock and overlock seams inspected for consistent stitch density (12–14 stitches/cm).",
          },
          {
            label: "Size Tolerance",
            value: "± 1 cm",
            detail: "All finished garments measured against approved spec sheet. Waist, hip, inseam and length must fall within ± 1 cm of approved sample.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit undergoes a full visual inspection before packing. Checks include print alignment, logo placement, label attachment and packaging integrity.",
          },
          {
            label: "Sample Approval",
            value: "Required",
            detail: "No bulk production begins without your written approval of a physical sample. Sample matches the exact fabric, print and construction of the bulk order.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your fabric choice, print files, logo and quantity. We review and confirm within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval before any bulk run begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, we move to full bulk production with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "I don't have design files — can you help me create the artwork?",
            a: "Yes. Our in-house design team can develop your print artwork, logo placement and colourway from a brief or mood board. Design support is included for orders above 200 units; a one-time design fee applies for smaller orders. We'll share a digital mockup for your approval before any production begins.",
          },
          {
            q: "How much does a sample cost, and is the fee refundable?",
            a: "Sample fees vary by product complexity — typically $60–120 per sample including shipping. The sample fee is fully deducted from your bulk order invoice once you proceed. If you need multiple revisions, each revision incurs a small additional fee.",
          },
          {
            q: "What's the minimum order quantity, and can I split across colours or sizes?",
            a: "The MOQ is 50 units per style. You can split across sizes (e.g. 10 × XS, 15 × S, 15 × M, 10 × L) within a single colour at no extra cost. Splitting across multiple colours requires a minimum of 50 units per colour.",
          },
          {
            q: "How is lead time calculated?",
            a: "Lead time (7–14 days for leggings) starts from the date you approve the bulk production sample — not from your initial enquiry. We recommend factoring in 3–5 days for sample shipping and 1–2 days for your review when planning your launch timeline.",
          },
          {
            q: "Do you offer NDA protection for my designs?",
            a: "Yes. We sign a mutual NDA before any design files are shared. Your artwork, colourways and product specifications are never shared with third parties or used in our marketing without your explicit written consent.",
          },
          {
            q: "What payment terms do you offer?",
            a: "Standard terms are 50% deposit to begin production, 50% balance before shipment. For established clients with a track record of orders, we offer 30% / 70% terms. We accept T/T bank transfer, PayPal and major credit cards.",
          },
          {
            q: "Which fabric is best if I want to offer a sustainable product?",
            a: "Recycled Nylon (ECONYL®) is our top recommendation for sustainability-positioned brands. It performs identically to virgin nylon but is made from regenerated ocean plastic and industrial waste. We can provide material certifications to support your brand's sustainability claims.",
          },
        ]}

        relatedProducts={[
          { label: "Capri Leggings", href: "/products/capri", image: "/yoga/capri-leggings.png" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/yoga/matching-sets.png" },
          { label: "Sports Bras", href: "/products/sports-bras", image: "/yoga/sports-bras.png" },
        ]}
      />
      <Footer />
    </>
  );
}
