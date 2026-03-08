import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container and adds `is-visible`
 * to `.animate-fade-in` children when they enter the viewport.
 * Also uses a MutationObserver so newly added children are picked up.
 */
export function useFadeIn({ threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const observeNew = (root) => {
      if (root.matches?.('.animate-fade-in:not(.is-visible)')) {
        io.observe(root);
      }
      root.querySelectorAll('.animate-fade-in:not(.is-visible)').forEach((el) => io.observe(el));
    };

    // Observe existing items
    observeNew(container);

    // Watch for newly added nodes (e.g. gallery "show all")
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList?.contains('animate-fade-in')) {
            io.observe(node);
          } else {
            observeNew(node);
          }
        });
      });
    });

    mo.observe(container, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}
