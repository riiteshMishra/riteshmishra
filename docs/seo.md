# SEO maintenance

Global SEO settings live in `src/lib/seo.ts`. It contains the production origin, default identity, social metadata values, canonical URL helper, and JSON-LD data.

For a new public route, export `metadata` from its server `page.tsx` using `createPageMetadata` with the route's title, description, and canonical path. Do not add metadata exports to a client page; remove an unnecessary `"use client"` boundary or use a server wrapper instead.

`src/app/sitemap.ts` lists the canonical, indexable static routes. Add a route only after it is public and has metadata. Leave out redirects, 404s, previews, private routes, and routes that should not be indexed. Use real modification dates only when the source provides them.

`src/app/robots.ts` publishes the sitemap location and permits public crawling. Non-indexable pages should use page-level metadata with `robots: { index: false, follow: false }`; access control must not rely on robots.txt.

The root layout emits `WebSite` and `Person` JSON-LD from the centralized configuration. Keep the person details and social URLs accurate. `src/app/opengraph-image.tsx` generates the default sharing image, and `src/app/manifest.ts` provides the web manifest.

Before deployment, run `npx tsc --noEmit`, `npm run lint`, and `npm run build`, then inspect `/robots.txt`, `/sitemap.xml`, and representative page source for canonical, Open Graph, and JSON-LD tags. Submit the production sitemap and complete ownership verification in Google Search Console separately.
