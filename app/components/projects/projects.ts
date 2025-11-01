import {
  SiGo,
  SiRedis,
  SiDocker,
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiKubernetes,
  SiTerraform,
  SiAmazon,
  SiTypescript,
  SiExpress,
  SiReact,
  SiPrisma,
  SiZod,
  SiShadcnui,
} from "react-icons/si";
import { LucideIcon, User, Users } from "lucide-react";

export type Tech = {
  name: string;
  icon: any; // React component
};

export type Project = {
  id: number;
  title: string;
  status: string;
  icon: LucideIcon;
  color: "green" | "blue" | "amber";
  description: string;
  tech: Tech[];
  date: string;
  demo?: string;
  demoCredentials?: {
    username: string;
    password: string;
  };
  repositories?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Medical Clinic POS System",
    status: "Production",
    icon: User,
    color: "green",
    description:
      "A full-stack healthcare Point-of-Sale and management system designed for medical clinics and pharmacies. The platform improves operational efficiency through attribute-based access control (ABAC), multi-unit inventory tracking, patient record management, treatment documentation, dynamic invoicing, expense tracking, and financial reporting.",
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TanStack", icon: SiReact },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Docker", icon: SiDocker },
      { name: "Zod", icon: SiZod },
    ],
    date: "Jul 2025",
    demo: "https://medpos.primeslade.dev",
    demoCredentials: {
      username: "sai@email.com",
      password: "111111",
    },
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/PrimeSlade/Point-Of-Sale-Frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/PrimeSlade/Point-Of-Sale-Backend",
      },
    ],
  },
  {
    id: 2,
    title: "Microservices Platform",
    status: "Production",
    icon: User,
    color: "blue",
    description:
      "Event-driven architecture handling 10M+ requests per day with 99.9% uptime. Fully containerized and orchestrated.",
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "RabbitMQ", icon: SiRabbitmq },
    ],
    date: "Apr 2025",
    repositories: [
      { label: "API Gateway", url: "https://github.com/username/api-gateway" },
      {
        label: "Auth Service",
        url: "https://github.com/username/auth-service",
      },
    ],
  },
  {
    id: 3,
    title: "REST API Framework",
    status: "Stable",
    icon: Users,
    color: "amber",
    description:
      "Lightweight framework with built-in validation, authentication, and rate limiting. Used across multiple production systems.",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "MongoDB", icon: SiMongodb },
    ],
    date: "Feb 2025",
    repositories: [
      { label: "Framework", url: "https://github.com/username/api-framework" },
    ],
  },
  {
    id: 4,
    title: "CI/CD Pipeline Automation",
    status: "Active",
    icon: Users,
    color: "blue",
    description:
      "Automated deployment pipeline reducing deployment time from hours to minutes. Infrastructure as code with full observability.",
    tech: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "AWS", icon: SiAmazon },
    ],
    date: "Dec 2025",
    repositories: [
      {
        label: "Infrastructure",
        url: "https://github.com/username/terraform-infra",
      },
      { label: "K8s Configs", url: "https://github.com/username/k8s-configs" },
    ],
  },
];
