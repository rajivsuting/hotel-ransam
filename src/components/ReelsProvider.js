"use client";

import { createContext, useCallback, useContext, useState } from "react";
import ReelsPlayer from "./ReelsPlayer";

const ReelsContext = createContext(null);

export const useReels = () =>
  useContext(ReelsContext) || {
    openReels: () => {},
    closeReels: () => {},
    isOpen: false,
  };

const VIDEOS = [
  { src: "/1.mp4", caption: "Where stillness meets splendour." },
  { src: "/2.mp4", caption: "Rooftop dining beneath open skies." },
  { src: "/3.mp4", caption: "Rituals drawn from across the East." },
  { src: "/4.mp4", caption: "Suites of stone, timber & light." },
  { src: "/5.mp4", caption: "Celebrations worth remembering." },
  { src: "/6.mp4", caption: "Aizawl's first luxury resort." },
];

export default function ReelsProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openReels = useCallback((i = 0) => {
    setStartIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <ReelsContext.Provider value={{ openReels, closeReels: close, isOpen: open }}>
      {children}
      <ReelsPlayer
        open={open}
        startIndex={startIndex}
        onClose={close}
        videos={VIDEOS}
      />
    </ReelsContext.Provider>
  );
}
