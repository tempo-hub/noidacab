import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Luggage,
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";

const airportServices = [
  {
    title: "Noida to Delhi Airport",
    description:
      "Book a comfortable taxi from Noida to Indira Gandhi International Airport for domestic and international flights.",
    href: "/noida-to-delhi-airport-taxi",
  },
  {
    title: "Airport Pickup",
    description:
      "Pre-book your airport pickup and travel comfortably from Delhi Airport to your home, hotel or office in Noida.",
    href: "/delhi-airport-to-noida-taxi",
  },
  {
    title: "Airport Drop",
    description:
      "Reach the airport comfortably and on time with a pre-booked taxi from any location across Noida.",
    href: "/noida/airport-drop-taxi",
  },
];

const benefits = [
  "Professional drivers",
  "Clean & comfortable cars",
  "24/7 airport transfers",
  "Flexible pickup locations",
];

export default function AirportTaxiService() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Intro */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
              <Plane className="h-3.5 w-3.5" />
              Airport Transfers
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Noida Airport Taxi Service
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Make your airport journey simple and comfortable with a
              pre-booked taxi from Noida to Delhi Airport. We provide
              convenient airport pickup and drop services throughout Noida.
            </p>

            {/* Benefits */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />

                  <span className="text-sm font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/noida/airport-taxi"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Book Airport Taxi
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:8377809809"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-amber-500"
              >
                Call for Booking
              </a>
            </div>
          </div>

          {/* Right - Airport Info Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)] sm:p-6 lg:p-7">

            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-slate-100" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full border border-slate-100" />

            <div className="relative">

              {/* Card Header */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                  <Plane className="h-6 w-6 text-amber-600" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Delhi Airport Transfers
                  </h3>

                  <p className="mt-0.5 text-sm text-slate-500">
                    Convenient travel between Noida & airport
                  </p>
                </div>
              </div>

              {/* Route */}
              <div className="relative mt-7">

                <RoutePoint
                  icon={<MapPin className="h-4 w-4" />}
                  title="Pickup"
                  value="Any location in Noida"
                />

                {/* Connecting Line */}
                <div className="absolute left-[17px] top-9 h-10 border-l border-dashed border-slate-300" />

                <RoutePoint
                  icon={<Plane className="h-4 w-4" />}
                  title="Destination"
                  value="Delhi Airport / Jewar Airport / Indira Gandhi International Airport / "
                />
              </div>

              {/* Features */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <InfoItem
                  icon={Clock3}
                  title="24/7"
                  subtitle="Availability"
                />

                <InfoItem
                  icon={Luggage}
                  title="Spacious"
                  subtitle="Luggage Space"
                />

                <InfoItem
                  icon={ShieldCheck}
                  title="Verified"
                  subtitle="Drivers"
                />

                <InfoItem
                  icon={MapPin}
                  title="Door-to-door"
                  subtitle="Pickup & Drop"
                />
              </div>

              {/* Bottom */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-xs leading-5 text-slate-500">
                  Pre-book your airport taxi to avoid last-minute travel
                  hassles and enjoy a smooth ride from pickup to drop-off.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {airportServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.2)] sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-amber-50">
                  <Plane className="h-4.5 w-4.5 text-slate-700 transition-colors group-hover:text-amber-600" />
                </div>

                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-600" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <div className="mt-4 text-sm font-semibold text-slate-700 transition-colors group-hover:text-amber-600">
                View Service
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Route Point
--------------------------------- */

function RoutePoint({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="relative z-10 flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-amber-600 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-amber-600">
          {title}
        </p>

        <p className="mt-0.5 text-sm font-semibold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

/* --------------------------------
   Info Item
--------------------------------- */

function InfoItem({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <Icon className="h-4 w-4 text-amber-600" />

      <p className="mt-2 text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-0.5 text-xs text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}