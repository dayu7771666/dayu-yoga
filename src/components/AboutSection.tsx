"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const advantages = [
  {
    title: "Minimalist Craft",
    desc: "Every design decision is intentional. We strip away the unnecessary to reveal the essential — creating marks that endure.",
  },
  {
    title: "Designer-First",
    desc: "Built for creatives who understand quality. We speak your language and deliver at the standard you expect.",
  },
  {
    title: "Founder-Friendly",
    desc: "Launching your first studio? We guide you through every step, making professional branding accessible from day one.",
  },
  {
    title: "End-to-End Service",
    desc: "From the first sketch to the final packaged product, everything is handled in-house with full transparency.",
  },
];

export default function AboutSection() {
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
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image */}
          <div
            ref={(el) => { refs.current[0] = el; }}
            className="reveal relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/service-packaging.jpg"
                alt="Zenlume Yoga premium packaging"
                fill
                className="object-cover img-bw"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-6 -right-6 bg-[oklch(0.10_0.004_60)] p-6 max-w-[260px]">
              <p className="font-[family-name:var(--font-cormorant)] text-base italic text-white/80 leading-relaxed mb-3">
                &ldquo;Great design is not a luxury — it is the language through which your brand speaks.&rdquo;
              </p>
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30">
                Zenlume Studio
              </span>
            </div>
          </div>

          {/* Text */}
          <div ref={(el) => { refs.current[1] = el; }} className="reveal">
            <div className="section-eyebrow">
              <span className="eyebrow-text">About Us</span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light leading-tight mb-8">
              A studio built for<br />
              <span className="font-semibold">creators & founders.</span>
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed mb-6">
              Zenlume Yoga was founded on a simple belief: every yoga brand deserves a visual identity as intentional as the practice itself. We work exclusively with designers and entrepreneurs who understand that brand is not just aesthetics — it is trust, story, and connection.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed mb-10">
              Our one-click customization process removes friction so you can focus on what matters most — your practice and your people. We handle everything from the first concept to the final packaged product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="relative overflow-hidden inline-flex items-center justify-center px-10 py-3.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
              >
                <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10">Start Your Project</span>
              </button>
              <button
                onClick={() => document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" })}
                className="font-[family-name:var(--font-montserrat)] text-xs font-medium tracking-widest uppercase text-[oklch(0.13_0.005_60)] underline underline-offset-4 hover:text-[oklch(0.38_0.09_162)] transition-colors"
              >
                View Our Process
              </button>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div ref={(el) => { refs.current[2] = el; }} className="reveal">
          <div className="border-t border-gray-200 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                ref={(el) => { refs.current[3 + i] = el; }}
                className="reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="deco-number mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)] mb-3">
                  {adv.title}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
