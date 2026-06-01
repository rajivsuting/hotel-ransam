"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const EASE = [0.22, 1, 0.36, 1];

const VENUES = [
  {
    name: "The Rooftop",
    tag: "All-Day Dining",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Candlelit table at the rooftop restaurant",
    area: "lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-2",
    kind: "main",
  },
  {
    name: "Seafood & Grill",
    tag: "Wood Fire",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    alt: "Wood-fired dish plated at the grill",
    area: "lg:col-start-4 lg:col-span-3 lg:row-start-1 lg:row-span-1",
    kind: "side",
    delay: 0.1,
  },
  {
    name: "The Bar & Lounge",
    tag: "Cocktails",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    alt: "Cocktails on the bar at golden hour",
    area: "lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-2",
    kind: "side",
    delay: 0.3,
  },
];

const DETAILS = [
  { label: "Open Daily", value: "Rooftop Dining" },
  { label: "Evenings", value: "Bar & Lounge" },
  { label: "On Request", value: "Private Events" },
];

function Headline() {
  const line1 = ["A", "Table", "at", "the"];
  const line2 = ["Edge", "of", "the", "World."];
  const word = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };
  const edge = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <m.h2
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ show: { transition: { staggerChildren: 0.03 } } }}
      className="font-playfair mt-5 text-center text-[clamp(2.4rem,6vw,6rem)] leading-[1.1] text-ransam-ink"
    >
      <span className="block">
        {line1.map((w, i) => (
          <m.span key={i} variants={word} className="inline-block">
            {w}&nbsp;
          </m.span>
        ))}
      </span>
      <span className="block">
        <m.span variants={edge} className="inline-block italic text-ransam-gold">
          Edge&nbsp;
        </m.span>
        {line2.slice(1).map((w, i) => (
          <m.span key={i} variants={word} className="inline-block">
            {w}&nbsp;
          </m.span>
        ))}
      </span>
    </m.h2>
  );
}

export default function Dining() {
  return (
    <section
      id="dining"
      className="relative overflow-hidden bg-ransam-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* PART 1 — STATEMENT */}
        <m.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-cormorant-sc text-center text-[0.75rem] uppercase tracking-[0.2em] text-ransam-clay"
        >
          03 &nbsp;·&nbsp; Culinary Arts
        </m.p>

        <Headline />

        <m.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mt-6 text-center font-outfit text-[1rem] font-light tracking-[0.05em] text-ransam-clay"
        >
          Rooftop dining. City lights. Open skies.
        </m.p>

        {/* PART 2 — SHOWCASE GRID */}
        <div className="mt-14 flex flex-col gap-4 lg:mt-20 lg:grid lg:grid-cols-6 lg:grid-rows-[300px_300px_240px] lg:gap-4">
          {/* LABEL cell (DOM-first so it sits above images on mobile) */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="relative flex flex-col justify-center overflow-hidden bg-ransam-stone p-8 lg:col-start-1 lg:col-span-3 lg:row-start-3 lg:row-span-1"
          >
            <span
              aria-hidden
              className="font-playfair pointer-events-none absolute -top-6 left-3 text-[8rem] leading-none text-ransam-gold/20"
            >
              &ldquo;
            </span>
            <p className="relative max-w-[360px] font-outfit text-[1rem] font-light leading-relaxed text-ransam-ink/80">
              Our kitchen wakes before the city to meet the morning markets.
              Every plate carries the hills of Mizoram, the soil, and the hands
              that shaped it.
            </p>
            <p className="font-cormorant-sc relative mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-ransam-clay">
              — The Ransam Kitchen
            </p>
          </m.div>

          {VENUES.map((v) => (
            <article
              key={v.name}
              className={`group relative h-[62vw] w-full overflow-hidden bg-ransam-stone sm:h-[420px] lg:h-auto ${v.area}`}
            >
              <m.div
                initial={
                  v.kind === "main"
                    ? { scale: 1.06 }
                    : { opacity: 0, scale: 1.08 }
                }
                whileInView={
                  v.kind === "main"
                    ? { scale: 1 }
                    : { opacity: 1, scale: 1 }
                }
                viewport={viewportOnce}
                transition={{
                  duration: v.kind === "main" ? 1.2 : 0.9,
                  ease: EASE,
                  delay: v.delay || 0,
                }}
                className="relative h-full w-full"
              >
                <Image
                  src={v.img}
                  alt={v.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ransam-ink/60 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-cormorant-sc inline-flex rounded-full border border-ransam-gold px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-ransam-gold">
                    {v.tag}
                  </span>
                  <h3 className="font-playfair mt-3 text-2xl italic text-ransam-white lg:text-3xl">
                    {v.name}
                  </h3>
                </div>
              </m.div>
            </article>
          ))}
        </div>

        {/* PART 3 — DETAILS STRIP */}
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 flex flex-col divide-y divide-ransam-clay/20 border-y border-ransam-clay/20 lg:flex-row lg:divide-x lg:divide-y-0"
        >
          {DETAILS.map((d) => (
            <m.div
              key={d.value}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
              }}
              className="flex-1 py-6 text-center lg:py-7"
            >
              <p className="font-cormorant-sc text-[0.65rem] uppercase tracking-[0.2em] text-ransam-clay">
                {d.label}
              </p>
              <p className="font-playfair mt-1 text-[1.1rem] text-ransam-ink">
                {d.value}
              </p>
            </m.div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 text-center"
        >
          <a
            href="#booking"
            className="link-underline font-outfit text-[0.85rem] text-ransam-gold"
          >
            View All Menus &amp; Reserve a Table →
          </a>
        </m.div>
      </div>
    </section>
  );
}
