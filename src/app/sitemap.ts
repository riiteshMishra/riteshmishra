import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { publicRoutes } from "@/lib/public-routes";

const routePriority: Record<string, number> = {
  "/": 1.0,
  "/about": 0.8,
  "/projects": 0.9,
  "/skills": 0.7,
  "/services": 0.7,
  "/experience": 0.7,
  "/contact": 0.6,
};

const routeChangeFrequency: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  "/": "weekly",
  "/about": "monthly",
  "/projects": "monthly",
  "/skills": "monthly",
  "/services": "monthly",
  "/experience": "monthly",
  "/contact": "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: routeChangeFrequency[path] ?? "monthly",
    priority: routePriority[path] ?? 0.5,
  }));
}
