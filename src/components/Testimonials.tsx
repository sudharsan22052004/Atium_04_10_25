import { useCallback, useEffect, useRef, useState } from "react";

interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  organization: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    quote: "ATIUM's platform is easy for users to understand and comply with. It helps all stakeholders stay connected. The dashboards are simple to interpret and make decisions quickly. Availability of regional languages helps coaches and athletes to communicate easily.",
    author: "Dr. Saju Joseph",
    title: "Ex - High Performance Director",
    organization: "Sports Authority Of India",
    image: "./testimonials/saju-joseph.png"
  },
  {
    quote: "When selecting athletes for national team, with the wellness and internal load dashboard, we can track how they train and see which athlete has made how much progress. ATIUM has helped coaches better understand their athlete's response to the training load.",
    author: "Maxime",
    title: "Director Of Performance And Coach",
    organization: "FFESSM France",
    image: "./testimonials/maxime.png"
  },
  {
    quote: "With ATIUM, I can monitor my athletes' wellness daily and track their training through intuitive dashboards. Weekly reports ensure accountability, while the competition dashboard helps athletes visualize their progress and stay focused on their goals.",
    author: "Hugues Brilhaut",
    title: "Head Coach PF RENNES",
    organization: "FFESSM",
    image: "./testimonials/hugues.png"
  },
  {
    quote: "Load management involves strategically reducing training or competition to enhance athlete recovery, performance, and long-term health. At Haryana Steelers, ATIUM helps us monitor and plan load during pre and post-season, leading to better performance and fewer stress-related injuries.",
    author: "Manish chetri",
    title: "Head physio",
    organization: "Haryana Steelers",
    image: "./testimonials/manish.png"
  },
  {
    quote: "With the help of ATIUM, we have saved time by having the data automatically calculated and represented. This has given us important metrics that has addressed our queries on external load and internal load",
    author: "Dinesh Sathashivam",
    title: "S&C Coach",
    organization: "Haryana Steelers",
    image: "./testimonials/dinesh.png"
  },
  {
    quote: "I use ATIUM app thrice a day for entering my training data. It helps me a lot to see recovery as per sports science standards. Glad to have it in my journey.",
    author: "Mr. Meet Tadhani",
    title: "Gold medal in 100m (T-13 Category) 21st National Para Athletics Championship 2022-23,",
    organization: "Pune",
    image: "./testimonials/meet.png"
  },
  {
    quote: "ATIUM helped me to track important training details such as daily sleep, fatigue, muscle soreness, and motivation level. This helped me to be better prepared for training and recovery in my daily schedule",
    author: "Lalchhanhimi",
    title: "Gold medal 76Kg Category, Senior National Weightlifting Championship held at Nagarcoil, 2024",
    organization: "Tamil Nadu",
    image: "./testimonials/Lalchhanhimi.png"
  },
  {
    quote: "Through ATIUM I am able to compare my daily routine of sleep and recovery. Through Atium I can track menstrual cycle and symptoms, which helps me to be self aware. it is also very helpful in training as the coaches are aware in advance of our mental and physical mood before our training.",
    author: "Vidushi Sharma",
    title: "Bronze medal 55 Kg Category, Junior National Weightlifting Championship held at Nagarcoil",
    organization: "Tamilnadu",
    image: "./testimonials/vidushi.png"
  },
  {
    quote: "Atium helps me to check my training plan everyday which is given by my coaches. The app is simple and good to use.",
    author: "Akshata Kamati",
    title: "Gold medal in 87Kg Category, Senior National Weightlifting Championship held at Nagarcoil",
    organization: "Tamilnadu",
    image: "./testimonials/akshata.png"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1.0; // pixels per frame - reduced for smoother scrolling
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
    const maxScroll = (testimonials.length - numVisible) * itemWidth;
    
    setScrollPosition(prev => {
      let newPosition = direction === 'next' 
        ? prev + itemWidth 
        : prev - itemWidth;
      
      // Handle boundaries
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
    // Add haptic feedback if available
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
      
      // Add resistance at edges
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
      const maxScroll = (testimonials.length - numVisible) * itemWidth;
      
      // Handle boundaries
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
    const maxScroll = (testimonials.length - numVisible) * itemWidth;

    setScrollPosition(prev => {
      const newPosition = prev + scrollSpeed;
      
      // If we've reached the end, reset to start
      if (newPosition >= maxScroll) {
        return 0;
      }
      
      return newPosition;
    });

    animationFrameRef.current = requestAnimationFrame(scroll);
  }, [isPaused]);

  // Start/stop auto-scroll
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


  // Calculate card width and set up scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.testimonial-card');
    if (items.length === 0) return;

    // Calculate card width
    const firstCard = items[0] as HTMLElement;
    cardWidth.current = firstCard.offsetWidth;

    // Initialize scroll position to show first item
    setScrollPosition(0);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-bold font-lato mb-2 text-foreground">
                What Our Users Say
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Trusted by leading sports organizations worldwide
              </p>
            </div>

            {/* Accessibility Announcements */}
              <div 
                className="sr-only" 
                role="status" 
                aria-live="polite"
                aria-atomic="true"
              >
                {isPaused ? "Auto-scroll paused" : "Auto-scroll active"} - 
                Showing testimonial {Math.floor(scrollPosition / (cardWidth.current + 32)) + 1} of {testimonials.length}.
                Use arrow keys or H and L keys to navigate. Space or K to pause/resume auto-scroll. Home and End keys to jump to start or end.
              </div>

            {/* Testimonials Container with Navigation */}
            <div className="relative overflow-hidden">
              
              {/* Testimonials Scroll Container */}
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
                aria-label="Testimonials carousel"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="testimonial-card flex-none w-[280px] sm:w-[320px] md:w-[350px]"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                    aria-describedby={`testimonial-${index}-quote testimonial-${index}-author`}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                  >
                    <div className="glass-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl h-full flex flex-col bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Quote */}
                      <p id={`testimonial-${index}-quote`} className="text-foreground/80 font-roboto text-sm sm:text-base italic leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center mt-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/5 mr-3 sm:mr-4 overflow-hidden shrink-0">
                          <div className="relative w-full h-full">
                            <div 
                              className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"
                              style={{ 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'blur(8px)'
                              }}
                            />
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.author} - ${testimonial.title}`}
                              loading="lazy"
                              decoding="async"
                              width={48}
                              height={48}
                              fetchPriority="low"
                              className="relative w-full h-full rounded-full object-cover transition-all duration-300 scale-100 hover:scale-105"
                              onLoad={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.opacity = '1';
                                img.style.transform = 'scale(1)';
                              }}
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"%3E%3C/path%3E%3Ccircle cx="12" cy="7" r="4"%3E%3C/circle%3E%3C/svg%3E';
                                img.style.opacity = '0.5';
                                img.style.transform = 'scale(1)';
                                img.style.padding = '0.5rem';
                              }}
                              style={{ opacity: 0, transform: 'scale(0.95)' }}
                            />
                          </div>
                        </div>
                        <div>
                          <h4 id={`testimonial-${index}-author`} className="font-lato font-bold text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/70">
                            {testimonial.author}
                          </h4>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-foreground/70 font-roboto">
                            <span>{testimonial.title}</span>
                            <span>|</span>
                            <span className="text-primary/90">{testimonial.organization}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;