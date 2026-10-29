import React, { useState, useEffect, useRef } from 'react';
import { services } from '../../data/services';
import { ArrowUpRight, Check, Clock, Layers, Globe, Cpu, ShoppingBag, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const iconMap = {
  Layers: <Layers className="w-5 h-5 text-accent" />,
  Globe: <Globe className="w-5 h-5 text-accent" />,
  Cpu: <Cpu className="w-5 h-5 text-accent" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-accent" />,
  Zap: <Zap className="w-5 h-5 text-accent" />,
  Activity: <Activity className="w-5 h-5 text-accent" />,
};

export const ServicesSection = () => {
  const ref = useReveal();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Full-Stack Development', 'Brand & Business Web', 'Internal Tools & HRMS', 'APIs & Third-Party Services'];

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter((s) => s.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(s.category.toLowerCase()));

  return (
    <section id="services" className="pt-10 sm:pt-16 pb-16 sm:pb-24 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark">
      <div className="absolute inset-0 bg-ocean-mesh pointer-events-none opacity-40" />

      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                01 / Comprehensive Solutions
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Specialized{' '}
              <span className="text-ocean-shimmer italic font-normal">Engineering</span>{' '}
              Offerings
            </h1>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
              Targeted, end-to-end technical capabilities engineered for startups, growth-stage businesses, and established teams seeking uncompromising quality, modern architecture, and sub-second performance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-canvas-dark-surface border border-ink-border dark:border-ink-dark-border shadow-xs overflow-x-auto self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-palette-navy text-white shadow-sm dark:bg-accent dark:text-palette-dark'
                    : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-accent'
                }`}
              >
                {cat === 'all' ? 'All Services' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated card-3d relative overflow-hidden"
            >
              <div className="space-y-5">
                {/* Number, Category & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-display font-bold text-accent-deep dark:text-accent">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md badge-ocean whitespace-nowrap">
                      {service.category}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/25 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName] || <Layers className="w-5 h-5 text-accent" />}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h2 className="text-xl font-display font-medium text-ink-primary dark:text-ink-dark-primary transition-colors group-hover:text-accent">
                    {service.title}
                  </h2>
                  <p className="text-xs text-accent-deep dark:text-[#B3CFE5] font-mono mt-1 font-medium">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Key Deliverables List */}
                <div className="space-y-2 pt-2 border-t border-ink-border/50 dark:border-ink-dark-border/50">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted font-bold block">
                    Core Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 4).map((del, dIdx) => (
                      <li key={dIdx} className="text-xs text-ink-primary dark:text-[#E2E8F0] flex items-start gap-2 font-light">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-md chip-ocean"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & Actions */}
              <div className="pt-6 mt-6 border-t border-ink-border/60 dark:border-ink-dark-border/60 space-y-4">
                <div className="flex items-center justify-between text-xs text-ink-muted dark:text-ink-dark-muted font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>{service.timeline}</span>
                  </span>
                  {service.relevantProjectSlug && (
                    <Link
                      to={`/project/${service.relevantProjectSlug}`}
                      className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      Case Study
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-center border border-ink-border dark:border-ink-dark-border hover:border-accent hover:bg-accent-subtle/30 dark:hover:bg-accent-deep/20 text-ink-primary dark:text-ink-dark-primary transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire for This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
