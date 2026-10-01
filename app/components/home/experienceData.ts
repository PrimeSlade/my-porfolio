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
    title: "Full-Stack Engineer",
    org: "Freelance · Bangkok",
    points: [
      "Built a management system for a multi-branch medical clinic with 15+ connected data types.",
      "Added live medicine stock tracking, automatic invoices and Excel import/export.",
      "Delivered the production point-of-sale screens, with role-based access and PDF invoices.",
    ],
  },
  {
    when: "Jan 2026 – Jul 2026",
    title: "Back-End Web Development Mentor",
    org: "KMUTT Computer Science Program",
    points: [
      "Mentored 40+ students in Node.js and Express.",
      "Taught how to build, test and deploy REST APIs.",
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
