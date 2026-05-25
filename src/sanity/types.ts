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
  mainImageUrl?: string;
  mainImageAlt?: string;
  categories?: string[];
  authorName?: string;
  authorImageUrl?: string;
}

/** Full post — used on the blog detail page */
export interface PostFull extends PostCard {
  body?: PortableTextBlock[];
  authorBio?: PortableTextBlock[];
}

/** Slug item — used for generateStaticParams */
export interface PostSlug {
  slug: string;
}
