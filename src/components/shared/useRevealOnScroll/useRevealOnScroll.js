import { useEffect } from "react";

/**
 * useRevealOnScroll
 * A custom hook to reveal elements with animation when they enter the viewport.
 *
 * @param {React.RefObject} ref - Ref of the container element to observe
 * @param {string} selector - CSS selector of child elements to animate
 * @param {Object} options - Configuration object
 * @param {number} options.delay - Stagger delay in milliseconds between items (default 200ms)
 * @param {string} options.direction - Animation direction: "left", "right", "up", "down" (default "right")
 * @param {number} options.threshold - IntersectionObserver threshold (default 0.2)
 */
export const useRevealOnScroll = (
  ref,
  selector,
  { delay = 200, direction = "right", threshold = 0.2 } = {}
) => {
  useEffect(() => {
    if (!ref.current) return;

    const items = ref.current.querySelectorAll(selector);

    // Apply initial transform based on direction
    items.forEach((item) => {
      item.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      item.style.opacity = 0;
      switch (direction) {
        case "left":
          item.style.transform = "translateX(-50px)";
          break;
        case "right":
          item.style.transform = "translateX(50px)";
          break;
        case "up":
          item.style.transform = "translateY(-50px)";
          break;
        case "down":
          item.style.transform = "translateY(50px)";
          break;
        default:
          item.style.transform = "translateX(50px)";
      }
    });

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        if (entries[0].isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show");
              item.style.opacity = 1;
              item.style.transform = "translateX(0) translateY(0)";
            }, index * delay);
          });

          // Stop observing after animation triggers once
          observerInstance.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [ref, selector, delay, direction, threshold]);
};
