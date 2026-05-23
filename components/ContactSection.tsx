"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px 80px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 16 }}>
        <span className="section-number">04</span>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Get in Touch
        </h2>
      </div>

      <div className="contact-grid">
        <div>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-dim)",
              lineHeight: 1.7,
              marginBottom: 24,
              maxWidth: 380,
            }}
          >
            Open to XR/3D engineering roles, computer vision projects and research collaborations. Always happy to talk about real-time rendering, Gaussian Splatting or anything XR.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Email", value: "ian.tatiana.v@gmail.com", href: "mailto:ian.tatiana.v@gmail.com" },
              { label: "Telegram", value: "@iantv", href: "https://t.me/iantv" },
              { label: "VR Channel", value: "@tanya_pro_vr", href: "https://t.me/tanya_pro_vr" },
              { label: "GitHub", value: "github.com/iantv", href: "https://github.com/iantv" },
              { label: "LinkedIn", value: "linkedin.com/in/iantv", href: "https://www.linkedin.com/in/iantv/" },
              { label: "Site", value: "yantv.dev", href: "https://yantv.dev/en" },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    minWidth: 64,
                  }}
                >
                  {label}
                </span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: "var(--text-dim)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              paddingBottom: 16,
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 10px #4ade80",
              }}
            />
            <span style={{ fontSize: 13, color: "var(--text-dim)" }}>
              Open to opportunities
            </span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Unity / C#", "XR Development", "C++ / OpenCV", "3D Reconstruction", "Technical Lead", "WebXR"].map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="mailto:ian.tatiana.v@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "11px 20px",
              background: "var(--accent)",
              color: "#000",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.01em",
              marginTop: 4,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Send a Message ↗
          </a>
        </div>
      </div>
    </section>
  );
}
