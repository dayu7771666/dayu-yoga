"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We respond to all inquiries within 24 hours, Monday through Saturday. For urgent requests, please note 'URGENT' in your message subject.",
  },
  {
    q: "Do I need to have a brief ready?",
    a: "Not at all. If you have a clear vision, great — share it. If you are still exploring, we can guide you through a discovery process. Many of our best projects started with just a feeling or a reference image.",
  },
  {
    q: "What happens after I submit the form?",
    a: "We review your inquiry and respond with a personalized message within 24 hours. If your project is a good fit, we will schedule a short discovery call or send a detailed questionnaire to understand your needs fully.",
  },
];

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Start a Project
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6">
            Let&apos;s build your<br />
            <span className="font-semibold italic">brand together.</span>
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60 max-w-lg leading-relaxed">
            Tell us about your vision. Whether you have a detailed brief or just a feeling, we are here to listen and guide you toward a brand that truly resonates.
          </p>
        </div>
      </section>

      {/* ── Contact Info Bar ── */}
      <section className="bg-[oklch(0.38_0.09_162)] py-5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {[
              { label: "Email", value: "hello@zenlumeyoga.com" },
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
                  What to expect<br />
                  <span className="font-semibold">from our process.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "You Reach Out", desc: "Send us your brief, vision, or just a few words about what you are building." },
                    { step: "02", title: "We Respond", desc: "Within 24 hours, you receive a personalized reply with next steps and a tailored proposal." },
                    { step: "03", title: "We Begin", desc: "Once aligned on scope and terms, we kick off your project with full focus and transparency." },
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
                    alt="Zenlume Yoga studio"
                    fill
                    className="object-cover img-bw"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.10_0.004_60)]/30" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-[family-name:var(--font-cormorant)] text-xl text-white italic">
                      &ldquo;Every great brand starts with a conversation.&rdquo;
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

            {/* Right: Form */}
            <div ref={(el) => { refs.current[3] = el; }} className="reveal">
              <div className="bg-[oklch(0.97_0.005_80)] p-8 md:p-10 sticky top-28">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[500px] text-center">
                    <div
                      className="font-[family-name:var(--font-cormorant)] text-7xl leading-none mb-6"
                      style={{ color: "oklch(0.38 0.09 162)", opacity: 0.2 }}
                    >
                      ✦
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[oklch(0.13_0.005_60)] mb-4">
                      Message received.
                    </h3>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 leading-relaxed max-w-xs mb-8">
                      Thank you for reaching out. We will review your inquiry and respond within 24 hours. Your brand journey starts now.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 hover:text-[oklch(0.38_0.09_162)] transition-colors underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="section-eyebrow">
                        <span className="eyebrow-text">Project Inquiry</span>
                      </div>
                      <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[oklch(0.13_0.005_60)]">
                        Tell us about your vision.
                      </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Designer"
                            className="w-full border border-gray-200 bg-white px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="hello@yourbrand.com"
                            className="w-full border border-gray-200 bg-white px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">
                          Brand Name (if any)
                        </label>
                        <input
                          type="text"
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                          placeholder="Your studio or brand name"
                          className="w-full border border-gray-200 bg-white px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">
                            Service Needed *
                          </label>
                          <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full border border-gray-200 bg-white px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors appearance-none"
                          >
                            <option value="">Select a service</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Premium Packaging">Premium Packaging</option>
                            <option value="Full Brand Identity">Full Brand Identity</option>
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full border border-gray-200 bg-white px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors appearance-none"
                          >
                            <option value="">Select a range</option>
                            <option value="Under $500">Under $500</option>
                            <option value="$500 – $1,500">$500 – $1,500</option>
                            <option value="$1,500 – $3,000">$1,500 – $3,000</option>
                            <option value="$3,000+">$3,000+</option>
                            <option value="Not sure">Not sure</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">
                          Ideal Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full border border-gray-200 bg-white px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors appearance-none"
                        >
                          <option value="">Select a timeline</option>
                          <option value="ASAP (Rush)">ASAP (Rush)</option>
                          <option value="Within 2 weeks">Within 2 weeks</option>
                          <option value="Within a month">Within a month</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 block mb-2">
                          Tell Us About Your Vision *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your brand concept, aesthetic preferences, inspiration, or attach reference links. The more you share, the better we can help."
                          className="w-full border border-gray-200 bg-white px-4 py-3 font-[family-name:var(--font-montserrat)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_162)] transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="relative overflow-hidden w-full inline-flex items-center justify-center px-10 py-3.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
                      >
                        <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="relative z-10">Send Inquiry</span>
                      </button>
                      <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 text-center leading-relaxed">
                        We reply within 24 hours. Your information is strictly confidential.{" "}
                        <Link href="/policy" className="text-[oklch(0.38_0.09_162)] hover:underline underline-offset-2">
                          View our policy.
                        </Link>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map / Location placeholder ── */}
      <section className="bg-[oklch(0.10_0.004_60)] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Email",
                value: "hello@zenlumeyoga.com",
                desc: "For project inquiries and general questions.",
              },
              {
                title: "Instagram",
                value: "@zenlumeyoga",
                desc: "Follow our work and reach us via DM.",
              },
              {
                title: "Working Hours",
                value: "Mon – Sat  9:00 — 18:00",
                desc: "We are available across most global time zones.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 p-8 hover:border-white/25 transition-colors duration-300">
                <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30 mb-3">
                  {item.title}
                </div>
                <div className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white mb-2">
                  {item.value}
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
