import React, { useEffect, useRef } from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export const AboutSection = () => {
  const ref = useReveal();

  return (
    <section
      id="about"
      className="py-14 sm:py-20 relative overflow-hidden bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20"
    >
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-accent-light/30 blur-[90px] pointer-events-none" />

      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                02 / Philosophy & Background
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              From an idea to a{' '}
              <span className="text-ocean-shimmer italic font-normal">working product.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
              <p>
                I started my freelance journey in{' '}
                <strong className="font-semibold text-ink-primary dark:text-ink-dark-primary">2023</strong>
                , driven by one goal: building software that solves concrete real-world problems for founders, local businesses, and growing teams.
              </p>
              <p>
                Currently, I work as a{' '}
                <strong className="font-semibold text-ink-primary dark:text-ink-dark-primary">Full Stack Developer at Dropyhub</strong>
                , developing responsive interfaces and backend REST services for high-volume delivery management workflows.
              </p>
              <p>
                Whether structuring normalized SQL schemas in PostgreSQL or tuning CSS micro-interactions in React, my focus remains on clean code, maintainability, and authentic usability.
              </p>
            </div>

            {/* Principle cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'PRACTICAL ARCHITECTURE', desc: 'No bloated frameworks. Clean codebases that are easy to test, inspect, and scale.' },
                { title: 'OBSESSIVE RESPONSIVENESS', desc: 'Every interface tested on real devices — phones, tablets, and desktops.' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent transition-all duration-300"
                >
                  <span className="font-mono text-xs font-bold text-accent-deep dark:text-accent block mb-1.5">
                    {p.title}
                  </span>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 sm:p-8 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-elevated space-y-6">
              <div className="flex items-center justify-between border-b border-ink-border/80 dark:border-ink-dark-border/80 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted dark:text-ink-dark-muted">
                  Developer Profile
                </span>
                <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {[
                  { label: 'Primary Focus', value: 'Full Stack Web Apps, React Frontends, Node.js APIs, Dashboards & Client Sites' },
                  { label: 'Current Role', value: 'Full Stack Developer @ Dropyhub (Delivery Management Platform)' },
                  { label: 'Previous Role', value: 'Web Developer @ SBVS Technologies (Enterprise HRMS Portal)' },
                ].map((item, i) => (
                  <div key={i}>
                    <span className="text-[10px] font-mono text-ink-muted dark:text-ink-dark-muted uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <p className="font-medium text-ink-primary dark:text-ink-dark-primary leading-snug">
                      {item.value}
                    </p>
                  </div>
                ))}

                <div>
                  <span className="text-[10px] font-mono text-ink-muted dark:text-ink-dark-muted uppercase tracking-wider block mb-1">
                    Engineering Philosophy
                  </span>
                  <blockquote className="pl-3.5 text-ink-secondary dark:text-ink-dark-secondary italic text-xs leading-relaxed border-l-2 border-accent">
                    "Great software removes friction, communicates clearly, and fulfills its purpose reliably."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Tech stack pill */}
            <div className="p-5 rounded-2xl border border-ink-border dark:border-ink-dark-border bg-white/70 dark:bg-canvas-dark-surface/70 flex items-center justify-between shadow-subtle">
              <div>
                <span className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted">Primary Stack</span>
                <p className="text-xs sm:text-sm font-semibold text-ink-primary dark:text-ink-dark-primary mt-0.5">
                  React 19 • Node.js • PostgreSQL / MySQL • Tailwind CSS
                </p>
              </div>
              <Terminal className="w-5 h-5 text-accent shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
