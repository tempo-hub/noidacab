
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CarFront,
  Clock3,
  MapPin,
  Plane,
  Route,
} from "lucide-react";

import { routes } from "@/data/routes/taxiroutes";

const tripTypes = [
  {
    icon: MapPin,
    title: "Local Sedan Taxi",
    description:
      "Book a sedan for local travel across Noida for shopping, meetings, appointments and daily transportation.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Travel comfortably from Noida to Delhi Airport, Jewar Airport and other airport destinations.",
  },
  {
    icon: Route,
    title: "One-Way Taxi",
    description:
      "Book a one-way sedan for convenient travel from Noida to nearby cities without booking a return trip.",
  },
  {
    icon: Clock3,
    title: "Round Trip",
    description:
      "Hire a sedan for return journeys, family visits, meetings, sightseeing and planned travel.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    description:
      "Comfortable sedan transportation for meetings, business visits, employee travel and corporate requirements.",
  },
  {
    icon: CarFront,
    title: "Outstation Taxi",
    description:
      "Choose a sedan for comfortable outstation journeys from Noida to popular destinations across North India.",
  },
];

export default function SedanTaxiNoidaTripTypes() {
  const noidaRoutes = routes.filter(
    (route) => route.from.slug === "noida"
  );

  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <CarFront className="h-4 w-4" />
            Sedan Trip Options
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sedan Taxi for Every Type of Trip
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            From quick local rides to airport transfers and long-distance
            journeys, choose the sedan taxi service that matches your travel
            requirement.
          </p>
        </div>

        {/* Trip Types */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tripTypes.map((trip) => {
            const Icon = trip.icon;

            return (
              <div
                key={trip.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {trip.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {trip.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Popular Routes */}
        {noidaRoutes.length > 0 && (
          <div className="mt-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-600" />

                  <h3 className="text-2xl font-bold text-slate-900">
                    Popular Routes From Noida
                  </h3>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Book a sedan taxi from Noida to popular nearby destinations.
                </p>
              </div>
            </div>

            {/* Routes Grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {noidaRoutes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/${route.slug}-sedan-taxi`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:border-amber-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {route.from.name} to {route.to.name}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                        <span>{route.distance}</span>

                        <span className="text-slate-300">•</span>

                        <span>{route.duration}</span>
                      </div>
                    </div>

                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-600" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl bg-slate-950 p-6 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Planning a sedan trip from Noida?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Share your pickup location, destination and travel date to
                check the available sedan options and applicable fare.
              </p>
            </div>

            <a
              href="tel:8377809809"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
            >
              <CarFront className="h-4 w-4" />
              Book Your Sedan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

