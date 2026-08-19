import { serviceAreas } from "@/data/serviceAreas";
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
      "A popular commercial and shopping area with convenient taxi pickup.",
    icon: Building2,
  },
  {
    name: "Sector 62",
    description:
      "A major business and IT area with regular travel towards Delhi.",
    icon: Building2,
  },
  {
    name: "Sector 15",
    description:
      "A centrally located Noida area suitable for residential and business pickups.",
    icon: MapPin,
  },
  {
    name: "Sector 137",
    description:
      "A popular residential area with access to major roads towards Delhi.",
    icon: MapPin,
  },
  {
    name: "Sector 50",
    description:
      "A residential locality where private sedan pickups can be requested.",
    icon: MapPin,
  },
  {
    name: "Noida Extension",
    description:
      "A growing residential area with sedan taxi pickup options.",
    icon: MapPin,
  },
];

const transferOptions = [
  {
    title: "Airport Transfer",
    description:
      "Book a private sedan from Noida for airport pickup or drop-off.",
    icon: Plane,
  },
  {
    title: "Railway Station Transfer",
    description:
      "Arrange a sedan for convenient travel between Noida and railway stations.",
    icon: TrainFront,
  },
];

export default function NoidaDelhiSedanPickupLocations() {

    const servicesarea = serviceAreas;

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Popular Sedan Taxi Pickup Locations in Noida
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Sedan taxi pickup can be requested from residential,
            commercial and business areas across Noida. Enter your
            exact pickup location while making your booking.
          </p>
        </div>

        {/* Locations */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesarea.map((location) => {
            // const Icon = location.icon;

            return (
              <div
                key={location.name}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition
                  hover:border-amber-300
                  hover:shadow-sm
                "
              >
                {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={20} />
                </div> */}

                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {location.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {location.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transfers */}
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {transferOptions.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {option.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-6 text-sm leading-6 text-slate-500">
          Pickup availability can depend on the exact location,
          requested time and vehicle availability.
        </p>

      </div>
    </section>
  );
}