import {
  BadgeCheck,
  Clock3,
  IndianRupee,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Verified Drivers",
    description:
      "Travel with professional drivers familiar with Noida, nearby cities and major travel routes.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Fares",
    description:
      "Choose practical sedan options at competitive rates with fare details confirmed before your trip.",
  },
  {
    icon: Clock3,
    title: "On-Time Pickup",
    description:
      "Schedule your pickup according to your travel requirement for local, airport and outstation journeys.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Cars",
    description:
      "Choose from clean, air-conditioned sedan options designed for comfortable everyday travel.",
  },
  {
    icon: MapPinned,
    title: "Noida-Wide Pickup",
    description:
      "Book a sedan from major Noida sectors, residential areas, business hubs and nearby locations.",
  },
  {
    icon: Users,
    title: "Ideal for Small Groups",
    description:
      "Sedans are a practical choice for individuals, couples, families and small groups of up to 4 passengers.",
  },
];

export default function SedanTaxiNoidaWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
            <ShieldCheck className="h-4 w-4" />
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Book a Sedan Taxi in Noida With Us?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            From convenient pickups to comfortable cars and professional
            drivers, we make sedan travel from Noida simple and reliable.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.08] sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/80 bg-white/80 p-5 sm:p-6 md:flex-row">
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Ready to book your sedan taxi?
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Tell us your pickup location and travel requirement.
            </p>
          </div>

          <a
            href="tel:8377809809"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400 sm:w-auto"
          >
            <PhoneCall className="h-4 w-4" />
            Call 8377809809
          </a>
        </div>
      </div>
    </section>
  );
}
