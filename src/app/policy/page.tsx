import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PolicyPageContent from "@/components/PolicyPageContent";

export const metadata: Metadata = {
  title: "Service Policy — Zenlume Yoga",
  description:
    "Understand Zenlume Yoga's service terms, revision policy, delivery timelines, confidentiality agreements, and refund policy.",
};

export default function PolicyPage() {
  return (
    <main>
      <Navbar />
      <PolicyPageContent />
      <Footer />
    </main>
  );
}
