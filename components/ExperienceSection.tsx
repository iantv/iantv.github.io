"use client";

import { useState } from "react";

const experiences = [
  {
    period: "03/2024 — 04/2025",
    role: "Software Engineer (XR / 3D / CV), Technical Lead",
    company: "MTS Web Services — Future Crew",
    companyNote: "R&D innovation unit",
    bullets: [
      "Led end-to-end development of an XR platform for real-time 3D reconstruction and visualization",
      "Designed and implemented a Gaussian Splatting pipeline for high-performance real-time 3D rendering",
      "Optimized rendering and data-processing pipelines to achieve low-latency performance in XR environments",
      "Developed cross-platform XR applications using Unity (C#) and WebXR technologies (Three.js, React)",
      "Architected scalable real-time 3D and XR systems with a focus on performance and extensibility",
      "Built and managed an 8-person cross-functional engineering team spanning VR, ML, DevOps, QA, and Analytics",
      "Owned technical strategy, roadmap planning, and delivery execution in collaboration with executive stakeholders",
    ],
    tech: ["C#", "Python", "Unity", "WebXR", "three.js", "CloudXR", "Gaussian Splatting"],
  },
  {
    period: "07/2022 — 12/2023",
    role: "Senior Software Engineer",
    company: "Avatai",
    companyNote: "XR startup",
    bullets: [
      "Led development of a VR application for volumetric video playback (Oculus Quest, HTC Vive) as a hands-on engineer",
      "Drove the project from early development to public release on Steam (Spherum 3D)",
      "Implemented core application logic and playback systems in Unity, focusing on performance and UX",
      "Developed reusable cross-platform Unity components for VR and mobile applications",
      "Designed and built cloud infrastructure (AWS, Firebase) for scalable asset delivery",
      "Implemented CI/CD pipelines and automated build and release workflows",
    ],
    tech: ["Unity", "C#", "SteamVR", "AWS", "Firebase", "Photon SDK"],
  },
  {
    period: "10/2021 — 06/2022",
    role: "Software Engineer",
    company: "Avatai",
    companyNote: "XR startup",
    bullets: [
      "Developed a VR application for volumetric video playback (Oculus Quest, HTC Vive) using Unity",
      "Implemented client-side API integration for social features",
      "Reduced application build size using Unity Addressables and Firebase-hosted asset bundles",
    ],
    tech: ["Unity", "C#", "Unity Addressables", "Firebase"],
  },
  {
    period: "06/2021 — 10/2021",
    role: "Software Engineer",
    company: "CROC Immersive Technologies",
    companyNote: "VR division of a leading IT systems integrator",
    bullets: [
      "Developed a VR training system for Dubai Municipality, implementing game mechanics and interactive learning scenarios",
      "Customized text component in Unity for localization using editor scripting",
      "Designed and implemented inner development tools to speed up development iterations",
      "Developed an automated level generation system using procedural algorithms to create dynamic and varied game environments",
    ],
    tech: ["Unity", "C#", "Unity Bolt", "Odin Inspector", "I2 Localization"],
  },
  {
    period: "12/2014 — 03/2017",
    role: "Software Engineer",
    company: "NTI Center",
    companyNote: "University-based XR R&D center",
    bullets: [
      "Led the design and development of a VR-based language learning application using Unreal Engine and AI technologies",
      "Built immersive learning scenarios with interactive NPCs",
      "Integrated Microsoft Cognitive Services for real-time speech recognition and dialogue",
      "Enabled bidirectional communication between users and virtual characters",
    ],
    tech: ["Unreal Engine 4", "C++", "Blueprint", "Python", "Microsoft Cognitive Services"],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, 2);

  return (
    <section
      id="experience"
      className="exp-section"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 16 }}>
        <span className="section-number">02</span>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
          Experience
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {visible.map((exp, i) => (
          <div
            key={i}
            className="animate-fade-up exp-row"
            style={{
              padding: "28px 0",
              borderBottom: i < visible.length - 1 ? "1px solid var(--border)" : "none",
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
            }}
          >
            {/* Left: period */}
            <div className="exp-period" style={{ paddingTop: 2 }}>
              <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500, letterSpacing: "0.02em" }}>
                {exp.period}
              </span>
            </div>

            {/* Right: content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Role + company */}
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: 2 }}>
                  {exp.role}
                </h3>
                <div style={{ display: "flex", gap: 6, alignItems: "baseline", flexWrap: "wrap" }}>
                  <span style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 500 }}>
                    {exp.company}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    — {exp.companyNote}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", fontSize: 12, marginTop: 3, flexShrink: 0, lineHeight: 1 }}>
                      ●
                    </span>
                    <span style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
                {exp.tech.map(t => (
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
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          marginTop: 20,
          fontSize: 12,
          fontWeight: 500,
          color: "var(--text-muted)",
          background: "transparent",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: "6px 16px",
          cursor: "pointer",
          letterSpacing: "0.02em",
          transition: "all 0.15s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.color = "var(--text)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        }}
      >
        {expanded ? "Show less ↑" : `Show ${experiences.length - 2} more ↓`}
      </button>
    </section>
  );
}
