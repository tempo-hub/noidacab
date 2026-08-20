import NoidaDelhiAbout from "@/components/routes/noida-to-delhi/NoidaDelhiAbout";
import NoidaDelhiBookingCTA from "@/components/routes/noida-to-delhi/NoidaDelhiBookingCTA";
import NoidaDelhiBookingGuide from "@/components/routes/noida-to-delhi/NoidaDelhiBookingGuide";
import NoidaDelhiCabListing from "@/components/routes/noida-to-delhi/NoidaDelhiCabListing";
import NoidaDelhiFAQs from "@/components/routes/noida-to-delhi/NoidaDelhiFAQs";
import NoidaDelhiFare from "@/components/routes/noida-to-delhi/NoidaDelhiFare";
import NoidaDelhiHero from "@/components/routes/noida-to-delhi/NoidaDelhiHero";
import NoidaDelhiPickupLocations from "@/components/routes/noida-to-delhi/NoidaDelhiPickupLocations";
import NoidaDelhiRatings from "@/components/routes/noida-to-delhi/NoidaDelhiRatings";
import NoidaDelhiRelatedServices from "@/components/routes/noida-to-delhi/NoidaDelhiRelatedServices";
import NoidaDelhiRouteInfo from "@/components/routes/noida-to-delhi/NoidaDelhiRouteInfo";
import NoidaDelhiTaxiOptions from "@/components/routes/noida-to-delhi/NoidaDelhiTaxiOptions";
import NoidaDelhiTravelGuide from "@/components/routes/noida-to-delhi/NoidaDelhiTravelGuide";
import NoidaDelhiVehicleComparison from "@/components/routes/noida-to-delhi/NoidaDelhiVehicleComparison";
import NoidaDelhiWhyBook from "@/components/routes/noida-to-delhi/NoidaDelhiWhyBook";


export default function NoidaToDelhiTaxiPage() {
  return (
    <main>
      <NoidaDelhiHero />

      <NoidaDelhiCabListing />

      <NoidaDelhiBookingGuide />

      <NoidaDelhiRatings />

      <NoidaDelhiWhyBook />

      <NoidaDelhiAbout />

      <NoidaDelhiFare />

      <NoidaDelhiTaxiOptions />

      <NoidaDelhiVehicleComparison />

      <NoidaDelhiTravelGuide />

      <NoidaDelhiPickupLocations />

      <NoidaDelhiRouteInfo />

      <NoidaDelhiRelatedServices />

      <NoidaDelhiFAQs />

      <NoidaDelhiBookingCTA />

      {/* Next sections will be added here */}
    </main>
  );
}