import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Luggage,
  MapPin,
  Palmtree,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleUseCases({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const isLargeGroup =
    vehicle.category === "Urbania" || vehicle.category === "Tempo Traveller";
  const isFamilyOrSUV =
    vehicle.category === "SUV" || isLargeGroup;

  const useCases = [
    {
      title: isLargeGroup ? "Group & Event Travel" : "Family Vacation & Outings",
      badge: isLargeGroup ? "Large Group" : "Family Pick",
      icon: Users,
      description: isLargeGroup
        ? `Accommodates ${vehicle.seats} passengers with ease, making it the premier option for wedding delegations, corporate retreats, and large family tours.`
        : `Spacious, child-safe seating layout providing maximum legroom and relaxation for family trips across Delhi NCR and hill stations.`,
      highlights: [
        `${vehicle.seats} pushback comfort seats`,
        "Spacious boot for family baggage",
        "Dual AC for multi-row cooling",
      ],
    },
    {
      title: "Airport Drops & Pickups",
      badge: "24x7 Express",
      icon: Plane,
      description: `Guaranteed on-time transit to IGI Airport (T1, T2, T3) and Hindon Airport. Generous cargo capacity ensures luggage travels safely.`,
      highlights: [
        `Fits up to ${vehicle.luggage} luggage bags`,
        "Flight tracking & zero cancellation",
        "Doorstep luggage assistance",
      ],
    },
    {
      title: "Corporate & Executive Travel",
      badge: "Business Class",
      icon: BriefcaseBusiness,
      description: `Punctual transportation tailored for executive transit, client site visits, office delegations, and all-day tech park meetings.`,
      highlights: [
        "Quiet, pristine smoke-free cabin",
        "Uniformed, courteous chauffeurs",
        "Instant GST billing invoices",
      ],
    },
    {
      title: isFamilyOrSUV ? "Outstation Road Trips" : "Noida City & Local Rentals",
      badge: isFamilyOrSUV ? "Highways" : "Daily Hire",
      icon: isFamilyOrSUV ? Compass : Building2,
      description: isFamilyOrSUV
        ? `Built for highway endurance on the Yamuna Expressway, Agra, Jaipur, and Uttarakhand routes with commercial safety permits.`
        : `Seamless sector-to-sector travel across Noida, Greater Noida, and South Delhi with flexible multi-stop hourly rental choices.`,
      highlights: isFamilyOrSUV
        ? [
            "All-India commercial tourist permit",
            "Smooth suspension for long drives",
            "Experienced highway drivers",
          ]
        : [
            "Convenient 8hr/80km packages",
            "Hassle-free parking & traffic transit",
            "Economical city-wide rates",
          ],
    },
  ];

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200/80 mb-3">
            <Sparkles size={13} className="text-amber-600" />
            Suitable Travel Scenarios
          </div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            Where Can You Hire the {vehicle.name}?
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Tailored to your itinerary. Whether organizing a corporate delegation, family vacation, or timely airport ride, {vehicle.name} delivers flexible service options.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-amber-600/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                    {item.highlights.map((point, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 size={13} className="text-amber-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href={`https://wa.me/918377809809?text=Hi,%20I%20want%20to%20book%20a%20${encodeURIComponent(vehicle.name)}%20for%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-amber-600 hover:text-white hover:border-amber-600"
                >
                  Book for this Trip
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}