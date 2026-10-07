export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillsHero = {
  eyebrow: "Skills & Expertise",
  title: "Tools I use to build.",
  description:
    "A practical toolkit built through hands-on projects, experimentation and continuous learning across the full-stack development ecosystem.",
};

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building responsive, interactive and maintainable interfaces with modern React-based technologies.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Responsive Design",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Designing APIs, business logic and server-side systems that support real-world applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "TypeScript",
      "JWT",
      "Zod",
      "Authentication",
      "Authorization",
      "API Design",
      "Error Handling",
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    description:
      "Working with application data, persistence, caching and database-driven architectures.",
    skills: [
      "MongoDB",
      "Mongoose",
      "Redis",
      "Database Design",
      "Data Modeling",
      "Caching",
    ],
  },
  {
    id: "security",
    title: "Authentication & Security",
    description:
      "Implementing secure application flows with authentication, authorization, validation and session management.",
    skills: [
      "Firebase Authentication",
      "Firebase Admin",
      "JWT",
      "Session Management",
      "Role-Based Access Control",
      "Rate Limiting",
      "Input Validation",
      "Secure Cookies",
    ],
  },
  {
    id: "tools",
    title: "Tools & Services",
    description:
      "Using modern development and deployment tools to build, test, monitor and maintain applications.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Axios",
      "Sentry",
      "Razorpay",
      "Vercel",
      "Render",
      "Railway",
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Architecture",
    description:
      "Focusing on maintainability, scalability and production reliability beyond individual features.",
    skills: [
      "Full-Stack Architecture",
      "API Architecture",
      "Component Architecture",
      "State Management",
      "Caching",
      "Rate Limiting",
      "Error Handling",
      "Production Debugging",
      "Performance Optimization",
      "Deployment",
    ],
  },
];

export const skillsCta = {
  eyebrow: "Always Learning",
  title: "The stack keeps evolving.",
  description:
    "I'm continuously exploring better tools, patterns and engineering practices to build software that is simpler, faster and more reliable.",
  buttonLabel: "View My Projects",
  buttonHref: "/projects",
};
