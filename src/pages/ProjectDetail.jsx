import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { BrowserFrame } from '../components/projects/BrowserFrame';
import { PageCtaSection } from '../components/ui/PageCtaSection';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  UserCheck,
  Tag,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const ProjectDetail = ({ isDarkMode }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div className="space-y-4 max-w-md">
          <h1 className="text-3xl font-display font-medium text-ink-primary dark:text-ink-dark-primary">
            Project Not Found
          </h1>
          <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
            The requested project or case study documentation could not be located.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ink-primary text-canvas-card dark:bg-ink-dark-primary dark:text-canvas-dark text-xs font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  // Find index for Next Project navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.slug}.io`;

  return (
    <article className="min-h-screen pt-20 pb-28 text-ink-primary dark:text-ink-dark-primary">
      {/* Top Breadcrumb & Return Action */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 mb-8 sm:mb-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="max-w-5xl mx-auto px-5 sm:px-8 pb-10 sm:pb-12 border-b border-ink-border/80 dark:border-ink-dark-border/80 mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-accent/10 text-accent">
            {project.category}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded border border-ink-border dark:border-ink-dark-border text-ink-secondary dark:text-ink-dark-secondary">
            {project.status}
          </span>
          <span className="text-xs font-mono text-ink-muted ml-auto">
            Case Study #{currentIndex + 1}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight-editorial text-ink-primary dark:text-ink-dark-primary mb-3">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-ink-secondary dark:text-ink-dark-secondary font-light max-w-3xl leading-relaxed mb-8">
          {project.subtitle} — {project.summary}
        </p>

        {/* Project Metadata Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-xl bg-canvas-card dark:bg-canvas-dark-surface border border-ink-border dark:border-ink-dark-border text-xs">
          <div>
            <span className="text-ink-muted font-mono uppercase block mb-1">My Role</span>
            <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">{project.role}</span>
          </div>
          <div>
            <span className="text-ink-muted font-mono uppercase block mb-1">Client / Context</span>
            <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">{project.client}</span>
          </div>
          <div>
            <span className="text-ink-muted font-mono uppercase block mb-1">Timeline</span>
            <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">{project.year}</span>
          </div>
          <div>
            <span className="text-ink-muted font-mono uppercase block mb-1">Live Access</span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent hover:underline inline-flex items-center gap-1"
              >
                <span>Visit Live App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-ink-muted font-mono">Internal / Private</span>
            )}
          </div>
        </div>
      </header>

      {/* Main Documentation Body */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-16 sm:space-y-20">
        {/* 1. Hero Preview Image in Browser Frame */}
        <div className="space-y-3">
          <BrowserFrame url={displayUrl} liveUrl={project.liveUrl}>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-canvas-subtle/50">
              <img
                src={project.heroImage}
                alt={`${project.title} Interface Preview`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </BrowserFrame>
          <p className="text-xs font-mono text-ink-muted text-center">
            Figure 1.0 — Primary interface overview and workspace layout.
          </p>
        </div>

        {/* 2. Executive Overview & Problem Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              01. Executive Overview
            </h2>
            <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              02. The Problem &amp; Business Need
            </h2>
            <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
              {project.problem}
            </p>
          </div>
        </div>

        {/* 3. Project Objectives */}
        {project.objectives && project.objectives.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card dark:bg-canvas-dark-surface border border-ink-border dark:border-ink-dark-border space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              03. Core Objectives &amp; Technical Scope
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-light">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. Technical Stack Details */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
            04. Architecture &amp; Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono rounded-lg border border-ink-border dark:border-ink-dark-border bg-canvas-card dark:bg-canvas-dark-surface text-ink-primary dark:text-ink-dark-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Implementation Details */}
        {project.implementationDetails && project.implementationDetails.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              05. Key Engineering Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.implementationDetails.map((detail, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-canvas-subtle/30 dark:bg-canvas-dark-subtle/20"
                >
                  <span className="font-mono text-xs text-accent font-semibold block mb-1">
                    System Component 0{i + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Gallery / Additional Previews */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              06. Selected Workspace Galleries
            </h2>
            <div className="space-y-8">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <BrowserFrame url={`app.${project.slug}.view/${idx + 1}`}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-canvas-subtle/40">
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </BrowserFrame>
                  <p className="text-xs font-mono text-ink-muted text-center">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              07. Technical Challenges &amp; Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-ink-border dark:border-ink-dark-border bg-canvas-card dark:bg-canvas-dark-surface space-y-3"
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-mono text-ink-muted uppercase block">Challenge</span>
                      <p className="text-sm font-medium text-ink-primary dark:text-ink-dark-primary">{c.challenge}</p>
                    </div>
                  </div>
                  <div className="pl-6 border-l-2 border-accent/40 pt-1">
                    <span className="text-xs font-mono text-accent uppercase block">Engineered Solution</span>
                    <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Verified Outcome */}
        <div className="p-8 rounded-2xl bg-canvas-card dark:bg-canvas-dark-surface border border-accent/30 shadow-subtle space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-accent">
              08. Verified Outcome &amp; Impact
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
            {project.outcome}
          </p>
        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-12 border-t border-ink-border dark:border-ink-dark-border flex items-center justify-between">
          <Link
            to="/#projects"
            className="text-xs font-mono text-ink-muted hover:text-accent transition-colors"
          >
            ← Back to Index
          </Link>

          {nextProject && (
            <Link
              to={`/project/${nextProject.slug}`}
              className="text-xs font-mono text-ink-primary dark:text-ink-dark-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>Next Project: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>

      {/* 3D Celestial Gyroscope Orbital Sphere CTA */}
      <div className="mt-16">
        <PageCtaSection
          variant="sphere"
          badge="Production Case Study Completed"
          headingPrefix="Inspired by this"
          highlightWord="architectural build?"
          subtitle="Let's engineer a custom, high-frequency solution tailored to your product goals and business workflow."
          primaryBtnText="Discuss Similar Projects"
          primaryBtnLink="/contact"
          isDarkMode={isDarkMode}
        />
      </div>
    </article>
  );
};
