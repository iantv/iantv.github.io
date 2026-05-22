"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

interface Props {
  projects: Project[];
  mode: "xr" | "cv";
}

type Filter = "all" | "featured";

export default function ProjectsSection({ projects, mode }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "featured" ? projects.filter(p => p.featured) : projects;

  const sectionLabel = mode === "xr" ? "XR & 3D Projects" : "CV & AI Projects";

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
          marginBottom: 32,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="section-number">03</span>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            {sectionLabel}
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
            {projects.length}
          </span>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: "#0f0f0f",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: 3,
          }}
        >
          {(["all", "featured"] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontSize: 12,
                fontWeight: 500,
                padding: "5px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                textTransform: "capitalize",
                transition: "all 0.15s",
                background: filter === f ? "#1e1e1e" : "transparent",
                color: filter === f ? "var(--text)" : "var(--text-muted)",
              }}
            >
              {f === "featured" ? "★ Featured" : "All"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
