import type { Metadata } from "next";

import { anton, roboto, headlineSans, headlineMozi } from "@/fonts";

import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { personJsonLd, siteConfig, siteUrl, websiteJsonLd } from "@/lib/seo";
import Providers from "@/providers";
import SiteChrome from "@/components/common/SiteChrome";
import Navigation from "@/components/common/navigation";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.title,
    template: "%s | Ritesh Mishra",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  verification: {
    google: "-_asqf_32tcIBsfVbbdCQhy7cOnHdO3wYAu1dJ-I-oU",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${anton.variable}
        ${roboto.variable}
        ${headlineSans.variable}
        ${headlineMozi.variable}
      `}
    >
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={personJsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent-green focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Providers>
          <SiteChrome>{children}</SiteChrome>
          <Navigation />
        </Providers>
      </body>
    </html>
  );
}
