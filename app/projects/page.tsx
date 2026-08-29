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

  const uniqueDates = Array.from(new Set(projects.map((p) => p.date)));

  return (
    <section id="projects" className="bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500">
            <span className="w-8 h-px bg-white/10" />
            Portfolio · 2025 — 2026
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-[#e5e5e5]">
            Projects
          </h2>
          <p className="font-mono text-sm text-neutral-500">
            Production-grade systems and infrastructure solutions —{" "}
            <span className="text-[#e5e5e5]">{projects.length} builds</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        <div className="lg:w-[78%] w-full space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
            >
              <ProjectCard {...project} active={activeProject === project.id} />
            </div>
          ))}
        </div>

        <div className="w-[22%] sticky top-20 self-start hidden lg:block">
          <div className="border border-white/[0.06] bg-[#111111]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <Clock className="text-neutral-500" size={14} />
              <h3 className="text-[11px] tracking-[0.18em] uppercase font-mono font-bold text-[#e5e5e5]">
                Timeline
              </h3>
            </div>
            <div className="p-4 space-y-1">
              {uniqueDates.map((date) => {
                const projectsWithDate = projects.filter((p) => p.date === date);
                const isActive = projectsWithDate.some((p) => p.id === activeProject);
                return (
                  <TimeLine
                    {...projectsWithDate[0]}
                    key={date}
                    active={isActive}
                  />
                );
              })}
            </div>
            <div className="px-4 py-3 border-t border-white/[0.06] text-[10px] font-mono tracking-[0.15em] uppercase text-neutral-600">
              Hover a project to highlight
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
