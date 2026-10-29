import React from 'react';
import { X, Printer, Download, Mail, ExternalLink, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { experiences } from '../../data/experience';
import { skillCategories } from '../../data/skills';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-ink-primary/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-canvas-card dark:bg-canvas-dark-surface rounded-xl shadow-2xl border border-ink-border dark:border-ink-dark-border flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink-border dark:border-ink-dark-border bg-canvas-subtle/40 dark:bg-canvas-dark/40 print:hidden">
          <div className="flex items-center gap-3">
            <span className="font-display italic text-lg font-medium text-ink-primary dark:text-ink-dark-primary">
              Curriculum Vitae
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-mono font-medium">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 text-xs font-medium rounded-md border border-ink-border dark:border-ink-dark-border hover:bg-canvas-subtle dark:hover:bg-canvas-dark transition-colors inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-dark-secondary"
              title="Copy Email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Email'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-ink-primary dark:bg-ink-dark-primary text-canvas-card dark:text-canvas-dark hover:bg-accent dark:hover:bg-accent transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-ink-muted hover:text-ink-primary dark:hover:text-ink-dark-primary hover:bg-canvas-subtle dark:hover:bg-canvas-dark transition-colors ml-2"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-ink-primary dark:text-ink-dark-primary print:p-0 print:overflow-visible">
          {/* Resume Header */}
          <header className="border-b border-ink-border dark:border-ink-dark-border pb-6 mb-6">
            <h1 className="text-3xl font-display font-medium tracking-tight-editorial mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base text-accent font-medium mb-3">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-accent font-semibold">
                {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent underline underline-offset-2">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                GitHub
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-2 border-b border-ink-border/50 dark:border-ink-dark-border/50 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
              Full Stack Developer with hands-on professional and freelance experience since 2023 delivering production-grade web applications, SaaS tools, and business management systems. Proficient in React.js, Node.js, Express, PostgreSQL, MySQL, and modern JavaScript. Proven record of building end-to-end architectures, robust RESTful APIs, and responsive user interfaces with attention to clean code, usability, and maintainability.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-3 border-b border-ink-border/50 dark:border-ink-dark-border/50 pb-1">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-sm">
                  <div className="flex flex-wrap items-baseline justify-between mb-1">
                    <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">
                      {exp.role} <span className="text-accent font-normal">— {exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary mb-2 italic">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-3 border-b border-ink-border/50 dark:border-ink-dark-border/50 pb-1">
              Highlighted Projects
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-semibold">Resume Job Fit Pro — AI ATS Resume Builder</span>
                  <span className="text-xs font-mono text-ink-muted">React, Next.js, OpenAI, Supabase, Tailwind</span>
                </div>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary">
                  Architected full-stack resume analysis platform featuring real-time ATS keyword matching, structured section editing, and clean single-column PDF export.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-semibold">PJ Finance — Loan &amp; Collection Management</span>
                  <span className="text-xs font-mono text-ink-muted">React 19, Express, Neon PostgreSQL, JWT, Recharts</span>
                </div>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary">
                  Engineered field repayment management web application with Google OAuth, automated interest calculation, printable thermal/A4 PDF receipts, and cashflow charts.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-semibold">HR Portal — SBVS Technologies</span>
                  <span className="text-xs font-mono text-ink-muted">PHP, MySQL, JavaScript, HTML5, CSS3</span>
                </div>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary">
                  Built internal HRMS handling employee records, automated daily attendance logs, multi-tier leave approval workflows, and role-based access control.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-3 border-b border-ink-border/50 dark:border-ink-dark-border/50 pb-1">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id}>
                  <span className="font-semibold block text-ink-primary dark:text-ink-dark-primary mb-0.5">
                    {cat.title}:
                  </span>
                  <span className="text-ink-secondary dark:text-ink-dark-secondary">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
