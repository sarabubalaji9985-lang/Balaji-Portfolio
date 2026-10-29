import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { ResumeModal } from './components/ui/ResumeModal';
import { NeonBlobLoader } from './components/ui/NeonBlobLoader';
import { WhatsAppFloatingButton } from './components/ui/WhatsAppFloatingButton';
import { CommandPalette } from './components/ui/CommandPalette';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFoundPage } from './pages/NotFoundPage';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Helper component to scroll to top on route change instantly with zero animation delay
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // Default clean oceanic white mode
    }
    return false;
  });

  // Global Ctrl + K / Cmd + K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      {/* Instant route transition with top scroll (No loading blocker) */}
      <ScrollToTop />
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen bg-canvas-light dark:bg-canvas-dark text-ink-primary dark:text-ink-dark-primary transition-colors duration-300">
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenResume={() => setIsResumeOpen(true)}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route path="/projects" element={<ProjectsPage isDarkMode={isDarkMode} />} />
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenResume={() => setIsResumeOpen(true)}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route path="/services" element={<ServicesPage isDarkMode={isDarkMode} />} />
            <Route path="/skills" element={<SkillsPage isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<ContactPage isDarkMode={isDarkMode} />} />
            <Route
              path="/project/:slug"
              element={<ProjectDetail isDarkMode={isDarkMode} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Global Floating WhatsApp Contact Action */}
        <WhatsAppFloatingButton />

        {/* Global Ctrl + K Command Palette */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Vercel Web Analytics & Performance Insights */}
        <Analytics />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
}

export default App;
