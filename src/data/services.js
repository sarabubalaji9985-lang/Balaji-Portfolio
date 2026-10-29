/**
 * Comprehensive Professional Services Data
 * In-depth service offerings matching Balaji Sarabu's verified engineering capabilities.
 */

export const services = [
  {
    id: "fullstack-apps",
    category: "Full-Stack Development",
    title: "Full-Stack Web Applications",
    tagline: "End-to-end web products engineered for resilience, scale, and clean maintainability.",
    description: "Architecting and engineering comprehensive web platforms from the ground up. Combining responsive React frontends with hardened Node.js/Express backends and normalized PostgreSQL or MySQL databases. Every application includes structured API layers, secure session/token auth, and automated deployment pipelines.",
    deliverables: [
      "Custom React 19 frontend with mobile-first responsive layouts",
      "Robust Node.js & Express RESTful API with structured controllers",
      "Relational database modeling with PostgreSQL or MySQL schemas",
      "Role-based authentication & authorization (JWT, Google OAuth, RBAC)",
      "Automated CI/CD deployment configuration (Vercel, Render, or VPS)",
      "Comprehensive API documentation and developer handover guide"
    ],
    techStack: ["React 19", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    timeline: "3 to 6 weeks",
    idealFor: "Startups, SaaS founders, and businesses needing a dependable custom web platform.",
    relevantProjectSlug: "pj-finance",
    iconName: "Layers"
  },
  {
    id: "custom-websites",
    category: "Brand & Business Web",
    title: "High-Performance Business Websites",
    tagline: "Fast, editorial websites designed to convert visitors and elevate your brand authority.",
    description: "Designing and coding tailored business websites that pair bespoke modern aesthetics with lightning-fast load times. Built with clean semantic HTML5, modern Tailwind CSS, and lightweight React/Vite — ensuring 95+ Google Lighthouse scores, effortless mobile navigation, and comprehensive search engine readiness.",
    deliverables: [
      "Bespoke editorial UI design with custom typography and brand colors",
      "100% mobile-responsive layouts tested across iOS, Android, and tablets",
      "Sub-second load times with optimized asset bundling and zero layout shift",
      "Complete On-Page SEO structure, OpenGraph meta tags, and semantic schema",
      "Interactive contact forms with spam protection and direct email alerts",
      "Domain configuration, SSL certificate installation, and analytics setup"
    ],
    techStack: ["Vite", "React", "Tailwind CSS", "SEO Architecture", "Framer Motion", "Mobile-First"],
    timeline: "1 to 3 weeks",
    idealFor: "Consultancies, service firms, professional agencies, and corporate brands.",
    relevantProjectSlug: "ds-projects-shanmukha",
    iconName: "Globe"
  },
  {
    id: "dashboards-systems",
    category: "Internal Tools & HRMS",
    title: "Operational Dashboards & Internal Portals",
    tagline: "Custom management software that eliminates spreadsheet chaos and streamlines operations.",
    description: "Building mission-critical internal tools, HR portals, and operational management systems. Designed with high-density data tables, flexible multi-parameter filtering, real-time metrics, automated PDF/Excel exports, and fine-grained role-based permissions so your team operates with total clarity.",
    deliverables: [
      "High-density data tables with sorting, multi-column search, and pagination",
      "Role-Based Access Control (Admin, Manager, Employee, Viewer)",
      "Automated PDF document and Excel/CSV report generation",
      "Interactive data visualizations and KPI metrics tracking",
      "Audit logging for data modifications, payments, and employee records",
      "Automated form validation and defensive error boundaries"
    ],
    techStack: ["React", "PostgreSQL", "Node.js", "DataTables", "PDF Export", "RBAC Security"],
    timeline: "2 to 4 weeks",
    idealFor: "Growing teams, finance firms, HR departments, and operational logistics managers.",
    relevantProjectSlug: "hr-portal-sbvs",
    iconName: "Cpu"
  },
  {
    id: "ecommerce-storefronts",
    category: "Digital Commerce",
    title: "E-Commerce & Digital Catalogs",
    tagline: "Conversion-optimized product storefronts engineered for speed and effortless checkout.",
    description: "Crafting lightweight, high-speed digital product stores and interactive catalogs. Designed to overcome bloated e-commerce platforms with sub-second page loads, intuitive mobile variant selectors, instant cart operations, and frictionless direct checkout or WhatsApp order flows.",
    deliverables: [
      "Dynamic product catalog with instant category filtering and search",
      "Interactive product detail views with multi-weight/variant selectors",
      "Lightweight client-side cart management with persistent local storage",
      "Frictionless WhatsApp direct-order messaging or payment gateway integration",
      "Mobile-optimized tap targets and fluid checkout UX",
      "Product media optimization with modern WebP compression"
    ],
    techStack: ["React", "Tailwind CSS", "WhatsApp API", "State Management", "Vite", "WebP Assets"],
    timeline: "2 to 3 weeks",
    idealFor: "Direct-to-consumer (D2C) brands, artisan producers, and boutique retailers.",
    relevantProjectSlug: "sreeka-pickle",
    iconName: "ShoppingBag"
  },
  {
    id: "api-integrations",
    category: "APIs & Third-Party Services",
    title: "API Engineering & Cloud Integrations",
    tagline: "Connecting modern frontends to AI models, payment processors, and cloud infrastructure.",
    description: "Developing and integrating custom RESTful APIs and connecting external third-party services. Whether hooking into AI inference engines (such as OpenAI/Gemini), integrating payment providers, establishing OAuth identity pipelines, or creating secure webhooks, every integration is protected by rate limiting and strict payload validation.",
    deliverables: [
      "Secure RESTful endpoint development with standardized JSON envelopes",
      "AI API pipeline integration (OpenAI, Claude, or Gemini prompt workflows)",
      "Third-party payment gateway integration (Razorpay, Stripe, or UPI)",
      "OAuth 2.0 social login workflows (Google Identity, GitHub, etc.)",
      "Server-side rate limiting, CORS whitelisting, and input sanitization",
      "Webhook listeners with signature verification and retry mechanisms"
    ],
    techStack: ["Node.js", "Express", "OpenAI API", "OAuth 2.0", "Webhooks", "JSON Schemas"],
    timeline: "1 to 3 weeks",
    idealFor: "Companies augmenting existing software with AI, payment flows, or external services.",
    relevantProjectSlug: "resume-builder-one",
    iconName: "Zap"
  },
  {
    id: "performance-optimization",
    category: "Audit & Modernization",
    title: "Codebase Modernization & Speed Optimization",
    tagline: "Transforming sluggish, dated web applications into fast, modern production engines.",
    description: "Auditing and refactoring legacy codebases, resolving performance bottlenecks, and modernizing frontend/backend architectures. I eliminate unnecessary JavaScript bundles, optimize relational database queries, implement effective caching strategies, and elevate Google Core Web Vitals to the green zone.",
    deliverables: [
      "In-depth Google Core Web Vitals & Lighthouse performance audit",
      "JavaScript bundle size reduction via code-splitting and tree-shaking",
      "Relational database query optimization and index tuning",
      "Refactoring legacy spaghetti code into modular React components",
      "State management cleanup and elimination of unnecessary re-renders",
      "Comprehensive audit report detailing before/after speed benchmarks"
    ],
    techStack: ["Vite / Webpack", "React Profiler", "PostgreSQL Indexing", "Lighthouse", "Code Splitting"],
    timeline: "1 to 2 weeks",
    idealFor: "Businesses losing customers to slow load times or dealing with unmaintainable legacy code.",
    relevantProjectSlug: "nuzvid-agri-farms",
    iconName: "Activity"
  }
];

export const engagementModels = [
  {
    id: "fixed-scope",
    badge: "Most Popular",
    title: "Fixed-Scope Project Delivery",
    subtitle: "Ideal for well-defined web products, MVPs, and business website redesigns.",
    description: "We establish clear functional requirements, architectural milestones, and a fixed delivery timeline upfront. You receive predictable budget guarantees with zero scope creep surprises.",
    features: [
      "Comprehensive requirements specification & roadmap",
      "Milestone-based progress demonstrations",
      "Fixed budget guarantee with no unexpected invoices",
      "Full source code handover & documentation",
      "30-day post-launch warranty and bug-fix support"
    ],
    timeline: "2 to 6 Weeks"
  },
  {
    id: "monthly-sprint",
    badge: "Dedicated Retainer",
    title: "Monthly Engineering Sprint",
    subtitle: "For startups and businesses needing ongoing full-stack development and continuous feature velocity.",
    description: "Reserve dedicated engineering bandwidth each week. Ideal for expanding existing platforms, rolling out weekly feature releases, and maintaining mission-critical web applications.",
    features: [
      "Dedicated weekly engineering hours (20 to 40 hrs/wk)",
      "Direct communication channel (Slack / WhatsApp / Zoom)",
      "Weekly sprint planning and prioritized backlog execution",
      "Immediate response for urgent production bugs",
      "Continuous performance optimization & infrastructure upkeep"
    ],
    timeline: "Flexible Monthly"
  },
  {
    id: "advisory-audit",
    badge: "Rapid Advisory",
    title: "Technical Advisory & Audit",
    subtitle: "For founders seeking expert review before scaling or rewriting their systems.",
    description: "A comprehensive deep dive into your existing application architecture, database schemas, security posture, and frontend performance with an actionable remediation blueprint.",
    features: [
      "Deep codebase & database schema architecture review",
      "Core Web Vitals & frontend performance bottleneck audit",
      "Security vulnerability & authentication flow analysis",
      "Detailed written audit dossier with prioritized fixes",
      "90-minute executive briefing & technical Q&A session"
    ],
    timeline: "3 to 5 Days"
  }
];

export const clientFaqs = [
  {
    q: "How quickly can we kick off a new project?",
    a: "After an initial 30-minute discovery consultation to align on scope, deliverables, and timeline, I can typically initiate engineering within 3 to 5 business days."
  },
  {
    q: "What do you need from me before we start coding?",
    a: "A brief summary of your business objectives, target audience, any reference designs or wireframes (if available), and credentials for existing databases or domains. If you don't have technical specs, I assist you in defining them during Step 01 (Discovery)."
  },
  {
    q: "Do I own the full intellectual property (IP) and source code?",
    a: "Yes, 100%. Upon project completion and final payment, complete ownership of all repository code, database schemas, assets, and deployment environments is transferred directly to your organization."
  },
  {
    q: "How do we communicate and track progress during development?",
    a: "Transparency is paramount. I provide weekly milestone demos, live staging links on Vercel/Render for you to test in real-time, and stay reachable via WhatsApp, Email, or Slack for continuous async updates."
  },
  {
    q: "What happens after the project goes live?",
    a: "Every fixed-scope project includes a 30-Day Post-Launch Warranty. Any bugs, layout inconsistencies, or minor tweaks related to agreed scope are resolved immediately at zero additional cost. Ongoing maintenance retainers are also available."
  },
  {
    q: "Can you collaborate with my existing backend, designer, or team?",
    a: "Absolutely. I am accustomed to working both as an autonomous end-to-end full-stack engineer and as a specialized React frontend or Node.js API engineer collaborating alongside in-house teams."
  }
];
