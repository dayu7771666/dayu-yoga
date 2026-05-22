"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const lines = document.querySelectorAll(".hero-line");
    lines.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.10_0.004_60)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/about-studio.jpg"
          alt="Minimalist yoga studio"
          fill
          className="object-cover object-center opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.004_60)] via-[oklch(0.10_0.004_60)]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="hero-line flex items-center gap-3 mb-6"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <span className="block w-8 h-px bg-white/60" />
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/70">
              One-Click Yoga Brand Studio
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-line font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-white mb-2"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            Crafting the Soul
          </h1>
          <h1
            className="hero-line font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-white mb-6"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            of Your Yoga Brand.
          </h1>

          {/* Sub */}
          <p
            className="hero-line font-[family-name:var(--font-montserrat)] text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-10"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            Premium customization services for designers and entrepreneurs — from bespoke logos to luxury packaging, we translate your vision into a brand that breathes.
          </p>

          {/* CTAs */}
          <div
            className="hero-line flex flex-col sm:flex-row gap-4"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="relative overflow-hidden inline-flex items-center justify-center px-10 py-3.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
            >
              <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">Start Customizing</span>
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="font-[family-name:var(--font-montserrat)] text-xs font-medium tracking-widest uppercase text-white border border-white/50 px-10 py-3.5 hover:bg-white/10 transition-colors duration-300"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero-line mt-16 pt-8 border-t border-white/20 grid grid-cols-3 gap-8 max-w-lg"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            {[
              { num: "200+", label: "Brands Served" },
              { num: "5+", label: "Years of Craft" },
              { num: "1-Click", label: "Full Service" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-white">
                  {s.num}
                </div>
                <div className="font-[family-name:var(--font-montserrat)] text-xs text-white/60 tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 hidden md:flex flex-col items-center gap-2">
        <span className="font-[family-name:var(--font-montserrat)] text-[10px] text-white/50 tracking-widest uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/70"
            style={{ height: "40%", animation: "scrollDown 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
