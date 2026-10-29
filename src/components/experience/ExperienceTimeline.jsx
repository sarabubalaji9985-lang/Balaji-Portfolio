import React, { useEffect, useRef } from 'react';
import { experiences } from '../../data/experience';
import { Calendar, MapPin } from 'lucide-react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export const ExperienceTimeline = () => {
  const ref = useReveal();

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-ocean-mesh pointer-events-none opacity-60" />

      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
              03 / Career Timeline
            </span>
            <span className="h-px w-10 bg-accent/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
            Professional{' '}
            <span className="text-ocean-shimmer italic font-normal">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
            Verified roles and freelance software engineering delivered since 2023.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{ background: 'linear-gradient(180deg, #4A7FA7, #B3CFE5, transparent)' }}
          />

          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.current
                    ? 'border-accent-deep bg-accent'
                    : 'border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-card group-hover:border-accent'
                }`}
                style={exp.current ? {
                  boxShadow: '0 0 10px rgba(74, 127, 167, 0.6), 0 0 20px rgba(179, 207, 229, 0.4)',
                } : {}}
              />
              {exp.current && (
                <div
                  className="absolute -left-[35px] sm:-left-[51px] top-[4px] w-[24px] h-[24px] rounded-full animate-ping opacity-35 bg-accent-light"
                />
              )}

              {/* Card */}
              <div
                className="rounded-3xl p-6 sm:p-8 transition-all duration-300 border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated card-3d"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-ink-border/80 dark:border-ink-dark-border/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-xl sm:text-2xl font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full badge-ocean">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-accent-deep dark:text-accent">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary mb-5 leading-relaxed font-light">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted dark:text-ink-dark-muted font-bold block">
                    Core Responsibilities:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-ink-secondary dark:text-ink-dark-secondary">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-ink-border/60 dark:border-ink-dark-border/60">
                  <span className="text-[10px] font-mono text-ink-muted dark:text-ink-dark-muted mr-1">Stack:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md chip-ocean"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
