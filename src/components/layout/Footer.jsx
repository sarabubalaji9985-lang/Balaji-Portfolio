import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, NAV_LINKS } from '../../utils/constants';
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Terminal,
  MessageSquare,
  Globe,
  FileText,
} from 'lucide-react';
import { aiVoice } from '../../utils/voiceAssistant';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    aiVoice.speak('Returning to top of page.');
  };

  const techEcosystem = [
    'React 19 & Next.js',
    'Node.js & Express REST',
    'PostgreSQL & Neon DB',
    'Three.js WebGL 3D',
    'Tailwind CSS',
    'Supabase & Auth RLS',
    'Git & CI/CD Automated',
    'Lighthouse 95+ Audit',
  ];

  return (
    <footer className="relative overflow-hidden transition-colors border-t border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#0A1931]">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 dark:bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-deep/5 dark:bg-[#1A3D63]/25 blur-[120px] pointer-events-none" />

      {/* ── 1. PRE-FOOTER LIVE STATUS & AVAILABILITY BANNER ── */}
      <div className="border-b border-ink-border/60 dark:border-ink-dark-border/60 bg-canvas-subtle/50 dark:bg-[#10243E]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block sm:inline">
                Live Status: Available for Projects &amp; Contracts
              </span>
              <span className="text-xs text-ink-muted dark:text-ink-dark-muted hidden sm:inline sm:ml-2">
                • Average response time: under 24 hours
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919030545655"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-ink-border dark:border-ink-dark-border bg-white dark:bg-[#162F4F] hover:border-accent text-ink-primary dark:text-[#B3CFE5] transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Call: +91 9030545655</span>
            </a>

            <Link
              to="/contact"
              onClick={() => aiVoice.speak('Opening conversation form.')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-white shadow-sm hover:shadow-elevated transition-all"
              style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── 2. MAIN 4-COLUMN COMPREHENSIVE FOOTER BODY ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* ── Column 1: Brand Identity & Mission (5 cols on lg) ── */}
          <div className="lg:col-span-5 space-y-5">
            {/* The Brand Logo - High Resolution & Transparent */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-block group focus:outline-none"
              aria-label="Balaji Projects .P Home"
            >
              <img
                src="/brand/balaji-projects-p-navbar-transparent.png"
                alt="BALAJI projects.p"
                className="h-14 sm:h-16 md:h-[64px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(10,25,49,0.3)]"
              />
            </Link>

            <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light max-w-md">
              Full-Stack Software Engineer &amp; Digital Product Architect. Building high-performance web applications, sub-second API pipelines, and interactive 3D experiences since 2023.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-canvas-subtle dark:bg-[#10243E] border border-ink-border/60 dark:border-ink-dark-border/60 text-ink-muted dark:text-[#B3CFE5]">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Hyderabad, India • Remote Worldwide</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-canvas-subtle dark:bg-[#10243E] border border-ink-border/60 dark:border-ink-dark-border/60 text-ink-muted dark:text-[#B3CFE5]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>10+ Shipped Real Products</span>
              </span>
            </div>
          </div>

          {/* ── Column 2: Direct Contact Card (3 cols on lg) ── */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
              Direct Contact
            </h4>

            <div className="p-4 sm:p-5 rounded-2xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#10243E]/70 space-y-3 shadow-xs">
              {/* Phone Link */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted block mb-1">
                  Phone &amp; WhatsApp
                </span>
                <a
                  href="tel:+919030545655"
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-ink-primary dark:text-[#F6FAFD] hover:text-accent dark:hover:text-accent transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>+91 9030545655</span>
                </a>
              </div>

              {/* Email Link */}
              <div className="pt-2 border-t border-ink-border/50 dark:border-ink-dark-border/50">
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted block mb-1">
                  Email Address
                </span>
                <a
                  href="mailto:sarabu.balaji9985@gmail.com"
                  className="flex items-center gap-2 text-xs font-medium text-ink-primary dark:text-[#B3CFE5] hover:text-accent dark:hover:text-accent transition-colors truncate"
                  title="sarabu.balaji9985@gmail.com"
                >
                  <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="truncate">sarabu.balaji9985@gmail.com</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="pt-2 border-t border-ink-border/50 dark:border-ink-dark-border/50 flex items-center gap-2 text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted">
                <Clock className="w-3 h-3 text-accent shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* ── Column 3: Navigation Links (2 cols on lg) ── */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
              Explore Site
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-ink-secondary dark:text-ink-dark-secondary hover:text-accent dark:hover:text-[#F6FAFD] transition-colors flex items-center gap-1.5 py-0.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent group-hover:scale-125 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/project/resume-job-fit-pro"
                  onClick={scrollToTop}
                  className="text-ink-muted dark:text-ink-dark-muted hover:text-accent transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <span className="w-1 h-1 rounded-full bg-ink-border" />
                  <span>Case Studies</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Core Tech Stack (2 cols on lg) ── */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {techEcosystem.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-canvas-subtle dark:bg-[#10243E] text-ink-secondary dark:text-[#B3CFE5] border border-ink-border/50 dark:border-ink-dark-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── 3. BOTTOM ATTRIBUTION & BACK-TO-TOP BAR ── */}
      <div className="border-t border-ink-border/70 dark:border-ink-dark-border/70 bg-canvas-subtle/30 dark:bg-[#071326] py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
          <div>
            <p>
              © {currentYear} <strong className="text-ink-primary dark:text-[#F6FAFD]">BALAJI projects.p</strong>. All rights reserved.
            </p>
            <p className="text-[10px] text-ink-muted/80 mt-0.5">
              Engineered with React 19, Three.js WebGL, Tailwind CSS &amp; Vite.
            </p>
          </div>

          {/* Floating-style Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-[#10243E] hover:border-accent text-ink-primary dark:text-[#F6FAFD] hover:text-accent transition-all duration-300 shadow-xs focus:outline-none group"
            aria-label="Scroll Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
