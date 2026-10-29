/**
 * Skills & Technical Capabilities Data
 * In-depth technical architecture, competencies, production usage notes, and engineering manifesto.
 */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "High-Performance User Interfaces & Responsive Systems",
    description: "Designing and engineering responsive, accessible, sub-second client-side web architectures using modern React and lightweight styling systems.",
    skills: [
      {
        name: "React.js (18 / 19)",
        note: "Custom hooks, Context API, state isolation, code-splitting, memoized rendering",
        productionExample: "Dropyhub Platform & PJ Finance",
        level: "Production Core"
      },
      {
        name: "JavaScript (ES6+)",
        note: "Async/await pipelines, Promises, Event Loop, DOM manipulation, functional data pipelines",
        productionExample: "Across all web applications",
        level: "Production Core"
      },
      {
        name: "Tailwind CSS & Design Tokens",
        note: "Utility-first design tokens, responsive breakpoints, fluid typography, dark mode synchronization",
        productionExample: "Portfolio, Sreeka Pickles, DS Projects",
        level: "Production Core"
      },
      {
        name: "Three.js & WebGL",
        note: "Interactive 3D canvas viewports, kinetic wireframe wave terrains, gyroscope spheres, throttled render loops",
        productionExample: "Interactive Portfolio 3D Scenes",
        level: "Specialized"
      },
      {
        name: "Vite & Modern Bundling",
        note: "Sub-second HMR, Rollup manual chunking, vendor splitting, tree-shaking, production optimization",
        productionExample: "Zero-bloat build setups",
        level: "Production Core"
      },
      {
        name: "Framer Motion",
        note: "Micro-interactions, spring physics, exit animations, layout transitions, reduced-motion compliance",
        productionExample: "Resume Job Fit Pro & Modals",
        level: "Advanced"
      },
      {
        name: "HTML5 & Semantic SEO",
        note: "Accessible document outline, ARIA compliance, structured schema markup, OpenGraph metadata",
        productionExample: "DS Projects Shanmukha Website",
        level: "Production Core"
      },
      {
        name: "Responsive & Mobile-First UI",
        note: "Pixel-perfect touch targets, fluid flex/grid layouts, cross-device testing across iOS and Android",
        productionExample: "Sreeka Mobile Catalog",
        level: "Production Core"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    tagline: "Resilient APIs, Authentication & Business Logic",
    description: "Building hardened server logic, RESTful microservices, and secure endpoint controllers that power high-traffic workflows.",
    skills: [
      {
        name: "Node.js",
        note: "Asynchronous non-blocking runtime, event loop optimization, stream processing, filesystem pipelines",
        productionExample: "PJ Finance & Dropyhub API layers",
        level: "Production Core"
      },
      {
        name: "Express.js",
        note: "Clean MVC controllers, modular routing, error boundary middlewares, JSON serialization",
        productionExample: "REST microservices",
        level: "Production Core"
      },
      {
        name: "RESTful API Architecture",
        note: "Strict HTTP semantics, idempotency, structured status codes, predictable error envelopes",
        productionExample: "HR Portal & Resume Fit APIs",
        level: "Production Core"
      },
      {
        name: "Authentication & RBAC",
        note: "JWT token cycles, Google OAuth 2.0 identity, role-based access control (Admin, Manager, User)",
        productionExample: "SBVS HRMS & Financial Portals",
        level: "Production Core"
      },
      {
        name: "API Security & Hardening",
        note: "Express rate-limiting, CORS origin whitelisting, Helmet security headers, payload sanitization",
        productionExample: "All production deployments",
        level: "Production Core"
      },
      {
        name: "PHP & Legacy Modernization",
        note: "Session management, server-rendered views, MySQL database connections, modernizing legacy systems",
        productionExample: "Backend integrations & migrations",
        level: "Advanced"
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Storage",
    tagline: "Normalized Schemas, Index Tuning & Serverless Storage",
    description: "Modeling normalized relational data, establishing strict foreign key integrity, and optimizing queries for fast execution.",
    skills: [
      {
        name: "PostgreSQL",
        note: "3NF relational schemas, foreign key constraints, composite indexes, relational joins, ACID transactions",
        productionExample: "PJ Finance Transaction Ledger",
        level: "Production Core"
      },
      {
        name: "Supabase",
        note: "PostgreSQL hosting, Row-Level Security (RLS) policies, database triggers, storage buckets",
        productionExample: "Secure cloud database backends",
        level: "Production Core"
      },
      {
        name: "MySQL",
        note: "InnoDB storage engine, relational joins, indexing strategies, structured schemas",
        productionExample: "Operational management tools",
        level: "Production Core"
      },
      {
        name: "Neon Database",
        note: "Serverless PostgreSQL driver, branching databases for preview environments, instant connection pooling",
        productionExample: "Serverless cloud databases",
        level: "Advanced"
      },
      {
        name: "Data Modeling & Normalization",
        note: "Entity-Relationship Diagrams (ERDs), preventing data redundancy, audit trail tables",
        productionExample: "HRMS & Financial tracking schemas",
        level: "Production Core"
      }
    ]
  },
  {
    id: "tools",
    title: "DevOps, Tooling & Workflows",
    tagline: "Deployment Pipelines, Performance Auditing & Testing",
    description: "Maintaining automated deployment workflows, systematic debugging, and rigorous speed optimization.",
    skills: [
      {
        name: "Git & GitHub",
        note: "Feature branch workflows, semantic commit hygiene, PR code reviews, conflict resolution",
        productionExample: "Active daily source control",
        level: "Production Core"
      },
      {
        name: "Vercel & Cloud Hosting",
        note: "Continuous deployment from Git, edge network routing, environment variable segregation, custom DNS",
        productionExample: "All deployed live web apps",
        level: "Production Core"
      },
      {
        name: "Postman & API Testing",
        note: "Automated test collections, environment variables, endpoint verification, mock servers",
        productionExample: "API contract testing",
        level: "Production Core"
      },
      {
        name: "Lighthouse & Core Web Vitals",
        note: "Profiling Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), First Input Delay (FID)",
        productionExample: "95+ performance scores",
        level: "Production Core"
      },
      {
        name: "Chrome DevTools Profiling",
        note: "Network waterfall inspection, CPU throttling, memory heap snapshots, console debugging",
        productionExample: "Performance bottleneck resolution",
        level: "Production Core"
      },
      {
        name: "AI & LLM API Integration",
        note: "OpenAI API prompt engineering, structured JSON outputs, streaming completions, rate-limit retries",
        productionExample: "Resume & Job Fit Pro",
        level: "Advanced"
      }
    ]
  }
];

export const engineeringPrinciples = [
  {
    num: "01",
    title: "Maintainability Over Premature Cleverness",
    summary: "Clear, self-documenting code is vastly superior to dense, cryptic one-liners. Every component, function, and database entity must be easily understood by another engineer 12 months from now."
  },
  {
    num: "02",
    title: "Strict Single Responsibility",
    summary: "A React component should render UI and delegate logic; an Express route should validate inputs and delegate persistence. Modular separation guarantees effortless unit testing and refactoring."
  },
  {
    num: "03",
    title: "Normalized Schemas & Zero Orphan Records",
    summary: "Databases must enforce integrity through foreign keys, not just application code. Proper normalization in 3NF prevents anomalies, duplication, and runaway storage."
  },
  {
    num: "04",
    title: "Mobile-First As An Absolute Rule",
    summary: "Over 65% of web interactions happen on mobile devices. Every layout, button touch target, and navigation drawer is designed and rigorously tested on 375px mobile screens before desktop."
  },
  {
    num: "05",
    title: "Zero-Bloat Dependency Hygiene",
    summary: "Every external npm package is a potential security vulnerability and performance penalty. If 15 lines of clean native JavaScript can accomplish a task, we never install a 200KB package."
  },
  {
    num: "06",
    title: "Accessible Semantic Markup",
    summary: "Real `<button>` tags for actions, real `<a>` tags for navigation, accessible ARIA labels for screen readers, and high-contrast color ratios across both light and dark themes."
  },
  {
    num: "07",
    title: "Defensive Error Handling & Instant Feedback",
    summary: "Never let a user stare at a blank screen or broken state. Every asynchronous API request includes loading skeletons, optimistic UI updates, and clear, actionable error alerts."
  },
  {
    num: "08",
    title: "Sub-Second Load Times & 0 CLS",
    summary: "Assets are compressed to modern WebP formats, bundles are split into vendor chunks, and layout dimensions are explicitly defined to completely eliminate layout shifting."
  },
  {
    num: "09",
    title: "Secure By Default",
    summary: "Secrets and API keys never touch client bundles or git histories. Strict CORS origins, rate-limiting, and input sanitization protect every backend endpoint against automated attacks."
  },
  {
    num: "10",
    title: "Documented Handoff & Transparency",
    summary: "Clean README files, environment variable sample templates (.env.example), and transparent commit logs ensure clients and successor developers can deploy effortlessly."
  }
];

export const projectSkillsMatrix = [
  {
    project: "Nuzvid Agri Farms",
    category: "Organic Farm-to-Table D2C E-Commerce",
    slug: "nuzvid-agri-farms",
    coreStack: ["React 19", "Next.js", "Node.js", "PostgreSQL", "Razorpay", "WhatsApp API"],
    problemSolved: "Engineered high-performance D2C agricultural commerce platform with dynamic volume/weight variants, pincode delivery validation, and automated farm warehouse dispatch routing."
  },
  {
    project: "Resume Builder One",
    category: "AI Career Intelligence SaaS",
    slug: "resume-builder-one",
    coreStack: ["React 19", "OpenAI API", "Node.js", "PostgreSQL", "Supabase", "Razorpay"],
    problemSolved: "Integrated OpenAI API pipelines with custom prompt engineering to parse candidate resumes, compare them against job descriptions, and generate actionable ATS recommendations."
  },
  {
    project: "Shora Luxe",
    category: "Luxury Clean Beauty D2C Brand",
    slug: "shora-luxe",
    coreStack: ["React 19", "Tailwind CSS", "Express.js", "PostgreSQL", "Razorpay Checkout"],
    problemSolved: "Architected luxury editorial beauty storefront with skin-type filtering, slide-over cart drawer with combo discounts, and Pan-India courier integration."
  },
  {
    project: "Resume Lab Pro AI",
    category: "ATS Matching & Job Kanban Tracker",
    slug: "resume-lab-pro-ai",
    coreStack: ["React 19", "Next.js", "TypeScript", "OpenAI LLM", "Supabase RLS", "jsPDF"],
    problemSolved: "Built real-time ATS match scoring engine paired with an interactive drag-and-drop Kanban application tracker for systematic candidate job searches."
  },
  {
    project: "PJ Finance Platform",
    category: "Full-Stack Finance System",
    slug: "pj-finance",
    coreStack: ["React 19", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    problemSolved: "Engineered a secure financial ledger and loan repayment tracker with automatic balance updates, client-side filtering, and instant PDF statement generation."
  },
  {
    project: "Dropyhub Delivery Platform",
    category: "High-Volume Dispatch Portal",
    slug: "dropyhub",
    coreStack: ["React", "JavaScript", "Tailwind CSS", "DataTables", "REST API"],
    problemSolved: "Engineered responsive delivery management dashboards and dispatch routing flows with high-density data tables and live status updates."
  },
  {
    project: "SBVS HR Management Portal",
    category: "Enterprise Internal Tool",
    slug: "hr-portal-sbvs",
    coreStack: ["React", "Node.js", "MySQL", "Role-Based ACL", "PDF Export"],
    problemSolved: "Replaced disorganized manual spreadsheets with a unified employee management portal featuring attendance tracking, leave requests, and department-specific access controls."
  },
  {
    project: "Sreeka Pickles Storefront",
    category: "D2C E-Commerce Catalog",
    slug: "sreeka-pickle",
    coreStack: ["React", "Tailwind CSS", "WhatsApp API", "WebP Assets", "Vite"],
    problemSolved: "Built an ultra-fast product storefront with interactive weight/quantity selectors, instant local cart persistence, and a frictionless 1-click WhatsApp order checkout."
  },
  {
    project: "DS Projects Shanmukha",
    category: "Commercial Business Website",
    slug: "ds-projects-shanmukha",
    coreStack: ["Vite", "React", "Semantic HTML5", "Tailwind CSS", "SEO Meta"],
    problemSolved: "Delivered an editorial corporate showcase with 98+ Google Lighthouse scores, complete mobile responsiveness, and structured metadata for local search discoverability."
  }
];

export const roadmapSkills = [
  {
    title: "Advanced WebGL Shaders & GLSL",
    status: "Active Exploration",
    desc: "Writing custom vertex and fragment shaders in GLSL for high-performance interactive 3D particle systems and fluid physics in Three.js."
  },
  {
    title: "Next.js 15 & Server Components",
    status: "Production Integration",
    desc: "Leveraging React Server Components (RSC), Server Actions, and incremental static regeneration (ISR) for ultra-fast hybrid rendering."
  },
  {
    title: "Agentic AI & LLM Tool Use",
    status: "Active Implementation",
    desc: "Building autonomous AI agents with function calling, structured tool use, and vector embeddings for contextual data retrieval."
  },
  {
    title: "Edge Runtimes & Cloudflare Workers",
    status: "Active Implementation",
    desc: "Deploying low-latency serverless edge functions at the CDN level for instant geographic response times and sub-millisecond middleware."
  }
];
