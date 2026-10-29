import React, { useState, useEffect } from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { PageCtaSection } from '../components/ui/PageCtaSection';
import { PERSONAL_INFO } from '../utils/constants';
import { aiVoice } from '../utils/voiceAssistant';
import {
  Clock,
  Globe,
  Shield,
  MessageCircle,
  Phone,
  Mail,
  Copy,
  Check,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  CheckCircle2,
  Lock,
  Headphones,
  FileCheck,
  Send
} from 'lucide-react';

export const ContactPage = ({ isDarkMode }) => {
  useEffect(() => {
    document.title = "Contact Balaji Projects .P — Hire Full Stack Web Developer | Nellore & Pan-India";
  }, []);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTimeIST, setCurrentTimeIST] = useState('');
  const [isWorkingHours, setIsWorkingHours] = useState(true);

  // Live IST Clock & Availability Detection
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata (IST)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      setCurrentTimeIST(timeString);

      // Check IST hour (09:00 to 20:30 IST)
      const istHours = parseInt(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          hour12: false,
        }).format(now),
        10
      );
      setIsWorkingHours(istHours >= 9 && istHours < 21);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    aiVoice.speak('Email address copied to your clipboard.');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    aiVoice.speak('Phone number copied to your clipboard.');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const onboardingSteps = [
    {
      num: '01',
      title: 'Inquiry Dispatch',
      time: 'Instant',
      desc: 'Your project brief or message lands directly in my priority inbox and mobile alerts.',
    },
    {
      num: '02',
      title: 'Feasibility Review',
      time: 'Within 4 Hours',
      desc: 'I analyze your functional scope, database schema needs, and delivery feasibility.',
    },
    {
      num: '03',
      title: 'Discovery Consultation',
      time: 'Same / Next Day',
      desc: 'Free 30-minute Google Meet or Zoom call to align on milestones, architecture, and timeline.',
    },
    {
      num: '04',
      title: 'Milestone Proposal',
      time: 'Within 24 Hours',
      desc: 'Receive a transparent fixed-price or sprint proposal with an inclusive 30-day warranty.',
    },
  ];

  const trustBadges = [
    {
      icon: <Shield className="w-5 h-5 text-accent" />,
      title: 'Mutual NDA Protected',
      desc: 'Happy to sign your standard non-disclosure agreement prior to reviewing proprietary designs or APIs.',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-accent" />,
      title: '100% IP & Repo Handover',
      desc: 'Complete GitHub repository transfer, documentation, and database ownership delivered upon completion.',
    },
    {
      icon: <Globe className="w-5 h-5 text-accent" />,
      title: 'Global Timezone Overlap',
      desc: 'Accustomed to collaborating smoothly across US (EST/PST), European (UTC/CET), and Asian working hours.',
    },
    {
      icon: <Lock className="w-5 h-5 text-accent" />,
      title: 'Zero Spam Guarantee',
      desc: 'Your contact credentials and project specifications are held in strict confidence and never shared.',
    },
  ];

  return (
    <main className="pt-20">
      {/* ── 1. UNIQUE EDITORIAL HERO WITH LIVE TIMEZONE CLOCK ── */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 relative overflow-hidden bg-canvas-light dark:bg-canvas-dark border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="absolute inset-0 bg-ocean-mesh pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for New Projects &amp; Dedicated Roles</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
                Let's Build Something{' '}
                <span className="text-ocean-shimmer italic font-normal">Exceptional</span>
              </h1>

              <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light max-w-2xl leading-relaxed">
                Whether you need a full-stack web application, a database-driven dashboard, an e-commerce storefront, or an architectural consultation — I bring true technical ownership to your vision.
              </p>
            </div>

            {/* Live Nellore AP / All Over India IST Clock & Status Dossier */}
            <div className="p-5 sm:p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle min-w-[280px] sm:min-w-[320px] space-y-3 self-start lg:self-auto">
              <div className="flex items-center justify-between text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Nellore, AP • All Over India (IST)</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-accent">UTC +5:30</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-ink-primary dark:text-[#F6FAFD] tracking-tight">
                  {currentTimeIST || '09:30:00 AM'}
                </span>
                <span className="text-xs font-mono text-accent font-semibold">IST</span>
              </div>

              <div className="pt-2 border-t border-ink-border/50 dark:border-ink-dark-border/50 flex items-center gap-2 text-xs font-mono">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isWorkingHours ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                <span className="text-ink-secondary dark:text-ink-dark-secondary">
                  {isWorkingHours
                    ? 'Online & Active &bull; Prompt response'
                    : 'Overnight queue &bull; Replies first thing AM'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INSTANT REACH CHANNELS (3 DIRECT PATHWAYS) ── */}
      <section className="py-10 sm:py-14 bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 relative border-b border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. WhatsApp Direct */}
            <a
              href="https://wa.me/919030545655?text=Hi%20Balaji,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20web%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => aiVoice.speak('Connecting directly to WhatsApp conversation.')}
              className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-emerald-500 hover:shadow-elevated transition-all duration-300 card-3d flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
                    Instant Messaging
                  </span>
                  <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary group-hover:text-emerald-600 transition-colors">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-mono mt-0.5">
                    +91 9030545655
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </a>

            {/* 2. Direct Phone Call */}
            <div className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold block">
                    Direct Phone Line
                  </span>
                  <a
                    href="tel:+919030545655"
                    className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary hover:text-accent transition-colors"
                  >
                    +91 9030545655
                  </a>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-mono mt-0.5">
                    IST 09:30 AM – 07:30 PM
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl border border-ink-border dark:border-ink-dark-border hover:border-accent text-accent transition-all"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* 3. Direct Email */}
            <div className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex items-center justify-between group">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold block">
                    Direct Professional Mail
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary hover:text-accent transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-mono mt-0.5">
                    Guaranteed &lt; 24h response
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl border border-ink-border dark:border-ink-dark-border hover:border-accent text-accent transition-all shrink-0 ml-2"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MAIN WORKSPACE: DOSSIER & INTERACTIVE CONTACT FORM ── */}
      <section className="py-16 sm:py-24 bg-canvas-light dark:bg-canvas-dark relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Technical Dossier & Scheduling */}
            <div className="lg:col-span-5 space-y-6">
              {/* Executive Profile Card */}
              <div className="p-7 sm:p-8 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                    Technical Leadership
                  </span>
                  <h3 className="text-2xl font-display font-medium text-ink-primary dark:text-ink-dark-primary mt-1">
                    Balaji Sarabu
                  </h3>
                  <p className="text-xs font-mono text-accent-deep dark:text-[#B3CFE5] mt-0.5">
                    Full Stack Developer &amp; Architecture Consultant
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                  <p>
                    I partner directly with founders, CTOs, and agencies to engineer responsive frontend applications, hardened Node.js/PostgreSQL APIs, and automated internal workflows.
                  </p>
                  <p>
                    No account managers or junior delegation — you communicate directly with the engineer architecting and pushing your production code.
                  </p>
                </div>

                <div className="pt-4 border-t border-ink-border/60 dark:border-ink-dark-border/60 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-muted">Location / Base:</span>
                    <span className="font-semibold text-ink-primary dark:text-[#F6FAFD]">
                      Nellore, Andhra Pradesh
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-muted">Service Scope:</span>
                    <span className="font-semibold text-accent">
                      All Over India • Remote Worldwide
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-muted">Current Role:</span>
                    <span className="font-semibold text-ink-primary dark:text-[#F6FAFD]">
                      Full Stack Dev @ Dropyhub
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-muted">Typical Sprint:</span>
                    <span className="font-semibold text-accent">2 to 4 Weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-muted">Working Model:</span>
                    <span className="font-semibold text-ink-primary dark:text-[#F6FAFD]">
                      Remote Worldwide
                    </span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-ink-border/60 dark:border-ink-dark-border/60 flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary hover:text-accent border border-ink-border dark:border-ink-dark-border hover:border-accent transition-all flex items-center justify-center gap-2 bg-canvas-light dark:bg-canvas-dark"
                  >
                    <Github className="w-3.5 h-3.5 text-accent" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary hover:text-accent border border-ink-border dark:border-ink-dark-border hover:border-accent transition-all flex items-center justify-center gap-2 bg-canvas-light dark:bg-canvas-dark"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-accent" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Quick Discovery Call Card */}
              <div className="p-7 rounded-3xl border border-accent/40 bg-accent-subtle/20 dark:bg-accent-deep/15 shadow-subtle space-y-3">
                <div className="flex items-center gap-2 text-accent">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Need a Live Consultation?
                  </span>
                </div>
                <h4 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                  Free 30-Minute Architecture Review
                </h4>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                  Have an existing codebase or complex product specs? Let's hop on a 30-minute video call to diagnose bottlenecks and map a technical roadmap.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:sarabu.balaji9985@gmail.com?subject=Schedule%20a%2030-Minute%20Architecture%20Review"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-accent hover:underline"
                  >
                    <span>Request Discovery Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: The Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT HAPPENS NEXT: 4-STEP ONBOARDING ROADMAP ── */}
      <section className="py-20 sm:py-24 bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Predictable Process
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              What Happens After You{' '}
              <span className="text-ocean-shimmer italic font-normal">Reach Out?</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              A transparent, predictable onboarding workflow with zero ambiguity or wasted time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg badge-ocean">
                      STEP {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-accent font-semibold">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                    {step.title}
                  </h3>

                  <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CONFIDENTIALITY, SECURITY & TRUST VAULT ── */}
      <section className="py-20 sm:py-24 bg-canvas-light dark:bg-canvas-dark relative overflow-hidden border-t border-ink-border/80 dark:border-ink-dark-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
                Contractual Confidence
              </span>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
              Security &amp; Client{' '}
              <span className="text-ocean-shimmer italic font-normal">Protection</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
              Clear commitments ensuring your intellectual property, code assets, and privacy remain 100% protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 card-3d space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-subtle dark:bg-accent-deep/30 flex items-center justify-center">
                  {badge.icon}
                </div>
                <h3 className="text-base font-display font-medium text-ink-primary dark:text-ink-dark-primary">
                  {badge.title}
                </h3>
                <p className="text-xs text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. 3D GYROSCOPE CELESTIAL ORBITAL CTA SECTION ── */}
      <PageCtaSection
        variant="sphere"
        badge="Ready for Immediate Q4 2026 / Q1 2027 Onboarding"
        headingPrefix="Prefer an informal"
        highlightWord="technical discussion first?"
        subtitle="Drop me a direct WhatsApp note or phone call — let's review your product specifications and see how we can collaborate."
        primaryBtnText="Initiate Call / WhatsApp"
        primaryBtnLink="/contact"
        isDarkMode={isDarkMode}
      />
    </main>
  );
};
