"use client";

import { useCallback, useState } from "react";

import { techNodes } from "@/data/content/tech-universe";
import TechUniverseSection from "./TechUniverseSection";

const TechUniverseExperience = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedNode = techNodes.find((n) => n.id === selectedId) ?? null;

  const handleSelect = useCallback((id: string | null) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-105 w-full overflow-hidden rounded-3xl border border-border bg-card/40 sm:h-130">
        <TechUniverseSection
          selectedId={selectedId}
          onSelect={handleSelect}
          hoveredId={hoveredId}
          onHover={setHoveredId}
        />

        {selectedNode && (
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-accent-green/30 bg-background/90 p-4 backdrop-blur-md sm:left-auto sm:right-4 sm:w-80">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-roboto text-xs uppercase tracking-[0.15em] text-accent-green">
                  {selectedNode.category}
                </p>
                <h3 className="mt-1 font-headline-sans text-lg font-semibold text-text-primary">
                  {selectedNode.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label="Close details"
                className="rounded-full border border-border px-2 py-1 text-xs text-text-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
              >
                ✕
              </button>
            </div>
            <p className="mt-3 font-roboto text-sm leading-6 text-text-muted">
              {selectedNode.description}
            </p>
            <p className="mt-2 font-roboto text-sm leading-6 text-text-muted">
              <span className="font-medium text-text-primary">My usage: </span>
              {selectedNode.usage}
            </p>
            {selectedNode.projects && selectedNode.projects.length > 0 && (
              <p className="mt-2 font-roboto text-xs text-text-muted">
                <span className="font-medium text-text-primary">
                  Projects:{" "}
                </span>
                {selectedNode.projects.join(", ")}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Accessible keyboard selection */}
      <div className="mt-4 flex flex-wrap gap-2">
        {techNodes.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => handleSelect(node.id)}
            aria-pressed={selectedId === node.id}
            className={`rounded-full border px-3 py-1.5 font-roboto text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green ${
              selectedId === node.id
                ? "border-accent-green bg-accent-green/10 text-accent-green"
                : "border-border bg-card/50 text-text-muted hover:border-accent-green/40"
            }`}
          >
            {node.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechUniverseExperience;
