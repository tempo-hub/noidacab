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

import {
    noidaDelhiCabs,
    type NoidaDelhiCab,
} from "@/data/routes/noida-delhi-cabs";

export default function NoidaDelhiFareCabs() {
    return (
        <section
            id="available-cabs"
            className="bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Noida to New Delhi One Way Taxi
                    </h2>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        Choose from comfortable cabs for your one-way journey
                        from Noida to Delhi.
                    </p>
                </div>

                {/* All Cab Cards */}
                <div className="space-y-4">
                    {noidaDelhiCabs.map((cab) => (
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
    cab: NoidaDelhiCab;
}) {
    return (
        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
            <div className="grid gap-5 p-5 lg:grid-cols-[135px_minmax(0,1fr)_150px] lg:items-center">

                {/* Mobile: Image + basic}
                {/* Vehicle Image */}
                <div className="flex h-[100px] items-center justify-center rounded-lg bg-amber-50">
                    <div className="relative h-[75px] w-[115px]">
                        <Image
                            src={cab.image}
                            alt={`${cab.name} taxi from Noida to Delhi`}
                            fill
                            sizes="(max-width: 640px) 95px, 115px"
                            className="object-contain"
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
                            <Star
                                size={11}
                                fill="currentColor"
                            />
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

                        <span>
                            {cab.ac ? "AC" : "Non AC"}
                        </span>

                        <span>•</span>

                        <span>
                            {cab.seats} Seats
                        </span>
                    </div>

                    {/* Description */}
                    <h4 className="hidden mt-5 text-sm font-bold sm:block text-gray-900">
                        {cab.description}
                    </h4>

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
                            value={
                                cab.fuelType === "CNG"
                                    ? "CNG with refill breaks"
                                    : cab.fuelType
                            }
                        />

                        <Feature
                            icon={<ShieldCheck size={17} />}
                            label="Cancellation"
                            value={cab.cancellation}
                            valueClassName="text-emerald-600"
                        />

                    </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between gap-3 border-t pt-4 lg:border-t-0 lg:pt-0 lg:flex-col lg:items-end">
                    {/* Price */}
                    <div className="shrink-0">
                        <p className="text-xl font-bold px-8 text-gray-950 sm:text-2xl">
                            ₹{cab.price.toLocaleString("en-IN")}
                        </p>

                        <p className="mt-1 whitespace-nowrap text-[11px] text-gray-500 sm:text-xs">
                            + ₹{cab.taxes} (Taxes & Charges)
                        </p>
                    </div>

                    {/* Book Button */}
                    <button
                        type="button"
                        className="shrink-0 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
                    >
                        BOOK NOW
                    </button>
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
        <div className="flex items-start gap-2 text-sm">

            <span className="mt-0.5 shrink-0 text-amber-500">
                {icon}
            </span>

            <span className="min-w-0">

                <span className="font-medium text-gray-900">
                    {label}
                </span>

                <span className="mx-2 text-gray-900">
                    |
                </span>

                <span className={valueClassName}>
                    {value}
                </span>

            </span>

        </div>
    );
}