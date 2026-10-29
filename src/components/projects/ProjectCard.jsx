import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers, Eye, Sparkles } from 'lucide-react';
import { BrowserFrame } from './BrowserFrame';
import { ProjectFeatureModal } from './ProjectFeatureModal';

export const ProjectCard = ({ project, variant = 'alternating', index = 0 }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  const isReversed = index % 2 === 1;
  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `app.${project.slug}.io`;

  // 1. Featured Spotlight Variant
  if (variant === 'featured') {
    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${tilt.isHovered ? 10 : 0}px)`,
          transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
        className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden card-3d border transition-all duration-300 ${
          tilt.isHovered
            ? 'border-accent shadow-elevated bg-white dark:bg-canvas-dark-surface'
            : 'border-ink-border dark:border-ink-dark-border bg-white/95 dark:bg-canvas-dark-surface/90 shadow-sm'
        }`}
      >
        {/* Dynamic Glare Sheen */}
        {tilt.isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(179, 207, 229, 0.22), transparent 60%)`,
            }}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Metadata & Narrative */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider badge-ocean">
                {project.category}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-ink-border dark:border-ink-dark-border text-ink-muted dark:text-ink-dark-muted">
                {project.status}
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tight-editorial group-hover:text-accent transition-colors duration-300">
                <Link to={`/project/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <p className="text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted mt-1">
                {project.subtitle} • {project.year}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light line-clamp-3">
              {project.summary}
            </p>

            {/* Metrics highlight */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2.5 py-2.5 my-1 border-y border-ink-border/80 dark:border-ink-dark-border/80">
                {project.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="block text-base sm:text-lg font-display font-semibold text-accent-deep dark:text-accent">
                      {m.value}
                    </span>
                    <span className="text-[9px] font-mono text-ink-muted dark:text-ink-dark-muted uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1 pt-0.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono rounded chip-ocean"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => setIsFeatureModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-300 shadow-sm hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)',
                }}
                title="1-Click complete architecture & feature breakdown"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-light" />
                <span className="tracking-wide">⚡ 1-Click Project Dossier</span>
              </button>

              <Link
                to={`/project/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-ink-border dark:border-ink-dark-border text-ink-primary dark:text-ink-dark-primary hover:border-accent transition-colors"
              >
                <span>Full Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-secondary dark:text-ink-dark-secondary hover:text-accent transition-colors py-1"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* 3D Browser Mockup */}
          <div className="lg:col-span-7">
            <Link to={`/project/${project.slug}`}>
              <BrowserFrame url={displayUrl} liveUrl={project.liveUrl}>
                <div className="relative aspect-[16/10] overflow-hidden bg-canvas-subtle/50">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink-primary/0 group-hover:bg-ink-primary/5 transition-colors" />
                </div>
              </BrowserFrame>
            </Link>
          </div>
        </div>

        {/* Interactive Feature Modal */}
        <ProjectFeatureModal
          project={project}
          isOpen={isFeatureModalOpen}
          onClose={() => setIsFeatureModalOpen(false)}
        />
      </div>
    );
  }

  // 2. Alternating Editorial Showcase Variant
  if (variant === 'alternating') {
    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${tilt.isHovered ? 8 : 0}px)`,
          transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
        className={`group relative rounded-3xl p-6 sm:p-9 mb-10 overflow-hidden card-3d border transition-all duration-300 ${
          tilt.isHovered
            ? 'border-accent shadow-elevated bg-white dark:bg-canvas-dark-surface'
            : 'border-ink-border dark:border-ink-dark-border bg-white/90 dark:bg-canvas-dark-surface/90 shadow-sm'
        }`}
      >
        {tilt.isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(179, 207, 229, 0.2), transparent 60%)`,
            }}
          />
        )}

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Visual Column */}
          <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <Link to={`/project/${project.slug}`}>
              <BrowserFrame url={displayUrl} liveUrl={project.liveUrl}>
                <div className="relative aspect-[16/10] overflow-hidden bg-canvas-subtle/40">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </BrowserFrame>
            </Link>
          </div>

          {/* Narrative Column */}
          <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full uppercase badge-ocean">
                {project.category}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-ink-border dark:border-ink-dark-border text-ink-muted dark:text-ink-dark-muted">
                {project.status}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tight-editorial group-hover:text-accent transition-colors duration-300">
                <Link to={`/project/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <p className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted mt-1">
                Role: {project.role}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono rounded-md chip-ocean"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => setIsFeatureModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-300 shadow-sm hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)',
                }}
                title="1-Click complete architecture & feature breakdown"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-light" />
                <span className="tracking-wide">⚡ 1-Click Project Dossier</span>
              </button>

              <Link
                to={`/project/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-ink-border dark:border-ink-dark-border text-ink-primary dark:text-ink-dark-primary hover:border-accent transition-colors"
              >
                <span>Full Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-ink-secondary dark:text-ink-dark-secondary hover:text-accent transition-colors py-1"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Feature Modal */}
        <ProjectFeatureModal
          project={project}
          isOpen={isFeatureModalOpen}
          onClose={() => setIsFeatureModalOpen(false)}
        />
      </div>
    );
  }

  // 3. Compact Grid Variant
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${tilt.isHovered ? 6 : 0}px)`,
        transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      className={`group relative rounded-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden card-3d border transition-all duration-300 ${
        tilt.isHovered
          ? 'border-accent shadow-elevated bg-white dark:bg-canvas-dark-surface'
          : 'border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle'
      }`}
    >
      <div className="space-y-4">
        {/* Header tags */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full uppercase badge-ocean">
            {project.category}
          </span>
          <span className="text-[10px] font-mono text-ink-muted dark:text-ink-dark-muted">
            {project.year || '2023-2024'}
          </span>
        </div>

        {/* Thumbnail Preview */}
        <div className="aspect-[16/9] rounded-xl overflow-hidden border border-ink-border/60 dark:border-ink-dark-border/60 bg-canvas-subtle/50 relative">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-white/90 dark:bg-canvas-dark-surface/90 backdrop-blur-md text-[10px] font-mono text-ink-secondary dark:text-ink-dark-secondary border border-ink-border/50">
            {project.status.split('/')[0]}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-display font-medium text-ink-primary dark:text-ink-dark-primary group-hover:text-accent transition-colors duration-300">
            <Link to={`/project/${project.slug}`}>
              {project.title}
            </Link>
          </h4>
          <p className="text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted mt-0.5">
            {project.role}
          </p>
        </div>

        <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed line-clamp-3 font-light">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono rounded-md chip-ocean"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3.5 mt-3.5 border-t border-ink-border/60 dark:border-ink-dark-border/60 flex items-center justify-between gap-2">
        <button
          onClick={() => setIsFeatureModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-all duration-300 shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
          title="1-Click complete architecture & feature breakdown"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-light" />
          <span>⚡ Quick Dossier</span>
        </button>

        <div className="flex items-center gap-3">
          <Link
            to={`/project/${project.slug}`}
            className="text-xs font-semibold text-accent-deep dark:text-accent hover:text-accent transition-colors group-hover:translate-x-0.5 inline-flex items-center gap-1"
          >
            <span>Full Case</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-muted hover:text-accent transition-colors p-1"
              title="Live Preview"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Interactive Multi-Page Feature Walkthrough Modal */}
      <ProjectFeatureModal
        project={project}
        isOpen={isFeatureModalOpen}
        onClose={() => setIsFeatureModalOpen(false)}
      />
    </div>
  );
};
