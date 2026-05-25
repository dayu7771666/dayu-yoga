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
  author,
  category,
  "coverImageUrl": image.asset->url,
  "coverImageAlt": image.alt
}`;

/**
 * Blog detail page: fetch a single post by slug.
 * Returns the full body content plus all metadata for SEO.
 * OG image is derived automatically from coverImage on the front end.
 */
export const POST_QUERY = `*[
  _type == "post"
  && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  author,
  category,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "imageUrl": asset->url,
      "imageWidth": asset->metadata.dimensions.width,
      "imageHeight": asset->metadata.dimensions.height
    }
  },
  "coverImageUrl": image.asset->url,
  "coverImageAlt": image.alt,
  seoTitle,
  seoDescription,
  keywords
}`;

/**
 * Slugs for generateStaticParams — pre-render all post pages at build time.
 */
export const POST_SLUGS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]{ "slug": slug.current }`;
