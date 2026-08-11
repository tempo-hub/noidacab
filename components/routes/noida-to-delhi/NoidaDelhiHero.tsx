"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
} from "lucide-react";

type BookingType =
  | "oneWay"
  | "roundTrip"
  | "hourly"
  | "airport";

interface BookingData {
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  returnDate: string;
  bookingType: BookingType;
}

const bookingTabs = [
  {
    id: "oneWay" as BookingType,
    label: "Outstation One Way",
  },
  {
    id: "roundTrip" as BookingType,
    label: "Outstation Round Trip",
  },
  {
    id: "hourly" as BookingType,
    label: "Hourly",
  },
  {
    id: "airport" as BookingType,
    label: "Airport Transfer",
  },
];

export default function NoidaDelhiHero() {

  const [bookingType, setBookingType] =
    useState<BookingType>("oneWay");

  const [from, setFrom] = useState("Noida");
  const [to, setTo] = useState("Delhi");

  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("10:00");

  const [returnDate, setReturnDate] = useState("");

  const [error, setError] = useState("");

  const getToday = () => {
    const today = new Date();

    return today.toISOString().split("T")[0];
  };

  const formatDate = (date: string) => {
    if (!date) return "Select Date";

    return new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleTabChange = (type: BookingType) => {
    setBookingType(type);
    setError("");

    if (type !== "roundTrip") {
      setReturnDate("");
    }

    if (type === "airport") {
      setFrom("Noida");
      setTo("Delhi Airport");
    }

    if (type === "oneWay" || type === "roundTrip") {
      setFrom("Noida");
      setTo("Delhi");
    }
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

    if (bookingType === "roundTrip" && !returnDate) {
      setError("Please select return date.");
      return;
    }

    const bookingData: BookingData = {
      from,
      to,
      departureDate,
      departureTime,
      returnDate,
      bookingType,
    };

    console.log("Booking Data:", bookingData);

    document
      .getElementById("available-cabs")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    // Later you can navigate to:
    // /search?from=noida&to=delhi&date=...
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 py-12">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,white_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-[1800px] px-4 py-10 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="mb-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Service Tabs */}
          <div className="grid w-[8-%] grid-cols-4 gap-1 rounded-full bg-gray-100 p-1">
            {bookingTabs.map((tab) => {
              const active = bookingType === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`min-w-0 rounded-full px-2 py-2 text-center text-[11px] font-semibold leading-tight transition sm:px-5 sm:py-2 sm:text-base 
                    ${active
                      ? "bg-[#ffb300] text-white shadow-sm "
                      : "text-gray-500 hover:bg-amber-50 hover:text-amber-600"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Heading */}
          <h1 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-right">
            Noida To Delhi Cab Booking
          </h1>
        </div>

        {/* Booking Form */}
        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="grid lg:grid-cols-[1.2fr_1.2fr_1fr_1fr_255px]">

            {/* From */}
            <div className="relative border-b border-gray-200 p-5 lg:border-b-0 lg:border-r ">
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
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Pickup location"
                className="mt-1 w-full bg-transparent text-2xl font-bold text-gray-900 outline-none"
              />

              <p className="mt-2 truncate text-sm font-medium text-gray-600">
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
                onChange={(e) => setTo(e.target.value)}
                placeholder="Destination"
                className="mt-1 w-full bg-transparent text-2xl font-bold text-gray-900 outline-none"
              />

              <p className="mt-2 truncate text-sm font-medium text-gray-600">
                Destination
              </p>
            </div>

            {/*  DEPARTURE DATE */}
            <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-500">
                  Departure
                </p>


              </div>

              <label className="mt-2 block cursor-pointer">
                <input
                  type="date"
                  min={getToday()}
                  value={departureDate}
                  onChange={(e) =>
                    setDepartureDate(e.target.value)
                  }
                  className="w-full cursor-pointer bg-transparent text-xl font-bold text-gray-900 outline-none"
                />
              </label>


            </div>

            {/* Return */}
            <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
              {bookingType === "roundTrip" ? (
                <>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-500">
                      Pick-Up Date
                    </p>

                    
                  </div>

                   <select
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                    className="mt-2 w-full cursor-pointer appearance-none bg-transparent text-xl font-bold text-gray-900 outline-none"
                  >
                    {Array.from({ length: 48 }, (_, index) => {
                      const hour = Math.floor(index / 2);
                      const minute = index % 2 === 0 ? "00" : "30";

                      const value = `${String(hour).padStart(2, "0")}:${minute}`;

                      const displayHour =
                        hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

                      const period = hour >= 12 ? "PM" : "AM";

                      return (
                        <option key={value} value={value}>
                          {String(displayHour).padStart(2, "0")}:{minute} {period}
                        </option>
                      );
                    })}
                  </select>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-500">
                      Pickup Time
                    </p>
                  </div>

                  <select
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                    className="mt-2 w-full cursor-pointer appearance-none bg-transparent text-xl font-bold text-gray-900 outline-none"
                  >
                    {Array.from({ length: 48 }, (_, index) => {
                      const hour = Math.floor(index / 2);
                      const minute = index % 2 === 0 ? "00" : "30";

                      const value = `${String(hour).padStart(2, "0")}:${minute}`;

                      const displayHour =
                        hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

                      const period = hour >= 12 ? "PM" : "AM";

                      return (
                        <option key={value} value={value}>
                          {String(displayHour).padStart(2, "0")}:{minute} {period}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}



            </div>

            {/* Search */}
            <button
              type="button"
              onClick={handleSearch}
              className="flex min-h-[110px] items-center justify-center bg-orange-500 px-6 text-xl font-bold text-white transition hover:bg-orange-600"
            >
              <Search size={22} />
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}