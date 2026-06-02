"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Pinterest, Plus } from "@/lib/icons";

const COLUMNS = [
  {
    title: "Rooms",
    links: [
      { label: "Single Room", href: "/rooms/single-room" },
      { label: "Double Room", href: "/rooms/double-room" },
      { label: "Presidential Suite", href: "/rooms/presidential-suite" },
    ],
  },
  {
    title: "Dine & Celebrate",
    links: [
      { label: "The Rooftop", href: "/dining/the-rooftop" },
      { label: "Starlight Karaoke", href: "/facilities/starlight-karaoke" },
      { label: "Banquet Hall", href: "/facilities/banquet-hall" },
      { label: "Conference Room", href: "/facilities/conference-room" },
    ],
  },
  {
    title: "Facilities",
    links: [
      { label: "Spa & Wellness", href: "/facilities/spa-wellness" },
      { label: "Gym", href: "/facilities/gym" },
      { label: "Mini Theater", href: "/facilities/mini-theater" },
      { label: "Sweet Escape", href: "/facilities/sweet-escape" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "89747 65737", href: "tel:+918974765737" },
      { label: "81199 14534", href: "tel:+918119914534" },
      { label: "hotelransam@gmail.com", href: "mailto:hotelransam@gmail.com" },
      { label: "ransam.business.site", href: "https://ransam.business.site" },
    ],
  },
];

const SOCIALS = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/hotel_ransam?igsh=ZGdrNW92ZTE3b3M3&utm_source=qr",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/18Y5C2XZMW/?mibextid=wwXIfr",
  },
  { Icon: Pinterest, label: "Pinterest", href: "https://pinterest.com" },
];

function Column({ title, links }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream/10 lg:border-none">
      {/* Mobile accordion trigger / desktop static heading */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 lg:pointer-events-none lg:py-0"
      >
        <span className="overline text-gold-soft">{title}</span>
        <Plus
          className={`h-4 w-4 text-cream/60 transition-transform duration-300 lg:hidden ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>

      {/* Desktop: always visible */}
      <ul className="hidden lg:mt-5 lg:block lg:space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="link-underline font-body text-sm font-light text-cream/65 transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile: collapsible */}
      <AnimatePresence initial={false}>
        {open && (
          <m.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 overflow-hidden pb-5 lg:hidden"
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-body text-sm font-light text-cream/65 transition-colors hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gold/40 bg-charcoal px-5 pb-[5.75rem] pt-16 text-cream sm:px-8 sm:pb-10 lg:px-12 lg:pt-20"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center">
          <a
            href="/"
            className="font-accent text-3xl tracking-[0.32em] text-gold"
          >
            Hotel Ransam
          </a>
          <p className="mx-auto mt-5 max-w-md font-body text-sm font-light leading-relaxed text-cream/60">
            Aizawl&apos;s first luxury resort, where stillness meets splendour.
          </p>
          <p className="mx-auto mt-3 max-w-md font-body text-xs font-light leading-relaxed text-cream/45">
            Thuampui Vengthar, Thuampui–Chite Road, Aizawl, Mizoram 796008
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-12">
          {COLUMNS.map((c) => (
            <Column key={c.title} {...c} />
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-5">
          {SOCIALS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-cream/10 pt-8 text-center font-body text-xs uppercase tracking-[0.18em] text-cream/45 sm:flex-row sm:justify-between">
          <span>© 2025 Hotel Ransam</span>
          <div className="flex gap-6">
            <a href="#" className="link-underline transition-colors hover:text-cream">
              Privacy Policy
            </a>
            <a href="#" className="link-underline transition-colors hover:text-cream">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
