// Hand-built inline SVG icons — no external icon libraries.
// All are stroke-based, currentColor, and inherit sizing from a wrapping class.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ChevronDown({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ArrowRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Play({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M8 5.5v13l11-6.5-11-6.5z" />
    </svg>
  );
}

export function Menu({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Close({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Plus({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Star({ className = "", filled = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
    </svg>
  );
}

/* --- Experience icons --- */

export function Sunrise({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 18h18M5.5 18a6.5 6.5 0 0113 0" />
      <path d="M12 3v3M4.4 7.4l1.4 1.4M19.6 7.4l-1.4 1.4M1.5 13h2M20.5 13h2" />
    </svg>
  );
}

export function Kayak({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 12c4 4 14 4 18 0-4-4-14-4-18 0z" />
      <path d="M12 8.5v7M6 4l3.5 3.5M18 4l-3.5 3.5" />
    </svg>
  );
}

export function Wine({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 3h10l-1 7a4 4 0 01-8 0L7 3z" />
      <path d="M12 14v5M8.5 21h7" />
    </svg>
  );
}

export function Masks({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 5c4 0 5 2 5 5s-1 6-5 6c-1.5 0-3-.8-3-5s1.5-6 3-6z" />
      <path d="M14 7c4 0 6 1 6 5s-2 5-5 5c-2 0-4-1-4-5" />
    </svg>
  );
}

/* --- Facility icons --- */

export function Cutlery({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 3v8a2 2 0 002 2v8M7 3v5M5 3v5M9 3v5" />
      <path d="M17 3c-1.7 0-3 2-3 5s1.3 4 3 4v9" />
    </svg>
  );
}

export function Dumbbell({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
    </svg>
  );
}

export function Film({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M3 15h18M8 4v16M16 4v16" />
    </svg>
  );
}

export function Users({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <path d="M16 5.5a3 3 0 010 5.8M21 20c0-2.8-1.8-4.4-4-4.8" />
    </svg>
  );
}

export function Billiard({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function Microphone({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0012 0M12 17v4M9 21h6" />
    </svg>
  );
}

export function Lotus({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 4c2 2.2 3 4.5 3 7 0 1.6-1.3 3-3 3s-3-1.4-3-3c0-2.5 1-4.8 3-7z" />
      <path d="M5 9c2.7.3 4.6 1.8 5.6 4M19 9c-2.7.3-4.6 1.8-5.6 4" />
      <path d="M3 13.5c3 3 6 4.5 9 4.5s6-1.5 9-4.5" />
    </svg>
  );
}

export function House({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 11l8-6 8 6M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function VolumeOn({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      <path d="M16.5 8.5a4 4 0 010 7M19 6a7.5 7.5 0 010 12" />
    </svg>
  );
}

export function VolumeOff({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      <path d="M16 9.5l5 5M21 9.5l-5 5" />
    </svg>
  );
}

/* --- Social icons --- */

export function Instagram({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M14 8.5V7c0-1 .5-1.5 1.7-1.5H17V3h-2.3C12 3 11 4.7 11 7v1.5H9V11h2v10h3V11h2.2l.4-2.5H14z" />
    </svg>
  );
}

export function Pinterest({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 7.5c-2.2 0-3.6 1.4-3.6 3.2 0 .9.4 1.8 1.1 2.2.1.1.2 0 .2-.1l.2-.7c0-.1 0-.2-.1-.3a2 2 0 01-.4-1.2c0-1.4 1-2.4 2.5-2.4 1.4 0 2.2.9 2.2 2 0 1.6-.7 2.9-1.7 2.9-.6 0-1-.5-.9-1.1l.4-1.6c.1-.5-.1-.9-.6-.9-.5 0-.9.5-.9 1.2 0 .4.1.7.1.7l-.7 2.8c-.1.5-.1 1.3 0 1.9.7-.9 1-1 1.2-1.8" />
    </svg>
  );
}
