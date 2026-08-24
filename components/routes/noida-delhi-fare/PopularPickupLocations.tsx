import Link from "next/link";
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
    name: "Sector 18",
    description:
      "Book a Noida to Delhi taxi from the popular shopping and business hub of Sector 18.",
    icon: ShoppingBag,
    href: "/local-cab/sector-18",
  },
  {
    name: "Sector 62",
    description:
      "Convenient cab pickup from the IT and corporate hub of Noida Sector 62.",
    icon: BriefcaseBusiness,
    href: "/local-cab/sector-62",
  },
  {
    name: "Sector 137",
    description:
      "Book a comfortable taxi from Sector 137 for your journey towards Delhi.",
    icon: Building2,
    href: "/local-cab/sector-137",
  },
  {
    name: "Botanical Garden",
    description:
      "Easy taxi pickup from Botanical Garden and nearby residential areas.",
    icon: TrainFront,
    href: "/local-cab/botanical-garden",
  },
  {
    name: "Noida Extension",
    description:
      "Book a cab from Noida Extension to Delhi for local and business travel.",
    icon: MapPin,
    href: "/local-cab/noida-extension",
  },
  {
    name: "Jewar Airport",
    description:
      "Arrange convenient airport and Delhi travel from the Jewar Airport area.",
    icon: Plane,
    href: "/airport-transfer/jewar-airport",
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
            Popular Pickup Locations in Noida
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Book a Noida to Delhi taxi from popular residential, commercial,
            shopping and business areas across Noida.
          </p>
        </div>

        {/* Locations */}
        <div className="flex flex-wrap justify-center gap-6">
          {locations.map((location) => {
            const Icon = location.icon;

            return (
              <Link
                key={location.name}
                href={location.href}
                className="group w-full rounded-3xl border border-gray-200 bg-[#FFFDF5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Noida to Delhi Taxi from {location.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {location.description}
                    </p>

                    <span className="mt-4 inline-flex text-sm font-semibold text-amber-600">
                      Explore Location →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom content */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="leading-8 text-gray-600">
            NoidaCab provides pickup services from multiple locations across
            Noida. Enter your exact pickup point while booking to find the
            available cab options for your Noida to Delhi journey.
          </p>
        </div>
      </div>
    </section>
  );
}