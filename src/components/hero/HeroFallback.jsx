import React from 'react';
import { Layers, Code2, Database, Layout } from 'lucide-react';

export const HeroFallback = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center p-6 select-none">
      {/* Decorative architectural grid */}
      <div className="absolute inset-0 rounded-2xl border border-ink-border/60 dark:border-ink-dark-border/60 editorial-grid opacity-70" />
      
      {/* Layered Architectural Panels */}
      <div className="relative w-full max-w-sm space-y-4 z-10">
        {/* Layer 1: Frontend Surface */}
        <div className="bg-canvas-card dark:bg-canvas-dark-surface p-4 rounded-xl border border-ink-border dark:border-ink-dark-border shadow-editorial transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center justify-between mb-3 border-b border-ink-border/50 dark:border-ink-dark-border/50 pb-2">
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono font-medium text-ink-primary dark:text-ink-dark-primary">UI Layer</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent font-medium">React 19</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-3/4 bg-ink-border/60 dark:bg-ink-dark-border/60 rounded" />
            <div className="h-2 w-1/2 bg-ink-border/40 dark:bg-ink-dark-border/40 rounded" />
          </div>
        </div>

        {/* Layer 2: API & Logic Surface */}
        <div className="bg-canvas-card/90 dark:bg-canvas-dark-surface/90 backdrop-blur-sm p-4 rounded-xl border border-ink-border dark:border-ink-dark-border shadow-elevated transform translate-x-3 rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center justify-between mb-3 border-b border-ink-border/50 dark:border-ink-dark-border/50 pb-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-olive" />
              <span className="text-xs font-mono font-medium text-ink-primary dark:text-ink-dark-primary">REST Services</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-olive/10 text-olive dark:text-olive-light font-medium">Node / Express</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-5/6 bg-ink-border/60 dark:bg-ink-dark-border/60 rounded" />
            <div className="h-2 w-2/3 bg-ink-border/40 dark:bg-ink-dark-border/40 rounded" />
          </div>
        </div>

        {/* Layer 3: Database & State */}
        <div className="bg-canvas-card/80 dark:bg-canvas-dark-surface/80 backdrop-blur-sm p-4 rounded-xl border border-ink-border dark:border-ink-dark-border shadow-subtle transform -translate-x-2 -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center justify-between mb-3 border-b border-ink-border/50 dark:border-ink-dark-border/50 pb-2">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono font-medium text-ink-primary dark:text-ink-dark-primary">Data Persistence</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-ink-border/40 dark:bg-ink-dark-border/40 text-ink-secondary dark:text-ink-dark-secondary font-medium">PostgreSQL</span>
          </div>
          <div className="h-2 w-4/5 bg-ink-border/50 dark:bg-ink-dark-border/50 rounded" />
        </div>
      </div>
    </div>
  );
};
