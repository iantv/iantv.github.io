"use client";

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 24px 64px",
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
          Software Engineer · XR / 3D / CV
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
          {"Building Real-Time\nXR & 3D Systems"}
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
          From Gaussian Splatting pipelines to immersive VR training — combining computer vision, real-time rendering and XR engineering to build things that didn&apos;t exist before.
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

      {/* Right — 3 pillars */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[
          {
            num: "01",
            text: "Led end-to-end XR platform at MTS (Future Crew) — Gaussian Splatting pipeline for real-time 3D reconstruction. Built and managed 8-person cross-functional team.",
          },
          {
            num: "02",
            text: "10+ shipped XR applications — Unity, Unreal Engine, WebXR, ARKit, ARCore, MRTK, HoloLens, Oculus Quest, HTC Vive.",
          },
          {
            num: "03",
            text: "Deep C++/OpenCV background: real-time face tracking AR (open-source, 15★), YOLOv3 object detection (400k+ images, >85% accuracy).",
          },
        ].map((p, i) => (
          <div
            key={p.num}
            className={`animate-fade-up delay-${i + 2}`}
            style={{
              display: "flex",
              gap: 16,
              padding: "20px 0",
              borderBottom: i < 2 ? "1px solid var(--border)" : "none",
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
