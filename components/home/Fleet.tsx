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
          {vehicles.slice(0,6).map((vehicle) => (
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
                <div className="mt-2 border-t pt-4 space-y-4">

                  <div className="flex justify-between">
                    <CarFront size={18} />
                    <span>Taxi Doors:</span>
                    <span>{vehicle.doors}</span>
                  </div>

                  <div className="flex justify-between">
                    <Users size={18} />
                    <span>Passengers:</span>
                    <span>{vehicle.seats}</span>
                  </div>

                  <div className="flex justify-between">
                    <Briefcase size={18} />
                    <span>Luggage Carry:</span>
                    <span>{vehicle.luggage}</span>
                  </div>

                  <div className="flex justify-between">
                    <Snowflake size={18} />
                    <span>Air Condition:</span>
                    <span>Yes</span>
                  </div>

                  <div className="flex justify-between">
                    <MapPinned size={18} />
                    <span>GPS Navigation:</span>
                    <span>Yes</span>
                  </div>

                  <div className="flex justify-between">
                    <UserCheck size={18} />
                    <span>Driver Choosing:</span>
                    <span>Yes</span>
                  </div>

                </div>

                <div className="mt-2 flex items-center justify-between">


                  <span className="mt-8 w-full flex justify-center rounded-full bg-[#ffb300] py-4 font-semibold text-white hover:bg-amber-500 transition">
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