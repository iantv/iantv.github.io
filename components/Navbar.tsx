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
          Tatiana Zueva
        </Link>

        {/* Nav links */}
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Press", href: "#press" },
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
            href="https://drive.google.com/file/d/124kyrjED3kX8g620vMJhdvjGeGiFSMEW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#000",
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "6px 12px",
              background: "var(--accent)",
              borderRadius: 6,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Resume ↗
          </a>
          <div className="nav-social" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {[
              {
                label: "GitHub",
                href: "https://github.com/iantv",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/iantv/",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                label: "Email",
                href: "mailto:ian.tatiana.v@gmail.com",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
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
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "all 0.15s",
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
