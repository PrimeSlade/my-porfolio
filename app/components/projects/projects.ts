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
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Distributed Cache System",
    status: "Active",
    icon: User,
    color: "green",
    description:
      "High-performance caching layer using Redis clusters. Reduced API response time by 70% and improved system throughput by 3x.",
    tech: [
      { name: "Go", icon: SiGo },
      { name: "Redis", icon: SiRedis },
      { name: "Docker", icon: SiDocker },
    ],
    date: "Jul 2025",
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
  },
];
