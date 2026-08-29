import Link from "next/link";
import { Project } from "./projects";
import { GitBranch, ExternalLink, KeyRound } from "lucide-react";

const ProjectCard = ({
  title,
  status,
  description,
  tech,
  icon: Icon,
  repositories,
  demo,
  demoCredentials,
}: Project) => {
  return (
    <div className="group border border-white/10 bg-black hover:border-white/20 transition-colors">
      {/* Top bar */}
      <div className="flex items-start justify-between px-6 py-4 border-b border-white/10 bg-[#050505]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 border border-white/10 bg-black flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
            <Icon size={14} className="text-white group-hover:text-black" />
          </span>
          <div>
            <h3 className="text-[15px] font-bold tracking-tight text-white leading-none">
              {title}
            </h3>
            <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-neutral-500">
              {status}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 border border-white/10 px-2 py-1">
          <GitBranch size={12} className="text-neutral-500" />
          <span className="text-[10px] tracking-[0.12em] uppercase font-mono text-neutral-500">
            {status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[13px] leading-6 font-mono text-neutral-400 mb-5">
          {description}
        </p>

        {/* Tech Tags - monochrome sharp pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((item) => (
            <span
              key={item.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 bg-[#0a0a0a] text-[11px] font-mono tracking-[0.06em] text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-colors"
            >
              <item.icon size={12} /> {item.name}
            </span>
          ))}
        </div>

        {/* Repository Links */}
        {repositories && repositories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repositories.map((repo) => (
              <Link
                key={repo.label}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 text-[11px] tracking-[0.12em] uppercase font-mono text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <span>{repo.label}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        )}

        {/* Demo Link */}
        {demo && (
          <div className="mb-4">
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[11px] tracking-[0.12em] uppercase font-bold hover:bg-neutral-200 transition-colors"
            >
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </Link>
          </div>
        )}

        {/* Demo Credentials */}
        {demoCredentials && (
          <div className="border border-white/10 bg-[#050505] p-3">
            <div className="flex items-center gap-2 mb-2">
              <KeyRound size={12} className="text-neutral-500" />
              <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-neutral-500">
                Demo Credentials
              </span>
            </div>
            <div className="space-y-1.5 font-mono text-[12px]">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-neutral-500">Username</span>
                <code className="text-white bg-black border border-white/10 px-2 py-0.5">
                  {demoCredentials.username}
                </code>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Password</span>
                <code className="text-white bg-black border border-white/10 px-2 py-0.5">
                  {demoCredentials.password}
                </code>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
