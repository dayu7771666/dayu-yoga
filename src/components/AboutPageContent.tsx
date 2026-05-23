"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    num: "01",
    title: "You Keep Creative Control",
    desc: "We never redesign your vision. You choose every detail — fabric, print, cut, color, logo placement, packaging finish. We execute it exactly as specified.",
  },
  {
    num: "02",
    title: "Factory-Direct, No Middlemen",
    desc: "Rooted in China's manufacturing heartland, we offer direct access to production infrastructure. Transparent pricing, no agency markup, no outsourcing.",
  },
  {
    num: "03",
    title: "Sample Before Scale",
    desc: "Every production run begins with a physical sample. You approve before we produce a single unit of bulk. Quality is verified, not assumed.",
  },
  {
    num: "04",
    title: "NDA-Protected Always",
    desc: "Your design files, product specs, and brand concepts are strictly confidential. We sign a mutual NDA before any project begins — no exceptions.",
  },
];

const milestones = [
  { year: "2019", event: "Zenlume founded as a production studio embedded in China's yoga product supply chain." },
  { year: "2021", event: "Expanded fabric library to 50+ options. First bulk order for an international yoga brand fulfilled." },
  { year: "2023", event: "Launched direct-order system for designers and brand principals. Sample-to-bulk in under 3 weeks." },
  { year: "2025", event: "200+ brands fulfilled across 15 countries. Every order still managed with personal attention and full QC." },
];

export default function AboutPageContent() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[oklch(0.10_0.004_60)]">
        <div className="absolute inset-0">
          <Image
            src="/about-studio.jpg"
            alt="Zenlume production studio"
            fill
            className="object-cover object-center opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.004_60)] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-36">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-white/40" />
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
              Our Story
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05]">
            A production studio<br />
            <span className="font-semibold italic">built for brand founders.</span>
          </h1>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div ref={(el) => { refs.current[0] = el; }} className="reveal">
              <div className="section-eyebrow">
                <span className="eyebrow-text">Who We Are</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light leading-tight mb-8">
                We do not design.<br />
                <span className="font-semibold">We produce.</span>
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed mb-5">
                Zenlume Yoga is a manufacturing studio deeply embedded in China&apos;s yoga product supply chain. We are not a design agency. We are the production partner for designers and brand principals who already have a clear creative vision and need a reliable, factory-direct manufacturer to bring it to life.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed mb-5">
                You select the fabrics from our library of 50+ options. You define the print technique, the colorway, the cut. You finalize your logo application method and packaging specifications. We handle everything from sample production to bulk shipment — with full quality control at every stage.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed">
                Our clients are independent designers launching their own lines and brand founders scaling their product range. We work exclusively with those who come with a vision — not those looking for one.
              </p>
            </div>

            <div ref={(el) => { refs.current[1] = el; }} className="reveal">
              {/* Pull quote */}
              <div className="border-l-2 border-[oklch(0.38_0.09_162)] pl-8 mb-12">
                <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light italic text-[oklch(0.13_0.005_60)] leading-relaxed mb-4">
                  &ldquo;We do not create your brand. We build it — exactly as you imagined, at the scale you need.&rdquo;
                </p>
                <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400">
                  — Zenlume Studio
                </span>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                {[
                  { num: "200+", label: "Brands Fulfilled" },
                  { num: "50+", label: "Fabric Options" },
                  { num: "MOQ 50", label: "Minimum Order" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[oklch(0.13_0.005_60)] mb-1">
                      {s.num}
                    </div>
                    <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 tracking-wider uppercase leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Studio Image Full Width ── */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/service-packaging.jpg"
          alt="Zenlume production facility"
          fill
          className="object-cover object-center img-bw"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[oklch(0.10_0.004_60)]/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl text-white font-light italic text-center px-4">
            &ldquo;Your vision. Our production. Zero compromise.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 md:py-32 bg-[oklch(0.97_0.005_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={(el) => { refs.current[2] = el; }} className="reveal mb-16 md:mb-20">
            <div className="section-eyebrow">
              <span className="eyebrow-text">Our Principles</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light leading-tight">
                How we work,<br />
                <span className="font-semibold">on every order.</span>
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 max-w-xs leading-relaxed">
                These are not aspirations. They are the standards we hold ourselves to on every single production order, without exception.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((v, i) => (
              <div
                key={v.num}
                ref={(el) => { refs.current[3 + i] = el; }}
                className="reveal group p-8 border border-gray-200 hover:border-[oklch(0.38_0.09_162)] hover:bg-white transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-[family-name:var(--font-cormorant)] text-5xl font-light leading-none mb-5 text-[oklch(0.38_0.09_162)] opacity-20 group-hover:opacity-40 transition-opacity">
                  {v.num}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)] mb-3">
                  {v.title}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
                <div className="mt-6 w-8 h-px bg-[oklch(0.38_0.09_162)] group-hover:w-16 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline / Milestones ── */}
      <section className="py-24 md:py-32 bg-[oklch(0.10_0.004_60)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={(el) => { refs.current[7] = el; }} className="reveal mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-white/30" />
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
                Our Journey
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light text-white leading-tight">
              How we built<br />
              <span className="font-semibold">the studio.</span>
            </h2>
          </div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                ref={(el) => { refs.current[8 + i] = el; }}
                className="reveal group grid grid-cols-[120px_1fr] gap-8 py-8 border-b border-white/10 hover:border-white/30 transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[oklch(0.38_0.09_162)] opacity-60 group-hover:opacity-100 transition-opacity">
                  {m.year}
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60 group-hover:text-white/80 leading-relaxed transition-colors self-center">
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={(el) => { refs.current[12] = el; }} className="reveal relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/service-logo.jpg"
                  alt="Zenlume production samples"
                  fill
                  className="object-cover img-bw"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[oklch(0.38_0.09_162)] p-6 max-w-[220px]">
                <div className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-white mb-1">200+</div>
                <div className="font-[family-name:var(--font-montserrat)] text-xs text-white/70 tracking-widest uppercase">Brands fulfilled</div>
              </div>
            </div>
            <div ref={(el) => { refs.current[13] = el; }} className="reveal">
              <div className="section-eyebrow">
                <span className="eyebrow-text">Work With Us</span>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light leading-tight mb-6">
                Ready to move from<br />
                <span className="font-semibold">concept to product?</span>
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed mb-8">
                If you have a design vision and need a production partner who will execute it exactly — without redesigning it, without compromising it — we are ready to start. Share your specs and receive a quote within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center justify-center px-10 py-3.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
                >
                  <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">Request a Quote</span>
                </Link>
                <Link
                  href="/policy"
                  className="font-[family-name:var(--font-montserrat)] text-xs font-medium tracking-widest uppercase text-[oklch(0.13_0.005_60)] underline underline-offset-4 hover:text-[oklch(0.38_0.09_162)] transition-colors inline-flex items-center"
                >
                  View Production Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
