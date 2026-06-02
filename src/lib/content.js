function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const ROOMS = [
  {
    slug: "single-room",
    name: "Single Room",
    tagline: "A serene retreat composed for the solo traveller.",
    price: "1,300",
    img: "/Double-room.jpeg",
    alt: "Single room with a neatly dressed bed and warm light",
    description:
      "A quiet, well-proportioned room for one — soft linens, warm timber accents, and filtered morning light. Ideal for business travellers or a solo escape in Aizawl.",
    highlights: [
      "Single occupancy",
      "En-suite bathroom",
      "Daily housekeeping",
      "Complimentary Wi‑Fi",
      "Check-in & out at 12:00 Noon",
    ],
  },
  {
    slug: "double-room",
    name: "Double Room",
    tagline: "Comfort for two, framed by soft natural light.",
    price: "2,300",
    img: "/Double-room.jpeg",
    alt: "Double room with a plush king bed and timber accents",
    description:
      "Our most popular category — a plush double bed, calm palette, and thoughtful amenities for couples or friends travelling together.",
    highlights: [
      "King or twin bedding on request",
      "En-suite bathroom",
      "Work desk & reading light",
      "Complimentary Wi‑Fi",
      "Room service available",
    ],
  },
  {
    slug: "triple-room",
    name: "Triple Room",
    tagline: "Generous space for friends or a small family.",
    price: "2,600",
    img: "/Triple-room.jpeg",
    alt: "Triple room with layered bedding and a calm palette",
    description:
      "Extra space and flexible bedding for three guests — perfect for families or small groups who want to stay together without compromise.",
    highlights: [
      "Sleeps up to three guests",
      "Spacious layout",
      "En-suite bathroom",
      "Complimentary Wi‑Fi",
      "Extra luggage space",
    ],
  },
  {
    slug: "quadruple-room",
    name: "Quadruple Room",
    tagline: "Room to gather, rest, and unwind together.",
    price: "3,200",
    img: "/Quadruple-room.jpeg",
    alt: "Spacious quadruple room arranged for four guests",
    description:
      "A generous room arranged for four — ideal for families or friends who prefer one shared space with room to breathe.",
    highlights: [
      "Sleeps up to four guests",
      "Multiple bedding configurations",
      "En-suite bathroom",
      "Complimentary Wi‑Fi",
      "Ideal for group stays",
    ],
  },
  {
    slug: "delux-double",
    name: "Delux Double",
    tagline: "Elevated comfort with refined finishes throughout.",
    price: "4,000",
    img: "/executive-double-deluxe-room.jpeg",
    alt: "Executive delux double room with refined finishes",
    description:
      "Step up to refined finishes, a larger footprint, and executive-level comfort — our answer to a boutique upgrade without leaving Hotel Ransam.",
    highlights: [
      "Executive delux category",
      "Premium bedding & linens",
      "Upgraded bathroom amenities",
      "Complimentary Wi‑Fi",
      "Priority room service",
    ],
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    tagline: "Our finest address — the pinnacle of Hotel Ransam.",
    price: "7,000",
    img: "/presidential-suite-room.jpeg",
    alt: "Presidential suite with lounge seating and premium amenities",
    description:
      "The crown of Hotel Ransam — a separate living area, premium amenities, and the quiet luxury reserved for our most discerning guests.",
    highlights: [
      "Separate lounge & sleeping area",
      "Premium suite amenities",
      "Best views in the property",
      "Complimentary Wi‑Fi",
      "Personalised check-in assistance",
    ],
  },
];

export const DINING_VENUES = [
  {
    slug: "the-rooftop",
    name: "The Rooftop",
    tag: "All-Day Dining",
    img: "/food1.jpg",
    alt: "Plated dishes at the Hotel Ransam rooftop restaurant",
    description:
      "Our signature rooftop restaurant — open skies, city lights, and a menu that moves from breakfast through late evening. The heart of dining at Hotel Ransam.",
    highlights: [
      "All-day dining",
      "Rooftop seating with city views",
      "À la carte menu",
      "Family-friendly atmosphere",
      "Table reservations available",
    ],
  },
  {
    slug: "seafood-grill",
    name: "Seafood & Grill",
    tag: "Wood Fire",
    img: "/food2.jpg",
    alt: "Seafood and grill selections from the Hotel Ransam kitchen",
    description:
      "Fresh seafood and wood-fire grill specials — bold flavours, seasonal catches, and the warmth of an open kitchen on cooler Aizawl evenings.",
    highlights: [
      "Wood-fire grill",
      "Fresh seafood selections",
      "Evening service",
      "Chef's daily specials",
      "Pairs well with rooftop views",
    ],
  },
  {
    slug: "the-bar-lounge",
    name: "The Bar & Lounge",
    tag: "Cocktails",
    img: "/food3.jpeg",
    alt: "Cocktails and lounge dining at Hotel Ransam",
    description:
      "Cocktails, small plates, and unhurried conversation — our lounge is where the day loosens its collar and the city glows below.",
    highlights: [
      "Full bar service",
      "Cocktails & mocktails",
      "Lounge seating",
      "Light bites & sharing plates",
      "Live atmosphere on select evenings",
    ],
  },
];

export const DINING_SERVICES = [
  "Family Restaurant",
  "Restaurant Bar Service",
  "Seafood Restaurant",
  "Fine Dining Restaurant",
  "Take Away Restaurant",
  "Buffet Service",
  "Catering Service",
  "Delivery",
  "Lounge",
  "Cocktail",
];

export const SPA_TREATMENTS = [
  {
    slug: "aroma-massage",
    name: "Aroma Massage",
    duration: "60 min",
    price: "1,600",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80",
    alt: "Aromatic oil massage in a candlelit spa room",
    description:
      "Essential oils chosen for calm and restoration — slow, flowing strokes to ease tension and quiet the mind.",
    highlights: [
      "Custom aromatic oil blend",
      "Full-body relaxation",
      "60-minute session",
      "Trained spa therapists",
    ],
  },
  {
    slug: "balinese-massage",
    name: "Balinese Massage",
    duration: "60 min",
    price: "1,800",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80",
    alt: "Balinese massage therapy session",
    description:
      "A rhythmic, energising treatment combining acupressure, stretching, and long strokes — rooted in Balinese healing tradition.",
    highlights: [
      "Acupressure & stretching",
      "Improves circulation",
      "60-minute session",
      "Ideal after long travel",
    ],
  },
  {
    slug: "deep-tissue",
    name: "Deep Tissue",
    duration: "60 min",
    price: "2,000",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    alt: "Deep tissue massage focusing on muscle relief",
    description:
      "Focused pressure on deeper muscle layers — for chronic tension, post-travel fatigue, or guests who prefer a firmer touch.",
    highlights: [
      "Targeted muscle relief",
      "Firmer therapeutic pressure",
      "60-minute session",
      "Post-session hydration recommended",
    ],
  },
  {
    slug: "steam-room",
    name: "Steam Room",
    duration: "30 min",
    price: "800",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
    alt: "Spa steam room with warm ambient lighting",
    description:
      "Warm steam to open pores, soften muscles, and prepare the body for massage — or simply to unwind in quiet heat.",
    highlights: [
      "Private steam access",
      "Complements any ritual",
      "30-minute session",
      "Towels & refreshments provided",
    ],
  },
  {
    slug: "mini-pool",
    name: "Mini Pool",
    duration: "Daily access",
    price: "Included with rituals",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    alt: "Relaxing mini pool at the wellness area",
    description:
      "A compact pool for cooling down after steam or massage — a quiet finish to any wellness visit at Hotel Ransam.",
    highlights: [
      "Cool-down after treatments",
      "Included with spa rituals",
      "Quiet hours observed",
      "Towels provided",
    ],
  },
];

export const FACILITIES = [
  {
    slug: "rooftop-restaurant",
    name: "Rooftop Restaurant",
    price: "À la carte",
    description:
      "All-day dining above the city — our rooftop is the social heart of Hotel Ransam, from morning coffee to evening plates.",
    highlights: ["All-day dining", "City views", "À la carte pricing", "Reservations welcome"],
  },
  {
    slug: "banquet-hall",
    name: "Banquet Hall",
    price: "₹1,000 / hour",
    note: "₹800 / hr with lunch or dinner",
    description:
      "A flexible hall for weddings, receptions, and celebrations — configured for your guest list with catering support from our kitchen.",
    highlights: [
      "Weddings & receptions",
      "Custom seating layouts",
      "In-house catering available",
      "Reduced rate with meal packages",
    ],
  },
  {
    slug: "starlight-karaoke",
    name: "Starlight Karaoke",
    price: "₹1,200 / hour",
    note: "₹1,000 / hr with lunch or dinner",
    description:
      "Private karaoke sessions under soft lighting — perfect for birthdays, team outings, or an unforgettable night with friends.",
    highlights: [
      "Private karaoke room",
      "Updated song library",
      "Food & beverage packages",
      "Evening bookings available",
    ],
  },
  {
    slug: "spa-wellness",
    name: "Spa & Wellness",
    price: "Rituals from ₹1,600",
    description:
      "Massage, steam, and our mini pool — a complete wellness circuit without leaving the property.",
    highlights: [
      "Aroma, Balinese & deep tissue",
      "Steam room access",
      "Mini pool included",
      "Daily availability",
    ],
  },
  {
    slug: "gym",
    name: "Gym",
    price: "Complimentary",
    description:
      "A compact fitness room for guests who keep their routine on the road — complimentary for all in-house stays.",
    highlights: [
      "Cardio & strength equipment",
      "Complimentary for guests",
      "Open daily",
      "Towels available at reception",
    ],
  },
  {
    slug: "mini-theater",
    name: "Mini Theater",
    price: "₹800 / hour",
    description:
      "A private screening room for families, corporate previews, or a quiet movie night — book by the hour.",
    highlights: [
      "Private screening room",
      "Comfortable seating",
      "Hourly booking",
      "Ideal for small groups",
    ],
  },
  {
    slug: "conference-room",
    name: "Conference Room",
    price: "₹600 / hour",
    description:
      "Focused meetings with presentation setup — suited for workshops, interviews, and small corporate gatherings.",
    highlights: [
      "Presentation-ready setup",
      "Wi‑Fi included",
      "Hourly booking",
      "Tea & coffee on request",
    ],
  },
  {
    slug: "pool-table",
    name: "Pool Table",
    price: "₹300 / hour",
    description:
      "Classic billiards in a relaxed setting — an easy hour between meetings or after dinner.",
    highlights: [
      "Full-size table",
      "Hourly rate",
      "Equipment provided",
      "Evening availability",
    ],
  },
  {
    slug: "sweet-escape",
    name: "Sweet Escape — Homestay with Mini Pool",
    price: "₹10,000",
    note: "Check-in & out at 12:00 Noon",
    description:
      "A private homestay experience with its own mini pool — seclusion, space, and a slower pace for families or special occasions.",
    highlights: [
      "Private mini pool",
      "Homestay-style layout",
      "Ideal for families",
      "Check-in & out at 12:00 Noon",
    ],
  },
];

export function getRoom(slug) {
  return ROOMS.find((r) => r.slug === slug);
}

export function getDiningVenue(slug) {
  return DINING_VENUES.find((v) => v.slug === slug);
}

export function getSpaTreatment(slug) {
  return SPA_TREATMENTS.find((t) => t.slug === slug);
}

export function getFacility(slug) {
  return FACILITIES.find((f) => f.slug === slug);
}

export { slugify };
