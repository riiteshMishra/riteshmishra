import type { Metadata } from "next";

import {
  anton,
  moldie,
  qurova,
  roboto,
  transcity,
  headlineSans,
  headlineMozi,
  headlineFin,
} from "@/fonts";

import "./globals.css";
import Providers from "@/providers";
import Navbar from "@/components/core/navbar";

export const metadata: Metadata = {
  title: "Ritesh Mishra — Full Stack Developer",
  description:
    "Portfolio of Ritesh Mishra, a Full Stack Developer building modern and scalable web applications.",
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
        ${qurova.variable}
        ${anton.variable}
        ${moldie.variable}
        ${transcity.variable}
        ${roboto.variable}
        ${headlineSans.variable}
        ${headlineMozi.variable}
        ${headlineFin.variable}
      `}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
