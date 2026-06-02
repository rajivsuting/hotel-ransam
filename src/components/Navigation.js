"use client";

import { useState } from "react";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Close } from "@/lib/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const LINKS = [
  { label: "Rooms", href: "/#rooms" },
  { label: "Dining", href: "/#dining" },
  { label: "Spa", href: "/#spa" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Contact", href: "/#contact" },
];

const drawerLink = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  const closeAnd = () => setOpen(false);
  const reserveNowUrl = buildWhatsAppUrl(
    "Hello Hotel Ransam, I want to reserve a room. Please share availability and best rates."
  );

  return (
    <m.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <m.nav
        aria-label="Primary"
        animate={{
          backgroundColor: scrolled
            ? "rgba(245,240,232,0.92)"
            : "rgba(245,240,232,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(28,28,26,0.08)"
            : "0 1px 0 rgba(28,28,26,0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12"
      >
        {/* Logo — centered on mobile, left on lg */}
        <a
          href="/"
          onClick={closeAnd}
          className={`font-accent absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.32em] text-gold transition-colors lg:static lg:translate-x-0 lg:text-2xl ${
            open ? "text-cream lg:text-gold" : ""
          }`}
        >
          Hotel Ransam
        </a>

        {/* Desktop links */}
        <ul
          className={`hidden items-center gap-9 lg:flex ${
            scrolled ? "text-charcoal" : "text-cream"
          } transition-colors`}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline font-body text-[0.82rem] uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={reserveNowUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-fill hidden border px-7 py-3 font-body text-[0.72rem] uppercase tracking-[0.22em] lg:inline-block ${
            scrolled
              ? "border-gold text-charcoal hover:text-cream"
              : "border-cream/70 text-cream hover:text-charcoal"
          }`}
        >
          Reserve Now
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`ml-auto flex h-11 w-11 items-center justify-center lg:hidden ${
            open ? "text-cream" : scrolled ? "text-charcoal" : "text-cream"
          }`}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </m.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {open && (
          <m.div
            key="drawer"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-charcoal px-8 pb-12 pt-28 text-cream lg:hidden"
          >
            <m.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              className="flex flex-col gap-2"
            >
              {LINKS.map((link) => (
                <m.li key={link.href} variants={drawerLink}>
                  <a
                    href={link.href}
                    onClick={closeAnd}
                    className="font-display block border-b border-cream/10 py-4 text-3xl italic text-cream transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </m.li>
              ))}
            </m.ul>

            <m.a
              href={reserveNowUrl}
              onClick={closeAnd}
              target="_blank"
              rel="noopener noreferrer"
              variants={drawerLink}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.55 }}
              className="mt-auto block bg-gold py-4 text-center font-body text-sm uppercase tracking-[0.22em] text-charcoal"
            >
              Reserve Now
            </m.a>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
