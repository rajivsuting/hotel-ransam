"use client";

import { m } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { ArrowRight } from "@/lib/icons";

const fieldClass =
  "h-12 w-full bg-transparent font-body text-sm text-charcoal outline-none placeholder:text-muted/70";
const labelClass = "overline mb-1 block text-muted";

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative bg-gradient-to-b from-ivory to-sand/60 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent(0.12)}
        >
          <m.p variants={fadeUp} className="overline text-gold">
            Reservations
          </m.p>
          <m.h2
            variants={fadeUp}
            className="display-xl font-display mt-3 font-light text-charcoal"
          >
            Your Sanctuary Awaits
          </m.h2>
        </m.div>

        {/* Booking bar */}
        <m.form
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 grid grid-cols-1 gap-4 rounded-md bg-cream p-5 text-left shadow-[0_30px_60px_-30px_rgba(28,28,26,0.35)] md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end lg:gap-6 lg:p-6"
        >
          <div className="border-b border-sand pb-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <label htmlFor="checkin" className={labelClass}>
              Check-in
            </label>
            <input id="checkin" type="date" className={fieldClass} />
          </div>
          <div className="border-b border-sand pb-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <label htmlFor="checkout" className={labelClass}>
              Check-out
            </label>
            <input id="checkout" type="date" className={fieldClass} />
          </div>
          <div className="border-b border-sand pb-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <label htmlFor="guests" className={labelClass}>
              Guests
            </label>
            <select id="guests" className={`${fieldClass} cursor-pointer`}>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn-fill group flex h-12 items-center justify-center gap-2 border border-gold bg-gold px-8 font-body text-[0.72rem] uppercase tracking-[0.22em] text-charcoal hover:text-cream"
          >
            Check Availability
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </m.form>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-8 font-body text-sm font-light text-muted"
        >
          <p>
            Or call us at{" "}
            <a href="tel:+918974765737" className="link-underline text-charcoal">
              89747 65737
            </a>
            ,{" "}
            <a href="tel:+918119914534" className="link-underline text-charcoal">
              81199 14534
            </a>
          </p>
          <p className="mt-2">
            <a
              href="mailto:hotelransam@gmail.com"
              className="link-underline text-charcoal"
            >
              hotelransam@gmail.com
            </a>
          </p>
          <p className="mt-2">
            Thuampui Vengthar, Thuampui–Chite Road, Aizawl, Mizoram 796008
          </p>
        </m.div>
      </div>
    </section>
  );
}
