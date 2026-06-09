import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yoga Shorts — Zenlume Yoga",
  description:
    "Custom yoga shorts: biker, training and flowy styles. Detailed fabric guide, style comparison and quality standards. Private label MOQ 50 units.",
  keywords: "custom yoga shorts, private label biker shorts, wholesale yoga shorts, yoga shorts manufacturer",
  alternates: { canonical: "https://www.yogaoh.com/products/shorts" },
  openGraph: {
    title: "Yoga Shorts — Zenlume Yoga",
    description: "Custom yoga shorts: biker, training and flowy styles. Private label with custom fabric, print and logo. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/shorts",
    siteName: "Zenlume Yoga",
  },
};

export default function ShortsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Bottoms"
        title="Yoga"
        titleBold="Shorts."
        subtitle="Biker shorts, training shorts and flowy styles. Custom fabric, waistband, print and logo — produced to your exact specification."
        heroImage="/yoga/shorts.png"
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
            feel: "Smooth, silky compression — moves like a second skin",
            bestFor: "Biker shorts, compression shorts, pilates, barre",
            brandTier: "Premium / boutique brands",
            priceRange: "High",
            note: "The go-to fabric for premium biker shorts. The silky nylon surface reduces friction during movement and photographs beautifully. If your brand is competing with Lululemon or Alo Yoga in the shorts category, nylon/spandex is the expected standard.",
          },
          {
            name: "Polyester/Spandex 88/12",
            stretch: 4,
            breathability: 3,
            feel: "Firm, structured compression with a matte finish",
            bestFor: "Training shorts, gym shorts, high-intensity workouts",
            brandTier: "Performance / mass market brands",
            priceRange: "Mid",
            note: "Excellent for training shorts where durability and colour vibrancy matter more than silky hand-feel. Polyester holds sublimation prints exceptionally well — ideal for bold, graphic shorts designs. More resistant to pilling than nylon in high-abrasion areas.",
          },
          {
            name: "Woven Nylon (Ripstop)",
            stretch: 2,
            breathability: 5,
            feel: "Lightweight, crisp and airy — like running shorts",
            bestFor: "Flowy shorts, training shorts, outdoor yoga, running",
            brandTier: "Performance / outdoor brands",
            priceRange: "Mid",
            note: "Woven nylon is a non-stretch fabric used for flowy or training shorts — it drapes beautifully and is extremely lightweight. The open weave provides excellent airflow, making it ideal for warm-weather or high-intensity activities where heat dissipation is critical.",
          },
          {
            name: "Recycled Polyester",
            stretch: 4,
            breathability: 3,
            feel: "Similar to virgin polyester — firm and structured",
            bestFor: "Training shorts, gym shorts — with sustainability credentials",
            brandTier: "Eco-conscious / sustainable brands",
            priceRange: "Mid",
            note: "Made from recycled plastic bottles (rPET). Performance is comparable to virgin polyester, but your brand gains a sustainability story. Increasingly popular as consumers demand more responsible activewear. GRS certification available upon request.",
          },
        ]}

        styleGuide={{
          title: "Shorts style guide —",
          subtitle: "match the activity.",
          items: [
            {
              name: "Biker Shorts",
              visual: "Fitted, mid-thigh length — clean, athletic silhouette that's crossed into mainstream fashion",
              functional: "4-way stretch compression reduces muscle fatigue and prevents chafing. The fitted cut stays in place during all movements.",
              bestFor: "Cycling, pilates, barre, HIIT, casual athleisure wear",
              tip: "Biker shorts are one of the fastest-growing categories in activewear. They work equally well as a standalone product and as part of a matching set with a sports bra.",
            },
            {
              name: "Training Shorts (Loose)",
            visual: "Relaxed fit with a slight flare — the classic gym short silhouette",
              functional: "Maximum freedom of movement. Typically made with woven or lightweight knit fabric for airflow. Often features an inner liner for coverage.",
              bestFor: "CrossFit, weightlifting, HIIT, running, outdoor training",
              tip: "Add a built-in compression liner in a contrasting colour — it adds functionality and creates a distinctive visual detail that differentiates your product.",
            },
            {
              name: "Flowy Shorts",
              visual: "Soft, draped silhouette that moves with the body — feminine and relaxed",
              functional: "Made from lightweight woven or bamboo fabric. Less structured than biker or training shorts — prioritises comfort and aesthetics over compression.",
              bestFor: "Restorative yoga, outdoor yoga, beach and resort wear, lifestyle brands",
              tip: "Flowy shorts photograph beautifully in motion. If you're building a brand around outdoor or retreat yoga, this style creates aspirational lifestyle imagery.",
            },
            {
              name: "Compression Shorts",
              visual: "Shorter and tighter than biker shorts — typically sits at the upper thigh",
              functional: "Maximum compression for muscle support and recovery. Often used as a base layer under other shorts or skirts.",
              bestFor: "Running, cycling, triathlon, recovery wear",
              tip: "Compression shorts have a loyal, performance-focused customer base. If you're targeting athletes rather than studio yogis, this is a high-value category with strong repeat purchase rates.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Sublimation (All-over Print)",
            colorQuality: "Full-colour, photographic quality — unlimited colours",
            durability: 5,
            bestFor: "Bold graphic shorts, tropical prints, colour-blocked designs",
            fabricLimit: "Polyester-based fabrics only",
            cost: "Mid",
            note: "Shorts are a high-visibility canvas for statement prints. Sublimation is the only technique that can reproduce complex, multi-colour designs with full accuracy. Works exceptionally well on biker and training shorts.",
          },
          {
            name: "Solid Colour Dye",
            colorQuality: "Pure, even colour throughout",
            durability: 5,
            bestFor: "Core colour collections, minimalist brands, premium basics",
            fabricLimit: "All fabrics",
            cost: "Low",
            note: "A solid-colour biker short in a premium nylon fabric is a perennial best-seller. Build your core collection in 6–8 key colours and focus your branding on the label, waistband and packaging.",
          },
          {
            name: "Tie-dye / Acid Wash",
            colorQuality: "Organic, unique colour variation — no two pieces are identical",
            durability: 4,
            bestFor: "Lifestyle and wellness brands, festival and resort wear",
            fabricLimit: "Cotton/spandex and natural fibre blends",
            cost: "Mid",
            note: "Tie-dye and acid wash effects create a handcrafted, artisanal aesthetic. Each piece is slightly unique, which can be a strong selling point for brands positioning themselves as independent and creative. Not suitable for synthetic performance fabrics.",
          },
          {
            name: "Screen Print",
            colorQuality: "Bold, opaque colours with a tactile finish",
            durability: 4,
            bestFor: "Logo placement, waistband branding, limited-colour designs",
            fabricLimit: "Most fabrics",
            cost: "Low",
            note: "For shorts, screen print is most commonly used for a bold logo on the thigh or a branded waistband. A simple, well-placed logo on a solid-colour short is a cost-effective way to create a branded product.",
          },
        ]}

        customOptions={[
          { label: "Style", choices: ["Biker shorts (mid-thigh)", "Training shorts (loose)", "Flowy shorts", "Compression shorts"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Woven nylon (ripstop)", "Recycled Polyester"] },
          { label: "Waistband", choices: ["High-waist elastic", "Drawstring", "Fold-over", "Wide waistband with pocket"] },
          { label: "Inner Liner", choices: ["No liner", "Built-in compression liner", "Mesh liner", "Contrasting colour liner"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Solid colour dye", "Tie-dye / acid wash", "Screen print"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Silicone print"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Custom tissue wrap", "Retail box"] },
        ]}

        qualityStandards={[
          {
            label: "Stretch Recovery",
            value: "≥ 95%",
            detail: "For knit fabrics: 5% random sample per batch tested at 50 stretch cycles. Fabric must recover to ≥ 95% of original dimensions.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. Minimum Grade 4 rating — no significant colour transfer or fading after 30 wash cycles.",
          },
          {
            label: "Seam Strength",
            value: "≥ 80N",
            detail: "Seam burst strength tested at ≥ 80 Newtons. Crotch seam receives additional reinforcement inspection on all shorts styles.",
          },
          {
            label: "Liner Attachment",
            value: "Secure",
            detail: "For shorts with built-in liners: liner attachment seams tested for secure bonding. No separation or bunching after 20 wash cycles.",
          },
          {
            label: "Size Tolerance",
            value: "± 1 cm",
            detail: "Waist, hip and length measurements verified against approved spec sheet for every size in the run.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit visually inspected before packing. Checks include print alignment, logo placement, waistband integrity and liner attachment.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your style, fabric choice, print files and quantity. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped to you for approval. Fit, liner and waistband are verified before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, full bulk production begins with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "Which shorts style is most popular right now?",
            a: "Biker shorts are currently the dominant style in the activewear market, driven by their crossover appeal between performance and fashion. They work as standalone products and as part of matching sets. If you're entering the shorts category for the first time, biker shorts are the safest starting point.",
          },
          {
            q: "Can I add a built-in liner to biker shorts?",
            a: "Yes. A built-in compression liner is a popular option for biker shorts — it adds coverage and functionality. You can choose the liner fabric, length and colour. A contrasting colour liner that peeks out at the hem is a distinctive design detail that many brands use.",
          },
          {
            q: "What's the difference between woven nylon and knit nylon/spandex?",
            a: "Knit nylon/spandex (80/20) is a stretch fabric — it conforms to the body and provides compression. Woven nylon is a non-stretch fabric — it drapes and flows rather than hugging the body. Knit is used for biker and compression shorts; woven is used for training and flowy shorts. We can provide fabric swatches to help you decide.",
          },
          {
            q: "Can I order biker shorts and matching sports bras in the same production run?",
            a: "Yes — and we strongly recommend it. Ordering matching sets together ensures colour consistency between pieces, as both are dyed or printed in the same batch. Separate orders at different times can result in slight colour variations even with the same colour code.",
          },
          {
            q: "Do you offer shorts with pockets?",
            a: "Yes. Side pockets, hidden waistband pockets and back pockets are all available. Phone pockets are a strong selling point — many customers specifically search for shorts with storage. Please specify pocket requirements when submitting your spec.",
          },
          {
            q: "Is tie-dye available on synthetic fabrics?",
            a: "Traditional tie-dye works best on natural fibres like cotton. For synthetic fabrics like nylon or polyester, we use a sublimation-based tie-dye simulation that replicates the aesthetic without the limitations of natural-fibre dyeing. The result is consistent across units, unlike true hand-dye which varies piece to piece.",
          },
        ]}

        relatedProducts={[
          { label: "Full-length Leggings", href: "/products/leggings", image: "/yoga/full-length-leggings.png" },
          { label: "Sports Bras", href: "/products/sports-bras", image: "/yoga/sports-bras.png" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/yoga/matching-sets.png" },
        ]}
      />
      <Footer />
    </>
  );
}
