import type { MetadataRoute } from "next";

/**
 * Testing phase: disallow all crawlers.
 * When ready to go live, change disallow to allow: "/" and remove the
 * robots block from layout.tsx.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
