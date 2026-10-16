/**
 * Global responsive layout utilities
 * Mobile-first | Tailwind CSS
 */

// Main page container
export const pageShell = [
  "mx-auto w-full",
  "max-w-7xl",
  "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12",
  "py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24",
].join(" ");

// Full-width section with responsive horizontal padding
export const pageSection = [
  "w-full",
  "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12",
  "pt-10 sm:py-12 md:py-16 lg:py-20 xl:py-24",
].join(" ");

// Page hero layout
export const pageHero = [
  "w-full max-w-4xl",
  "mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24",
].join(" ");

// Spacing between major sections
export const sectionGap = ["mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24"].join(
  " ",
);

// Optional: Responsive grid layout
export const pageGrid = [
  "grid grid-cols-1",
  "gap-4 sm:gap-5 md:gap-6 lg:gap-8",
  "md:grid-cols-2 xl:grid-cols-3",
].join(" ");

// Optional: Responsive heading
export const pageHeading = [
  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  "font-bold tracking-tight leading-[1.1]",
].join(" ");
