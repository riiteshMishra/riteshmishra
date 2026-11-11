"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import { techNodes } from "@/data/content/tech-universe";

const TechUniverseCanvas = dynamic(
  () => import("./TechUniverseCanvas"),
  { ssr: false, loading: () => <div className="flex h-full items-center justify-center text-sm text-text-muted">Loading 3D scene…</div> }
);

const hasWebGL = () => {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
};

const TechUniverseFallback = ({ onSelect }: { onSelect: (id: string) => void }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {techNodes.map((node) => (
      <button
        key={node.id}
        type="button"
        onClick={() => onSelect(node.id)}
        className="rounded-2xl border border-border bg-card/50 p-4 text-left transition-colors hover:border-accent-green/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
      >
        <p className="font-headline-sans text-sm font-semibold text-text-primary">{node.label}</p>
        <p className="mt-1 font-roboto text-xs text-text-muted">{node.category}</p>
      </button>
    ))}
  </div>
);

const TechUniverseSection = ({
  selectedId,
  onSelect,
  hoveredId,
  onHover,
}: {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [reducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  const [webglSupported] = useState(() =>
    typeof window !== "undefined" ? hasWebGL() : true
  );

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleSelect = useCallback((id: string) => onSelect(id), [onSelect]);

  if (reducedMotion || !webglSupported || isMobile) {
    return <TechUniverseFallback onSelect={handleSelect} />;
  }

  return (
    <TechUniverseCanvas
      selectedId={selectedId}
      onSelect={onSelect}
      hoveredId={hoveredId}
      onHover={onHover}
    />
  );
};

export default TechUniverseSection;
