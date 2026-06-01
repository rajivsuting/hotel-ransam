"use client";

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

const FACILITIES = [
  { Icon: Cutlery, title: "Rooftop Restaurant", price: "À la carte" },
  { Icon: Wine, title: "Banquet Hall", price: "₹1,000 / hour", note: "₹800 / hr with lunch or dinner" },
  { Icon: Microphone, title: "Starlight Karaoke", price: "₹1,200 / hour", note: "₹1,000 / hr with lunch or dinner" },
  { Icon: Lotus, title: "Spa & Wellness", price: "Rituals from ₹1,600" },
  { Icon: Dumbbell, title: "Gym", price: "Complimentary" },
  { Icon: Film, title: "Mini Theater", price: "₹800 / hour" },
  { Icon: Users, title: "Conference Room", price: "₹600 / hour" },
  { Icon: Billiard, title: "Pool Table", price: "₹300 / hour" },
];

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
          {FACILITIES.map(({ Icon, title, price, note }) => (
            <m.li
              key={title}
              variants={fadeUp}
              className="group flex flex-col gap-5 bg-ivory p-8 transition-colors duration-500 hover:bg-cream lg:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-cream">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 font-body text-sm font-light text-gold">
                  {price}
                </p>
                {note && (
                  <p className="mt-1 font-body text-xs font-light text-muted">
                    {note}
                  </p>
                )}
              </div>
            </m.li>
          ))}
        </m.ul>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-10 flex flex-col items-start justify-between gap-4 border border-gold/30 bg-cream px-8 py-7 sm:flex-row sm:items-center lg:px-10"
        >
          <div>
            <h3 className="font-display text-2xl font-medium text-charcoal">
              Sweet Escape — Homestay with Mini Pool
            </h3>
            <p className="mt-1 font-body text-sm font-light text-muted">
              A private hideaway with its own mini pool · Check-in &amp; out at
              12:00 Noon
            </p>
          </div>
          <span className="font-display text-3xl font-light text-gold">
            ₹10,000
          </span>
        </m.div>
      </div>
    </section>
  );
}
