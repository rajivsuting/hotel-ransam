import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Rooms from "@/components/Rooms";
import ParallaxBanner from "@/components/ParallaxBanner";
import Dining from "@/components/Dining";
import Spa from "@/components/Spa";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Philosophy />
        <Rooms />
        <ParallaxBanner />
        <Dining />
        <Spa />
        <Experiences />
        <Testimonials />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
