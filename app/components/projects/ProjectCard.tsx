import { colorStyles } from "../../lib/colorStyles";
import { Project } from "./projects";
import { GitBranch } from "lucide-react";

const ProjectCard = ({
  title,
  status,
  color,
  description,
  tech,
  icon: Icon,
}: Project) => {
  const styles =
    colorStyles[color as keyof typeof colorStyles] || colorStyles.blue;

  return (
    <div
      className={`border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 rounded-xl
      transition-all duration-300 group ${styles.border} ${styles.hoverBorder} ${styles.shadow}`}
    >
      {/* Icon + Status */}
      <div className="flex items-start justify-between mb-4">
        <Icon size={14} className="text-gray-500" />
        <div className="flex gap-2 items-center">
          <GitBranch size={14} className="text-gray-500" />
          <span className="text-xs text-gray-500">{status}</span>
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold mb-3 text-gray-100 transition-colors ${styles.groupHoverText}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Tech Tags with Icons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item.name}
            className={`px-3 py-1 bg-slate-800/80 ${styles.text} text-xs font-medium rounded-md border border-slate-700/50 flex items-center gap-1`}
          >
            <item.icon size={14} /> {item.name}
          </span>
        ))}
      </div>

      {/* Repository Link */}
      <div
        className={`flex items-center gap-2 text-sm text-gray-500 transition-colors ${styles.groupHoverText}`}
      >
        <span>View repository</span>
        <span className="transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
