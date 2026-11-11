import type { Metadata } from "next";

import NotFoundContent from "@/components/common/NotFoundContent";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const NotFound = () => {
  return <NotFoundContent />;
};

export default NotFound;
