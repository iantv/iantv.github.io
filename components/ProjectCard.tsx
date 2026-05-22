"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div
      ref={cardRef}
      className="project-card animate-fade-up"
      style={{ animationDelay: `${index * 0.06}s`, opacity: 0 }}
      onMouseMove={handleMouseMove}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="section-number">{String(project.id).padStart(2, "0")}</span>
          {project.featured && (
            <span style={{ color: "#fbbf24", fontSize: 12 }} title="Featured">★</span>
          )}
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {project.displayTags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title + description */}
      <div>
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text)",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            marginBottom: 6,
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6 }}>
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              fontSize: 11,
              color: "var(--text-muted)",
              padding: "2px 7px",
              border: "1px solid var(--border)",
              borderRadius: 4,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.liveUrl || project.sourceUrl) && (
        <div style={{ display: "flex", gap: 6, paddingTop: 8, borderTop: "1px solid var(--border)" }}>
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn-link primary" target="_blank" rel="noopener noreferrer">
              <span>↗</span> View Live
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} className="btn-link" target="_blank" rel="noopener noreferrer">
              <span>⌥</span> Source
            </a>
          )}
        </div>
      )}
    </div>
  );
}
