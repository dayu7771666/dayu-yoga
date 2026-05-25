// ─── Sanity Blog Types ────────────────────────────────────────────────────────

/** Portable Text block (Sanity rich text format) */
export interface PortableTextBlock {
  _type: string;
  _key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/** Post card — used on the blog list page */
export interface PostCard {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  author?: string;
  category?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  coverImageCaption?: string;
}

/** Full post — used on the blog detail page */
export interface PostFull extends PostCard {
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  ogImageUrl?: string;
  ogImageAlt?: string;
}

/** Slug item — used for generateStaticParams */
export interface PostSlug {
  slug: string;
}
