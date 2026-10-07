export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  liveDemo: string;
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "real-battle",
    title: "Real Battle",
    description:
      "A tournament and gaming platform designed for competitive players to discover, join and manage gaming tournaments.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
    ],
    category: "Gaming Platform",
    image: "/projects/real-battle.webp",
    liveDemo: "https://real-battle-client.vercel.app",
    github: "https://github.com/Parle-ji/real-battle-client",
    featured: true,
  },
  {
    id: "edtech-platform",
    title: "EdTech Platform",
    description:
      "An educational platform focused on delivering a structured learning experience with modern frontend architecture and backend services.",
    tags: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
    category: "Education",
    image: "/projects/edtech.webp",
    liveDemo: "#",
    github: "#",
    featured: false,
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    description:
      "A web application concept for managing events, participants and event-related workflows through a centralized platform.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "Management",
    image: "/projects/event-management.webp",
    liveDemo: "#",
    github: "#",
    featured: false,
  },
  {
    id: "homework-backend",
    title: "Homework Backend",
    description:
      "A backend system focused on APIs, authentication, validation and structured data management for an educational workflow.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Zod"],
    category: "Backend",
    image: "/projects/homework.webp",
    liveDemo: "#",
    github: "#",
    featured: false,
  },
  {
    id: "random-gif",
    title: "Random GIF",
    description:
      "A React application for discovering random GIFs with state management implemented using Redux.",
    tags: ["React", "Redux", "JavaScript", "API"],
    category: "Frontend",
    image: "/projects/random-gif.webp",
    liveDemo: "#",
    github: "#",
    featured: false,
  },
  {
    id: "library-management",
    title: "Library Management",
    description:
      "A modern library management application designed to handle library information, users and administrative workflows.",
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "Management",
    image: "/projects/library.webp",
    liveDemo: "#",
    github: "#",
    featured: false,
  },
];
