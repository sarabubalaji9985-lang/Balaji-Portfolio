import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon, Volume2, VolumeX, Search } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import { aiVoice } from '../../utils/voiceAssistant';

export const Navbar = ({ onOpenResume, isDarkMode, onToggleDarkMode, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(aiVoice.enabled);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open to prevent background bleed/scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const voiceMessages = {
    '/': 'Navigating to Home.',
    '/projects': 'Opening Projects.',
    '/about': 'Opening About.',
    '/services': 'Opening Services.',
    '/skills': 'Opening Skills.',
    '/contact': 'Opening Contact.',
  };

  const handleNavVoice = (href) => {
    // Non-blocking asynchronous voice announcement
    setTimeout(() => {
      const msg = voiceMessages[href] || `Opening ${href.replace('/', '')} page.`;
      aiVoice.speak(msg);
    }, 10);
  };

  const handleVoiceToggle = () => {
    const nextState = aiVoice.toggle();
    setIsVoiceEnabled(nextState);
  };

  const handleResumeClick = () => {
    aiVoice.speak('Accessing verified curriculum vitae.');
    onOpenResume();
  };

  const handleThemeToggle = () => {
    aiVoice.speak(isDarkMode ? 'Switching to light mode.' : 'Switching to dark mode.');
    onToggleDarkMode();
  };

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 sm:h-[88px] flex items-center ${
        isScrolled || !isHomePage || isMobileMenuOpen
          ? 'bg-white dark:bg-[#0A1931] border-b border-ink-border dark:border-ink-dark-border shadow-subtle'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isMobileMenuOpen || isScrolled || !isHomePage
          ? (isDarkMode ? '#0A1931' : '#FFFFFF')
          : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-center justify-between relative">

        {/* Brand Logo Lockup - Enlarged & High-Impact */}
        <Link
          to="/"
          onClick={() => handleNavVoice('/')}
          className="group flex items-center py-0.5 focus:outline-none"
          aria-label="Balaji Projects .P Home"
        >
          <img
            src="/brand/balaji-projects-p-navbar-transparent.png"
            alt="BALAJI projects.p"
            className="h-13 sm:h-16 md:h-[68px] lg:h-[72px] w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(179,207,229,0.6)] drop-shadow-[0_2px_10px_rgba(10,25,49,0.3)]"
          />
        </Link>

        {/* Desktop Multi-Page Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavVoice(link.href)}
                className={`relative py-1 transition-all duration-300 hover:text-accent focus:outline-none group ${
                  isActive
                    ? 'text-accent-deep dark:text-accent font-semibold'
                    : 'text-ink-secondary dark:text-ink-dark-secondary'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* COMPACT VOICE SWITCH TOGGLE (Small clean name & switch) */}
          <button
            onClick={handleVoiceToggle}
            className={`px-2.5 py-1.5 rounded-full transition-all duration-200 border flex items-center gap-2 text-xs font-mono shadow-xs focus:outline-none ${
              isVoiceEnabled
                ? 'border-accent bg-accent/10 text-accent-deep dark:text-accent'
                : 'border-ink-border dark:border-ink-dark-border bg-white/60 dark:bg-canvas-dark-surface/60 text-ink-muted hover:text-ink-primary'
            }`}
            title={isVoiceEnabled ? 'Voice Guidance Active (Click to Mute)' : 'Voice Guidance Muted (Click to Activate)'}
            aria-label="Toggle Voice Guidance"
          >
            {isVoiceEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-accent animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-ink-muted" />
            )}
            <span className="text-[11px] font-medium tracking-tight">Voice</span>
            {/* Visual Micro Toggle Switch */}
            <div
              className={`w-7 h-3.5 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
                isVoiceEnabled ? 'bg-accent justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
            </div>
          </button>

          {/* Command Palette Trigger Button (Ctrl + K) */}
          <button
            onClick={onOpenCommandPalette}
            className="px-2.5 py-1.5 rounded-xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface hover:border-accent text-ink-secondary dark:text-ink-dark-secondary hover:text-accent transition-all duration-200 flex items-center gap-2 shadow-xs group"
            title="Open Command Palette (Ctrl + K)"
            aria-label="Open Command Palette"
          >
            <Search className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted hidden lg:inline">
              Search
            </span>
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono font-semibold rounded bg-canvas-subtle dark:bg-[#162F4F] text-ink-muted border border-ink-border/50 dark:border-ink-dark-border/50">
              Ctrl K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-xl text-ink-secondary dark:text-ink-dark-secondary hover:text-accent hover:bg-canvas-subtle dark:hover:bg-canvas-dark-subtle transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDarkMode
              ? <Sun className="w-4 h-4 text-amber-400" />
              : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Button */}
          <button
            onClick={handleResumeClick}
            className="px-3.5 py-2 text-xs font-mono font-medium rounded-xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-canvas-dark-surface hover:border-accent text-ink-primary dark:text-ink-dark-primary hover:text-accent transition-all duration-300 flex items-center gap-1.5 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
          </button>

          {/* ── "LET'S TALK" LUXURY PILL BUTTON WITH ROTATING CONIC AURA ON HOVER ── */}
          <div className="relative group/talk ml-1">
            <Link
              to="/contact"
              onClick={() => handleNavVoice('/contact')}
              className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] hover:shadow-[0_0_22px_rgba(74,127,167,0.45)] dark:hover:shadow-[0_0_22px_rgba(179,207,229,0.35)]"
            >
              {/* Rotating Gradient Aura (Centered, symmetrical, flares on hover) */}
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350%] aspect-square opacity-60 group-hover/talk:opacity-100 transition-opacity duration-300 animate-[spin_3s_linear_infinite] pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, #B3CFE5 0deg, #4A7FA7 120deg, #1A3D63 240deg, #B3CFE5 360deg)',
                }}
              />

              {/* Inner Button Pill Surface */}
              <span className="relative z-10 inline-flex items-center gap-2.5 px-5 py-2 sm:px-5.5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap text-white transition-colors duration-300 bg-[#0A1931] group-hover/talk:bg-[#1A3D63]">
                <span>Let's Talk</span>
                <span className="w-4 h-4 rounded-full bg-white/10 dark:bg-white/15 flex items-center justify-center transition-all duration-300 group-hover/talk:rotate-45 group-hover/talk:bg-white/25">
                  <ArrowUpRight className="w-3 h-3 text-[#B3CFE5] group-hover/talk:text-white transition-colors" />
                </span>
              </span>
            </Link>
          </div>

        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Voice Toggle */}
          <button
            onClick={handleVoiceToggle}
            className="p-2 rounded-lg text-ink-secondary dark:text-ink-dark-secondary hover:text-accent transition-colors"
            title="Toggle Voice"
          >
            {isVoiceEnabled ? <Volume2 className="w-4 h-4 text-accent" /> : <VolumeX className="w-4 h-4" />}
          </button>
          {/* Mobile Search Button */}
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg text-ink-secondary dark:text-ink-dark-secondary hover:text-accent transition-colors"
            title="Search (Ctrl + K)"
            aria-label="Open Search"
          >
            <Search className="w-4 h-4 text-accent" />
          </button>
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-lg text-ink-secondary dark:text-ink-dark-secondary hover:text-accent transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-ink-primary dark:text-ink-dark-primary transition-colors"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (100% Solid Opaque Luxury Overlay - Zero Content Bleed) */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-20 sm:top-[88px] bottom-0 z-50 overflow-y-auto px-6 py-6 border-t border-ink-border/40 dark:border-ink-dark-border/40 shadow-2xl flex flex-col justify-between"
          style={{
            backgroundColor: isDarkMode ? '#0A1931' : '#FFFFFF',
            color: isDarkMode ? '#F6FAFD' : '#0A1931'
          }}
        >
          {/* Nav Links */}
          <nav className="flex flex-col space-y-2 pt-2">
            {NAV_LINKS.map((link, idx) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavVoice(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 text-lg font-medium ${
                    isActive
                      ? 'bg-accent/15 text-accent-deep dark:text-accent font-semibold border border-accent/30'
                      : 'text-ink-primary dark:text-ink-dark-primary hover:bg-canvas-subtle dark:hover:bg-canvas-dark-surface'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-accent/70">0{idx + 1}</span>
                    <span>{link.name}</span>
                  </span>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(74,127,167,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="pt-6 mt-6 border-t border-ink-border/40 dark:border-ink-dark-border/40 flex flex-col gap-3.5 pb-8">
            <div className="flex items-center justify-between px-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
              <span>VOICE: {isVoiceEnabled ? 'ACTIVE' : 'MUTED'}</span>
              <span>+91 9030545655</span>
            </div>

            <button
              onClick={handleResumeClick}
              className="w-full py-3 text-xs font-mono font-medium rounded-xl border border-ink-border dark:border-ink-dark-border bg-canvas-subtle dark:bg-[#162F4F] text-ink-primary dark:text-ink-dark-primary hover:border-accent transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>View Official Resume</span>
            </button>

            <Link
              to="/contact"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavVoice('/contact');
              }}
              className="w-full py-3.5 text-xs font-semibold rounded-full text-center text-white flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-[#1A3D63] via-[#4A7FA7] to-[#1A3D63] hover:opacity-95 transition-opacity"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
