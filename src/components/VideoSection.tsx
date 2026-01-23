import { useCallback, useEffect, useRef, useState } from "react";

type Platform = 'youtube' | 'instagram' | 'linkedin';

interface VideoData {
  title: string;
  url: string; // Full URL for any platform
  thumbnail?: string; // Optional custom thumbnail
}

// Helper function to detect platform from URL
const detectPlatform = (url: string): Platform => {
  const normalizedUrl = url.trim().toLowerCase();
  
  if (normalizedUrl.includes('youtube.com') || normalizedUrl.includes('youtu.be')) {
    return 'youtube';
  } else if (normalizedUrl.includes('instagram.com')) {
    return 'instagram';
  } else if (normalizedUrl.includes('linkedin.com')) {
    return 'linkedin';
  }
  
  return 'youtube'; // Default fallback
};

// Helper function to extract YouTube video ID from URL
const extractYouTubeId = (url: string): string => {
  const normalizedUrl = url.trim();
  
  // If it's already just an ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(normalizedUrl)) {
    return normalizedUrl;
  }

  // Try to extract from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/.*[?&]v=([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = normalizedUrl.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return '';
};

// Helper function to extract Instagram post/reel ID from URL
const extractInstagramId = (url: string): string => {
  const normalizedUrl = url.trim();
  
  // Extract post ID from patterns like /p/ABC123/ or /reel/ABC123/
  const patterns = [
    /instagram\.com\/(?:p|reel)\/([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = normalizedUrl.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return '';
};

// Helper function to extract LinkedIn post ID from URL
const extractLinkedInId = (url: string): string => {
  const normalizedUrl = url.trim();
  
  // Extract activity ID from URN format
  const urnMatch = normalizedUrl.match(/urn:li:activity:(\d+)/);
  if (urnMatch && urnMatch[1]) {
    return urnMatch[1];
  }
  
  // Try to extract from URL path
  const pathMatch = normalizedUrl.match(/linkedin\.com\/.*\/activity-(\d+)/);
  if (pathMatch && pathMatch[1]) {
    return pathMatch[1];
  }

  return '';
};

// Video data - supports YouTube, Instagram, and LinkedIn
const videos: VideoData[] = [
  {
    title: "ATIUM Platform Overview",
    url: "https://youtu.be/jCcOQ493x1o?si=iwufV4W8biwyV5-Q",
  },
  {
    title: "Features Demonstration",
    url: "https://www.instagram.com/p/ChRHHzML2xj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Customer Success Story",
    url: "https://youtube.com/shorts/6zO0ZTatGMI?si=W_mdp8jXUE8APz8B",
  },
  {
    title: "Getting Started Guide",
    url: "https://youtube.com/shorts/6US0vJjPr0Y?si=_202HglcXygMGjQO",
  },
  {
    title: "Advanced Features",
    url: "https://www.instagram.com/reel/DGpKz0oMERk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Advanced Features",
    url: "https://www.instagram.com/reel/DCmB4BZACVh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Advanced Features",
    url: "https://www.instagram.com/p/DFraMc6TiTx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Advanced Features",
    url: "https://www.instagram.com/p/C0wHiWhoLkN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Advanced Features",
    url: "https://www.instagram.com/p/Ci1rc2KLzDd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Advanced Features",
    url: "https://www.instagram.com/p/CUZ9ylyJ9_t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Advanced Features",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7292118299796979715",
  },
  {
    title: "Advanced Features",
    url: "https://www.instagram.com/p/DCUOC7jz-Xy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

// Component to render video embed based on platform
const VideoEmbed = ({ video, index }: { video: VideoData; index: number }) => {
  const platform = detectPlatform(video.url);

  if (platform === 'youtube') {
    const videoId = extractYouTubeId(video.url);
    if (!videoId) return null;
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
    
    return (
      <div className="relative w-full aspect-video bg-black/10">
        <iframe
          src={embedUrl}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ border: 'none' }}
        />
      </div>
    );
  }

  if (platform === 'instagram') {
    const postId = extractInstagramId(video.url);
    if (!postId) {
      return (
        <div className="relative w-full aspect-video bg-black/10 flex items-center justify-center">
          <a
            href={video.url.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-roboto text-center px-4"
          >
            View on Instagram
          </a>
        </div>
      );
    }

    // Clean URL for Instagram embed
    const cleanUrl = video.url.split('?')[0].trim();
    const isReel = cleanUrl.includes('/reel/');
    const embedUrl = isReel 
      ? `https://www.instagram.com/reel/${postId}/embed/`
      : `https://www.instagram.com/p/${postId}/embed/`;

    return (
      <div className="relative w-full aspect-video bg-black/10">
        <iframe
          src={`${embedUrl}?cr=1&v=14&wp=1080&rd=${encodeURIComponent(window.location.href)}&rp=%2F`}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          style={{ border: 'none' }}
          scrolling="no"
        />
      </div>
    );
  }

  if (platform === 'linkedin') {
    // LinkedIn embed using iframe
    const activityId = extractLinkedInId(video.url);
    const cleanUrl = video.url.trim();
    
    // If we can't extract ID, show a link
    if (!activityId) {
      return (
        <div className="relative w-full aspect-video bg-black/10 flex items-center justify-center">
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-roboto text-center px-4"
          >
            View on LinkedIn
          </a>
        </div>
      );
    }

    // LinkedIn embed URL format
    const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`;

    return (
      <div className="relative w-full aspect-video bg-black/10">
        <iframe
          src={embedUrl}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          style={{ border: 'none' }}
          scrolling="no"
        />
      </div>
    );
  }

  return null;
};

const VideoSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1.5; // pixels per frame - slower than testimonials for videos
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
    const maxScroll = (videos.length - numVisible) * itemWidth;
    
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
      const maxScroll = (videos.length - numVisible) * itemWidth;
      
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

  // Helper function to calculate card width
  const calculateCardWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.video-card');
    if (items.length === 0) return;

    const firstCard = items[0] as HTMLElement;
    cardWidth.current = firstCard.offsetWidth;
  }, []);

  const scroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || isPaused) {
      animationFrameRef.current = undefined;
      return;
    }

    const gap = window.innerWidth >= 1024 ? 32 : window.innerWidth >= 768 ? 24 : 16;
    const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const itemWidth = cardWidth.current + gap;
    const maxScroll = (videos.length - numVisible) * itemWidth;

    setScrollPosition(prev => {
      const newPosition = prev + scrollSpeed;
      
      // If we've reached the end, reset to start
      if (newPosition >= maxScroll) {
        return 0;
      }
      
      return newPosition;
    });

    // Continue animation loop only if not paused and container still exists
    if (!isPaused && container) {
      animationFrameRef.current = requestAnimationFrame(scroll);
    } else {
      animationFrameRef.current = undefined;
    }
  }, [isPaused]);

  // Start/stop auto-scroll
  useEffect(() => {
    // Cancel any existing animation frame before starting a new one
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }

    if (!isPaused) {
      animationFrameRef.current = requestAnimationFrame(scroll);
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = undefined;
      }
    };
  }, [isPaused, scroll]);

  // Calculate card width on mount and window resize
  useEffect(() => {
    calculateCardWidth();
    setScrollPosition(0);

    // Handle window resize
    const handleResize = () => {
      calculateCardWidth();
      // Reset scroll position to prevent out-of-bounds after resize
      setScrollPosition(prev => {
        const gap = window.innerWidth >= 1024 ? 32 : window.innerWidth >= 768 ? 24 : 16;
        const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const itemWidth = cardWidth.current + gap;
        const maxScroll = (videos.length - numVisible) * itemWidth;
        return Math.min(prev, maxScroll);
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateCardWidth]);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-bold font-lato mb-2 text-foreground">
                Watch Our Videos
              </h2>
              <p className="text-lg font-roboto text-muted-foreground">
                Discover how ATIUM transforms sports performance management
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
              Showing video {Math.floor(scrollPosition / (cardWidth.current + 32)) + 1} of {videos.length}.
              Use arrow keys or H and L keys to navigate. Space or K to pause/resume auto-scroll. Home and End keys to jump to start or end.
            </div>

            {/* Videos Container with Navigation */}
            <div className="relative overflow-hidden">
              
              {/* Videos Scroll Container */}
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
                aria-label="Videos carousel"
              >
                {videos.map((video, index) => {
                  const platform = detectPlatform(video.url);
                  
                  return (
                    <div
                      key={index}
                      className="video-card flex-none w-[280px] sm:w-[320px] md:w-[400px]"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Video ${index + 1} of ${videos.length}: ${video.title}`}
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                    >
                      <div className="glass-card rounded-xl sm:rounded-2xl h-full flex flex-col bg-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                        {/* Video Embed */}
                        <VideoEmbed video={video} index={index} />
                        
                        {/* Video Title and Platform Badge */}
                        <div className="p-4 sm:p-5 md:p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-roboto px-2 py-1 rounded bg-primary/10 text-primary capitalize">
                              {platform}
                            </span>
                          </div>
                          <h3 className="font-lato font-semibold text-sm sm:text-base text-foreground line-clamp-2">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

