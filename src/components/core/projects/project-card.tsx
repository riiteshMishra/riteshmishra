"use client";

import { motion } from "motion/react";

import type { Project } from "@/data/content/projects";

import ProjectImage from "./project-image";
import ProjectDetails from "./project-details";
import ProjectTags from "./project-tags";
import ProjectLinks from "./project-links";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <article
        className={`group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-green/30 ${
          project.featured ? "md:col-span-2" : ""
        }`}
      >
        <ProjectImage project={project} />

        <div className="p-6 sm:p-8">
          <ProjectDetails project={project} />

          <ProjectTags tags={project.tags} />

          <ProjectLinks project={project} />
        </div>
      </article>
    </motion.div>
  );
};

export default ProjectCard;
