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

  return {
    title: `${post.title} — Zenlume Yoga Journal`,
    description: post.excerpt ?? "Read the latest from the Zenlume Yoga studio.",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImageUrl ? [{ url: post.mainImageUrl }] : [],
      type: "article",
      publishedTime: post.publishedAt,
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
// These map Sanity's rich text blocks to styled HTML elements.
const ptComponents = {
  types: {
    image: ({ value }: { value: { asset?: { url?: string }; alt?: string } }) => {
      if (!value?.asset?.url) return null;
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={value.asset.url}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.alt && (
            <figcaption className="mt-3 text-center text-xs text-[oklch(0.55_0.008_60)] tracking-wide">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href?: string };
    }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[oklch(0.38_0.09_162)] underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
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

  // Fetch current post and related posts in parallel
  const [post, allPosts] = await Promise.all([
    client.fetch<PostFull | null>(POST_QUERY, { slug }),
    client.fetch<PostCard[]>(POSTS_QUERY),
  ]);

  if (!post) notFound();

  // Related posts: same category, excluding current
  const related = allPosts
    .filter(
      (p) =>
        p._id !== post._id &&
        p.categories?.some((c) => post.categories?.includes(c))
    )
    .slice(0, 3);

  // Fallback: latest 3 posts if no category match
  const relatedPosts =
    related.length > 0
      ? related
      : allPosts.filter((p) => p._id !== post._id).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[oklch(0.13_0.005_60)] pt-32 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 text-xs tracking-[0.15em] uppercase hover:text-white transition-colors mb-10"
          >
            <span>←</span> Journal
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-[oklch(0.38_0.09_162)] text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light text-white leading-[1.05] mb-6">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 text-white/50 text-xs tracking-[0.12em] uppercase">
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            {post.authorName && (
              <>
                <span className="w-px h-3 bg-white/20" />
                <div className="flex items-center gap-2">
                  {post.authorImageUrl && (
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={post.authorImageUrl}
                        alt={post.authorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span>{post.authorName}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Cover image — full bleed, overlapping into content */}
        {post.mainImageUrl && (
          <div className="relative w-full aspect-[21/9] max-h-[520px] overflow-hidden">
            <Image
              src={post.mainImageUrl}
              alt={post.mainImageAlt ?? post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.97_0.005_80)] via-transparent to-transparent" />
          </div>
        )}
      </section>

      {/* ── Article Body ── */}
      <section className="bg-[oklch(0.97_0.005_80)] py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Excerpt / lead */}
          {post.excerpt && (
            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[oklch(0.25_0.005_60)] leading-relaxed mb-12 border-l-2 border-[oklch(0.38_0.09_162)] pl-6">
              {post.excerpt}
            </p>
          )}

          {/* Body — Portable Text rendered with prose styles */}
          {post.body ? (
            <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-cormorant)] prose-headings:font-light prose-headings:text-[oklch(0.13_0.005_60)] prose-p:text-[oklch(0.35_0.005_60)] prose-p:leading-relaxed prose-a:text-[oklch(0.38_0.09_162)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[oklch(0.13_0.005_60)] prose-blockquote:border-[oklch(0.38_0.09_162)] prose-blockquote:text-[oklch(0.45_0.008_60)] prose-img:rounded-none">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          ) : (
            <p className="text-[oklch(0.55_0.008_60)] italic">
              Article content coming soon.
            </p>
          )}

          {/* Author bio */}
          {post.authorName && (
            <div className="mt-16 pt-10 border-t border-[oklch(0.88_0.005_80)] flex items-start gap-5">
              {post.authorImageUrl && (
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={post.authorImageUrl}
                    alt={post.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[oklch(0.38_0.09_162)] mb-1">
                  Written by
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-[oklch(0.13_0.005_60)]">
                  {post.authorName}
                </p>
                {post.authorBio && (
                  <div className="text-sm text-[oklch(0.55_0.008_60)] mt-1 leading-relaxed">
                    <PortableText value={post.authorBio} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-20">
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
                    {p.mainImageUrl ? (
                      <Image
                        src={p.mainImageUrl}
                        alt={p.mainImageAlt ?? p.title}
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
