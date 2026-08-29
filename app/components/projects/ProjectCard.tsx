import Link from "next/link";
import { Project } from "./projects";
import { GitBranch, ExternalLink, KeyRound } from "lucide-react";

// Real brand colors — same palette as main Stack (muted bg #0a0a0a)
const brandMap: Record<string, string> = {
  "Next.js": "#FFFFFF",
  NestJS: "#E0234E",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Node.js": "#339933",
  "Socket.IO": "#FFFFFF",
  PostgreSQL: "#4169E1",
  "Cloudflare R2": "#F38020",
  Cloudflare: "#F38020",
  Excalidraw: "#FFED4A",
  Prisma: "#FFFFFF",
  "Better Auth": "#FFFFFF",
  TanStack: "#FF4154",
  Shadcn: "#FFFFFF",
  "Shadcn/ui": "#FFFFFF",
  Zod: "#3E67B1",
  React: "#61DAFB",
  Express: "#FFFFFF",
  Hono: "#E36002",
  MySQL: "#4479A1",
  SQLite: "#003B57",
  Knex: "#E16426",
  Docker: "#2496ED",
  Redis: "#DC382D",
  Cloudinary: "#3448C5",
  Gemini: "#8E75FF",
  MongoDB: "#47A248",
  BullMQ: "#FF3432",
  "React Query": "#FF4154",
};

const getBrand = (name: string) => brandMap[name] ?? "#e5e5e5";

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
    <div className="group border border-white/[0.06] bg-[#0a0a0a] hover:border-white/10 transition-colors">
      {/* Top bar */}
      <div className="flex items-start justify-between px-6 py-4 border-b border-white/[0.06] bg-[#111111]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 border border-white/[0.06] bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#e5e5e5] group-hover:border-[#e5e5e5] transition-colors">
            <Icon size={14} className="text-[#e5e5e5] group-hover:text-[#0a0a0a]" />
          </span>
          <div>
            <h3 className="text-[15px] font-bold tracking-tight text-[#e5e5e5] leading-none">
              {title}
            </h3>
            <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-neutral-500">
              {status}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 border border-white/[0.06] px-2 py-1">
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

        {/* Tech Tags — real icons like main Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((item) => (
            <span
              key={item.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/[0.06] bg-[#111111] text-[11px] font-mono tracking-[0.06em] text-neutral-300 hover:bg-[#e5e5e5] hover:text-[#0a0a0a] hover:border-[#e5e5e5] transition-colors group/tag"
            >
              <item.icon size={14} style={{ color: getBrand(item.name) }} className="shrink-0 group-hover/tag:!text-[#0a0a0a] transition-colors" /> {item.name}
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
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/[0.06] text-[11px] tracking-[0.12em] uppercase font-mono text-neutral-400 hover:bg-[#e5e5e5] hover:text-[#0a0a0a] hover:border-[#e5e5e5] transition-colors"
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
              className="inline-flex items-center gap-2 bg-[#e5e5e5] text-[#0a0a0a] px-4 py-2 text-[11px] tracking-[0.12em] uppercase font-bold hover:bg-white transition-colors"
            >
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </Link>
          </div>
        )}

        {/* Demo Credentials */}
        {demoCredentials && (
          <div className="border border-white/[0.06] bg-[#111111] p-3">
            <div className="flex items-center gap-2 mb-2">
              <KeyRound size={12} className="text-neutral-500" />
              <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-neutral-500">
                Demo Credentials
              </span>
            </div>
            <div className="space-y-1.5 font-mono text-[12px]">
              <div className="flex justify-between border-b border-white/[0.03] pb-1.5">
                <span className="text-neutral-500">Username</span>
                <code className="text-[#e5e5e5] bg-[#0a0a0a] border border-white/[0.06] px-2 py-0.5">
                  {demoCredentials.username}
                </code>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Password</span>
                <code className="text-[#e5e5e5] bg-[#0a0a0a] border border-white/[0.06] px-2 py-0.5">
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
