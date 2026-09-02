import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Route,
  ShieldCheck,
} from "lucide-react";

const destinations = [
  {
    city: "Agra",
    route: "Noida → Agra",
    distance: "Approx. 200 km",
    description:
      "Travel from Noida to Agra comfortably for Taj Mahal visits, family trips and weekend getaways.",
    href: "/noida-to-agra-taxi",
  },
  {
    city: "Jaipur",
    route: "Noida → Jaipur",
    distance: "Approx. 280 km",
    description:
      "Book a comfortable outstation taxi from Noida to Jaipur for business, holidays and family travel.",
    href: "/noida-to-jaipur-taxi",
  },
  {
    city: "Haridwar",
    route: "Noida → Haridwar",
    distance: "Approx. 220 km",
    description:
      "Enjoy a convenient road journey from Noida to Haridwar with flexible pickup and drop options.",
    href: "/noida-to-haridwar-taxi",
  },
  {
    city: "Mathura",
    route: "Noida → Mathura",
    distance: "Approx. 170 km",
    description:
      "Travel to Mathura and nearby religious destinations with a comfortable private taxi.",
    href: "/noida-to-mathura-taxi",
  },
  {
    city: "Vrindavan",
    route: "Noida → Vrindavan",
    distance: "Approx. 180 km",
    description:
      "Plan a comfortable family or pilgrimage trip from Noida to Vrindavan by private cab.",
    href: "/noida-to-vrindavan-taxi",
  },
  {
    city: "Lucknow",
    route: "Noida → Lucknow",
    distance: "Approx. 500 km",
    description:
      "Travel between Noida and Lucknow with spacious cars suitable for long-distance journeys.",
    href: "/noida-to-lucknow-taxi",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
  },
  {
    icon: CarFront,
    title: "Comfortable Cars",
  },
  {
    icon: Clock3,
    title: "Flexible Pickup",
  },
];

export default function OutstationTaxi() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
              <Route className="h-3.5 w-3.5" />
              Outstation Travel
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Outstation Taxi Service from Noida
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Travel from Noida to popular cities across North India in a
              comfortable private taxi. Choose one-way or round-trip travel
              for family trips, business travel, sightseeing and weekend
              getaways.
            </p>
          </div>

          <Link
            href="/noida/outstation-taxi"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Explore Outstation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Icon className="h-4 w-4 text-amber-600" />
                </div>

                <span className="text-sm font-semibold text-amber-600">
                  {benefit.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Destination Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.city}
              destination={destination}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70">
          <div className="flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-7">
            
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <MapPin className="h-5 w-5 text-amber-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Planning a different destination?
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Tell us your pickup and destination. We can help arrange
                  an outstation taxi based on your travel requirements.
                </p>
              </div>
            </div>

            <a
              href="tel:8377809809"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Destination Card
--------------------------------- */

function DestinationCard({
  destination,
}: {
  destination: {
    city: string;
    route: string;
    distance: string;
    description: string;
    href: string;
  };
}) {
  return (
    <Link
      href={destination.href}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_-22px_rgba(15,23,42,0.22)] sm:p-6"
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-amber-50">
          <MapPin className="h-5 w-5 text-slate-700 transition-colors group-hover:text-amber-600" />
        </div>

        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
          {destination.distance}
        </span>
      </div>

      {/* Route */}
      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-amber-600">
        {destination.route}
      </p>

      <h3 className="mt-1.5 text-xl font-bold text-slate-900">
        Taxi to {destination.city}
      </h3>

      {/* Description */}
      <p className="mt-2.5 text-sm leading-6 text-slate-600">
        {destination.description}
      </p>

      {/* Features */}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-slate-500" />

          <span className="text-xs font-medium text-slate-600">
            One-way
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-slate-500" />

          <span className="text-xs font-medium text-slate-600">
            Round-trip
          </span>
        </div>
      </div>

      {/* Link */}
      <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-700 transition-colors group-hover:text-amber-600">
        View Route
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}