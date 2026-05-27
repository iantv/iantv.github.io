"use client";

const education = [
  {
    degree: "M.S. Computer Science",
    field: "Game Development, VR/AR",
    school: "Far Eastern Federal University (FEFU)",
    location: "Russia",
    period: "2017 — 2019",
    gpa: "GPA 5.0 / 5.0",
  },
  {
    degree: "B.S. Computer Science",
    field: "Systems Programming",
    school: "Far Eastern Federal University (FEFU)",
    location: "Russia",
    period: "2013 — 2017",
    gpa: "GPA 4.6 / 5.0",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="exp-section"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 16 }}>
        <span className="section-number">03</span>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
          Education
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {education.map((edu, i) => (
          <div
            key={i}
            className="animate-fade-up exp-row"
            style={{
              padding: "24px 0",
              borderBottom: i < education.length - 1 ? "1px solid var(--border)" : "none",
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
            }}
          >
            {/* Left: period */}
            <div className="exp-period" style={{ paddingTop: 2 }}>
              <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500, letterSpacing: "0.02em" }}>
                {edu.period}
              </span>
            </div>

            {/* Right: content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" }}>
                {edu.degree} <span style={{ color: "var(--text-dim)", fontWeight: 400 }}>— {edu.field}</span>
              </h3>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 500 }}>
                  {edu.school}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  · {edu.location}
                </span>
              </div>
              <span style={{
                display: "inline-block",
                marginTop: 6,
                fontSize: 11,
                fontWeight: 600,
                color: "var(--accent)",
                background: "rgba(226,255,93,0.08)",
                border: "1px solid rgba(226,255,93,0.2)",
                borderRadius: 4,
                padding: "2px 8px",
                letterSpacing: "0.04em",
                width: "fit-content",
              }}>
                {edu.gpa}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
