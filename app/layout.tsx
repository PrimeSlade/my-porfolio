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
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
      >
        <div className="bg-black text-white min-h-screen">
          <Navbar />
          <div className="min-h-screen pt-[57px]">{children}</div>
          <footer className="border-t border-white/10 py-6 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-[11px] tracking-[0.18em] uppercase text-neutral-500 font-mono">
              <span>© {new Date().getFullYear()} Sai Zayar Hein</span>
              <span>Built with Next.js — Black & White</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
