"use client";

export default function Hero() {
  return (
    <section
      id="about"
      className="hero-section"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "64px 24px 64px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Animated background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Accent orb — top left */}
        <div style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(226,255,93,0.28) 0%, transparent 65%)",
          top: "20px",
          left: "40px",
          animation: "orb-drift-1 5s linear infinite",
        }} />
        {/* Cool blue orb — right */}
        <div style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,160,255,0.24) 0%, transparent 65%)",
          top: "40px",
          right: "60px",
          animation: "orb-drift-2 7s linear infinite",
        }} />
        {/* Dim accent orb — bottom center */}
        <div style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(226,255,93,0.16) 0%, transparent 65%)",
          bottom: "40px",
          left: "40%",
          animation: "orb-drift-3 9s linear infinite",
        }} />
      </div>
      {/* Heading — centered at top */}
      <h1
        className="animate-fade-up hero-heading"
        style={{
          fontSize: "clamp(36px, 5.5vw, 72px)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "var(--text)",
          textAlign: "center",
          marginBottom: 56,
        }}
      >
        XR / AI Systems Engineer
      </h1>

      {/* Two-column body */}
      <div className="hero-body-grid">
        {/* Left */}
        <div>
          {/* Avatar */}
          <div className="animate-fade-up delay-1" style={{ marginBottom: 24 }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Tatiana Zueva"
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  border: "2px solid var(--border)",
                  boxShadow: "0 0 0 1px rgba(226,255,93,0.15), 0 8px 32px rgba(0,0,0,0.5)",
                }}
              />
              {/* Name badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#111",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "3px 10px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  whiteSpace: "nowrap",
                }}
              >
                Tatiana Zueva
              </div>
            </div>
          </div>

          <div
            className="animate-fade-up delay-2"
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
            XR / AI Systems Engineer
          </div>

          <p
            className="animate-fade-up delay-3"
            style={{
              fontSize: 15,
              color: "var(--text-dim)",
              lineHeight: 1.7,
              maxWidth: 420,
            }}
          >
            Designing real-time XR systems at the intersection of AI, rendering and spatial computing.
          </p>

          <div
            className="animate-fade-up delay-4"
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

          {/* Proof strip */}
          <div
            className="animate-fade-up delay-4"
            style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}
          >
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginRight: 4 }}>
              Worked with
            </span>
            {["MTS", "Sberbank", "Dubai Municipality", "Steam"].map((name, i, arr) => (
              <span key={name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-dim)", letterSpacing: "0.01em" }}>
                  {name}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: "var(--border-hover)", fontSize: 10 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right — 3 pillars */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            {
              num: "01",
              text: "Built and led development of an XR reconstruction platform at MTS using Gaussian Splatting. Managed a cross-functional team of 8 across ML, XR and infrastructure.",
            },
            {
              num: "02",
              text: "Delivered 10+ XR applications across VR, AR and WebXR platforms, including HoloLens, Oculus Quest and HTC Vive.",
            },
            {
              num: "03",
              text: "Background in computer vision and real-time graphics: AR tracking, YOLOv3 detection pipelines and rendering systems.",
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
      </div>
    </section>
  );
}
