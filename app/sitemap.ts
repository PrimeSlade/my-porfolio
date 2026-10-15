import type { MetadataRoute } from "next";
import { projects } from "./components/projects/projects";
import { getPosts } from "@/lib/blog";
import { parseMonth, site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getPosts()).filter((p) => !p.draft);
  // pages change when their content does, so date them by the newest project or post
  const projectDates = projects.map((p) => parseMonth(p.date)).filter((d): d is Date => !!d);
  const postDate = (p: (typeof posts)[number]) => new Date(`${p.updated ?? p.date}T00:00:00Z`);
  const newest = (dates: Date[]) => new Date(Math.max(...dates.map((d) => d.getTime())));
  const latestProject = newest(projectDates);
  const latestPost = posts.length ? newest(posts.map(postDate)) : undefined;
  const latest = latestPost && latestPost > latestProject ? latestPost : latestProject;

  return [
    { url: site.url, lastModified: latest, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projects`, lastModified: latestProject, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog`, ...(latestPost && { lastModified: latestPost }), changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.5 },
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: parseMonth(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: postDate(p),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
