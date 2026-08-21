

import type { ParsedRoute } from "@/lib/parse-route";
import { SUVRouteHero } from "./SUVRouteHero";
import { SUVVehicleList } from "./SUVVehicleList";
import { SUVRouteInfo } from "./SUVRouteInfo";
import { SUVWhyChoose } from "./SUVWhyChoose";
import { SUVRouteFAQ } from "./SUVRouteFAQ";
import { SUVRouteCTA } from "./SUVRouteCTA";

export function SUVRoutePage({
  route,
}: {
  route: ParsedRoute;
}) {
  return (
    <main className="bg-slate-50">
      <SUVRouteHero route={route} />

      <SUVVehicleList route={route} />

      <SUVRouteInfo route={route} />

      <SUVWhyChoose route={route} />

      <SUVRouteFAQ route={route} />

      <SUVRouteCTA route={route} />
    </main>
  );
}