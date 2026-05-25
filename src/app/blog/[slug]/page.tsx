import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";
import { POST_QUERY, POST_SLUGS_QUERY, POSTS_QUERY } from "@/sanity/queries";
import type { PostFull, PostCard, PostSlug } from "@/sanity/types";

// ISR: revalidate every 60 seconds
export const revalidate = 60;

// Pre-render all known slugs at build time
export async function generateStaticParams() {
  const slugs = await client.fetch<PostSlug[]>(POST_SLUGS_QUERY);
  return slugs.map((item) => ({ slug: item.slug }));
}

// Dynamic SEO metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<PostFull | null>(POST_QUERY, { slug });
  if (!post) return { title: "Post Not Found — Zenlume Yoga" };

  // Use dedicated SEO fields if set, otherwise fall back to post content
  const metaTitle = post.seoTitle ?? `${post.title} — Zenlume Yoga Journal`;
  const metaDescription =
    post.seoDescription ?? post.excerpt ?? "Read the latest from the Zenlume Yoga studio.";
  // OG image: prefer dedicated ogImage, then cover image
  const ogImageUrl = post.ogImageUrl ?? post.coverImageUrl;
  const ogImageAlt = post.ogImageAlt ?? post.coverImageAlt ?? post.title;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl
        ? [{ url: ogImageUrl, alt: ogImageAlt, width: 1200, height: 630 }]
        : [],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── Portable Text component overrides ────────────────────────────────────────
const ptComponents = {
  types: {
    // Inline image block — supports imageUrl (from GROQ projection), alt, caption, size
    image: ({
      value,
    }: {
      value: {
        imageUrl?: string;
        alt?: string;
        caption?: string;
        size?: "full" | "large" | "medium";
      };
    }) => {
      if (!value?.imageUrl) return null;

      const sizeClass =
        value.size === "medium"
          ? "max-w-lg mx-auto"
          : value.size === "large"
          ? "max-w-3xl mx-auto"
          : "w-full"; // full (default)

      return (
        <figure className={`my-10 ${sizeClass}`}>
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[oklch(0.93_0.005_80)]">
            <Image
              src={value.imageUrl}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {(value.caption || value.alt) && (
            <figcaption className="mt-3 text-center text-xs text-[oklch(0.55_0.008_60)] tracking-wide italic">
              {value.caption ?? value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[oklch(0.13_0.005_60)] mt-14 mb-5 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[oklch(0.13_0.005_60)] mt-10 mb-4 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[oklch(0.13_0.005_60)] mt-8 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-[oklch(0.38_0.09_162)] pl-6 my-8 font-[family-name:var(--font-cormorant)] text-xl text-[oklch(0.35_0.005_60)] italic leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href?: string; blank?: boolean };
    }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[oklch(0.38_0.09_162)] underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-[oklch(0.93_0.005_80)] text-[oklch(0.35_0.005_60)] px-1.5 py-0.5 text-sm font-mono rounded">
        {children}
      </code>
    ),
  },
};

// ── Page Component ────────────────────────────────────────────────────────────
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch current post and all posts in parallel
  const [post, allPosts] = await Promise.all([
    client.fetch<PostFull | null>(POST_QUERY, { slug }),
    client.fetch<PostCard[]>(POSTS_QUERY),
  ]);

  if (!post) notFound();

  // Related posts: same category, excluding current (max 3)
  const related = allPosts
    .filter((p) => p._id !== post._id && p.category === post.category)
    .slice(0, 3);

  // Fallback: latest posts if no category match
  const relatedPosts =
    related.length >= 3
      ? related
      : [
          ...related,
          ...allPosts
            .filter((p) => p._id !== post._id && !related.find((r) => r._id === p._id))
            .slice(0, 3 - related.length),
        ];

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[oklch(0.10_0.004_60)] pt-32 pb-0 overflow-hidden">
        {post.coverImageUrl && (
          <div className="absolute inset-0 opacity-15">
            <Image
              src={post.coverImageUrl}
              alt={post.coverImageAlt ?? post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.004_60)]/80 via-transparent to-[oklch(0.10_0.004_60)]" />
          </div>
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/blog"
              className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors"
            >
              Journal
            </Link>
            <span className="text-white/20 text-xs">›</span>
            {post.category && (
              <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-[oklch(0.65_0.09_162)]">
                {post.category.replace(/-/g, " ")}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-white/40 font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase">
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            {post.author && (
              <>
                <span className="w-px h-3 bg-white/20" />
                <span>{post.author}</span>
              </>
            )}
          </div>
        </div>

        {/* Cover image — full width below hero text */}
        {post.coverImageUrl && (
          <div className="relative w-full aspect-[21/9] overflow-hidden">
            <Image
              src={post.coverImageUrl}
              alt={post.coverImageAlt ?? post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        )}
        {post.coverImageCaption && (
          <p className="text-center text-xs text-[oklch(0.55_0.008_60)] tracking-wide italic py-3 bg-white">
            {post.coverImageCaption}
          </p>
        )}
      </section>

      {/* ── Article Body ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Excerpt / lead */}
          {post.excerpt && (
            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[oklch(0.25_0.005_60)] leading-relaxed mb-12 border-l-2 border-[oklch(0.38_0.09_162)] pl-6">
              {post.excerpt}
            </p>
          )}

          {/* Body — Portable Text */}
          {post.body ? (
            <div className="prose prose-lg max-w-none
              prose-p:font-[family-name:var(--font-montserrat)]
              prose-p:text-[oklch(0.35_0.005_60)]
              prose-p:leading-relaxed
              prose-p:text-base
              prose-li:font-[family-name:var(--font-montserrat)]
              prose-li:text-[oklch(0.35_0.005_60)]
              prose-li:text-base
              prose-strong:text-[oklch(0.13_0.005_60)]
              prose-img:rounded-none
              prose-figure:my-0">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          ) : (
            <p className="text-[oklch(0.55_0.008_60)] italic">
              Article content coming soon.
            </p>
          )}

          {/* Author */}
          {post.author && (
            <div className="mt-16 pt-10 border-t border-[oklch(0.88_0.005_80)] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[oklch(0.38_0.09_162)] flex items-center justify-center shrink-0">
                <span className="font-[family-name:var(--font-cormorant)] text-white text-lg font-semibold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase text-[oklch(0.55_0.008_60)] mb-0.5">
                  Written by
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[oklch(0.13_0.005_60)]">
                  {post.author}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-[oklch(0.97_0.005_80)] py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="section-eyebrow mb-8">
              <span className="eyebrow-text">Continue Reading</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug?.current ?? p._id}`}
                  className="group flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] bg-[oklch(0.9_0.005_80)] overflow-hidden mb-4">
                    {p.coverImageUrl ? (
                      <Image
                        src={p.coverImageUrl}
                        alt={p.coverImageAlt ?? p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[oklch(0.8_0.005_80)] font-light">
                          Z
                        </span>
                      </div>
                    )}
                  </div>
                  {p.publishedAt && (
                    <p className="text-[oklch(0.55_0.008_60)] text-xs tracking-[0.12em] uppercase mb-2">
                      {formatDate(p.publishedAt)}
                    </p>
                  )}
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[oklch(0.13_0.005_60)] group-hover:text-[oklch(0.38_0.09_162)] transition-colors leading-snug">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
