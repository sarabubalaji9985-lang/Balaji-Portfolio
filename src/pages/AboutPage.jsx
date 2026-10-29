import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';
import { PageCtaSection } from '../components/ui/PageCtaSection';
import { PERSONAL_INFO } from '../utils/constants';
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Database,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Workflow,
  Target,
  Zap,
  Server,
  Lock,
  Compass,
  Award,
  GraduationCap,
} from 'lucide-react';
import { aiVoice } from '../utils/voiceAssistant';

export const AboutPage = ({ onOpenResume, isDarkMode }) => {
  useEffect(() => {
    document.title = "About Balaji Sarabu — Full Stack Software Engineer | Balaji Projects .P";
  }, []);

  const principles = [
    {
      number: '01',
      title: 'Business-Driven Architecture',
      tagline: 'Code exists to solve operational bottlenecks & generate ROI',
      desc: 'I never write code in a vacuum or chase frameworks for vanity. Every PostgreSQL schema, React hook, and Express route is engineered to solve real friction, accelerate workflows, and scale client revenue.',
      icon: <Target className="w-5 h-5 text-accent" />,
    },
    {
      number: '02',
      title: 'End-to-End Technical Ownership',
      tagline: 'From database normalization to 60fps micro-interactions',
      desc: 'Bridging the gap between robust system backends and delightful user interfaces. I design relational schemas, structure secure REST APIs, and craft responsive frontends with equal rigor.',
      icon: <Layers className="w-5 h-5 text-accent" />,
    },
    {
      number: '03',
      title: 'Sub-Second Performance & Zero Bloat',
      tagline: 'Obsessed with rapid TTFB, lean bundles & Lighthouse 95+',
      desc: 'Performance is a feature, not an afterthought. I benchmark bundle sizes, eliminate redundant libraries, optimize SQL query execution plans, and ensure silky-smooth mobile animations.',
      icon: <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    },
    {
      number: '04',
      title: 'Radical Transparency & Reliable Delivery',
      tagline: 'Predictable milestones, clean Git commits & proactive async demos',
      desc: 'Clients and teams never have to guess progress. I provide regular video walkthroughs, maintain semantic Git branches, and deliver production-ready software on schedule without excuses.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
  ];

  const workflowSteps = [
    {
      step: 'Phase 01',
      title: 'Discovery & Systems Decomposition',
      desc: 'Deep-dive into business workflows, edge cases, user friction points, and domain models before writing a single line of code.',
      deliverables: ['System Requirements Spec', 'User Journey Mapping', 'Technical Scope Document'],
      icon: <Compass className="w-5 h-5 text-accent" />,
    },
    {
      step: 'Phase 02',
      title: 'Architecture & Schema Normalization',
      desc: 'Modeling normalized PostgreSQL/MySQL tables, defining foreign keys, and crafting standardized REST API JSON contracts.',
      deliverables: ['Database Schema & ERD', 'REST API Contracts', 'Authentication & Role Matrix'],
      icon: <Database className="w-5 h-5 text-accent" />,
    },
    {
      step: 'Phase 03',
      title: 'Rapid Iterative Implementation',
      desc: 'Building modular, component-driven React interfaces powered by secure Node.js controllers, real-time validations, and clean state.',
      deliverables: ['Responsive Web App', 'Interactive 3D Elements', 'Secure Backend Endpoints'],
      icon: <Code2 className="w-5 h-5 text-accent" />,
    },
    {
      step: 'Phase 04',
      title: 'Auditing, QA & Cloud Deployment',
      desc: 'Rigorous cross-device testing, Lighthouse audits (95+), input sanitization, and automated zero-downtime deployment on Vercel/Render.',
      deliverables: ['Lighthouse 95+ Report', 'Zero-Downtime Live URL', 'Handover & Docs'],
      icon: <Workflow className="w-5 h-5 text-accent" />,
    },
  ];

  const technicalArsenal = [
    {
      category: 'Frontend Engineering',
      icon: <Code2 className="w-4 h-4 text-accent" />,
      skills: ['React 19', 'Next.js', 'Vite', 'Tailwind CSS', 'JavaScript ES6+', 'Three.js WebGL', 'Framer Motion', 'HTML5 & CSS3'],
    },
    {
      category: 'Backend & APIs',
      icon: <Server className="w-4 h-4 text-accent" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT & OAuth', 'PHP MVC', 'Role-Based Access Control', 'Middleware & CORS'],
    },
    {
      category: 'Databases & Cloud',
      icon: <Database className="w-4 h-4 text-accent" />,
      skills: ['PostgreSQL', 'MySQL', 'Neon Serverless', 'Supabase', 'Row-Level Security (RLS)', 'Connection Pooling', 'Indexing'],
    },
    {
      category: 'DevOps & Quality',
      icon: <Terminal className="w-4 h-4 text-accent" />,
      skills: ['Git & GitHub', 'Vercel', 'Render', 'Postman QA', 'Lighthouse 95+', 'Responsive DevTools', 'CI/CD Pipelines'],
    },
  ];

  return (
    <main className="pt-20 sm:pt-22 bg-canvas-light dark:bg-canvas-dark text-ink-primary dark:text-ink-dark-primary transition-colors">
      
      {/* ── 1. EDITORIAL HERO & EXECUTIVE METRICS ── */}
      <section className="py-12 sm:py-20 relative overflow-hidden border-b border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#0A1931]">
        <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent-deep/15 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-6">
          {/* Breadcrumb & Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link to="/" className="text-xs font-mono text-ink-muted hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-xs font-mono text-ink-muted">/</span>
            <span className="text-xs font-mono text-accent font-semibold">About Balaji</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full-Stack Architect &amp; Developer</span>
            </span>
          </div>

          {/* Big Editorial Headline */}
          <div className="max-w-4xl space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tighter-editorial text-ink-primary dark:text-[#F6FAFD] leading-[1.12]">
              Turning operational complexity into{' '}
              <span className="text-ocean-shimmer italic font-normal">clean, high-performance</span>{' '}
              digital products.
            </h1>
            <p className="text-sm sm:text-lg text-ink-secondary dark:text-ink-dark-secondary font-light max-w-2xl leading-relaxed">
              I am Balaji Sarabu—an engineer who bridges the gap between scalable relational backends and responsive, intuitive user experiences.
            </p>
          </div>

          {/* Quick Executive Stats Ribbon */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            {[
              { value: '2023+', label: 'Active Engineering Practice', sub: 'Independent & Full-Time' },
              { value: '10+', label: 'Production Web Applications', sub: 'Shipped & Verified' },
              { value: '<2.8s', label: 'Average Processing Speed', sub: 'Optimized Workflows' },
              { value: '100%', label: 'Verified Code Delivery', sub: 'Clean Standards & CI/CD' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-canvas-subtle/60 dark:bg-[#10243E]/70 border border-ink-border/80 dark:border-ink-dark-border/80 shadow-xs"
              >
                <span className="block text-2xl sm:text-3xl font-display font-bold text-accent-deep dark:text-[#B3CFE5]">
                  {stat.value}
                </span>
                <span className="block text-xs font-mono font-medium text-ink-primary dark:text-[#F6FAFD] mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[10px] font-mono text-ink-muted dark:text-ink-dark-muted">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. THE ENGINEER'S STORY & VERIFIED PROFILE DOSSIER ── */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-canvas-subtle/40 dark:bg-[#071326] border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                  Background &amp; Evolution
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-medium text-ink-primary dark:text-[#F6FAFD] tracking-tight">
                From curiosity to genuine{' '}
                <span className="text-ocean-shimmer italic font-normal">engineering responsibility.</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
                <p>
                  My engineering journey began with an unwavering curiosity about how software powers modern commerce and daily operations. Rather than settling for superficial frontend templates, I dove deep into the full lifecycle: understanding relational normalization, HTTP protocols, state management, and real-time data flows.
                </p>
                <p>
                  In <strong className="font-semibold text-ink-primary dark:text-[#F6FAFD]">2023</strong>, I established my independent practice, shipping practical web tools for entrepreneurs, local retail businesses, and fast-moving startups. This hands-on experience taught me what truly matters: code that solves concrete bottlenecks without fragile bloat.
                </p>
                <p>
                  At <strong className="font-semibold text-ink-primary dark:text-[#F6FAFD]">SBVS Technologies</strong>, I engineered enterprise administrative portals (such as the internal HRMS suite), mastering role-based access control, relational database modeling, and employee workflow automation.
                </p>
                <p>
                  Today, as a <strong className="font-semibold text-ink-primary dark:text-[#F6FAFD]">Full Stack Developer at Dropyhub</strong>, I build responsive user interfaces and backend REST services for high-frequency on-demand delivery logistics—where reliability, speed, and real-time state consistency are paramount.
                </p>
              </div>

              {/* Quote callout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#10243E] border-l-4 border-accent shadow-xs space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                  Core Engineering Motto
                </span>
                <p className="text-xs sm:text-sm italic text-ink-primary dark:text-[#E2E8F0] font-light">
                  &ldquo;A great developer doesn't just write code; they eliminate friction, respect user attention, and deliver systems that stand the test of real-world load.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Executive Profile Dossier */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 sm:p-7 rounded-3xl border border-ink-border/80 dark:border-[#4A7FA7]/35 bg-white dark:bg-[#10243E] shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-ink-border/60 dark:border-ink-dark-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-primary dark:text-[#F6FAFD]">
                      Executive Dossier
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/25">
                    Verified Profile
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted block">
                      Full Name
                    </span>
                    <span className="text-sm font-semibold text-ink-primary dark:text-[#F6FAFD]">
                      Balaji Sarabu
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted block">
                      Current Roles
                    </span>
                    <p className="text-xs font-medium text-ink-primary dark:text-[#E2E8F0] mt-0.5 leading-snug">
                      • Full Stack Developer @ Dropyhub (Delivery Management Platform)
                      <br />
                      • Independent Technical Consultant &amp; Freelance Architect
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted block">
                      Core Specialization
                    </span>
                    <p className="text-xs text-ink-secondary dark:text-[#B3CFE5] mt-0.5">
                      Full-Stack Web Applications, React 19 Frontend Engineering, Node.js REST APIs, PostgreSQL / Supabase, Three.js WebGL
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted block">
                      Location &amp; Availability
                    </span>
                    <span className="text-xs text-ink-primary dark:text-[#F6FAFD] flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      Nellore, Andhra Pradesh • Serving All Over India &amp; Remote Worldwide
                    </span>
                  </div>

                  <div className="pt-3 border-t border-ink-border/50 dark:border-ink-dark-border/50 space-y-2">
                    <div className="flex items-center justify-between text-ink-secondary dark:text-ink-dark-secondary">
                      <span className="font-mono text-[10px] uppercase">Direct Phone</span>
                      <a href="tel:+919030545655" className="font-semibold text-accent hover:underline">
                        +91 9030545655
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-ink-secondary dark:text-ink-dark-secondary">
                      <span className="font-mono text-[10px] uppercase">Direct Mail</span>
                      <a href="mailto:sarabu.balaji9985@gmail.com" className="font-medium text-accent hover:underline truncate max-w-[170px]">
                        sarabu.balaji9985@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Actions inside dossier */}
                <div className="pt-3 border-t border-ink-border/60 dark:border-ink-dark-border/60 flex items-center gap-3">
                  <button
                    onClick={() => {
                      aiVoice.speak('Accessing verified curriculum vitae.');
                      if (onOpenResume) onOpenResume();
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-sm hover:shadow-elevated transition-all"
                    style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Verified Resume</span>
                  </button>
                </div>
              </div>

              {/* Verified Code Quality Pledge */}
              <div className="p-4 rounded-2xl bg-canvas-subtle dark:bg-[#10243E]/60 border border-ink-border/70 dark:border-ink-dark-border/70 flex items-start gap-3 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
                  <strong className="text-ink-primary dark:text-[#F6FAFD] font-semibold">Quality Pledge:</strong> Every project features clean semantic Git commits, modular code structure, zero deprecated packages, and rigorous responsive mobile testing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. FOUR FOUNDATIONAL ENGINEERING PRINCIPLES ── */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-white dark:bg-[#0A1931] border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Core Philosophy
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-ink-primary dark:text-[#F6FAFD] tracking-tight">
              The Four Non-Negotiable{' '}
              <span className="text-ocean-shimmer italic font-normal">Engineering Standards</span>
            </h2>
            <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Principles guiding every architectural decision, line of code, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className="p-6 rounded-3xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-canvas-subtle/50 dark:bg-[#10243E]/80 backdrop-blur-xl shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-accent/15 group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-accent-deep dark:text-accent">
                      {p.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-ink-primary dark:text-[#F6FAFD] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-deep dark:text-accent mb-3 font-medium">
                    {p.tagline}
                  </p>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-ink-border/50 dark:border-ink-dark-border/50 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enforced on Every Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FOUR-PHASE PRODUCT ENGINEERING LIFECYCLE ── */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-canvas-subtle/50 dark:bg-[#071326] border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Development Lifecycle
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-ink-primary dark:text-[#F6FAFD] tracking-tight">
              How I Engineer &amp; Deliver{' '}
              <span className="text-ocean-shimmer italic font-normal">From Scratch</span>
            </h2>
            <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              A structured 4-phase methodology ensuring predictable timelines, transparent deliverables, and production reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#10243E] shadow-subtle hover:border-accent transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-accent/15">
                      {ws.icon}
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted">
                      {ws.step}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-semibold text-ink-primary dark:text-[#F6FAFD] mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed mb-4">
                    {ws.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-ink-border/50 dark:border-ink-dark-border/50 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted font-bold block">
                    Deliverables:
                  </span>
                  {ws.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-ink-primary dark:text-[#E2E8F0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VERIFIED CAREER TIMELINE ── */}
      <ExperienceTimeline onOpenResume={onOpenResume} />

      {/* ── 6. THE DEVELOPER'S TECHNICAL ARSENAL (TOOLING & TECH) ── */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-white dark:bg-[#0A1931] border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                  Ecosystem &amp; Tools
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-ink-primary dark:text-[#F6FAFD] tracking-tight">
                The Technical{' '}
                <span className="text-ocean-shimmer italic font-normal">Arsenal</span>
              </h2>
              <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
                Battle-tested tools, modern frameworks, and infrastructure utilized in daily production.
              </p>
            </div>

            <Link
              to="/skills"
              onClick={() => aiVoice.speak('Opening technical skills architecture.')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent-deep dark:text-accent hover:underline shrink-0"
            >
              <span>Explore In-Depth Skills Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalArsenal.map((ta, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-canvas-subtle/50 dark:bg-[#10243E] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="p-2 rounded-xl bg-accent/15 text-accent-deep dark:text-accent">
                      {ta.icon}
                    </span>
                    <h4 className="text-sm font-display font-semibold text-ink-primary dark:text-[#F6FAFD]">
                      {ta.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {ta.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white dark:bg-[#162F4F] text-ink-primary dark:text-[#B3CFE5] border border-ink-border/60 dark:border-ink-dark-border/60 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. VERIFIED CREDENTIALS & ACADEMIC BACKGROUND ── */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Continuous Learning &amp; Credentials
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-ink-primary dark:text-[#F6FAFD] tracking-tight">
              Verified{' '}
              <span className="text-ocean-shimmer italic font-normal">Credentials</span> &amp; Background
            </h2>
            <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Formal education, technical specializations, and professional certifications backing every deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Full Stack Web Development',
                issuer: 'Technical Specialization Certification',
                year: '2023 – 2024',
                badge: 'Full-Stack Certified',
                icon: <Award className="w-5 h-5 text-accent" />,
                desc: 'End-to-end web engineering mastery: React component architecture, Node.js REST APIs, Express middleware, and database management.',
                skills: ['React.js', 'Node.js', 'Express', 'JavaScript ES6+', 'REST APIs']
              },
              {
                title: 'Database Modeling & SQL Architecture',
                issuer: 'Relational Database Engineering Track',
                year: '2023 – 2024',
                badge: 'Database Certified',
                icon: <Database className="w-5 h-5 text-accent" />,
                desc: '3NF schema normalization, composite indexing strategies, foreign key constraints, and query optimization in PostgreSQL & MySQL.',
                skills: ['PostgreSQL', 'MySQL', '3NF Schemas', 'ACID Transactions']
              },
              {
                title: 'Bachelor of Technology (B.Tech)',
                issuer: 'Engineering Graduate',
                year: 'Degree Completed',
                badge: 'Academic Degree',
                icon: <GraduationCap className="w-5 h-5 text-accent" />,
                desc: 'Strong foundation in core computer science principles, data structures, algorithms, operating systems, and software engineering.',
                skills: ['Computer Science', 'Data Structures', 'Algorithms', 'Software Eng']
              },
              {
                title: 'Production UI/UX & Responsive Web',
                issuer: 'Frontend Engineering Specialization',
                year: '2023 – 2024',
                badge: 'Frontend Certified',
                icon: <Code2 className="w-5 h-5 text-accent" />,
                desc: 'Pixel-perfect responsive design, modern Tailwind CSS tokens, web accessibility (ARIA standards), and zero-bloat asset pipelines.',
                skills: ['Tailwind CSS', 'Mobile-First', 'ARIA Access', 'Vite / Webpack']
              }
            ].map((cred, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center">
                      {cred.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md badge-ocean font-bold">
                      {cred.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-display font-medium text-ink-primary dark:text-[#F6FAFD]">
                      {cred.title}
                    </h3>
                    <p className="text-xs font-mono text-accent mt-0.5">
                      {cred.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {cred.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-ink-border/50 dark:border-ink-dark-border/50">
                    {cred.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md text-[10px] font-mono chip-ocean">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-ink-border/40 dark:border-ink-dark-border/40 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Verified Credential</span>
                  </span>
                  <span>{cred.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. HIGH-IMPACT COLLABORATION BANNER WITH 3D QUANTUM TORUS KNOT ── */}
      <PageCtaSection
        variant="torus"
        badge="Open for Strategic Projects & Dedicated Roles"
        headingPrefix="Ready to build something"
        highlightWord="extraordinary together?"
        subtitle="Whether you need a full-stack web application, a high-frequency REST API, or an architectural consultation, I bring genuine technical ownership to your vision."
        primaryBtnText="Let's Discuss Opportunities"
        primaryBtnLink="/contact"
        isDarkMode={isDarkMode}
      />
    </main>
  );
};
