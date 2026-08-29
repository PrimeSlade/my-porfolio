import {
  Database,
  Layers,
  Server,
  PackageOpen,
  Code2,
  Workflow,
  Shield,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiMongodb,
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
  SiSocketdotio,
} from "react-icons/si";

export type TechItem = {
  name: string;
  Icon?: React.ElementType;
  brand?: string; // hex or tailwind color, for real brand color
};

export type TechCard = {
  title: string;
  icon: React.ElementType;
  items: TechItem[];
};

export const techData: TechCard[] = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "JavaScript", Icon: SiJavascript, brand: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, brand: "#3178C6" },
      { name: "Node.js", Icon: SiNodedotjs, brand: "#339933" },
      { name: "Java", Icon: SiOpenjdk, brand: "#ED8B00" },
      { name: "Go", Icon: SiGo, brand: "#00ADD8" },
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: [
      { name: "React", Icon: SiReact, brand: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, brand: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, brand: "#06B6D4" },
      { name: "Shadcn/ui", Icon: SiShadcnui, brand: "#FFFFFF" },
      { name: "TanStack Query", Icon: SiReactquery, brand: "#FF4154" },
      { name: "Jest", Icon: SiJest, brand: "#C21325" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Express", Icon: SiExpress, brand: "#FFFFFF" },
      { name: "Hono", Icon: SiHono, brand: "#E36002" },
      { name: "NestJS", Icon: SiNestjs, brand: "#E0234E" },
      { name: "Prisma", Icon: SiPrisma, brand: "#2D3748" },
      { name: "GraphQL", Icon: SiGraphql, brand: "#E10098" },
      { name: "BullMQ", Icon: Workflow, brand: "#FF3432" },
      { name: "Socket.IO", Icon: SiSocketdotio, brand: "#FFFFFF" },
      { name: "Better Auth", Icon: Shield, brand: "#FFFFFF" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, brand: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, brand: "#4479A1" },
      { name: "SQLite", Icon: SiSqlite, brand: "#003B57" },
      { name: "Redis", Icon: SiRedis, brand: "#DC382D" },
      { name: "MongoDB", Icon: SiMongodb, brand: "#47A248" },
    ],
  },
  {
    title: "Infrastructure",
    icon: Server,
    items: [
      { name: "Docker", Icon: SiDocker, brand: "#2496ED" },
      { name: "AWS", Icon: SiAmazon, brand: "#FF9900" },
      { name: "DigitalOcean", Icon: SiDigitalocean, brand: "#0080FF" },
      { name: "Nginx", Icon: SiNginx, brand: "#009639" },
      { name: "Heroku", Icon: SiHeroku, brand: "#430098" },
    ],
  },
  {
    title: "Libraries & Tools",
    icon: PackageOpen,
    items: [
      { name: "Prisma", Icon: SiPrisma, brand: "#FFFFFF" },
      { name: "TanStack", Icon: SiReactquery, brand: "#FF4154" },
      { name: "Jest", Icon: SiJest, brand: "#C21325" },
      { name: "Tailwind", Icon: SiTailwindcss, brand: "#06B6D4" },
      { name: "Shadcn", Icon: SiShadcnui, brand: "#FFFFFF" },
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
  { name: "GraphQL", Icon: SiGraphql, brand: "#E10098" },
  { name: "Go", Icon: SiGo, brand: "#00ADD8" },
];
