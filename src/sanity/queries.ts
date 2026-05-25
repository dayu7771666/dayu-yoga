// ─── GROQ Queries for Blog ───────────────────────────────────────────────────

/**
 * Blog list page: fetch all published posts, ordered newest first.
 * Returns only the fields needed for the card layout.
 */
export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  "categories": categories[]->title,
  "authorName": author->name,
  "authorImageUrl": author->image.asset->url
}`;

/**
 * Blog detail page: fetch a single post by slug.
 * Returns the full body content plus all metadata.
 */
export const POST_QUERY = `*[
  _type == "post"
  && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  "categories": categories[]->title,
  "authorName": author->name,
  "authorImageUrl": author->image.asset->url,
  "authorBio": author->bio
}`;

/**
 * Slugs for generateStaticParams — pre-render all post pages at build time.
 */
export const POST_SLUGS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]{ "slug": slug.current }`;
