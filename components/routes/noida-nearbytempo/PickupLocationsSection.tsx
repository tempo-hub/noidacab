import {
  Building2,
  MapPin,
  Plane,
  TrainFront,
} from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";

type PickupLocationsSectionProps = {
  route: RouteData;
};

const pickupLocations = [
  {
    name: "Sector 18",
    description:
      "Popular commercial and shopping area with convenient pickup access for group travel.",
    icon: Building2,
  },
  {
    name: "Sector 62",
    description:
      "Major business and IT hub with offices and commercial spaces suitable for group pickups.",
    icon: Building2,
  },
  {
    name: "Sector 137",
    description:
      "Residential area with convenient access to major Noida roads and group transportation.",
    icon: MapPin,
  },
  {
    name: "Sector 15",
    description:
      "Well-connected residential and commercial locality for convenient Tempo Traveller pickups.",
    icon: MapPin,
  },
  {
    name: "Sector 16",
    description:
      "Central Noida location with easy access towards Delhi and surrounding areas.",
    icon: Building2,
  },
  {
    name: "Sector 50",
    description:
      "Popular residential locality suitable for family and group Tempo Traveller pickups.",
    icon: MapPin,
  },
  {
    name: "Noida Extension",
    description:
      "Growing residential area where Tempo Traveller pickup can be arranged for group trips.",
    icon: MapPin,
  },
  {
    name: "Greater Noida",
    description:
      "Tempo Traveller pickup can also be arranged from major residential and commercial areas around Greater Noida.",
    icon: MapPin,
  },
];

const specialLocations = [
  {
    title: "Airport Transfers",
    description:
      "Book a Tempo Traveller for airport pickup or drop when travelling with family, friends or a larger group. Share your flight and pickup details while booking so the journey can be planned accordingly.",
    icon: Plane,
  },
  {
    title: "Railway Station Transfers",
    description:
      "A Tempo Traveller can also be booked for railway station pickup or drop when travelling as a group. Enter your exact pickup and destination details while making your booking.",
    icon: TrainFront,
  },
];

export default function PickupLocationsSection({
  route,
}: PickupLocationsSectionProps) {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* ================================================================ */}
        {/* Heading */}
        {/* ================================================================ */}

        <div className="max-w-3xl">

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Popular Tempo Traveller Pickup
            Locations in {route.from.name}
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            You can book a Tempo Traveller from
            residential, commercial and business areas
            across {route.from.name} for your journey to{" "}
            {route.to.name}. Select your exact pickup
            location while making your booking.
          </p>

        </div>

        {/* ================================================================ */}
        {/* Pickup Locations */}
        {/* ================================================================ */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {pickupLocations.map((location) => {
            const Icon = location.icon;

            return (
              <div
                key={location.name}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                  transition
                  hover:border-amber-200
                  hover:bg-amber-50/40
                "
              >

                {/* Icon */}

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm">
                  <Icon size={20} />
                </div>

                {/* Name */}

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {location.name}
                </h3>

                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {location.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* ================================================================ */}
        {/* Airport / Railway */}
        {/* ================================================================ */}

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {specialLocations.map((location) => {
            const Icon = location.icon;

            return (
              <div
                key={location.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
              >

                {/* Icon */}

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={21} />
                </div>

                {/* Content */}

                <div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {location.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {location.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* ================================================================ */}
        {/* Closing Text */}
        {/* ================================================================ */}

        <p className="mt-7 text-sm leading-6 text-slate-600">
          Pickup availability and travel time may vary
          depending on your exact location, traffic and
          destination in {route.to.name}. Enter your
          pickup and drop-off locations in the booking
          form to check the available Tempo Traveller
          options.
        </p>

      </div>
    </section>
  );
}