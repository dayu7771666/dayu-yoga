"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/#services", page: false },
  { label: "Process", href: "/#process", page: false },
  { label: "About", href: "/about", page: true },
  { label: "Policy", href: "/policy", page: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    if (pathname === "/") {
      const id = href.replace("/#", "#");
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[oklch(0.10_0.004_60)]/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white tracking-wide"
        >
          Zenlume <span className="font-light text-white/60">Yoga</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.page ? (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
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
        <div className="md:hidden bg-[oklch(0.10_0.004_60)] px-6 py-6 flex flex-col gap-5 border-t border-white/10">
          {navLinks.map((link) =>
            link.page ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors text-left"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => { setMenuOpen(false); handleAnchorClick(link.href); }}
                className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors text-left"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] px-6 py-3 text-left"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
