import AboutNoidaCab from "@/components/home/AboutNoidaCab";
import CTASection from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Fleet from "@/components/home/Fleet";
import Hero from "@/components/home/Hero";
import HeroOne from "@/components/home/HeroOne";
import HeroTwo from "@/components/home/HeroTwo";
import HowItWorks from "@/components/home/HowItWorks";
import PopularDestinations from "@/components/home/PopularDestinations";
import PopularNoidaRoutes from "@/components/home/PopularNoidaRoutes";
import ServiceAreas from "@/components/home/ServiceAreas";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";
import WhyChooseCards from "@/components/home/WhyChooseCards";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";

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
