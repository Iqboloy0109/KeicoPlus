/**
 * Custom smooth scroll function - starts IMMEDIATELY without any delay
 * Similar to Samsung SDS website behavior - instant response
 * @param targetElement - The element to scroll to
 * @param offset - Additional offset from the top (e.g., navbar height)
 * @param duration - Scroll duration in milliseconds (default: 1500ms for slower movement)
 */
export const smoothScrollTo = (
  targetElement: HTMLElement | null,
  offset: number = 80,
  duration: number = 1500
): void => {
  if (!targetElement) return;

  const startPosition = window.pageYOffset;
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const distance = targetPosition - startPosition;

  // If distance is very small, scroll immediately
  if (Math.abs(distance) < 5) {
    window.scrollTo(0, targetPosition);
    return;
  }

  // Start time IMMEDIATELY - capture RIGHT NOW
  const startTime = performance.now();

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // CRITICAL: Make FIRST scroll IMMEDIATELY - user sees movement INSTANTLY
  // Use larger initial progress (30%) to show clear immediate movement
  const initialProgress = 0.3; // 30% progress immediately - very visible movement
  const initialEasedProgress = easeInOutCubic(initialProgress);
  const initialPosition = startPosition + distance * initialEasedProgress;

  // Scroll IMMEDIATELY - synchronous call, NO waiting, happens RIGHT NOW
  // This MUST happen before any requestAnimationFrame - executed synchronously
  window.scrollTo(0, initialPosition);

  // Animation loop - continues smoothly from initial position
  const animation = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    const currentPosition = startPosition + distance * easedProgress;
    window.scrollTo(0, currentPosition);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  // Start animation loop immediately
  requestAnimationFrame(animation);
};
