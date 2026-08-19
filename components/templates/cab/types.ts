import { Vehicle } from "@/data/vehicles";

export type CabTemplateProps = {
  route: {
    fromSlug: string;
    fromName: string;
    toSlug: string;
    toName: string;
    distanceKm: number;
  };

  vehicle:Vehicle;

  url: string;
};