import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { Hero3D } from './Hero3D';
import { MagneticButton } from '../ui/MagneticButton';
import { aiVoice } from '../../utils/voiceAssistant';

export const HeroSection = ({ onOpenResume, isDarkMode }) => {
  const sectionRef = useRef(null);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.hero-reveal');
    elements?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.animation = `fadeUp 0.7s ease-out forwards`;
      el.style.animationDelay = `${i * 0.12}s`;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[82vh] lg:min-h-[85vh] flex items-center pt-24 sm:pt-28 pb-4 sm:pb-6 overflow-hidden bg-canvas-light dark:bg-canvas-dark"
    >
      {/* ── FULL-BLEED 3D HEROIC BACKGROUND PARTICLE MESH (NO BOX STRUCTURE) ── */}
      <Hero3D isDarkMode={isDarkMode} />

      {/* Mobile-Only Readability Scrim: Soft ambient backdrop so 3D depth remains visible while text is 100% crisp */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-canvas-light/95 via-canvas-light/75 to-canvas-light/95 dark:from-[#0A1931]/95 dark:via-[#0A1931]/75 dark:to-[#0A1931]/95 pointer-events-none z-[1]" />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-light/30 dark:bg-accent/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/20 dark:bg-accent-deep/30 blur-[120px] pointer-events-none" />

      {/* ── HERO CONTENT (LAYERED OVER THE FREE-FLOWING 3D PARTICLES) ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10 pointer-events-auto">
        <div className="max-w-3xl space-y-7">

          {/* Availability Pill */}
          <div className="hero-reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-ocean text-xs font-mono font-medium shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="tracking-wide">
              Available for Freelance &amp; Full-Time Roles
            </span>
          </div>

          {/* Headline */}
          <div className="hero-reveal space-y-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-ink-muted dark:text-ink-dark-muted">
              Full Stack Developer • Since 2023
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium tracking-tighter-editorial text-ink-primary dark:text-ink-dark-primary leading-[1.12] sm:leading-[1.08] drop-shadow-sm dark:drop-shadow-[0_2px_14px_rgba(10,25,49,0.95)]">
              I build digital
              <br />
              products that{' '}
              <span className="text-ocean-shimmer italic font-normal">
                work beautifully.
              </span>
            </h1>
          </div>

          {/* Authentic Narrative */}
          <p className="hero-reveal text-sm sm:text-lg text-ink-secondary dark:text-ink-dark-secondary leading-relaxed max-w-xl font-light drop-shadow-xs dark:drop-shadow-[0_1px_8px_rgba(10,25,49,0.85)]">
            I'm{' '}
            <strong className="font-semibold text-ink-primary dark:text-ink-dark-primary">
              Balaji Sarabu
            </strong>
            , a full-stack engineer creating robust web applications, high-performance architectures, and responsive digital products.
          </p>

          {/* CTAs */}
          <div className="hero-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <MagneticButton
              href="#projects"
              onClick={(e) => {
                aiVoice.speak("Exploring verified projects.");
                handleScrollTo(e, 'projects');
              }}
              className="group relative w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-xl overflow-hidden gap-2 transition-all duration-300 text-white shadow-lg hover:shadow-glow-ocean justify-center"
              style={{
                background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)',
              }}
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              onClick={(e) => {
                aiVoice.speak("Opening contact portal.");
                handleScrollTo(e, 'contact');
              }}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-medium rounded-xl border border-ink-border dark:border-ink-dark-border bg-white/80 dark:bg-canvas-dark-surface/80 backdrop-blur-md text-ink-primary dark:text-ink-dark-primary hover:border-accent transition-all duration-300 shadow-sm gap-2 justify-center"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </MagneticButton>

            <button
              onClick={() => {
                aiVoice.speak("Opening verified resume.");
                onOpenResume();
              }}
              className="w-full sm:w-auto py-2 sm:py-3.5 text-xs font-mono text-ink-muted dark:text-ink-dark-muted hover:text-accent dark:hover:text-accent transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span className="underline underline-offset-4">Verified Resume</span>
            </button>
          </div>

          {/* Executive KPI Stat Cards */}
          <div className="hero-reveal pt-2 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
            {[
              { value: '2023+', label: 'Freelance Practice', badge: 'Active' },
              { value: '10+', label: 'Real Projects', badge: 'Shipped' },
              { value: '100%', label: 'Production Ready', badge: 'Verified' },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-2.5 sm:p-4.5 transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-[#10243E]/80 backdrop-blur-xl border border-ink-border/80 dark:border-[#4A7FA7]/35 hover:border-[#4A7FA7] dark:hover:border-[#B3CFE5] shadow-subtle hover:shadow-[0_12px_28px_rgba(74,127,167,0.22)] dark:hover:shadow-[0_12px_28px_rgba(179,207,229,0.16)] text-center sm:text-left"
              >
                {/* Luminous top accent line */}
                <div className="absolute top-0 left-2 right-2 sm:left-3 sm:right-3 h-[2px] bg-gradient-to-r from-transparent via-[#4A7FA7] dark:via-[#B3CFE5] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Micro accent indicator & status tag */}
                <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A7FA7] dark:bg-[#B3CFE5] group-hover:scale-125 transition-transform" />
                  <span className="text-[8px] sm:text-[9px] font-mono tracking-wider uppercase text-ink-muted dark:text-[#B3CFE5]/80 font-medium">
                    {stat.badge}
                  </span>
                </div>

                {/* Big Metric Number */}
                <span className="block text-lg sm:text-3xl font-display font-bold tracking-tight text-ink-primary dark:text-[#F6FAFD] group-hover:text-[#4A7FA7] dark:group-hover:text-[#B3CFE5] transition-colors">
                  {stat.value}
                </span>

                {/* Subtitle Label */}
                <span className="text-[9px] sm:text-[11px] text-ink-muted dark:text-ink-dark-muted font-mono tracking-tight mt-0.5 sm:mt-1 block leading-tight font-medium truncate sm:whitespace-normal">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll Indicator - Reduced Gap */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-ink-muted dark:text-ink-dark-muted hover:text-accent transition-colors focus:outline-none group"
          >
            <span className="tracking-widest uppercase text-[10px]">Scroll to Projects</span>
            <div className="w-5 h-8 rounded-full border border-ink-border dark:border-ink-dark-border group-hover:border-accent transition-colors flex items-start justify-center p-1 bg-white/50 dark:bg-canvas-dark/50 backdrop-blur-sm">
              <span className="w-1.5 h-2 rounded-full bg-accent animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
