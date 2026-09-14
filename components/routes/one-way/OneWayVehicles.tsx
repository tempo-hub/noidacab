import Image from "next/image";
import {
  Users,
  Luggage,
  Snowflake,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface FleetVehicle {
  name: string;
  type: string;
  seats: number;
  luggage: number;
  rate: string;
  image: string;
  tag?: string;
  perks: string[];
  description: string;
}

const vehicles: FleetVehicle[] = [
  {
    name: "Maruti Dzire",
    type: "Compact Sedan",
    seats: 4,
    luggage: 2,
    rate: "₹10/km",
    image: "/cabs/dzire.webp",
    tag: "Most Economical",
    perks: ["Chilled AC", "Boot Space for 2 Bags", "High City Mileage"],
    description: "Ideal for solo travelers, couples, and swift airport transfers.",
  },
  {
    name: "Honda Amaze",
    type: "Executive Sedan",
    seats: 4,
    luggage: 2,
    rate: "₹10/km",
    image: "/cabs/amaze.webp",
    perks: ["Extra Rear Legroom", "Smooth Highway Ride", "Chilled AC"],
    description: "Premium sedan ride quality tailored for comfortable one-way highway drops.",
  },
  {
    name: "Maruti Ertiga",
    type: "Comfort MUV",
    seats: 6,
    luggage: 3,
    rate: "₹13/km",
    image: "/cabs/ertiga.webp",
    tag: "Family Choice",
    perks: ["Dual Roof Blower", "Foldable 3rd Row", "Spacious Cabin"],
    description: "Versatile 6-seater MUV suited for family trips and bulky luggage travel.",
  },
  {
    name: "Toyota Innova Crysta",
    type: "Luxury MPV",
    seats: 7,
    luggage: 4,
    rate: "₹16/km",
    image: "/cabs/innova.webp",
    tag: "Executive Class",
    perks: ["Captain Seats", "Superior Highway Comfort", "4 Large Suitcases"],
    description: "Unmatched long-distance comfort with commercial highway stability.",
  },
];

export function OneWayVehicles() {
  return (
    <section className="border-b border-slate-200 bg-white/95 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              Verified Fleet
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose Your One-Way Cab
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Transparent per-kilometer prices, yellow-plate commercial permits, and spotless AC interiors. Zero return-fare penalties for one-way drops.
            </p>
          </div>

          {/* Micro Status Ribbon */}
          <div className="inline-flex items-center gap-2 self-start rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 md:self-auto">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>FASTag Metered • Police-Verified Drivers</span>
          </div>
        </div>

        {/* ================= VEHICLE CARDS GRID ================= */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => {
            const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
              `Hello NoidaCab, I want to book a one-way cab: ${vehicle.name} (${vehicle.rate}). Please share driver availability.`
            )}`;

            return (
              <article
                key={vehicle.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <div>
                  {/* Top Image Frame */}
                  <div className="relative aspect-[16/10] w-full border-b border-slate-100 bg-gradient-to-b from-amber-50/40 to-slate-50/60 p-4">
                    <div className="relative h-full w-full">
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} one way taxi`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Tag Ribbon */}
                    {vehicle.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-slate-950/85 px-2.5 py-0.5 text-[10px] font-bold text-slate-900 backdrop-blur-xs">
                        {vehicle.tag}
                      </span>
                    )}

                    {/* Rate Ribbon */}
                    <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-2.5 py-0.5 text-[11px] font-black text-slate-950 shadow-xs">
                      {vehicle.rate}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-black text-slate-950">
                        {vehicle.name}
                      </h3>
                      <span className="text-xs font-semibold text-amber-700">
                        {vehicle.type}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                      {vehicle.description}
                    </p>

                    {/* Capacity Specs */}
                    <div className="mt-4 grid grid-cols-2 gap-2 border-y border-slate-100 py-3 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Users className="h-3.5 w-3.5 text-amber-600" />
                        <span>{vehicle.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Luggage className="h-3.5 w-3.5 text-amber-600" />
                        <span>{vehicle.luggage} Luggage</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Snowflake className="h-3.5 w-3.5 text-amber-600" />
                        <span>AC Fitted</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Green Plate</span>
                      </div>
                    </div>

                    {/* Specific Perks */}
                    <ul className="mt-3.5 space-y-1.5 text-[11px] text-slate-600">
                      {vehicle.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Conversion Actions */}
                <div className="border-t border-slate-100 p-4 pt-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-950 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800"
                    >
                      Book Cab
                      <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                    </a>

                    <a
                      href="tel:918377809809"
                      title="Call support"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-amber-400 hover:bg-amber-50"
                    >
                      <PhoneCall className="h-3.5 w-3.5 text-amber-600" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}