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
  SiNextdotjs,
  SiNestjs,
  SiSocketdotio,
  SiRedis,
  SiCloudflare,
  SiExcalidraw,
  SiRabbitmq,
  SiVite,
  SiTailwindcss,
  SiNginx,
  SiSwagger,
  SiJest,
  SiGithubactions,
  SiMongodb,
  SiVitest,
  SiJsonwebtokens,
} from "react-icons/si";
import { Rocket, Shield, Workflow } from "lucide-react";

export type Tech = {
  name: string;
  icon: React.ElementType;
};

export type Project = {
  id: number;
  title: string;
  status: string;
  /** One plain-English sentence for non-technical readers */
  summary: string;
  /** Short result or highlight shown under the summary */
  impact: string;
  tile: "sage" | "sky" | "sand" | "coral" | "lilac";
  /** Shown in "Selected projects" on the home page */
  featured?: boolean;
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
    id: 8,
    title: "Multi-Booking Engine",
    featured: true,
    summary:
      "Books a hotel and a flight together as one trip, and safely undoes every step if any part fails.",
    impact: "Automatic retries and rollback when a step fails",
    tile: "lilac",
    status: "Stable",
    description:
      "A distributed orchestration engine for multi-product bookings (hotel + flight). Each booking becomes a staged execution graph defined in YAML (availability, fraud check, payment, allotment, notification) whose steps are dispatched asynchronously over a RabbitMQ topic exchange to independent agent workers. Step outcomes are written back to PostgreSQL via Prisma for idempotency, failed steps retry through dead-letter queues, and failures trigger Saga-pattern compensations (refunding payment, releasing seats and rooms) or partial-booking decisions. Includes a React client that polls live step status, a simulation mode for failures and sold-out items, and Docker images deployed on Dokploy.",
    tech: [
      { name: "NestJS", icon: SiNestjs },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Prisma", icon: SiPrisma },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Docker", icon: SiDocker },
      { name: "Nginx", icon: SiNginx },
      { name: "Dokploy", icon: Rocket },
      { name: "Swagger", icon: SiSwagger },
      { name: "Zod", icon: SiZod },
      { name: "Jest", icon: SiJest },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
    date: "Sep 2026",
    demo: "https://book.primeslade.dev",
    repositories: [
      {
        label: "Full Stack",
        url: "https://github.com/PrimeSlade/multi-booking-engine",
      },
    ],
  },
  {
    id: 9,
    title: "Scalable News Feed",
    featured: true,
    summary:
      "The back end of a Twitter-style home feed, built so new posts reach followers quickly, even for accounts with huge followings.",
    impact: "Push and pull hybrid for accounts with 10k+ followers",
    tile: "coral",
    status: "Stable",
    description:
      "A news feed backend using fan-out on write with a hybrid celebrity pull on read. Creating a post saves it to MongoDB and queues a BullMQ job that pushes the post ID into each follower's Redis sorted set (trimmed to 1,000 entries); authors above a 10k-follower threshold skip fan-out and are pulled live at read time. The read path merges both sources into one cursor-paginated feed and hydrates posts cache-aside (Redis first, MongoDB fallback). Includes JWT auth with rotating HttpOnly refresh cookies, Swagger docs, Vitest unit and integration tests, and a GitHub Actions CI workflow.",
    tech: [
      { name: "Express", icon: SiExpress },
      { name: "Redis", icon: SiRedis },
      { name: "BullMQ", icon: Workflow },
      { name: "MongoDB", icon: SiMongodb },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Swagger", icon: SiSwagger },
      { name: "Vitest", icon: SiVitest },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
    date: "Jul 2026",
    repositories: [
      {
        label: "Backend",
        url: "https://github.com/PrimeSlade/scalable-news-feed-system",
      },
    ],
  },
  {
    id: 7,
    title: "UniShare",
    featured: true,
    summary:
      "An open-source platform where university students share notes, past exam papers and study resources.",
    impact: "Cut build times by 40% with a monorepo setup",
    tile: "sage",
    status: "Production",
    description:
      "An open-source university platform for students to share notes, past question papers, and academic resources. Designed to facilitate collaborative learning and resource accessibility within academic communities.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Cloudflare R2", icon: SiCloudflare },
      { name: "Excalidraw", icon: SiExcalidraw },
      { name: "Prisma", icon: SiPrisma },
      { name: "Better Auth", icon: Shield },
      { name: "TanStack", icon: SiReactquery },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Zod", icon: SiZod },
    ],
    date: "Feb 2026",
    demo: "https://share.psstee.dev",
    repositories: [
      {
        label: "Full Stack",
        url: "https://github.com/unishare-oss/unishare",
      },
    ],
  },
  {
    id: 1,
    title: "Slade Chat",
    summary:
      "A messaging app with friends, direct messages and group rooms, showing who is online in real time.",
    impact: "99.9% message delivery · 50% less database load",
    tile: "sky",
    status: "Development",
    description:
      "A real-time messaging platform built with Next.js and NestJS that enables users to connect through friend management, direct messaging, and group chat rooms. Features Socket.IO for instant message delivery, Better Auth for secure authentication, and a Redis-based presence system for tracking online/offline status and last-seen timestamps.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "Better Auth", icon: Shield },
      { name: "TanStack", icon: SiReactquery },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Zod", icon: SiZod },
    ],
    date: "Jan 2026",
    repositories: [
      {
        label: "Full Stack",
        url: "https://github.com/PrimeSlade/slade-chat",
      },
    ],
  },
  {
    id: 2,
    title: "Medical Clinic POS System",
    featured: true,
    summary:
      "Runs a clinic and pharmacy: patients, treatments, medicine stock, invoices, expenses and reports.",
    impact: "Live and used by a real clinic",
    tile: "sand",
    status: "Production",
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
        label: "Full Stack",
        url: "https://github.com/PrimeSlade/clinic-point-of-sale",
      },
    ],
  },
  {
    id: 3,
    title: "Respectfully Rude",
    summary:
      "A playful AI app that writes backhanded compliments and draws cartoon \"roast\" images.",
    impact: "Built by a team I led in 28 hours",
    tile: "coral",
    status: "Stable",
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
    id: 4,
    title: "Zen Plan",
    summary:
      "A weekly wellness planner for yoga, meditation, exercise and meals, with progress tracking.",
    impact: "Group project with secure sign-in",
    tile: "lilac",
    status: "Stable",
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
    demo: "https://zenplan.primeslade.dev",
  },
  {
    id: 5,
    title: "AI Hub",
    summary:
      "An online course platform where instructors publish AI classes and students sign up for them.",
    impact: "Course search, sign-in and email verification",
    tile: "sky",
    status: "Stable",
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
    date: "Apr 2025",
    repositories: [
      {
        label: "Full Stack",
        url: "https://github.com/PrimeSlade/ai-hub-group-project",
      },
    ],
  },
  {
    id: 6,
    title: "Expense Tracker",
    summary:
      "The back end of an expense-tracking app, with secure accounts and receipt image uploads.",
    impact: "REST API with encrypted passwords",
    tile: "sage",
    status: "Stable",
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
    date: "Mar 2025",
    repositories: [
      {
        label: "Backend",
        url: "https://github.com/PrimeSlade/Expense-Tracker-Back-End",
      },
    ],
  },
];
