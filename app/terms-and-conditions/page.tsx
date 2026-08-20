import type { Metadata } from "next";

import LegalHero from "@/components/legal/LegalHero";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | NoidaCab",
  description:
    "Read the terms and conditions governing taxi bookings, fares, vehicle availability, cancellations and use of the NoidaCab website.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <LegalHero
        type="terms"
        title="Terms & Conditions"
        description="Please read these terms carefully before using the NoidaCab website or booking a taxi service."
      />

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
            <strong>Last Updated:</strong> August 20, 2026
          </div>

          <LegalSection title="1. Introduction">
            <p>
              These Terms & Conditions govern your use of the NoidaCab
              website and the taxi booking services made available through
              the platform.
            </p>

            <p>
              By accessing the website, requesting a booking or using a
              service arranged through NoidaCab, you agree to comply with
              these terms.
            </p>
          </LegalSection>

          <LegalSection title="2. About the Service">
            <p>
              NoidaCab provides an online platform for discovering and
              requesting taxi and transportation services in Noida and
              nearby destinations.
            </p>

            <p>
              Depending on the booking, the transportation service may be
              fulfilled by NoidaCab, an affiliated operator, or an
              independent driver or transportation partner.
            </p>
          </LegalSection>

          <LegalSection title="3. Booking">
            <p>
              Customers must provide accurate pickup, destination, date,
              time, passenger and contact information when requesting a
              booking.
            </p>

            <p>
              A booking should not be considered confirmed unless NoidaCab
              or the applicable service provider has confirmed the booking
              through the available communication channel.
            </p>
          </LegalSection>

          <LegalSection title="4. Vehicle Availability">
            <p>
              Vehicle availability may vary depending on date, time,
              location and demand.
            </p>

            <p>
              A vehicle displayed on the website does not necessarily
              guarantee availability for every requested booking.
            </p>

            <p>
              Where the selected vehicle is unavailable, an alternative
              vehicle may be offered subject to availability and customer
              acceptance.
            </p>
          </LegalSection>

          <LegalSection title="5. Vehicle Information">
            <p>
              Vehicle specifications such as seating capacity, luggage
              capacity, features, images and category are provided for
              general information.
            </p>

            <p>
              Actual vehicle appearance, model year, colour and specific
              equipment may vary from the information displayed online.
            </p>
          </LegalSection>

          <LegalSection title="6. Fares and Pricing">
            <p>
              Prices displayed on the website are indicative unless
              explicitly identified as a final booking price.
            </p>

            <p>
              The final amount may depend on the selected vehicle, route,
              distance, trip type, waiting time, additional stops, tolls,
              parking charges, taxes or other applicable charges.
            </p>

            <p>
              Customers should review the applicable fare and charges before
              confirming a booking.
            </p>
          </LegalSection>

          <LegalSection title="7. One-Way Trips">
            <p>
              A one-way booking generally covers transportation from the
              agreed pickup location to the agreed destination.
            </p>

            <p>
              Additional waiting, stops, route changes or other requested
              services may result in additional charges where applicable.
            </p>
          </LegalSection>

          <LegalSection title="8. Round Trips">
            <p>
              Round-trip bookings may operate under a minimum-kilometre
              package or other agreed booking terms rather than a simple
              point-to-point fare.
            </p>

            <p>
              The applicable package, duration, distance and additional
              charges should be confirmed before the journey.
            </p>
          </LegalSection>

          <LegalSection title="9. Cancellation and Changes">
            <p>
              Cancellation and modification conditions may depend on the
              booking type, vehicle, travel date, timing and service
              provider.
            </p>

            <p>
              Any cancellation charges applicable to a confirmed booking
              will be communicated through the applicable booking channel.
            </p>

            <p>
              Customers should contact NoidaCab as soon as possible if they
              need to change or cancel a booking.
            </p>
          </LegalSection>

          <LegalSection title="10. Customer Responsibilities">
            <p>
              Customers are responsible for providing correct booking
              information and being available at the agreed pickup location.
            </p>

            <p>
              Customers must behave respectfully toward drivers and must
              comply with applicable laws and reasonable safety requirements
              during the journey.
            </p>
          </LegalSection>

          <LegalSection title="11. Luggage and Personal Belongings">
            <p>
              Customers should ensure that their luggage is appropriate for
              the selected vehicle's stated capacity.
            </p>

            <p>
              Customers remain responsible for personal belongings carried
              during the journey. NoidaCab should be contacted promptly if
              an item is left behind in a vehicle.
            </p>
          </LegalSection>

          <LegalSection title="12. Travel Time">
            <p>
              Estimated travel times shown on the website are approximate.
              Actual travel time may vary because of traffic, weather,
              road closures, diversions, vehicle restrictions and other
              conditions beyond the service provider's control.
            </p>
          </LegalSection>

          <LegalSection title="13. Website Information">
            <p>
              We make reasonable efforts to keep route, vehicle, fare and
              service information accurate. However, information may change
              without prior notice.
            </p>

            <p>
              Website content should not be treated as a guarantee of a
              particular vehicle, route, travel time or price unless
              expressly confirmed for a booking.
            </p>
          </LegalSection>

          <LegalSection title="14. Prohibited Use">
            <p>
              You must not use the website for unlawful activities, fraud,
              impersonation, automated abuse, unauthorised access or any
              activity that could interfere with the operation or security
              of the website.
            </p>
          </LegalSection>

          <LegalSection title="15. Third-Party Services">
            <p>
              Some transportation services may be fulfilled by third-party
              drivers, fleet operators or service partners. Their applicable
              operational requirements may also apply to the journey.
            </p>
          </LegalSection>

          <LegalSection title="16. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, NoidaCab will not
              be responsible for delays, cancellations, route changes,
              traffic conditions or events outside its reasonable control.
            </p>

            <p>
              Nothing in these terms is intended to exclude or limit any
              liability that cannot legally be excluded or limited.
            </p>
          </LegalSection>

          <LegalSection title="17. Changes to These Terms">
            <p>
              We may update these Terms & Conditions when our services,
              website or legal requirements change. Updated terms will be
              published on this page with a revised date.
            </p>
          </LegalSection>

          <LegalSection title="18. Governing Law">
            <p>
              These terms are intended to be governed by the applicable laws
              of India. Any dispute will be subject to the jurisdiction
              applicable under Indian law.
            </p>
          </LegalSection>

          <LegalSection title="19. Contact">
            <p>
              If you have questions regarding these Terms & Conditions or
              your booking, please contact NoidaCab using the contact
              details provided on the website.
            </p>
          </LegalSection>

        </div>
      </section>
    </main>
  );
}