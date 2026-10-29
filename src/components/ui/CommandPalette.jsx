import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  ArrowRight,
  FolderKanban,
  FileText,
  Phone,
  Mail,
  MessageCircle,
  Copy,
  Check,
  Sun,
  Moon,
  Home,
  User,
  Wrench,
  Layers,
  Sparkles,
  Command
} from 'lucide-react';
import { projects } from '../../data/projects';
import { PERSONAL_INFO } from '../../utils/constants';
import { aiVoice } from '../../utils/voiceAssistant';

export const CommandPalette = ({ isOpen, onClose, isDarkMode, onToggleDarkMode, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedAction, setCopiedAction] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      aiVoice.speak('Command palette opened.');
    }
  }, [isOpen]);

  const pages = [
    { id: 'page-home', title: 'Home', subtitle: 'Overview, hero & featured case studies', icon: <Home className="w-4 h-4 text-accent" />, path: '/' },
    { id: 'page-projects', title: 'Projects', subtitle: 'Flagship engineering case studies', icon: <FolderKanban className="w-4 h-4 text-accent" />, path: '/projects' },
    { id: 'page-about', title: 'About Balaji', subtitle: 'Career background, narrative & philosophy', icon: <User className="w-4 h-4 text-accent" />, path: '/about' },
    { id: 'page-services', title: 'Client Services', subtitle: 'Full-stack development offerings & engagement models', icon: <Layers className="w-4 h-4 text-accent" />, path: '/services' },
    { id: 'page-skills', title: 'Technical Skills', subtitle: 'Architecture stack, benchmarks & clean code manifesto', icon: <Wrench className="w-4 h-4 text-accent" />, path: '/skills' },
    { id: 'page-contact', title: 'Contact', subtitle: 'Schedule call, WhatsApp & project inquiry configurator', icon: <Mail className="w-4 h-4 text-accent" />, path: '/contact' },
  ];

  const projectItems = projects.map((p) => ({
    id: `project-${p.slug}`,
    title: p.title,
    subtitle: `${p.category} &bull; ${p.role}`,
    icon: <Sparkles className="w-4 h-4 text-accent" />,
    path: `/project/${p.slug}`,
  }));

  const quickActions = [
    {
      id: 'act-resume',
      title: 'View & Download Resume',
      subtitle: 'Open verified curriculum vitae modal',
      icon: <FileText className="w-4 h-4 text-accent" />,
      action: () => {
        onClose();
        if (onOpenResume) onOpenResume();
      },
    },
    {
      id: 'act-whatsapp',
      title: 'Chat on WhatsApp',
      subtitle: '+91 9030545655 &bull; Direct message',
      icon: <MessageCircle className="w-4 h-4 text-emerald-500" />,
      action: () => {
        window.open('https://wa.me/919030545655?text=Hi%20Balaji,%20I%20would%20like%20to%20discuss%20a%20web%20project.', '_blank');
        onClose();
      },
    },
    {
      id: 'act-call',
      title: 'Call Balaji Directly',
      subtitle: '+91 9030545655',
      icon: <Phone className="w-4 h-4 text-accent" />,
      action: () => {
        window.location.href = 'tel:+919030545655';
        onClose();
      },
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email Address',
      subtitle: PERSONAL_INFO.email,
      icon: <Copy className="w-4 h-4 text-accent" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopiedAction('email');
        aiVoice.speak('Email copied.');
        setTimeout(() => setCopiedAction(null), 1500);
      },
    },
    {
      id: 'act-theme',
      title: `Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`,
      subtitle: `Currently in ${isDarkMode ? 'Dark' : 'Light'} theme`,
      icon: isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-accent" />,
      action: () => {
        if (onToggleDarkMode) onToggleDarkMode();
      },
    },
  ];

  // Filter based on search query
  const q = query.toLowerCase().trim();
  const filteredPages = pages.filter((p) => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
  const filteredProjects = projectItems.filter((p) => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
  const filteredActions = quickActions.filter((a) => a.title.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q));

  const allFiltered = [
    ...filteredPages.map((p) => ({ ...p, type: 'Page' })),
    ...filteredProjects.map((p) => ({ ...p, type: 'Project' })),
    ...filteredActions.map((a) => ({ ...a, type: 'Action' })),
  ];

  const handleSelect = (item) => {
    if (item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
      onClose();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (allFiltered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allFiltered.length) % (allFiltered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (allFiltered[selectedIndex]) {
        handleSelect(allFiltered[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-[#0A1931]/60 dark:bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-white dark:bg-[#071326] border border-ink-border dark:border-[#1E3E62] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col max-h-[75vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 border-b border-ink-border/80 dark:border-ink-dark-border/80 flex items-center gap-3 bg-canvas-card dark:bg-[#0c1f3d]">
          <Search className="w-5 h-5 text-accent shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, page name, project, or action..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-ink-primary dark:text-[#F6FAFD] placeholder:text-ink-muted dark:placeholder:text-ink-dark-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-ink-muted hover:text-ink-primary text-xs"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono rounded-md bg-canvas-subtle dark:bg-[#162F4F] text-ink-muted border border-ink-border/60 dark:border-ink-dark-border/60">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-4 flex-1">
          {allFiltered.length === 0 ? (
            <div className="py-12 text-center text-xs text-ink-muted dark:text-ink-dark-muted font-mono">
              No matching pages, projects, or actions found for "{query}".
            </div>
          ) : (
            <div className="space-y-1">
              {allFiltered.map((item, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full p-3 rounded-2xl text-left flex items-center justify-between gap-3 transition-all ${
                      isSelected
                        ? 'bg-accent-subtle/70 dark:bg-[#162F4F] text-accent-deep dark:text-[#B3CFE5] shadow-2xs'
                        : 'text-ink-primary dark:text-[#E2E8F0] hover:bg-canvas-subtle/50 dark:hover:bg-[#0e2444]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-white dark:bg-[#071326] border border-ink-border/50 dark:border-ink-dark-border/50 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold truncate">
                            {item.title}
                          </span>
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded badge-ocean">
                            {item.type}
                          </span>
                        </div>
                        <p
                          className="text-[11px] text-ink-muted dark:text-ink-dark-muted truncate font-light"
                          dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {copiedAction === 'email' && item.id === 'act-copy-email' && (
                        <span className="text-[10px] font-mono text-emerald-500 font-semibold flex items-center gap-1">
                          <Check className="w-3 h-3" /> Copied!
                        </span>
                      )}
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-accent translate-x-0.5' : 'text-ink-muted opacity-0'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="p-3 px-5 border-t border-ink-border/60 dark:border-ink-dark-border/60 bg-canvas-card dark:bg-[#0c1f3d] flex items-center justify-between text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-canvas-subtle dark:bg-[#162F4F] border border-ink-border/60 dark:border-ink-dark-border/60">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-canvas-subtle dark:bg-[#162F4F] border border-ink-border/60 dark:border-ink-dark-border/60">↓</kbd>
              <span>navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-canvas-subtle dark:bg-[#162F4F] border border-ink-border/60 dark:border-ink-dark-border/60">↵</kbd>
              <span>select</span>
            </span>
          </div>

          <span className="text-accent font-semibold hidden sm:inline">
            Press Ctrl + K anytime
          </span>
        </div>
      </div>
    </div>
  );
};

