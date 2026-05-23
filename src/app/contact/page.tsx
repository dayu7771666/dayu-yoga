import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Zenlume Yoga",
  description:
    "Start your yoga brand project with Zenlume Yoga. Reach out for logo design, premium packaging, or a full brand identity. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
