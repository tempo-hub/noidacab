// data/routes/index.ts
import { noidaToDelhiRoutes } from "./noida-to-delhi";
import { delhiToNoidaRoutes } from "./delhi-to-noida";
import { noidaLocalities } from "./noida";

export const allRoutes = {
  "local-noida": noidaToDelhiRoutes,
  "local-delhi": delhiToNoidaRoutes,
  "noida": noidaLocalities,
} as const;

export type RouteKey = keyof typeof allRoutes;

export const cityPairRoutes = {
  // "noida-to-delhi": noidaToDelhiRoutes,
  // "noida": noidaToDelhiRoutes,
  "noida": noidaLocalities,
  // add future city pairs here, e.g. "noida-to-agra": noidaToAgraRoutes,
} as const;

export type CityPairSlug = keyof typeof cityPairRoutes;