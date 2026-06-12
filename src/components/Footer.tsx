import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Service Policy", href: "/policy" },
  { label: "Contact", href: "/contact" },
];

// SEO FIX: static product & collection links always present in the DOM,
// giving Googlebot a reliable crawl path to all key pages from every page.
const collectionLinks = [
  { label: "Yoga Apparel", href: "/collections/yoga" },
  { label: "Yoga Accessories", href: "/collections/accessories" },
  { label: "Custom Packaging", href: "/collections/packaging" },
  { label: "Logo Application", href: "/collections/logo" },
];

const productLinks = [
  { label: "Full-length Leggings", href: "/products/leggings" },
  { label: "Capri Leggings", href: "/products/capri" },
  { label: "Shorts", href: "/products/shorts" },
  { label: "Sports Bras", href: "/products/sports-bras" },
  { label: "Fitted Tops", href: "/products/fitted-tops" },
  { label: "Relaxed Tops", href: "/products/relaxed-tops" },
  { label: "Matching Sets", href: "/products/matching-sets" },
  { label: "Jackets", href: "/products/jackets" },
  { label: "Winter Yoga Wear", href: "/products/winter" },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[oklch(0.08_0.003_60)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-[family-name:var(--font-cormorant)] text-2xl text-white font-semibold mb-3 block"
            >
              Zenlume <span className="font-light text-white/50">Yoga</span>
            </Link>
            <p className="font-[family-name:var(--font-montserrat)] text-xs text-white/40 leading-relaxed max-w-xs">
              One-click custom yoga branding for designers and entrepreneurs. Crafting the soul of your yoga brand.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30 mb-5">
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-montserrat)] text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30 mb-5">
              Collections
            </div>
            <div className="flex flex-col gap-3">
              {collectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-montserrat)] text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30 mb-5">
              Products
            </div>
            <div className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-montserrat)] text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/30 mb-5">
              Contact
            </div>
            <div className="space-y-4">
              {[
                { label: "Email", value: "tidelineswim@swimsuitcustom.com" },
                { label: "Instagram", value: "@zenlumeyoga" },
                { label: "Working Hours", value: "Mon – Sat  9:00 — 18:00" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-[family-name:var(--font-montserrat)] text-xs text-white/30 mb-1">
                    {item.label}
                  </div>
                  <div className="font-[family-name:var(--font-montserrat)] text-sm text-white/70">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-white/25">
            © 2026 Zenlume Yoga. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/policy"
              className="font-[family-name:var(--font-montserrat)] text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Service Policy
            </Link>
            <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-white/25">
              &ldquo;Crafting the Soul of Your Yoga Brand.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
