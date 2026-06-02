"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import {
  Cutlery,
  Wine,
  Microphone,
  Lotus,
  Dumbbell,
  Film,
  Users,
  Billiard,
} from "@/lib/icons";
import { FACILITIES } from "@/lib/content";

const ICONS = {
  "rooftop-restaurant": Cutlery,
  "banquet-hall": Wine,
  "starlight-karaoke": Microphone,
  "spa-wellness": Lotus,
  gym: Dumbbell,
  "mini-theater": Film,
  "conference-room": Users,
  "pool-table": Billiard,
};

const MAIN_FACILITIES = FACILITIES.filter((f) => f.slug !== "sweet-escape");
const SWEET_ESCAPE = FACILITIES.find((f) => f.slug === "sweet-escape");

export default function Experiences() {
  return (
    <section
      id="facilities"
      className="bg-ivory px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent(0.12)}
          className="max-w-2xl"
        >
          <m.p variants={fadeUp} className="overline text-gold">
            Facilities &amp; Experiences
          </m.p>
          <m.h2
            variants={fadeUp}
            className="display-lg font-display mt-3 font-light text-charcoal"
          >
            Beyond the Stay
          </m.h2>
        </m.div>

        <m.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent(0.1)}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-sand bg-sand sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
        >
          {MAIN_FACILITIES.map(({ slug, name, price, note }) => {
            const Icon = ICONS[slug];
            return (
              <m.li key={slug} variants={fadeUp}>
                <Link
                  href={`/facilities/${slug}`}
                  className="group flex h-full flex-col gap-5 bg-ivory p-8 transition-colors duration-500 hover:bg-cream lg:p-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-cream">
                    {Icon && <Icon className="h-6 w-6" />}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-charcoal">
                      {name}
                    </h3>
                    <p className="mt-2 font-body text-sm font-light text-gold">
                      {price}
                    </p>
                    {note && (
                      <p className="mt-1 font-body text-xs font-light text-muted">
                        {note}
                      </p>
                    )}
                    <p className="mt-4 font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-gold">
                      View details →
                    </p>
                  </div>
                </Link>
              </m.li>
            );
          })}
        </m.ul>

        {SWEET_ESCAPE && (
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-10"
          >
            <Link
              href={`/facilities/${SWEET_ESCAPE.slug}`}
              className="group flex flex-col items-start justify-between gap-4 border border-gold/30 bg-cream px-8 py-7 transition-colors hover:border-gold/50 sm:flex-row sm:items-center lg:px-10"
            >
              <div>
                <h3 className="font-display text-2xl font-medium text-charcoal">
                  {SWEET_ESCAPE.name}
                </h3>
                <p className="mt-1 font-body text-sm font-light text-muted">
                  A private hideaway with its own mini pool · Check-in &amp; out at
                  12:00 Noon
                </p>
                <p className="mt-3 font-body text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-gold">
                  View details →
                </p>
              </div>
              <span className="font-display text-3xl font-light text-gold">
                {SWEET_ESCAPE.price}
              </span>
            </Link>
          </m.div>
        )}
      </div>
    </section>
  );
}
