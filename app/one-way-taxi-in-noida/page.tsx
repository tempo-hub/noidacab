import type { Metadata } from "next";
import { getCityDetails } from "@/lib/cityData";
import DynamicOneWayTaxiPage from "@/components/cab-routes/DynamicOneWayTaxiPage";

export const metadata: Metadata = {
  title: "One Way Taxi in Noida - NoidaCab @ ₹10/KM | Pay One Side Fare",
  description:
    "Book affordable one-way cab service from Noida to Delhi, Gurgaon, Agra, Jaipur, Lucknow, Dehradun & Chandigarh. Pay only one-side fare, zero return toll charges. Call 8377809809.",
  keywords: [
    "one way taxi in Noida",
    "one way cab Noida",
    "one way cab from Noida to Delhi",
    "one way taxi Noida to Agra",
    "one way taxi Noida to Jaipur",
    "one way cab Noida to Lucknow",
    "outstation one way cab Noida",
    "drop taxi Noida",
  ],
  alternates: {
    canonical: "https://www.noidacab.com/one-way-taxi-in-noida",
  },
  openGraph: {
    title: "One Way Taxi in Noida | Flat One-Side Rates - NoidaCab",
    description:
      "Save up to 40% with one-way cab booking in Noida. Pay only for one side. Verified chauffeurs, instant confirmation.",
    url: "https://www.noidacab.com/one-way-taxi-in-noida",
    siteName: "NoidaCab",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Way Taxi in Noida | NoidaCab",
    description:
      "Affordable one-way taxi services from Noida to all major North India cities.",
  },
};

export default function OneWayPage() {
  const city = getCityDetails("noida");
  return <DynamicOneWayTaxiPage city={city} />;
}