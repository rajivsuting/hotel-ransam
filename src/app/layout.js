import {
  Cormorant_Garamond,
  Jost,
  Cinzel,
  Playfair_Display,
  Outfit,
  DM_Serif_Display,
  Cormorant_SC,
} from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { getSiteUrl } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorantSC = Cormorant_SC({
  variable: "--font-cormorant-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Hotel Ransam | 3-Star Hotel in Aizawl, Mizoram",
    template: "%s | Hotel Ransam",
  },
  description:
    "Hotel Ransam is the only 3-star hotel in Mizoram, located in Thuampui Vengthar, Aizawl. Book rooms, rooftop dining, spa, banquet hall, and more.",
  keywords: [
    "Hotel Ransam",
    "3-star hotel in Mizoram",
    "hotel in Aizawl",
    "best hotel in Mizoram",
    "rooms in Aizawl",
    "rooftop restaurant in Aizawl",
    "hotel booking Aizawl",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hotel Ransam | 3-Star Hotel in Aizawl, Mizoram",
    description:
      "Stay at Hotel Ransam, the only 3-star hotel in Mizoram, with premium rooms, rooftop restaurant, and wellness experiences in Aizawl.",
    url: "/",
    siteName: "Hotel Ransam",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=90",
        width: 1200,
        height: 630,
        alt: "Hotel Ransam in Aizawl, Mizoram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Ransam | 3-Star Hotel in Aizawl, Mizoram",
    description:
      "Book your stay at Hotel Ransam in Thuampui Vengthar, Aizawl - rooms, rooftop restaurant, spa, and event facilities.",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=90"],
  },
  category: "hospitality",
};

export const viewport = {
  themeColor: "#1C1C1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${cinzel.variable} ${playfair.variable} ${outfit.variable} ${dmSerif.variable} ${cormorantSC.variable} antialiased`}
    >
      <body>
        <a href="#main" className="skip-link font-body text-sm">
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
