import { Project } from "./projects";

// Brand colors for tech logos; monochrome logos fall back to the text color.
const brandMap: Record<string, string> = {
  NestJS: "#E0234E",
  TypeScript: "#3178C6",
  JavaScript: "#E8C300",
  "Node.js": "#339933",
  PostgreSQL: "#4169E1",
  "Cloudflare R2": "#F38020",
  Excalidraw: "#6965DB",
  TanStack: "#FF4154",
  Zod: "#3E67B1",
  React: "#149ECA",
  Hono: "#E36002",
  MySQL: "#4479A1",
  SQLite: "#0F80CC",
  Knex: "#E16426",
  Docker: "#2496ED",
  Redis: "#DC382D",
  Cloudinary: "#3448C5",
  Gemini: "#8E75FF",
  MongoDB: "#47A248",
  RabbitMQ: "#FF6600",
  Vite: "#646CFF",
  "Tailwind CSS": "#06B6D4",
  Nginx: "#009639",
  Swagger: "#85EA2D",
  Jest: "#C21325",
  "GitHub Actions": "#2088FF",
};

const statusLabel: Record<string, string> = {
  Development: "In development",
  Production: "In production",
  Stable: "Stable",
};

const MAX_CHIPS = 5;

const ProjectCard = ({
  title,
  status,
  summary,
  impact,
  tile,
  description,
  tech,
  date,
  repositories,
  demo,
  demoCredentials,
}: Project) => {
  const shown = tech.slice(0, MAX_CHIPS);
  const hidden = tech.length - shown.length;

  return (
    <article className="proj spot" style={{ background: `var(--${tile})` }}>
      <div className="top">
        <span className={`badge${status === "Production" ? " live" : ""}`}>
          {statusLabel[status] ?? status}
        </span>
        <span className="year">{date}</span>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <p className="impact">{impact}</p>

      <div className="chips">
        {shown.map(({ name, icon: Icon }) => (
          <span className="chip" key={name}>
            <Icon aria-hidden="true" style={{ color: brandMap[name] ?? "currentColor" }} />
            {name}
          </span>
        ))}
        {hidden > 0 && (
          <span className="chip" title={tech.slice(MAX_CHIPS).map((t) => t.name).join(", ")}>
            +{hidden}
          </span>
        )}
      </div>

      <details className="details">
        <summary>Technical details</summary>
        <p>{description.trim()}</p>
      </details>

      {demoCredentials && (
        <div className="creds">
          <span>
            Demo login: <code>{demoCredentials.username}</code>
          </span>
          <span>
            Password: <code>{demoCredentials.password}</code>
          </span>
        </div>
      )}

      <div className="acts">
        {demo && (
          <a className="pill solid" href={demo} target="_blank" rel="noopener noreferrer">
            Live demo ↗
          </a>
        )}
        {repositories?.map((repo) => (
          <a
            key={repo.url}
            className="pill"
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.label === "Backend" ? "Back-end code" : "Code"}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
