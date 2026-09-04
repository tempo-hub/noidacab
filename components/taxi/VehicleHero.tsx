"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";
import { useState } from "react";

export default function VehicleHero({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const categoryLabel = vehicle.category.toUpperCase();

  const categoryDescription: Record<Vehicle["category"], string> = {
    Hatchback:
      "Book an affordable and comfortable hatchback in Noida for local travel, airport transfers and everyday journeys.",
    Sedan:
      "Book a comfortable private sedan in Noida for business travel, airport transfers, family trips and city travel.",
    SUV:
      "Book a spacious SUV in Noida for family trips, airport transfers, outstation journeys and comfortable group travel.",
    Urbania:
      "Book a premium Force Urbania in Noida for comfortable group travel, events, tours and long-distance journeys.",
    "Tempo Traveller":
      "Book a comfortable Tempo Traveller in Noida for family trips, group tours, events, weddings and outstation travel.",
  };

  const [formData, setFormData] = useState({
    pickup: "Noida",
    drop: "Delhi",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the formatted WhatsApp message
    const message = `*New Booking Request - Noida Cab*
--------------------------------
*Vehicle:* ${vehicle.name}
*Pickup:* ${formData.pickup}
*Drop:* ${formData.drop}
*Date:* ${formData.date || "Not specified"}
*Time:* ${formData.time || "Not specified"}
*Rate:* ${vehicle.price}
--------------------------------`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918377809809";

    // Direct redirect to WhatsApp with pre-filled details
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden py-22 sm:py-20 lg:py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        {/* <Image
          src="/sedanbg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        /> */}

        {/* Amber Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/90 via-amber-500/75 to-amber-500/60" />
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-yellow-300/30 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-bold text-slate-900 backdrop-blur-sm sm:text-sm">
              <CarFront size={16} />

              NOIDA {categoryLabel} TAXI
            </div>

            {/* Heading */}
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {vehicle.name}
              <span className="block text-slate-800">
                Taxi in Noida
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-800 sm:text-lg">
              {categoryDescription[vehicle.category]}
            </p>

            {/* Highlights */}
            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <HeroFeature
                icon={<CarFront size={17} />}
                text={vehicle.airCondition ? "AC Available" : "Non AC"}
              />

              <HeroFeature
                icon={<Users size={17} />}
                text={`Up to ${vehicle.seats} Seats`}
              />

              <HeroFeature
                icon={<CheckCircle2 size={17} />}
                text="Private Cab"
              />
            </div>

            {/* Vehicle Preview */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-20 w-32 overflow-hidden rounded-xl border border-black/10 bg-white/50 backdrop-blur-sm">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} taxi in Noida`}
                  fill
                  sizes="128px"
                  className="object-contain p-2"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-950">
                  {vehicle.name}
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  {vehicle.category} • {vehicle.seats} Seats •{" "}
                  {vehicle.luggage} Bags
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Starting from {vehicle.price}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - BOOKING CARD */}
          <div className="lg:pl-6">
            <div className="rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">
              {/* Card Heading */}
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-600">
                  Book Your Ride
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {vehicle.name} Taxi Booking
                </h2>
              </div>

              <form onSubmit={handleBooking} className="space-y-3">
                {/* From */}
                <div className="rounded-xl border border-slate-200 p-3.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    From
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400" />
                    <input
                      type="text"
                      name="pickup"
                      required
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="Enter pickup location"
                      className="w-full bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* To */}
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-3.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    To
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" />
                    <input
                      type="text"
                      name="drop"
                      required
                      value={formData.drop}
                      onChange={handleChange}
                      placeholder="Enter drop location"
                      className="w-full bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-blue-600" />
                      <span className="text-xs font-semibold text-slate-500">
                        Pickup Date
                      </span>
                    </div>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1.5 w-full bg-transparent text-xs font-bold text-slate-900 outline-none"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-200 p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <div className="flex items-center gap-2">
                      <Clock3 size={16} className="text-blue-600" />
                      <span className="text-xs font-semibold text-slate-500">
                        Pickup Time
                      </span>
                    </div>
                    <input
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="mt-1.5 w-full bg-transparent text-xs font-bold text-slate-900 outline-none"
                    />
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <InfoItem label="Seats" value={vehicle.seats.toString()} />
                  <InfoItem label="Luggage" value={vehicle.luggage.toString()} />
                  <InfoItem label="Rate" value={vehicle.price} />
                </div>

                {/* Submit / Redirect Button */}
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold tracking-wide text-white transition hover:bg-orange-600 active:scale-[0.99]"
                >
                  BOOK {vehicle.name.toUpperCase()}
                  <ArrowRight size={17} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFeature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/50 text-slate-900 backdrop-blur-sm">
        {icon}
      </span>

      <span>{text}</span>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-3 text-center">
      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 truncate text-xs font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}