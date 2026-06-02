"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { viewportOnce, useParallaxEnabled } from "@/lib/motion";
import Counter from "./Counter";

const EASE = [0.22, 1, 0.36, 1];
const PHILOSOPHY_VIDEO = "/4.mp4";
const PHILOSOPHY_PRINT = "/what-we-believe-img.jpg";

const lineParent = { show: { transition: { staggerChildren: 0.15 } } };
const lineChild = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

const STATS = [
  { n: 7, label: "Room Types" },
  { n: 10, label: "Facilities" },
  { n: 3, label: "Spa Rituals" },
  { n: 12, label: "Noon Check-in" },
];

export default function Philosophy() {
  const clusterRef = useRef(null);
  const videoRef = useRef(null);
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: clusterRef,
    offset: ["start end", "end start"],
  });
  const mainY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const accentY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    const onGesture = () => tryPlay();
    window.addEventListener("pointerdown", onGesture, { once: true });
    window.addEventListener("scroll", onGesture, { once: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("scroll", onGesture);
    };
  }, []);

  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-ransam-stone px-6 py-24 sm:px-10 lg:py-36"
    >
      {/* Ghost watermark numeral */}
      <m.span
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: EASE }}
        className="font-playfair pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center text-[40vw] font-bold leading-none text-ransam-gold/[0.08] lg:text-[22vw]"
      >
        01
      </m.span>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        {/* CENTER BLOCK */}
        <div className="lg:w-[47%]">
          <m.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-cormorant-sc inline-flex items-center rounded-full border border-ransam-gold px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.28em] text-ransam-gold"
          >
            What We Believe
          </m.span>

          <m.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={lineParent}
            className="font-playfair mt-7 leading-[0.95] text-ransam-ink"
          >
            <span className="block overflow-hidden">
              <m.span
                variants={lineChild}
                className="block text-[clamp(2.2rem,6vw,4rem)] italic lg:text-[5vw]"
              >
                Unhurried.
              </m.span>
            </span>
            <span className="block overflow-hidden">
              <m.span
                variants={lineChild}
                className="text-outline-ink block text-[clamp(2.2rem,6vw,4rem)] font-semibold lg:text-[5vw]"
              >
                Unscripted.
              </m.span>
            </span>
            <span className="block overflow-hidden">
              <m.span
                variants={lineChild}
                className="block text-[clamp(1.7rem,4.2vw,3rem)] italic text-ransam-gold lg:text-[3.5vw]"
              >
                Unmistakably Ours.
              </m.span>
            </span>
          </m.h2>

          <m.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="mt-8 block h-px w-[60px] origin-left bg-ransam-gold"
          />

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="mt-8 max-w-[480px] space-y-5 font-outfit text-[1rem] font-light leading-[1.9] text-ransam-ink/75"
          >
            <p>
              Hotel Ransam is Aizawl&apos;s first luxury resort — a place
              tailored entirely to your wellbeing. We pair the ease of home with
              the quiet sophistication of a contemporary stay.
            </p>
            <p>
              From a rooftop that meets the sky to rituals drawn from across the
              East, every corner is composed by hand, and every hour is yours to
              keep.
            </p>
          </m.div>

          <m.blockquote
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="font-dmserif mt-10 max-w-[520px] border-l-[3px] border-ransam-gold pl-6 text-[1.4rem] italic leading-snug text-ransam-clay"
          >
            We didn&apos;t build a hotel. We found a place where time forgets
            itself.
          </m.blockquote>

          <div className="mt-12 grid grid-cols-2 gap-y-8 sm:flex sm:flex-wrap sm:items-end sm:gap-x-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-cormorant-sc text-[2rem] leading-none text-ransam-gold">
                  <Counter value={s.n} />
                </span>
                <span className="font-cormorant-sc mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-ransam-clay">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INSET — layered editorial composition */}
        <div className="lg:w-[48%]">
          <div
            ref={clusterRef}
            className="relative mx-auto w-[300px] sm:w-[430px]"
          >
            {/* warm tint depth block, offset top-right */}
            <m.div
              aria-hidden
              style={parallax ? { y: accentY } : undefined}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              className="absolute -right-7 -top-8 h-[250px] w-[240px] bg-ransam-gold/15 sm:h-[330px] sm:w-[310px]"
            />

            {/* thin offset frame, cradling bottom-left */}
            <m.div
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              className="absolute -bottom-5 -left-5 h-full w-full border border-ransam-gold/40"
            />

            {/* main portrait (parallax) */}
            <div className="relative h-[400px] w-full overflow-hidden sm:h-[540px]">
              <m.div
                style={parallax ? { y: mainY } : undefined}
                initial={{ opacity: 0, scale: 1.14 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 1.1, ease: EASE }}
                className="absolute inset-0 -top-8 h-[calc(100%+4rem)]"
              >
                <video
                  ref={videoRef}
                  src={PHILOSOPHY_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="Hotel Ransam — suites of stone, timber and light"
                  className="h-full w-full object-cover"
                />
              </m.div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ransam-gold/25"
              />
            </div>

            {/* engraved nameplate, bottom-right */}
            <m.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
              className="absolute bottom-5 right-5 z-10 bg-ransam-dusk px-5 py-3 shadow-xl"
            >
              <span className="font-cormorant-sc block text-[0.62rem] uppercase tracking-[0.3em] text-ransam-gold">
                Hotel Ransam
              </span>
              <span className="font-cormorant-sc mt-1 block text-[0.55rem] uppercase tracking-[0.2em] text-ransam-stone/55">
                Aizawl · Mizoram
              </span>
            </m.div>

            {/* secondary print, tilted, overlapping bottom-left */}
            <m.div
              initial={{ opacity: 0, x: 24, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: -4 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
              className="absolute -bottom-16 -left-12 w-[220px] bg-ransam-white p-2.5 shadow-2xl sm:-left-16 sm:w-[310px]"
            >
              <div className="relative h-[135px] w-full sm:h-[180px]">
                <Image
                  src={PHILOSOPHY_PRINT}
                  alt="Hotel Ransam — the landscape and setting around the resort"
                  fill
                  sizes="(max-width: 640px) 220px, 310px"
                  className="object-cover"
                />
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
