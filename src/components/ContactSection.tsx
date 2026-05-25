"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";

export default function ContactSection() {
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
    <section id="contact" className="py-24 md:py-32 bg-[oklch(0.10_0.004_60)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <div ref={(el) => { refs.current[0] = el; }} className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-white/30" />
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
                Start a Production Order
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              Your specs,<br />
              <span className="font-semibold italic">our production.</span>
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60 leading-relaxed mb-10">
              Share your product requirements and we will respond within 24 hours
              with a production quote. All inquiries are protected by NDA.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              {[
                { label: "Email", value: "hello@zenlumeyoga.com" },
                { label: "Instagram", value: "@zenlumeyoga" },
                { label: "Working Hours", value: "Mon – Sat  9:00 — 18:00" },
                { label: "Response Time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-[family-name:var(--font-montserrat)] text-xs text-white/30 mb-1 tracking-widest uppercase">
                    {item.label}
                  </div>
                  <div className="font-[family-name:var(--font-montserrat)] text-sm text-white/70">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Studio image */}
            <div className="relative aspect-[16/9] overflow-hidden hidden lg:block">
              <Image
                src="/hero-visual.jpg"
                alt="Zenlume production studio"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Right — unified form */}
          <div ref={(el) => { refs.current[1] = el; }} className="reveal bg-white p-8 md:p-10">
            <InquiryForm theme="light" heading="Production Inquiry" />
          </div>

        </div>
      </div>
    </section>
  );
}
