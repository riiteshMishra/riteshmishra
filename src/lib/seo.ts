import type { Metadata } from "next";

export const siteConfig = {
  name: "Ritesh Mishra",
  title: "Ritesh Mishra — Full Stack Developer",
  description:
    "Portfolio of Ritesh Mishra, a Full Stack Developer building modern, scalable web applications.",
  url: "https://www.riteshmishra.online",
  locale: "en_IN",
  image: "/opengraph-image",
  github: "https://github.com/riiteshmishra",
} as const;

export const siteUrl = new URL(siteConfig.url);

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export const createPageMetadata = ({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata => ({
  title: path === "/" ? { absolute: title } : title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: path,
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
});

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteUrl("/ritesh-mishra.jpg"),
  jobTitle: "Full Stack Developer",
  sameAs: [siteConfig.github],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};
