import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleBooking({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-amber-400">
                Easy Booking
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Book a {vehicle.name} Taxi in Noida
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Choose your pickup location, destination and travel
                requirements to book a {vehicle.name} taxi.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  {vehicle.seats} passenger capacity
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  {vehicle.luggage} luggage capacity
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  {vehicle.airCondition ? "Air conditioned" : "Non-AC"}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  Professional driver
                </div>
              </div>
            </div>

            <Link
              href="https://wa.me/918377809809"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}