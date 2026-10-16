import {
  Home,
  User,
  FolderKanban,
  Sparkles,
  //   Briefcase,
  //   History,
  Mail,
} from "lucide-react";

export const navigationRoutes = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/skills", label: "Skills", icon: Sparkles },
  //   { href: "/services", label: "Services", icon: Briefcase },
  //   { href: "/experience", label: "Experience", icon: History },
  { href: "/contact", label: "Contact", icon: Mail },
];
