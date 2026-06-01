"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { useParallaxEnabled } from "@/lib/motion";
import { Play, ArrowRight, Close, VolumeOn, VolumeOff } from "@/lib/icons";

const EASE = [0.22, 1, 0.36, 1];
const VIDEO_ID = "62ey4xYMjew";
const FILM_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

// Load the YouTube IFrame Player API exactly once and resolve when ready.
let ytApiPromise = null;
function loadYouTubeApi() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === "function") prev();
      resolve(window.YT);
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
  return ytApiPromise;
}

export default function Hero() {
  const ref = useRef(null);
  const playerRef = useRef(null);
  const parallax = useParallaxEnabled();
  const [film, setFilm] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) return;
    if (muted) {
      player.unMute();
      player.setVolume(100);
      setMuted(false);
    } else {
      player.mute();
      setMuted(true);
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Background drifts down slowly (~0.25x) while the content lifts away faster.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // Initialise the background player through the official API for reliable
  // mute/unmute control.
  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !YT || playerRef.current) return;
      playerRef.current = new YT.Player("ransam-bg-video", {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            setPlayerReady(true);
          },
        },
      });
    });
    return () => {
      cancelled = true;
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!film) return;
    const onKey = (e) => e.key === "Escape" && setFilm(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [film]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-charcoal"
    >
      {/* Background layer (parallax): poster image as instant fallback + video */}
      <m.div
        style={parallax ? { y: bgY, willChange: "transform" } : undefined}
        className="absolute inset-0"
      >
        <Image
          src={IMAGES.hero}
          alt="Dawn light over the still water and timber pavilions of Hotel Ransam"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="video-cover absolute inset-0" aria-hidden="true">
          <div id="ransam-bg-video" />
        </div>
      </m.div>

      {/* Cinematic overlays — bottom-left weighting for editorial legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-tr from-charcoal/90 via-charcoal/45 to-charcoal/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-charcoal/50"
      />

      {/* Vertical side label (desktop) */}
      <span
        aria-hidden
        className="overline absolute right-9 top-1/2 hidden -translate-y-1/2 text-cream/55 lg:block lg:[writing-mode:vertical-rl]"
      >
        Thuampui Vengthar · Aizawl
      </span>

      {/* Content — anchored bottom-left */}
      <m.div
        style={parallax ? { y: contentY, opacity: contentOpacity } : undefined}
        className="absolute inset-0 z-10 mx-auto flex max-w-[1500px] flex-col justify-end px-9 pb-24 sm:px-12 lg:px-16 lg:pb-28"
      >
        <m.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <p className="overline text-gold-soft">Escape to Paradise</p>
        </m.div>

        <h1 className="display-hero font-display mt-6 max-w-[14ch] font-light text-cream">
          <span className="block overflow-hidden">
            <m.span
              className="block"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.6 }}
            >
              Where Stillness
            </m.span>
          </span>
          <span className="block overflow-hidden">
            <m.span
              className="block italic text-gold-soft"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.74 }}
            >
              Meets Splendour
            </m.span>
          </span>
        </h1>

        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
          className="mt-7 max-w-md font-body text-[0.95rem] font-light leading-relaxed text-cream/85 lg:text-[1.1rem]"
        >
          A sanctuary carved from nature. Rediscover yourself at Hotel Ransam.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
          className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center"
        >
          <a
            href="#rooms"
            className="btn-fill group inline-flex w-full items-center justify-center gap-2 border border-gold bg-gold px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] text-charcoal hover:text-cream sm:w-auto"
          >
            Explore Rooms
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={() => setFilm(true)}
            className="group inline-flex w-full items-center justify-center gap-3 border border-cream/45 px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-cream sm:w-auto"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/60 transition-colors group-hover:border-cream">
              <Play className="h-3 w-3 translate-x-[1px]" />
            </span>
            Watch Film
          </button>
        </m.div>
      </m.div>

      {/* Mute / unmute toggle — bottom-right */}
      <m.button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute background film" : "Mute background film"}
        aria-pressed={!muted}
        disabled={!playerReady}
        initial={{ opacity: 0 }}
        animate={{ opacity: playerReady ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-9 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/40 bg-charcoal/20 text-cream/80 backdrop-blur-sm transition-colors hover:border-cream hover:text-cream disabled:cursor-not-allowed lg:right-16"
      >
        {muted ? (
          <VolumeOff className="h-5 w-5" />
        ) : (
          <VolumeOn className="h-5 w-5" />
        )}
      </m.button>

      {/* Watch Film lightbox */}
      <AnimatePresence>
        {film && (
          <m.div
            key="film"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setFilm(false)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Hotel Ransam film"
          >
            <button
              type="button"
              onClick={() => setFilm(false)}
              aria-label="Close film"
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-cream/80 transition-colors hover:text-cream sm:right-8 sm:top-8"
            >
              <Close className="h-7 w-7" />
            </button>
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-5xl overflow-hidden bg-black shadow-2xl"
            >
              <iframe
                src={FILM_SRC}
                title="Hotel Ransam — The Film"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
