"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { ArrowRight } from "@/lib/icons";

const U = (id) => `https://images.unsplash.com/${id}?w=900&q=80`;

const ROOMS = [
  {
    name: "Single Room",
    tagline: "A serene retreat composed for the solo traveller.",
    price: "1,300",
    img: U("photo-1505693416388-ac5ce068fe85"),
    alt: "Single room with a neatly dressed bed and warm light",
  },
  {
    name: "Double Room",
    tagline: "Comfort for two, framed by soft natural light.",
    price: "2,300",
    img: U("photo-1566665797739-1674de7a421a"),
    alt: "Double room with a plush king bed and timber accents",
  },
  {
    name: "Triple Room",
    tagline: "Generous space for friends or a small family.",
    price: "2,600",
    img: U("photo-1618773928121-c32242e63f39"),
    alt: "Triple room with layered bedding and a calm palette",
  },
  {
    name: "Quadruple Room",
    tagline: "Room to gather, rest, and unwind together.",
    price: "3,200",
    img: U("photo-1631049421450-348ccd7f8949"),
    alt: "Spacious quadruple room arranged for four guests",
  },
  {
    name: "Delux Double",
    tagline: "Elevated comfort with refined finishes throughout.",
    price: "4,000",
    img: U("photo-1590490360182-c33d57733427"),
    alt: "Delux double room with designer furnishings",
  },
  {
    name: "Suite",
    tagline: "An expansive sanctuary with a separate living space.",
    price: "6,000",
    img: U("photo-1582719478250-c89cae4dc85b"),
    alt: "Suite with a sitting area and floor-to-ceiling windows",
  },
  {
    name: "Presidential Suite",
    tagline: "Our finest address — the pinnacle of Ransam living.",
    price: "7,000",
    img: U("photo-1611892440504-42a792e24d32"),
    alt: "Presidential suite with sweeping views and opulent detailing",
  },
];

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
            Seven distinct categories, from intimate singles to the Presidential
            Suite — each composed of stone, timber, and light.
          </m.p>
        </m.div>

        <m.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent(0.1)}
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {ROOMS.map((room) => (
            <m.li key={room.name} variants={fadeUp}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand lg:aspect-[16/9]">
                  <Image
                    src={room.img}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium text-charcoal lg:text-3xl">
                      {room.name}
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
                  <a
                    href="#booking"
                    className="group/link mt-5 inline-flex items-center gap-2 self-start font-body text-[0.72rem] uppercase tracking-[0.22em] text-charcoal"
                  >
                    <span className="link-underline">Reserve</span>
                    <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover/link:translate-x-1" />
                  </a>
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
