"use client";

import { Clock } from "lucide-react";
import { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../components/projects/projects";
import TimeLine from "../components/projects/TimeLine";

const ProjectPage = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleMouseEnter = (projectId: number) => {
    setActiveProject(projectId);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <p className="text-gray-400">
            Production-grade systems and infrastructure solutions
          </p>
        </div>

        <section className="flex gap-10">
          <div className="lg:w-[80%] w-full space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="w-[20%] sticky top-24 self-start hidden lg:block">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="text-gray-400" size={16} />
              <h3 className="text-md uppercase tracking-wider font-bold">
                Project Timeline
              </h3>
            </div>
            <div className="space-y-5 px-6">
              {projects.map((project) => (
                <TimeLine
                  {...project}
                  key={project.id}
                  active={activeProject === project.id}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectPage;
