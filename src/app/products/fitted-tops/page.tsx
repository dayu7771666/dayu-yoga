import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fitted Tops — Zenlume Yoga",
  description:
    "Custom fitted yoga tops: crop, mid-length and full-length. Neckline guide, fabric comparison and quality standards. Private label MOQ 50 units.",
  keywords: "custom yoga tops, private label fitted tops, wholesale yoga shirts, yoga crop top manufacturer",
  alternates: { canonical: "https://www.yogaoh.com/products/fitted-tops" },
  openGraph: {
    title: "Fitted Tops — Zenlume Yoga",
    description: "Custom fitted yoga tops with neckline guide, fabric comparison and quality standards. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/fitted-tops",
    siteName: "Zenlume Yoga",
  },
};

export default function FittedTopsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Tops"
        title="Fitted"
        titleBold="Tops."
        subtitle="Crop and full-length fitted tops for studio and everyday wear. Custom neckline, fabric, print and logo — produced exactly as you specify."
        heroImage="/yoga/fitted-tops.png"
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
            feel: "Silky, smooth and body-hugging — a premium second-skin fit",
            bestFor: "Studio yoga, pilates, barre, fitted crop tops",
            brandTier: "Premium / boutique brands",
            priceRange: "High",
            note: "The premium choice for fitted tops. Nylon's silky surface and excellent shape retention make it ideal for close-fitting styles where the fabric's drape and hand-feel are part of the product's appeal. The fabric maintains its fit and colour through repeated washing.",
          },
          {
            name: "Polyester/Spandex 88/12",
            stretch: 4,
            breathability: 3,
            feel: "Firm, structured and supportive with a matte finish",
            bestFor: "Performance tops, gym wear, high-intensity training",
            brandTier: "Performance / mass market brands",
            priceRange: "Mid",
            note: "The most versatile option for fitted tops. Excellent for sublimation printing — bold colour-block designs and all-over prints look best on polyester. The firmer hand-feel provides a sense of structure that many customers associate with performance activewear.",
          },
          {
            name: "Ribbed Knit",
            stretch: 4,
            breathability: 4,
            feel: "Textured, slightly thicker — a premium tactile quality",
            bestFor: "Lifestyle and athleisure tops, studio-to-street wear",
            brandTier: "Lifestyle / premium basics brands",
            priceRange: "Mid",
            note: "Ribbed knit adds a premium textural dimension to fitted tops. The vertical rib pattern is subtly slimming and photographs beautifully. Ideal for brands positioning their tops as both activewear and lifestyle pieces. Not suitable for sublimation printing — best used with solid colours or tonal designs.",
          },
          {
            name: "Bamboo Blend",
            stretch: 3,
            breathability: 5,
            feel: "Soft, lightweight and naturally breathable",
            bestFor: "Low-intensity yoga, meditation, warm-weather wear",
            brandTier: "Natural / wellness lifestyle brands",
            priceRange: "Mid",
            note: "Bamboo fitted tops have a softer, more relaxed drape than synthetic fabrics. The natural breathability makes them ideal for warm-weather markets or brands targeting customers who prioritise natural fibres. The softer structure means they work better as mid-length or full-length styles than as tight crop tops.",
          },
        ]}

        styleGuide={{
          title: "Neckline guide —",
          subtitle: "shape your silhouette.",
          items: [
            {
              name: "Square Neck",
              visual: "Bold, geometric neckline that frames the collarbone and décolletage — currently the most trending neckline in activewear",
              functional: "Provides full coverage while creating a strong visual focal point. Works well with all strap widths.",
              bestFor: "Fashion-forward brands, studio wear, customers who want a distinctive look",
              tip: "Square neck is the fastest-growing neckline in yoga tops. If you want your brand to look current and trend-aware, this is the neckline to lead with.",
            },
            {
              name: "Scoop Neck",
              visual: "Soft, curved neckline that sits low on the chest — feminine and relaxed",
              functional: "Maximum comfort and freedom of movement around the neck and shoulders. The most universally flattering neckline.",
              bestFor: "Lifestyle brands, everyday wear, customers who prefer a softer aesthetic",
              tip: "Scoop neck is the safest, most commercially reliable neckline. It appeals to the widest demographic and works across all body types.",
            },
            {
              name: "Mock Neck",
              visual: "High, fitted collar that adds a sleek, architectural quality to the top",
              functional: "Provides neck coverage and warmth — ideal for cooler climates or outdoor practice.",
              bestFor: "Premium brands, cooler climates, customers who want a sophisticated, editorial look",
              tip: "Mock neck tops photograph beautifully and stand out in a crowded market. They command a higher retail price and appeal to a fashion-conscious customer.",
            },
            {
              name: "V-neck",
              visual: "Classic V-shaped neckline — elongates the neck and creates a slimming effect",
              functional: "Comfortable and non-restrictive. The V-shape provides ventilation at the chest during intense activity.",
              bestFor: "Classic and timeless brands, customers who prefer a traditional activewear aesthetic",
              tip: "V-neck is a reliable, evergreen choice. It pairs well with high-waist leggings and is a strong option for brands building a core collection.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Solid Colour Dye",
            colorQuality: "Pure, even colour throughout",
            durability: 5,
            bestFor: "Core colour collections, premium basics, ribbed knit styles",
            fabricLimit: "All fabrics",
            cost: "Low",
            note: "For fitted tops, solid colour is often the strongest choice. The silhouette, neckline and fabric quality become the product's selling points. Build a core colour palette (6–8 colours) and invest in premium fabric and construction rather than complex prints.",
          },
          {
            name: "Colour Blocking",
            colorQuality: "Clean, graphic colour transitions",
            durability: 5,
            bestFor: "Modern, graphic brand aesthetics — no print files needed",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Colour blocking on fitted tops creates a distinctive silhouette through panel construction. The seam lines become design elements. Works on all fabrics including premium nylon and ribbed knit.",
          },
          {
            name: "Sublimation (All-over Print)",
            colorQuality: "Full-colour, photographic quality",
            durability: 5,
            bestFor: "Bold printed tops, matching set designs, graphic brand statements",
            fabricLimit: "Polyester-based fabrics only",
            cost: "Mid",
            note: "Sublimation on fitted tops creates a bold, head-to-toe brand statement — especially powerful when the top is part of a matching set. The print wraps seamlessly around the body with no repeat or join lines.",
          },
          {
            name: "Screen Print / Embroidery",
            colorQuality: "Precise logo reproduction with tactile quality",
            durability: 5,
            bestFor: "Logo placement on solid-colour tops, chest branding",
            fabricLimit: "Most fabrics (embroidery on all fabrics)",
            cost: "Low",
            note: "A well-placed embroidered logo on a solid-colour fitted top is a hallmark of premium activewear. The raised texture of embroidery signals quality in a way that printed logos cannot. For a clean, understated brand statement, embroidery is the gold standard.",
          },
        ]}

        customOptions={[
          { label: "Length", choices: ["Crop (above navel)", "Mid-length", "Full-length (tucked)"] },
          { label: "Neckline", choices: ["Square neck", "Scoop neck", "Mock neck", "V-neck", "Round neck"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Ribbed knit", "Bamboo Blend"] },
          { label: "Sleeve", choices: ["Sleeveless", "Short sleeve", "Long sleeve", "Cap sleeve"] },
          { label: "Print Technique", choices: ["Solid colour dye", "Colour blocking", "Sublimation (all-over)", "Screen print / embroidery"] },
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
            label: "Seam Strength",
            value: "≥ 70N",
            detail: "Seam burst strength tested at ≥ 70 Newtons. All shoulder, side and hem seams inspected for consistent stitch density.",
          },
          {
            label: "Neckline Stability",
            value: "Verified",
            detail: "Neckline shape verified against approved spec after 10 wash cycles. No stretching, rolling or distortion of neckline binding.",
          },
          {
            label: "Size Tolerance",
            value: "± 1 cm",
            detail: "Bust, length and shoulder width measured against approved spec sheet for every size in the run.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit visually inspected before packing. Checks include neckline finish, print alignment, logo placement and hem quality.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your neckline, length, fabric choice and quantity. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped for approval. Neckline, fit and print are verified before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, full bulk production begins with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "Which neckline is most popular right now?",
            a: "Square neck is currently the fastest-growing neckline in yoga tops, driven by its strong visual presence on social media. Scoop neck remains the most commercially reliable choice across all demographics. If you're building a core collection, we recommend launching with scoop neck first, then adding square neck as a trend-forward option.",
          },
          {
            q: "Can I get a fitted top that matches my leggings exactly?",
            a: "Yes. Ordering a fitted top and leggings in the same production run ensures perfect colour and print consistency. This is our most popular configuration — the matching set creates a strong brand look and a higher average order value.",
          },
          {
            q: "What's the difference between crop, mid-length and full-length?",
            a: "Crop tops sit above the navel and are typically paired with high-waist leggings. Mid-length tops sit at the hip — they provide more coverage and work as standalone pieces. Full-length (tucked) tops are designed to be worn tucked into leggings or shorts. We recommend specifying the exact length in centimetres (from shoulder to hem) when submitting your spec.",
          },
          {
            q: "Is ribbed knit suitable for sublimation printing?",
            a: "No. Sublimation requires a smooth polyester surface to bond with. Ribbed knit's textured surface and natural fibre content make sublimation printing impractical. For ribbed knit styles, we recommend solid colour dye or screen print for logo placement.",
          },
          {
            q: "Can I add thumb holes to long-sleeve fitted tops?",
            a: "Yes. Thumb holes are a popular functional detail for long-sleeve activewear — they keep the sleeve in place during movement. Please specify thumb hole dimensions and placement when submitting your spec.",
          },
          {
            q: "How do I ensure the crop length is consistent across all sizes?",
            a: "We grade the crop length proportionally across sizes — the hem rises slightly as the size increases to maintain the same visual proportion. If you prefer a fixed hem length across all sizes, please specify this in your spec sheet. We'll produce a size set sample to confirm before bulk production.",
          },
        ]}

        relatedProducts={[
          { label: "Sports Bras", href: "/products/sports-bras", image: "/yoga/sports-bras.png" },
          { label: "Relaxed Tops", href: "/products/relaxed-tops", image: "/yoga/relaxed-tops.png" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/yoga/matching-sets.png" },
        ]}
      />
      <Footer />
    </>
  );
}
