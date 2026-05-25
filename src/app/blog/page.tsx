import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";
import type { PostCard } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Journal — Zenlume Yoga",
  description:
    "Insights on yoga brand building, fabric selection, custom production, and the business of wellness — from the Zenlume studio.",
};

// ISR: revalidate every 60 seconds
// When you publish a new post in Sanity, it appears here within 60 seconds
export const revalidate = 60;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await client.fetch<PostCard[]>(POSTS_QUERY);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[oklch(0.13_0.005_60)] pt-32 pb-24 overflow-hidden">
        {/* Decorative background text */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-cormorant)] text-[18vw] font-bold leading-none text-white/[0.03] whitespace-nowrap select-none"
        >
          Journal
        </span>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="section-eyebrow">
            <span className="eyebrow-text">Zenlume Journal</span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6">
            Ideas on building<br />
            <em>a yoga brand.</em>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            Fabric guides, branding insights, production tips and studio stories —
            written for designers and brand founders who are building something real.
          </p>
        </div>
      </section>

      {/* ── Post Grid ── */}
      <section className="bg-[oklch(0.97_0.005_80)] py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {posts.length === 0 ? (
            /* Empty state — shown before any posts are published in Sanity */
            <div className="text-center py-32">
              <p className="font-[family-name:var(--font-cormorant)] text-4xl text-[oklch(0.13_0.005_60)] mb-4">
                Coming soon.
              </p>
              <p className="text-[oklch(0.55_0.008_60)] text-sm tracking-widest uppercase">
                The first articles are on their way.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <PostCard key={post._id} post={post} featured={i === 0} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[oklch(0.13_0.005_60)] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-white font-light mb-6">
            Ready to bring your<br />
            <em>yoga brand to life?</em>
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Start Your Order</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ── Post Card Component ──────────────────────────────────────────────────────

function PostCard({ post, featured }: { post: PostCard; featured?: boolean }) {
  const slug = post.slug?.current ?? post._id;

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group flex flex-col bg-white overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Cover image */}
      <div className="relative w-full aspect-[16/10] bg-[oklch(0.9_0.005_80)] overflow-hidden">
        {post.mainImageUrl ? (
          <Image
            src={post.mainImageUrl}
            alt={post.mainImageAlt ?? post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Placeholder when no cover image is set */
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[family-name:var(--font-cormorant)] text-6xl text-[oklch(0.8_0.005_80)] font-light select-none">
              Z
            </span>
          </div>
        )}

        {/* Category badge */}
        {post.categories && post.categories.length > 0 && (
          <span className="absolute top-4 left-4 bg-[oklch(0.38_0.09_162)] text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1">
            {post.categories[0]}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Date */}
        {post.publishedAt && (
          <p className="text-[oklch(0.55_0.008_60)] text-xs tracking-[0.15em] uppercase mb-3">
            {formatDate(post.publishedAt)}
          </p>
        )}

        {/* Title */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[oklch(0.13_0.005_60)] leading-snug mb-3 group-hover:text-[oklch(0.38_0.09_162)] transition-colors duration-200">
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[oklch(0.45_0.008_60)] text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>
        )}

        {/* Read more */}
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-[oklch(0.38_0.09_162)] text-xs font-semibold tracking-[0.15em] uppercase">
            Read Article
          </span>
          <span className="text-[oklch(0.38_0.09_162)] transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
