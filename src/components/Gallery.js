"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const EASE = [0.22, 1, 0.36, 1];

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    caption: "The Arrival, Dawn",
    grid: "lg:col-start-1 lg:col-span-4 lg:row-start-1",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    caption: "A Room with a View",
    grid: "lg:col-start-5 lg:col-span-3 lg:row-start-1",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    caption: "The Suite, Morning",
    grid: "lg:col-start-8 lg:col-span-5 lg:row-start-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    caption: "The Pool, Dusk",
    grid: "lg:col-start-1 lg:col-span-3 lg:row-start-2",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    caption: "The Rooftop Table",
    grid: "lg:col-start-4 lg:col-span-5 lg:row-start-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    caption: "Aizawl, Below",
    grid: "lg:col-start-9 lg:col-span-4 lg:row-start-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    caption: "The Spa, Candlelit",
    grid: "lg:col-start-1 lg:col-span-3 lg:row-start-3",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    caption: "A Quiet Corner",
    grid: "lg:col-start-9 lg:col-span-4 lg:row-start-3",
  },
];

const hi = (src) => src.replace(/w=\d+/, "w=1600");

export default function Gallery() {
  const [active, setActive] = useState(null);
  const startX = useRef(null);

  const move = useCallback(
    (dir) => setActive((i) => (i + dir + IMAGES.length) % IMAGES.length),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, move]);

  const onPointerDown = (e) => (startX.current = e.clientX);
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-ransam-ink px-5 py-24 text-ransam-stone sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="dots-overlay pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* HEADER */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center"
        >
          <p className="font-cormorant-sc text-[0.75rem] uppercase tracking-[0.2em] text-ransam-clay">
            07 · Gallery
          </p>
          <h2 className="font-playfair mt-3 text-[clamp(2.2rem,5vw,3.5rem)] text-ransam-stone">
            Frames of Ransam
          </h2>
          <p className="mt-3 font-outfit text-[0.95rem] font-light italic text-ransam-clay">
            A property best experienced in person. Until then, these.
          </p>
        </m.div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-2 gap-[3px] sm:gap-1 lg:mt-16 lg:auto-rows-[200px] lg:grid-cols-12 lg:gap-1">
          {IMAGES.map((img, i) => (
            <m.button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image: ${img.caption}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
              className={`group relative h-[44vw] w-full overflow-hidden bg-ransam-dusk sm:h-[30vw] lg:h-full lg:ring-inset lg:ring-ransam-gold lg:hover:ring-1 ${img.grid}`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-500 lg:saturate-[0.7] lg:brightness-90 lg:group-hover:saturate-100 lg:group-hover:brightness-100"
              />

              {/* Annotation number */}
              <m.span
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.07 + 0.3 }}
                className="font-cormorant-sc absolute left-2 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-ransam-gold/40 text-[0.55rem] text-ransam-gold/70 lg:h-5 lg:w-5 lg:text-[0.65rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </m.span>

              {/* Caption */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ransam-ink/80 to-transparent p-3 text-left lg:translate-y-full lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                <span className="font-cormorant-sc text-[0.7rem] uppercase tracking-[0.18em] text-ransam-gold">
                  {img.caption}
                </span>
              </span>
            </m.button>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-outfit text-[0.9rem] text-ransam-stone transition-transform hover:-translate-y-0.5 hover:text-ransam-gold"
          >
            Explore more on Instagram &nbsp;·&nbsp; @hotelransam
          </a>
        </m.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <m.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
            style={{ backgroundColor: "rgba(18,18,18,0.97)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close viewer"
              className="font-cormorant-sc absolute right-5 top-5 z-10 text-3xl leading-none text-ransam-stone/80 transition-colors hover:text-ransam-gold sm:right-8 sm:top-8"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-3 text-3xl text-ransam-stone/70 transition-colors hover:text-ransam-gold sm:left-6"
            >
              ←
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-3 text-3xl text-ransam-stone/70 transition-colors hover:text-ransam-gold sm:right-6"
            >
              →
            </button>

            <m.div
              key={active}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              className="relative h-[78vh] w-full max-w-[85vw] touch-pan-y select-none"
            >
              <Image
                src={hi(IMAGES[active].src)}
                alt={IMAGES[active].caption}
                fill
                sizes="85vw"
                className="object-contain"
              />
            </m.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="font-cormorant-sc text-[0.75rem] uppercase tracking-[0.2em] text-ransam-gold">
                {IMAGES[active].caption}
              </p>
              <p className="font-cormorant-sc mt-1 text-[0.7rem] tracking-[0.2em] text-ransam-stone/50">
                {String(active + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
