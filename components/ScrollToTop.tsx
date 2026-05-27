"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 28,
        right: 24,
        zIndex: 100,
        width: 40,
        height: 40,
        borderRadius: 10,
        border: "1px solid var(--border-hover)",
        background: "rgba(17,17,17,0.9)",
        backdropFilter: "blur(12px)",
        color: "var(--text-muted)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--accent)";
        el.style.borderColor = "rgba(226,255,93,0.35)";
        el.style.background = "rgba(226,255,93,0.08)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "var(--text-muted)";
        el.style.borderColor = "var(--border-hover)";
        el.style.background = "rgba(17,17,17,0.9)";
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 12V2M2 7l5-5 5 5"/>
      </svg>
    </button>
  );
}
