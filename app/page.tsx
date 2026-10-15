import Link from "next/link";
import Hero from "./components/home/Hero";
import WhatIDo from "./components/home/WhatIDo";
import Experience from "./components/home/Experience";
import SkillWall from "./components/home/SkillWall";
import GitHubActivity from "./components/home/GitHubActivity";
import ProjectCard from "./components/projects/ProjectCard";
import ColorKey from "./components/projects/ColorKey";
import PostList from "./components/blog/PostList";
import ContactPanel from "./components/ContactPanel";
import JsonLd from "./components/JsonLd";
import { projects } from "./components/projects/projects";
import { getPosts } from "@/lib/blog";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({ description: site.description, path: "/" });

const featured = projects.filter((p) => p.featured);

const HomePage = async () => {
  // drafts never count here, so the section stays hidden until a real post is published
  const posts = (await getPosts()).filter((p) => !p.draft).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": `${site.url}/#profile`,
              url: site.url,
              name: `${site.name} · ${site.role}`,
              mainEntity: { "@id": `${site.url}/#person` },
            },
            {
              "@type": "Person",
              "@id": `${site.url}/#person`,
              name: site.name,
              alternateName: site.handle,
              url: site.url,
              jobTitle: site.role,
              email: `mailto:${site.email}`,
              address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
              alumniOf: { "@type": "CollegeOrUniversity", name: site.school },
              knowsAbout: ["Back-end development", "System design", "TypeScript", "Node.js", "NestJS", "React", "PostgreSQL", "Redis"],
              sameAs: [site.github, site.linkedin, site.leetcode],
            },
            {
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              url: site.url,
              name: site.name,
              author: { "@id": `${site.url}/#person` },
            },
          ],
        }}
      />
      <Hero />
      <WhatIDo />

      <section>
        <div className="section-head">
          <div>
            <h2>Selected projects</h2>
            <p>What each one does first, the tech second.</p>
          </div>
          <Link className="btn btn-outline btn-sm" href="/projects">
            View all {projects.length}
          </Link>
        </div>
        <ColorKey />
        <div className="grid-2 boxed">
          {featured.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <Experience />
      <SkillWall />
      <GitHubActivity />

      {posts.length > 0 && (
        <section>
          <div className="section-head">
            <div>
              <h2>Latest writing</h2>
              <p>Notes on back-end engineering and system design.</p>
            </div>
            <Link className="btn btn-outline btn-sm" href="/blog">
              All posts
            </Link>
          </div>
          <PostList posts={posts} />
        </section>
      )}

      <section>
        <ContactPanel />
      </section>
    </>
  );
};

export default HomePage;
