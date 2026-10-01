import { Database, Server, Workflow } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiAmazonwebservices,
  SiDigitalocean,
  SiNginx,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHono,
  SiPrisma,
  SiReactquery,
  SiTailwindcss,
  SiShadcnui,
  SiGo,
  SiGraphql,
  SiNestjs,
  SiSocketdotio,
} from "react-icons/si";

export type SkillCategory = "lang" | "web" | "api" | "db" | "ops";

export type Skill = {
  name: string;
  Icon: React.ElementType;
  category: SkillCategory;
  brand?: string; // brand hex; omitted for monochrome logos, which follow the text color
  big?: boolean; // key tools get a 2x2 tile
};

export const skillCategories: { id: SkillCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "lang", label: "Languages" },
  { id: "web", label: "Websites & apps" },
  { id: "api", label: "Servers & APIs" },
  { id: "db", label: "Databases" },
  { id: "ops", label: "Cloud" },
];

// 20 small + 7 big tiles = 48 grid cells, so 8, 6 and 4 columns all fill evenly.
export const skills: Skill[] = [
  { name: "TypeScript", Icon: SiTypescript, category: "lang", brand: "#3178C6", big: true },
  { name: "JavaScript", Icon: SiJavascript, category: "lang", brand: "#E8C300" },
  { name: "Java", Icon: SiOpenjdk, category: "lang", brand: "#ED8B00", big: true },
  { name: "Go", Icon: SiGo, category: "lang", brand: "#00ADD8" },
  { name: "SQL", Icon: Database, category: "lang" },
  { name: "React", Icon: SiReact, category: "web", brand: "#149ECA", big: true },
  { name: "Next.js", Icon: SiNextdotjs, category: "web", big: true },
  { name: "Tailwind CSS", Icon: SiTailwindcss, category: "web", brand: "#06B6D4" },
  { name: "TanStack Query", Icon: SiReactquery, category: "web", brand: "#FF4154" },
  { name: "shadcn/ui", Icon: SiShadcnui, category: "web" },
  { name: "Node.js", Icon: SiNodedotjs, category: "api", brand: "#339933" },
  { name: "NestJS", Icon: SiNestjs, category: "api", brand: "#E0234E", big: true },
  { name: "Express", Icon: SiExpress, category: "api" },
  { name: "Hono", Icon: SiHono, category: "api", brand: "#E36002" },
  { name: "GraphQL", Icon: SiGraphql, category: "api", brand: "#E10098" },
  { name: "Socket.IO", Icon: SiSocketdotio, category: "api" },
  { name: "BullMQ", Icon: Workflow, category: "api", brand: "#DC382D" },
  { name: "PostgreSQL", Icon: SiPostgresql, category: "db", brand: "#4169E1", big: true },
  { name: "MySQL", Icon: SiMysql, category: "db", brand: "#4479A1" },
  { name: "Redis", Icon: SiRedis, category: "db", brand: "#DC382D" },
  { name: "MongoDB", Icon: SiMongodb, category: "db", brand: "#47A248" },
  { name: "Prisma", Icon: SiPrisma, category: "db" },
  { name: "Docker", Icon: SiDocker, category: "ops", brand: "#2496ED", big: true },
  { name: "AWS", Icon: SiAmazonwebservices, category: "ops", brand: "#FF9900" },
  { name: "DigitalOcean", Icon: SiDigitalocean, category: "ops", brand: "#0080FF" },
  { name: "Nginx", Icon: SiNginx, category: "ops", brand: "#009639" },
  { name: "Coolify", Icon: Server, category: "ops", brand: "#6B16ED" },
];
