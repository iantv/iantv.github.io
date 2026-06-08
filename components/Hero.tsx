"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="about"
      className="hero-section"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "92px 24px 64px",
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
          fontSize: "clamp(26px, 3.8vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          background: "linear-gradient(90deg, #78a0ff 0%, #e2ff5d 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        XR Engineer & Technical Lead
      </h1>

      <p
        className="animate-fade-up"
        style={{
          fontSize: "clamp(13px, 1.4vw, 16px)",
          color: "var(--text)",
          textAlign: "center",
          lineHeight: 1.6,
          maxWidth: 600,
          margin: "0 auto 28px",
        }}
      >
        Building XR products from research prototypes to production systems.
      </p>

      {/* Two-column body */}
      <div className="hero-body-grid">
        {/* Left — photo + CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Avatar */}
          <div className="animate-fade-up delay-1" style={{ marginBottom: 20, position: "relative", display: "inline-block" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.jpg"
              alt="Tatiana Zueva"
              style={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#111",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "3px 10px",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              whiteSpace: "nowrap",
            }}>
              Tatiana Zueva
            </div>
          </div>

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
        </div>

        {/* Right — 2 pillars + worked at */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {([
            {
              num: "01",
              text: <><b style={{ color: "var(--text)", fontWeight: 700 }}>12+ years</b> building XR, computer vision and real-time 3D systems, from research to production.</>,
            },
            {
              num: "02",
              text: <>Led an XR R&D platform from concept to MVP, including <b style={{ color: "rgba(255,255,255,0.88)", fontWeight: 700 }}>Gaussian Splatting-based 3D reconstruction</b> and immersive collaboration technologies.</>,
            },
            {
              num: "03",
              text: <>Built and led an <b style={{ color: "var(--text)", fontWeight: 700 }}>8-person multidisciplinary team</b> spanning XR, ML, DevOps and Analytics.</>,
            },
          ] as { num: string; text: React.ReactNode }[]).map((p, i) => (
            <div
              key={p.num}
              className={`animate-fade-up delay-${i + 2}`}
              style={{
                display: "flex",
                gap: 16,
                padding: "20px 0",
                borderBottom: "1px solid var(--border-hover)",
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

          {/* Proof strip */}
          <div
            className="animate-fade-up delay-5"
            style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}
          >
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.03em", textTransform: "uppercase", color: "var(--text-muted)", marginRight: 2 }}>
              Worked at
            </span>
            {["MTS Web Services", "Sberbank", "CROC Immersive Technologies"].map((name, i, arr) => (
              <span key={name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
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
      </div>
    </section>
  );
}
