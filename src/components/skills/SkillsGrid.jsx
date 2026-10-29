import React, { useState, useEffect, useRef } from 'react';
import { skillCategories } from '../../data/skills';
import { Code, Server, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

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

const categoryIcons = {
  frontend: <Code className="w-5 h-5 text-accent" />,
  backend: <Server className="w-5 h-5 text-accent" />,
  databases: <Database className="w-5 h-5 text-accent" />,
  tools: <Wrench className="w-5 h-5 text-accent" />,
};

export const SkillsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useReveal();

  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="pt-10 sm:pt-16 pb-16 sm:pb-24 relative overflow-hidden bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20">
      <div className="section-divider absolute bottom-0 left-0 right-0" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent-light/30 blur-[90px] pointer-events-none" />

      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                01 / Production Stack
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Technical{' '}
              <span className="text-ocean-shimmer italic font-normal">Architecture</span>{' '}
              &amp; Skills
            </h1>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Technologies I build with in production. No arbitrary percentage progress bars — only verified engineering capabilities, real architectural roles, and deployment track records.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-canvas-dark-surface border border-ink-border dark:border-ink-dark-border shadow-xs overflow-x-auto self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-palette-navy text-white shadow-sm dark:bg-accent dark:text-palette-dark'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-accent'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-palette-navy text-white shadow-sm dark:bg-accent dark:text-palette-dark'
                    : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-accent'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated card-3d"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-ink-border/80 dark:border-ink-dark-border/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center">
                      {categoryIcons[category.id] || <Code className="w-5 h-5 text-accent" />}
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                        {category.title}
                      </h2>
                      <span className="text-[11px] font-mono text-accent-deep dark:text-[#B3CFE5]">
                        {category.tagline}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg badge-ocean">
                    {category.skills.length} competencies
                  </span>
                </div>

                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mb-6 font-light leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Item Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl border border-ink-border/60 dark:border-ink-dark-border/60 bg-canvas-card dark:bg-[#0c1f3d]/60 hover:border-accent/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary">
                            {skill.name}
                          </span>
                          <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent-subtle/60 dark:bg-accent-deep/40 text-accent font-semibold">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
                          {skill.note}
                        </p>
                      </div>

                      {skill.productionExample && (
                        <div className="mt-2.5 pt-2 border-t border-ink-border/40 dark:border-ink-dark-border/40 flex items-center gap-1.5 text-[10px] font-mono text-accent">
                          <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                          <span className="truncate">{skill.productionExample}</span>
                        </div>
                      )}
                    </div>
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
