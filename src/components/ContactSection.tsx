"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    brand: "",
    product: "",
    quantity: "",
    message: "",
  });
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[oklch(0.10_0.004_60)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
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
              Share your product requirements and we will respond within 24 hours with a production quote. All inquiries are protected by NDA.
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
                  <div className="font-[family-name:var(--font-montserrat)] text-xs text-white/30 mb-1 tracking-widest uppercase">{item.label}</div>
                  <div className="font-[family-name:var(--font-montserrat)] text-sm text-white/70">{item.value}</div>
                </div>
              ))}
            </div>
            {/* Studio image */}
            <div className="relative aspect-[16/9] overflow-hidden hidden lg:block">
              <Image
                src="/hero-visual.jpg"
                alt="Zenlume production studio"
                fill
                className="object-cover img-bw"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Right: form */}
          <div ref={(el) => { refs.current[1] = el; }} className="reveal bg-white p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[oklch(0.38_0.09_162)] mb-6 opacity-30">&ldquo;</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[oklch(0.13_0.005_60)] mb-4">
                  Inquiry Received.
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed max-w-xs">
                  We will review your production requirements and respond within 24 hours with a detailed quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Your Name *", placeholder: "Jane Designer", required: true, type: "text" },
                    { name: "contact", label: "Email / Instagram *", placeholder: "hello@yourbrand.com", required: true, type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full border border-gray-200 px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors bg-transparent"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">Brand Name (if any)</label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="Your brand name"
                      className="w-full border border-gray-200 px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">Product Type *</label>
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors bg-transparent appearance-none"
                    >
                      <option value="">Select product type</option>
                      {["Yoga Apparel", "Custom Packaging", "Logo Application", "Yoga Accessories", "Full Product Line", "Other"].map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">Estimated Quantity *</label>
                  <select
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors bg-transparent appearance-none"
                  >
                    <option value="">Select quantity range</option>
                    {["50–200 units", "200–500 units", "500–1,000 units", "1,000–5,000 units", "5,000+ units"].map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">Production Brief *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your product specs: fabric preferences, print technique, logo application method, packaging material, color references, or any specific requirements..."
                    className="w-full border border-gray-200 px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors bg-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="relative overflow-hidden w-full inline-flex items-center justify-center px-10 py-3.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
                >
                  <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">Request a Quote</span>
                </button>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 text-center">
                  We reply within 24 hours. All inquiries are NDA-protected.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
