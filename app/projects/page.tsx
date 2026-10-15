import PageHead from "../components/PageHead";
import ProjectCard from "../components/projects/ProjectCard";
import ColorKey from "../components/projects/ColorKey";
import { projects } from "../components/projects/projects";
import JsonLd from "../components/JsonLd";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by Sai Zayar Hein: a booking engine with automatic rollback, a scalable news feed, a clinic point-of-sale system in daily use, real-time chat and more.",
  path: "/projects",
});

const ProjectsPage = () => (
  <>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Projects by ${site.name}`,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${site.url}/projects/${p.slug}`,
          name: p.title,
        })),
      }}
    />
    <PageHead
      title="Projects"
      lede={`${projects.length} builds from 2025–2026. Each card says what it does first and lists the tech second. Open one for the full write-up.`}
    />
    <section>
      <ColorKey />
      <div className="grid-2 boxed">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} headingLevel={2} />
        ))}
      </div>
    </section>
  </>
);

export default ProjectsPage;
