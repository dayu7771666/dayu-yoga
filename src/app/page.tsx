import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", backgroundColor: "#fafaf8", color: "#1a1a1a" }}>

      {/* Navigation */}
      <nav style={{ borderBottom: "1px solid #e5e5e0", backgroundColor: "#fafaf8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 500, letterSpacing: "0.05em", color: "#1a1a1a" }}>Zenlume</span>
            <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.2em", color: "#6b6b6b", textTransform: "uppercase", marginTop: "2px" }}>Yoga</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            <a href="#services" style={{ fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6b6b", textDecoration: "none" }}>Services</a>
            <a href="#about" style={{ fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6b6b", textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: "1px" }}>Start Customizing</a>
          </div>
        </div>
      </nav>

      {/* Hero Section — split layout with real image on right */}
      <section style={{ minHeight: "92vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", overflow: "hidden" }}>
        {/* Left: text content */}
        <div style={{ display: "flex", alignItems: "center", padding: "6rem 4rem 6rem 4rem", backgroundColor: "#fafaf8", position: "relative" }}>
          <div style={{ maxWidth: "520px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "2rem" }}>Yoga Brand Studio</p>
            <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "1.5rem" }}>
              Crafting the Soul<br />
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>of Your Yoga Brand.</em>
            </h1>
            <p style={{ fontSize: "1.0625rem", fontWeight: 300, lineHeight: 1.8, color: "#4a4a4a", marginBottom: "3rem" }}>
              Minimalist, modern customization services built for designers and entrepreneurs. From bespoke logos to premium packaging, we translate your vision into a brand that breathes.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", backgroundColor: "#1a1a1a", color: "#fafaf8", padding: "0.875rem 2rem", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Start Customizing</a>
              <a href="#services" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1a1a1a", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: "2px" }}>Explore Services</a>
            </div>
          </div>
        </div>
        {/* Right: hero image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/hero-visual.jpg"
            alt="Minimalist yoga mat flat lay with botanicals and stone"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            sizes="50vw"
          />
          {/* Subtle overlay for depth */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(250,250,248,0.15) 0%, transparent 30%)" }} />
        </div>
        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.35 }}>
          <div style={{ width: "1px", height: "48px", backgroundColor: "#1a1a1a" }} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: "8rem 2rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1rem" }}>What We Offer</p>
              <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, color: "#1a1a1a" }}>Tailored for<br /><em style={{ fontStyle: "italic" }}>Visionaries</em></h2>
            </div>
            <p style={{ fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8, color: "#6b6b6b", maxWidth: "360px" }}>
              Every element of your yoga brand, crafted with intention and refined through a seamless one-click process.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", backgroundColor: "#e5e5e0" }}>

            {/* Service 01 — Logo Design */}
            <div style={{ backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
                <Image
                  src="/service-logo.jpg"
                  alt="Logo design sketchbook with geometric marks"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center", transition: "transform 0.4s ease" }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div style={{ padding: "2rem 2.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "#e5e5e0", lineHeight: 1 }}>01</span>
                  <div style={{ width: "36px", height: "36px", border: "1px solid #e5e5e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L15 8L8 15M1 8H15" stroke="#1a1a1a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.75rem", fontWeight: 400, color: "#1a1a1a" }}>Logo Design</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8, color: "#6b6b6b" }}>
                  Minimalist mark-making that captures the essence of your yoga practice. Each logo is a distillation of your brand&apos;s philosophy into a single, timeless symbol.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid #e5e5e0" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b6b" }}>Brand Identity &middot; Vector Files &middot; Style Guide</span>
                </div>
              </div>
            </div>

            {/* Service 02 — Premium Packaging */}
            <div style={{ backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
                <Image
                  src="/service-packaging.jpg"
                  alt="Premium minimalist packaging bag with eucalyptus"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(26,26,26,0.3) 100%)" }} />
              </div>
              <div style={{ padding: "2rem 2.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "#3a3a3a", lineHeight: 1 }}>02</span>
                  <div style={{ width: "36px", height: "36px", border: "1px solid #3a3a3a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L15 8L8 15M1 8H15" stroke="#fafaf8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.75rem", fontWeight: 400, color: "#fafaf8" }}>Premium Packaging</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8, color: "#9a9a9a" }}>
                  Eco-conscious bags, boxes, and wrapping that speak before a word is said. Sustainable materials meet refined aesthetics for an unboxing experience worth remembering.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid #3a3a3a" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b6b" }}>Bags &middot; Boxes &middot; Eco Materials</span>
                </div>
              </div>
            </div>

            {/* Service 03 — Full Brand Identity (no separate image, use studio image as accent) */}
            <div style={{ backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
                <Image
                  src="/about-studio.jpg"
                  alt="Minimalist yoga studio interior with natural light"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div style={{ padding: "2rem 2.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "#e5e5e0", lineHeight: 1 }}>03</span>
                  <div style={{ width: "36px", height: "36px", border: "1px solid #e5e5e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L15 8L8 15M1 8H15" stroke="#1a1a1a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.75rem", fontWeight: 400, color: "#1a1a1a" }}>Full Brand Identity</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8, color: "#6b6b6b" }}>
                  A cohesive visual system for the modern yoga studio. Typography, color palette, stationery, and digital assets — every touchpoint aligned with your vision.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid #e5e5e0" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b6b" }}>Typography &middot; Color System &middot; Digital Assets</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About / Audience Section */}
      <section id="about" style={{ padding: "8rem 2rem", backgroundColor: "#fafaf8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1rem" }}>Who We Serve</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, color: "#1a1a1a", marginBottom: "2rem" }}>Designed for<br /><em style={{ fontStyle: "italic" }}>Creators &amp; Founders</em></h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.5rem" }}>
              Whether you are a designer seeking a trusted production partner or an entrepreneur launching a new yoga studio, Zenlume provides seamless, high-quality customization that elevates your brand from the first impression.
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#4a4a4a", marginBottom: "3rem" }}>
              We believe that great design is not a luxury — it is the language through which your brand speaks to the world. Our one-click customization process removes friction, so you can focus on what matters most: your practice and your people.
            </p>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "#1a1a1a", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: "2px" }}>Begin Your Brand Journey</a>
          </div>
          {/* Right: studio image with quote overlay */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image
                src="/about-studio.jpg"
                alt="Serene minimalist yoga studio with natural light"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              {/* Gradient overlay for quote readability */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.72) 100%)" }} />
              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.125rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>&ldquo;A brand is the set of expectations, memories, stories and relationships that, taken together, account for a consumer&apos;s decision.&rdquo;</p>
                  <p style={{ fontSize: "0.6875rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: "0.75rem" }}>Seth Godin</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{ position: "absolute", top: "-1.5rem", right: "-1.5rem", width: "110px", height: "110px", border: "1px solid #e5e5e0", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.875rem", fontWeight: 300, color: "#1a1a1a", lineHeight: 1 }}>1&ndash;</p>
                <p style={{ fontSize: "0.5625rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b6b", marginTop: "0.25rem" }}>Click Custom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: "8rem 2rem", backgroundColor: "#1a1a1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1rem" }}>How It Works</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, color: "#fafaf8" }}>One-Click.<br /><em style={{ fontStyle: "italic" }}>Infinite Possibility.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem" }}>
            {[
              { step: "01", title: "Share Your Vision", desc: "Tell us about your brand, values, and aesthetic preferences through our streamlined brief." },
              { step: "02", title: "We Design & Refine", desc: "Our studio translates your brief into minimalist, purposeful design concepts for your review." },
              { step: "03", title: "Approve & Customize", desc: "Select your preferred direction and we finalize every detail to your exact specifications." },
              { step: "04", title: "Receive Your Brand", desc: "All files, assets, and production-ready materials delivered directly to you." },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "3.5rem", fontWeight: 300, color: "#2d2d2d", lineHeight: 1 }}>{item.step}</span>
                <div style={{ width: "2rem", height: "1px", backgroundColor: "#4a4a4a" }} />
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, color: "#fafaf8" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "#6b6b6b" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{ padding: "0", backgroundColor: "#ffffff", position: "relative", overflow: "hidden" }}>
        {/* Full-width background image strip */}
        <div style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
          <Image
            src="/hero-visual.jpg"
            alt="Yoga brand lifestyle"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(250,250,248,0.88)" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "0 2rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.25rem" }}>Ready to Begin</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1.05, color: "#1a1a1a", marginBottom: "1.25rem" }}>
              Your brand is<br /><em style={{ fontStyle: "italic" }}>waiting to be born.</em>
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "#4a4a4a", marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
              Join the designers and entrepreneurs who trust Zenlume to bring their yoga brand to life.
            </p>
            <a href="mailto:hello@zenlumeyoga.com" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", backgroundColor: "#1a1a1a", color: "#fafaf8", padding: "1rem 2.5rem", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>hello@zenlumeyoga.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e5e0", backgroundColor: "#fafaf8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "0.05em", color: "#1a1a1a" }}>Zenlume</span>
            <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.2em", color: "#6b6b6b", textTransform: "uppercase" }}>Yoga</span>
          </div>
          <p style={{ fontSize: "0.8125rem", fontWeight: 300, color: "#9a9a9a", letterSpacing: "0.05em" }}>
            &copy; 2026 Zenlume Yoga. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a href="#services" style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9a9a", textDecoration: "none" }}>Services</a>
            <a href="#about" style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9a9a", textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9a9a", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
