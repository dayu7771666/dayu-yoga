"use client";
import { useState, useRef } from "react";

// ── Form field definitions ────────────────────────────────────────────────────

const PRODUCT_OPTIONS = [
  "Leggings",
  "Sports Bras",
  "Tops",
  "Matching Sets",
  "Jackets / Outerwear",
  "Custom Packaging",
  "Logo Application",
  "Other",
];

const QUANTITY_OPTIONS = [
  "50–100 pcs",
  "100–300 pcs",
  "300–500 pcs",
  "500–1000 pcs",
  "1000+ pcs",
];

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  brand: string;
  product: string;
  quantity: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface InquiryFormProps {
  /** Visual theme: "dark" for dark background sections, "light" for white/off-white */
  theme?: "dark" | "light";
  /** Optional heading shown above the form */
  heading?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function InquiryForm({ theme = "dark", heading }: InquiryFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    brand: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const isDark = theme === "dark";

  // Style helpers
  const labelCls = `block font-[family-name:var(--font-montserrat)] text-xs tracking-[0.15em] uppercase mb-2 ${
    isDark ? "text-white/40" : "text-[oklch(0.55_0.008_60)]"
  }`;
  const inputCls = `w-full px-4 py-3 text-sm outline-none transition-all duration-200 ${
    isDark
      ? "bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-[oklch(0.38_0.09_162)] focus:bg-white/8"
      : "bg-white border border-[oklch(0.88_0.005_80)] text-[oklch(0.13_0.005_60)] placeholder:text-[oklch(0.75_0.005_60)] focus:border-[oklch(0.38_0.09_162)]"
  }`;
  const selectCls = `${inputCls} cursor-pointer appearance-none`;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Submission failed. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", brand: "", product: "", quantity: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  // ── Success state ──
  if (status === "success") {
    return (
      <div className={`flex flex-col items-center justify-center py-16 px-8 text-center ${isDark ? "" : "bg-white border border-[oklch(0.88_0.005_80)]"}`}>
        <div className="w-12 h-12 rounded-full border border-[oklch(0.38_0.09_162)] flex items-center justify-center mb-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10L8.5 14.5L16 6" stroke="oklch(0.38 0.09 162)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className={`font-[family-name:var(--font-cormorant)] text-3xl font-light mb-3 ${isDark ? "text-white" : "text-[oklch(0.13_0.005_60)]"}`}>
          Inquiry received.
        </p>
        <p className={`text-sm leading-relaxed max-w-xs ${isDark ? "text-white/50" : "text-[oklch(0.55_0.008_60)]"}`}>
          We&apos;ll review your production brief and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs tracking-[0.15em] uppercase text-[oklch(0.38_0.09_162)] hover:opacity-70 transition-opacity"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  // ── Form ──
  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      {heading && (
        <p className={`font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase mb-6 ${isDark ? "text-[oklch(0.38_0.09_162)]" : "text-[oklch(0.38_0.09_162)]"}`}>
          {heading}
        </p>
      )}

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="inq-name" className={labelCls}>Your Name *</label>
          <input
            id="inq-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Designer"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelCls}>Email *</label>
          <input
            id="inq-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="hello@yourbrand.com"
            required
            className={inputCls}
          />
        </div>
      </div>

      {/* Row 2: Brand Name */}
      <div className="mb-4">
        <label htmlFor="inq-brand" className={labelCls}>Brand Name</label>
        <input
          id="inq-brand"
          type="text"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Your brand name (optional)"
          className={inputCls}
        />
      </div>

      {/* Row 3: Product Type + Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <label htmlFor="inq-product" className={labelCls}>Product Type *</label>
          <select
            id="inq-product"
            name="product"
            value={form.product}
            onChange={handleChange}
            required
            className={selectCls}
          >
            <option value="">Select product</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {/* Custom chevron */}
          <svg
            className="pointer-events-none absolute right-4 top-[calc(50%+10px)] -translate-y-1/2"
            width="10" height="6" viewBox="0 0 10 6" fill="none"
          >
            <path d="M1 1L5 5L9 1" stroke={isDark ? "rgba(255,255,255,0.3)" : "oklch(0.55 0.008 60)"} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="relative">
          <label htmlFor="inq-quantity" className={labelCls}>Estimated Quantity *</label>
          <select
            id="inq-quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
            className={selectCls}
          >
            <option value="">Select quantity</option>
            {QUANTITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-[calc(50%+10px)] -translate-y-1/2"
            width="10" height="6" viewBox="0 0 10 6" fill="none"
          >
            <path d="M1 1L5 5L9 1" stroke={isDark ? "rgba(255,255,255,0.3)" : "oklch(0.55 0.008 60)"} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Row 4: Production Brief */}
      <div className="mb-6">
        <label htmlFor="inq-message" className={labelCls}>Production Brief *</label>
        <textarea
          id="inq-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          placeholder="Describe your specs: fabric type, print technique, logo application method, packaging material, colorways, or any specific requirements. The more detail, the faster we can quote."
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="text-red-400 text-xs tracking-wide mb-4">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>
          {status === "loading" ? "Sending..." : "Submit Production Inquiry"}
        </span>
      </button>

      <p className={`text-xs mt-4 text-center ${isDark ? "text-white/25" : "text-[oklch(0.7_0.005_60)]"}`}>
        We respond within 24 hours · Mon – Sat 9:00–18:00 CST
      </p>
    </form>
  );
}
