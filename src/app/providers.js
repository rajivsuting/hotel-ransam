"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import ReelsProvider from "@/components/ReelsProvider";

/**
 * LazyMotion with the lightweight `domAnimation` feature bundle keeps the
 * Framer Motion runtime small (only animations + whileInView + exit are
 * loaded). All motion components in the app use `m.*` so they resolve against
 * this provider.
 *
 * ReelsProvider exposes the shared IG-style reels player so both the hero CTA
 * and the mobile tab bar can open it.
 */
export default function Providers({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <ReelsProvider>{children}</ReelsProvider>
    </LazyMotion>
  );
}
