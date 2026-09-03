import {
  ArrowRight,
  Clock3,
  IndianRupee,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
} from "lucide-react";

const fareOptions = [
  {
    title: "Local Sedan Taxi",
    icon: MapPin,
    description:
      "Book a sedan cab for point-to-point travel, meetings, shopping, appointments and local Noida travel.",
    price: "From ₹10/km",
    note: "Minimum fare may apply",
  },
  {
    title: "Airport Transfer",
    icon: Plane,
    description:
      "Comfortable sedan pickup and drop service from Noida to Delhi Airport and Jewar Airport.",
    price: "Get Best Fare",
    note: "Pickup & drop available",
  },
  {
    title: "One-Way Taxi",
    icon: Route,
    description:
      "Travel from Noida to Delhi, Gurgaon, Agra, Mathura, Meerut and other nearby cities.",
    price: "From ₹10/km",
    note: "Route-based pricing",
  },
  {
    title: "Outstation Sedan",
    icon: Clock3,
    description:
      "Hire a sedan for comfortable outstation journeys, family trips, business travel and sightseeing.",
    price: "Get Best Fare",
    note: "Flexible trip options",
  },
];

export default function SedanTaxiNoidaFare() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            <IndianRupee className="h-4 w-4" />
            Sedan Taxi Fare
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Affordable Sedan Taxi Fare in Noida
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Get comfortable sedan taxis in Noida at competitive rates. Choose
            local rides, airport transfers, one-way journeys or outstation
            travel according to your requirement.
          </p>
        </div>

        {/* Fare Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fareOptions.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                  <Icon className="h-5 w-5 text-amber-600" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-[84px] text-sm leading-6 text-slate-600">
                  {option.description}
                </p>

                {/* Price */}
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-lg font-bold text-slate-900">
                    {option.price}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {option.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Information */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <ShieldCheck className="h-5 w-5 text-green-600" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Transparent Sedan Taxi Pricing
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Your final fare can depend on the vehicle selected, pickup
                  location, destination, trip type, distance and applicable
                  tolls or parking charges. Confirm the fare before booking.
                </p>
              </div>
            </div>
          </div>

          <a
            href="tel:8377809809"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
          >
            <IndianRupee className="h-4 w-4" />
            Get Exact Fare
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

