"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { useParallaxEnabled, viewportOnce } from "@/lib/motion";

export default function ParallaxBanner() {
  const ref = useRef(null);
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={ref}
      className="relative h-[50vh] w-full overflow-hidden bg-charcoal lg:h-[60vh]"
    >
      <m.div
        style={parallax ? { y } : undefined}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <Image
          src={IMAGES.pool}
          alt="Infinity pool merging with the horizon at golden hour"
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </m.div>
      <div aria-hidden className="absolute inset-0 bg-charcoal/45" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <m.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display-banner font-display max-w-3xl text-center font-light italic text-cream"
        >
          “Every moment at Ransam is a memory in the making.”
        </m.blockquote>
      </div>
    </section>
  );
}
