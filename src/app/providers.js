"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * LazyMotion with the lightweight `domAnimation` feature bundle keeps the
 * Framer Motion runtime small (only animations + whileInView + exit are
 * loaded). All motion components in the app use `m.*` so they resolve against
 * this provider.
 */
export default function Providers({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
