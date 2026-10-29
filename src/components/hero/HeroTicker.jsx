import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  Terminal,
} from 'lucide-react';
import { aiVoice } from '../../utils/voiceAssistant';

export const HeroTicker = () => {
  const tickerItems = [
    {
      icon: <Cpu className="w-3.5 h-3.5 text-accent" />,
      text: 'Full-Stack Architecture',
      highlight: false,
    },
    {
      icon: <Code2 className="w-3.5 h-3.5 text-accent" />,
      text: 'React 18 & Modern Web',
      highlight: false,
    },
    {
      icon: <Terminal className="w-3.5 h-3.5 text-accent" />,
      text: 'Node.js & Express APIs',
      highlight: false,
    },
    {
      icon: <Database className="w-3.5 h-3.5 text-accent" />,
      text: 'PostgreSQL & MySQL Scalability',
      highlight: false,
    },
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-accent" />,
      text: 'Three.js & 3D WebGL Experiences',
      highlight: false,
    },
    {
      icon: <Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />,
      text: 'Zero-Bloat & Sub-Second Speeds',
      highlight: false,
    },
    {
      icon: (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      ),
      text: 'Available for Freelance & Contracts',
      highlight: true,
      pill: true,
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-accent" />,
      text: 'Production Ready & Tested',
      highlight: false,
    },
    {
      icon: <Globe className="w-3.5 h-3.5 text-accent" />,
      text: '10+ Shipped Client Projects',
      highlight: false,
    },
    {
      icon: <ArrowUpRight className="w-3.5 h-3.5 text-[#B3CFE5]" />,
      text: "Have an Idea? Let's Talk",
      isCta: true,
      link: '/contact',
    },
  ];

  // Duplicate for seamless 50% infinite marquee loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <section
      aria-label="Technical Highlights Ticker"
      className="relative z-20 border-y border-ink-border/80 dark:border-ink-dark-border/80 bg-white/70 dark:bg-[#0A1931]/80 backdrop-blur-xl py-3.5 overflow-hidden transition-colors"
    >
      <div className="mask-marquee w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-8 shrink-0">
              {item.isCta ? (
                <Link
                  to={item.link}
                  onClick={() => aiVoice.speak('Connecting with Balaji.')}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 shadow-sm group/btn"
                  style={{
                    background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)',
                  }}
                >
                  <span>{item.text}</span>
                  <span className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                    {item.icon}
                  </span>
                </Link>
              ) : item.pill ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium shadow-xs">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-[#F6FAFD] transition-colors select-none">
                  {item.icon}
                  <span className="tracking-tight">{item.text}</span>
                </div>
              )}

              {/* Minimal Divider Dot */}
              <span className="w-1 h-1 rounded-full bg-ink-border dark:bg-[#1A3D63]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

