const points = [
  "No Minimum Order",
  "Reply Within 24 Hours",
  "NDA Protected",
  "Full-Service Studio",
  "Sample Approval First",
  "Logo · Packaging · Identity",
  "Designers & Founders",
  "Premium Materials",
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
