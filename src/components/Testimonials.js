"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Star } from "@/lib/icons";

const TESTIMONIALS = [
  {
    quote:
      "Love the place! The waiters are a lovely bunch and their hospitality is superb. A beautiful view of our city, great ambience, delicious food — and they fulfilled every request, big or small.",
    name: "Katherine Khiangte",
    country: "Verified Guest",
    rating: 5,
  },
  {
    quote:
      "Best place in Aizawl — perfect ambience, and the food and service are absolutely top.",
    name: "Biaktei Hrahsel",
    country: "Verified Guest",
    rating: 5,
  },
  {
    quote:
      "Best restaurant in A-city. Outstanding customer service from start to finish.",
    name: "Lalthan Pachuau",
    country: "Verified Guest",
    rating: 5,
  },
  {
    quote:
      "The place, food and staff were so amazing, and the view was wonderful. I really loved it.",
    name: "MM Iliyas",
    country: "Verified Guest",
    rating: 5,
  },
  {
    quote:
      "Food's better than expected, great location and parking, and the staff were lovely. Great food and service.",
    name: "John",
    country: "Verified Guest",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  const go = useCallback(
    (dir) =>
      setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go, index]);

  const onPointerDown = (e) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
    startX.current = null;
  };

  const active = TESTIMONIALS[index];

  return (
    <section className="bg-sand px-6 py-24 sm:py-28 lg:py-36">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="overline text-charcoal/60">Guest Stories</p>

        <div
          className="relative mt-10 min-h-[280px] touch-pan-y select-none sm:min-h-[240px]"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          role="group"
          aria-roledescription="carousel"
          aria-label="Guest testimonials"
        >
          <AnimatePresence mode="wait">
            <m.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="font-display mt-7 text-2xl font-light italic leading-snug text-charcoal sm:text-3xl lg:text-[2.4rem]">
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <span className="font-body text-sm uppercase tracking-[0.2em] text-charcoal">
                  {active.name}
                </span>
                <span className="mt-1 block font-body text-xs uppercase tracking-[0.2em] text-muted">
                  {active.country}
                </span>
              </figcaption>
            </m.figure>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-gold" : "bg-charcoal/25 hover:bg-charcoal/50"
              }`}
            />
          ))}
        </div>
      </m.div>
    </section>
  );
}
