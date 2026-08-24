"use client";

import { useState } from "react";
import Image from "next/image";
import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  const [active, setActive] = useState(destinations[0]);

  return (
    <section className="bg-white/95 py-6 lg:py-12 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-4 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Popular Routes
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl text-slate-900">
            Explore Popular Destinations
            <span className="block text-amber-600">
              from Noida
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            Discover the most booked outstation routes from Noida with
            comfortable cabs and professional drivers.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b">
            {destinations.map((destination) => (
              <button
                key={destination.slug}
                onClick={() => setActive(destination)}
                className={`border-b-2 px-8 py-5 font-semibold transition ${
                  active.slug === destination.slug
                    ? "border-amber-600 text-amber-600"
                    : "border-transparent text-gray-500 hover:text-amber-600"
                }`}
              >
                {destination.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid gap-10 p-10 lg:grid-cols-2">
            {/* Left */}
            <div className="flex flex-col justify-center items-center">
              <div className="mb-6 text-5xl">{active.icon}</div>

              <h3 className="text-4xl font-bold text-slate-900">
                {active.name}
              </h3>

              <p className="mt-3 font-medium text-amber-600">
                Distance: {active.distance}
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                {active.description}
              </p>

              {/* <button className="mt-4 w-fit rounded-xl bg-amber-400 px-8 py-3 font-semibold text-white transition hover:bg-amber-500">
                Book Now
              </button> */}
            </div>

            {/* Right */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={active.image}
                alt={active.name}
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}