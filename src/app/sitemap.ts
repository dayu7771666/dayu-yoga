import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { POST_SLUGS_QUERY } from "@/sanity/queries";
import type { PostSlug } from "@/sanity/types";

const BASE_URL = "https://yogaoh.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Static pages ──────────────────────────────────────────────────────
  const staticPages = [
    { url: BASE_URL, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/collections/yoga`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/collections/accessories`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/collections/logo`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/collections/packaging`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/products/leggings`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/capri`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/shorts`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/sports-bras`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/fitted-tops`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/relaxed-tops`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/matching-sets`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/jackets`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/products/winter`, changeFrequency: "seasonal" as const, priority: 0.5 },
    { url: `${BASE_URL}/policy`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // ── Blog posts (fetched from Sanity) ──────────────────────────────────
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const slugs = await client.fetch<PostSlug[]>(POST_SLUGS_QUERY);
    blogEntries = slugs.map((item) => ({
      url: `${BASE_URL}/blog/${item.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));
  } catch {
    // If Sanity is unreachable (e.g. during build without network), skip blog posts
  }

  return [...staticPages, ...blogEntries];
}
