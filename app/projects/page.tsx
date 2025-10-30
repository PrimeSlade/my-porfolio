import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../components/projects/projects";

const ProjectPage = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <p className="text-gray-400">
            Production-grade systems and infrastructure solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
