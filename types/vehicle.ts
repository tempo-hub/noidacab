export interface Vehicle {
  name: string;
  slug: string;
  image: string;
  price: string;

  seats: number;
  doors: number;
  luggage: number;

  airCondition: boolean;
  gps: boolean;
  driverChoice: boolean;
}