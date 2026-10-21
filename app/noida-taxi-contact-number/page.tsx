import type { Metadata } from "next";
import DynamicCityContactPage from "@/components/cab-routes/DynamicCityContactPage";
import { getCityDetails } from "@/lib/cityData";

export const metadata: Metadata = {
  title: "Noida Taxi Contact Number | 24x7 Cab Booking Helpline: 8377809809",
  description:
    "Call Noida Taxi Contact Number +91-8377809809 for immediate cab booking in Noida. Clean Dzire, Ertiga, Innova Crysta, and Tempo Travellers for local and outstation trips.",
  alternates: {
    canonical: "https://www.noidacab.com/noida-taxi-contact-number",
  },
  openGraph: {
    title: "Noida Taxi Contact Number - 24x7 Booking Helpline",
    description:
      "Instant cab booking in Noida. Call or WhatsApp +91-9818022687. Verified drivers, sanitized cars, fast 10-minute doorstep arrival.",
    url: "https://www.noidacab.com/noida-taxi-contact-number",
    siteName: "NoidaCab",
  },
};

export default function ContactNumberPage() {
  const cityInfo = getCityDetails("noida");
  return <DynamicCityContactPage city={cityInfo} />;
}
