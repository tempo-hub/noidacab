import {
  Trophy,
  UserCheck,
  Star,
  ShieldCheck,
  Building2,
  FileCheck2,
  HeartHandshake,
  Navigation,
  Lock,
  Headphones,
  Sparkles,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

export default function VehicleTrust({ vehicle }: { vehicle: Vehicle }) {
  const trustCards = [
    {
      icon: Trophy,
      title: "10+ Years Experience",
      subtitle: "Serving travelers since 2015",
      description: `Founded with a dedicated fleet across Delhi-NCR, NoidaCab has grown into one of the region's most reliable transport services. Our decade-long operational expertise means we understand what travelers need — clean ${vehicle.name} vehicles, punctual chauffeurs, transparent pricing, and 24/7 dedicated support.`,
    },
    {
      icon: UserCheck,
      title: "500+ Verified Drivers",
      subtitle: "Background-checked & trained",
      description: `Every driver assigned to your ${vehicle.name} undergoes police verification, commercial license validation, and highway driving assessments. Our chauffeurs are thoroughly trained in defensive driving, customer etiquette, route navigation, and emergency first aid.`,
    },
    {
      icon: Star,
      title: "4.9★ Google Rating",
      subtitle: "3,250+ verified reviews",
      description:
        "Rated 4.9 out of 5 across Google with thousands of authentic customer reviews. Our consistent ratings year over year demonstrate our strict quality control. We are a registered travel agency (GSTIN verified) and comply strictly with all state transport regulations.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Transparent",
      subtitle: "No hidden charges ever",
      description: `All vehicles are GPS-tracked in real time. Get a transparent fare breakdown before booking your ${vehicle.name} — driver allowance, fuel, tolls, and GST are clearly stated. Free cancellation up to 24 hours before pickup with passenger transit safety protocols in place.`,
    },
  ];

  const trustBadges = [
    { label: "GSTIN Verified", icon: Building2 },
    { label: "Registered Travel Agency", icon: FileCheck2 },
    { label: "Passenger Transit Safety", icon: HeartHandshake },
    { label: "GPS Tracked Fleet", icon: Navigation },
    { label: "Secure Bookings", icon: Lock },
    { label: "24/7 Customer Support", icon: Headphones },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Reliability & Trust
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Why Book Your {vehicle.name} with NoidaCab?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Professional fleet standards, verified chauffeurs, and upfront pricing across Noida, Greater Noida, and Delhi NCR.
          </p>
        </div>

        {/* 4 Large Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:border-amber-500/40 hover:shadow-md sm:p-8"
              >
                <div>
                  {/* Top Header Row with Icon Box */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                        {card.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Paragraph */}
                  <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Horizontal Trust Pill Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-slate-100 pt-8 sm:gap-4">
          {trustBadges.map((badge, bIdx) => {
            const BadgeIcon = badge.icon;
            return (
              <div
                key={bIdx}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-colors hover:border-amber-400 hover:bg-white"
              >
                <BadgeIcon size={14} className="text-amber-600" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}