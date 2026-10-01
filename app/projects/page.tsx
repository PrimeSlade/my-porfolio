import type { Metadata } from "next";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../components/projects/projects";

export const metadata: Metadata = {
  title: "Projects — Sai Zayar Hein",
};

const ProjectPage = () => {
  return (
    <main className="page-head">
      <div className="sec-head">
        <h1 className="page-title">Projects</h1>
        <p>
          {projects.length} builds from 2025–2026. Each card says what it does first
          and lists the tech second.
        </p>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
