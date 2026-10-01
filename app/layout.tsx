import type { Metadata, Viewport } from "next";
import { Anton, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";
import PointerEffects from "./components/PointerEffects";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Zayar Hein — PrimeSlade",
  description:
    "Sai Zayar Hein, full-stack software engineer in Bangkok. I build web apps businesses rely on, with a focus on reliable back ends.",
  icons: {
    icon: [
      { url: "/icon0.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.ico?v=3", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png?v=3", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edf0f4" },
    { media: "(prefers-color-scheme: dark)", color: "#12151b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${figtree.variable}`}>
      <body>
        <div className="progress" aria-hidden="true" />
        <PointerEffects />
        <Navbar />
        <div className="wrap">
          {children}
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} Sai Zayar Hein</span>
            <span>Bangkok · Remote</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
