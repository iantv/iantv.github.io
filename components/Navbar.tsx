"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "var(--accent)" }}>◆</span>
          tanya_pro_vr
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                padding: "6px 12px",
                color: "var(--text-muted)",
                textDecoration: "none",
                borderRadius: 6,
                transition: "color 0.15s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href="#"
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "var(--text-dim)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              padding: "5px 10px",
              border: "1px solid var(--border)",
              borderRadius: 6,
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
            Resume ↗
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {[
              { icon: "GH", label: "GitHub", href: "https://github.com/iantv" },
              { icon: "LI", label: "LinkedIn", href: "https://www.linkedin.com/in/iantv/" },
              { icon: "TG", label: "Telegram", href: "https://t.me/tanya_pro_vr" },
            ].map(({ icon, label, href }) => (
              <a
                key={icon}
                href={href}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "all 0.15s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                  (e.currentTarget as HTMLElement).style.background = "#181818";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
