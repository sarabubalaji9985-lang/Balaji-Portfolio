/**
 * Verified Professional Experience Data
 * Authentic career history representing real contributions and roles.
 */

export const experiences = [
  {
    id: "dropyhub",
    role: "Full Stack Developer",
    company: "Dropyhub",
    period: "2024 — Present",
    current: true,
    location: "Hyderabad, India / Hybrid",
    type: "Full-Time",
    description: "Developing robust full-stack web applications and scalable operational tools for an on-demand delivery and logistics platform.",
    responsibilities: [
      "Architect and maintain core React frontend interfaces and operational dashboards for dispatch teams.",
      "Build and optimize RESTful API endpoints using Node.js and Express to manage high-frequency order flows.",
      "Implement resilient state management, input validation, and real-time feedback mechanisms.",
      "Collaborate cross-functionally to ensure high availability, data consistency, and responsive performance across mobile and desktop devices."
    ],
    technologies: ["React.js", "Node.js", "Express", "REST APIs", "JavaScript", "Tailwind CSS", "Git"]
  },
  {
    id: "freelance-developer",
    role: "Freelance Full Stack Developer",
    company: "Independent Practice",
    period: "2023 — Present",
    current: false,
    location: "Remote / Client-Based",
    type: "Contract / Freelance",
    description: "Delivering custom websites, SaaS products, financial web tools, and business applications for startups, local businesses, and founders.",
    responsibilities: [
      "Engineered end-to-end web applications including Resume Job Fit Pro (AI ATS resume builder) and PJ Finance (loan collection system).",
      "Created tailored business and e-commerce websites (Sreeka Pickles, DS Projects ZED portal, Nuzvid Agri Farms).",
      "Handled full client lifecycle from scoping requirements and architecture design to deployment, hosting, and performance tuning.",
      "Applied modern UI engineering: responsive layouts, accessible typography, serverless databases, and custom REST backends."
    ],
    technologies: ["React", "Vite", "Next.js", "Node.js", "PostgreSQL", "Supabase", "MySQL", "Tailwind CSS", "PHP"]
  },
  {
    id: "sbvs-technologies",
    role: "Web Developer",
    company: "SBVS Technologies",
    period: "2023 — 2024",
    current: false,
    location: "India",
    type: "Professional Role",
    description: "Developed enterprise web software, internal administrative systems, and business process automation tools.",
    responsibilities: [
      "Engineered the internal HRMS Portal managing employee directory, daily attendance tracking, and multi-tier leave approval workflows.",
      "Designed normalized MySQL database schemas and server-side PHP data handling controllers.",
      "Implemented secure authentication, session handling, and role-based permissions (Admin, HR, Staff).",
      "Collaborated on responsive UI templates and cross-browser testing for internal enterprise staff."
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "REST APIs", "Bootstrap / Tailwind"]
  }
];
