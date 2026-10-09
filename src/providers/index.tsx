"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";

type ProvidersProps = {
  children: React.ReactNode;
};

// PROVIDERS -
const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
};

export default Providers;
