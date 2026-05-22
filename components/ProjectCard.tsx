"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #0f2027 100%)",
  "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
  "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
  "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d2137 100%)",
];

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const gradient = PLACEHOLDER_GRADIENTS[project.id % PLACEHOLDER_GRADIENTS.length];
  const hasImage = !!project.imageUrl;

  return (
    <div
      ref={cardRef}
      className="project-card animate-fade-up"
      style={{
        animationDelay: `${index * 0.06}s`,
        opacity: 0,
        padding: 0,
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          background: gradient,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageUrl}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          />
        ) : (
          /* Placeholder grid pattern */
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 28, opacity: 0.15 }}>◆</span>
            </div>
          </div>
        )}

        {/* Gradient overlay bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, rgba(17,17,17,0.95), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Tags overlay top-right */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {project.displayTags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "3px 7px",
                borderRadius: 4,
                background: "rgba(10,10,10,0.75)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(4px)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Number + star bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>
            {String(project.id).padStart(2, "0")}
          </span>
          {project.featured && (
            <span style={{ color: "#fbbf24", fontSize: 11 }}>★</span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
          <h3
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text)",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: 5,
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: 12.5, color: "var(--text-dim)", lineHeight: 1.6 }}>
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {project.tech.map(t => (
            <span
              key={t}
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                padding: "2px 6px",
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
          <div style={{ display: "flex", gap: 6, paddingTop: 6, borderTop: "1px solid var(--border)" }}>
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
    </div>
  );
}
