"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Close, Heart, Share, VolumeOn, VolumeOff } from "@/lib/icons";
import { getBaseCount } from "@/lib/reelLikes";
import { useReelLikes } from "@/hooks/useReelLikes";

const EASE = [0.22, 1, 0.36, 1];

export default function ReelsPlayer({ open, startIndex = 0, onClose, videos }) {
  const scrollRef = useRef(null);
  const videoEls = useRef([]);
  const reelEls = useRef([]);
  const tapTimer = useRef(null);
  const activeRef = useRef(startIndex);

  const [active, setActive] = useState(startIndex);
  const [muted, setMuted] = useState(false);
  const { liked, counts, toggleLike, addLike } = useReelLikes(videos.length);
  const [burst, setBurst] = useState(null);
  const [toast, setToast] = useState("");
  const [errors, setErrors] = useState({});

  activeRef.current = active;

  const displayCount = (i) =>
    counts[i] ?? getBaseCount(i) + (liked[i] ? 1 : 0);

  const scrollToIndex = useCallback((idx, behavior = "smooth") => {
    const el = reelEls.current[idx];
    const sc = scrollRef.current;
    if (el && sc) sc.scrollTo({ top: el.offsetTop, behavior });
  }, []);

  const go = useCallback(
    (dir) => {
      const next = Math.min(
        Math.max(activeRef.current + dir, 0),
        videos.length - 1
      );
      scrollToIndex(next);
    },
    [videos.length, scrollToIndex]
  );

  // Body scroll lock + keyboard navigation.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowDown") go(1);
      else if (e.key === "ArrowUp") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, go]);

  // On open, jump straight to the requested reel.
  useEffect(() => {
    if (!open) return;
    setActive(startIndex);
    setErrors({});
    setMuted(false);
    const id = requestAnimationFrame(() => scrollToIndex(startIndex, "auto"));
    return () => cancelAnimationFrame(id);
  }, [open, startIndex, scrollToIndex]);

  // Track the reel currently filling the viewport.
  useEffect(() => {
    if (!open) return;
    const sc = scrollRef.current;
    if (!sc) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && en.intersectionRatio >= 0.6) {
            setActive(Number(en.target.dataset.index));
          }
        });
      },
      { root: sc, threshold: [0.6] }
    );
    reelEls.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [open]);

  // Play the active reel, pause the rest, apply the shared mute state.
  useEffect(() => {
    if (!open) return;
    videoEls.current.forEach((v, i) => {
      if (!v) return;
      v.muted = muted;
      if (i === active) {
        const p = v.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            v.muted = true;
            setMuted(true);
            v.play().catch(() => {});
          });
        }
      } else {
        v.pause();
      }
    });
  }, [active, open, muted]);

  const toggleLikeAt = useCallback(
    (i) => toggleLike(i),
    [toggleLike]
  );

  const heartBurst = useCallback(
    (i) => {
      addLike(i);
      setBurst(i);
      setTimeout(() => setBurst((b) => (b === i ? null : b)), 700);
    },
    [addLike]
  );

  // Single tap → play/pause. Double tap → like (IG behaviour).
  const onTap = useCallback(
    (i) => {
      if (tapTimer.current) {
        clearTimeout(tapTimer.current);
        tapTimer.current = null;
        heartBurst(i);
      } else {
        tapTimer.current = setTimeout(() => {
          tapTimer.current = null;
          const v = videoEls.current[i];
          if (!v) return;
          if (v.paused) v.play().catch(() => {});
          else v.pause();
        }, 250);
      }
    },
    [heartBurst]
  );

  const share = useCallback(async (caption) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const data = {
      title: "Hotel Ransam",
      text: caption || "Watch our beauty — Hotel Ransam, Aizawl",
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
    } catch {
      return; // user cancelled the native sheet
    }
    try {
      await navigator.clipboard.writeText(url);
      setToast("Link copied");
    } catch {
      setToast("Share unavailable");
    }
    setTimeout(() => setToast(""), 1800);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          key="reels"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[130] bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Hotel Ransam reels"
        >
          {/* Top bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-4 pb-10 pt-5">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="pointer-events-auto flex h-10 w-10 items-center justify-center text-white/90 transition-colors hover:text-white"
            >
              <Close className="h-6 w-6" />
            </button>
            <span className="font-accent text-sm tracking-[0.3em] text-white/90">
              Hotel Ransam
            </span>
            <button
              type="button"
              onClick={() => setMuted((v) => !v)}
              aria-label={muted ? "Unmute" : "Mute"}
              aria-pressed={!muted}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center text-white/90 transition-colors hover:text-white"
            >
              {muted ? (
                <VolumeOff className="h-5 w-5" />
              ) : (
                <VolumeOn className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Reel progress */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[3.25rem] z-20 flex justify-center gap-1.5 px-6"
          >
            {videos.map((_, i) => (
              <span
                key={i}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-5 bg-white" : "w-1.5 bg-white/35"
                }`}
              />
            ))}
          </div>

          {/* Vertical reel scroller */}
          <div
            ref={scrollRef}
            className="no-scrollbar h-full snap-y snap-mandatory overflow-y-scroll overscroll-contain touch-pan-y"
          >
            {videos.map((vid, i) => (
              <div
                key={vid.src}
                data-index={i}
                ref={(el) => (reelEls.current[i] = el)}
                className="relative flex h-full w-full snap-start snap-always items-stretch justify-center"
              >
                <div className="relative mx-auto h-full w-full max-w-none sm:max-w-[460px]">
                  <video
                    ref={(el) => (videoEls.current[i] = el)}
                    src={vid.src}
                    loop
                    playsInline
                    preload={
                      Math.abs(i - startIndex) <= 1 ? "auto" : "metadata"
                    }
                    onClick={() => onTap(i)}
                    onError={() =>
                      setErrors((prev) => ({ ...prev, [i]: true }))
                    }
                    className="h-full w-full cursor-pointer object-cover"
                  />

                  {errors[i] && (
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-charcoal/90 px-8 text-center text-white">
                      <p className="font-display text-xl italic">
                        Video unavailable
                      </p>
                      <p className="font-body mt-2 text-sm text-white/70">
                        Add{" "}
                        <span className="text-gold-soft">{vid.src.slice(1)}</span>{" "}
                        to the public folder.
                      </p>
                    </div>
                  )}

                  {/* Double-tap heart burst */}
                  <AnimatePresence>
                    {burst === i && (
                      <m.div
                        key="burst"
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.35 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      >
                        <Heart
                          filled
                          className="h-24 w-24 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                        />
                      </m.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom gradient for legibility */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                  />

                  {/* Right action rail */}
                  <div className="absolute bottom-28 right-3 z-10 flex flex-col items-center gap-6 text-white">
                    <button
                      type="button"
                      onClick={() => toggleLikeAt(i)}
                      aria-pressed={!!liked[i]}
                      aria-label={liked[i] ? "Unlike" : "Like"}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <m.span
                        key={liked[i] ? "on" : "off"}
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 18 }}
                      >
                        <Heart
                          filled={!!liked[i]}
                          className={`h-8 w-8 ${liked[i] ? "text-rose-500" : "text-white"}`}
                        />
                      </m.span>
                      <span className="font-body text-[0.7rem] tabular-nums">
                        {displayCount(i)}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => share(vid.caption)}
                      aria-label="Share"
                      className="flex flex-col items-center gap-1.5"
                    >
                      <Share className="h-7 w-7 -translate-x-[1px]" />
                      <span className="font-body text-[0.7rem]">Share</span>
                    </button>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-7 left-4 right-16 z-10 text-white">
                    <p className="font-display text-xl italic leading-tight">
                      Hotel Ransam
                    </p>
                    <p className="font-body mt-1 text-[0.82rem] font-light text-white/85">
                      {vid.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Toast */}
          <AnimatePresence>
            {toast && (
              <m.div
                key="toast"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="pointer-events-none absolute bottom-10 left-1/2 z-30 -translate-x-1/2 rounded-full bg-white/95 px-5 py-2 font-body text-[0.78rem] text-charcoal"
              >
                {toast}
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      )}
    </AnimatePresence>
  );
}
