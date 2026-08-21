import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  MapPin,
  Route,
} from "lucide-react";
import WhyChooseCards from "@/components/home/WhyChooseCards";
import FAQ from "@/components/home/FAQ";
import { BookingCTA } from "@/components/cab-page";
import CTASection from "@/components/home/CTA";

const oneWayRoutes = [
  {
    from: "Noida",
    to: "Delhi",
    slug: "/noida-to-delhi-one-way-taxi",
    distance: "35–45 km",
    time: "1–2 Hours",
  },
  {
    from: "Noida",
    to: "Gurgaon",
    slug: "/noida-to-gurgaon-one-way-taxi",
    distance: "55–65 km",
    time: "1.5–2.5 Hours",
  },
  {
    from: "Noida",
    to: "Agra",
    slug: "/noida-to-agra-one-way-taxi",
    distance: "165–180 km",
    time: "3–4 Hours",
  },
  {
    from: "Noida",
    to: "Jaipur",
    slug: "/noida-to-jaipur-one-way-taxi",
    distance: "280–300 km",
    time: "5–6 Hours",
  },
  {
    from: "Noida",
    to: "Lucknow",
    slug: "/noida-to-lucknow-one-way-taxi",
    distance: "500–550 km",
    time: "8–10 Hours",
  },
];

export const metadata = {
  title: "One Way Cab from Noida | NoidaCab",
  description:
    "Book affordable one way cabs from Noida to Delhi, Gurgaon, Agra, Jaipur, Lucknow and other cities.",
};

export default function OneWayPage() {
  return (
    <main className="min-h-screen bg-gray-50 ">
      {/* Hero */}
      <section className="py-18 bg-gradient-to-br  from-amber-400 via-amber-600 to-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
              <CarFront className="h-7 w-7 text-amber-600" />
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-black">
              Noida One Way Cab
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              One Way Cab from Noida
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-800">
              Book a comfortable and reliable one-way taxi from Noida to
              popular cities with professional drivers and transparent fares.
            </p>
          </div>
        </div>
      </section>

      {/* Route Section */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Popular Routes
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Book a One Way Cab from Noida
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Select your destination to explore fares, vehicles and booking
              options.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {oneWayRoutes.map((route) => (
              <Link
                key={route.slug}
                href={route.slug}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                {/* Route */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                      <MapPin className="h-5 w-5 text-amber-600" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        One Way Cab
                      </p>

                      <h3 className="text-lg font-bold text-gray-900">
                        {route.from}{" "}
                        <span className="text-amber-600">→</span>{" "}
                        {route.to}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-amber-600" />
                </div>

                {/* Details */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-50 p-3">
                    <div className="flex items-center gap-2">
                      <Route className="h-4 w-4 text-amber-600" />

                      <span className="text-xs text-gray-500">
                        Distance
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {route.distance}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-3">
                    <div className="flex items-center gap-2">
                      <CarFront className="h-4 w-4 text-amber-600" />

                      <span className="text-xs text-gray-500">
                        Travel
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {route.time}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold text-gray-700">
                    View Route
                  </span>

                  <span className="text-sm font-semibold text-amber-600">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <WhyChooseCards />
      </section>
      <section>
        <FAQ />
      </section>

      <section>
        <CTASection />
      </section>
    </main>
  );
}