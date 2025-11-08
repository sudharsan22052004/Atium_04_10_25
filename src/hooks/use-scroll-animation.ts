import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  throttle?: number;
}

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  throttle = 100
}: ScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const throttleTimeout = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion, immediately show content without animation
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Clear any existing throttle timeout
        if (throttleTimeout.current) {
          window.clearTimeout(throttleTimeout.current);
        }

        // Throttle the animation updates
        throttleTimeout.current = window.setTimeout(() => {
          const [entry] = entries;
          const isIntersecting = entry.isIntersecting;
          
          if (isIntersecting) {
            setIsVisible(true);
            if (once) {
              setHasAnimated(true);
            }
          } else if (!once) {
            setIsVisible(false);
          }

          // Disconnect observer if element has animated and we only want to animate once
          if (once && isIntersecting) {
            observer.disconnect();
          }
        }, throttle);
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;
    if (currentRef && !hasAnimated && !prefersReducedMotion) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Clear any existing throttle timeout on cleanup
      if (throttleTimeout.current) {
        window.clearTimeout(throttleTimeout.current);
      }
    };
  }, [threshold, rootMargin, once, hasAnimated, throttle, prefersReducedMotion]);

  return { ref, isVisible };
}
