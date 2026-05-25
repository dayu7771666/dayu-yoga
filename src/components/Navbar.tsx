"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ── Navigation data ──────────────────────────────────────────────
const collections = [
  { label: "Yoga Apparel", href: "/collections/yoga" },
  { label: "Yoga Accessories", href: "/collections/accessories" },
  { label: "Custom Packaging", href: "/collections/packaging" },
  { label: "Logo Application", href: "/collections/logo" },
];

const apparelSubMenu = [
  {
    group: "Bottoms",
    items: [
      { label: "Full-length Leggings", href: "/products/leggings" },
      { label: "Capri Leggings", href: "/products/capri" },
      { label: "Shorts", href: "/products/shorts" },
    ],
  },
  {
    group: "Tops",
    items: [
      { label: "Sports Bras", href: "/products/sports-bras" },
      { label: "Fitted Tops", href: "/products/fitted-tops" },
      { label: "Relaxed Tops", href: "/products/relaxed-tops" },
    ],
  },
  {
    group: "Sets",
    items: [
      { label: "Matching Sets", href: "/products/matching-sets" },
    ],
  },
  {
    group: "Outerwear & Warmup",
    items: [
      { label: "Jackets", href: "/products/jackets" },
      { label: "Winter Yoga Wear", href: "/products/winter" },
    ],
  },
];

const siteLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Policy", href: "/policy" },
];

// ── Component ─────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shopBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        shopBtnRef.current && !shopBtnRef.current.contains(e.target as Node)
      ) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setShopOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const isShopActive = pathname.startsWith("/collections") || pathname.startsWith("/products");
  const isJournalActive = pathname.startsWith("/blog");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-auto transition-all duration-500 ${
        scrolled ? "bg-[oklch(0.10_0.004_60)]/95 backdrop-blur-sm md:py-4" : "bg-transparent md:py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full md:h-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white tracking-wide shrink-0"
        >
          Zenlume <span className="font-light text-white/60">Yoga</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">

          {/* Shop — mega dropdown trigger */}
          <div className="relative">
            <button
              ref={shopBtnRef}
              onClick={() => setShopOpen((v) => !v)}
              className={`font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-1.5 ${
                isShopActive || shopOpen ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              PRODUCTS
              <svg
                width="8" height="5" viewBox="0 0 8 5" fill="none"
                className={`transition-transform duration-200 ${shopOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Mega dropdown */}
            {shopOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[680px] bg-[oklch(0.10_0.004_60)] border border-white/10 shadow-2xl"
              >
                {/* Top row: 4 collection links */}
                <div className="grid grid-cols-4 border-b border-white/10">
                  {collections.map((col) => (
                    <Link
                      key={col.href}
                      href={col.href}
                      className={`px-5 py-4 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] uppercase transition-colors duration-200 border-r border-white/10 last:border-r-0 ${
                        pathname === col.href
                          ? "text-white bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {col.label}
                    </Link>
                  ))}
                </div>

                {/* Bottom: Yoga Apparel sub-menu */}
                <div className="p-6">
                  <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-white/80 mb-5">
                    Yoga Apparel — Browse by Category
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    {apparelSubMenu.map((group) => (
                      <div key={group.group}>
                        <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.15em] uppercase text-white/60 mb-3">
                          {group.group}
                        </div>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={`font-[family-name:var(--font-montserrat)] text-xs transition-colors duration-200 block ${
                                  pathname === item.href
                                    ? "text-white"
                                    : "text-white/80 hover:text-white"
                                }`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Site links */}
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                (link.href === "/blog" ? isJournalActive : pathname === link.href) ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className={`relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group ${
              pathname === "/contact" ? "opacity-80" : ""
            }`}
          >
            <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">Get Started</span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.10_0.004_60)] px-6 py-6 flex flex-col gap-1 border-t border-white/10 max-h-[80vh] overflow-y-auto">

          {/* Shop accordion */}
          <button
            onClick={() => setMobileShopOpen((v) => !v)}
            className="flex items-center justify-between py-3 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors w-full text-left"
          >
            Shop
            <svg
              width="8" height="5" viewBox="0 0 8 5" fill="none"
              className={`transition-transform duration-200 ${mobileShopOpen ? "rotate-180" : ""}`}
            >
              <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {mobileShopOpen && (
            <div className="pl-4 pb-2 flex flex-col gap-1">
              {/* Collection links */}
              <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-[oklch(0.38_0.09_162)] py-2">
                Collections
              </div>
              {collections.map((col) => (
                <Link
                  key={col.href}
                  href={col.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] uppercase text-white/80 hover:text-white transition-colors py-2"
                >
                  {col.label}
                </Link>
              ))}

              {/* Apparel sub-categories */}
              <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-[0.2em] uppercase text-[oklch(0.38_0.09_162)] pt-4 pb-2">
                Yoga Apparel
              </div>
              {apparelSubMenu.map((group) => (
                <div key={group.group} className="mb-3">
                  <div className="font-[family-name:var(--font-montserrat)] text-[10px] tracking-widest uppercase text-white/60 mb-1.5">
                    {group.group}
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-[family-name:var(--font-montserrat)] text-xs text-white/80 hover:text-white transition-colors block py-1.5 pl-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Site links */}
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors py-3"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] px-6 py-3 text-center mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
