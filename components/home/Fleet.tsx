import Image from "next/image";
import Link from "next/link";
import {
  CarFront,
  Users,
  Briefcase,
  Snowflake,
  MapPinned,
  UserCheck,
} from "lucide-react";
import { vehicles } from "@/data/vehicles";

export default function Fleet() {
  return (
    <section className=" py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Our Fleet
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Choose Your Perfect Ride
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            From affordable hatchbacks to spacious tempo travellers, we have
            the perfect vehicle for every journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.slice(0, 6).map((vehicle) => (
            <Link
              key={vehicle.slug}
              href={`/fleet/${vehicle.slug}`}
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
            >
              <div className="relative h-60 bg-gray-100 overflow-hidden rounded-3xl">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover p-4 transition duration-300 rounded-3xl group-hover:scale-105  "
                />
              </div>


              <div className="p-4">
                <div className="">
                  <h3 className="text-2xl flex justify-center font-bold">
                    {vehicle.name}
                  </h3>

                  <p className="text-xl flex justify-center font-bold text-amber-600">
                    {vehicle.price}
                  </p>

                </div>
                <div className="mt-2 space-y-2 border-t pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CarFront size={18} className="text-yellow-500"  />
                      <span>Taxi Doors:</span>
                    </div>
                    <span>{vehicle.doors}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-yellow-500"  />
                      <span>Passengers:</span>
                    </div>
                    <span>{vehicle.seats}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} className="text-yellow-500"  />
                      <span>Luggage Carry:</span>
                    </div>
                    <span>{vehicle.luggage}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Snowflake size={18} className="text-yellow-500"  />
                      <span>Air Condition:</span>
                    </div>
                    <span>Yes</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPinned size={18} className="text-yellow-500"  />
                      <span>GPS Navigation:</span>
                    </div>
                    <span>Yes</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserCheck size={18} className="text-yellow-500"  />
                      <span>Driver Choosing:</span>
                    </div>
                    <span>Yes</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between">


                  <span className="mt-4 w-full flex justify-center rounded-full bg-[#ffb300] py-4 font-semibold text-black hover:bg-amber-500 transition">
                    Book Taxi Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}