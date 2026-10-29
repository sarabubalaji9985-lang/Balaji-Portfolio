import React, { useEffect } from 'react';
import { SkillsGrid } from '../components/skills/SkillsGrid';
import { PageCtaSection } from '../components/ui/PageCtaSection';
import { engineeringPrinciples, projectSkillsMatrix, roadmapSkills } from '../data/skills';
import {
  ShieldCheck,
  Zap,
  Database,
  Smartphone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Layers,
  Cpu,
  Compass,
  Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SkillsPage = ({ isDarkMode }) => {
  useEffect(() => {
    document.title = "Engineering Skills & Technical Architecture Matrix | Balaji Projects .P";
  }, []);

  const highlights = [
    {
      title: 'Responsive & Accessible Interfaces',
      desc: 'Obsessive mobile-first responsiveness across modern iPhones, Android devices, tablets, and high-res monitors with full ARIA accessibility standards.',
      icon: <Smartphone className="w-5 h-5 text-accent" />,
      metric: '100% Mobile Ready'
    },
    {
      title: 'Optimized SQL & High Throughput',
      desc: 'Normalized schema modeling in 3NF, complex joins, indexing strategies, and connection pooling across PostgreSQL and MySQL databases.',
      icon: <Database className="w-5 h-5 text-accent" />,
      metric: 'Sub-50ms Queries'
    },
    {
      title: 'Zero Bloat Performance',
      desc: 'Fast page loads, optimized bundle chunking in Vite, lightweight state management, and minimal third-party package dependencies.',
      icon: <Zap className="w-5 h-5 text-accent" />,
      metric: '95+ Lighthouse Scores'
    },
    {
      title: 'Secure & Hardened Backends',
      desc: 'Rate limiting, CORS policies, JWT/session auth, input sanitization, and automated error handling across Express/Node.js microservices.',
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      metric: 'OWASP Aligned'
    },
  ];

  return (
    <main className="pt-20">
      {/* ── 1. TECHNICAL CAPABILITIES & ARCHITECTURE GRID ── */}
      <SkillsGrid />

      {/* ── 2. REAL-WORLD PRODUCTION MATRIX: WHERE SKILLS ARE APPLIED ── */}
      <section className="py-20 sm:py-24 bg-canvas-light dark:bg-canvas-dark relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                02 / Applied Engineering
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Where Skills Meet{' '}
              <span className="text-ocean-shimmer italic font-normal">Production</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Skills are proven by real client outcomes. Here is how these technical proficiencies directly translate into shipping software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {projectSkillsMatrix.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md badge-ocean">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                    {item.project}
                  </h3>

                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {item.problemSolved}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.coreStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md chip-ocean"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-ink-border/50 dark:border-ink-dark-border/50">
                  <Link
                    to={`/project/${item.slug}`}
                    className="text-xs font-mono font-medium text-accent hover:underline inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ENGINEERING STANDARDS & METRICS ── */}
      <section className="py-20 sm:py-24 bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                03 / Quality Benchmarks
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              How Code Is{' '}
              <span className="text-ocean-shimmer italic font-normal">Delivered</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Core technical guarantees and performance standards applied to every client and company codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center">
                      {h.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md badge-ocean">
                      {h.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary mb-2">
                    {h.title}
                  </h3>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CODE QUALITY MANIFESTO: 10 ARCHITECTURAL RULES ── */}
      <section className="py-20 sm:py-24 bg-canvas-light dark:bg-canvas-dark relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                04 / Engineering Manifesto
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              10 Tenets of{' '}
              <span className="text-ocean-shimmer italic font-normal">Clean Code</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              The internal engineering rules I enforce on every file, function, and database migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringPrinciples.map((rule) => (
              <div
                key={rule.num}
                className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex items-start gap-4"
              >
                <span className="text-2xl font-display font-bold text-accent-deep dark:text-accent shrink-0">
                  {rule.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {rule.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FUTURE ROADMAP & CONTINUOUS EVOLUTION ── */}
      <section className="py-20 sm:py-24 bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                05 / Continuous Evolution
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              2026 / 2027{' '}
              <span className="text-ocean-shimmer italic font-normal">Technical Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Technologies and architectural paradigms I am actively implementing and deepening for next-generation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSkills.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md badge-ocean">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. 3D HEXAGONAL WARP TUNNEL CTA SECTION ── */}
      <PageCtaSection
        variant="tunnel"
        badge="Continuous Engineering Evolution"
        headingPrefix="Looking for an engineer who"
        highlightWord="delivers zero-bloat code?"
        subtitle="Let's build systems engineered for sub-second responses, resilient schemas, and polished modern user experiences."
        primaryBtnText="Initiate Conversation"
        primaryBtnLink="/contact"
        isDarkMode={isDarkMode}
      />
    </main>
  );
};
