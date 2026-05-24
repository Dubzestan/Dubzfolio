
// ===== SCROLL ANIMATIONS =====
/**
 * Uses IntersectionObserver to add .visible class
 * to elements with [data-animate] when they enter the viewport.
 */
const animatedElements = document.querySelectorAll('[data-animate]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after first trigger so animation runs once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );
  animatedElements.forEach((el) => observer.observe(el));
} else {
  // Fallback for browsers without IntersectionObserver
  animatedElements.forEach((el) => el.classList.add('visible'));
}