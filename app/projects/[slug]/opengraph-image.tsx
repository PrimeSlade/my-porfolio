import { ogImage, ogSize } from "@/lib/og";
import { projects } from "../../components/projects/projects";
import { techArea } from "../../components/projects/brands";

export const alt = "Project by Sai Zayar Hein";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug)!;
  return ogImage({
    title: p.title,
    area: p.area,
    subtitle: [p.impact],
    stack: p.tech.map((t) => ({ name: t.name, area: techArea[t.name] })),
  });
}
