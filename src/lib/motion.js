"use client";

import { useEffect, useState } from "react";

/* ----------------------------------------------------------------------------
   Shared animation variants
---------------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

// Parent container that staggers its children.
export const staggerParent = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Standard viewport config for whileInView reveals.
export const viewportOnce = { once: true, amount: 0.3 };

/* ----------------------------------------------------------------------------
   Hooks
---------------------------------------------------------------------------- */

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/**
 * Parallax should only run on larger viewports where it reads as intentional,
 * and never when the user has requested reduced motion.
 */
export function useParallaxEnabled() {
  const reduced = usePrefersReducedMotion();
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setWide(mq.matches);
    const handler = (e) => setWide(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return wide && !reduced;
}
