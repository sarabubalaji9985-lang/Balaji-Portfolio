/**
 * Comprehensive Knowledge Base for Balaji Projects AI Assistant
 * Fully verified details on Balaji Sarabu, services, tech stack, 28+ projects, and business policies.
 */

export const BALAJI_PROFILE = {
  company: "Balaji Projects .P",
  founder: "Balaji Sarabu",
  role: "Full Stack Developer, Freelance Web Engineer & UI/UX Specialist",
  experienceSince: "2023",
  location: "Nellore, Andhra Pradesh, India",
  reach: "Serving clients across India (Hyderabad, Bangalore, Chennai, Mumbai, Delhi) and Remote Worldwide (USA, UK, UAE, Europe, Australia)",
  phone: "+91 9030545655",
  rawPhone: "9030545655",
  email: "sarabu.balaji9985@gmail.com",
  website: "https://balajiprojectsp.in",
  github: "https://github.com/sarabubalaji9985-lang",
  linkedin: "https://www.linkedin.com/in/balaji-sarabu-666327291/",
  availability: "Available for new client projects, contracts & end-to-end web engineering",
};

export const SERVICES = [
  {
    id: "business-websites",
    name: "Custom Business Websites",
    description: "High-conversion corporate sites, brand portfolios, and service showcases designed with modern responsive UI, dark/light themes, and SEO optimization.",
    deliverables: ["Custom Responsive Design", "Speed < 1.2s", "Contact & Lead Forms", "On-Page SEO & Schema", "Mobile Optimization"],
    idealFor: "SMEs, Consultancies, Real Estate, Clinics, Service Businesses, Agencies",
  },
  {
    id: "e-commerce",
    name: "E-Commerce Storefronts & Platforms",
    description: "Full-fledged online stores with product catalogs, shopping cart, Razorpay / Stripe payment gateways, order management, and WhatsApp purchase pings.",
    deliverables: ["Product Catalog & Filter System", "Cart & Checkout Flow", "Payment Gateway Integration", "Admin Dashboard", "WhatsApp Lead Alerts"],
    idealFor: "D2C Brands, Retail Stores, Organic Farms, Fashion & Artisan Sellers",
  },
  {
    id: "saas-webapps",
    name: "Full-Stack Web Applications & SaaS",
    description: "Complex cloud web applications with authentication, relational/NoSQL databases, role-based access control, analytics dashboards, and REST/GraphQL APIs.",
    deliverables: ["User Auth (JWT / OAuth)", "Database Schema & Modeling", "Interactive Analytics Dashboards", "API Integration", "Automated Cloud Deployment"],
    idealFor: "Tech Startups, B2B SaaS, Educational Platforms, Subscription Services",
  },
  {
    id: "admin-portals",
    name: "Admin Portals, CRM & HRMS",
    description: "Internal operations software, customer relationship management, inventory trackers, and staff workflow management tools.",
    deliverables: ["Role-Based Access Control", "Data Export / Import (CSV/Excel)", "Audit Logs", "Search & Filter Tables", "Real-Time Stats"],
    idealFor: "Growing Companies, Logistics, Educational Institutes, Healthcare",
  },
  {
    id: "redesign-audit",
    name: "Website Redesign & Performance Audits",
    description: "Transform outdated, slow websites into lightning-fast, ultra-modern experiences scoring 95+ on Google PageSpeed Insights.",
    deliverables: ["Modern Visual Redesign", "Core Web Vitals Optimization", "SEO Re-architecture", "Mobile UX Overhaul"],
    idealFor: "Businesses with low mobile conversions or outdated websites",
  },
];

export const TECH_STACK = {
  frontend: ["React.js", "Next.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Three.js", "Framer Motion", "HTML5 / Semantic Web"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Serverless Functions", "Authentication (JWT / Bcrypt)"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Mongoose ORM"],
  devops_cloud: ["Vercel", "Git / GitHub", "Docker", "AWS basics", "Cloudflare DNS", "CI/CD"],
  integrations: ["Razorpay", "Stripe", "Nodemailer SMTP", "WhatsApp Business API", "Google Search Console", "OpenAI / Gemini AI APIs"],
};

export const BUSINESS_POLICIES = {
  pricing: "All pricing is tailored precisely to the project's technical scope, custom features, and timeline. Balaji does not offer generic one-size-fits-all prices. Visitors are encouraged to contact Balaji directly for a transparent, itemized quotation.",
  milestones: "Standard projects follow a secure 3-stage milestone model: 1) Initial deposit upon kickoff, 2) Milestone review upon core feature completion, 3) Final payment upon live deployment and source code transfer.",
  timelineEstimate: "Standard business sites take 1 to 2 weeks; E-commerce stores take 2 to 4 weeks; Custom SaaS and web apps take 4 to 8 weeks depending on scope.",
  ownership: "Upon project completion and final settlement, 100% of source code, intellectual property, and deployment credentials are fully handed over to the client.",
  support: "Every completed project includes 30 days of free post-launch bug fixing, performance monitoring, and technical handover support.",
  nda: "Mutual Non-Disclosure Agreements (NDAs) are happily signed upon request prior to discussing sensitive business concepts.",
};

export const TOP_PORTFOLIO_PROJECTS = [
  {
    id: "nuzvid-agri-farms",
    slug: "nuzvid-agri-farms",
    name: "Nuzvid Agri Farms",
    category: "E-commerce & Full Stack",
    summary: "D2C organic farm-to-table platform delivering pure A2 ghee, cold-pressed oils, and honey across India with cart, checkout & WhatsApp integration.",
    tech: ["React", "Node.js", "Tailwind CSS", "Razorpay", "REST API"],
  },
  {
    id: "dropyhub-suite",
    slug: "dropyhub-suite",
    name: "Dropyhub Enterprise Logistics",
    category: "SaaS & Admin Portal",
    summary: "High-scale dropshipping, fulfillment tracking, and inventory orchestration portal managing thousands of multi-vendor SKUs.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
  },
  {
    id: "hrms-portal",
    slug: "hrms-portal",
    name: "Enterprise HRMS & Payroll Suite",
    category: "Enterprise Web App",
    summary: "Comprehensive human resource management system featuring automated attendance, payroll calculation, role access, and staff analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
  },
  {
    id: "crypto-fintech-hub",
    slug: "crypto-fintech-hub",
    name: "Fintech & Web3 Analytics Hub",
    category: "Finance & Dashboards",
    summary: "Real-time cryptocurrency portfolio tracker, market ticker, and asset visualizer with interactive charts and live API feeds.",
    tech: ["React", "Vite", "TradingView API", "Tailwind CSS"],
  },
  {
    id: "clinical-appointment-portal",
    slug: "clinical-appointment-portal",
    name: "MediCare Clinical Scheduling",
    category: "Healthcare Web App",
    summary: "Doctor appointment booking system with automated SMS/email confirmations, patient records, and doctor schedule management.",
    tech: ["React", "Express.js", "MongoDB", "Nodemailer"],
  },
];
