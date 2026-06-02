"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { useParallaxEnabled } from "@/lib/motion";
import { Play, ArrowRight, VolumeOn, VolumeOff } from "@/lib/icons";
import { useReels } from "@/components/ReelsProvider";

const EASE = [0.22, 1, 0.36, 1];
const FILM_SRC = "/hero.mp4";

export default function Hero() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const parallax = useParallaxEnabled();
  const { openReels, isOpen: reelsOpen } = useReels();
  const [muted, setMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    if (!next) {
      v.volume = 1;
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Background drifts down slowly (~0.25x) while the content lifts away faster.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // Ensure the background video is muted + autoplaying (browsers require the
  // muted property to be set for reliable autoplay).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;

    const markReady = () => setVideoReady(true);
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    // If the video already buffered (cache / fast load), the `loadeddata`
    // event may have fired before this handler attached — so check directly.
    if (v.readyState >= 2) markReady();

    v.addEventListener("loadeddata", markReady);
    v.addEventListener("canplay", markReady);
    v.addEventListener("playing", markReady);

    tryPlay();

    // Fallback: some browsers (battery saver, strict autoplay policies) defer
    // even muted autoplay until the first user gesture. Kick it off then.
    const onGesture = () => tryPlay();
    window.addEventListener("pointerdown", onGesture, { once: true });
    window.addEventListener("scroll", onGesture, { once: true, passive: true });

    return () => {
      v.removeEventListener("loadeddata", markReady);
      v.removeEventListener("canplay", markReady);
      v.removeEventListener("playing", markReady);
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("scroll", onGesture);
    };
  }, []);

  // Pause the hero background film while reels are playing.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reelsOpen) v.pause();
    else if (videoReady) v.play().catch(() => {});
  }, [reelsOpen, videoReady]);

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
        <video
          ref={videoRef}
          src={FILM_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedData={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
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
        className="absolute inset-0 z-10 mx-auto flex max-w-[1500px] flex-col justify-end px-9 pb-[6.25rem] sm:px-12 sm:pb-28 lg:px-16"
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
            onClick={() => openReels(0)}
            className="group hidden w-full items-center justify-center gap-3 border border-cream/45 px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-cream sm:inline-flex sm:w-auto"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/60 transition-colors group-hover:border-cream">
              <Play className="h-3 w-3 translate-x-[1px]" />
            </span>
            Watch our Beauty
          </button>
        </m.div>
      </m.div>

      {/* Mute / unmute toggle — bottom-right */}
      <m.button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute background film" : "Mute background film"}
        aria-pressed={!muted}
        disabled={!videoReady}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-[6.25rem] right-9 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/40 bg-charcoal/20 text-cream/80 backdrop-blur-sm transition-colors hover:border-cream hover:text-cream disabled:cursor-not-allowed sm:bottom-10 lg:right-16"
      >
        {muted ? (
          <VolumeOff className="h-5 w-5" />
        ) : (
          <VolumeOn className="h-5 w-5" />
        )}
      </m.button>

    </section>
  );
}
