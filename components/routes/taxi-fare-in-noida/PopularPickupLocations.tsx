
import {
  Building2,
  MapPin,
  TrainFront,
  ShoppingBag,
  BriefcaseBusiness,
  Plane,
} from "lucide-react";

const locations = [
  {
    name: "Residential Areas",
    description:
      "Book a taxi from residential areas and housing societies for local and outstation travel.",
    icon: Building2,
  },
  {
    name: "Business Hubs",
    description:
      "Convenient taxi pickup from offices, corporate parks and major business areas.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Railway Stations",
    description:
      "Arrange a comfortable cab pickup or drop-off for your railway station journey.",
    icon: TrainFront,
  },
  {
    name: "Shopping Areas",
    description:
      "Book a taxi from popular shopping areas, markets and commercial destinations.",
    icon: ShoppingBag,
  },
  {
    name: "Local Pickup Points",
    description:
      "Choose a convenient pickup point near your location for a smooth taxi journey.",
    icon: MapPin,
  },
  {
    name: "Airports",
    description:
      "Book reliable airport transfers with comfortable vehicles and scheduled pickups.",
    icon: Plane,
  },
];

export default function PopularPickupLocations() {
  return (
    <section className="bg-white/95 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Pickup Locations
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Convenient Taxi Pickup Locations
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Book a taxi from convenient residential, commercial, transport and
            business locations according to your travel requirements.
          </p>
        </div>

        {/* Locations */}
        <div className="flex flex-wrap justify-center gap-6">
          {locations.map((location) => {
            const Icon = location.icon;

            return (
              <div
                key={location.name}
                className="group w-full rounded-3xl border border-gray-200 bg-[#FFFDF5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {location.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {location.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom content */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="leading-8 text-gray-600">
            Enter your exact pickup and drop-off locations while booking to
            find the available taxi options and applicable fare for your
            journey.
          </p>
        </div>

      </div>
    </section>
  );
}

