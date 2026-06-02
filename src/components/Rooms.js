"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { ArrowRight } from "@/lib/icons";
import { ROOMS } from "@/lib/content";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-ivory px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent(0.12)}
          className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <m.p variants={fadeUp} className="overline text-gold">
              Accommodations
            </m.p>
            <m.h2
              variants={fadeUp}
              className="display-lg font-display mt-3 font-light text-charcoal"
            >
              Rooms &amp; Suites
            </m.h2>
          </div>
          <m.p
            variants={fadeUp}
            className="max-w-sm font-body text-sm font-light leading-relaxed text-muted"
          >
            Six distinct categories, from intimate singles to the Presidential
            Suite — each composed of stone, timber, and light.
          </m.p>
        </m.div>

        <m.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent(0.1)}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-2 touch-pan-x md:mx-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-12 md:overflow-visible md:px-0 md:pb-0 lg:mt-16 lg:grid-cols-3"
        >
          {ROOMS.map((room) => (
            <m.li
              key={room.slug}
              variants={fadeUp}
              className="w-[82vw] max-w-[21rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <article className="group flex h-full flex-col">
                <Link
                  href={`/rooms/${room.slug}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-sand lg:aspect-[16/9]"
                >
                  <Image
                    src={room.img}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 768px) 82vw, (max-width: 1024px) 50vw, 33vw"
                    className="img-zoom object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium text-charcoal lg:text-3xl">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="link-underline transition-colors hover:text-gold"
                      >
                        {room.name}
                      </Link>
                    </h3>
                    <span className="overline shrink-0 text-gold">
                      ₹{room.price}
                    </span>
                  </div>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted">
                    {room.tagline}
                  </p>
                  <span className="mt-1 font-body text-xs font-light uppercase tracking-[0.18em] text-muted/70">
                    per night
                  </span>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="group/link inline-flex items-center gap-2 font-body text-[0.72rem] uppercase tracking-[0.22em] text-charcoal"
                    >
                      <span className="link-underline">View details</span>
                      <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <a
                      href="#booking"
                      className="font-body text-[0.72rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold"
                    >
                      Reserve
                    </a>
                  </div>
                </div>
              </article>
            </m.li>
          ))}
        </m.ul>

        <m.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-14 border-t border-sand pt-8 text-center font-body text-sm font-light text-muted"
        >
          Check-in &amp; Check-out at 12:00 Noon · Taxes as per Govt. rules
        </m.p>
      </div>
    </section>
  );
}
