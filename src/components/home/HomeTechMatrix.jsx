import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Server, Database, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { aiVoice } from '../../utils/voiceAssistant';

export const HomeTechMatrix = () => {
  const pillars = [
    {
      id: 'frontend',
      number: '01',
      title: 'Frontend Engineering',
      tagline: 'High-performance, accessible, responsive user interfaces',
      icon: <Code2 className="w-6 h-6 text-accent" />,
      badges: ['React 19', 'Next.js', 'Vite', 'Tailwind CSS', 'JavaScript ES6+', 'Three.js WebGL', 'Framer Motion'],
      highlights: [
        'Component-driven modular design systems',
        'Sub-second render times & responsive mobile-first fidelity',
        'Interactive 3D viewports & smooth micro-interactions',
      ],
    },
    {
      id: 'backend',
      number: '02',
      title: 'Backend & REST APIs',
      tagline: 'Scalable server architecture, secure auth & microservices',
      icon: <Server className="w-6 h-6 text-accent" />,
      badges: ['Node.js', 'Express.js', 'REST APIs', 'JWT & OAuth', 'PHP MVC', 'Middleware & CORS'],
      highlights: [
        'High-frequency RESTful endpoints with JSON contracts',
        'Multi-tier role-based access control (Admin, Client, Staff)',
        'Rate limiting, input validation & robust error handling',
      ],
    },
    {
      id: 'databases',
      number: '03',
      title: 'Databases & Data Modeling',
      tagline: 'Normalized relational schemas & resilient storage',
      icon: <Database className="w-6 h-6 text-accent" />,
      badges: ['PostgreSQL', 'MySQL', 'Supabase', 'Neon Serverless', 'Indexing & Joins'],
      highlights: [
        'Normalized schema modeling with strict foreign key integrity',
        'Optimized query performance & connection pooling',
        'Serverless cloud database integration with Row-Level Security',
      ],
    },
    {
      id: 'devops',
      number: '04',
      title: 'DevOps & Code Quality',
      tagline: 'Zero-bloat performance, testing & automated deployments',
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      badges: ['Git & GitHub', 'Vercel / Render', 'Postman QA', 'CI/CD Pipelines', 'Lighthouse 95+'],
      highlights: [
        'Disciplined Git workflow with clean semantic commits',
        'Zero-downtime continuous deployment & env security',
        'Obsessive Lighthouse audits: 95+ performance & SEO',
      ],
    },
  ];

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark border-b border-ink-border/80 dark:border-ink-dark-border/80">
      <div className="absolute inset-0 bg-ocean-mesh pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Core Competencies
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Technical Architecture &amp;{' '}
              <span className="text-ocean-shimmer italic font-normal">Superpowers</span>
            </h2>
            <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Clear, production-proven capabilities across modern frontend, backend, databases, and deployment.
            </p>
          </div>

          <Link
            to="/skills"
            onClick={() => aiVoice.speak('Exploring complete skills architecture.')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent-deep dark:text-accent hover:underline shrink-0"
          >
            <span>Explore In-Depth Skills Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white/85 dark:bg-[#10243E]/85 backdrop-blur-xl shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-2xl bg-accent/10 dark:bg-accent/15 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-ink-muted dark:text-ink-dark-muted">
                    {pillar.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-display font-semibold text-ink-primary dark:text-ink-dark-primary mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary font-light mb-5">
                  {pillar.tagline}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pillar.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-canvas-subtle dark:bg-[#162F4F] text-ink-primary dark:text-[#B3CFE5] border border-ink-border/50 dark:border-ink-dark-border/50"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-ink-border/50 dark:border-ink-dark-border/50 space-y-2">
                {pillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-ink-secondary dark:text-ink-dark-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-tight">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

