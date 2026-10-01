import Link from "next/link";
import Hero from "./components/home/Hero";
import WhatIDo from "./components/home/WhatIDo";
import Experience from "./components/home/Experience";
import SkillWall from "./components/home/SkillWall";
import GitHubContributions from "./components/home/GitHubContributions";
import ProjectCard from "./components/projects/ProjectCard";
import { projects } from "./components/projects/projects";
import ContactPanel from "./components/ContactPanel";

const featured = projects.filter((p) => p.featured);

const page = () => {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <Experience />

      <section className="section">
        <div className="sec-head">
          <h2>Selected projects</h2>
          <p>What each one does first, the tech second.</p>
        </div>
        <div className="projects">
          {featured.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="see-all">
          <Link className="pill solid" href="/projects">
            See all {projects.length} projects →
          </Link>
        </div>
      </section>

      <SkillWall />
      <GitHubContributions />

      <section className="section">
        <ContactPanel />
      </section>
    </main>
  );
};

export default page;
