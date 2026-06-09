"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CustomOption {
  label: string;
  choices: string[];
}

export interface FabricDetail {
  name: string;
  stretch: number;       // 1-5
  breathability: number; // 1-5
  feel: string;
  bestFor: string;
  brandTier: string;
  priceRange: "Low" | "Mid" | "High";
  note: string;
}

export interface TechniqueDetail {
  name: string;
  colorQuality: string;
  durability: number;    // 1-5
  bestFor: string;
  fabricLimit: string;
  cost: "Low" | "Mid" | "High";
  note: string;
}

export interface StyleGuideItem {
  name: string;
  visual: string;
  functional: string;
  bestFor: string;
  tip?: string;
}

export interface QualityStandard {
  label: string;
  value: string;
  detail: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  titleBold: string;
  subtitle: string;
  heroImage: string;
  backHref: string;
  backLabel: string;
  moq: string;
  leadTime: string;
  technique: string;
  customOptions: CustomOption[];
  processSteps: { step: string; title: string; desc: string }[];
  relatedProducts: { label: string; href: string; image: string }[];
  // New deep-content props
  fabricDetails?: FabricDetail[];
  techniqueDetails?: TechniqueDetail[];
  styleGuide?: { title: string; subtitle: string; items: StyleGuideItem[] };
  qualityStandards?: QualityStandard[];
  faqs?: FaqItem[];
}

function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`block w-2 h-2 rounded-full ${i < value ? "bg-[oklch(0.38_0.09_162)]" : "bg-gray-200"}`}
        />
      ))}
    </div>
  );
}

function PriceBadge({ tier }: { tier: "Low" | "Mid" | "High" }) {
  const map = {
    Low: { label: "Budget-friendly", cls: "bg-gray-100 text-gray-500" },
    Mid: { label: "Mid-range", cls: "bg-amber-50 text-amber-700" },
    High: { label: "Premium", cls: "bg-[oklch(0.95_0.03_162)] text-[oklch(0.38_0.09_162)]" },
  };
  const { label, cls } = map[tier];
  return (
    <span className={`inline-block font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest uppercase px-2 py-0.5 ${cls}`}>
      {label}
    </span>
  );
}

export default function ProductPageTemplate({
  eyebrow,
  title,
  titleBold,
  subtitle,
  heroImage,
  backHref,
  backLabel,
  moq,
  leadTime,
  technique,
  customOptions,
  processSteps,
  relatedProducts,
  fabricDetails,
  techniqueDetails,
  styleGuide,
  qualityStandards,
  faqs,
}: ProductPageProps) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] min-h-[60svh] flex items-end overflow-hidden bg-[oklch(0.10_0.004_60)]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover object-center opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.004_60)] via-[oklch(0.10_0.004_60)]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-36 w-full">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/collections/yoga" className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-white/60 transition-colors">
              Yoga Apparel
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <Link href={backHref} className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-white/60 transition-colors">
              {backLabel}
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.15em] uppercase text-white/50">
              {title} {titleBold}
            </span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-white/40" />
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-white leading-[1.05]">
            {title}<br />
            <span className="font-semibold italic">{titleBold}</span>
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/55 max-w-lg leading-relaxed mt-6">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { label: "MOQ", value: moq },
              { label: "Lead Time", value: leadTime },
              { label: "Technique", value: technique },
            ].map((s) => (
              <div key={s.label} className="border-l border-white/20 pl-4">
                <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">{s.label}</div>
                <div className="font-[family-name:var(--font-cormorant)] text-xl text-white">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Module A: Fabric Deep Dive ── */}
      {fabricDetails && fabricDetails.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={(el) => { refs.current[50] = el; }}
              className="reveal mb-12"
            >
              <div className="section-eyebrow mb-4">
                <span className="eyebrow-text">Fabric Guide</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light leading-tight mb-4">
                Choose the right<br />
                <span className="font-semibold">fabric for your brand.</span>
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 max-w-2xl leading-relaxed">
                The fabric you choose defines how your product feels, performs, and positions in the market. Use this guide to match your brand&apos;s identity and your customers&apos; expectations.
              </p>
            </div>

            <div className="space-y-0 border border-gray-100">
              {/* Table header */}
              <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1.5fr_1.5fr_1fr] gap-4 px-6 py-3 bg-[oklch(0.10_0.004_60)]">
                {["Fabric", "Stretch", "Breathability", "Best For", "Brand Tier", "Price"].map((h) => (
                  <div key={h} className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-white/40">{h}</div>
                ))}
              </div>

              {fabricDetails.map((f, i) => (
                <div
                  key={f.name}
                  ref={(el) => { refs.current[51 + i] = el; }}
                  className="reveal border-t border-gray-100 first:border-t-0"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Desktop row */}
                  <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1.5fr_1.5fr_1fr] gap-4 px-6 py-5 hover:bg-gray-50 transition-colors items-start">
                    <div>
                      <div className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)] mb-1">{f.name}</div>
                      <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-500 leading-relaxed">{f.feel}</div>
                    </div>
                    <div className="pt-1"><StarRating value={f.stretch} /></div>
                    <div className="pt-1"><StarRating value={f.breathability} /></div>
                    <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 leading-relaxed">{f.bestFor}</div>
                    <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 leading-relaxed">{f.brandTier}</div>
                    <div className="pt-0.5"><PriceBadge tier={f.priceRange} /></div>
                  </div>
                  {/* Mobile card */}
                  <div className="md:hidden px-5 py-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)]">{f.name}</div>
                      <PriceBadge tier={f.priceRange} />
                    </div>
                    <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-500 mb-3">{f.feel}</div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest uppercase text-gray-400 mb-1">Stretch</div>
                        <StarRating value={f.stretch} />
                      </div>
                      <div>
                        <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest uppercase text-gray-400 mb-1">Breathability</div>
                        <StarRating value={f.breathability} />
                      </div>
                    </div>
                    <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600">{f.bestFor}</div>
                  </div>
                  {/* Note row */}
                  <div className="px-6 pb-5 md:pt-0 pt-0">
                    <div className="bg-[oklch(0.97_0.005_80)] border-l-2 border-[oklch(0.38_0.09_162)] px-4 py-3">
                      <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 leading-relaxed italic">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Module B: Style Guide ── */}
      {styleGuide && styleGuide.items.length > 0 && (
        <section className="py-20 md:py-28 bg-[oklch(0.97_0.005_80)]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={(el) => { refs.current[60] = el; }}
              className="reveal mb-12"
            >
              <div className="section-eyebrow mb-4">
                <span className="eyebrow-text">Style Guide</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light leading-tight mb-4">
                {styleGuide.title}<br />
                <span className="font-semibold">{styleGuide.subtitle}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {styleGuide.items.map((item, i) => (
                <div
                  key={item.name}
                  ref={(el) => { refs.current[61 + i] = el; }}
                  className="reveal bg-white p-7"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-6 h-px bg-[oklch(0.38_0.09_162)] mb-5" />
                  <div className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)] mb-4">{item.name}</div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-[oklch(0.38_0.09_162)] mb-1">Visual Effect</div>
                      <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 leading-relaxed">{item.visual}</div>
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-[oklch(0.38_0.09_162)] mb-1">Function</div>
                      <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 leading-relaxed">{item.functional}</div>
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-[oklch(0.38_0.09_162)] mb-1">Best For</div>
                      <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 leading-relaxed">{item.bestFor}</div>
                    </div>
                  </div>
                  {item.tip && (
                    <div className="border-t border-gray-100 pt-4">
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">Pro Tip</div>
                      <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-500 leading-relaxed italic">{item.tip}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Module C: Print Technique Comparison ── */}
      {techniqueDetails && techniqueDetails.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={(el) => { refs.current[70] = el; }}
              className="reveal mb-12"
            >
              <div className="section-eyebrow mb-4">
                <span className="eyebrow-text">Print & Application</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light leading-tight mb-4">
                Which technique<br />
                <span className="font-semibold">fits your design?</span>
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 max-w-2xl leading-relaxed">
                The wrong print technique can ruin a great design — or add unnecessary cost. Here&apos;s a clear breakdown to help you decide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techniqueDetails.map((t, i) => (
                <div
                  key={t.name}
                  ref={(el) => { refs.current[71 + i] = el; }}
                  className="reveal border border-gray-100 p-7 hover:border-[oklch(0.38_0.09_162)] transition-colors"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)]">{t.name}</div>
                    <PriceBadge tier={t.cost} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">Wash Durability</div>
                      <StarRating value={t.durability} />
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">Color Quality</div>
                      <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600">{t.colorQuality}</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest uppercase text-[oklch(0.38_0.09_162)]">Best For: </span>
                      <span className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600">{t.bestFor}</span>
                    </div>
                    {t.fabricLimit && (
                      <div>
                        <span className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest uppercase text-[oklch(0.38_0.09_162)]">Fabric Compatibility: </span>
                        <span className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600">{t.fabricLimit}</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-[oklch(0.97_0.005_80)] px-4 py-3">
                    <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 leading-relaxed italic">{t.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Customization Options ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.005_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => { refs.current[0] = el; }}
            className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={heroImage}
                alt={`${title} ${titleBold}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="section-eyebrow mb-4">
                <span className="eyebrow-text">Customization</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light leading-tight mb-10">
                You choose<br />
                <span className="font-semibold">every detail.</span>
              </h2>
              <div className="space-y-8">
                {customOptions.map((opt, i) => (
                  <div
                    key={opt.label}
                    ref={(el) => { refs.current[1 + i] = el; }}
                    className="reveal border-t border-gray-200 pt-6"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-[oklch(0.38_0.09_162)] mb-3">
                      {opt.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {opt.choices.map((c) => (
                        <span
                          key={c}
                          className="font-[family-name:var(--font-montserrat)] text-xs text-gray-600 border border-gray-200 px-3 py-1.5 hover:border-[oklch(0.38_0.09_162)] hover:text-[oklch(0.38_0.09_162)] transition-colors cursor-default"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center justify-center px-10 py-4 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
                >
                  <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">Request a Quote</span>
                </Link>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 mt-4">
                  Quote within 24 hours · NDA available · MOQ {moq}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module D: Quality Standards ── */}
      {qualityStandards && qualityStandards.length > 0 && (
        <section className="py-20 bg-[oklch(0.10_0.004_60)]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={(el) => { refs.current[80] = el; }}
              className="reveal mb-12 text-center"
            >
              <div className="section-eyebrow justify-center mb-4">
                <span className="eyebrow-text text-white/40">Quality Standards</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light text-white">
                Built to last,<br />
                <span className="font-semibold italic">tested to prove it.</span>
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/45 max-w-xl mx-auto mt-4 leading-relaxed">
                Every batch goes through a rigorous multi-stage quality control process before it leaves our facility.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {qualityStandards.map((qs, i) => (
                <div
                  key={qs.label}
                  ref={(el) => { refs.current[81 + i] = el; }}
                  className="reveal bg-[oklch(0.10_0.004_60)] p-8 hover:bg-[oklch(0.14_0.005_60)] transition-colors"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[oklch(0.38_0.09_162)] mb-2">{qs.value}</div>
                  <div className="w-6 h-px bg-white/20 mb-3" />
                  <div className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white mb-2">{qs.label}</div>
                  <div className="font-[family-name:var(--font-montserrat)] text-xs text-white/40 leading-relaxed">{qs.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Production Process ── */}
      <section className="py-20 bg-[oklch(0.10_0.004_60)] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => { refs.current[10] = el; }}
            className="reveal mb-14 text-center"
          >
            <div className="section-eyebrow justify-center mb-4">
              <span className="eyebrow-text text-white/40">How It Works</span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light text-white">
              From spec to<br />
              <span className="font-semibold italic">bulk delivery.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {processSteps.map((s, i) => (
              <div
                key={s.step}
                ref={(el) => { refs.current[11 + i] = el; }}
                className="reveal bg-[oklch(0.10_0.004_60)] p-8 hover:bg-[oklch(0.14_0.005_60)] transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white/10 mb-4">{s.step}</div>
                <div className="w-6 h-px bg-[oklch(0.38_0.09_162)] mb-4" />
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-white/45 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Module E: FAQ ── */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={(el) => { refs.current[90] = el; }}
              className="reveal mb-12"
            >
              <div className="section-eyebrow mb-4">
                <span className="eyebrow-text">FAQ</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light leading-tight">
                Questions before<br />
                <span className="font-semibold">you get started?</span>
              </h2>
            </div>
            <div className="max-w-3xl">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  ref={(el) => { refs.current[91 + i] = el; }}
                  className="reveal border-t border-gray-100"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <button
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)] group-hover:text-[oklch(0.38_0.09_162)] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span className={`flex-shrink-0 w-5 h-5 border border-gray-300 flex items-center justify-center text-gray-400 transition-transform mt-0.5 ${openFaq === i ? "rotate-45" : ""}`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-6 -mt-2">
                      <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-100 pt-8">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500">
                  Still have questions?{" "}
                  <Link href="/contact" className="text-[oklch(0.38_0.09_162)] hover:underline underline-offset-2">
                    Send us a message
                  </Link>{" "}
                  — we respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Products ── */}
      <section className="py-20 bg-[oklch(0.97_0.005_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => { refs.current[16] = el; }}
            className="reveal mb-10"
          >
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light">
              You may also<br />
              <span className="font-semibold">need these.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200">
            {relatedProducts.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                ref={(el) => { refs.current[17 + i] = el as unknown as HTMLDivElement; }}
                className="reveal group bg-white overflow-hidden block"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.label}
                    fill
                    className="object-cover img-bw group-hover:filter-none transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)] group-hover:text-[oklch(0.38_0.09_162)] transition-colors">
                    {p.label}
                  </span>
                  <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest text-[oklch(0.38_0.09_162)]">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
