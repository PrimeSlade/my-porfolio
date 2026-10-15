import { projects } from "../components/projects/projects";
import { getPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// Plain-text site summary for AI assistants and AI search (https://llmstxt.org).
export async function GET() {
  const posts = (await getPosts()).filter((p) => !p.draft);

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} (${site.handle}) is based in ${site.location} and open to ${site.workModes} work. Contact: ${site.email}. Studying B.Sc. Computer Science at ${site.school}.`,
    "",
    "## Pages",
    "",
    `- [Home](${site.url}/): overview, experience, skills and GitHub activity`,
    `- [Projects](${site.url}/projects): every project with a plain-language summary`,
    `- [Blog](${site.url}/blog): writing on back-end engineering and system design`,
    `- [Contact](${site.url}/contact): email, phone and résumé`,
    "",
    "## Projects",
    "",
    ...projects.map((p) => `- [${p.title}](${site.url}/projects/${p.slug}): ${p.summary} (${p.date}, ${p.status})`),
    ...(posts.length
      ? ["", "## Blog posts", "", ...posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.description}`)]
      : []),
    "",
    "## Elsewhere",
    "",
    `- [GitHub](${site.github})`,
    `- [LinkedIn](${site.linkedin})`,
    `- [Résumé (PDF)](${site.url}/resume.pdf)`,
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
