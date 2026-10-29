import React from 'react';
import { Lock, ExternalLink } from 'lucide-react';

export const BrowserFrame = ({ children, url = 'https://product.internal', className = '', liveUrl = null }) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-500 group/browser border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-elevated ${className}`}
    >
      {/* Browser Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-ink-border/80 dark:border-ink-dark-border/80 bg-canvas-subtle/70 dark:bg-canvas-dark/70"
      >
        {/* macOS Traffic Dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 inline-block" />
        </div>

        {/* Address Bar */}
        <div
          className="flex items-center gap-2 px-4 py-1 rounded-full text-[11px] font-mono max-w-xs w-full justify-center border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface text-ink-secondary dark:text-ink-dark-secondary shadow-xs"
        >
          <Lock className="w-3 h-3 text-accent" />
          <span className="truncate tracking-wide">{url}</span>
        </div>

        {/* Live Shortcut */}
        <div className="w-12 flex justify-end">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors p-1"
              title="Open Live Preview"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Frame Viewport Content */}
      <div className="relative overflow-hidden bg-canvas-subtle/20 dark:bg-canvas-dark/30">
        {children}
        {/* Subtle glass reflection */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 group-hover/browser:opacity-30 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
          }}
        />
      </div>
    </div>
  );
};
