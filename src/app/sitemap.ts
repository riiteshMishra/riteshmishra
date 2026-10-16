import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { publicRoutes } from "@/lib/public-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({ url: absoluteUrl(path) }));
}
