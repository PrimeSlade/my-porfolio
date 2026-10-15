import type { Metadata } from "next";

export const site = {
  url: "https://www.primeslade.dev",
  name: "Sai Zayar Hein",
  handle: "PrimeSlade",
  role: "Full-stack software engineer",
  description:
    "Sai Zayar Hein is a full-stack software engineer in Bangkok who builds web apps businesses rely on, with a focus on reliable back ends.",
  location: "Bangkok, Thailand",
  /** Kinds of work arrangement I'm open to; shown next to the location */
  workModes: "on-site, hybrid or remote",
  email: "saib6064@gmail.com",
  phone: "+66 97 018 4800",
  phoneHref: "tel:+66970184800",
  github: "https://github.com/PrimeSlade",
  linkedin: "https://www.linkedin.com/in/saizayarhein",
  leetcode: "https://leetcode.com/u/Sladeee/",
  school: "King Mongkut's University of Technology Thonburi",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/** Trims to the ~160 characters search results show, ending on a whole word. */
export function clampDescription(text: string, max = 160) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/[\s,.;:]+\S*$/, "")}…`;
}

/** Project dates are written like "Sep 2026"; this turns them into a Date for sitemaps and schema. */
export function parseMonth(label: string) {
  const d = new Date(`1 ${label} UTC`);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

/** Per-page metadata with a canonical URL and matching Open Graph / Twitter fields. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title?: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const ogTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`;
  return {
    // pages without a title (home) keep the layout's default instead of clearing it
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: { title: ogTitle, description, url: path, type, siteName: site.name, locale: "en_US" },
    twitter: { card: "summary_large_image", title: ogTitle, description },
  };
}
