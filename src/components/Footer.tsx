"use client";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Get Started", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 md:py-16 bg-[oklch(0.08_0.003_60)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-[family-name:var(--font-cormorant)] text-2xl text-white font-semibold mb-3">
              Zenlume <span className="font-light text-white/50">Yoga</span>
            </div>
            <p className="font-[family-name:var(--font-montserrat)] text-xs text-white/40 leading-relaxed max-w-xs">
              One-click custom yoga branding for designers and entrepreneurs. Crafting the soul of your yoga brand.
            </p>
          </div>
          <div>
            <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30 mb-5">Navigation</div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-[family-name:var(--font-montserrat)] text-sm text-white/50 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30 mb-5">Contact</div>
            <div className="space-y-4">
              {[
                { label: "Email", value: "hello@zenlumeyoga.com" },
                { label: "Instagram", value: "@zenlumeyoga" },
                { label: "Working Hours", value: "Mon – Sat  9:00 — 18:00" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-[family-name:var(--font-montserrat)] text-xs text-white/30 mb-1">{item.label}</div>
                  <div className="font-[family-name:var(--font-montserrat)] text-sm text-white/70">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-white/25">© 2026 Zenlume Yoga. All rights reserved.</p>
          <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-white/25">&ldquo;Crafting the Soul of Your Yoga Brand.&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}
