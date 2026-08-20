import type { Vehicle } from "@/data/vehicles";

export type CabTemplateProps = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: Vehicle;

  url: string;
};