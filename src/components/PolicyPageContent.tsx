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
        subtitle: "What We Offer",
        text: "Zenlume Yoga provides bespoke brand identity services exclusively for yoga studios, wellness practitioners, and related businesses. Our core services include: Logo Design, Premium Packaging (bags, boxes, wrapping), and Full Brand Identity Systems (typography, color palette, stationery, digital assets).",
      },
      {
        subtitle: "Custom Scope",
        text: "All projects are scoped individually. Before any work begins, we provide a written proposal outlining deliverables, timeline, and pricing. Work outside the agreed scope requires a separate written agreement and may incur additional fees.",
      },
      {
        subtitle: "What Is Not Included",
        text: "Unless explicitly stated in your project proposal, our services do not include website development, social media management, photography, video production, or ongoing brand maintenance. These can be discussed as add-on services.",
      },
    ],
  },
  {
    id: "process",
    title: "Project Process & Timelines",
    icon: "02",
    content: [
      {
        subtitle: "Standard Timelines",
        text: "Logo Design projects typically take 7–14 business days from brief approval to final delivery. Full Brand Identity packages range from 3–6 weeks. Premium Packaging design takes 5–10 business days. Timelines are confirmed in writing at project start and are subject to client response times.",
      },
      {
        subtitle: "Project Kickoff",
        text: "Projects begin upon receipt of the signed proposal, completed brand brief, and initial payment. Delays in providing required materials (brief, reference images, feedback) may extend the agreed timeline. We will always communicate any timeline changes proactively.",
      },
      {
        subtitle: "Rush Projects",
        text: "Expedited timelines may be available depending on current studio capacity. Rush projects (delivery within 5 business days) incur a 30% surcharge. Please contact us to discuss availability before placing a rush request.",
      },
    ],
  },
  {
    id: "revisions",
    title: "Revisions & Feedback",
    icon: "03",
    content: [
      {
        subtitle: "Included Revision Rounds",
        text: "Each project includes a defined number of revision rounds as specified in your proposal. Logo Design includes 3 revision rounds. Full Brand Identity includes 2 rounds per deliverable. Premium Packaging includes 2 revision rounds.",
      },
      {
        subtitle: "What Counts as a Revision",
        text: "A revision round is defined as a consolidated set of feedback submitted in a single message or document. We ask that all feedback for a given round be gathered and submitted together to maintain project momentum.",
      },
      {
        subtitle: "Additional Revisions",
        text: "Revisions beyond the included rounds are billed at our standard hourly rate of $85/hour, with a minimum of 1 hour. Major directional changes after concept approval may be treated as a new project phase and quoted separately.",
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
        text: "All projects require a 50% deposit before work begins. The remaining 50% is due upon delivery of final files. For projects exceeding $2,000, a milestone-based payment schedule may be arranged and will be outlined in your proposal.",
      },
      {
        subtitle: "Accepted Payment Methods",
        text: "We accept bank transfer, PayPal, and major credit cards. All prices are quoted in USD. International clients are responsible for any applicable currency conversion fees or bank charges.",
      },
      {
        subtitle: "Late Payments",
        text: "Final files and source materials will not be released until full payment is received. Invoices outstanding beyond 14 days after the due date will incur a 1.5% monthly late fee. We reserve the right to pause active projects for accounts with overdue balances.",
      },
    ],
  },
  {
    id: "ownership",
    title: "Intellectual Property & Ownership",
    icon: "05",
    content: [
      {
        subtitle: "Transfer of Rights",
        text: "Upon receipt of full payment, Zenlume Yoga transfers full intellectual property rights of all final approved deliverables to the client. This includes exclusive rights to use, reproduce, and modify the designs for commercial purposes.",
      },
      {
        subtitle: "Portfolio Rights",
        text: "Unless otherwise agreed in writing, Zenlume Yoga retains the right to display completed work in our portfolio, website, and social media channels. If you require full confidentiality of the final output, please notify us before project start — a portfolio exclusion fee may apply.",
      },
      {
        subtitle: "Preliminary Work",
        text: "Concepts, sketches, and rejected design directions that are not selected as the final deliverable remain the intellectual property of Zenlume Yoga and may not be used by the client.",
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
        text: "We sign a mutual Non-Disclosure Agreement (NDA) before any project begins. All information you share — including brand concepts, business strategy, target markets, and design briefs — is treated as strictly confidential.",
      },
      {
        subtitle: "Data Security",
        text: "Project files are stored securely and are never shared with third parties without your explicit written consent. We do not outsource design work to external contractors. All work is completed in-house by our core team.",
      },
      {
        subtitle: "NDA Duration",
        text: "Our confidentiality obligations remain in effect for a minimum of 3 years after project completion, or indefinitely if specified in the signed agreement.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation & Refund Policy",
    icon: "07",
    content: [
      {
        subtitle: "Client-Initiated Cancellation",
        text: "If you cancel a project before work begins, your deposit will be refunded in full. If you cancel after work has commenced, the deposit is non-refundable. Any work completed beyond the deposit value will be invoiced at our standard rate.",
      },
      {
        subtitle: "Refunds",
        text: "We do not offer refunds on completed and delivered work. If you are dissatisfied with the final output, we will work with you through additional revision rounds to reach a satisfactory result. Our goal is always to deliver work you are proud of.",
      },
      {
        subtitle: "Studio-Initiated Cancellation",
        text: "In the rare event that Zenlume Yoga must cancel a project due to unforeseen circumstances, we will provide a full refund of all payments received and, where possible, provide preliminary work completed to that point.",
      },
    ],
  },
  {
    id: "delivery",
    title: "File Delivery",
    icon: "08",
    content: [
      {
        subtitle: "Delivery Format",
        text: "Final files are delivered via a secure download link (valid for 30 days). Deliverables include all agreed source files: vector formats (AI, EPS, SVG), print-ready PDFs, web-optimized PNGs/JPGs, and a brand style guide in PDF format.",
      },
      {
        subtitle: "File Storage",
        text: "We retain project files for 12 months after delivery. After this period, files may be deleted without notice. We strongly recommend downloading and backing up all files immediately upon receipt.",
      },
      {
        subtitle: "Re-delivery",
        text: "File re-delivery requests within the 12-month storage period are provided free of charge. Re-delivery after this period, or requests for additional file formats not included in the original scope, are billed at our standard hourly rate.",
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
              Legal & Terms
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6">
            Service<br />
            <span className="font-semibold italic">Policy.</span>
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60 max-w-xl leading-relaxed">
            Everything you need to know about how we work, what to expect, and the terms that govern our collaboration. Last updated: January 2026.
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
                  <a href="mailto:hello@zenlumeyoga.com" className="text-[oklch(0.38_0.09_162)] hover:underline underline-offset-2">
                    hello@zenlumeyoga.com
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
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
            We respond within 24 hours. Every project begins with a conversation.
          </p>
          <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center px-10 py-3.5 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] uppercase text-white bg-[oklch(0.38_0.09_162)] group"
          >
            <span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">Get In Touch</span>
          </Link>
        </div>
      </section>
    </>
  );
}
