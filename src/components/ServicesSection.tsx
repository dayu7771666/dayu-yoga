"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: "01",
    subtitle: "Apparel & Fabric",
    title: "Custom Yoga Apparel",
    description:
      "Select from 50+ fabric options — moisture-wicking, bamboo, recycled, or premium stretch blends. Choose your cut, color, and print. We produce your design exactly as envisioned, from sample approval to bulk shipment.",
    image: "/service-logo.jpg",
    features: ["50+ Fabrics", "Custom Dye & Print", "Cut & Sew", "Bulk from 50 pcs"],
  },
  {
    id: "02",
    subtitle: "Brand Packaging",
    title: "Custom Packaging",
    description:
      "Design your own bags, boxes, tissue paper, and labels. Upload your artwork or brief our team on your specs — we handle material sourcing, printing, and quality control. Your packaging, produced at scale.",
    image: "/service-packaging.jpg",
    features: ["Paper Bags", "Gift Boxes", "Custom Labels", "Eco Materials"],
  },
  {
    id: "03",
    subtitle: "Brand Identity",
    title: "Logo & Brand Mark",
    description:
      "You create your logo — we bring it to life across every physical touchpoint. Embroidery, heat transfer, woven labels, screen print. Your mark applied with precision to every product in your line.",
    image: "/hero-visual.jpg",
    features: ["Embroidery", "Heat Transfer", "Woven Labels", "Screen Print"],
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
            <span className="eyebrow-text">What We Produce</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light leading-tight max-w-lg">
              Your creative vision,<br />
              <span className="font-semibold">manufactured to order.</span>
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500 max-w-xs leading-relaxed">
              We do not design for you. You bring the vision — we provide the production infrastructure to make it real, at any scale.
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
            Discuss Your Production Needs
          </button>
        </div>
      </div>
    </section>
  );
}
