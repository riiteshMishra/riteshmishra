import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

export const aboutFacts = [
  {
    label: "Role",
    value: "Full Stack Developer",
  },
  {
    label: "Primary Stack",
    value: "React · Next.js · Node.js",
  },
  {
    label: "Interested In",
    value: "Scalable Web Products",
  },
];

export interface WhatIBuildItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whatIBuildItems: WhatIBuildItem[] = [
  {
    icon: Globe,
    title: "Modern Frontend",
    description:
      "Responsive and interactive interfaces using React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "REST APIs, authentication, validation, business logic and scalable server-side architecture.",
  },
  {
    icon: Database,
    title: "Data & APIs",
    description:
      "MongoDB, Mongoose, Redis and structured APIs designed around real application requirements.",
  },
];

export interface TechStackItem {
  icon: LucideIcon;
  title: string;
  color: "green" | "purple";
  technologies: string[];
  delay?: number;
}

export const techStack: TechStackItem[] = [
  {
    icon: Layers3,
    title: "Frontend",
    color: "green",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "purple",
    delay: 0.1,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "REST APIs",
      "JWT",
      "Zod",
    ],
  },
  {
    icon: Terminal,
    title: "Tools & Services",
    color: "green",
    technologies: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Axios",
      "Razorpay",
      "Firebase",
      "Sentry",
    ],
  },
  {
    icon: Code2,
    title: "Engineering",
    color: "purple",
    delay: 0.1,
    technologies: [
      "Authentication",
      "Authorization",
      "API Design",
      "Validation",
      "Caching",
      "Rate Limiting",
      "Error Handling",
      "Deployment",
    ],
  },
];

export interface DevelopmentStep {
  number: string;
  title: string;
  description: string;
}

export const developmentApproach: DevelopmentStep[] = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Before writing code, I try to understand what the product actually needs and what problem it is solving.",
  },
  {
    number: "02",
    title: "Design the architecture",
    description:
      "I break the system into manageable parts and think about data flow, APIs, authentication and maintainability.",
  },
  {
    number: "03",
    title: "Build the experience",
    description:
      "I focus on creating interfaces that feel responsive, intuitive and consistent across different devices.",
  },
  {
    number: "04",
    title: "Improve and iterate",
    description:
      "I test, debug, monitor and continuously improve the application instead of treating deployment as the finish line.",
  },
];
