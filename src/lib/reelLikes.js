const STORAGE_KEY = "ransam-reel-likes";

export function getBaseCount(index) {
  return 120 + ((index * 173) % 880);
}

function seed(reelCount) {
  const liked = {};
  const counts = Array.from({ length: reelCount }, (_, i) => getBaseCount(i));
  return { liked, counts };
}

function normalize(raw, reelCount) {
  const fallback = seed(reelCount);
  if (!raw || typeof raw !== "object") return fallback;

  const liked =
    raw.liked && typeof raw.liked === "object" ? { ...raw.liked } : {};
  const counts = Array.from({ length: reelCount }, (_, i) => {
    const stored = raw.counts?.[i] ?? raw.counts?.[String(i)];
    const base = getBaseCount(i);
    const n = Number(stored);
    if (!Number.isFinite(n)) return base;
    return Math.max(base, Math.round(n));
  });

  // Keep counts in sync if liked flags were saved without counts.
  for (let i = 0; i < reelCount; i++) {
    if (liked[i] && counts[i] === getBaseCount(i)) counts[i] += 1;
  }

  return { liked, counts };
}

export function loadReelLikes(reelCount) {
  if (typeof window === "undefined") return seed(reelCount);

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seed(reelCount);
    return normalize(JSON.parse(raw), reelCount);
  } catch {
    return seed(reelCount);
  }
}

export function saveReelLikes(data) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or blocked — ignore silently.
  }
}

export function toggleReelLike(data, index, reelCount) {
  const next = normalize(data, reelCount);
  const base = getBaseCount(index);

  if (next.liked[index]) {
    next.liked[index] = false;
    next.counts[index] = Math.max(base, next.counts[index] - 1);
  } else {
    next.liked[index] = true;
    next.counts[index] = Math.max(base + 1, next.counts[index] + 1);
  }

  saveReelLikes(next);
  return next;
}

export function likeReel(data, index, reelCount) {
  if (data.liked?.[index]) return data;

  const next = normalize(data, reelCount);
  next.liked[index] = true;
  next.counts[index] = Math.max(getBaseCount(index) + 1, next.counts[index] + 1);
  saveReelLikes(next);
  return next;
}

export function subscribeReelLikes(onStoreChange) {
  if (typeof window === "undefined") return () => {};

  const onStorage = (e) => {
    if (e.key === STORAGE_KEY || e.key === null) onStoreChange();
  };

  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}
