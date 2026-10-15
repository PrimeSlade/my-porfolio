import fs from "node:fs";
import path from "node:path";

/** Exported as `metadata` from each post in content/blog/<slug>.mdx */
export type PostFrontmatter = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-10-15" */
  date: string;
  /** ISO date of the last meaningful edit, if any */
  updated?: string;
  tags?: string[];
  /** Drafts show up in `pnpm dev` only */
  draft?: boolean;
};

export type Post = PostFrontmatter & { slug: string; readingMinutes: number };

const DIR = path.join(process.cwd(), "content/blog");
const showDrafts = process.env.NODE_ENV !== "production";

export async function getPosts(): Promise<Post[]> {
  if (!fs.existsSync(DIR)) return [];
  // files starting with "_" (like _template.mdx) are never listed or published
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = (await import(`@/content/blog/${slug}.mdx`)) as {
        metadata: PostFrontmatter;
      };
      const words = fs.readFileSync(path.join(DIR, file), "utf8").split(/\s+/).length;
      return { ...metadata, slug, readingMinutes: Math.max(1, Math.round(words / 220)) };
    }),
  );

  return posts
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
