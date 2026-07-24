import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/Portfolio";
import Price from "@/components/sections/Price";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <WhyChooseUs />
      <Portfolio />
      <Price />
      <Reviews />
      <FAQ />
      <Booking />
      <Location />
      <FinalCTA />
    </>
  );
}
