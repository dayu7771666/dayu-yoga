"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "What types of yoga brands do you work with?",
    a: "We work with independent yoga designers, studio founders, wellness entrepreneurs, and established brands looking to refresh their identity. Whether you are launching your first studio or scaling an existing brand, we tailor our services to your stage.",
  },
  {
    q: "Is there a minimum order for packaging?",
    a: "We offer flexible minimums designed to support early-stage brands. Our packaging services start from small runs, making professional branding accessible without requiring large upfront commitments.",
  },
  {
    q: "How long does the full brand identity process take?",
    a: "A typical logo design project takes 7–14 business days. Full brand identity packages range from 3–6 weeks depending on scope. We provide a clear timeline at the start of every project.",
  },
  {
    q: "Do you sign NDAs to protect my designs?",
    a: "Absolutely. We sign a Non-Disclosure Agreement before any project begins. Your concepts, designs, and brand strategy are strictly confidential and will never be shared or reused.",
  },
  {
    q: "What files will I receive at the end of the project?",
    a: "You receive all source files including vector formats (AI, EPS, SVG), print-ready PDFs, web-optimized PNGs, and a brand style guide. Everything you need to use your brand across any medium.",
  },
  {
    q: "Can I request revisions during the design process?",
    a: "Yes. Our process includes structured revision rounds to ensure the final result matches your vision. We iterate collaboratively until you are fully satisfied with every detail.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left */}
          <div ref={(el) => { refs.current[0] = el; }} className="reveal">
            <div className="section-eyebrow">
              <span className="eyebrow-text">FAQ</span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light leading-tight mb-6">
              Questions<br />
              <span className="font-semibold">answered.</span>
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed mb-8">
              Everything you need to know before starting your project. Still have questions? Reach out directly.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase border border-[oklch(0.38_0.09_162)] text-[oklch(0.38_0.09_162)] px-8 py-3 hover:bg-[oklch(0.38_0.09_162)] hover:text-white transition-colors duration-300"
            >
              Ask a Question
            </button>
          </div>

          {/* Right: accordion */}
          <div ref={(el) => { refs.current[1] = el; }} className="reveal">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between py-6 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)] group-hover:text-[oklch(0.38_0.09_162)] transition-colors pr-8">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 border border-gray-200 flex items-center justify-center transition-all duration-300"
                    style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "200px" : "0px" }}
                >
                  <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
