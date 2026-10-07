import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  startIcon,
  endIcon,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-roboto text-sm font-medium transition-all duration-300";

  const variants = {
    primary: "bg-accent-green text-black hover:scale-105",
    secondary:
      "border border-border bg-card text-text-primary hover:border-accent-green/50",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {startIcon && (
        <span className="shrink-0" aria-hidden="true">
          {startIcon}
        </span>
      )}

      <span>{children}</span>

      {endIcon && (
        <span className="shrink-0" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </Link>
  );
};

export default Button;
