import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Clock3,
  Landmark,
  MapPin,
  Route,
  ShoppingBag,
} from "lucide-react";

const sightseeingPlaces = [
  {
    icon: Landmark,
    title: "India Gate",
    description:
      "Visit one of Delhi's most iconic landmarks with a comfortable private taxi from Noida.",
    href: "/noida-to-india-gate-taxi",
  },
  {
    icon: Landmark,
    title: "Red Fort",
    description:
      "Explore Old Delhi and the historic Red Fort with convenient pickup and drop service.",
    href: "/noida-to-red-fort-taxi",
  },
  {
    icon: Building2,
    title: "Akshardham Temple",
    description:
      "Travel from Noida to Akshardham Temple comfortably with a private cab.",
    href: "/noida-to-akshardham-taxi",
  },
  {
    icon: Camera,
    title: "Delhi Sightseeing",
    description:
      "Cover popular attractions across Delhi with a private taxi for flexible sightseeing.",
    href: "/noida/delhi-sightseeing-taxi",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Trips",
    description:
      "Book a taxi for shopping trips to popular malls, markets and commercial areas.",
    href: "/noida/shopping-taxi",
  },
  {
    icon: Route,
    title: "Full-Day Local Cab",
    description:
      "Hire a taxi for multiple stops, meetings, sightseeing or personal travel throughout the day.",
    href: "/noida/full-day-taxi",
  },
];

const benefits = [
  "Flexible hourly or full-day bookings",
  "Multiple stops during your trip",
  "Private car with professional driver",
  "Pickup and drop from your preferred location",
];

export default function LocalSightseeing() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className=" max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
            <Camera className="h-3.5 w-3.5" />
            Local Travel
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Local Sightseeing Taxi in Noida & Delhi NCR
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Hire a private taxi for sightseeing, shopping, family outings,
            meetings and full-day local travel. Plan your stops freely and
            travel at your own pace.
          </p>
        </div>

        {/* Main Feature */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-28px_rgba(15,23,42,0.18)] lg:mt-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left */}
            <div className="p-5 sm:p-7 lg:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Flexible Local Travel
                  </p>

                  <h3 className="mt-0.5 text-xl font-bold text-slate-900">
                    Explore More with a Private Taxi
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-600">
                Whether you're planning a family day out, visiting Delhi
                landmarks, attending multiple meetings or simply exploring
                the city, a private taxi gives you the flexibility to travel
                without depending on public transport.
              </p>

              {/* Benefits */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

                    <span className="text-sm leading-5 text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/noida/sightseeing-taxi"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white transition hover:bg-amber-800"
                >
                  Book Sightseeing Taxi
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="tel:8377809809"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-amber-500"
                >
                  Call for Booking
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="border-t border-slate-200 bg-slate-50/70 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-9">
              <p className="text-sm font-semibold text-slate-900">
                Ideal for
              </p>

              <div className="mt-5 space-y-3">
                <TravelUse
                  icon={Camera}
                  title="Sightseeing"
                  description="Visit multiple attractions in one trip."
                />

                <TravelUse
                  icon={ShoppingBag}
                  title="Shopping & Errands"
                  description="Travel comfortably between markets and malls."
                />

                <TravelUse
                  icon={Building2}
                  title="Business Travel"
                  description="Cover meetings across Noida and Delhi NCR."
                />

                <TravelUse
                  icon={Clock3}
                  title="Full-Day Booking"
                  description="Keep the taxi with you for flexible travel."
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-amber-600" />

                  <span className="text-sm font-semibold text-slate-800">
                    Flexible travel plans
                  </span>
                </div>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  Choose the vehicle and duration according to your travel
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Places Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {sightseeingPlaces.map((place) => {
            const Icon = place.icon;

            return (
              <Link
                key={place.title}
                href={place.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.22)] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-amber-50">
                    <Icon className="h-5 w-5 text-slate-700 transition-colors group-hover:text-amber-600" />
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-amber-600" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {place.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {place.description}
                </p>

                <div className="mt-auto pt-5 text-sm font-semibold text-slate-700 transition-colors group-hover:text-amber-600">
                  Explore Service
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Travel Use
--------------------------------- */

function TravelUse({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
        <Icon className="h-4 w-4 text-slate-600" />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-900">
          {title}
        </h4>

        <p className="mt-0.5 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}