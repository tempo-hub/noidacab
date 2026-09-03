
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Fuel,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";

export interface FareCab {
  id: string;
  name: string;
  image: string;
  href?: string;
  rating: number;
  ratingsCount: number;
  category: string;
  ac: boolean;
  seats: number;
  description: string;
  extraKmFare: string;
  extraTimeFare: string;
  fuelType: string;
  cancellation: string;
  price: number;
  taxes: number;
}

interface FareCabsProps {
  cabs: FareCab[];
  title?: string;
  description?: string;
}

export default function FareCabs({
  cabs,
  title = "Available Taxi Options",
  description = "Choose from comfortable cabs with transparent fares and flexible options for your journey.",
}: FareCabsProps) {
  return (
    <section
      id="available-cabs"
      className="bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {title}
          </h2>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        {/* All Cab Cards */}
        <div className="space-y-4">
          {cabs.map((cab) => (
            <CabCard
              key={cab.id}
              cab={cab}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Cab Card */
/* -------------------------------------------------------------------------- */


function CabCard({
  cab,
}: {
  cab: FareCab;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
      <div className="p-4 sm:p-5">

        {/* ================================================================ */}
        {/* MOBILE TOP: CONTENT LEFT + IMAGE RIGHT */}
        {/* ================================================================ */}

        <div className="grid grid-cols-[1fr_105px] gap-3 sm:hidden">
          {/* Left Content */}
          <div className="min-w-0">
            {/* Name + Rating */}
            <div className="flex flex-wrap items-center gap-2">
              {cab.href ? (
                <Link
                  href={cab.href}
                  className="text-lg font-bold text-gray-900 transition hover:text-amber-600"
                >
                  {cab.name}
                </Link>
              ) : (
                <h3 className="text-lg font-bold text-gray-900">
                  {cab.name}
                </h3>
              )}

              <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-500 px-1.5 py-0.5 text-[11px] font-bold text-white">
                <Star size={10} fill="currentColor" />
                {cab.rating}/5
              </span>
            </div>

            {/* Specs */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-gray-600">
              <span>{cab.category}</span>
              <span>•</span>
              <span>{cab.ac ? "AC" : "Non AC"}</span>
              <span>•</span>
              <span>{cab.seats} Seats</span>
            </div>

            {/* Description */}
            <p className="mt-3 text-xs leading-5 text-gray-600">
              {cab.description}
            </p>
          </div>

          {/* Image Right */}
          <div className="flex h-[90px] items-center justify-center rounded-lg bg-amber-50">
            <div className="relative h-[70px] w-[100px]">
              <Image
                src={cab.image}
                alt={`${cab.name} taxi`}
                fill
                sizes="100px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* MOBILE FEATURES */}
        {/* ================================================================ */}

        <div className="mt-4 grid grid-cols-1 gap-2 sm:hidden">
          <Feature
            icon={<MapPin size={15} />}
            label="Extra km fare"
            value={cab.extraKmFare}
          />

          <Feature
            icon={<Clock3 size={15} />}
            label="Extra time fare"
            value={cab.extraTimeFare}
          />

          <Feature
            icon={<Fuel size={15} />}
            label="Fuel Type"
            value={cab.fuelType}
          />

          <Feature
            icon={<ShieldCheck size={15} />}
            label="Cancellation"
            value={cab.cancellation}
            valueClassName="text-emerald-600"
          />
        </div>

        {/* ================================================================ */}
        {/* MOBILE PRICE */}
        {/* ================================================================ */}

        <div className="mt-5 border-t border-gray-100 pt-4 sm:hidden">
          <div className="flex items-center justify-between gap-3">
            {/* Fare */}
            <div>
              <p className="text-[11px] font-medium text-gray-500">
                Estimated fare for 40 km
              </p>

              <p className="mt-1 text-xl font-bold text-gray-950">
                ₹{cab.price.toLocaleString("en-IN")}
              </p>

              <p className="mt-0.5 text-[11px] text-gray-500">
                + ₹{cab.taxes} taxes & charges
              </p>
            </div>

            {/* Book Button */}
            <a
              href="https://wa.me/918377809809"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* ================================================================ */}
        {/* DESKTOP / TABLET */}
        {/* ================================================================ */}

        <div className="hidden gap-5 sm:grid lg:grid-cols-[135px_minmax(0,1fr)_170px] lg:items-center">

          {/* Vehicle Image */}
          <div className="flex h-[100px] items-center justify-center rounded-lg bg-amber-50">
            <div className="relative h-[75px] w-[115px]">
              <Image
                src={cab.image}
                alt={`${cab.name} taxi`}
                fill
                sizes="115px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="min-w-0">

            {/* Name + Rating */}
            <div className="flex flex-wrap items-center gap-2">
              {cab.href ? (
                <Link
                  href={cab.href}
                  className="text-xl font-bold text-gray-900 transition hover:text-amber-600 hover:underline"
                >
                  {cab.name}
                </Link>
              ) : (
                <h3 className="text-xl font-bold text-gray-900">
                  {cab.name}
                </h3>
              )}

              <span className="text-xs text-gray-400">
                specific model
              </span>

              <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-500 px-1.5 py-0.5 text-xs font-bold text-white">
                <Star size={11} fill="currentColor" />
                {cab.rating}/5
              </span>

              {cab.ratingsCount > 0 && (
                <span className="text-xs text-gray-400">
                  {cab.ratingsCount} ratings
                </span>
              )}
            </div>

            {/* Basic Specs */}
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-700">
              <span>{cab.category}</span>
              <span>•</span>
              <span>{cab.ac ? "AC" : "Non AC"}</span>
              <span>•</span>
              <span>{cab.seats} Seats</span>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm font-bold text-gray-900">
              {cab.description}
            </p>

            {/* Features */}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Feature
                icon={<MapPin size={17} />}
                label="Extra km fare"
                value={cab.extraKmFare}
              />

              <Feature
                icon={<Clock3 size={17} />}
                label="Extra time fare"
                value={cab.extraTimeFare}
              />

              <Feature
                icon={<Fuel size={17} />}
                label="Fuel Type"
                value={cab.fuelType}
              />

              <Feature
                icon={<ShieldCheck size={17} />}
                label="Cancellation"
                value={cab.cancellation}
                valueClassName="text-emerald-600"
              />
            </div>
          </div>

          {/* Desktop Price */}
          <div className="flex flex-col items-end">

            <p className="text-xs font-medium text-gray-500">
              Estimated fare for 40 km
            </p>

            <p className="mt-1 text-2xl font-bold text-gray-950">
              ₹{cab.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-1 whitespace-nowrap text-xs text-gray-500">
              + ₹{cab.taxes} taxes & charges
            </p>

            {/* Book Button */}
            <a
              href="https://wa.me/+918377809809"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
            >
              BOOK NOW
            </a>
          </div>

        </div>
      </div>
    </article>
  );
}


/* -------------------------------------------------------------------------- */
/* Feature */
/* -------------------------------------------------------------------------- */

function Feature({
  icon,
  label,
  value,
  valueClassName = "text-gray-900",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-start gap-2 text-xs sm:text-sm">

      <span className="mt-0.5 shrink-0 text-amber-500">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="font-medium text-gray-900">
          {label}
        </span>

        <span className="mx-1.5 text-gray-400">
          |
        </span>

        <span className={valueClassName}>
          {value}
        </span>
      </span>

    </div>
  );
}

