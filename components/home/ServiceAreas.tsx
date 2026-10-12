import Image from "next/image";
import Link from "next/link";
import { serviceAreas } from "@/data/serviceAreas";
import { FaBuilding, FaCity, FaLandmark, FaLocationArrow, FaPlaneDeparture, FaRoad, FaTrain } from "react-icons/fa6";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { Icon } from "lucide-react";


const icons = [
  FaBuilding,
  FaCity,
  FaMapMarkerAlt,
  FaPlaneDeparture,
  FaRoad,
  FaTrain,
  FaUniversity,
  FaLandmark,
  FaLocationArrow,
];

export default function ServiceAreas() {
  return (
    <section className="py-6 lg:py-6 bg-white/95 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center pt-8">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Popular Locations
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Cab Service Near You – Noida, Greater Noida and Noida Extension
          </h2>

          <p className="mt-4 text-gray-600">
            Doorstep pickups across Noida, including Sector 18, Sector 62, Sector 137, Noida Extension, Greater Noida, Pari Chowk, Film City, Botanical Garden and Jewar Airport.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.slice(0, 9).map((area, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Link
                key={area.slug}
                href={`/noida/${area.slug}/dzire`}
                className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-600 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {area.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {area.description}
                    </p>
                    
                    <span className="mt-4 inline-flex font-semibold text-amber-600">
                      Book Taxi →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <p className="mt-8 leading-7 text-gray-600">
          We also serve sectors 15, 16, 19, 25, 26, 27, 29, 31, 34, 35, 37, 39, 41, 44, 48, 50, 51, 52, 61, 63, 64, 74, 75, 78, 93, 100, 104, 110, 119, 128, 135, 142 and 150, as well as Golf Course and Kondli.
        </p>
      </div>
    </section>
  );
}