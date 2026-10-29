import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Phone,
  Mail,
  ExternalLink,
  RotateCcw,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  ShoppingBag,
  Zap,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateChatResponse } from '../../utils/chatbotEngine.js';
import { BALAJI_PROFILE } from '../../data/chatbotKnowledge.js';

const QUICK_ACTIONS = [
  { id: 'new-website', label: 'Build a new website', icon: Globe },
  { id: 'estimate', label: 'Get a project estimate', icon: Clock },
  { id: 'ecommerce', label: 'Build an e-commerce store', icon: ShoppingBag },
  { id: 'saas', label: 'Build a SaaS application', icon: Zap },
  { id: 'redesign', label: 'Redesign my website', icon: Layers },
  { id: 'talk-balaji', label: 'Talk to Balaji', icon: Phone },
];

export const BalajiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello! I'm the AI Website Consultant & Sales Assistant for Balaji Projects.\n\nHow can I assist your business today? Choose a quick topic below or type any question:`,
      showQuickActions: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // 1. Try remote AI gateway first
      let botResponse = null;
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: text,
            history: messages.slice(-6).map((m) => ({
              sender: m.sender,
              text: m.text,
            })),
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.text && !data.useLocalEngine) {
            botResponse = {
              text: data.text,
              followUpOptions: ['Get a project estimate', 'Talk to Balaji', 'Build a new website'],
            };
          }
        }
      } catch (err) {
        // Fallback to local engine without error
      }

      // 2. If remote AI not configured or returned local signal, use local conversational engine
      if (!botResponse) {
        botResponse = generateChatResponse(text, messages);
      }

      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse.text,
        actionCard: botResponse.actionCard,
        projectRecommendation: botResponse.projectRecommendation,
        followUpOptions: botResponse.followUpOptions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `For this specific question or custom requirement, please connect directly with Balaji Sarabu:`,
        actionCard: {
          type: 'contact',
          name: BALAJI_PROFILE.founder,
          phone: BALAJI_PROFILE.phone,
          rawPhone: BALAJI_PROFILE.rawPhone,
          email: BALAJI_PROFILE.email,
          location: BALAJI_PROFILE.location,
          availability: BALAJI_PROFILE.availability,
        },
        followUpOptions: ['Build a new website', 'Talk to Balaji'],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: `Hello! I'm the AI Website Consultant & Sales Assistant for Balaji Projects.\n\nHow can I assist your business today? Choose a quick topic below or type any question:`,
        showQuickActions: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <aside
        aria-label="Balaji AI Website Consultant"
        className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Website Consultant"
            className="relative h-14 px-4 sm:px-5 rounded-full flex items-center gap-2.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-accent/40"
            style={{
              background: 'linear-gradient(135deg, #0A1931 0%, #1A3D63 50%, #4A7FA7 100%)',
              boxShadow: '0 10px 28px rgba(10, 25, 49, 0.5), 0 2px 8px rgba(74, 127, 167, 0.3)',
              border: '1px solid rgba(179, 207, 229, 0.3)',
            }}
          >
            {/* Pulsing ambient dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
            </span>

            <Sparkles className="w-5 h-5 text-accent animate-pulse" />

            <div className="flex flex-col text-left">
              <span className="text-xs font-display font-semibold tracking-wide text-white">
                Balaji AI Assistant
              </span>
              <span className="text-[10px] font-mono text-accent-subtle hidden sm:inline">
                Website Consultant • Online
              </span>
            </div>

            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center animate-bounce">
                1
              </span>
            )}
          </button>
        )}
      </aside>

      {/* Main Chat Window Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Balaji Projects AI Chat Window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] max-w-[420px] h-[580px] max-h-[85vh] flex flex-col rounded-3xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-[#071326] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          style={{
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(74, 127, 167, 0.2)',
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-3.5 flex items-center justify-between border-b border-ink-border/80 dark:border-ink-dark-border/80"
            style={{
              background: 'linear-gradient(135deg, #0A1931 0%, #1A3D63 100%)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-palette-navy/60 border border-accent/40 flex items-center justify-center text-accent">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0A1931]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-display font-semibold text-white">
                    Balaji Projects AI
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-accent/20 text-accent border border-accent/30 uppercase">
                    Consultant
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[#B3CFE5]">
                  Verified Portfolio & Sales Guide
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Restart conversation"
                className="p-1.5 rounded-lg text-[#B3CFE5] hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                className="p-1.5 rounded-lg text-[#B3CFE5] hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans bg-canvas-card dark:bg-[#071326]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-palette-navy dark:bg-[#10243E] border border-accent/30 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap break-words ${
                      msg.sender === 'user'
                        ? 'bg-palette-navy text-white dark:bg-accent dark:text-palette-dark rounded-tr-xs font-medium'
                        : 'bg-white dark:bg-[#0c1f3d] border border-ink-border dark:border-ink-dark-border text-ink-primary dark:text-[#F6FAFD] rounded-tl-xs shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* 6 Quick Action Buttons (Rendered on welcome or on demand) */}
                  {msg.showQuickActions && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-mono uppercase text-ink-secondary dark:text-[#809FB9] font-bold block mb-1">
                        Recommended Actions:
                      </span>
                      {QUICK_ACTIONS.map((action) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={action.id}
                            type="button"
                            onClick={() => handleSend(action.label)}
                            className="w-full flex items-center justify-between p-2.5 rounded-xl border border-ink-border dark:border-ink-dark-border bg-white dark:bg-[#0c1f3d]/70 hover:border-accent hover:bg-accent-subtle/30 dark:hover:bg-accent-deep/20 text-ink-primary dark:text-[#F6FAFD] transition-all group text-left"
                          >
                            <span className="flex items-center gap-2 font-mono text-[11px] font-medium text-ink-primary dark:text-[#B3CFE5] group-hover:text-accent">
                              <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                              <span>{action.label}</span>
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-ink-muted dark:text-[#63809C] group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Direct Contact Card (Strict Pricing & Uncertainty Handoff) */}
                  {msg.actionCard?.type === 'contact' && (
                    <div className="p-3.5 rounded-xl bg-palette-navy/10 dark:bg-[#0e223d] border border-accent/40 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold">
                          Direct Founder Contact
                        </span>
                        <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Online
                        </span>
                      </div>

                      <div className="space-y-1">
                        <p className="font-display font-medium text-ink-primary dark:text-white text-sm">
                          {msg.actionCard.name}
                        </p>
                        <p className="text-[11px] text-ink-secondary dark:text-[#809FB9]">
                          {msg.actionCard.location}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href={`https://wa.me/91${msg.actionCard.rawPhone}?text=Hi%20Balaji,%20I%20am%20chatting%20with%20your%20AI%20Assistant%20and%20would%20like%20to%20discuss%20a%20project.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-lg text-white font-medium text-[11px] flex items-center justify-center gap-1.5 shadow-xs transition-all hover:opacity-90"
                          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                        >
                          <Phone className="w-3 h-3 shrink-0" />
                          <span>WhatsApp</span>
                        </a>

                        <a
                          href={`mailto:${msg.actionCard.email}?subject=Project%20Inquiry%20via%20AI%20Assistant`}
                          className="px-3 py-2 rounded-lg text-white font-medium text-[11px] flex items-center justify-center gap-1.5 shadow-xs transition-all hover:opacity-90 bg-palette-navy dark:bg-accent dark:text-palette-dark"
                        >
                          <Mail className="w-3 h-3 shrink-0" />
                          <span>Send Email</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Project Recommendation Card */}
                  {msg.projectRecommendation && (
                    <div className="p-3.5 rounded-xl border border-accent/40 bg-white dark:bg-[#0c1f3d] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-accent font-bold uppercase">
                          Featured Live Benchmark
                        </span>
                        <span className="text-[10px] font-mono text-ink-secondary dark:text-[#809FB9]">
                          {msg.projectRecommendation.category}
                        </span>
                      </div>

                      <h5 className="font-display font-medium text-sm text-ink-primary dark:text-white">
                        {msg.projectRecommendation.name}
                      </h5>

                      <p className="text-[11px] text-ink-secondary dark:text-[#B3CFE5] leading-relaxed">
                        {msg.projectRecommendation.summary}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex flex-wrap gap-1">
                          {msg.projectRecommendation.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-canvas-subtle dark:bg-[#10243E] text-ink-secondary dark:text-[#B3CFE5]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/project/${msg.projectRecommendation.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="text-[11px] font-mono text-accent hover:underline flex items-center gap-1 font-semibold shrink-0 ml-2"
                        >
                          <span>View Dossier</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Follow up chips */}
                  {msg.followUpOptions && msg.followUpOptions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.followUpOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleSend(opt)}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-mono border border-ink-border dark:border-ink-dark-border bg-canvas-card dark:bg-[#0c1f3d]/60 text-ink-secondary dark:text-[#B3CFE5] hover:border-accent hover:text-accent transition-all"
                        >
                          {opt} &rarr;
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] font-mono text-ink-muted dark:text-[#63809C] block text-right pr-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-palette-navy dark:bg-[#10243E] border border-accent/30 text-accent flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-[#0c1f3d] border border-ink-border dark:border-ink-dark-border flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#071326]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about websites, e-commerce, tech stack..."
                className="flex-1 px-3.5 py-2.5 rounded-xl text-xs input-ocean bg-canvas-subtle dark:bg-[#0c1f3d] border border-ink-border/70 dark:border-ink-dark-border/70 text-ink-primary dark:text-[#F6FAFD] focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-all shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #1A3D63, #4A7FA7)',
                }}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="pt-2 text-center">
              <span className="text-[10px] font-mono text-ink-muted dark:text-[#63809C]">
                Balaji Projects &bull; NDA Honored &bull; No Spam
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
