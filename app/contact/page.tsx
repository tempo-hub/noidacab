import ContactPage from "@/components/legal/ContactPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact NoidaCab | Cab Booking & Customer Support",

  description:
    "Contact NoidaCab for cab bookings, Noida to Delhi taxis, airport transfers, local and outstation cabs. Get booking assistance and customer support.",

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}