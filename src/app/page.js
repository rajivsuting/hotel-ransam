import Navigation from "@/components/Navigation";
import MobileTabBar from "@/components/MobileTabBar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Rooms from "@/components/Rooms";
import ParallaxBanner from "@/components/ParallaxBanner";
import Dining from "@/components/Dining";
import RooftopRestaurant from "@/components/RooftopRestaurant";
import Spa from "@/components/Spa";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import { toAbsoluteUrl } from "@/lib/seo";

export const metadata = {
  title: "3-Star Hotel in Aizawl, Mizoram",
  description:
    "Book your stay at Hotel Ransam in Thuampui Vengthar, Aizawl. Explore premium rooms, rooftop restaurant, spa treatments, and event facilities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hotel Ransam | 3-Star Hotel in Aizawl, Mizoram",
    description:
      "The only 3-star hotel in Mizoram with premium rooms, rooftop dining, spa, and events.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Hotel Ransam",
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=90",
      toAbsoluteUrl("/roof.jpg"),
    ],
    url: toAbsoluteUrl("/"),
    telephone: "+91-81199-14534",
    email: "hotelransam@gmail.com",
    priceRange: "₹1456-₹7840",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thuampui Vengthar, Thuampui-Chite Road",
      addressLocality: "Aizawl",
      addressRegion: "Mizoram",
      postalCode: "796008",
      addressCountry: "IN",
    },
    starRating: {
      "@type": "Rating",
      ratingValue: "3",
      bestRating: "5",
    },
    sameAs: ["https://wa.me/918119914534"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Rooftop Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Spa & Wellness", value: true },
      { "@type": "LocationFeatureSpecification", name: "Banquet Hall", value: true },
      { "@type": "LocationFeatureSpecification", name: "Karaoke", value: true },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <Navigation />
      <main id="main" className="pb-[4.75rem] sm:pb-0">
        <Hero />
        <Philosophy />
        <Rooms />
        <ParallaxBanner />
        <Dining />
        <RooftopRestaurant />
        <Spa />
        <Experiences />
        <Testimonials />
        <Gallery />
        <Booking />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}
