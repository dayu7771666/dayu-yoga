import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Relaxed Tops — Zenlume Yoga",
  description:
    "Custom relaxed and oversized yoga tops: flowy tanks, draped tops and boxy crops. Fabric guide, silhouette comparison and quality standards. MOQ 50 units.",
  keywords: "custom relaxed yoga tops, oversized yoga shirts, flowy yoga tops manufacturer, private label yoga tops",
  alternates: { canonical: "https://www.yogaoh.com/products/relaxed-tops" },
  openGraph: {
    title: "Relaxed Tops — Zenlume Yoga",
    description: "Custom relaxed yoga tops with fabric guide, silhouette comparison and quality standards. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/relaxed-tops",
    siteName: "Zenlume Yoga",
  },
};

export default function RelaxedTopsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Tops"
        title="Relaxed"
        titleBold="Tops."
        subtitle="Flowy and oversized silhouettes for the studio, the street and everything in between. Custom cut, fabric and branding at any scale."
        heroImage="/yoga/relaxed-tops.png"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="7–14 days"
        technique="Custom print / dye"

        fabricDetails={[
          {
            name: "Modal/Spandex",
            stretch: 4,
            breathability: 5,
            feel: "Exceptionally soft, lightweight and fluid — often described as 'butter-soft'",
            bestFor: "Flowy tanks, draped tops, studio-to-street wear",
            brandTier: "Premium / lifestyle brands",
            priceRange: "High",
            note: "Modal is a semi-synthetic fibre made from beech tree pulp. It's 50% more absorbent than cotton, naturally resistant to shrinkage and pilling, and maintains its softness wash after wash. For relaxed tops where drape and hand-feel are the primary selling points, modal is the premium choice. Comparable to what brands like Spiritual Gangster and Free People use.",
          },
          {
            name: "Bamboo Jersey",
            stretch: 3,
            breathability: 5,
            feel: "Soft, cool and naturally breathable — similar to modal but with a more matte finish",
            bestFor: "Relaxed tanks, oversized tees, warm-weather wear",
            brandTier: "Natural / eco-conscious brands",
            priceRange: "Mid",
            note: "Bamboo jersey is naturally antibacterial and temperature-regulating — ideal for warm-climate markets or brands targeting customers who prioritise natural fibres. The matte finish and natural drape give a more understated, artisanal aesthetic than modal.",
          },
          {
            name: "Cotton/Spandex",
            stretch: 3,
            breathability: 4,
            feel: "Familiar cotton softness with added stretch — the most universally appealing fabric",
            bestFor: "Oversized tees, casual lifestyle tops, everyday wear",
            brandTier: "Lifestyle / casual wellness brands",
            priceRange: "Mid",
            note: "Cotton/spandex is the most accessible and commercially reliable fabric for relaxed tops. Customers understand and trust cotton — it's the fabric they grew up wearing. The spandex content (5–8%) adds enough stretch for comfortable movement without changing the cotton aesthetic.",
          },
          {
            name: "Linen Blend",
            stretch: 2,
            breathability: 5,
            feel: "Crisp, textured and naturally cooling — the summer fabric",
            bestFor: "Tunic-length tops, resort wear, warm-climate markets",
            brandTier: "Natural / resort / lifestyle brands",
            priceRange: "Mid",
            note: "Linen blend tops are a strong seasonal offering for warm-climate markets. The natural texture and breathability are unmatched in hot weather. Linen softens with each wash, developing a beautiful lived-in quality over time. Best suited for relaxed, non-fitted silhouettes.",
          },
          {
            name: "Recycled Polyester Jersey",
            stretch: 3,
            breathability: 3,
            feel: "Smooth, lightweight and slightly structured",
            bestFor: "Oversized tees, casual tops — with sustainability credentials",
            brandTier: "Eco-conscious / sustainable brands",
            priceRange: "Mid",
            note: "Made from recycled plastic bottles (rPET). A practical sustainability choice for brands that want an eco story without the premium price of modal or bamboo. GRS certification available upon request.",
          },
        ]}

        styleGuide={{
          title: "Silhouette guide —",
          subtitle: "find your flow.",
          items: [
            {
              name: "Oversized Tee",
              visual: "Relaxed, gender-neutral silhouette — the most versatile and commercially accessible style",
              functional: "Maximum freedom of movement. Works as a cover-up over leggings or as a standalone casual piece.",
              bestFor: "Lifestyle brands, casual wellness, studio-to-street, unisex collections",
              tip: "Oversized tees are the highest-volume category in relaxed tops. A well-designed oversized tee with a distinctive graphic or logo is a brand's most powerful marketing tool — customers wear it everywhere.",
            },
            {
              name: "Flowy Tank",
              visual: "Sleeveless, draped silhouette — feminine and effortless",
              functional: "Maximum arm freedom and airflow. The draped fabric moves beautifully during practice.",
              bestFor: "Yoga, pilates, warm-weather practice, resort wear",
              tip: "Flowy tanks photograph beautifully in motion — they're ideal for lifestyle brand imagery. The fabric movement in photos creates a sense of energy and freedom that resonates strongly on social media.",
            },
            {
              name: "Boxy Crop",
              visual: "Short, square silhouette — a fashion-forward take on the crop top",
              functional: "The boxy cut provides coverage and comfort without the fitted compression of a crop top.",
              bestFor: "Fashion-forward brands, athleisure, customers who want coverage without a fitted look",
              tip: "Boxy crops are trending as a fashion-forward alternative to fitted crop tops. They work well with high-waist leggings and shorts, and appeal to customers who prefer a relaxed aesthetic.",
            },
            {
              name: "Tunic Length",
              visual: "Extended length that covers the hips — a modest, elegant silhouette",
              functional: "Full coverage for customers who prefer more modest activewear. Can be worn over leggings as a dress-like layer.",
              bestFor: "Modest activewear, resort wear, customers who prefer full coverage",
              tip: "Tunic-length tops are underserved in the activewear market. If your brand targets customers who prefer modest coverage, this silhouette has a loyal and underserved customer base.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Pigment Dye",
            colorQuality: "Soft, vintage-washed colour with natural variation between pieces",
            durability: 4,
            bestFor: "Lifestyle and wellness brands, artisanal aesthetics, vintage-inspired collections",
            fabricLimit: "Cotton and natural fibre blends",
            cost: "Mid",
            note: "Pigment dyeing creates a soft, faded, lived-in colour that looks and feels like a vintage garment from day one. Each piece has slight natural variation — a quality that many customers perceive as artisanal and premium. This technique is a strong differentiator in a market saturated with flat, uniform colours.",
          },
          {
            name: "Screen Print",
            colorQuality: "Bold, opaque colours with a tactile, slightly raised finish",
            durability: 4,
            bestFor: "Graphic tees, logo placement, statement prints on relaxed tops",
            fabricLimit: "Most fabrics",
            cost: "Low",
            note: "Screen print is the most common technique for relaxed tops — it's the standard for graphic tees. A well-designed graphic on an oversized tee is one of the most cost-effective ways to create a branded product. Water-based inks are recommended for a softer, more premium finish.",
          },
          {
            name: "Tie-dye / Acid Wash",
            colorQuality: "Organic, unique colour variation — no two pieces are identical",
            durability: 4,
            bestFor: "Lifestyle and wellness brands, festival and resort wear, artisanal collections",
            fabricLimit: "Cotton and natural fibre blends",
            cost: "Mid",
            note: "Tie-dye and acid wash effects create a handcrafted, artisanal aesthetic. Each piece is slightly unique, which can be a strong selling point for brands positioning themselves as independent and creative. The uniqueness of each piece is a marketing asset — customers feel they own something one-of-a-kind.",
          },
          {
            name: "Embroidery",
            colorQuality: "Tactile, raised logo with a premium handcrafted quality",
            durability: 5,
            bestFor: "Premium logo placement on solid-colour relaxed tops",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "An embroidered logo on a relaxed top signals premium quality in a way that printed logos cannot. The raised texture and thread detail are immediately perceptible to the touch. For brands positioning their relaxed tops at a higher price point, embroidery is the branding technique of choice.",
          },
        ]}

        customOptions={[
          { label: "Silhouette", choices: ["Oversized tee", "Flowy tank", "Boxy crop", "Tunic length", "Draped top"] },
          { label: "Neckline", choices: ["Round neck", "V-neck", "Wide neck", "Cowl neck", "Scoop neck"] },
          { label: "Fabric", choices: ["Modal/Spandex", "Bamboo Jersey", "Cotton/Spandex", "Linen Blend", "Recycled Polyester Jersey"] },
          { label: "Sleeve", choices: ["Sleeveless", "Short sleeve", "Long sleeve", "3/4 sleeve"] },
          { label: "Print Technique", choices: ["Pigment dye", "Screen print", "Tie-dye / acid wash", "Embroidery", "Solid colour"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Screen print"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Custom tissue wrap", "Retail box"] },
        ]}

        qualityStandards={[
          {
            label: "Shrinkage",
            value: "≤ 3%",
            detail: "All natural fibre fabrics (cotton, bamboo, linen) pre-washed before cutting. Post-production wash test: shrinkage must not exceed 3% in any direction.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. For pigment dye and tie-dye: Grade 3+ acceptable due to the intentional vintage character of the technique.",
          },
          {
            label: "Seam Strength",
            value: "≥ 60N",
            detail: "Seam burst strength tested at ≥ 60 Newtons. All shoulder, side and hem seams inspected for consistent stitch density.",
          },
          {
            label: "Print Durability",
            value: "20 wash cycles",
            detail: "Screen print and embroidery inspected after 20 wash cycles. No cracking, peeling or significant fading of logo or graphic.",
          },
          {
            label: "Size Tolerance",
            value: "± 1.5 cm",
            detail: "Relaxed silhouettes have a slightly wider tolerance than fitted styles. Chest, length and shoulder width verified against approved spec sheet.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit visually inspected before packing. Checks include print placement, logo quality, seam finish and label attachment.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your silhouette, fabric choice, print concept and quantity. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped for approval. Drape, fit and print are verified before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, full bulk production begins with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "What's the difference between modal and bamboo jersey?",
            a: "Both are premium natural-derived fabrics with exceptional softness and breathability. Modal (from beech tree pulp) has a slightly silkier, more fluid drape and is more resistant to shrinkage. Bamboo jersey has a more matte finish and a slightly more structured drape. Modal is typically preferred for draped and flowy styles; bamboo is a strong choice for brands with an eco-natural positioning.",
          },
          {
            q: "Can I get a pre-washed or garment-dyed finish?",
            a: "Yes. Garment dyeing (dyeing the finished garment rather than the fabric) creates a soft, slightly irregular colour that looks naturally worn-in. Combined with a pre-wash treatment, the result is a garment that feels and looks like a well-loved piece from day one. This is a premium technique that commands a higher retail price.",
          },
          {
            q: "How do I ensure the oversized fit is consistent across sizes?",
            a: "We grade the oversized fit proportionally — the garment gets larger as the size increases, but the oversized proportion remains consistent. If you prefer a one-size-fits-most approach (common for oversized tees), we can produce in a single size with a wider fit range. Please specify your preferred approach when submitting your spec.",
          },
          {
            q: "Is tie-dye consistent across units in a bulk order?",
            a: "Traditional hand-tie-dye produces natural variation between pieces — no two are identical. This is a feature, not a defect, and should be communicated to your customers as part of the product's artisanal character. If you need more consistency, we can produce a sublimation-based tie-dye simulation on polyester fabrics that replicates the aesthetic with controlled variation.",
          },
          {
            q: "Can I add a graphic print to a modal or bamboo top?",
            a: "Yes, but sublimation printing is not compatible with natural fibre fabrics. For modal, bamboo and cotton tops, we use water-based screen printing or discharge printing (which removes the dye from the fabric to create a soft, breathable print). Both techniques produce a premium result that complements the natural fabric aesthetic.",
          },
          {
            q: "What's the minimum order for a custom graphic tee?",
            a: "The MOQ is 50 units per design and colourway. For screen printing, each colour in the design requires a separate screen — designs with 1–3 colours are the most cost-effective. For orders above 200 units, we can offer a lower per-unit cost and more complex print options.",
          },
        ]}

        relatedProducts={[
          { label: "Fitted Tops", href: "/products/fitted-tops", image: "/yoga/fitted-tops.png" },
          { label: "Sports Bras", href: "/products/sports-bras", image: "/yoga/sports-bras.png" },
          { label: "Jackets", href: "/products/jackets", image: "/yoga/outerwear-warmup.png" },
        ]}
      />
      <Footer />
    </>
  );
}
