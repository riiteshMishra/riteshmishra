export interface TechNode {
  id: string;
  label: string;
  category: "Frontend" | "Backend" | "Database" | "Infrastructure" | "Architecture";
  description: string;
  usage: string;
  projects?: string[];
  position: [number, number, number];
}

export const techNodes: TechNode[] = [
  // Frontend
  {
    id: "react",
    label: "React.js",
    category: "Frontend",
    description: "A component-based library for building interactive user interfaces.",
    usage: "Used across my portfolio and full-stack projects for building responsive, reusable UI.",
    projects: ["Real Battle", "Library Management", "Portfolio"],
    position: [1.6, 1.2, 0.8],
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "Frontend",
    description: "A React framework providing routing, server-side rendering, and production optimizations.",
    usage: "Used for this portfolio and the Real Battle frontend.",
    projects: ["Real Battle", "Portfolio"],
    position: [2.0, 0.4, 0.6],
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "Frontend",
    description: "A typed superset of JavaScript that improves maintainability and developer safety.",
    usage: "Used in the portfolio and TypeScript-based projects.",
    projects: ["Real Battle", "Library Management", "Portfolio"],
    position: [1.4, -0.2, 1.0],
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    category: "Frontend",
    description: "A utility-first CSS framework for building consistent, responsive interfaces.",
    usage: "Used across the portfolio UI for styling and responsive layouts.",
    projects: ["Portfolio", "Library Management"],
    position: [2.2, -0.8, 0.4],
  },
  // Backend
  {
    id: "nodejs",
    label: "Node.js",
    category: "Backend",
    description: "A JavaScript runtime for building server-side applications and APIs.",
    usage: "Used to build REST APIs and backend services for my full-stack projects.",
    projects: ["Real Battle", "Homework Backend", "Event Management Platform"],
    position: [-1.6, 1.2, -0.8],
  },
  {
    id: "express",
    label: "Express.js",
    category: "Backend",
    description: "A minimal web framework for Node.js used to structure APIs and middleware.",
    usage: "Used to build REST APIs, routing, and middleware in backend projects.",
    projects: ["Real Battle", "Homework Backend", "Event Management Platform"],
    position: [-2.0, 0.4, -0.6],
  },
  {
    id: "rest-apis",
    label: "REST APIs",
    category: "Backend",
    description: "HTTP-based API design for client-server communication.",
    usage: "Designed and implemented REST endpoints across full-stack applications.",
    projects: ["Real Battle", "Homework Backend"],
    position: [-1.4, -0.2, -1.0],
  },
  {
    id: "authentication",
    label: "Authentication",
    category: "Backend",
    description: "Securing applications through login, sessions, JWT, and role-based access.",
    usage: "Implemented authentication and authorization flows in full-stack projects.",
    projects: ["Real Battle", "Homework Backend"],
    position: [-2.2, -0.8, -0.4],
  },
  // Database
  {
    id: "mongodb",
    label: "MongoDB",
    category: "Database",
    description: "A document-oriented NoSQL database for flexible application data.",
    usage: "Used as the primary database in my full-stack projects.",
    projects: ["Real Battle", "EdTech Platform", "Event Management Platform", "Homework Backend"],
    position: [0.8, -1.6, 1.0],
  },
  {
    id: "mongoose",
    label: "Mongoose",
    category: "Database",
    description: "An ODM for MongoDB providing schema modeling and validation.",
    usage: "Used for data modeling, validation, and database interactions.",
    projects: ["Real Battle", "Homework Backend"],
    position: [-0.8, -1.6, 1.0],
  },
  // Infrastructure
  {
    id: "git",
    label: "Git",
    category: "Infrastructure",
    description: "Version control for tracking and managing code changes.",
    usage: "Used daily for version control across all projects.",
    position: [0.8, 1.6, -1.0],
  },
  {
    id: "github",
    label: "GitHub",
    category: "Infrastructure",
    description: "Hosting and collaboration platform for source code.",
    usage: "Used to host and manage project repositories.",
    position: [-0.8, 1.6, -1.0],
  },
  {
    id: "deployment",
    label: "Deployment",
    category: "Infrastructure",
    description: "Shipping applications to production environments.",
    usage: "Deployed projects using Vercel and other hosting platforms.",
    projects: ["Portfolio", "Real Battle"],
    position: [1.2, 0.0, -1.8],
  },
  {
    id: "cloudflare",
    label: "Cloudflare",
    category: "Infrastructure",
    description: "CDN, DNS, and security services for web applications.",
    usage: "Listed as part of infrastructure interests; not currently used in shipped projects.",
    position: [-1.2, 0.0, -1.8],
  },
  // Architecture
  {
    id: "system-design",
    label: "System Design",
    category: "Architecture",
    description: "Structuring scalable, maintainable application architecture.",
    usage: "Applied when designing full-stack application structure and data flow.",
    position: [0.0, 2.0, 0.2],
  },
  {
    id: "api-design",
    label: "API Design",
    category: "Architecture",
    description: "Designing consistent, predictable API contracts.",
    usage: "Applied when designing REST API endpoints and request/response shapes.",
    position: [0.0, -2.0, 0.2],
  },
  {
    id: "auth-architecture",
    label: "Auth Architecture",
    category: "Architecture",
    description: "Designing authentication and authorization systems.",
    usage: "Applied when planning secure access flows and role-based permissions.",
    position: [2.4, 0.0, -0.2],
  },
  {
    id: "performance",
    label: "Performance Optimization",
    category: "Architecture",
    description: "Improving load times, rendering efficiency, and runtime performance.",
    usage: "Applied across frontend and backend to keep applications fast and reliable.",
    position: [-2.4, 0.0, -0.2],
  },
];

export const categoryColors: Record<TechNode["category"], string> = {
  Frontend: "#34d399",
  Backend: "#a5b4fc",
  Database: "#fbbf24",
  Infrastructure: "#60a5fa",
  Architecture: "#f472b6",
};
