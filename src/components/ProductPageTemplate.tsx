"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CustomOption {
  label: string;
  choices: string[];
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
}: ProductPageProps) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

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
          {/* Breadcrumb */}
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
          {/* Quick specs */}
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

      {/* ── Customization Options ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.005_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => { refs.current[0] = el; }}
            className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left: image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={heroImage}
                alt={`${title} ${titleBold}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right: options */}
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

      {/* ── Production Process ── */}
      <section className="py-20 bg-[oklch(0.10_0.004_60)]">
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
