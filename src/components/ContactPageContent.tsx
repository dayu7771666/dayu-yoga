"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";

const faqs = [
  {
    q: "Do I need to have my design files ready?",
    a: "Yes. We are a production studio, not a design agency. To receive an accurate quote, you need to have your design files (AI, EPS, or high-res PDF) and product specifications ready. If you are still in the concept stage, we recommend reaching out once your files are finalized.",
  },
  {
    q: "How quickly will you respond?",
    a: "We respond to all production inquiries within 24 hours, Monday through Saturday. For urgent requests, please note 'URGENT' in your message subject and we will prioritize your inquiry.",
  },
  {
    q: "What happens after I submit the form?",
    a: "We review your production brief and respond within 24 hours with a detailed quote including unit cost, MOQ confirmation, sample timeline, and bulk lead time. If we need additional information, we will reach out directly.",
  },
];

export default function ContactPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
      <section className="relative bg-[oklch(0.10_0.004_60)] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-visual.jpg"
            alt="Contact background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-white/40" />
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
              Start a Production Order
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6">
            Your specs.<br />
            <span className="font-semibold italic">Our production.</span>
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60 max-w-lg leading-relaxed">
            Share your product requirements and receive a detailed production quote within 24 hours. All inquiries are NDA-protected.
          </p>
        </div>
      </section>

      {/* ── Contact Info Bar ── */}
      <section className="bg-[oklch(0.38_0.09_162)] py-5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {[
              { label: "Email", value: "tidelineswim@swimsuitcustom.com" },
              { label: "Instagram", value: "@zenlumeyoga" },
              { label: "Response Time", value: "Within 24 hours" },
              { label: "Working Hours", value: "Mon – Sat  9:00 — 18:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-montserrat)] text-xs text-white/50 tracking-widest uppercase">
                  {item.label}
                </span>
                <span className="w-px h-3 bg-white/20" />
                <span className="font-[family-name:var(--font-montserrat)] text-xs text-white/80">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Form + Sidebar ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-20">

            {/* Left: Info + FAQ */}
            <div>
              <div ref={(el) => { refs.current[0] = el; }} className="reveal mb-16">
                <div className="section-eyebrow">
                  <span className="eyebrow-text">Before You Write</span>
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light leading-tight mb-6">
                  What happens<br />
                  <span className="font-semibold">after you reach out.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "Submit Your Brief", desc: "Share your product specs, design files, fabric preferences, and quantity requirements." },
                    { step: "02", title: "Receive a Quote", desc: "Within 24 hours, you receive a detailed production quote with unit cost, MOQ, and lead time." },
                    { step: "03", title: "Sample & Scale", desc: "We produce a physical sample for your approval, then move to bulk production once confirmed." },
                  ].map((s) => (
                    <div key={s.step} className="group">
                      <div className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[oklch(0.38_0.09_162)] opacity-20 mb-3 leading-none">
                        {s.step}
                      </div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)] mb-2">
                        {s.title}
                      </h3>
                      <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Studio image */}
              <div ref={(el) => { refs.current[1] = el; }} className="reveal relative mb-16">
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image
                    src="/about-studio.jpg"
                    alt="Zenlume production studio"
                    fill
                    className="object-cover img-bw"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.10_0.004_60)]/30" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-[family-name:var(--font-cormorant)] text-xl text-white italic">
                      &ldquo;Your vision. Our production. Zero compromise.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini FAQ */}
              <div ref={(el) => { refs.current[2] = el; }} className="reveal">
                <div className="section-eyebrow">
                  <span className="eyebrow-text">Quick Answers</span>
                </div>
                <div className="space-y-0">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-100">
                      <button
                        className="w-full flex items-center justify-between py-5 text-left group"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)] group-hover:text-[oklch(0.38_0.09_162)] transition-colors pr-6">
                          {faq.q}
                        </span>
                        <span
                          className="shrink-0 w-5 h-5 border border-gray-200 flex items-center justify-center transition-transform duration-300"
                          style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M4 1V7M1 4H7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{ maxHeight: openFaq === i ? "120px" : "0px" }}
                      >
                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed pb-5">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/#faq"
                    className="font-[family-name:var(--font-montserrat)] text-xs font-medium tracking-widest uppercase text-[oklch(0.38_0.09_162)] hover:underline underline-offset-4"
                  >
                    View All FAQs →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Unified Form */}
            <div ref={(el) => { refs.current[3] = el; }} className="reveal">
              <div className="bg-[oklch(0.97_0.005_80)] p-8 md:p-10 sticky top-28">
                <div className="mb-8">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[oklch(0.13_0.005_60)] mb-2">
                    Tell us what you need produced.
                  </h2>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400">
                    All inquiries are NDA-protected.{" "}
                    <Link href="/policy" className="text-[oklch(0.38_0.09_162)] hover:underline underline-offset-2">
                      View our policy.
                    </Link>
                  </p>
                </div>
                <InquiryForm theme="light" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom contact info ── */}
      <section className="py-16 bg-[oklch(0.97_0.005_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Email", value: "tidelineswim@swimsuitcustom.com", sub: "For production inquiries and general questions." },
              { title: "Instagram", value: "@zenlumeyoga", sub: "Follow our work and reach us via DM." },
              { title: "Working Hours", value: "Mon – Sat  9:00 — 18:00", sub: "We are available across most global time zones." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[oklch(0.38_0.09_162)] pl-6">
                <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 mb-2">{item.title}</div>
                <div className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)] mb-1">{item.value}</div>
                <div className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 leading-relaxed">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
