import React from 'react';
import { Target, Zap, Shield, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aiVoice } from '../../utils/voiceAssistant';

export const HomeWhyHire = () => {
  const valueProps = [
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      number: '01',
      title: 'Business-Driven Engineering',
      tagline: 'Code aligned with company ROI & user conversion',
      desc: 'I do not write code in a vacuum. Every component, API endpoint, and database schema is designed to solve real operational bottlenecks, reduce friction, and scale business value.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      number: '02',
      title: 'Sub-Second Performance',
      tagline: 'Zero bloat, efficient bundles & rapid response',
      desc: 'Obsessed with performance engineering: minimal dependencies, sub-second TTFB, optimized database indexing, and fluid 60fps animations that keep users engaged.',
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      number: '03',
      title: 'Bulletproof Code Hygiene',
      tagline: 'Clean Git branches, modularity & security',
      desc: 'Disciplined software engineering standards: strict semantic commits, modular component separation, comprehensive input sanitization, and defensive error boundaries.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      number: '04',
      title: 'Direct, Transparent Delivery',
      tagline: 'Predictable milestones & smooth collaboration',
      desc: 'Clear, proactive communication with regular async demos. No surprises, no disappearing acts—just dependable, production-ready deliverables shipped on schedule.',
    },
  ];

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark border-b border-ink-border/80 dark:border-ink-dark-border/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Value Proposition
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Why Companies &amp; Founders{' '}
              <span className="text-ocean-shimmer italic font-normal">Choose Me</span>
            </h2>
            <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              The four foundational pillars defining how I engineer, communicate, and deliver results.
            </p>
          </div>

          <Link
            to="/contact"
            onClick={() => aiVoice.speak('Connecting with Balaji for your next project.')}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold text-white shadow-sm hover:shadow-elevated transition-all shrink-0 w-full sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
          >
            <span>Discuss Opportunities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.number}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white/90 dark:bg-[#10243E]/90 backdrop-blur-xl shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-2xl bg-accent/10 dark:bg-accent/15 group-hover:scale-110 transition-transform">
                    {prop.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-accent-deep dark:text-accent">
                    {prop.number}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-ink-primary dark:text-ink-dark-primary mb-1">
                  {prop.title}
                </h3>
                <p className="text-xs font-mono text-accent-deep dark:text-accent mb-4 font-medium">
                  {prop.tagline}
                </p>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
                  {prop.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-ink-border/50 dark:border-ink-dark-border/50 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

