"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "As a designer launching my own yoga line, I needed a partner who understood both aesthetics and production. Zenlume delivered a logo and packaging system that exceeded every expectation. The quality is extraordinary.",
    author: "Sarah M.",
    role: "Independent Yoga Designer",
    tag: "Logo · Packaging",
  },
  {
    quote: "I came with just a concept and left with a complete brand identity. The process was seamless — they listened, refined, and delivered exactly what I envisioned. My studio's visual presence has never been stronger.",
    author: "James T.",
    role: "Yoga Studio Founder",
    tag: "Full Brand Identity",
  },
  {
    quote: "What impressed me most was the attention to detail and the speed of communication. The packaging design elevated my product line instantly. Every client who receives it comments on how premium it feels.",
    author: "Elena R.",
    role: "Wellness Entrepreneur",
    tag: "Premium Packaging",
  },
];

export default function TestimonialsSection() {
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
    <section className="py-24 md:py-32 bg-[oklch(0.97_0.005_80)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={(el) => { refs.current[0] = el; }} className="reveal mb-16">
          <div className="section-eyebrow">
            <span className="eyebrow-text">Testimonials</span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light leading-tight">
            Their brands,<br />
            <span className="font-semibold">born here.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal bg-white p-8 md:p-10 flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="font-[family-name:var(--font-cormorant)] text-7xl leading-none mb-4"
                style={{ color: "oklch(0.38 0.09 162)", opacity: 0.15 }}
              >
                &ldquo;
              </div>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed flex-1 mb-8">
                {t.quote}
              </p>
              <div className="border-t border-gray-100 pt-5 flex items-end justify-between">
                <div>
                  <div className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)]">
                    {t.author}
                  </div>
                  <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 mt-1">{t.role}</div>
                </div>
                <span className="font-[family-name:var(--font-montserrat)] text-xs px-3 py-1 bg-[oklch(0.97_0.005_80)] text-gray-400 border border-gray-200">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
