import { useEffect } from "react";

// A custom hook to reveal elements with animation when scrolled into view
export const useRevealOnScroll = (ref, selector, delay = 200) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the section is visible in viewport
        if (entries[0].isIntersecting) {
          const items = ref.current.querySelectorAll(selector);

          // Add "show" class to each item with staggered delay
          items.forEach((item, index) => {
            setTimeout(() => item.classList.add("show"), index * delay);
          });

          // Disconnect observer after animation is triggered once
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(ref.current);

    // Cleanup on component unmount
    return () => observer.disconnect();
  }, [ref, selector, delay]);
};
