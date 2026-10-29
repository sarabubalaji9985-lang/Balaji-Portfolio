import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, MapPin, ArrowRight, ExternalLink, CheckCircle2, Award } from 'lucide-react';
import { experiences } from '../../data/experience';
import { aiVoice } from '../../utils/voiceAssistant';

export const HomeExperienceTrack = ({ onOpenResume }) => {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 border-b border-ink-border/80 dark:border-ink-dark-border/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Career History
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Verified Experience &amp;{' '}
              <span className="text-ocean-shimmer italic font-normal">Track Record</span>
            </h2>
            <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Demonstrated engineering contributions across high-frequency platforms, enterprise portals, and freelance products.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                aiVoice.speak('Accessing verified curriculum vitae.');
                if (onOpenResume) onOpenResume();
              }}
              className="px-3.5 sm:px-4 py-2 text-xs font-mono font-medium rounded-xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface hover:border-accent text-ink-primary dark:text-ink-dark-primary transition-all shadow-xs"
            >
              Download CV
            </button>
            <Link
              to="/about"
              onClick={() => aiVoice.speak('Reviewing full career timeline.')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-deep dark:text-accent hover:underline"
            >
              <span>Full Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Career Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Status + Period */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-accent/10 text-accent-deep dark:text-accent">
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-ink-primary dark:text-ink-dark-primary group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono text-accent-deep dark:text-accent font-medium mt-0.5">
                    {exp.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-1.5 pt-2">
                  {exp.responsibilities.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-ink-secondary dark:text-ink-dark-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-5 mt-6 border-t border-ink-border/50 dark:border-ink-dark-border/50">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-canvas-subtle dark:bg-[#162F4F] text-ink-muted dark:text-[#B3CFE5]"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 5 && (
                    <span className="text-[10px] font-mono text-ink-muted self-center">
                      +{exp.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantifiable Engineering Proof Ribbon */}
        <div className="p-5 sm:p-6 rounded-2xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white/60 dark:bg-[#10243E]/60 backdrop-blur-xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <span className="block text-2xl sm:text-3xl font-display font-bold text-accent-deep dark:text-accent">
              10+
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              Shipped Web Apps
            </span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-display font-bold text-accent-deep dark:text-accent">
              2023+
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              Active Experience
            </span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-display font-bold text-accent-deep dark:text-accent">
              &lt;1s
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              Target API Latency
            </span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-display font-bold text-emerald-600 dark:text-emerald-400">
              100%
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              Production Integrity
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

