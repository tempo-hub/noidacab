import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import PopularTaxiRoutes from "@/components/taxi-types/PopularTaxiRoutes";
import TaxiBookingGuide from "@/components/taxi-types/TaxiBookingGuide";
import TaxiComparison from "@/components/taxi-types/TaxiComparison";
import TaxiTypesCTA from "@/components/taxi-types/TaxiTypesCTA";
import TaxiTypesGrid from "@/components/taxi-types/TaxiTypesGrid";
import TaxiTypesHero from "@/components/taxi-types/TaxiTypesHero";
import TaxiTypesOverview from "@/components/taxi-types/TaxiTypesOverview";

export default function TaxiTypesPage() {
  return (
    <main>
      <TaxiTypesHero />

      <TaxiTypesOverview />

      <TaxiTypesGrid />

      <TaxiComparison />

      <TaxiBookingGuide />

      <PopularTaxiRoutes />

      <Testimonials />

      <FAQ />

      <TaxiTypesCTA />
    </main>
  );
}