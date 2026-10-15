import BookingForm from "@/components/bookingform/BookingForm";
import AboutNoidaCab from "@/components/home/AboutNoidaCab";
import FAQ from "@/components/home/FAQ";
import Fleet from "@/components/home/Fleet";
import HomeClosing from "@/components/home/HomeClosing";
import HowItWorks from "@/components/home/HowItWorks";
import PopularDestinations from "@/components/home/PopularDestinations";
import ServiceAreas from "@/components/home/ServiceAreas";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export default function BookingPage() {
  return (
    <main>
      <BookingForm />
      <AboutNoidaCab />
      <Services />
      <Fleet />
      <ServiceAreas />
      <HowItWorks />
      <PopularDestinations />
      <Testimonials />
      <FAQ />
      <HomeClosing />
    </main>
  );
}