const points = [
  "Choose Your Fabric",
  "Custom Prints & Dye",
  "Your Logo. Your Packaging.",
  "MOQ from 50 Units",
  "Sample in 7–14 Days",
  "Bulk Production Ready",
  "Factory-Direct Pricing",
  "NDA Protected",
  "Full Creative Control",
  "Designers & Brand Founders",
];

export default function TrustBar() {
  const doubled = [...points, ...points];
  return (
    <div className="py-4 overflow-hidden bg-[oklch(0.38_0.09_162)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((p, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/80 px-8 flex items-center gap-3"
          >
            <span className="text-white/40">✦</span>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
