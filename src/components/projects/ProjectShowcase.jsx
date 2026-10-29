import React, { useState, useMemo } from 'react';
import { projects, PROJECT_CATEGORIES } from '../../data/projects';
import { ProjectFilters } from './ProjectFilters';
import { ProjectCard } from './ProjectCard';
import { FolderX, Sparkles, CheckCircle2, Search, X } from 'lucide-react';

export const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  const projectCounts = useMemo(() => {
    const counts = { 'All Projects': projects.length };
    PROJECT_CATEGORIES.forEach((cat) => {
      if (cat !== 'All Projects') {
        counts[cat] = projects.filter(
          (p) => p.category === cat || (p.additionalCategories && p.additionalCategories.includes(cat))
        ).length;
      }
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    let result = projects;
    if (activeCategory !== 'All Projects') {
      result = result.filter(
        (p) => p.category === activeCategory || (p.additionalCategories && p.additionalCategories.includes(cat => cat === activeCategory))
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.techStack && p.techStack.some((t) => t.toLowerCase().includes(q))) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-14 sm:py-20 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark">
      {/* Background oceanic ambient */}
      <div className="absolute inset-0 bg-ocean-mesh pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-accent-light/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* ── Balanced Executive Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                01 / Portfolio
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Selected Work &{' '}
              <span className="text-ocean-shimmer italic font-normal">Case Studies</span>
            </h2>

            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light max-w-2xl leading-relaxed">
              Real web applications, SaaS platforms, and client systems engineered since 2023. Every item represents verified code and genuine technical responsibility.
            </p>
          </div>

          {/* Right Column: Trust Signals / Quick Metrics (Fills the previous empty space) */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center text-accent shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                  25+ Production Deployments
                </span>
                <span className="text-xs text-ink-muted dark:text-ink-dark-muted font-mono">
                  Full Stack • React • Node.js
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Search Bar & Category Filter Bar ── */}
        <div className="mb-12 space-y-5 border-b border-ink-border/80 dark:border-ink-dark-border/80 pb-6">
          {/* Live Search Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-accent absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by tech (e.g. React, Node, PostgreSQL, WhatsApp)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl text-xs input-ocean placeholder:text-ink-muted dark:placeholder:text-ink-dark-muted"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink-primary"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {searchQuery && (
              <span className="text-xs font-mono text-accent">
                Found {filteredProjects.length} matching {filteredProjects.length === 1 ? 'project' : 'projects'}
              </span>
            )}
          </div>

          {/* Category Tabs */}
          <ProjectFilters
            categories={PROJECT_CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            projectCounts={projectCounts}
          />
        </div>

        {/* ── Content Layout ── */}
        {filteredProjects.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 px-6 rounded-3xl border border-dashed border-ink-border dark:border-ink-dark-border bg-white/50 dark:bg-canvas-dark-surface/50">
            <FolderX className="w-10 h-10 mx-auto text-accent mb-3" />
            <h3 className="text-lg font-display font-medium text-ink-primary dark:text-ink-dark-primary mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-ink-muted dark:text-ink-dark-muted mb-4">
              Try adjusting your search query or selecting another category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 text-xs font-semibold rounded-xl text-white transition-all shadow-sm"
              style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
            >
              Reset Filters &amp; Search
            </button>
          </div>
        ) : searchQuery.trim() || activeCategory !== 'All Projects' ? (
          /* Search Results or Filtered Category Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, idx) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                variant="grid"
                index={idx}
              />
            ))}
          </div>
        ) : (
          /* Curated Multi-Layout Presentation (Default All Projects) */
          <div className="space-y-12">
            {/* 1. Large Featured Showcase */}
            {projects[0] && (
              <ProjectCard project={projects[0]} variant="featured" index={0} />
            )}

            {/* 2. Large Featured Showcase */}
            {projects[1] && (
              <ProjectCard project={projects[1]} variant="featured" index={1} />
            )}

            {/* 3. Alternating Editorial Presentations */}
            <div className="space-y-10">
              {projects.slice(2, 5).map((proj, idx) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  variant="alternating"
                  index={idx}
                />
              ))}
            </div>

            {/* 4. Compact Grid for Additional Client Work */}
            <div className="pt-10">
              <div className="mb-8 flex items-center justify-between border-b border-ink-border dark:border-ink-dark-border pb-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted dark:text-ink-dark-muted font-bold">
                  Additional Client &amp; Independent Work
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full badge-ocean font-medium">
                  {projects.slice(5).length} Projects
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(5).map((proj) => (
                  <ProjectCard
                    key={proj.id}
                    project={proj}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
