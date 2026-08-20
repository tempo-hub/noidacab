import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  RefreshCcw,
} from "lucide-react";

const tripTypes = [
  {
    title: "One Way Cab: Noida to Delhi",
    description:
      "A one way cab from Noida to Delhi is good for anyone who is heading to a single destination, a flight, a train, or a meeting, without needing the car to wait around or make the return trip. You pay only for the distance covered, and the driver drops you exactly where you need to be.",

    icon: ArrowRight,

    highlights: [
      "Ideal for a single destination",
      "Suitable for flights and train journeys",
      "No return journey required",
      "Pay for the distance covered",
    ],

    linkText: "Book One Way Cab",
    href: "/book-cab",
  },

  {
    title: "Round Trip Cab: Noida to Delhi",
    description:
      "A round trip cab works better when your day in Delhi includes multiple stops, a few hours of waiting, or a return journey you'd rather not book separately later. The car stays with you for the full trip, and billing follows a minimum kilometer package rather than a single point-to-point fare.",

    icon: RefreshCcw,

    highlights: [
      "Ideal for return journeys",
      "Multiple stops during the day",
      "Car stays with you",
      "Minimum kilometer package",
    ],

    linkText: "Book Round Trip",
    href: "/book-cab",
  },
];

export default function NoidaDelhiTripTypes() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-amber-600">
            Choose Your Trip Type
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            One Way or Round Trip Cab from Noida to Delhi
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose the trip type according to your travel plans. A one way
            cab is suitable for a direct drop, while a round trip works
            better when you need the vehicle for multiple stops or a return
            journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {tripTypes.map((trip) => {
            const Icon = trip.icon;

            return (
              <article
                key={trip.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                  {trip.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {trip.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {trip.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

                      <span className="text-sm text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    {trip.title.startsWith("One Way") ? (
                      <>
                        <MapPin className="h-4 w-4 text-amber-600" />
                        Direct point-to-point journey
                      </>
                    ) : (
                      <>
                        <Clock3 className="h-4 w-4 text-amber-600" />
                        Vehicle available for the trip
                      </>
                    )}
                  </div>

                  <a
                    href={trip.href}
                    className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
                  >
                    {trip.linkText}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}