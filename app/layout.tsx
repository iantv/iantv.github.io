import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "tanya_pro_vr — XR Engineer & Computer Vision",
  description: "Portfolio of Tatiana Zueva — Software Engineer specializing in real-time 3D, XR applications, Unity, Unreal Engine and Computer Vision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-C0FY3HK6BT" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C0FY3HK6BT');
        `}</Script>
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main id="main">{children}</main>
        <ScrollToTop />
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            © 2025 Tatiana Zueva · tanya_pro_vr
          </p>
        </footer>
      </body>
    </html>
  );
}
