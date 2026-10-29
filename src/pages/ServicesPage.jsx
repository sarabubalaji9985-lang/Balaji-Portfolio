import React, { useState } from 'react';
import { ServicesSection } from '../components/services/ServicesSection';
import { PageCtaSection } from '../components/ui/PageCtaSection';
import { engagementModels, clientFaqs } from '../data/services';
import {
  Compass,
  Cpu,
  Layers,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Code2,
  FileCheck,
  Lock,
  Headphones,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage = ({ isDarkMode }) => {
  const [openFaqIndexes, setOpenFaqIndexes] = useState({ 0: true });

  const toggleFaq = (index) => {
    setOpenFaqIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const steps = [
    {
      num: '01',
      title: 'Discovery & System Scoping',
      duration: 'Days 1 - 3',
      desc: 'Collaborative architectural deep-dive to define user journeys, schema entities, functional milestones, and third-party integrations before writing a single line of code.',
      outputs: ['Functional Requirements Document (FRD)', 'Normalized DB Schema Blueprint', 'Milestone Schedule & Deliverable Dates'],
      icon: <Compass className="w-6 h-6 text-accent" />,
    },
    {
      num: '02',
      title: 'Architecture & Component Wireframing',
      duration: 'Week 1',
      desc: 'Designing state management hierarchies, RESTful endpoint contracts, responsive layout tokens, and component isolation in React and Tailwind CSS.',
      outputs: ['Interactive Component Prototypes', 'REST API Contract & Swagger/Postman Specs', 'Design System Design Tokens'],
      icon: <Layers className="w-6 h-6 text-accent" />,
    },
    {
      num: '03',
      title: 'Iterative Engineering & Weekly Demos',
      duration: 'Weeks 2 - 4',
      desc: 'Writing clean, typed, modular code with bi-weekly staging deployments. You interact with live test builds on staging URLs as features are completed.',
      outputs: ['Live Staging Environments on Vercel/Render', 'Modular React 19 Frontend Components', 'Hardened Node.js/PostgreSQL Endpoints'],
      icon: <Cpu className="w-6 h-6 text-accent" />,
    },
    {
      num: '04',
      title: 'Rigorous QA, Security & Speed Audits',
      duration: 'Final Week',
      desc: 'Stress testing relational databases, verifying zero-layout-shift on mobile viewports, executing Lighthouse performance tuning, and hardening auth flows.',
      outputs: ['95+ Google Lighthouse Audit Report', 'Cross-browser & iOS/Android Compatibility Check', 'Security & Input Sanitization Clearance'],
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    },
    {
      num: '05',
      title: 'Zero-Downtime Launch & 30-Day Warranty',
      duration: 'Post-Launch',
      desc: 'Production deployment to custom domains, SSL/TLS enforcement, repository handover, and an inclusive 30-day warranty guaranteeing prompt bug resolutions.',
      outputs: ['Production Deployment & DNS Setup', '100% IP & GitHub Repository Transfer', '30-Day Comprehensive Bug Warranty'],
      icon: <Rocket className="w-6 h-6 text-accent" />,
    },
  ];

  const guarantees = [
    {
      icon: <FileCheck className="w-5 h-5 text-accent" />,
      title: '100% Source Code & IP Ownership',
      desc: 'You receive complete, unencumbered ownership of every line of code, database migration, asset, and environment configuration upon completion.',
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: 'Sub-Second Page Load Guarantee',
      desc: 'Websites and apps are strictly optimized for Google Core Web Vitals, tree-shaken bundles, and fast time-to-interactive (TTI) scores.',
    },
    {
      icon: <Lock className="w-5 h-5 text-accent" />,
      title: 'Defensive Security by Default',
      desc: 'All endpoints enforce strict CORS, payload sanitization, JWT authentication, and SQL injection protections with zero exposed secrets.',
    },
    {
      icon: <Headphones className="w-5 h-5 text-accent" />,
      title: 'Direct Developer Communication',
      desc: 'Work directly with the engineer building your product — no miscommunications through account managers or non-technical intermediaries.',
    },
  ];

  return (
    <main className="pt-20">
      {/* ── 1. COMPREHENSIVE SERVICES CATALOG ── */}
      <ServicesSection />

      {/* ── 2. ENGAGEMENT & COLLABORATION MODELS ── */}
      <section className="py-20 sm:py-24 bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 sm:mb-16 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                02 / Collaboration Framework
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Flexible Engagement{' '}
              <span className="text-ocean-shimmer italic font-normal">Models</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Choose the collaboration structure that best fits your project stage, timeline, and budget predictability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className="rounded-3xl p-7 sm:p-8 border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md badge-ocean font-bold whitespace-nowrap shrink-0">
                      {model.badge}
                    </span>
                    <span className="text-xs font-mono text-accent flex items-center gap-1.5 whitespace-nowrap shrink-0">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">{model.timeline}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                    {model.title}
                  </h3>

                  <p className="text-xs font-mono text-accent-deep dark:text-[#B3CFE5]">
                    {model.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
                    {model.description}
                  </p>

                  <div className="pt-4 border-t border-ink-border/50 dark:border-ink-dark-border/50 space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted font-bold block">
                      What's Included:
                    </span>
                    <ul className="space-y-2">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-ink-primary dark:text-[#E2E8F0] flex items-start gap-2 font-light">
                          <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-ink-border/60 dark:border-ink-dark-border/60">
                  <Link
                    to="/contact"
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-center text-white flex items-center justify-center gap-2 shadow-sm transition-all"
                    style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
                  >
                    <span>Discuss This Model</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 5-PHASE ENGINEERING DELIVERY LIFECYCLE ── */}
      <section className="py-20 sm:py-24 bg-canvas-light dark:bg-canvas-dark relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 sm:mb-16 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                03 / Transparent Methodology
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              The 5-Phase Production{' '}
              <span className="text-ocean-shimmer italic font-normal">Lifecycle</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              From concept to live production, every stage is mapped out with visible milestones, continuous communication, and clear deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg badge-ocean whitespace-nowrap">
                      PHASE {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-accent block uppercase tracking-wider mb-1">
                      {step.duration}
                    </span>
                    <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {step.desc}
                  </p>

                  <div className="pt-3 border-t border-ink-border/50 dark:border-ink-dark-border/50 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted font-bold block">
                      Key Deliverables:
                    </span>
                    {step.outputs.map((out, oIdx) => (
                      <div key={oIdx} className="text-[11px] text-ink-primary dark:text-[#E2E8F0] flex items-start gap-1.5 font-light">
                        <CheckCircle2 className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CLIENT GUARANTEES & SERVICE LEVEL STANDARDS ── */}
      <section className="py-20 sm:py-24 bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                04 / Uncompromising Standards
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Client Engineering{' '}
              <span className="text-ocean-shimmer italic font-normal">Guarantees</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Non-negotiable contractual and technical standards applied to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center">
                  {g.icon}
                </div>
                <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                  {g.title}
                </h3>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CLIENT FAQ ACCORDION (2-COLUMN GRID) ── */}
      <section className="py-20 sm:py-24 bg-canvas-light dark:bg-canvas-dark relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
              05 / Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Frequently Asked{' '}
              <span className="text-ocean-shimmer italic font-normal">Questions</span>
            </h2>
            <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-light">
              Clear answers regarding onboarding, intellectual property, timelines, and post-launch guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
            {clientFaqs.map((faq, index) => {
              const isOpen = !!openFaqIndexes[index];
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface overflow-hidden transition-all duration-200 shadow-2xs hover:border-accent/60"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors hover:text-accent"
                  >
                    <span className="text-sm sm:text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-accent shrink-0 mt-0.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-accent' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light border-t border-ink-border/40 dark:border-ink-dark-border/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. 3D NETWORK CONSTELLATION CTA SECTION ── */}
      <PageCtaSection
        variant="network"
        badge="Open for Custom Web Architecture & Full-Stack Contracts"
        headingPrefix="Ready to initiate your"
        highlightWord="next digital project?"
        subtitle="From high-performance React frontends to robust Express/Node.js REST APIs and database modeling, let's turn your vision into reliable code."
        primaryBtnText="Start a Project"
        primaryBtnLink="/contact"
        isDarkMode={isDarkMode}
      />
    </main>
  );
};
