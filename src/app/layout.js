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
  title: "Hotel Ransam — Thuampui Vengthar, Aizawl",
  description:
    "Hotel Ransam in Thuampui Vengthar, Aizawl — luxury rooms and suites, a rooftop restaurant, spa, banquet hall, karaoke, and more. Where stillness meets splendour.",
  keywords: [
    "Hotel Ransam",
    "luxury resort",
    "five-star hotel",
    "spa retreat",
    "boutique resort",
  ],
  openGraph: {
    title: "Hotel Ransam — Where Stillness Meets Splendour",
    description:
      "A sanctuary carved from nature. Rediscover yourself at Hotel Ransam.",
    type: "website",
  },
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
