import type { Project } from "@/data/content/projects";

interface ProjectTagsProps {
  tags: Project["tags"];
}

const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border bg-background px-3 py-1.5 font-roboto text-xs text-text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
