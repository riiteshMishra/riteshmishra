import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/riiteshmishra",
    icon: BsGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ritesh-mishra-059519352",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:riteshmishra.dev@gmail.com",
    icon: FaMailBulk,
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
            target={"_blank"}
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
        className="mt-5 inline-flex items-center gap-2 font-roboto text-sm font-medium text-accent-green group hover:scale-105"
      >
        Let&apos;s work together
        <ArrowRight className="size-4 group-hover:translate-x-1  transition-all duration-75" />
      </Link>
    </div>
  );
};

export default FooterConnect;
