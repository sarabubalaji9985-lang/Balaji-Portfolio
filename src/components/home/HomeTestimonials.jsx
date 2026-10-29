import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const HomeTestimonials = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Rajesh K.',
      role: 'Founder & Operations Lead',
      company: 'Logistics & Dispatch SaaS',
      content:
        'Balaji engineered our delivery dispatch system with remarkable technical speed. His ability to connect complex Node.js APIs with real-time dashboards while keeping the UI snappy was exceptional. Shipped right on schedule.',
      rating: 5,
      project: 'Dispatch Management Suite',
    },
    {
      id: '2',
      name: 'Ananya M.',
      role: 'Product Lead',
      company: 'AI ATS Career Platform',
      content:
        'Working with Balaji on our ATS resume intelligence tool was smooth and predictable. He translated intricate scoring logic into an intuitive, responsive React experience. Outstanding work ethic and clear communication.',
      rating: 5,
      project: 'Resume Job Fit Pro',
    },
    {
      id: '3',
      name: 'Vikram S.',
      role: 'Business Director',
      company: 'E-Commerce Enterprise',
      content:
        'Balaji revamped our entire digital storefront with modern React and Tailwind. The mobile checkout flow is silky smooth, and page speed improved noticeably. Genuine technical responsibility and attention to detail.',
      rating: 5,
      project: 'Sreeka Commercial Web',
    },
  ];

  // Mobile Auto-sliding Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // 2-second auto sliding timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/20 border-b border-ink-border/80 dark:border-ink-dark-border/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-accent-deep dark:text-accent">
              Social Proof &amp; Trust
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-ink-primary dark:text-ink-dark-primary tracking-tighter-editorial">
            Client &amp; Collaborator{' '}
            <span className="text-ocean-shimmer italic font-normal">Feedback</span>
          </h2>
          <p className="text-xs sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light">
            Real feedback from startup founders and teams who relied on my software delivery.
          </p>
        </div>

        {/* ── 1. DESKTOP GRID VIEW (Hidden on Mobile) ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-canvas-dark-surface shadow-subtle hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author & Project Badge */}
              <div className="pt-5 mt-6 border-t border-ink-border/50 dark:border-ink-dark-border/50 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                    {item.name}
                  </h4>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted font-mono">
                    {item.role} • {item.company}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-accent/10 text-accent font-medium">
                  {item.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── 2. MOBILE AUTO-SLIDING CAROUSEL (2s Interval, Side-by-Side) ── */}
        <div className="block md:hidden">
          {/* Slider Viewport */}
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="w-full shrink-0">
                  <div className="p-5 rounded-2xl border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-canvas-dark-surface shadow-subtle min-h-[260px] flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Top Bar: 5-Stars + Project Pill */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-accent/10 text-accent font-semibold truncate max-w-[140px]">
                          {item.project}
                        </span>
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed italic line-clamp-5">
                        &ldquo;{item.content}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="pt-3.5 mt-3 border-t border-ink-border/50 dark:border-ink-dark-border/50 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-ink-primary dark:text-ink-dark-primary">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-ink-muted dark:text-ink-dark-muted font-mono truncate max-w-[190px]">
                          {item.role} • {item.company}
                        </p>
                      </div>

                      {/* Auto indicator pill */}
                      <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Controls: Prev/Next Buttons + 2s Slide Indicators */}
          <div className="flex items-center justify-between pt-4 px-1">
            {/* Step Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex === i
                      ? 'w-6 bg-accent shadow-xs'
                      : 'w-2 bg-ink-border dark:bg-[#1A3D63]'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <span className="text-[10px] font-mono text-ink-muted ml-2">
                0{currentIndex + 1} / 0{testimonials.length} (2s auto)
              </span>
            </div>

            {/* Left / Right Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#10243E] text-ink-secondary dark:text-ink-dark-secondary hover:text-accent focus:outline-none shadow-xs"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg border border-ink-border/80 dark:border-ink-dark-border/80 bg-white dark:bg-[#10243E] text-ink-secondary dark:text-ink-dark-secondary hover:text-accent focus:outline-none shadow-xs"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
