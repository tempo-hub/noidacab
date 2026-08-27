"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";

export type NearbyTempoRoute = {
  slug: string;

  from: {
    name: string;
    slug: string;
  };

  to: {
    name: string;
    slug: string;
  };

  heading?: string;
  subheading?: string;
};

type HeroSectionProps = {
  route: NearbyTempoRoute;
};

export default function HeroSection({
  route,
}: HeroSectionProps) {
  const [from, setFrom] = useState(route.from.name);
  const [to, setTo] = useState(route.to.name);

  const [departureDate, setDepartureDate] =
    useState("");

  const [departureTime, setDepartureTime] =
    useState("10:00");

  const [error, setError] = useState("");

  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  const handleSearch = () => {
    setError("");

    if (!from.trim()) {
      setError("Please enter pickup location.");
      return;
    }

    if (!to.trim()) {
      setError("Please enter destination.");
      return;
    }

    if (!departureDate) {
      setError("Please select departure date.");
      return;
    }

    console.log({
      from,
      to,
      departureDate,
      departureTime,
    });

    document
      .getElementById("available-tempos")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,white_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-[1800px] px-4 py-10 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-center text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            {route.heading ||
              `Tempo Traveller on Rent in ${route.to.name}`}
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-center text-sm font-medium text-white/90 sm:text-base">
            {route.subheading ||
              `Book a comfortable Tempo Traveller from ${route.from.name} to ${route.to.name} at affordable fares.`}
          </p>
        </div>

        {/* Booking Form */}
        <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.2fr_1.2fr_1fr_1fr_220px]">

            {/* From */}
            <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-amber-500"
                />

                <p className="text-sm font-semibold text-gray-500">
                  From
                </p>
              </div>

              <input
                value={from}
                onChange={(e) =>
                  setFrom(e.target.value)
                }
                placeholder="Pickup location"
                className="mt-1 w-full bg-transparent text-xl font-bold text-gray-900 outline-none sm:text-2xl"
              />

              <p className="mt-2 text-sm text-gray-500">
                Pickup location
              </p>
            </div>

            {/* To */}
            <div className="border-b border-gray-200 bg-amber-50/60 p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-amber-500"
                />

                <p className="text-sm font-semibold text-gray-500">
                  To
                </p>
              </div>

              <input
                value={to}
                onChange={(e) =>
                  setTo(e.target.value)
                }
                placeholder="Destination"
                className="mt-1 w-full bg-transparent text-xl font-bold text-gray-900 outline-none sm:text-2xl"
              />

              <p className="mt-2 text-sm text-gray-500">
                Destination
              </p>
            </div>

            {/* Date */}
            <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold text-gray-500">
                Departure
              </p>

              <input
                type="date"
                min={getToday()}
                value={departureDate}
                onChange={(e) =>
                  setDepartureDate(e.target.value)
                }
                className="mt-2 w-full bg-transparent text-lg font-bold text-gray-900 outline-none"
              />
            </div>

            {/* Time */}
            <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold text-gray-500">
                Pickup Time
              </p>

              <select
                value={departureTime}
                onChange={(e) =>
                  setDepartureTime(e.target.value)
                }
                className="mt-2 w-full bg-transparent text-lg font-bold text-gray-900 outline-none"
              >
                {Array.from(
                  { length: 48 },
                  (_, index) => {
                    const hour = Math.floor(index / 2);
                    const minute =
                      index % 2 === 0 ? "00" : "30";

                    const value = `${String(hour).padStart(
                      2,
                      "0"
                    )}:${minute}`;

                    const displayHour =
                      hour === 0
                        ? 12
                        : hour > 12
                        ? hour - 12
                        : hour;

                    const period =
                      hour >= 12 ? "PM" : "AM";

                    return (
                      <option
                        key={value}
                        value={value}
                      >
                        {String(displayHour).padStart(
                          2,
                          "0"
                        )}
                        :{minute} {period}
                      </option>
                    );
                  }
                )}
              </select>
            </div>

            {/* Search */}
            <button
              type="button"
              onClick={handleSearch}
              className="flex min-h-[110px] items-center justify-center gap-2 bg-orange-500 px-6 text-lg font-bold text-white transition hover:bg-orange-600"
            >
              <Search size={22} />
              SEARCH
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-3 text-center text-sm font-medium text-white">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}