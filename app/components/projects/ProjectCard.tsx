import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "./projects";
import { statusLabel, techArea } from "./brands";

const MAX_TAGS = 4;

const ProjectCard = ({ title, slug, area, status, summary, impact, tech, date, repositories, demo, headingLevel = 3 }: Project & { headingLevel?: 2 | 3 }) => {
  const Heading = `h${headingLevel}` as const;
  const shown = tech.slice(0, MAX_TAGS);
  const hidden = tech.length - shown.length;

  return (
    <article className="card proj" data-hue={area}>
      <div className="card-header">
        <Heading className="card-title">
          <Link href={`/projects/${slug}`}>{title}</Link>
        </Heading>
        <span className="when">{date}</span>
        <p className="card-desc">{summary}</p>
      </div>
      <div className="proj-body">
        <span className="impact">{impact}</span>
        <div className="tags">
          {status === "Production" && (
            <span className="badge">
              <span className="dot" />
              {statusLabel[status]}
            </span>
          )}
          {status === "Development" && <span className="badge">{statusLabel[status]}</span>}
          {shown.map((t) => (
            <span className="badge badge-secondary" key={t.name} data-hue={techArea[t.name]}>
              {t.name}
            </span>
          ))}
          {hidden > 0 && <span className="badge badge-secondary">+{hidden}</span>}
        </div>
      </div>
      <div className="card-footer">
        {demo && (
          <a className="btn btn-default btn-sm" href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink aria-hidden="true" />
            Live demo
          </a>
        )}
        {repositories?.slice(0, 1).map((repo) => (
          <a key={repo.url} className="btn btn-outline btn-sm" href={repo.url} target="_blank" rel="noopener noreferrer">
            <SiGithub aria-hidden="true" />
            Source
          </a>
        ))}
        <Link className="btn btn-ghost btn-sm" href={`/projects/${slug}`} aria-label={`Details about ${title}`}>
          Details →
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
