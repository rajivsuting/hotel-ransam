"use client";

import { useRef, useState } from "react";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

// Counts from 0 → `value` once it scrolls into view.
export default function Counter({ value, duration = 1.4 }) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const reduced = usePrefersReducedMotion();

  const run = () => {
    if (started.current) return;
    started.current = true;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      // easeOut
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <m.span
      onViewportEnter={run}
      viewport={{ once: true, amount: 0.6 }}
      className="tabular-nums"
    >
      {display}
    </m.span>
  );
}
