import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yoga Jackets — Zenlume Yoga",
  description:
    "Custom yoga jackets and warmup zip-ups. Fabric guide, style comparison, hardware options and quality standards. Private label MOQ 50 units.",
  keywords: "custom yoga jackets, private label warmup jackets, yoga outerwear manufacturer, branded zip-up jackets",
  alternates: { canonical: "https://www.yogaoh.com/products/jackets" },
  openGraph: {
    title: "Yoga Jackets — Zenlume Yoga",
    description: "Custom yoga jackets with fabric guide, style comparison and hardware options. MOQ 50 units.",
    type: "website",
    url: "https://www.yogaoh.com/products/jackets",
    siteName: "Zenlume Yoga",
  },
};

export default function JacketsPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate
        eyebrow="Yoga Apparel — Outerwear"
        title="Yoga"
        titleBold="Jackets."
        subtitle="Lightweight warmup jackets and zip-ups for studio and outdoor wear. Custom lining, zipper hardware, print and logo application."
        heroImage="/yoga/outerwear-warmup.png"
        backHref="/collections/yoga"
        backLabel="Yoga Apparel"
        moq="50 units"
        leadTime="14–21 days"
        technique="Custom print / embroidery"

        fabricDetails={[
          {
            name: "Polyester Fleece",
            stretch: 3,
            breathability: 3,
            feel: "Soft, warm and slightly textured — the classic warmup fabric",
            bestFor: "Warmup jackets, studio cover-ups, cool-weather practice",
            brandTier: "All brand tiers",
            priceRange: "Mid",
            note: "Polyester fleece is the most widely used fabric for yoga jackets. It's warm, lightweight, easy to care for and holds its shape well. The slightly textured surface gives a casual, approachable aesthetic. Available in a range of weights — lighter fleece (150gsm) for warmup jackets, heavier fleece (300gsm) for colder climates.",
          },
          {
            name: "Stretch Woven (Nylon/Spandex)",
            stretch: 4,
            breathability: 4,
            feel: "Smooth, athletic and slightly structured — a premium performance feel",
            bestFor: "Track jackets, athletic warmup jackets, performance-focused brands",
            brandTier: "Premium / performance brands",
            priceRange: "High",
            note: "Stretch woven fabric gives yoga jackets a sleek, athletic silhouette that pairs beautifully with matching leggings. The 4-way stretch allows full range of motion — ideal for jackets that are worn during warm-up and cool-down rather than just as cover-ups. A premium choice that commands a higher retail price.",
          },
          {
            name: "French Terry",
            stretch: 3,
            breathability: 4,
            feel: "Soft, looped interior — the premium sweatshirt fabric",
            bestFor: "Hoodies, zip-up sweatshirts, lifestyle jackets",
            brandTier: "Lifestyle / premium casual brands",
            priceRange: "Mid",
            note: "French terry is the fabric of premium hoodies and sweatshirts. The looped interior is soft against the skin while the smooth exterior takes prints and embroidery exceptionally well. If your brand is positioned as a lifestyle label rather than a pure performance brand, french terry jackets are a strong commercial choice.",
          },
          {
            name: "Nylon Ripstop",
            stretch: 2,
            breathability: 5,
            feel: "Lightweight, crisp and packable — the outdoor performance fabric",
            bestFor: "Lightweight windbreakers, outdoor yoga, packable jackets",
            brandTier: "Outdoor / performance brands",
            priceRange: "Mid",
            note: "Nylon ripstop is extremely lightweight and packable — ideal for jackets that customers carry in their yoga bag. The ripstop weave provides excellent tear resistance. Water-resistant coatings (DWR) are available for added weather protection. A strong choice for brands targeting outdoor or travel yoga.",
          },
          {
            name: "Recycled Polyester Fleece",
            stretch: 3,
            breathability: 3,
            feel: "Identical to virgin polyester fleece — soft and warm",
            bestFor: "Warmup jackets — with sustainability credentials",
            brandTier: "Eco-conscious / sustainable brands",
            priceRange: "Mid",
            note: "Made from recycled plastic bottles (rPET). Performance and feel are identical to virgin polyester fleece. GRS certification available upon request. A strong sustainability story for a category (outerwear) where customers are increasingly conscious of environmental impact.",
          },
        ]}

        styleGuide={{
          title: "Jacket style guide —",
          subtitle: "from studio to street.",
          items: [
            {
              name: "Full-zip Hoodie",
              visual: "The most versatile and commercially reliable jacket style — a wardrobe staple",
              functional: "Full-zip opening allows easy on/off over workout gear. Hood provides additional warmth and a casual aesthetic.",
              bestFor: "All brand tiers, core collections, studio-to-street wear",
              tip: "A well-designed full-zip hoodie in a premium french terry or fleece fabric is one of the highest-volume products in activewear. If you're adding a jacket to your collection for the first time, start here.",
            },
            {
              name: "Track Jacket",
              visual: "Clean, athletic silhouette — the classic warmup jacket aesthetic",
              functional: "Lightweight and packable. The fitted cut pairs well with matching track pants or leggings.",
              bestFor: "Performance brands, coordinated warmup sets, athletic aesthetics",
              tip: "Track jackets are making a strong comeback as both performance and fashion items. A matching track jacket + leggings set is a high-value commercial proposition.",
            },
            {
              name: "Cropped Zip-up",
              visual: "Short, fashion-forward silhouette — hits at the waist or above",
              functional: "Provides torso warmth without covering the leggings. The crop length creates a layered look when worn over a sports bra.",
              bestFor: "Fashion-forward brands, studio wear, customers who want a layered look",
              tip: "Cropped zip-ups are trending as a fashion-forward alternative to full-length jackets. They work beautifully as part of a three-piece set (bra + crop jacket + leggings).",
            },
            {
              name: "Half-zip Pullover",
              visual: "Minimalist, clean design — the half-zip is a subtle but distinctive design detail",
              functional: "Pullover construction means no zipper bulk at the front. The half-zip allows ventilation without full opening.",
              bestFor: "Premium and minimalist brands, customers who prefer a clean aesthetic",
              tip: "Half-zip pullovers have a premium, understated aesthetic that appeals to customers who find full-zip hoodies too casual. A strong choice for brands targeting a sophisticated, fashion-conscious demographic.",
            },
          ],
        }}

        techniqueDetails={[
          {
            name: "Embroidery",
            colorQuality: "Tactile, raised logo with a premium handcrafted quality",
            durability: 5,
            bestFor: "Chest logo, back logo, sleeve branding on all jacket styles",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Embroidery is the gold standard for jacket branding. The raised thread detail signals premium quality and is immediately perceptible to the touch. For jackets, embroidery on the chest (left breast), back yoke or sleeve are the most common and effective placements.",
          },
          {
            name: "Woven Patch / Rubber Badge",
            colorQuality: "Precise, detailed logo reproduction with a tactile, premium quality",
            durability: 5,
            bestFor: "Logo placement on fleece and technical fabrics",
            fabricLimit: "All fabrics",
            cost: "Mid",
            note: "Woven patches and rubber badges are sewn or heat-bonded onto the jacket. They create a distinctive, three-dimensional brand element that stands out on textured fabrics like fleece. Rubber badges are particularly effective on technical and performance fabrics.",
          },
          {
            name: "Screen Print",
            colorQuality: "Bold, graphic prints on smooth fabric surfaces",
            durability: 4,
            bestFor: "Back graphics, large-format prints on smooth woven jackets",
            fabricLimit: "Smooth woven and french terry fabrics",
            cost: "Low",
            note: "Screen print works best on smooth fabric surfaces. For fleece jackets, the textured surface can reduce print sharpness — embroidery or woven patches are preferred. For smooth woven or french terry jackets, screen print can create bold back graphics or large-format brand statements.",
          },
          {
            name: "Custom Lining Print",
            colorQuality: "Full-colour sublimation print on the interior lining",
            durability: 5,
            bestFor: "Premium brand statement — a hidden detail that surprises and delights",
            fabricLimit: "Polyester lining fabrics",
            cost: "High",
            note: "A custom-printed interior lining is a premium brand detail that customers discover when they open the jacket. It's an unexpected touch that elevates the perceived value of the garment and creates a memorable unboxing moment. A strong differentiator for premium brands.",
          },
        ]}

        customOptions={[
          { label: "Style", choices: ["Full-zip hoodie", "Track jacket", "Cropped zip-up", "Half-zip pullover", "Bomber jacket"] },
          { label: "Fabric (Shell)", choices: ["Polyester fleece", "Stretch woven (nylon/spandex)", "French terry", "Nylon ripstop", "Recycled polyester fleece"] },
          { label: "Lining", choices: ["Mesh lining", "Fleece lining", "No lining", "Custom print lining"] },
          { label: "Hardware", choices: ["YKK zipper (black)", "YKK zipper (custom colour)", "Branded zipper pull", "Snap buttons"] },
          { label: "Logo Application", choices: ["Embroidery (chest)", "Embroidery (back)", "Woven patch", "Rubber badge", "Screen print"] },
          { label: "Packaging", choices: ["Poly bag", "Branded hang tag", "Folded box packaging"] },
        ]}

        qualityStandards={[
          {
            label: "Zipper Function",
            value: "500 cycles",
            detail: "All zippers tested for smooth operation at 500 open/close cycles. YKK hardware standard — the most reliable zipper brand in the industry.",
          },
          {
            label: "Seam Strength",
            value: "≥ 80N",
            detail: "All structural seams (shoulder, side, sleeve) tested at ≥ 80 Newtons. Jacket construction uses reinforced seams at stress points.",
          },
          {
            label: "Colour Fastness",
            value: "Grade 4+",
            detail: "ISO 105-C06 wash fastness standard. Minimum Grade 4 rating — no significant colour transfer or fading after 30 wash cycles.",
          },
          {
            label: "Embroidery Density",
            value: "Verified",
            detail: "Embroidery stitch density verified against approved design file. No puckering, distortion or thread gaps in finished embroidery.",
          },
          {
            label: "Size Tolerance",
            value: "± 1.5 cm",
            detail: "Chest, length, sleeve length and shoulder width measured against approved spec sheet for every size in the run.",
          },
          {
            label: "Pre-shipment Inspection",
            value: "100%",
            detail: "Every unit inspected before packing. Checks include zipper function, seam quality, logo placement and hardware attachment.",
          },
        ]}

        processSteps={[
          { step: "01", title: "Submit Specs", desc: "Share your style, fabric, hardware and logo details. We confirm specs and pricing within 24 hours." },
          { step: "02", title: "Sample Production", desc: "A physical sample jacket is produced and shipped for your approval. Fit, hardware and logo are verified before bulk begins." },
          { step: "03", title: "Bulk Production", desc: "Full bulk production with QC on stitching, hardware, print and logo at every stage." },
          { step: "04", title: "Delivery", desc: "Packed and shipped to your door or warehouse. DDP and FOB options available." },
        ]}

        faqs={[
          {
            q: "What's the difference between YKK and standard zippers?",
            a: "YKK is the world's leading zipper manufacturer, used by premium brands from Patagonia to Lululemon. YKK zippers are smoother, more durable and more consistent than generic alternatives. They are the industry standard for activewear and signal quality to customers who know what to look for. We use YKK hardware as standard on all our jackets.",
          },
          {
            q: "Can I get a custom zipper pull with my logo?",
            a: "Yes. Custom branded zipper pulls are available in metal or rubber. A branded zipper pull is a subtle but effective branding detail — it's visible every time the jacket is opened or closed. Minimum order for custom zipper pulls is typically 200 units due to tooling costs.",
          },
          {
            q: "What fabric weight should I choose for a warmup jacket?",
            a: "For a studio warmup jacket (worn briefly before and after class), 150–200gsm polyester fleece or a lightweight stretch woven fabric is ideal. For a jacket intended for outdoor use or colder climates, 250–300gsm fleece or a heavier french terry is more appropriate. We can provide fabric swatches to help you decide.",
          },
          {
            q: "Can I create a matching jacket and leggings set?",
            a: "Yes. A track jacket + leggings set in matching fabric and colour is a high-value commercial proposition. The key is using the same fabric type for both pieces to ensure colour consistency. Stretch woven (nylon/spandex) is the best choice for a coordinated jacket + leggings set.",
          },
          {
            q: "How do I specify the zipper colour?",
            a: "YKK zippers are available in hundreds of standard colours. We recommend specifying your zipper colour using a Pantone code or by selecting from our YKK colour card (available on request). Custom colours outside the standard range require a minimum order of 500 units.",
          },
          {
            q: "Is embroidery suitable for all jacket fabrics?",
            a: "Embroidery works on all jacket fabrics, but the backing and stabilisation method varies. For fleece, we use a cut-away backing to prevent the embroidery from sinking into the pile. For woven fabrics, a tear-away backing is used. We always test embroidery on the actual production fabric before bulk to ensure the result meets your expectations.",
          },
        ]}

        relatedProducts={[
          { label: "Winter Yoga Wear", href: "/products/winter", image: "/about-studio.jpg" },
          { label: "Relaxed Tops", href: "/products/relaxed-tops", image: "/yoga/relaxed-tops.png" },
          { label: "Matching Sets", href: "/products/matching-sets", image: "/yoga/matching-sets.png" },
        ]}
      />
      <Footer />
    </>
  );
}
