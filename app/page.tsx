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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noida Cab Booking | Noida Taxi Service & Outstation Cabs",
  description:
    "Book reliable cabs and taxis in Noida for local, airport, outstation and one-way trips. Choose from Sedan, SUV and other cab options at affordable fares.",
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
      

      
    </>
  );
}
