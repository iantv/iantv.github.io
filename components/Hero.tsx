"use client";

interface HeroProps {
  mode: "xr" | "cv";
}

const content = {
  xr: {
    label: "XR & 3D Engineer",
    heading: "Building Real-Time\nXR Experiences",
    subheading: "Software engineer specializing in real-time 3D systems, VR/AR applications and XR platforms — Unity, Unreal Engine, WebXR and beyond.",
    pillars: [
      { num: "01", text: "Led end-to-end XR platform development at MTS (Future Crew) — Gaussian Splatting pipeline for real-time 3D reconstruction in XR environments." },
      { num: "02", text: "Specialization in Unity (C#), Unreal Engine, WebXR, OpenGL/GLSL across VR, AR, HoloLens and mobile XR platforms." },
      { num: "03", text: "Built and managed 8-person cross-functional team (VR, ML, DevOps, QA). Drove Spherum 3D from R&D to Steam release." },
    ],
  },
  cv: {
    label: "Computer Vision & AI",
    heading: "Real-Time Vision\n& 3D Reconstruction",
    subheading: "Building computer vision systems, 3D reconstruction pipelines and AI-powered AR applications using C++, Python, OpenCV and OpenGL.",
    pillars: [
      { num: "01", text: "Designed Gaussian Splatting pipeline for real-time 3D rendering in XR environments at MTS Web Services (2024–2025)." },
      { num: "02", text: "Built real-time face detection, tracking and 3D overlay in C++/Qt/OpenGL — open-source AR-Hair (15★, 7 forks on GitHub)." },
      { num: "03", text: "YOLOv3 real-time coin detection (>85% accuracy, 400k+ images, ~200 classes). Demonstrated at Eastern Economic Forum 2019." },
    ],
  },
};

export default function Hero({ mode }: HeroProps) {
  const c = content[mode];

  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 24px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "start",
      }}
    >
      {/* Left */}
      <div>
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 20,
            border: "1px solid rgba(226,255,93,0.25)",
            padding: "4px 10px",
            borderRadius: 20,
            background: "rgba(226,255,93,0.06)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              boxShadow: "0 0 8px var(--accent)",
            }}
          />
          {c.label}
        </div>

        <h1
          className="animate-fade-up delay-1"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--text)",
            whiteSpace: "pre-line",
            marginBottom: 20,
          }}
        >
          {c.heading}
        </h1>

        <p
          className="animate-fade-up delay-2"
          style={{
            fontSize: 15,
            color: "var(--text-dim)",
            lineHeight: 1.7,
            maxWidth: 420,
          }}
        >
          {c.subheading}
        </p>

        <div
          className="animate-fade-up delay-3"
          style={{ display: "flex", gap: 10, marginTop: 28 }}
        >
          <a
            href="#projects"
            style={{
              fontSize: 13,
              fontWeight: 600,
              padding: "9px 20px",
              background: "var(--accent)",
              color: "#000",
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              fontSize: 13,
              fontWeight: 500,
              padding: "9px 20px",
              background: "transparent",
              color: "var(--text-dim)",
              borderRadius: 8,
              textDecoration: "none",
              border: "1px solid var(--border)",
              letterSpacing: "0.01em",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right — pillar list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {c.pillars.map((p, i) => (
          <div
            key={p.num}
            className={`animate-fade-up delay-${i + 2}`}
            style={{
              display: "flex",
              gap: 16,
              padding: "20px 0",
              borderBottom: i < c.pillars.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <span className="section-number" style={{ paddingTop: 2, minWidth: 22 }}>
              {p.num}
            </span>
            <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.65 }}>
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
