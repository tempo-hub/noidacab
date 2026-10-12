import AboutNoidaCab from "@/components/home/AboutNoidaCab";
import FAQ from "@/components/home/FAQ";
import FareAndCabGuide from "@/components/home/FareAndCabGuide";
import Fleet from "@/components/home/Fleet";
import HomeClosing from "@/components/home/HomeClosing";
import HomeUseCases from "@/components/home/HomeUseCases";
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
  metadataBase: new URL("https://www.noidacab.com"),

  title: "Taxi Service in Noida | 24x7 Cab Booking – NoidaCab",

  description:
    "Book a taxi in Noida for local travel, airport transfers, Delhi trips and outstation journeys. Choose from sedan, SUV and premium cabs with professional drivers. Call 8377809809.",

  keywords: [
    "taxi service in Noida",
    "cab service in Noida",
    "taxi booking in Noida",
    "online cab booking Noida",
    "24x7 taxi service in Noida",
    "Noida cab booking",
    "local taxi in Noida",
    "Noida to Delhi taxi",
    "Noida to Delhi cab service",
    "outstation taxi from Noida",
    "airport taxi in Noida",
    "Delhi airport cab from Noida",
    "one way taxi from Noida",
    "round trip taxi in Noida",
    "sedan taxi in Noida",
    "SUV taxi in Noida",
    "Innova Crysta taxi in Noida",
    "Ertiga taxi in Noida",
    "Dzire taxi in Noida",
    "Tempo Traveller in Noida",
    "corporate cab service in Noida",
    "family taxi service in Noida",
    "affordable taxi service in Noida",
    "Noida taxi fare",
    "NoidaCab",
  ],

  alternates: {
    canonical: "https://www.noidacab.com/",
  },

  openGraph: {
    title: "NoidaCab – Reliable Taxi & Cab Service in Noida",
    description:
      "Local cabs, airport transfers, Noida to Delhi taxi, outstation trips and tempo travellers. Book in 1 minute.",
    url: "https://www.noidacab.com/",
    siteName: "NoidaCab",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Taxi Service in Noida | 24x7 Cab Booking – NoidaCab",
    description:
      "Book taxis in Noida for local trips, airport transfers, Delhi travel and outstation journeys. Call NoidaCab at 8377809809.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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

      <FareAndCabGuide />
      
      <Services />

      

      <Fleet />

      <ServiceAreas />

      <HowItWorks />

      <PopularDestinations />

      <HomeUseCases />

      <WhyChooseCards />

      

      <Testimonials />

      <FAQ />

      <HomeClosing />
      

      <BottomOffer />
    </>
  );
}
