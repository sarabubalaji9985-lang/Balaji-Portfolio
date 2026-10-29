import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ShieldAlert,
  BarChart3,
  Globe,
  Code2,
  Target,
  Zap,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { aiVoice } from '../../utils/voiceAssistant';

export const ProjectFeatureModal = ({ project, isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const contentScrollRef = useRef(null);

  // Reset to page 0 & scroll position to top whenever modal opens or project changes
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(0);
      setIsSpeaking(false);
      document.body.style.overflow = 'hidden';
      
      // Ensure content container is at top
      if (contentScrollRef.current) {
        contentScrollRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
      aiVoice.stop();
      setIsSpeaking(false);
    }
    return () => {
      document.body.style.overflow = '';
      aiVoice.stop();
      setIsSpeaking(false);
    };
  }, [isOpen, project]);

  const handleModalClose = () => {
    aiVoice.stop();
    setIsSpeaking(false);
    onClose();
  };

  const handleVoiceOverview = () => {
    if (isSpeaking) {
      aiVoice.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const speechText = `${project.title}. ${project.subtitle}. Problem: ${project.problem || project.summary}. Solution: ${project.overview || project.summary}. Built by Balaji Sarabu with ${project.technologies.slice(0, 4).join(', ')}. Verified result: ${project.outcome || 'Production delivered.'}`;
      aiVoice.speak(speechText);

      // Estimated speech duration calculation
      const wordCount = speechText.split(' ').length;
      const durationMs = Math.max(4000, (wordCount / 2.3) * 1000);
      setTimeout(() => {
        setIsSpeaking(false);
      }, durationMs);
    }
  };

  // Scroll to top whenever tab/page changes
  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage]);

  // Keyboard navigation (Escape to close, Left/Right arrow to switch tabs)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleModalClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, isSpeaking]);

  if (!isOpen || !project) return null;

  // Tabs definition
  const pages = [
    {
      id: 'overview',
      tabLabel: 'Overview & Problem',
      shortLabel: 'Overview',
      heading: 'Problem Statement & Engineering Scope',
      subtitle: `The real-world business context, challenges, and objectives behind ${project.title}.`,
      icon: <Target className="w-4 h-4 text-accent" />,
      render: () => (
        <div className="space-y-6 animate-fade-in">
          {/* Executive 1-Minute Synthesis Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-accent-subtle/70 via-white to-accent-subtle/40 dark:from-[#10243E] dark:via-[#162F4F]/60 dark:to-[#10243E] border border-accent/35 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-accent/20 dark:bg-accent-deep/40 flex items-center justify-center text-accent-deep dark:text-accent shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent-deep dark:text-[#B3CFE5]">
                  Executive 1-Minute Synthesis
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/15 text-accent-deep dark:text-accent font-semibold">
                  {project.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-ink-primary dark:text-[#F6FAFD] leading-relaxed">
                {project.summary}
              </p>
            </div>
          </div>

          {/* Side-by-Side: Icon/Visual on One Side, Related Content on the Other Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* ── LEFT SIDE: Full Icon / Project Preview Card ── */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-ink-border/80 dark:border-ink-dark-border/80 bg-canvas-subtle/50 dark:bg-[#10243E] shadow-sm">
                {/* Browser-style Top Bar */}
                <div className="px-3.5 py-2 bg-canvas-subtle dark:bg-[#162F4F] border-b border-ink-border/60 dark:border-ink-dark-border/60 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="text-[10px] text-ink-muted dark:text-ink-dark-muted truncate max-w-[200px] font-mono">
                    {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.slug}.io`}
                  </span>
                </div>

                {/* Real Website Hero / Desktop Preview Display */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/70 dark:bg-[#0A1931]/80 flex items-center justify-center">
                  {project.heroImage ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                      <Layers className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  )}
                </div>

                {/* Quick Metadata Box under Icon */}
                <div className="p-4 bg-canvas-subtle/40 dark:bg-[#10243E]/60 border-t border-ink-border/50 dark:border-ink-dark-border/50 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-ink-secondary dark:text-ink-dark-secondary">
                    <span className="text-ink-muted dark:text-ink-dark-muted font-mono text-[10px] uppercase tracking-wider">
                      Role
                    </span>
                    <span className="font-medium text-right text-xs truncate max-w-[180px]">
                      {project.role}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-ink-secondary dark:text-ink-dark-secondary">
                    <span className="text-ink-muted dark:text-ink-dark-muted font-mono text-[10px] uppercase tracking-wider">
                      Client / Platform
                    </span>
                    <span className="font-medium text-right text-xs truncate max-w-[180px]">
                      {project.client}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-ink-secondary dark:text-ink-dark-secondary">
                    <span className="text-ink-muted dark:text-ink-dark-muted font-mono text-[10px] uppercase tracking-wider">
                      Timeline
                    </span>
                    <span className="font-mono text-xs text-ink-primary dark:text-[#B3CFE5]">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Live Demo Link Button */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-xs hover:shadow-elevated transition-all"
                  style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Launch Live Application</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* ── RIGHT SIDE: Related Text Content (Problem + Solution + Objectives) ── */}
            <div className="lg:col-span-7 space-y-4">
              {/* The Problem Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/25 dark:bg-amber-950/20 dark:border-amber-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                    The Core Problem & Challenge
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-ink-primary dark:text-[#E2E8F0] leading-relaxed">
                  {project.problem || project.summary}
                </p>
              </div>

              {/* What Was Built & Solution Scope */}
              <div className="p-4 sm:p-5 rounded-2xl bg-canvas-subtle/70 dark:bg-[#10243E]/70 border border-ink-border/80 dark:border-ink-dark-border/80">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-deep dark:text-accent mb-2">
                  Solution & Engineering Scope
                </h4>
                <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                  {project.overview || project.summary}
                </p>
              </div>

              {/* Key Objectives Delivered */}
              {project.objectives && project.objectives.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-2.5">
                    Key Objectives Delivered
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.objectives.map((obj, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-[#162F4F]/40 border border-ink-border/60 dark:border-ink-dark-border/60 text-xs text-ink-primary dark:text-[#E2E8F0]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'features',
      tabLabel: 'Key Features',
      shortLabel: 'Features',
      heading: 'Engineered Features & Capabilities',
      subtitle: 'Technical workflows, interactive modules, and features engineered from scratch.',
      icon: <Sparkles className="w-4 h-4 text-accent" />,
      render: () => (
        <div className="space-y-6 animate-fade-in">
          {/* Responsibilities / Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {(project.responsibilities || []).map((resp, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#10243E] shadow-xs flex flex-col justify-between hover:border-accent/60 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-accent/15 text-accent-deep dark:text-[#B3CFE5] flex items-center justify-center text-[11px] font-mono font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-mono font-semibold text-ink-primary dark:text-[#F6FAFD]">
                      Capability #{i + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                    {resp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="p-4 rounded-2xl bg-canvas-subtle/50 dark:bg-[#10243E]/50 border border-ink-border/60 dark:border-ink-dark-border/60">
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-2.5">
              Core Tech Stack Powering These Features:
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white dark:bg-[#162F4F] text-ink-primary dark:text-[#B3CFE5] border border-ink-border/80 dark:border-ink-dark-border/80 shadow-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'architecture',
      tabLabel: 'Architecture & Tech',
      shortLabel: 'Architecture',
      heading: 'Architecture, Database & Challenges',
      subtitle: 'Technical implementation, system architecture, and complex engineering obstacles solved.',
      icon: <Cpu className="w-4 h-4 text-accent" />,
      render: () => (
        <div className="space-y-6 animate-fade-in">
          {/* Implementation details */}
          {project.implementationDetails && project.implementationDetails.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-3">
                Implementation &amp; Architecture Details
              </h4>
              <div className="space-y-2.5">
                {project.implementationDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-canvas-subtle/60 dark:bg-[#10243E]/60 border border-ink-border/60 dark:border-ink-dark-border/60 flex items-start gap-3"
                  >
                    <Code2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real Engineering Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-3">
                Engineering Challenges &amp; How Balaji Solved Them
              </h4>
              <div className="space-y-3">
                {project.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-amber-500/[0.04] dark:bg-amber-950/20 border border-amber-500/20 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 dark:text-amber-300">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>Challenge: {c.challenge}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/80 dark:bg-[#10243E]/80 border border-ink-border/50 dark:border-ink-dark-border/50">
                      <p className="text-xs sm:text-sm text-ink-primary dark:text-[#E2E8F0] leading-relaxed">
                        <strong className="text-emerald-700 dark:text-emerald-400 font-mono text-xs uppercase tracking-wider block mb-1">
                          Engineering Solution:
                        </strong>
                        {c.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'results',
      tabLabel: 'Impact & Results',
      shortLabel: 'Impact',
      heading: 'Production Metrics & Outcome',
      subtitle: 'Real-world benchmarks, test results, and verified production outcome.',
      icon: <BarChart3 className="w-4 h-4 text-accent" />,
      render: () => (
        <div className="space-y-6 animate-fade-in">
          {/* Key Metrics Cards */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted mb-3">
                Quantified Performance Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white via-white to-accent/5 dark:from-[#10243E] dark:to-[#1A3D63]/30 border border-ink-border dark:border-ink-dark-border text-center shadow-xs"
                  >
                    <span className="block text-2xl sm:text-3xl font-display font-bold text-accent-deep dark:text-accent mb-1">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono text-ink-muted dark:text-ink-dark-muted uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome Narrative */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/25 dark:bg-emerald-950/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-800 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Production Outcome</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-primary dark:text-[#E2E8F0] leading-relaxed">
              {project.outcome || project.summary}
            </p>
          </div>

          {/* Direct CTA Action Cards */}
          <div className="p-5 rounded-2xl bg-canvas-subtle/70 dark:bg-[#10243E]/70 border border-ink-border/80 dark:border-ink-dark-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-sm font-semibold text-ink-primary dark:text-[#F6FAFD]">
                Want to see the entire engineering story?
              </h5>
              <p className="text-xs text-ink-muted dark:text-ink-dark-muted mt-0.5">
                Review the dedicated case study with architecture diagrams and source details.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <Link
                to={`/project/${project.slug}`}
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white shadow-sm hover:shadow-elevated transition-all"
                style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface hover:border-accent text-ink-primary dark:text-ink-dark-primary transition-all shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5 text-accent" />
                  <span>Live App</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const activePage = pages[currentPage];

  // Render via portal to document.body to avoid parent CSS transform / overflow trapping
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleModalClose}
      className="fixed inset-0 z-[9999] bg-[#0A1931]/80 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6 overflow-hidden animate-fade-in"
    >
      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] rounded-2xl sm:rounded-3xl border border-ink-border/80 dark:border-[#4A7FA7]/35 bg-white dark:bg-[#0A1931] shadow-2xl overflow-hidden flex flex-col text-ink-primary dark:text-ink-dark-primary"
      >
        {/* ── 1. MODAL TOP BAR (TITLE + BADGES + CLOSE BUTTON) ── */}
        <div className="p-3.5 sm:p-5 border-b border-ink-border/80 dark:border-ink-dark-border/80 bg-canvas-subtle/70 dark:bg-[#10243E]/90 backdrop-blur-xl shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider badge-ocean">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-ink-border dark:border-ink-dark-border text-ink-muted dark:text-ink-dark-muted">
                  {project.status}
                </span>
                <span className="text-[10px] font-mono text-ink-muted hidden sm:inline-block">
                  • {project.year}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-display font-semibold truncate text-ink-primary dark:text-[#F6FAFD]">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted truncate">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Action / Close Button */}
            <div className="flex items-center gap-2 shrink-0">
              {/* AI Voice Briefing Narrator */}
              <button
                type="button"
                onClick={handleVoiceOverview}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  isSpeaking
                    ? 'bg-accent/20 border-accent text-accent animate-pulse font-semibold'
                    : 'border-ink-border dark:border-ink-dark-border text-ink-secondary dark:text-ink-dark-secondary hover:text-accent hover:border-accent bg-white dark:bg-[#162F4F]'
                }`}
                title={isSpeaking ? 'Stop voice overview' : 'Listen to automated audio overview'}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-accent" />
                    <span className="hidden sm:inline">Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-accent" />
                    <span className="hidden sm:inline">Audio Briefing</span>
                  </>
                )}
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-ink-border/80 dark:border-ink-dark-border/80 hover:border-accent text-accent-deep dark:text-accent bg-white dark:bg-[#162F4F] transition-all"
                  title="Open live site"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <button
                onClick={handleModalClose}
                className="p-2 sm:p-2.5 rounded-full border border-ink-border/80 dark:border-ink-dark-border/80 text-ink-muted hover:text-ink-primary dark:hover:text-white hover:border-accent hover:bg-canvas-subtle dark:hover:bg-[#162F4F] transition-all shadow-xs shrink-0 focus:outline-none"
                aria-label="Close feature preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ── 2. INTERACTIVE TABS ── */}
          <div className="mt-3.5 pt-3 border-t border-ink-border/60 dark:border-ink-dark-border/60 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
              {pages.map((p, idx) => {
                const isActive = currentPage === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setCurrentPage(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                      isActive
                        ? 'bg-accent/20 text-accent-deep dark:text-[#B3CFE5] border border-accent/50 font-semibold shadow-xs'
                        : 'text-ink-muted hover:text-ink-primary dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#162F4F]/40 border border-transparent'
                    }`}
                  >
                    <span className="opacity-80">{p.icon}</span>
                    <span className="hidden sm:inline">{p.tabLabel}</span>
                    <span className="sm:hidden">{p.shortLabel}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 3. SCROLLABLE CONTENT BODY (RESET SCROLL ON CHANGE) ── */}
        <div
          ref={contentScrollRef}
          className="p-4 sm:p-7 overflow-y-auto flex-1 space-y-4 sm:space-y-6"
        >
          {/* Active Tab Heading */}
          <div className="border-b border-ink-border/60 dark:border-ink-dark-border/60 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-lg bg-accent/15 text-accent-deep dark:text-accent">
                {activePage.icon}
              </span>
              <h4 className="text-base sm:text-xl font-display font-semibold text-ink-primary dark:text-[#F6FAFD]">
                {activePage.heading}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary font-light">
              {activePage.subtitle}
            </p>
          </div>

          {/* Active Tab Content */}
          <div>
            {activePage.render()}
          </div>
        </div>

        {/* ── 4. MODAL FOOTER CONTROLS ── */}
        <div className="p-3.5 sm:p-4 border-t border-ink-border/80 dark:border-ink-dark-border/80 bg-canvas-subtle/50 dark:bg-[#10243E]/70 flex items-center justify-between gap-3 shrink-0">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
              currentPage === 0
                ? 'opacity-30 cursor-not-allowed border-transparent text-ink-muted'
                : 'border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface hover:border-accent text-ink-primary dark:text-white shadow-xs'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Tab Progress Dots & Keyboard Shortcut Tip */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`transition-all rounded-full ${
                    currentPage === idx
                      ? 'w-6 h-2 bg-accent shadow-xs'
                      : 'w-2 h-2 bg-ink-border dark:bg-[#1A3D63] hover:bg-accent/60'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
              <span className="text-[11px] font-mono text-ink-muted ml-1.5">
                {currentPage + 1} / {pages.length}
              </span>
            </div>
            <span className="text-[10px] font-mono text-ink-muted hidden md:inline ml-2 pl-2 border-l border-ink-border/50 dark:border-ink-dark-border/50">
              Keys: ← → tabs • Esc close
            </span>
          </div>

          {/* Next / Finish Button */}
          {currentPage < pages.length - 1 ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white shadow-sm hover:shadow-elevated transition-all"
              style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
            >
              <span>Next Tab</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              to={`/project/${project.slug}`}
              onClick={handleModalClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white shadow-sm hover:shadow-elevated transition-all"
              style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
            >
              <span>Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
