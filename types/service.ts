import { IconType } from "react-icons";

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: IconType;
  href: string;
}