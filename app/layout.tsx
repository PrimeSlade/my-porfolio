import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import BackgroundEffects from "./components/BackgroundEffects";
import { site } from "@/lib/site";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Sai Zayar Hein",
    "PrimeSlade",
    "full-stack developer",
    "back-end engineer",
    "software engineer Bangkok",
    "Node.js",
    "NestJS",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
  ],
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: `${site.name} · Blog` }] },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // set these in Vercel after adding the site to Google Search Console / Bing Webmaster Tools
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
      other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION },
    }),
  },
  icons: {
    icon: [
      { url: "/icon0.svg?v=5", type: "image/svg+xml" },
      { url: "/favicon.ico?v=5", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png?v=5", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Applies a saved light/dark choice before first paint so the page never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <BackgroundEffects />
        <SiteHeader />
        <main id="main" className="container frame">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
