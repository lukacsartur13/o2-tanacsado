"use client";

import { useEffect } from "react";

/**
 * Finom megjelenési animáció a `.reveal` elemekre. Csak azokat rejti el,
 * amelyek betöltéskor nincsenek a képernyőn; JS nélkül minden látható marad.
 */
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    for (const el of els) {
      const r = el.getBoundingClientRect();
      const visible = r.top < window.innerHeight && r.bottom > 0;
      if (!visible) el.classList.add("reveal-pending");
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);
  return null;
}
