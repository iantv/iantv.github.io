"use client";

import { useState } from "react";

const experiences = [
  {
    period: "03/2024 — 04/2025",
    role: "XR Technical Lead (Computer Vision & Spatial Computing)",
    company: "MTS Web Services — Future Crew",
    companyNote: "R&D innovation unit",
    bullets: [
      "Led development of an XR R&D platform for immersive collaboration and communication, taking the product from concept to MVP and securing interest from a prospective enterprise customer.",
      "Designed and implemented a Gaussian Splatting pipeline for digitizing and rendering large-scale real-world environments.",
      "Architected and optimized rendering and data-processing pipelines for low-latency XR experiences.",
      "Developed cross-platform XR applications using Unity (C#) and WebXR technologies (Three.js).",
      "Built and led an 8-person multidisciplinary engineering team spanning VR, WebXR, ML, DevOps, QA and Analytics, including hiring, mentoring and managing engineers and technical leads.",
      "Defined technical roadmap, architecture and delivery plans in collaboration with Product, CTO and executive leadership.",
      "Coordinated software, machine learning and hardware development efforts, including XR headset prototyping.",
    ],
    tech: ["C#", "Python", "Unity", "WebXR", "three.js", "CloudXR", "Gaussian Splatting"],
  },
  {
    period: "10/2021 — 12/2023",
    role: "Senior Software Engineer",
    company: "Avatai",
    companyNote: "XR startup developing AI-generated avatars and volumetric video technologies.",
    bullets: [
      "Led development of a VR application for volumetric video playback (Quest, HTC Vive), taking the product from development to public release on Steam.",
      "Implemented volumetric video playback using Unity VFX Graph, improving rendering performance by approximately 50%.",
      "Reduced application size from 2 GB to 700 MB through on-demand asset delivery using Unity Addressables and AWS S3.",
      "Implemented REST API integrations enabling content management directly from VR applications.",
      "Led development of multiplayer functionality, enabling shared VR sessions for up to 32 concurrent participants.",
      "Coordinated development efforts across engineering and 3D content creation, mentoring a Unity developer and a 3D artist while driving product delivery.",
    ],
    tech: ["Unity", "C#", "SteamVR", "AWS", "Firebase", "Photon SDK"],
  },
  {
    period: "06/2021 — 10/2021",
    role: "Software Engineer",
    company: "CROC Immersive Technologies",
    companyNote: "VR division of a leading IT systems integrator",
    bullets: [
      "Developed a VR training system for Dubai Municipality, implementing game mechanics and interactive learning scenarios.",
      "Improved VR application performance from 15–20 FPS to 55–70 FPS through scene optimization and LOD systems.",
      "Built a data-driven pipeline for generating Unity training scenarios from Google Sheets.",
      "Developed Unity editor tools and localization workflows.",
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
