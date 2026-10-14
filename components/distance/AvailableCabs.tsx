import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CarFront } from "lucide-react";
import { vehicles, type Vehicle } from "@/data/vehicles";

interface AvailableCabsProps {
  cabs?: any[];
  from: {
    name: string;
    slug?: string;
  };
  to: {
    name: string;
    slug?: string;
  };
}

function cleanSlug(val?: string): string {
  if (!val) return "";
  return val
    .toLowerCase()
    .trim()
    .replace(/^route[-_ ]+/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getVehicleRouteSlug(vehicle: Vehicle): string {
  const vSlug = vehicle.slug.toLowerCase().trim();

  switch (vSlug) {
    case "dzire":
      return "dzire-taxi";
    case "etios":
      return "etios-taxi";
    case "amaze":
      return "amaze-taxi";
    case "sedan":
    case "sedan-taxi":
      return "sedan-taxi";
    case "ertiga":
      return "ertiga-taxi";
    case "innova-crysta":
    case "innova":
      return "innova-crysta-taxi";
    case "wagonr":
      return "wagonr-taxi";
    case "urbania":
    case "urbania-rental":
      return "urbania-rental";
    case "luxury-tempo-traveller":
      return "luxury-tempo-traveller";
    case "12-seater-tempo-traveller":
      return "12-seater-tempo-traveller";
    case "16-seater-tempo-traveller":
      return "16-seater-tempo-traveller";
    case "20-seater-tempo-traveller":
      return "20-seater-tempo-traveller";
    case "24-seater-tempo-traveller":
      return "24-seater-tempo-traveller";
    default:
      if (/tempo[- ]?traveller/i.test(vSlug)) {
        return vSlug;
      }
      return vSlug.endsWith("-taxi") ? vSlug : `${vSlug}-taxi`;
  }
}

function getCabUrl(
  fromSlug: string,
  toSlug: string,
  vehicle: Vehicle,
): string {
  const vSlug = getVehicleRouteSlug(vehicle);
  return `/route/${fromSlug}-to-${toSlug}-${vSlug}`;
}

export default function AvailableCabs({
  from,
  to,
}: AvailableCabsProps) {
  const fromSlug = cleanSlug(from?.slug) || cleanSlug(from?.name) || "noida";
  const toSlug = cleanSlug(to?.slug) || cleanSlug(to?.name) || "delhi";

  return (
    <section className="border-b border-gray-200 bg-white/95 px-4 py-12 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
            Our Fleet
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Choose Your{" "}
            <span className="text-orange-500">
              Cab for {from.name} to {to.name}
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
            Compare available vehicles, images and per-kilometre
            rates for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => {
            const cabUrl = getCabUrl(fromSlug, toSlug, vehicle);

            return (
              <article
                key={vehicle.slug}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-orange-200 hover:shadow-lg"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-zinc-50">
                  {vehicle.image ? (
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} for ${from.name} to ${to.name}`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <CarFront className="h-14 w-14 text-zinc-400" />
                  )}

                  {vehicle.category && (
                    <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-600 shadow-sm">
                      {vehicle.category}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-zinc-950">
                    {vehicle.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-orange-500"
                      aria-hidden="true"
                    />
                    <span>Comfortable AC vehicle • {vehicle.seats} Seats</span>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-zinc-200 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Starting rate
                      </p>
                      <p className="mt-0.5 text-lg font-bold text-zinc-950">
                        {vehicle.price}
                      </p>
                    </div>

                    <Link
                      href={cabUrl}
                      className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                    >
                      View
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}