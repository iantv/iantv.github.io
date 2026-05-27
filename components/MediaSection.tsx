"use client";

const interviews = [
  {
    id: "Bj3fRc1DJpo",
    title: "[RU] Virtual Reality",
    label: "Podcast",
    url: "https://www.youtube.com/live/Bj3fRc1DJpo",
  },
  {
    id: "vw6JN_WxlAQ",
    title: "[RU] Interview — Primamedia",
    label: "2019",
    url: "https://youtu.be/vw6JN_WxlAQ",
  },
  {
    id: "wPsj7LKz92Y",
    title: "[RU + EN subtitles] Global Game Jam",
    label: "2021",
    url: "https://youtu.be/wPsj7LKz92Y",
  },
];

export default function MediaSection() {
  return (
    <section
      id="press"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
        <span className="section-number">04</span>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
          Press &amp; Speaking
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
        className="media-grid"
      >
        {interviews.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              className="project-card animate-fade-up"
              style={{ padding: 0, overflow: "hidden", gap: 0, cursor: "pointer" }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                />
                {/* Gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 50%)",
                  pointerEvents: "none",
                }} />
                {/* Play icon */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(4px)",
                    transition: "background 0.2s",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5 3l9 5-9 5V3z" fill="white" />
                    </svg>
                  </div>
                </div>
                {/* Label badge */}
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                  padding: "3px 8px", borderRadius: 4,
                  background: "rgba(10,10,10,0.75)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)",
                }}>
                  {item.label}
                </div>
              </div>

              {/* Title */}
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{
                  fontSize: 13, fontWeight: 600, color: "var(--text)",
                  letterSpacing: "-0.01em", lineHeight: 1.3,
                }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 11, color: "var(--accent)", marginTop: 6, fontWeight: 500 }}>
                  Watch ↗
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
