"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const policies = [
  {
    id: "scope",
    title: "Scope of Services",
    icon: "01",
    content: [
      {
        subtitle: "What We Do",
        text: "Zenlume Yoga is a production studio. We manufacture custom yoga apparel, packaging, and branded products for designers and brand principals. Our services include: custom apparel production (cut & sew, fabric selection, print application), custom packaging (bags, boxes, tissue paper, labels), and logo application to physical products (embroidery, heat transfer, screen print, woven labels).",
      },
      {
        subtitle: "What We Do Not Do",
        text: "We are not a design agency. We do not create logos, develop brand identities, or produce graphic design work. You must provide your own design files, artwork, and creative direction. If you do not have finalized design files, we cannot begin production.",
      },
      {
        subtitle: "Who We Work With",
        text: "We work exclusively with independent designers, brand founders, and brand principals who have a clear product vision and require a reliable production partner. We do not accept walk-in orders or requests without a completed production brief.",
      },
    ],
  },
  {
    id: "process",
    title: "Production Process & Timelines",
    icon: "02",
    content: [
      {
        subtitle: "Standard Timelines",
        text: "Sample production: 7–14 business days from confirmed specs. Bulk production: 25–35 business days after sample approval. Custom packaging: 10–20 business days for samples, 20–30 business days for bulk. All timelines are confirmed in writing at order start and are subject to material availability and client response times.",
      },
      {
        subtitle: "Order Kickoff",
        text: "Production begins upon receipt of: signed production agreement, completed product brief with design files, and initial deposit payment. Delays in providing required materials (design files, fabric selections, feedback on samples) will extend the agreed timeline. We communicate all timeline changes proactively.",
      },
      {
        subtitle: "Rush Production",
        text: "Expedited production may be available depending on current factory capacity. Rush orders incur a 30–50% surcharge depending on timeline compression required. Please contact us before placing a rush request to confirm availability.",
      },
    ],
  },
  {
    id: "sample",
    title: "Sample Policy",
    icon: "03",
    content: [
      {
        subtitle: "Sample Requirement",
        text: "All bulk production orders require sample approval before bulk production begins. This is non-negotiable. We will not proceed to bulk without written sample approval from the client. This protects both parties and ensures the final product meets your exact specifications.",
      },
      {
        subtitle: "Sample Costs",
        text: "Samples are charged at cost plus a production setup fee. Sample costs are credited toward your bulk order if you proceed. Sample fees are non-refundable if you choose not to proceed with bulk production after sample approval.",
      },
      {
        subtitle: "Sample Revisions",
        text: "Each order includes up to 2 rounds of sample revisions. Additional sample rounds are billed at cost. Major specification changes after the first sample (e.g., changing fabric type, print technique, or garment construction) may require a new sample and additional fees.",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment Terms",
    icon: "04",
    content: [
      {
        subtitle: "Payment Structure",
        text: "All orders require a 50% deposit before production begins. The remaining 50% is due prior to shipment of final goods. For orders exceeding $5,000 USD, a milestone-based payment schedule may be arranged and will be outlined in your production agreement.",
      },
      {
        subtitle: "Accepted Payment Methods",
        text: "We accept bank transfer (T/T), PayPal, and major credit cards. All prices are quoted in USD. International clients are responsible for any applicable currency conversion fees or bank charges. Wire transfer is preferred for orders above $2,000.",
      },
      {
        subtitle: "Late Payments",
        text: "Final goods will not be shipped until full payment is received. Invoices outstanding beyond 14 days after the due date will incur a 1.5% monthly late fee. We reserve the right to place holds on active production for accounts with overdue balances.",
      },
    ],
  },
  {
    id: "moq",
    title: "Minimum Order Quantities",
    icon: "05",
    content: [
      {
        subtitle: "Apparel MOQ",
        text: "Minimum order quantity for custom apparel is 50 units per style per colorway. Orders below this threshold cannot be accommodated within our standard production workflow. For mixed-style orders, each style must individually meet the MOQ.",
      },
      {
        subtitle: "Packaging MOQ",
        text: "Minimum order quantity for custom packaging (bags, boxes) is 100 units per design. For custom labels and tissue paper, the MOQ is 200 units. Smaller quantities may be available at a premium — contact us to discuss.",
      },
      {
        subtitle: "Bulk Pricing",
        text: "Unit pricing decreases at volume thresholds of 200, 500, 1,000, and 5,000 units. Tiered pricing is provided in your production quote. We encourage clients to plan for scale from the outset to maximize cost efficiency.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality & NDA",
    icon: "06",
    content: [
      {
        subtitle: "Non-Disclosure Agreement",
        text: "We sign a mutual Non-Disclosure Agreement (NDA) before any project begins. All information you share — including design files, product specifications, brand strategy, and business plans — is treated as strictly confidential and will never be shared with third parties.",
      },
      {
        subtitle: "Design File Security",
        text: "Your design files are stored on secured internal servers and are never shared with external contractors or other clients. All production work is handled within our controlled factory environment. Files are retained for 12 months after order completion and then securely deleted.",
      },
      {
        subtitle: "NDA Duration",
        text: "Our confidentiality obligations remain in effect for a minimum of 3 years after order completion, or indefinitely if specified in the signed agreement. We will never reproduce, replicate, or sell designs based on your submitted files.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation & Refund Policy",
    icon: "07",
    content: [
      {
        subtitle: "Pre-Production Cancellation",
        text: "If you cancel before production begins (before materials are ordered and cutting has started), your deposit will be refunded minus any sample costs already incurred. Cancellations must be submitted in writing.",
      },
      {
        subtitle: "Mid-Production Cancellation",
        text: "If you cancel after production has commenced, the deposit is non-refundable. Any production costs incurred beyond the deposit value will be invoiced separately. Partially completed goods may be delivered at your request at cost.",
      },
      {
        subtitle: "Quality Disputes",
        text: "If delivered goods do not meet the approved sample specifications, we will remake the affected units at no additional cost. Quality disputes must be raised within 14 days of delivery with photographic evidence. We do not accept returns for goods that match the approved sample.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Shipping & Delivery",
    icon: "08",
    content: [
      {
        subtitle: "Shipping Terms",
        text: "All orders ship Ex Works (EXW) from our facility in China unless otherwise agreed. We can arrange freight forwarding at cost. The client is responsible for all import duties, customs clearance, and destination country taxes.",
      },
      {
        subtitle: "Delivery Timelines",
        text: "Shipping timelines are provided at order confirmation and depend on destination and chosen freight method. Air freight: 5–10 business days. Sea freight: 25–45 business days depending on destination port. We provide tracking information for all shipments.",
      },
      {
        subtitle: "Damage in Transit",
        text: "We are not responsible for damage or loss occurring during transit. We strongly recommend purchasing cargo insurance for all bulk shipments. We will provide all necessary documentation (packing list, commercial invoice, COO) to support insurance claims.",
      },
    ],
  },
];

export default function PolicyPageContent() {
  const [activeSection, setActiveSection] = useState("scope");
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = policies.map((p) => document.getElementById(p.id));
      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(policies[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="bg-[oklch(0.10_0.004_60)] pt-36 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-white/40" />
            <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-white/50">
              Production Terms
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6">
            Production<br />
            <span className="font-semibold italic">Policy.</span>
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60 max-w-xl leading-relaxed">
            Everything you need to know about how we work, what to expect, and the terms that govern our production partnership. Last updated: January 2026.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">

            {/* Sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-gray-400 mb-5">Contents</div>
                <nav className="flex flex-col gap-1">
                  {policies.map((p) => (
                    <a
                      key={p.id}
                      href={`#${p.id}`}
                      className={`font-[family-name:var(--font-montserrat)] text-sm py-2 px-3 border-l-2 transition-all duration-200 ${
                        activeSection === p.id
                          ? "border-[oklch(0.38_0.09_162)] text-[oklch(0.13_0.005_60)] font-medium"
                          : "border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-200"
                      }`}
                    >
                      <span className="font-[family-name:var(--font-cormorant)] text-xs mr-2 opacity-50">{p.icon}</span>
                      {p.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 leading-relaxed mb-4">
                    Questions about our policy?
                  </p>
                  <Link
                    href="/contact"
                    className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.15em] uppercase text-[oklch(0.38_0.09_162)] hover:underline underline-offset-4"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Policy content */}
            <div className="space-y-16">
              {policies.map((policy, i) => (
                <div
                  key={policy.id}
                  id={policy.id}
                  ref={(el) => { refs.current[i] = el; }}
                  className="reveal scroll-mt-28"
                >
                  <div className="flex items-center gap-4 mb-8 pb-5 border-b border-gray-100">
                    <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[oklch(0.38_0.09_162)] opacity-30">
                      {policy.icon}
                    </span>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-semibold text-[oklch(0.13_0.005_60)]">
                      {policy.title}
                    </h2>
                  </div>
                  <div className="space-y-8">
                    {policy.content.map((item) => (
                      <div key={item.subtitle}>
                        <h3 className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.15em] uppercase text-[oklch(0.38_0.09_162)] mb-3">
                          {item.subtitle}
                        </h3>
                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Footer note */}
              <div
                ref={(el) => { refs.current[policies.length] = el; }}
                className="reveal pt-12 border-t border-gray-100"
              >
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 leading-relaxed mb-2">
                  This policy was last updated in January 2026. Zenlume Yoga reserves the right to update these terms at any time. Continued engagement with our services constitutes acceptance of any revised terms.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-xs text-gray-400 leading-relaxed">
                  For questions, please contact us at{" "}
                  <a href="mailto:tidelineswim@swimsuitcustom.com" className="text-[oklch(0.38_0.09_162)] hover:underline underline-offset-2">
                    tidelineswim@swimsuitcustom.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[oklch(0.10_0.004_60)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-white mb-6">
            Ready to place your<br />
            <span className="font-semibold italic">first production order?</span>
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60 max-w-md mx-auto leading-relaxed mb-10">
            Send us your specs and we will respond within 24 hours with a detailed production quote.
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
