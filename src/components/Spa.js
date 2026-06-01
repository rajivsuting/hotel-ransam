"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { viewportOnce, useParallaxEnabled } from "@/lib/motion";
import Counter from "./Counter";

const EASE = [0.22, 1, 0.36, 1];

const TREATMENTS = [
  "Aroma Massage",
  "Balinese Massage",
  "Deep Tissue",
  "Steam Room",
  "Mini Pool",
];

const COLLAGE = [
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
    alt: "Spa therapy in progress",
    className:
      "left-2 top-10 h-[300px] w-[220px] border border-ransam-gold/30 lg:h-[380px] lg:w-[280px]",
    rotate: -2,
    delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    alt: "Wellness detail",
    className:
      "right-2 top-0 h-[120px] w-[190px] border border-ransam-gold/30 lg:h-[140px] lg:w-[220px]",
    rotate: -1,
    delay: 0.25,
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
    alt: "Spa ritual detail",
    className:
      "bottom-2 right-6 h-[140px] w-[140px] bg-[#3a362f] p-1.5 lg:h-[160px] lg:w-[160px]",
    rotate: 3,
    delay: 0.5,
  },
];

const STATS = [
  { n: 3, label: "Signature Rituals" },
  { n: 60, label: "Minute Sessions" },
  { n: 1600, prefix: "₹", label: "Rituals From" },
  { text: "Daily", label: "Open" },
];

export default function Spa() {
  const zone1 = useRef(null);
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: zone1,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      id="spa"
      className="relative overflow-hidden text-ransam-stone"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(196,168,130,0.06) 0%, transparent 70%), #2c2924",
      }}
    >
      {/* ZONE 1 — IMMERSIVE INTRO */}
      <div
        ref={zone1}
        className="relative flex h-[100svh] items-center justify-center overflow-hidden"
      >
        <m.div
          style={parallax ? { y: imgY } : undefined}
          className="absolute inset-0 -top-[10%] h-[120%]"
        >
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=85"
            alt="A candlelit spa treatment room"
            fill
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
        </m.div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(44,41,36,0.3) 0%, rgba(44,41,36,0.85) 60%, rgba(44,41,36,1) 100%)",
          }}
        />

        <div className="relative z-10 flex translate-y-[10%] flex-col items-center px-6 text-center">
          <span className="font-cormorant-sc inline-flex rounded-full border border-ransam-gold px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.28em] text-ransam-gold">
            Wellness
          </span>

          <div className="mt-8 font-playfair leading-[0.98]">
            {[
              { w: "Restore.", cls: "text-ransam-stone", italic: false },
              { w: "Realign.", cls: "text-ransam-gold", italic: true },
              { w: "Return.", cls: "text-ransam-stone/50", italic: false },
            ].map((line, i) => (
              <div key={line.w} className="flex flex-col items-center">
                {i > 0 && (
                  <m.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.3 + i * 0.4 }}
                    className="my-2 block h-1 w-1 rounded-full bg-ransam-gold/40"
                  />
                )}
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.4 }}
                  className={`block text-[clamp(3rem,10vw,7rem)] lg:text-[8vw] ${line.cls} ${line.italic ? "italic" : ""}`}
                >
                  {line.w}
                </m.span>
              </div>
            ))}
          </div>

          <span className="mt-8 block h-px w-20 bg-ransam-gold/30" />
          <p className="mt-6 font-outfit text-[1rem] font-light tracking-[0.1em] text-ransam-stone/60">
            Aromatic oils. Skilled hands. Quiet hours.
          </p>

          <m.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: EASE, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.3 }}
            className="mt-10 block h-14 w-px origin-top bg-ransam-gold/40"
          />
        </div>
      </div>

      {/* ZONE 2 — THE TREATMENTS */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[45%_55%] lg:items-center lg:py-32">
        {/* Left — typographic block */}
        <div className="relative order-2 lg:order-1">
          <span
            aria-hidden
            className="font-playfair pointer-events-none absolute -left-4 top-1/2 -z-0 -translate-y-1/2 select-none text-[18vw] leading-none text-ransam-gold/[0.04]"
          >
            SPA
          </span>

          <div className="relative">
            <h3 className="font-playfair text-[clamp(1.8rem,3vw,3rem)] italic leading-[1.3] text-ransam-stone">
              Ancient Rituals,
              <br />
              Modern Sanctuary
            </h3>
            <p className="mt-6 max-w-md font-outfit text-[0.95rem] font-light leading-relaxed text-ransam-stone/70">
              Therapies drawn from across the East. Hands trained in stillness.
              Hours that belong only to you — then the steam, and the mini pool.
            </p>

            <m.ul
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="mt-10 flex flex-col"
            >
              {TREATMENTS.map((t) => (
                <m.li
                  key={t}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                  className="group flex items-center gap-4 py-3.5 transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="font-cormorant-sc whitespace-nowrap text-[0.9rem] uppercase tracking-[0.12em] text-ransam-stone/80 transition-colors group-hover:text-ransam-stone">
                    {t}
                  </span>
                  <span className="leader-dashed h-px flex-1" />
                  <span className="h-2 w-2 shrink-0 rounded-full border border-ransam-gold/50 transition-colors duration-300 group-hover:bg-ransam-gold" />
                </m.li>
              ))}
            </m.ul>
          </div>
        </div>

        {/* Right — image collage */}
        <div className="relative order-1 mx-auto h-[440px] w-full max-w-[460px] lg:order-2 lg:h-[520px]">
          {COLLAGE.map((img) => (
            <m.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: img.rotate }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE, delay: img.delay }}
              className={`absolute overflow-hidden shadow-2xl ${img.className}`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* ZONE 3 — STATS BAR */}
      <div
        className="border-y px-6 py-12 lg:py-14"
        style={{
          backgroundColor: "rgba(196,168,130,0.06)",
          borderColor: "rgba(196,168,130,0.15)",
        }}
      >
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-playfair text-[2.5rem] leading-none text-ransam-gold">
                {s.text ? (
                  s.text
                ) : (
                  <>
                    {s.prefix}
                    <Counter value={s.n} />
                  </>
                )}
              </div>
              <div className="font-cormorant-sc mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-ransam-stone/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
