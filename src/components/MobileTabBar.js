"use client";

import { AnimatePresence, m } from "framer-motion";
import { useReels } from "./ReelsProvider";
import { Bed, Cutlery, Lotus, Phone, Play } from "@/lib/icons";

const EASE = [0.22, 1, 0.36, 1];

const LEFT = [
  { label: "Rooms", href: "/#rooms", Icon: Bed },
  { label: "Dining", href: "/#dining", Icon: Cutlery },
];
const RIGHT = [
  { label: "Spa", href: "/#spa", Icon: Lotus },
  { label: "Contact", href: "/#contact", Icon: Phone },
];

function TabItem({ label, href, Icon }) {
  return (
    <a
      href={href}
      className="group flex flex-1 flex-col items-center gap-1 pb-1 pt-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl text-cream/50 transition-all duration-300 group-active:bg-gold/10 group-active:text-gold">
        <Icon className="h-[1.05rem] w-[1.05rem]" />
      </span>
      <span className="font-accent text-[0.52rem] uppercase tracking-[0.2em] text-cream/45 transition-colors group-active:text-gold-soft">
        {label}
      </span>
    </a>
  );
}

export default function MobileTabBar() {
  const { openReels, isOpen } = useReels();

  return (
    <AnimatePresence>
      {!isOpen && (
        <m.nav
          aria-label="Mobile"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] px-3 sm:hidden"
          style={{
            paddingBottom: "max(0.65rem, env(safe-area-inset-bottom))",
          }}
        >
          <div className="pointer-events-auto relative mx-auto max-w-md">
            {/* Center play — elevated but restrained */}
            <m.button
              type="button"
              onClick={() => openReels(0)}
              aria-label="Watch our Beauty"
              whileTap={{ scale: 0.96 }}
              className="absolute -top-5 left-1/2 z-20 flex h-14 w-14 -translate-x-1/2 flex-col items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold to-gold-soft text-charcoal shadow-[0_6px_20px_rgba(184,154,106,0.35),0_0_0_3px_rgba(28,28,26,0.95)]"
            >
              <Play className="h-4 w-4 translate-x-[1px]" />
            </m.button>

            {/* Floating dock */}
            <div className="relative overflow-hidden rounded-2xl border border-cream/10 bg-charcoal/95 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div
                aria-hidden
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
              />

              <div className="flex items-end px-1 pb-1.5 pt-2.5">
                <div className="flex flex-1">
                  {LEFT.map((l) => (
                    <TabItem key={l.href} {...l} />
                  ))}
                </div>

                <div className="w-14 shrink-0" aria-hidden />

                <div className="flex flex-1">
                  {RIGHT.map((l) => (
                    <TabItem key={l.href} {...l} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </m.nav>
      )}
    </AnimatePresence>
  );
}
