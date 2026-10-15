import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { projects } from "../../components/projects/projects";
import { brandMap, statusLabel, techArea } from "../../components/projects/brands";
import { clampDescription, pageMetadata, parseMonth, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  // summary + result, then as many key tools as still fit in a full sentence
  const full = `${project.summary} ${project.impact}.`;
  const base = full.length <= 160 ? full : project.summary;
  let description = clampDescription(base);
  for (let n = 4; n > 0; n--) {
    const withTech = `${base} Built with ${project.tech.slice(0, n).map((t) => t.name).join(", ")}.`;
    if (withTech.length <= 160) {
      description = withTech;
      break;
    }
  }
  return pageMetadata({ title: project.title, description, path: `/projects/${slug}` });
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const prev = projects[i - 1];
  const next = projects[i + 1];
  const repo = p.repositories?.[0];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: p.title,
          description: p.description,
          url: `${site.url}/projects/${p.slug}`,
          dateCreated: parseMonth(p.date)?.toISOString().slice(0, 10),
          ...(repo && { codeRepository: repo.url }),
          ...(p.demo && { sameAs: p.demo }),
          keywords: p.tech.map((t) => t.name).join(", "),
          author: { "@type": "Person", name: site.name, url: site.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Projects", item: `${site.url}/projects` },
            { "@type": "ListItem", position: 2, name: p.title, item: `${site.url}/projects/${p.slug}` },
          ],
        }}
      />

      <PageHead title={p.title} lede={p.summary} crumbs={[{ href: "/projects", label: "Projects" }]}>
        <div className="actions">
          {p.demo && (
            <a className="btn btn-default" href={p.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" />
              Live demo
            </a>
          )}
          {p.repositories?.map((r) => (
            <a key={r.url} className="btn btn-outline" href={r.url} target="_blank" rel="noopener noreferrer">
              <SiGithub aria-hidden="true" />
              {p.repositories!.length > 1 ? `${r.label} code` : "Source code"}
            </a>
          ))}
        </div>
      </PageHead>

      <section>
        <div className="detail boxed">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Overview</h2>
            </div>
            <div className="prose">
              <p>{p.description.trim()}</p>
            </div>
            <span className="impact">{p.impact}</span>
          </div>
          <div className="card facts">
            <div className="row">
              <span>Status</span>
              <span>{statusLabel[p.status] ?? p.status}</span>
            </div>
            <div className="row">
              <span>Date</span>
              <span>{p.date}</span>
            </div>
            <div className="row">
              <span>Tech</span>
              <span>{p.tech.length} tools</span>
            </div>
            {p.demoCredentials && (
              <div className="row creds">
                <span>Demo login</span>
                <span>
                  <code>{p.demoCredentials.username}</code>
                  <br />
                  <code>{p.demoCredentials.password}</code>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="section-head">
          <div>
            <h2>Built with</h2>
          </div>
        </div>
        <ul className="tech-grid boxed">
          {p.tech.map(({ name, icon: Icon }) => (
            <li className="tech" key={name} data-hue={techArea[name]}>
              <Icon aria-hidden="true" style={{ color: brandMap[name] ?? "currentColor" }} />
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <nav className="pager boxed" aria-label="More projects">
          {prev ? (
            <Link href={`/projects/${prev.slug}`}>
              <span>← Newer</span>
              <b>{prev.title}</b>
            </Link>
          ) : (
            <Link href="/projects">
              <span>←</span>
              <b>All projects</b>
            </Link>
          )}
          {next ? (
            <Link href={`/projects/${next.slug}`}>
              <span>Older →</span>
              <b>{next.title}</b>
            </Link>
          ) : (
            <Link href="/projects">
              <span>→</span>
              <b>All projects</b>
            </Link>
          )}
        </nav>
      </section>
    </>
  );
};

export default ProjectPage;
