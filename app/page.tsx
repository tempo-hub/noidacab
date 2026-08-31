import AboutNoidaCab from "@/components/home/AboutNoidaCab";
import FAQ from "@/components/home/FAQ";
import Fleet from "@/components/home/Fleet";
import HeroTwo from "@/components/home/HeroTwo";
import HowItWorks from "@/components/home/HowItWorks";
import PopularDestinations from "@/components/home/PopularDestinations";
import PopularNoidaRoutes from "@/components/home/PopularNoidaRoutes";
import ServiceAreas from "@/components/home/ServiceAreas";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseCards from "@/components/home/WhyChooseCards";
import BottomOffer from "@/components/layout/BottomOffer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Noida Cab Online | Reliable Taxi Service & Airport Cabs",
  description:
    "Book a Noida cab online for local, airport & outstation trips. Get reliable cabs, professional drivers and affordable fares. Book your ride now!",
};

export default function Home() {
  return (
    <>
      
      <HeroTwo />

      {/* Hero overlap spacing */}
      {/* <div className="">
        <WhyChoose />
      </div> */}
      {/* <CTASection /> */}

      <AboutNoidaCab />

      <PopularNoidaRoutes />
      
      <Services />

      

      <Fleet />

      <ServiceAreas />

      <HowItWorks />

      <PopularDestinations />

      <WhyChooseCards />

      <Testimonials />

      <FAQ />
      

      <BottomOffer />
    </>
  );
}
