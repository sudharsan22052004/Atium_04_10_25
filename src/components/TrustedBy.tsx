import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const customers = [
  {
    name: "Elite Sports Club",
    description: "Professional Sports",
    image: "./customers/1.png"
  },
  {
    name: "Champions Academy", 
    description: "Training Institute",
    image: "./customers/2.png"
  },
  {
    name: "Victory Athletics",
    description: "Athletic Performance", 
    image: "./customers/3.png"
  },
  {
    name: "Peak Performance",
    description: "Sports Medicine",
    image: "./customers/4.png"
  },
  {
    name: "Premier League FC",
    description: "Football Club",
    image: "./customers/5.png"
  },
  {
    name: "Olympic Training",
    description: "National Team",
    image: "./customers/6.png"
  },
  {
    name: "Global Sports Inc",
    description: "Multi-Sport Organization",
    image: "./customers/7.png"
  }
];

const TrustedBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1.0;
  const animationFrameRef = useRef<number>();
  const cardWidth = useRef<number>(0);
  const touchStart = useRef<number>(0);
  const touchPosition = useRef<number>(0);
  const [isTouching, setIsTouching] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        setIsPaused(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    const container = scrollRef.current;
    if (!container) return;

    const gap = window.innerWidth >= 1024 ? 32 : window.innerWidth >= 768 ? 24 : 16;
    const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const itemWidth = cardWidth.current + gap;
    const maxScroll = (customers.length - numVisible) * itemWidth;
    
    setScrollPosition(prev => {
      let newPosition = direction === 'next' 
        ? prev + itemWidth 
        : prev - itemWidth;
      
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > maxScroll) {
        newPosition = maxScroll;
      }
      
      return newPosition;
    });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'h') {
      e.preventDefault();
      handleNavigation('prev');
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      e.preventDefault();
      handleNavigation('next');
    } else if (e.key === 'Space' || e.key === 'k') {
      e.preventDefault();
      setIsPaused(prev => !prev);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setScrollPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      const container = scrollRef.current;
      if (container) {
        setScrollPosition(container.scrollWidth - container.clientWidth);
      }
    }
  }, [handleNavigation]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchPosition.current = scrollPosition;
    setIsTouching(true);
    setIsPaused(true);
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  }, [scrollPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isTouching) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart.current - currentTouch;
    const container = scrollRef.current;
    
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      let newPosition = touchPosition.current + diff;
      
      if (newPosition < 0) {
        newPosition = newPosition / 3;
      } else if (newPosition > maxScroll) {
        newPosition = maxScroll + (newPosition - maxScroll) / 3;
      }
      
      setScrollPosition(newPosition);
    }
  }, [isTouching]);

  const handleTouchEnd = useCallback(() => {
    const container = scrollRef.current;
    if (container) {
      const gap = window.innerWidth >= 1024 ? 32 : window.innerWidth >= 768 ? 24 : 16;
      const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const itemWidth = cardWidth.current + gap;
      const maxScroll = (customers.length - numVisible) * itemWidth;
      
      if (scrollPosition < 0) {
        setScrollPosition(0);
      } else if (scrollPosition > maxScroll) {
        setScrollPosition(maxScroll);
      }
    }
    
    setIsTouching(false);
    setIsPaused(false);
  }, [scrollPosition]);

  const scroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    const gap = window.innerWidth >= 1024 ? 32 : window.innerWidth >= 768 ? 24 : 16;
    const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const itemWidth = cardWidth.current + gap;
    const maxScroll = (customers.length - numVisible) * itemWidth;

    setScrollPosition(prev => {
      const newPosition = prev + scrollSpeed;
      
      if (newPosition >= maxScroll) {
        return 0;
      }
      
      return newPosition;
    });

    animationFrameRef.current = requestAnimationFrame(scroll);
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused) {
      animationFrameRef.current = requestAnimationFrame(scroll);
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, scroll]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.customer-card');
    if (items.length === 0) return;

    const firstCard = items[0] as HTMLElement;
    cardWidth.current = firstCard.offsetWidth;

    setScrollPosition(0);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-bold font-lato mb-2 text-foreground uppercase tracking-wide">
              TRUSTED BY ELITE ORGANIZATIONS
            </h2>
          </div>

          {/* Accessibility Announcements */}
          <div 
            className="sr-only" 
            role="status" 
            aria-live="polite"
            aria-atomic="true"
          >
            {isPaused ? "Auto-scroll paused" : "Auto-scroll active"} - 
            Showing customer {Math.floor(scrollPosition / (cardWidth.current + 32)) + 1} of {customers.length}.
            Use arrow keys or H and L keys to navigate. Space or K to pause/resume auto-scroll. Home and End keys to jump to start or end.
          </div>

          {/* Customers Container with Navigation */}
          <div className="relative overflow-hidden">
            {/* Navigation Buttons */}
            <button
              onClick={() => handleNavigation('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 p-1.5 md:p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background transition-colors hidden md:block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Previous customer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>

            <button
              onClick={() => handleNavigation('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 p-1.5 md:p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background transition-colors hidden md:block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Next customer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            {/* Customers Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 md:px-0 transition-all duration-300 ease-in-out"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                willChange: 'transform',
                transform: `translate3d(${-scrollPosition}px, 0, 0)`,
                transition: isTouching ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased',
                perspective: '1000px',
                WebkitPerspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Trusted customers carousel"
            >
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="customer-card flex-none w-[280px] sm:w-[320px] md:w-[350px]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Customer ${index + 1} of ${customers.length}`}
                  aria-describedby={`customer-${index}-name customer-${index}-desc`}
                  tabIndex={0}
                  onKeyDown={handleKeyDown}
                >
                  <div className="glass-card p-8 rounded-xl flex flex-col items-center justify-center min-h-[200px] bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={cn(
                      "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center mb-4",
                      "bg-white"
                    )}>
                      <img 
                        src={customer.image}
                        alt={customer.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 id={`customer-${index}-name`} className="text-lg font-semibold font-lato text-foreground text-center">
                      {customer.name}
                    </h3>
                    <p id={`customer-${index}-desc`} className="text-sm font-roboto text-muted-foreground text-center mt-2">
                      {customer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Text */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-base font-roboto text-muted-foreground">
              Join thousands of elite athletes, coaches, and sports organizations worldwide who trust ATIUM to optimize performance and achieve championship results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
