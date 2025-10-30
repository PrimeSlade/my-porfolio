import { Code2, Database, Layers, Server, PackageOpen } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiDigitalocean,
  SiNginx,
  SiHeroku,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHono,
  SiPrisma,
  SiReactquery,
  SiJest,
  SiTailwindcss,
  SiShadcnui,
  SiGo,
  SiGraphql,
  SiNestjs,
} from "react-icons/si";

type TechItem = {
  name: string;
  color: string;
  Icon?: React.ElementType;
};

type TechCard = {
  title: string;
  color: string;
  icon: React.ElementType;
  items: TechItem[];
};

export const techData: TechCard[] = [
  {
    title: "Languages",
    color: "green",
    icon: Code2,
    items: [
      { name: "JavaScript", color: "green", Icon: SiJavascript },
      { name: "Node.js / TypeScript", color: "green", Icon: SiTypescript },
      { name: "Node.js", color: "green", Icon: SiNodedotjs },
      { name: "Java", color: "green", Icon: SiOpenjdk },
    ],
  },
  {
    title: "Frameworks",
    color: "purple",
    icon: Layers,
    items: [
      { name: "React", color: "purple", Icon: SiReact },
      { name: "Next.js", color: "purple", Icon: SiNextdotjs },
      { name: "Express", color: "purple", Icon: SiExpress },
      { name: "Hono", color: "purple", Icon: SiHono },
    ],
  },
  {
    title: "Libraries",
    color: "pink",
    icon: PackageOpen,
    items: [
      { name: "Prisma", color: "pink", Icon: SiPrisma },
      { name: "TanStack Query", color: "pink", Icon: SiReactquery },
      { name: "Jest", color: "pink", Icon: SiJest },
      { name: "Tailwind CSS", color: "pink", Icon: SiTailwindcss },
      { name: "Shadcn", color: "pink", Icon: SiShadcnui },
    ],
  },
  {
    title: "Databases",
    color: "blue",
    icon: Database,
    items: [
      { name: "PostgreSQL", color: "blue", Icon: SiPostgresql },
      { name: "MySQL", color: "blue", Icon: SiMysql },
      { name: "SQLite", color: "blue", Icon: SiSqlite },
      { name: "Redis", color: "blue", Icon: SiRedis },
    ],
  },
  {
    title: "Infrastructure",
    color: "amber",
    icon: Server,
    items: [
      { name: "Docker", color: "amber", Icon: SiDocker },
      { name: "AWS", color: "amber", Icon: SiAmazon },
      { name: "Digital Ocean", color: "amber", Icon: SiDigitalocean },
      { name: "Nginx", color: "amber", Icon: SiNginx },
      { name: "Heroku", color: "amber", Icon: SiHeroku },
    ],
  },
];

export const frontendExpertise = [
  "React & Next.js Development",
  "Responsive UI Design",
  "Modern CSS (Tailwind, CSS-in-JS)",
  "TanStack Query (React Query)",
];

export const backendExpertise = [
  "System Design & Architecture",
  "API Development (RESTful)",
  "Database Optimization & Scaling",
  "Authentication & Authorization",
  "DevOps & CI/CD (Docker, CircleCI)",
  "Modern Development Tooling (TypeScript)",
];

export const currentlyLearning = [
  { name: "GraphQL", Icon: SiGraphql },
  { name: "NestJs", Icon: SiNestjs },
  { name: "Go", Icon: SiGo },
];
