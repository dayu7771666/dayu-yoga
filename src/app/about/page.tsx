import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us — Zenlume Yoga",
  description:
    "Learn about Zenlume Yoga's story, philosophy, and the studio behind the brand. Built for designers and founders who believe in intentional design.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
