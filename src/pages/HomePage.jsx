import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/hero/HeroSection';
import { HeroTicker } from '../components/hero/HeroTicker';
import { ProjectCard } from '../components/projects/ProjectCard';
import { HomeTechMatrix } from '../components/home/HomeTechMatrix';
import { HomeExperienceTrack } from '../components/home/HomeExperienceTrack';
import { HomeWhyHire } from '../components/home/HomeWhyHire';
import { HomeTestimonials } from '../components/home/HomeTestimonials';
import { PageCtaSection } from '../components/ui/PageCtaSection';
import { projects } from '../data/projects';
import { ArrowRight, CheckCircle2, ArrowUpRight, Sparkles, Mail, MessageSquare } from 'lucide-react';
import { aiVoice } from '../utils/voiceAssistant';

export const HomePage = ({ onOpenResume, isDarkMode }) => {
  useEffect(() => {
    document.title = "Balaji Projects .P — Full Stack Web Developer & Architecture Consultant";
  }, []);

  return (
    <main>
      {/* 1. Hero with 3D Experience */}
      <HeroSection onOpenResume={onOpenResume} isDarkMode={isDarkMode} />

      {/* 2. Interactive Infinite Tech Marquee & CTA Ticker */}
      <HeroTicker />

      {/* 3. Featured Flagship Projects Spotlight */}
      <section className="pt-10 sm:pt-12 pb-14 sm:pb-16 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                  Featured Work
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
                Selected{' '}
                <span className="text-ocean-shimmer italic font-normal">Flagship</span>{' '}
                Case Studies
              </h2>
              <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary font-light">
                A curated preview of production web applications engineered with modern stacks.
              </p>
            </div>

            <Link
              to="/projects"
              onClick={() => aiVoice.speak("Navigating to all verified projects.")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-sm hover:shadow-elevated transition-all shrink-0 w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)' }}
            >
              <span>View All 25+ Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Top 4 Featured Projects in a 2x2 Grid (2 cards per line, 4 sites total) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {projects.slice(0, 4).map((project, idx) => (
              <ProjectCard key={project.id} project={project} variant="grid" index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Technical Stack & 4-Pillar Architecture */}
      <HomeTechMatrix />

      {/* 5. Verified Experience & Career Track Record */}
      <HomeExperienceTrack onOpenResume={onOpenResume} />

      {/* 6. Why Companies & Founders Hire Balaji */}
      <HomeWhyHire />

      {/* 7. Client & Collaborator Feedback (Social Proof) */}
      <HomeTestimonials />

      {/* 8. High-Impact Contact CTA Banner with 3D Cybernetic Ocean Wave */}
      <PageCtaSection
        variant="waves"
        badge="Currently Open for Freelance & Select Full-Time Roles"
        headingPrefix="Have an idea worth building?"
        highlightWord="Let's make it real."
        subtitle="Available for full-stack client projects, web architecture consulting, and engineering collaborations. Average response time: within 24 hours."
        primaryBtnText="Start a Conversation"
        primaryBtnLink="/contact"
        isDarkMode={isDarkMode}
      />
    </main>
  );
};
