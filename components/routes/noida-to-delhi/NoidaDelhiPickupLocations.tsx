// src/components/routes/noida-delhi/NoidaDelhiPickupLocations.tsx

import {
  Building2,
  MapPin,
  Plane,
  TrainFront,
} from "lucide-react";

const pickupLocations = [
  {
    name: "Sector 18",
    description:
      "Popular commercial and shopping area in central Noida.",
    icon: Building2,
  },
  {
    name: "Sector 62",
    description:
      "Major business and IT hub with offices and commercial spaces.",
    icon: Building2,
  },
  {
    name: "Sector 137",
    description:
      "Residential area with convenient access to major Noida roads.",
    icon: MapPin,
  },
  {
    name: "Sector 15",
    description:
      "Well-connected residential and commercial locality in Noida.",
    icon: MapPin,
  },
  {
    name: "Sector 16",
    description:
      "Central Noida location with easy access to Delhi.",
    icon: Building2,
  },
  {
    name: "Sector 50",
    description:
      "Popular residential locality suitable for family and local pickups.",
    icon: MapPin,
  },
  {
    name: "Noida Extension",
    description:
      "Growing residential area with taxi pickup availability.",
    icon: MapPin,
  },
  {
    name: "Greater Noida",
    description:
      "Pickup can also be arranged from major areas around Greater Noida.",
    icon: MapPin,
  },
];

const specialLocations = [
  {
    title: "Noida Airport Transfers",
    description:
      "Book a private cab from Noida for airport pickup or drop services.",
    icon: Plane,
  },
  {
    title: "Railway Station Transfers",
    description:
      "Arrange a taxi from Noida to nearby railway stations according to your travel schedule.",
    icon: TrainFront,
  },
];

export default function NoidaDelhiPickupLocations() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Popular Pickup Locations in Noida
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            You can book a Noida to Delhi taxi from many residential,
            commercial and business areas across Noida. Select your
            exact pickup location while making your booking.
          </p>
        </div>

        {/* Pickup Locations */}
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm">
                  <Icon size={20} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {location.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {location.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Airport / Railway */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {specialLocations.map((location) => {
            const Icon = location.icon;

            return (
              <div
                key={location.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={21} />
                </div>

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

        {/* Closing Text */}
        <p className="mt-7 text-sm leading-6 text-slate-600">
          Pickup availability and travel time may vary depending on
          your exact location, traffic and destination in Delhi.
          Enter your pickup and drop locations in the booking form
          to check the available cab options.
        </p>

      </div>
    </section>
  );
}