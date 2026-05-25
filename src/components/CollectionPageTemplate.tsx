"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface SubCategory {
  label: string;
  href: string;
  image: string;
  desc: string;
}

export interface CollectionPageProps {
  eyebrow: string;
  title: string;
  titleBold: string;
  subtitle: string;
  heroImage: string;
  subCategories: SubCategory[];
  ctaTitle: string;
  ctaBody: string;
}

export default function CollectionPageTemplate({
  eyebrow,
  title,
  titleBold,
  subtitle,
  heroImage,
  subCategories,
  ctaTitle,
  ctaBody,
}: CollectionPageProps) {
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
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] min-h-[55svh] flex items-end overflow-hidden bg-[oklch(0.10_0.004_60)]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover object-center opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.004_60)] via-[oklch(0.10_0.004_60)]/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-36">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-white/40" />
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05]">
            {title}<br />
            <span className="font-semibold italic">{titleBold}</span>
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/55 max-w-lg leading-relaxed mt-6">
            {subtitle}
          </p>
        </div>
      </section>

      {/* ── Sub-category grid ── */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.005_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => { refs.current[0] = el; }}
            className="reveal mb-12"
          >
            <div className="section-eyebrow">
              <span className="eyebrow-text">Browse Categories</span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light leading-tight">
              Choose your<br />
              <span className="font-semibold">product category.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200">
            {subCategories.map((cat, i) => (
              <Link
                key={cat.href}
                href={cat.href}
                ref={(el) => { refs.current[1 + i] = el as unknown as HTMLDivElement; }}
                className="reveal group bg-white block overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover img-bw group-hover:filter-none transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.10_0.004_60)]/0 group-hover:bg-[oklch(0.10_0.004_60)]/10 transition-colors duration-300" />
                </div>
                {/* Text */}
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)] mb-1.5 group-hover:text-[oklch(0.38_0.09_162)] transition-colors">
                    {cat.label}
                  </h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.15em] uppercase text-[oklch(0.38_0.09_162)] flex items-center gap-2">
                    Customize
                    <span className="w-4 h-px bg-[oklch(0.38_0.09_162)] group-hover:w-8 transition-all duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[oklch(0.10_0.004_60)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-white mb-5">
            {ctaTitle.split("\\n").map((line, i) => (
              <span key={i}>{line}{i < ctaTitle.split("\\n").length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/55 max-w-md mx-auto leading-relaxed mb-10">
            {ctaBody}
          </p>
          <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center px-12 py-4 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
          >
            <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">Request a Quote</span>
          </Link>
        </div>
      </section>
    </>
  );
}
