"use client";

import { useCallback, useEffect, useState } from "react";
import {
  loadReelLikes,
  likeReel,
  subscribeReelLikes,
  toggleReelLike,
} from "@/lib/reelLikes";

export function useReelLikes(reelCount) {
  const [data, setData] = useState(() =>
    typeof window === "undefined"
      ? { liked: {}, counts: [] }
      : loadReelLikes(reelCount)
  );

  const sync = useCallback(() => {
    setData(loadReelLikes(reelCount));
  }, [reelCount]);

  useEffect(() => {
    sync();
    return subscribeReelLikes(sync);
  }, [sync]);

  const toggleLike = useCallback(
    (index) => {
      setData((prev) => toggleReelLike(prev, index, reelCount));
    },
    [reelCount]
  );

  const addLike = useCallback(
    (index) => {
      setData((prev) => likeReel(prev, index, reelCount));
    },
    [reelCount]
  );

  return { liked: data.liked, counts: data.counts, toggleLike, addLike };
}
