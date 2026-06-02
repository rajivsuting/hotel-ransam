"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight } from "@/lib/icons";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function RooftopRestaurant() {
  const reserveTableUrl = buildWhatsAppUrl(
    "Hello Hotel Ransam, I want to reserve a table at your rooftop restaurant. Please share timings and availability."
  );

  return (
    <section className="bg-charcoal px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent(0.12)}
          className="order-2 lg:order-1"
        >
          <m.p variants={fadeUp} className="overline text-gold-soft">
            Rooftop Restaurant
          </m.p>
          <m.h2
            variants={fadeUp}
            className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-light text-cream"
          >
            Dinner Above Aizawl
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-body text-sm font-light leading-relaxed text-cream/80 lg:text-base"
          >
            Enjoy open-sky dining with panoramic city views, signature Mizo and
            continental dishes, and a warm evening ambience at Hotel Ransam&apos;s
            rooftop restaurant.
          </m.p>
          <m.ul
            variants={fadeUp}
            className="mt-7 grid gap-2 font-body text-sm font-light text-cream/85 sm:grid-cols-2"
          >
            <li>• Sunset and night skyline views</li>
            <li>• Family-friendly atmosphere</li>
            <li>• Freshly prepared specialties</li>
            <li>• Table reservations on WhatsApp</li>
          </m.ul>
          <m.a
            variants={fadeUp}
            href={reserveTableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill mt-9 inline-flex items-center gap-2 border border-gold bg-gold px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] text-charcoal hover:text-cream"
          >
            Reserve a Table
            <ArrowRight className="h-4 w-4" />
          </m.a>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 aspect-[4/3] overflow-hidden rounded-sm bg-sand lg:order-2 lg:aspect-[16/12]"
        >
          <Image
            src="/roof.jpg"
            alt="Rooftop restaurant dining at Hotel Ransam"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent"
          />
        </m.div>
      </div>
    </section>
  );
}
