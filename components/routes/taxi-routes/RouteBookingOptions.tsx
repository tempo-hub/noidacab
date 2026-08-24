import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Plane,
  TrainFront,
} from "lucide-react";

import type { RouteVehicleProps } from "./type";

export default function RouteBookingOptions({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* =====================================================
              ONE WAY / ROUND TRIP
          ===================================================== */}
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <CalendarCheck className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
              One Way and Round Trip{" "}
              {vehicle.name} Booking
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-gray-600">
              <p>
                A one-way {route.fromName} to{" "}
                {route.toName} {vehicle.name} taxi booking
                suits you when you only need a drop with no
                return journey attached. It works well for a
                meeting, flight, appointment, or dropping someone
                off.
              </p>

              <p>
                For a {route.fromName} to {route.toName}{" "}
                {vehicle.name} cab booking on a round trip, we
                can keep the vehicle available for your return
                journey on the same day. This is useful when you
                have errands, meetings, or an event before heading
                back.
              </p>

              <p>
                Any waiting time beyond the agreed window is
                charged separately. The applicable waiting charge
                is confirmed before your journey.
              </p>
            </div>

            {/* Booking types */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-orange-50 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  One Way
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Direct drop from {route.fromName} to{" "}
                  {route.toName}.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Round Trip
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Same-day return journey with the same vehicle.
                </p>
              </div>
            </div>
          </article>

          {/* =====================================================
              AIRPORT / RAILWAY
          ===================================================== */}
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Plane className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
              Airport and Railway Station Pick and Drop
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-gray-600">
              <p>
                We provide direct {vehicle.name} taxi pickup
                and drop services between {route.fromName} and{" "}
                {route.toName} airports and railway stations.
                You can schedule your cab according to your
                flight or train timing.
              </p>

              <p>
                Share your flight or train details while booking
                and our driver can plan the pickup accordingly.
                This makes the service convenient for airport
                transfers, railway station drops, family travel,
                and trips with extra luggage.
              </p>

              <p>
                Pickup timing can be coordinated around your
                scheduled arrival or departure, helping you avoid
                unnecessary waiting and making your journey more
                convenient.
              </p>
            </div>

            {/* Transfer options */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <Plane className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Airport Transfers
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    Scheduled airport pickup and drop service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <TrainFront className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Railway Transfers
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    Convenient station pickup and drop service.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust line */}
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-700">
              <CheckCircle2 className="h-4 w-4 text-orange-600" />
              Pickup planned around your travel schedule
            </div>
          </article>
        </div>

        {/* Route indicator */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium text-gray-600">
          <span>{route.fromName}</span>

          <ArrowRight className="h-4 w-4 text-orange-600" />

          <span>{route.toName}</span>

          <span className="text-gray-400">•</span>

          <span>{vehicle.name} Taxi</span>
        </div>
      </div>
    </section>
  );
}