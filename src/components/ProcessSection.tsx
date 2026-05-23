"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Share Your Specs",
    desc: "Send us your design files, fabric preferences, print references, and product requirements. The more detail you provide, the faster we move.",
  },
  {
    num: "02",
    title: "Get a Quote",
    desc: "We respond within 24 hours with a transparent production quote — unit cost, MOQ, lead time, and material options. No hidden fees.",
  },
  {
    num: "03",
    title: "Sample Production",
    desc: "We produce a physical sample based on your exact specs. You review, approve, or request adjustments. Sample turnaround: 7–14 business days.",
  },
  {
    num: "04",
    title: "Sample Approval",
    desc: "Once you sign off on the sample, we lock in all production details — materials, colorways, labels, packaging — and move to bulk.",
  },
  {
    num: "05",
    title: "Bulk Delivery",
    desc: "Full production runs with strict QC at every stage. Your finished products are packed and shipped directly to your warehouse or fulfillment center.",
  },
];

export default function ProcessSection() {
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
    <section id="process" className="py-24 md:py-32 bg-[oklch(0.10_0.004_60)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={(el) => { refs.current[0] = el; }} className="reveal mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-white/30" />
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
              How It Works
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light text-white leading-tight">
              From your files<br />
              <span className="font-semibold">to your warehouse.</span>
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/50 max-w-xs leading-relaxed">
              A clear, five-step production process. You stay in control at every stage — from spec submission to final bulk delivery.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10 p-6 md:p-8 border border-white/10 group-hover:border-white/30 transition-colors duration-300 h-full flex flex-col">
                <div className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white/15 group-hover:text-white/25 transition-colors mb-4 leading-none">
                  {step.num}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/55 leading-relaxed flex-1">
                  {step.desc}
                </p>
                <div className="mt-6 w-8 h-px bg-[oklch(0.38_0.09_162)] group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={(el) => { refs.current[steps.length + 1] = el; }}
          className="reveal mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-white/10"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-white font-light italic">
            &ldquo;Ready to move from concept to production?&rdquo;
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative overflow-hidden inline-flex items-center justify-center px-10 py-3.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">Get a Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
}
