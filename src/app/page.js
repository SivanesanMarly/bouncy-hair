import ScrollEffects from "@/components/ScrollEffects";
import TopBar from "@/components/TopBar";
import Marquee from "@/components/Marquee";
import Offers from "@/components/Offers";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Bridal from "@/components/Bridal";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Tips from "@/components/Tips";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getImages } from "@/lib/images";

export default function Home() {
  const img = getImages();
  return (
    <>
      <ScrollEffects />
      <TopBar />
      <Header />
      <main>
        <Hero image={img.hero} />
        <Marquee />
        <About image={img.about} />
        <Services />
        <Offers />
        <Bridal />
        <Gallery images={img.gallery} />
        <Process />
        <Reviews />
        <Tips />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
