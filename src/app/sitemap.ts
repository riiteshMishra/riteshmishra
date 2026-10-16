import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

const publicRoutes = ["/", "/about", "/projects", "/skills", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({ url: absoluteUrl(path) }));
}
