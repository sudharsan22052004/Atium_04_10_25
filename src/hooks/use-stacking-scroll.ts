import { useEffect, useRef, useCallback } from 'react';

interface UseStackingScrollOptions {
  /** Maximum blur amount in pixels */
  maxBlur?: number;
  /** Maximum opacity reduction (0 to 1, where 0.15 means opacity goes down to 0.85) */
  maxOpacityReduction?: number;
  /** Distance in pixels over which the blur effect gradually increases */
  blurDistance?: number;
  /** Whether to enable the blur effect */
  enableBlur?: boolean;
}

/**
 * Hook to manage stacking scroll effect with gradual blur on overlapped sections
 * Applies progressive blur and opacity based on how much the next section overlaps
 */
export function useStackingScroll(options: UseStackingScrollOptions = {}) {
  const {
    maxBlur = 6,
    maxOpacityReduction = 0.2,
    blurDistance = 300,
    enableBlur = true
  } = options;

  const containerRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);

  const updateStackedState = useCallback(() => {
    if (!containerRef.current || !enableBlur) return;

    const sections = sectionsRef.current;
    if (sections.length === 0) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Reset all blur effects if reduced motion is preferred
      sections.forEach(section => {
        section.style.filter = '';
        section.style.opacity = '';
      });
      return;
    }

    sections.forEach((section, index) => {
      if (index === sections.length - 1) {
        // Last section never gets blurred
        section.style.filter = '';
        section.style.opacity = '';
        return;
      }

      const nextSection = sections[index + 1];
      if (!nextSection) return;

      const sectionRect = section.getBoundingClientRect();
      const nextSectionRect = nextSection.getBoundingClientRect();

      // Calculate how much the next section has scrolled into view
      // When nextSectionRect.top is at viewport top (0), it's fully overlapping
      // When nextSectionRect.top is at blurDistance, blur starts
      const overlapAmount = Math.max(0, blurDistance - nextSectionRect.top);

      // Only apply blur if the current section is at or above the viewport top
      // and the next section is starting to overlap
      if (sectionRect.top <= 0 && nextSectionRect.top < blurDistance) {
        // Calculate progress from 0 to 1 based on overlap
        const progress = Math.min(1, overlapAmount / blurDistance);

        // Apply easing for smoother feel (ease-out curve)
        const easedProgress = 1 - Math.pow(1 - progress, 2);

        // Calculate blur and opacity values
        const blurValue = easedProgress * maxBlur;
        const opacityValue = 1 - (easedProgress * maxOpacityReduction);

        // Apply styles directly for smooth real-time updates
        section.style.filter = `blur(${blurValue.toFixed(2)}px)`;
        section.style.opacity = opacityValue.toFixed(3);
      } else {
        // Reset styles when not overlapping
        section.style.filter = '';
        section.style.opacity = '';
      }
    });
  }, [maxBlur, maxOpacityReduction, blurDistance, enableBlur]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(updateStackedState);
  }, [updateStackedState]);

  useEffect(() => {
    if (!enableBlur) return;

    // Find all stacking sections within the container
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll('.stacking-section')) as HTMLElement[];
    sectionsRef.current = sections;

    // Initial update
    updateStackedState();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      // Clean up styles
      sectionsRef.current.forEach(section => {
        section.style.filter = '';
        section.style.opacity = '';
      });
    };
  }, [handleScroll, updateStackedState, enableBlur]);

  return { containerRef };
}
