import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { Cta3DBackground } from './Cta3DBackground';
import { aiVoice } from '../../utils/voiceAssistant';

export const PageCtaSection = ({
  variant = 'waves',
  badge = 'Open for Freelance & Select Full-Time Roles',
  headingPrefix = 'Ready to build something',
  highlightWord = 'extraordinary together?',
  subtitle = 'Whether you need a full-stack web application, a high-frequency REST API, or an architectural consultation, I bring genuine technical ownership to your vision.',
  primaryBtnText = "Let's Discuss Opportunities",
  primaryBtnLink = '/contact',
  isDarkMode = true,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-canvas-subtle/50 dark:bg-[#071326] relative overflow-hidden flex items-center justify-center border-t border-ink-border/80 dark:border-ink-dark-border/80">
      {/* Page-Specific 3D Background Effect Canvas */}
      <Cta3DBackground variant={variant} isDarkMode={isDarkMode} />

      {/* Atmospheric Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 dark:to-[#0A1931]/75 pointer-events-none" />

      {/* CTA Content Container */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6 relative z-10 pointer-events-auto">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium shadow-xs backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-[#F6FAFD] tracking-tight">
          {headingPrefix}{' '}
          <span className="text-ocean-shimmer italic font-normal">{highlightWord}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <Link
            to={primaryBtnLink}
            onClick={() => aiVoice.speak('Connecting with Balaji for collaboration.')}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg hover:shadow-elevated transition-all w-full sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
          >
            <MessageSquare className="w-4 h-4" />
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="mailto:sarabu.balaji9985@gmail.com"
            onClick={() => aiVoice.speak('Opening direct email client.')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface hover:border-accent text-ink-primary dark:text-ink-dark-primary text-xs sm:text-sm font-medium transition-all shadow-xs w-full sm:w-auto truncate"
          >
            <Mail className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">sarabu.balaji9985@gmail.com</span>
          </a>

          <a
            href="tel:+919030545655"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface hover:border-accent text-ink-primary dark:text-[#B3CFE5] text-xs sm:text-sm font-mono font-medium transition-all shadow-xs w-full sm:w-auto"
          >
            <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>+91 9030545655</span>
          </a>
        </div>
      </div>
    </section>
  );
};

