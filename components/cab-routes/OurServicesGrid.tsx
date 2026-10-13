import Link from "next/link";
import {
  MapPin,
  Plane,
  Compass,
  Briefcase,
  Users,
  Route,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const serviceList = [
  {
    title: "Outstation Cabs & Taxi Routes",
    description:
      "Reliable one-way drops and round-trip highway taxis with experienced drivers. Flat per-km tariff and zero surge pricing.",
    icon: Route,
    tag: "Lowest Per-Km Rate",
    href: "/taxi-service-routes",
  },
  {
    title: "24×7 Airport Transfers",
    description:
      "Guaranteed on-time terminal pickups and drops to Delhi IGI Airport (T1, T2, T3), Jewar Airport, and Lucknow/Varanasi airports.",
    icon: Plane,
    tag: "Flight Delay Tracking",
    href: "/airport-service-routes",
  },
  {
    title: "Local Sightseeing & City Tours",
    description:
      "Full-day 8hr/80km and customized tour packages for Delhi Darshan, Agra Taj Mahal, Mathura-Vrindavan, and Ayodhya Ram Mandir.",
    icon: Compass,
    tag: "Custom Itineraries",
    href: "/local-sightseeing-routes",
  },
  {
    title: "Corporate & Executive Travel",
    description:
      "Premium chauffeur-driven vehicles for business meetings, conferences, employee commutes, and VIP delegations across NCR.",
    icon: Briefcase,
    tag: "GST Invoice Available",
    href: "/cab",
  },
  {
    title: "Luxury Tempo Travellers",
    description:
      "Spacious 12, 16, 20 & 24-seater air-conditioned luxury tempo travellers with pushback seats, perfect for pilgrimages and group tours.",
    icon: Users,
    tag: "Pushback AC Seats",
    href: "/tempo-traveller-in-noida",
  },
  {
    title: "One-Way Dedicated Cabs",
    description:
      "Pay only for the distance traveled on designated one-way corridors. Save up to 40% compared to traditional round-trip billing.",
    icon: MapPin,
    tag: "Save up to 40%",
    href: "/one-way-taxi-in-noida",
  },
];

interface Props {
  currentServiceSlug?: string;
}

export default function OurServicesGrid({ currentServiceSlug }: Props) {
  return (
    <section className="bg-white/95 py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Comprehensive Cab & Travel Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Tailored transportation services designed for daily commutes, outstation getaways,
            flight connections, and spiritual pilgrimages.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((item) => {
            const Icon = item.icon;
            const isCurrent = item.href.includes(currentServiceSlug || "xyz");

            return (
              <div
                key={item.title}
                className={`group relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isCurrent
                    ? "border-amber-500 bg-amber-50/40 shadow-md ring-2 ring-amber-500/20"
                    : "border-gray-200 bg-white hover:border-amber-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full bg-amber-100/80 px-3 py-1 text-xs font-bold text-amber-800">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition"
                  >
                    <span>Explore Route Services</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
