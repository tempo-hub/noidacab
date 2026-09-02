"use client";

import Image from "next/image";
import {
  CarFront,
  Check,
  Luggage,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import type { Vehicle } from "@/data/vehicles";
import { RouteData } from "@/data/routes/taxiroutes";

type VehicleSectionProps = {
  route: RouteData;
  vehicles: Vehicle[];
};

type FilterType = "category" | "model";

const categories = [
  "Sedan",
  "Hatchback",
  "SUV",
] as const;

export default function VehicleSection({
  route,
  vehicles,
}: VehicleSectionProps) {
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>([]);

  const [selectedModels, setSelectedModels] =
    useState<string[]>([]);

  const [showMobileFilters, setShowMobileFilters] =
    useState(false);

  const toggleFilter = (
    type: FilterType,
    value: string
  ) => {
    if (type === "category") {
      setSelectedCategories((current) =>
        current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value]
      );
    }

    if (type === "model") {
      setSelectedModels((current) =>
        current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value]
      );
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedModels([]);
  };

  const availableVehicles = useMemo(() => {
  return vehicles.filter(
    (vehicle) =>
      vehicle.category !== "Tempo Traveller" &&
      vehicle.category !== "Urbania"
  );
}, [vehicles]);

  const availableCategories = useMemo(() => {
    return categories.filter((category) =>
      availableVehicles.some(
        (vehicle) =>
          vehicle.category === category
      )
    );
  }, [vehicles]);

  const availableModels = useMemo(() => {
    return availableVehicles.map(
      (vehicle) => vehicle.name
    );
  }, [vehicles]);

  const filteredVehicles = useMemo(() => {
    return availableVehicles.filter((vehicle) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(
          vehicle.category
        );

      const modelMatch =
        selectedModels.length === 0 ||
        selectedModels.includes(vehicle.name);

      return categoryMatch && modelMatch;
    });
  }, [
    vehicles,
    selectedCategories,
    selectedModels,
  ]);

  return (
    <section
      id="available-cabs"
      className="border-b border-gray-300 bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Mobile Header */}
        <div className="mb-5 flex items-center justify-between lg:hidden">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Available Cabs
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredVehicles.length} vehicles
              available
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setShowMobileFilters(true)
            }
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700"
          >
            <CarFront size={17} />
            Filters
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">

          {/* Desktop Filters */}
          <aside className="hidden self-start lg:sticky lg:top-6 lg:block">
            <FilterPanel
              categories={availableCategories}
              models={availableModels}
              selectedCategories={
                selectedCategories
              }
              selectedModels={
                selectedModels
              }
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Main Listing */}
          <div className="min-w-0">

            {/* Heading */}
            <div className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {route.from.name} to{" "}
                {route.to.name} Taxi
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Choose from comfortable cabs for
                your journey from{" "}
                {route.from.name} to{" "}
                {route.to.name}.
              </p>

              {/* <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-500">
                <span>
                  {route.distance}
                </span>

                <span>•</span>

                <span>
                  {route.duration}
                </span>
              </div> */}
            </div>

            {/* Active Filters */}
            {(selectedCategories.length > 0 ||
              selectedModels.length > 0) && (
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600">
                  Filters:
                </span>

                {[
                  ...selectedCategories,
                  ...selectedModels,
                ].map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600"
                  >
                    {filter}
                  </span>
                ))}

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-semibold text-red-500 hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Vehicle Cards */}
            <div className="space-y-4">
              {filteredVehicles.map(
                (vehicle) => (
                  <VehicleCard
                    key={vehicle.slug}
                    vehicle={vehicle}
                    route={route}
                  />
                )
              )}
            </div>

            {/* Empty State */}
            {filteredVehicles.length === 0 && (
              <div className="rounded-xl border border-gray-200 p-10 text-center">
                <CarFront
                  className="mx-auto text-gray-400"
                  size={40}
                />

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  No cabs found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing or clearing your
                  filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() =>
              setShowMobileFilters(false)
            }
          />

          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Select Filters
              </h2>

              <button
                type="button"
                onClick={() =>
                  setShowMobileFilters(false)
                }
                aria-label="Close filters"
                className="rounded-full p-2 bg-slate-700 hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>

            <FilterPanel
              categories={availableCategories}
              models={availableModels}
              selectedCategories={
                selectedCategories
              }
              selectedModels={
                selectedModels
              }
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
            />

            <button
              type="button"
              onClick={() =>
                setShowMobileFilters(false)
              }
              className="mt-7 w-full rounded-lg bg-amber-500 py-3 font-semibold text-white"
            >
              Show {filteredVehicles.length} Cabs
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Filter Panel */
/* -------------------------------------------------------------------------- */

function FilterPanel({
  categories,
  models,
  selectedCategories,
  selectedModels,
  toggleFilter,
  clearFilters,
}: {
  categories: readonly string[];
  models: string[];
  selectedCategories: string[];
  selectedModels: string[];
  toggleFilter: (
    type: FilterType,
    value: string
  ) => void;
  clearFilters: () => void;
}) {
  const hasFilters =
    selectedCategories.length > 0 ||
    selectedModels.length > 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          Select Filters
        </h2>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-semibold text-amber-500"
          >
            Clear
          </button>
        )}
      </div>

      {/* Cab Type */}
      <FilterGroup title="Cab Type">
        {categories.map((category) => (
          <CheckboxRow
            key={category}
            label={category}
            checked={selectedCategories.includes(
              category
            )}
            onChange={() =>
              toggleFilter(
                "category",
                category
              )
            }
          />
        ))}
      </FilterGroup>

      {/* Cab Model */}
      <FilterGroup title="Cab Model">
        {models.map((model) => (
          <CheckboxRow
            key={model}
            label={model}
            checked={selectedModels.includes(
              model
            )}
            onChange={() =>
              toggleFilter(
                "model",
                model
              )
            }
          />
        ))}
      </FilterGroup>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Filter Group */
/* -------------------------------------------------------------------------- */

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-4 text-base font-semibold text-gray-800">
        {title}
      </h3>

      <div className="space-y-3.5">
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Checkbox */
/* -------------------------------------------------------------------------- */

function CheckboxRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-[18px] w-[18px] rounded border-gray-300 accent-amber-500"
      />

      <span className="flex-1">
        {label}
      </span>
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/* Vehicle Card */
/* -------------------------------------------------------------------------- */

function VehicleCard({
  vehicle,
  route,
}: {
  vehicle: Vehicle;
  route: RouteData;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">

      <div className="p-5">

  {/* Mobile: Details Left + Image Right */}
  <div className="grid grid-cols-[minmax(0,1fr)_120px] gap-4 lg:grid-cols-[135px_minmax(0,1fr)_150px] lg:items-center">

    {/* Vehicle Image */}
    <div className="order-2 flex h-[100px] items-center justify-center rounded-lg bg-amber-50 lg:order-1">
      <div className="relative h-[75px] w-[115px]">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} taxi from ${route.from.name} to ${route.to.name}`}
          fill
          sizes="115px"
          className="object-cover"
        />
      </div>
    </div>

    {/* Vehicle Details */}
    <div className="order-1 min-w-0 lg:order-2">

      <h3 className="text-xl font-bold text-gray-900">
        {vehicle.name}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-700">
        <span>{vehicle.category}</span>
        <span>•</span>

        <span>
          {vehicle.airCondition ? "AC" : "Non AC"}
        </span>

        <span>•</span>

        <span>{vehicle.seats} Seats</span>
      </div>

      {/* Features */}
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:mt-5 lg:gap-3">

        <VehicleFeature
          icon={<Users size={17} />}
          label="Seats"
          value={`${vehicle.seats} passengers`}
        />

        <VehicleFeature
          icon={<Luggage size={17} />}
          label="Luggage"
          value={`${vehicle.luggage} bags`}
        />

        <VehicleFeature
          icon={<Check size={17} />}
          label="GPS"
          value={
            vehicle.gps
              ? "Available"
              : "Not available"
          }
        />

        <VehicleFeature
          icon={<Check size={17} />}
          label="Driver"
          value={
            vehicle.driverChoice
              ? "Driver included"
              : "Not included"
          }
        />
      </div>
    </div>

    {/* Desktop Price */}
    <div className="hidden lg:block lg:order-3 lg:border-t-0 lg:pt-0 lg:text-right">

      <p className="text-2xl font-bold text-gray-950">
        {vehicle.price}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        Starting fare
      </p>

      <a
        href="tel:+918377809809"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
      >
        BOOK NOW
      </a>
    </div>
  </div>

  {/* Mobile Booking Option - Bottom */}
  <div className="mt-5 border-t border-gray-100 pt-5 lg:hidden">

    <div className="flex items-center justify-between gap-4">

      <div>
        <p className="text-2xl font-bold text-gray-950">
          {vehicle.price}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Starting fare
        </p>
      </div>

      <a
        href="tel:+918377809809"
        className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
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
/* Vehicle Feature */
/* -------------------------------------------------------------------------- */

function VehicleFeature({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className="mt-0.5 shrink-0 text-amber-500">
        {icon}
      </span>

      <span>
        <span className="font-medium text-gray-900">
          {label}
        </span>

        <span className="mx-2 text-gray-900">
          |
        </span>

        <span className="text-slate-700">
          {value}
        </span>
      </span>
    </div>
  );
}