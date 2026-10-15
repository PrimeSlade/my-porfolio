export type ExperienceItem = {
  when: string;
  title: string;
  org: string;
  points: string[];
  education?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    when: "Jul 2025 – Present",
    title: "Full Stack Engineer",
    org: "Freelance · Bangkok",
    points: [
      "Built MedPost, a management and point-of-sale system for a multi-branch medical clinic and pharmacy, using React, Express and PostgreSQL.",
      "Designed a database of 15+ interconnected entities with attribute-based access control (ABAC) across clinic and pharmacy branches.",
      "Enabled real-time inventory tracking across 9 medicine types, with automated invoicing, PDF invoices and Excel import/export.",
    ],
  },
  {
    when: "Jan 2026 – May 2026",
    title: "Web Development Mentor",
    org: "SIT-KMUTT · Part-time · Bangkok",
    points: [
      "Taught Node.js and Express to 40+ students, covering REST APIs.",
      "Reviewed student projects and helped debug their code, resolving backend issues.",
    ],
  },
  {
    when: "Expected Jul 2028",
    title: "B.Sc. Computer Science",
    org: "King Mongkut's University of Technology Thonburi",
    points: [
      "Software Engineering, Algorithms & Data Structures, Operating Systems, Computer Architecture.",
    ],
    education: true,
  },
];
