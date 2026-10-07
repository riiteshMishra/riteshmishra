import Link from "next/link";
import { ArrowUpRight, GitBranch, Link2, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-headline-mozi text-2xl font-bold tracking-tight"
            >
              Ritesh<span className="text-accent-green">.</span>
            </Link>

            <p className="mt-4 max-w-sm font-roboto text-sm leading-6 text-text-muted">
              Full Stack Developer focused on building modern, scalable and
              meaningful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-roboto text-sm font-semibold">Navigation</h2>

            <nav className="mt-4 flex flex-col items-start gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/experience" },
                { label: "Skills", href: "/skills" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-roboto text-sm text-text-muted transition-colors hover:text-accent-green"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h2 className="font-roboto text-sm font-semibold">Connect</h2>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/Parle-ji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-text-muted transition-all duration-300 hover:border-accent-green/30 hover:text-accent-green"
              >
                <GitBranch className="size-4" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-text-muted transition-all duration-300 hover:border-accent-green/30 hover:text-accent-green"
              >
                <Link2 className="size-4" />
              </a>

              <a
                href="mailto:hello@riteshmishra.online"
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-text-muted transition-all duration-300 hover:border-accent-green/30 hover:text-accent-green"
              >
                <Mail className="size-4" />
              </a>
            </div>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 font-roboto text-sm font-medium text-accent-green"
            >
              Let&apos;s work together
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-roboto text-xs text-text-muted">
            © {new Date().getFullYear()} Ritesh Mishra. All rights reserved.
          </p>

          <p className="font-roboto text-xs text-text-muted">
            Built with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
