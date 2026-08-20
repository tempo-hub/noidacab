import ContactPage from "@/components/legal/ContactPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us | Chiku Cabs",
  description:
    "Contact Chiku Cabs for taxi bookings, Noida to Delhi cabs, airport transfers, local taxi services and customer support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}