"use client";

const experiences = [
  {
    period: "03/2024 — 04/2025",
    role: "Software Engineer (XR / 3D / CV), Technical Lead",
    company: "MTS Web Services — Future Crew",
    description: "Led end-to-end development of an XR platform for real-time 3D reconstruction. Designed Gaussian Splatting pipeline, optimized rendering for XR environments, built and managed an 8-person cross-functional team.",
    tech: ["Unity", "C#", "Python", "WebXR", "three.js", "CloudXR", "Gaussian Splatting"],
  },
  {
    period: "07/2022 — 12/2023",
    role: "Senior Software Engineer",
    company: "Avatai — XR startup",
    description: "Led VR volumetric video playback app (Oculus Quest, HTC Vive) from early development to public release on Steam (Spherum 3D). Built cloud infrastructure on AWS/Firebase and CI/CD pipelines.",
    tech: ["Unity", "C#", "SteamVR", "AWS", "Firebase", "Photon SDK"],
  },
  {
    period: "10/2021 — 06/2022",
    role: "Software Engineer",
    company: "Avatai — XR startup",
    description: "Developed VR application for volumetric video playback. Reduced build size using Unity Addressables and Firebase-hosted asset bundles. Implemented social feature API integrations.",
    tech: ["Unity", "C#", "Unity Addressables", "Firebase"],
  },
  {
    period: "06/2021 — 10/2021",
    role: "Software Engineer",
    company: "CROC Immersive Technologies",
    description: "Developed VR training system for Dubai Municipality. Built automated level generation via procedural algorithms and inner development tools. Customized Unity text components for localization.",
    tech: ["Unity", "C#", "Unity Bolt", "Odin Inspector", "I2 Localization"],
  },
  {
    period: "12/2014 — 03/2017",
    role: "Software Engineer",
    company: "NTI Center — FEFU",
    description: "Led design and development of a VR language learning application (Englishville) using Unreal Engine. Built immersive scenarios with interactive NPCs and Microsoft Cognitive Services for real-time speech recognition.",
    tech: ["Unreal Engine 4", "C++", "Blueprint", "Python", "Microsoft Cognitive Services"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 16 }}>
        <span className="section-number">02</span>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Experience
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="animate-fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: 32,
              padding: "24px 0",
              borderBottom: i < experiences.length - 1 ? "1px solid var(--border)" : "none",
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {exp.period}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {exp.role}
                </h3>
                <span style={{ fontSize: 13, color: "var(--text-dim)" }}>
                  @ {exp.company}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.65 }}>
                {exp.description}
              </p>
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
    </section>
  );
}
