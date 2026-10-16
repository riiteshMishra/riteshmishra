import Link from "next/link";
import { ArrowUpRight, GitBranch, Link2, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Parle-ji",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Link2,
  },
  {
    label: "Email",
    href: "mailto:hello@riteshmishra.online",
    icon: Mail,
  },
];

const FooterConnect = () => {
  return (
    <div>
      <h2 className="font-roboto text-sm font-semibold">Connect</h2>

      <div className="mt-4 flex items-center gap-3">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-text-muted transition-all duration-300 hover:border-accent-green/30 hover:text-accent-green"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>

      <Link
        href="/contact"
        className="mt-5 inline-flex items-center gap-2 font-roboto text-sm font-medium text-accent-green"
      >
        Let&apos;s work together
        <ArrowUpRight className="size-4" />
      </Link>
    </div>
  );
};

export default FooterConnect;
