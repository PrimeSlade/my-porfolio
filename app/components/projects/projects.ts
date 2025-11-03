import {
  SiDocker,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiExpress,
  SiReact,
  SiPrisma,
  SiZod,
  SiShadcnui,
  SiMysql,
  SiCloudinary,
  SiGooglegemini,
  SiHono,
  SiJavascript,
  SiReactquery,
  SiSqlite,
  SiKnexdotjs,
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
  color: "green" | "blue" | "amber" | "cyan" | string;
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
      { name: "React", icon: SiReact },
      { name: "Express", icon: SiExpress },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TanStack", icon: SiReactquery },
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
    title: "Respectfully Rude",
    status: "Stable",
    icon: Users,
    color: "purple",
    description:
      "Respectfully Rude is a hackathon project where I led a team of three to build a full-stack app that generates AI-powered backhanded compliments and roast images. Built with React and Node.js/Hono, it uses Google's Gemini AI to create sarcastic compliments and Replicate's Flux model to generate cartoon-style roast images based on user photos, complete with authentication and cloud storage.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Hono", icon: SiHono },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Gemini", icon: SiGooglegemini },
    ],
    date: "May 2025",
    repositories: [
      {
        label: "Full Stack",
        url: "https://github.com/PrimeSlade/hackathon-respectfully-rude",
      },
    ],
  },
  {
    id: 3,
    title: "Zen Plan",
    status: "Stable",
    icon: Users,
    color: "amber",
    description:
      "A full-stack wellness planning application that helps users build healthy lifestyle routines through a structured weekly calendar. It features JWT authentication, customizable wellness activities (yoga, meditation, exercise, meal prep), category-based task organization, and progress tracking to promote holistic physical, mental, and emotional well-being.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Hono", icon: SiHono },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
    date: "May 2025",
    repositories: [
      {
        label: "Full Stack",
        url: "https://github.com/PrimeSlade/zen-plan-group-project",
      },
    ],
  },
  {
    id: 4,
    title: "AI Hub",
    status: "Stable",
    icon: Users,
    color: "blue",
    description:
      "AI Hub is a full-stack e-learning platform designed for AI education that enables instructors to create and manage courses while students can discover and enroll in AI-related content. The platform includes JWT-based authentication, email verification, profile management with picture uploads, and comprehensive course CRUD operations with search and sorting capabilities.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Hono", icon: SiHono },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "SQLite", icon: SiSqlite },
      { name: "Prisma", icon: SiPrisma },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
    date: "April 2025",
    repositories: [
      {
        label: "Full Stack",
        url: "https://github.com/PrimeSlade/ai-hub-group-project",
      },
    ],
  },
  {
    id: 5,
    title: "Expense Tracker",
    status: "Stable",
    icon: User,
    color: "orange",
    description:
      " Node.js/Express backend API for an expense tracking application. Uses PostgreSQL with Knex.js for database management, and includes user authentication with JWT tokens and bcrypt password hashing. The API supports CRUD operations for expense tracking, user management, and list operations, with secure cookie-based authentication and image upload capabilities via Cloudinary integration.",
    tech: [
      { name: "Express", icon: SiExpress },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Knex", icon: SiKnexdotjs },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
    date: "March 2025",
    repositories: [
      {
        label: "Backend",
        url: "https://github.com/PrimeSlade/Expense-Tracker-Back-End",
      },
    ],
  },
];
