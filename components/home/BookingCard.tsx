"use client";

import { Calendar, CarFront, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";

const tripTypes = ["Local", "Airport", "Outstation", "Hourly Rental"];

export default function BookingCard() {
  const [activeTrip, setActiveTrip] = useState("Local");

  return (
    <div className="rounded-2xl sm:rounded-[32px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.15)] overflow-hidden">
      {/* Trip Type */}
      <div className="grid grid-cols-2 sm:flex border-b bg-gray-50">
        {tripTypes.map((trip) => (
          <button
            key={trip}
            onClick={() => setActiveTrip(trip)}
            className={`whitespace-nowrap px-3 sm:px-6 py-3.5 sm:py-5 text-xs sm:text-sm font-semibold transition-all duration-300 sm:flex-1
              ${
                activeTrip === trip
                  ? "bg-amber-400 text-white"
                  : "text-gray-600 hover:bg-red-50 hover:text-amber-400"
              }`}
          >
            {trip}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 p-5 sm:p-8 sm:grid-cols-2 lg:grid-cols-5">
        {/* Pickup */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="h-4 w-4 text-amber-400" />
            Pickup
          </label>

          <input
            type="text"
            placeholder="Enter Pickup Location"
            className="h-12 sm:h-14 w-full rounded-xl border border-gray-200 px-4 text-sm sm:text-base outline-none transition focus:border-amber-400"
          />
        </div>

        {/* Drop */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="h-4 w-4 text-amber-400" />
            Destination
          </label>

          <input
            type="text"
            placeholder="Enter Destination"
            className="h-12 sm:h-14 w-full rounded-xl border border-gray-200 px-4 text-sm sm:text-base outline-none transition focus:border-amber-400"
          />
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Calendar className="h-4 w-4 text-amber-400" />
            Journey Date
          </label>

          <input
            type="date"
            className="h-12 sm:h-14 w-full rounded-xl border border-gray-200 px-4 text-sm sm:text-base outline-none transition focus:border-amber-400"
          />
        </div>

        {/* Vehicle */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <CarFront className="h-4 w-4 text-amber-400" />
            Vehicle
          </label>

          <div className="relative">
            <select className="h-12 sm:h-14 w-full appearance-none rounded-xl border border-gray-200 px-4 pr-10 text-sm sm:text-base outline-none transition focus:border-amber-400">
              <option>Sedan</option>
              <option>SUV</option>
              <option>Innova Crysta</option>
              <option>Ertiga</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Button */}
        <div className="flex items-end sm:col-span-2 lg:col-span-1">
          <button className="h-12 sm:h-14 w-full rounded-xl bg-amber-400 text-base sm:text-lg font-semibold text-white transition hover:bg-amber-500">
            Search Cabs
          </button>
        </div>
      </div>
    </div>
  );
}