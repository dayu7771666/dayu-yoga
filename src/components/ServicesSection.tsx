"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: "01",
    subtitle: "Brand Mark",
    title: "Logo Design",
    description:
      "Minimalist mark-making that captures the essence of your yoga practice. Each logo is a distillation of your brand's philosophy into a single, timeless symbol — delivered with full vector files and a style guide.",
    image: "/service-logo.jpg",
    features: ["Brand Mark", "Vector Files", "Color Palette", "Style Guide"],
  },
  {
    id: "02",
    subtitle: "Packaging",
    title: "Premium Packaging",
    description:
      "Eco-conscious bags, boxes, and wrapping that speak before a word is said. Sustainable materials meet refined aesthetics for an unboxing experience worth remembering.",
    image: "/service-packaging.jpg",
    features: ["Paper Bags", "Gift Boxes", "Eco Materials", "Custom Print"],
  },
  {
    id: "03",
    subtitle: "Full System",
    title: "Full Brand Identity",
    description:
      "A cohesive visual system for the modern yoga studio. Typography, color palette, stationery, and digital assets — every touchpoint aligned with your vision and ready to launch.",
    image: "/hero-visual.jpg",
    features: ["Typography", "Color System", "Stationery", "Digital Assets"],
  },
];

function ServiceCard({ service, delay }: { service: (typeof services)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => ref.current?.classList.add("visible"), delay);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="reveal group flex flex-col border border-gray-200 overflow-hidden hover:border-transparent transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover img-bw group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-7 group-hover:bg-[oklch(0.38_0.09_162)] transition-colors duration-500">
        <div className="flex items-start justify-between mb-4">
          <span className="deco-number group-hover:opacity-30 transition-opacity">{service.id}</span>
          <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 group-hover:text-white/60 transition-colors">
            {service.subtitle}
          </span>
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[oklch(0.13_0.005_60)] group-hover:text-white transition-colors mb-3">
          {service.title}
        </h3>
        <p className="font-[family-name:var(--font-montserrat)] text-sm leading-relaxed text-gray-500 group-hover:text-white/80 transition-colors mb-6 flex-1">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.features.map((f) => (
            <span
              key={f}
              className="font-[family-name:var(--font-montserrat)] text-xs px-3 py-1 border border-gray-200 group-hover:border-white/30 text-gray-400 group-hover:text-white/70 transition-colors"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) headRef.current?.classList.add("visible");
      },
      { threshold: 0.2 }
    );
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16 md:mb-20">
          <div className="section-eyebrow">
            <span className="eyebrow-text">Our Services</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light leading-tight max-w-lg">
              From vision to brand,<br />
              <span className="font-semibold">every detail handled.</span>
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 max-w-xs leading-relaxed">
              Whether you are a designer or a founder launching your first studio, we provide tailored solutions that elevate your brand from day one.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 120} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase border border-[oklch(0.38_0.09_162)] text-[oklch(0.38_0.09_162)] px-10 py-3.5 hover:bg-[oklch(0.38_0.09_162)] hover:text-white transition-colors duration-300"
          >
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
}
