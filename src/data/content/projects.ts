import { eventM, homework, realbattle, studyNotion } from "@/assets";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string | StaticImageData;
  liveDemo: string;
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "real-battle",
    title: "Real Battle",
    description:
      "A tournament and gaming platform for competitive players to discover, join, and manage gaming tournaments. Built with Next.js, React, TypeScript, Node.js, Express, MongoDB, and Redis.",
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
    image: realbattle,
    liveDemo: "https://dashboard.realbattle.in",
    github: "",
    featured: true,
  },
  {
    id: "edtech-platform",
    title: "EdTech Platform",
    description:
      "An educational platform focused on delivering a structured learning experience, with a React/Next.js frontend and a Node.js, Express, and MongoDB backend.",
    tags: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
    category: "Education",
    image: studyNotion,
    liveDemo: "",
    github: "",
    featured: true,
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    description:
      "A web application for managing events, participants, and event-related workflows through a centralized platform, built with React, Node.js, Express, and MongoDB.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "Management",
    image: eventM,
    liveDemo: "",
    github: "",
    featured: true,
  },
  {
    id: "homework-backend",
    title: "Homework Backend",
    description:
      "A backend system providing APIs, authentication, validation, and structured data management for an educational workflow, using Node.js, Express, MongoDB, JWT, and Zod.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Zod"],
    category: "Backend",
    image: homework,
    liveDemo: "",
    github: "",
    featured: true,
  },
  {
    id: "random-gif",
    title: "Random GIF",
    description:
      "A React application for discovering random GIFs, with state management implemented using Redux and a third-party GIF API.",
    tags: ["React", "Redux", "JavaScript", "API"],
    category: "Frontend",
    image: "",
    liveDemo: "",
    github: "",
    featured: true,
  },
  {
    id: "library-management",
    title: "Library Management",
    description:
      "A library management application for handling library information, users, and administrative workflows, built with Next.js, React, TypeScript, Firebase, and Tailwind CSS.",
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "Management",
    image: studyNotion,
    liveDemo: "",
    github: "",
    featured: true,
  },
];
