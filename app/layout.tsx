import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Zayar Hein — PrimeSlade",
  description:
    "Full-stack developer portfolio showcasing web development projects, skills, and experience in modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-[#e5e5e5] selection:bg-[#e5e5e5] selection:text-[#0a0a0a]`}
      >
        <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen">
          <Navbar />
          <div className="min-h-screen pt-[57px]">{children}</div>
          <footer className="border-t border-white/[0.06] py-6 px-6">
            <div className="max-w-7xl mx-auto flex text-[11px] tracking-[0.18em] uppercase text-neutral-500 font-mono">
              <span>© {new Date().getFullYear()} Sai Zayar Hein</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
