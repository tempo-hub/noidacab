import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
  MapPin,
  ShieldCheck,
  DoorClosed,
  ArrowRight,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { vehicles, type Vehicle } from "@/data/vehicles";

interface SedanFleetSectionProps {
  location: {
    name: string;
    slug: string;
  };
  currentVehicleSlug?: string;
}

export function SedanFleetSection({
  location,
  currentVehicleSlug,
}: SedanFleetSectionProps) {
  // Filter all vehicles with category === "Sedan"
  const sedanCars = vehicles.filter(
    (car: Vehicle) => car.category?.toLowerCase() === "sedan"
  );

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Verified Sedan Fleet
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Available AC Sedans in {location.name}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Choose from our commercial-plated 4-seater sedans for local city
            travel, airport transfers, and outstation trips across Delhi-NCR.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sedanCars.slice(0, 3).map((car) => {
            const isCurrent = car.slug === currentVehicleSlug;
            const waMessage = encodeURIComponent(
              `Hello NoidaCab, I want to book a ${car.name} from ${location.name}. Please share driver and fare details.`
            );

            return (
              <div
                key={car.slug}
                className={`group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isCurrent
                    ? "border-amber-500 ring-2 ring-amber-400/20"
                    : "border-slate-200/90 hover:border-amber-400"
                }`}
              >
                <div>
                  {/* Image Display */}
                  <div className="relative mb-5 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100/70 p-4">
                    <Image
                      src={car.image}
                      alt={`${car.name} Sedan Taxi in ${location.name}`}
                      width={300}
                      height={180}
                      className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Price Tag */}
                    <span className="absolute right-3 top-3 rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-black text-white shadow-xs">
                      {car.price}
                    </span>

                    {/* Category Pill */}
                    <span className="absolute left-3 top-3 rounded-md border border-slate-200 bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-slate-700 backdrop-blur-xs">
                      {car.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      {car.name}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Instant Booking
                    </span>
                  </div>

                  {/* Specifications Grid from Vehicle Interface */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-2 rounded-lg bg-slate-100/70 p-2">
                      <Users size={15} className="text-amber-600 shrink-0" />
                      <span>{car.seats} Seats</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-slate-100/70 p-2">
                      <Briefcase size={15} className="text-amber-600 shrink-0" />
                      <span>{car.luggage} Bags</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-slate-100/70 p-2">
                      <DoorClosed size={15} className="text-amber-600 shrink-0" />
                      <span>{car.doors} Doors</span>
                    </div>

                    {car.airCondition && (
                      <div className="flex items-center gap-2 rounded-lg bg-slate-100/70 p-2">
                        <Snowflake size={15} className="text-amber-600 shrink-0" />
                        <span>Chilled AC</span>
                      </div>
                    )}

                    {car.gps && (
                      <div className="flex items-center gap-2 rounded-lg bg-slate-100/70 p-2">
                        <MapPin size={15} className="text-amber-600 shrink-0" />
                        <span>GPS Enabled</span>
                      </div>
                    )}

                    {car.driverChoice && (
                      <div className="flex items-center gap-2 rounded-lg bg-slate-100/70 p-2">
                        <ShieldCheck size={15} className="text-amber-600 shrink-0" />
                        <span>Verified Driver</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Call-to-Actions */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <Link
                    href={`/noida/${location.slug}/${car.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline"
                  >
                    View Details
                    <ArrowRight size={13} />
                  </Link>

                  <div className="flex items-center gap-2">
                    <a
                      href="tel:8377809809"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      title="Call Helpline"
                    >
                      <PhoneCall size={14} />
                    </a>

                    <a
                      href={`https://wa.me/918377809809?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-amber-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-amber-700 active:scale-95"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}