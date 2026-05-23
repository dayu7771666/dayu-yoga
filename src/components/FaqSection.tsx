"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "Do you design products for clients?",
    a: "No. We are a production studio, not a design agency. You bring your own creative direction — fabrics, prints, logo files, packaging specs. We manufacture it. If you are looking for someone to design your brand from scratch, we are not the right fit.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our standard MOQ is 50 units per style per colorway for apparel, and 100 units for packaging items. For large-scale orders, we offer tiered pricing. Contact us to discuss your specific requirements.",
  },
  {
    q: "How long does sample production take?",
    a: "Standard sample turnaround is 7–14 business days from the date we receive your confirmed specs and materials. Rush samples (5–7 days) are available at an additional cost depending on current capacity.",
  },
  {
    q: "What file formats do you accept for print and logo application?",
    a: "We accept AI, EPS, PDF (vector), and high-resolution PNG/TIFF files for print and embroidery. For packaging dielines, we work with AI or PDF files. We will provide templates upon request.",
  },
  {
    q: "Can I choose my own fabrics and materials?",
    a: "Absolutely. We maintain a library of 50+ fabric options across performance, sustainable, and premium categories. You can select from our swatch library or request a specific material — we will source it and confirm feasibility before production.",
  },
  {
    q: "Do you sign NDAs to protect my designs?",
    a: "Yes. We sign a mutual Non-Disclosure Agreement before any project begins. Your design files, brand concepts, and product specifications are strictly confidential and will never be shared, replicated, or used for any other client.",
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
              Production<br />
              <span className="font-semibold">questions answered.</span>
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed mb-8">
              Everything you need to know before placing your first order. Still have questions? We respond within 24 hours.
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
