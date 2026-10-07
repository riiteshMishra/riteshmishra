export interface Experience {
  number: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  link?: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    number: "01",
    role: "Full Stack Developer",
    company: "Real Battle",
    duration: "2025 — Present",
    description:
      "Building a tournament and gaming platform with a focus on scalable frontend architecture, backend systems, authentication and reliable APIs.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
    ],
    responsibilities: [
      "Designed and developed the frontend using Next.js and React.",
      "Built REST APIs and backend business logic with Node.js and Express.",
      "Implemented authentication, authorization and session management.",
      "Worked with MongoDB, Mongoose and Redis for application data and caching.",
      "Focused on security, validation, rate limiting and production reliability.",
    ],
    link: "https://real-battle-client.vercel.app",
    current: true,
  },
  {
    number: "02",
    role: "Self-Taught Developer",
    company: "Independent Learning & Projects",
    duration: "2023 — Present",
    description:
      "Learning full-stack development by building real applications, experimenting with different technologies and solving practical engineering problems.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Git",
    ],
    responsibilities: [
      "Built multiple frontend and full-stack applications from scratch.",
      "Learned modern React and Next.js development patterns.",
      "Developed REST APIs using Node.js and Express.",
      "Worked with databases, authentication and third-party services.",
      "Continuously improved code quality, architecture and development workflow.",
    ],
  },
];
