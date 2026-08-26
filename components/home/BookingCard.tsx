"use client";

import {
  Calendar,
  CarFront,
  ChevronDown,
  Clock3,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const tripTypes = ["Local", "Airport", "Outstation", "Hourly Rental"];

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingCard() {
  const router = useRouter();

  const [activeTrip, setActiveTrip] = useState("Local");

  const [pickup, setPickup] = useState("Noida");
  const [destination, setDestination] = useState("Delhi");

  const [journeyDate, setJourneyDate] =
    useState(getTodayDate());

  const [journeyTime, setJourneyTime] =
    useState("10:00");

  const [vehicle, setVehicle] =
    useState("Sedan");

  const handleSearch = () => {
    // Default route
    if (
      pickup.trim().toLowerCase() === "noida" &&
      destination.trim().toLowerCase() === "delhi"
    ) {
      router.push("/noida-to-delhi-taxi");
      return;
    }

    // For other routes, don't redirect yet
    // until their route exists in urlroute.json.
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.15)] sm:rounded-[32px]">

      {/* Trip Type */}
      <div className="grid grid-cols-2 border-b bg-gray-50 sm:flex">
        {tripTypes.map((trip) => (
          <button
            key={trip}
            type="button"
            onClick={() => setActiveTrip(trip)}
            className={`whitespace-nowrap px-3 py-3.5 text-xs font-semibold transition-all duration-300 sm:flex-1 sm:px-6 sm:py-5 sm:text-sm ${
              activeTrip === trip
                ? "bg-amber-600 text-white"
                : "text-gray-600 hover:bg-red-50 hover:text-amber-400"
            }`}
          >
            {trip}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:grid-cols-5">

        {/* Pickup */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="h-4 w-4 text-amber-400" />
            Pickup
          </label>

          <input
            type="text"
            value={pickup}
            onChange={(e) =>
              setPickup(e.target.value)
            }
            placeholder="Enter Pickup Location"
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="h-4 w-4 text-amber-400" />
            Destination
          </label>

          <input
            type="text"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
            placeholder="Enter Destination"
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
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
            value={journeyDate}
            min={getTodayDate()}
            onChange={(e) =>
              setJourneyDate(e.target.value)
            }
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
          />
        </div>

        {/* Time */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Clock3 className="h-4 w-4 text-amber-400" />
            Journey Time
          </label>

          <input
            type="time"
            value={journeyTime}
            onChange={(e) =>
              setJourneyTime(e.target.value)
            }
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
          />
        </div>

        {/* Vehicle */}
        {/* <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <CarFront className="h-4 w-4 text-amber-400" />
            Vehicle
          </label>

          <div className="relative">
            <select
              value={vehicle}
              onChange={(e) =>
                setVehicle(e.target.value)
              }
              className="h-12 w-full appearance-none rounded-xl border border-gray-800 px-4 pr-10 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14 sm:text-base"
            >
              <option>Sedan</option>
              <option>SUV</option>
              <option>Innova Crysta</option>
              <option>Ertiga</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div> */}

        {/* Button */}
        <div className="flex items-end sm:col-span-2 lg:col-span-1">
          <button
            type="button"
            onClick={handleSearch}
            className="h-12 w-full rounded-xl bg-amber-600 text-base font-semibold text-white transition hover:bg-amber-500 sm:h-14 sm:text-lg"
          >
            Search Cabs
          </button>
        </div>
      </div>
    </div>
  );
}