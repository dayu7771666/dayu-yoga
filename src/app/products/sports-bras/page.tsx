import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sports Bras — Zenlume Yoga",
  description:
    "Custom yoga sports bras: low to high impact with support level guide, strap style comparison and fabric deep dive. Private label MOQ 50 units.",
  keywords: "custom sports bras, private label yoga bras, wholesale sports bras, yoga bra manufacturer",
  alternates: { canonical: "https://www.yogaoh.com/products/sports-bras" },
  openGraph: {
    title: "Sports Bras — Zenlume Yoga",
    description: "Custom yoga sports bras from low to high impact. Support level guide, strap comparison and fabric deep dive. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/sports-bras",
    siteName: "Zenlume Yoga",
  },
};

export default function SportsBrasPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Tops"
        title="Sports"
        titleBold="Bras."
        subtitle="Low to high impact sports bras with custom strap design, fabric selection and logo application. Your silhouette, your brand."
        heroImage="/yoga/sports-bras.png"
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
            feel: "Silky, smooth and supportive — moves with the body",
            bestFor: "All yoga styles, pilates, barre, studio classes",
            brandTier: "Premium / boutique brands",
            priceRange: "High",
            note: "The premium standard for sports bras. Nylon's silky surface reduces strap friction — critical for bras with strappy back designs. The fabric holds its shape and compression through repeated washing, maintaining the bra's structure and support level over time.",
          },
          {
            name: "Polyester/Spandex 88/12",
            stretch: 4,
            breathability: 3,
            feel: "Firm, structured compression with a matte finish",
            bestFor: "High-intensity training, gym classes, running",
            brandTier: "Performance / mass market brands",
            priceRange: "Mid",
            note: "The most widely used fabric for performance sports bras. Excellent moisture-wicking properties and colour vibrancy — ideal for sublimation-printed bras with bold designs. The firmer hand-feel provides a sense of support that many high-impact customers prefer.",
          },
          {
            name: "Recycled Nylon (ECONYL®)",
            stretch: 5,
            breathability: 4,
            feel: "Identical to virgin nylon — silky and supportive",
            bestFor: "All activities — with sustainability credentials",
            brandTier: "Eco-conscious / sustainable brands",
            priceRange: "High",
            note: "Sports bras are one of the most personal items in a woman's wardrobe — the sustainability story resonates strongly with eco-conscious consumers. ECONYL® performs identically to virgin nylon with no compromise on comfort or support.",
          },
          {
            name: "Bamboo Blend",
            stretch: 3,
            breathability: 5,
            feel: "Ultra-soft, gentle against sensitive skin",
            bestFor: "Low-impact yoga, meditation, loungewear bras, post-workout recovery",
            brandTier: "Natural / wellness lifestyle brands",
            priceRange: "Mid",
            note: "Bamboo fabric is naturally antibacterial — ideal for customers with sensitive skin or those who wear their bra for extended periods. The softer, less structured feel makes it better suited for low-impact activities or as a comfortable everyday bra.",
          },
        ]}

        styleGuide={{
          title: "Support level guide —",
          subtitle: "match the activity.",
          items: [
            {
              name: "Low Impact (Strappy)",
              visual: "Delicate strap designs — often the focal point of the bra. Strappy backs, criss-cross patterns and cut-out details",
              functional: "Light compression and minimal structure. Designed for comfort and aesthetics over maximum support.",
              bestFor: "Restorative yoga, yin yoga, meditation, pilates, low-intensity movement",
              tip: "Low-impact strappy bras are the most photographed style on social media. If your brand is Instagram-driven, this style generates the most engagement.",
            },
            {
              name: "Medium Impact",
              visual: "Balanced between aesthetic and functional — wider straps with some structure",
              functional: "Moderate compression with a defined band. Suitable for most yoga styles and light cardio.",
              bestFor: "Vinyasa yoga, power yoga, pilates, light cardio, everyday wear",
              tip: "Medium impact is the most versatile and commercially successful support level — it appeals to the widest customer base. If you're launching a single sports bra style, start here.",
            },
            {
              name: "High Impact (Encapsulation)",
              visual: "Structured, full-coverage design — function-forward with minimal decorative elements",
              functional: "Maximum support through encapsulation (each cup supports independently) or compression + encapsulation combination. Underwire optional.",
              bestFor: "Running, HIIT, cycling, high-intensity training, larger cup sizes",
              tip: "High-impact bras command a higher retail price and have a loyal, repeat-purchase customer base. If you're targeting performance athletes, this category has strong long-term value.",
            },
            {
              name: "Longline Bra",
              visual: "Extended length that covers the midriff — a hybrid between a sports bra and a crop top",
              functional: "Provides core coverage and light compression. The longer length eliminates the gap between bra and leggings.",
              bestFor: "Yoga, pilates, studio wear, customers who prefer more coverage",
              tip: "Longline bras are trending as both a performance piece and a fashion item. They pair beautifully with high-waist leggings for a streamlined studio look.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Sublimation (All-over Print)",
            colorQuality: "Full-colour, photographic quality — unlimited colours",
            durability: 5,
            bestFor: "Bold printed bras, matching set prints, tropical and floral designs",
            fabricLimit: "Polyester-based fabrics only",
            cost: "Mid",
            note: "Sports bras are a high-visibility item — the print is prominently displayed in every workout. Sublimation allows you to create a matching set where the bra and leggings share the same print, which is a strong commercial proposition.",
          },
          {
            name: "Colour Blocking",
            colorQuality: "Clean, graphic colour transitions — two or more solid colours",
            durability: 5,
            bestFor: "Modern, graphic brand aesthetics — no print files needed",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Colour blocking on sports bras creates a bold, architectural look. The strap design and panel lines become part of the design. Works on any fabric including premium nylon.",
          },
          {
            name: "Solid Colour Dye",
            colorQuality: "Pure, even colour throughout",
            durability: 5,
            bestFor: "Core colour collections, minimalist brands, premium basics",
            fabricLimit: "All fabrics",
            cost: "Low",
            note: "A solid-colour sports bra in a premium nylon fabric with a distinctive strap design is a perennial best-seller. The brand identity comes through the silhouette, label and packaging rather than surface graphics.",
          },
          {
            name: "Screen Print / Heat Transfer",
            colorQuality: "Precise logo reproduction",
            durability: 4,
            bestFor: "Logo placement on solid-colour bras, branded band detail",
            fabricLimit: "Most fabrics",
            cost: "Low",
            note: "For a solid-colour bra, a small screen-printed or heat-transferred logo on the band or strap is a clean, professional branding approach. Less is often more on sports bras — an oversized print can look cheap.",
          },
        ]}

        customOptions={[
          { label: "Support Level", choices: ["Low impact (strappy)", "Medium impact", "High impact (encapsulation)", "Longline"] },
          { label: "Strap Style", choices: ["Racerback", "Cross-back", "Spaghetti straps", "Wide straps", "Strappy multi-strap", "Longline"] },
          { label: "Fabric", choices: ["Nylon/Spandex 80/20", "Polyester/Spandex 88/12", "Recycled Nylon", "Bamboo Blend"] },
          { label: "Print Technique", choices: ["Sublimation (all-over)", "Colour blocking", "Solid colour dye", "Screen print / heat transfer"] },
          { label: "Logo Application", choices: ["Embroidery", "Woven label", "Heat transfer", "Rubber patch"] },
          { label: "Details", choices: ["Removable pads", "Mesh panels", "Bonded seams", "Adjustable straps", "Underwire"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Custom tissue wrap", "Retail box"] },
        ]}

        qualityStandards={[
          {
            label: "Band Elasticity",
            value: "≥ 90%",
            detail: "Band elastic tested at 100 stretch cycles. Must recover to ≥ 90% of original dimensions — ensures the bra maintains its support level throughout its lifespan.",
          },
          {
            label: "Strap Strength",
            value: "≥ 60N",
            detail: "Strap attachment points tested at ≥ 60 Newtons pull force. Adjustable strap hardware tested for secure locking under load.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. Minimum Grade 4 rating — no significant colour transfer to skin or other garments after 30 wash cycles.",
          },
          {
            label: "Pad Retention",
            value: "Secure",
            detail: "For bras with removable pads: pad pocket opening tested for secure retention during movement. Pads must not shift or fall out during normal activity.",
          },
          {
            label: "Size Tolerance",
            value: "± 1 cm",
            detail: "Band circumference, cup depth and strap length verified against approved spec sheet for every size in the run.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit visually inspected before packing. Checks include strap symmetry, pad placement, print alignment and hardware function.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your support level, strap style, fabric choice and quantity. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample is produced and shipped for approval. Fit, support and strap construction are verified before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Once you approve the sample, full bulk production begins with QC at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "How do I specify cup sizing for sports bras?",
            a: "We produce sports bras in standard XS–XL sizing (which corresponds to band + cup size ranges) or in dedicated cup sizes (32A–38DD) for high-impact encapsulation styles. Please specify your preferred sizing system when submitting your enquiry, and we'll advise on the best approach for your target market.",
          },
          {
            q: "Can I order a sports bra that matches my leggings print exactly?",
            a: "Yes — and this is one of our most popular requests. Ordering a matching set (bra + leggings or bra + shorts) in the same production run ensures perfect colour and print consistency between pieces. We strongly recommend ordering matching pieces together rather than separately.",
          },
          {
            q: "What's the difference between removable and non-removable pads?",
            a: "Removable pads allow your customers to wash the bra and pads separately, and to adjust coverage to their preference. Non-removable pads are sewn in — they provide a cleaner silhouette and are preferred for high-impact bras where pad movement during activity is a concern. We recommend removable pads for low-to-medium impact styles.",
          },
          {
            q: "Can I get a strappy back design on a high-impact bra?",
            a: "Yes, but with limitations. High-impact bras require structural integrity at the back — very thin or highly decorative strap designs can compromise support. Our design team can help you create a strappy aesthetic that still meets the structural requirements for your chosen support level.",
          },
          {
            q: "Do you offer underwire options?",
            a: "Yes. Underwire is available for medium and high-impact styles. We use flexible, coated underwire that is comfortable for active wear. Underwire adds to the lead time (typically 3–5 additional days) and slightly increases the per-unit cost.",
          },
          {
            q: "How do I ensure the bra fits well across different body types?",
            a: "We recommend ordering a size set sample (XS, S, M, L, XL) before bulk production to verify fit across your target size range. Our pattern team can adjust the band circumference, cup depth and strap length based on your fit feedback. We can also advise on sizing based on your target market (US, EU and Asian sizing differ significantly).",
          },
        ]}

        relatedProducts={[
          { label: "Fitted Tops", href: "/products/fitted-tops", image: "/yoga/fitted-tops.png" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/yoga/matching-sets.png" },
          { label: "Full-length Leggings", href: "/products/leggings", image: "/yoga/full-length-leggings.png" },
        ]}
      />
      <Footer />
    </>
  );
}
