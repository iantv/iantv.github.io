"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project, FilterTag } from "@/data/projects";

interface Props {
  projects: Project[];
}

type Filter = "all" | FilterTag;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all",      label: "All" },
  { key: "vr-ar",   label: "VR / AR" },
  { key: "cv",      label: "Computer Vision" },
  { key: "3d",      label: "3D & Reconstruction" },
  { key: "research",label: "Research" },
];

export default function ProjectsSection({ projects }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.filterTags.includes(filter as FilterTag));

  return (
    <section
      id="projects"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="section-number">03</span>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Projects
          </h2>
          <span
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              background: "#1a1a1a",
              border: "1px solid var(--border)",
              padding: "2px 8px",
              borderRadius: 20,
            }}
          >
            {filtered.length}
          </span>
        </div>
      </div>

      {/* Tag filter */}
      <div
        style={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          marginBottom: 28,
        }}
      >
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              fontSize: 12,
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: 20,
              border: "1px solid",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "all 0.15s",
              borderColor: filter === f.key ? "rgba(226,255,93,0.35)" : "var(--border)",
              background: filter === f.key ? "rgba(226,255,93,0.08)" : "transparent",
              color: filter === f.key ? "var(--accent)" : "var(--text-muted)",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: 14,
        }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
