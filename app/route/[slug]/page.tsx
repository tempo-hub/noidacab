import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { parseDynamicRouteSlug, buildPopularRouteItem } from "@/data/popularRoutesData";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import CabFleet from "@/components/cab/CabFleet";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabCTA from "@/components/cab/CabCTA";
import {
  MapPin,
  Clock,
  Car,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock3,
  Send,
  Phone,
  Sparkles,
  Users,
  Briefcase,
  Snowflake,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import RouteFAQs from "@/components/cab-routes/RouteFAQs";
import RouteFareTemplate from "@/components/routes/fare-template/RouteFareTemplate";
import { OneWayRoutePage } from "@/components/routes/one-way/OneWayRoutePage";
import RouteContactTemplate from "@/components/routes/contact-template/RouteContactTemplate";
import { SUVRoutePage } from "@/components/routes/suv/SUVRoutePage";
import RouteVehicleTemplate from "@/components/routes/taxi-routes/RouteVehicleTemplate";
import DistanceRoute from "@/components/distance/DistanceRoute";
import NearbyTempoTemplate from "@/components/routes/noida-nearbytempo/NearbyTempoTemplate";
import {
  RouteInnovaPage,
  RouteErtigaPage,
  RouteDzirePage,
  RouteAmazePage,
  RouteEtiosPage,
  RouteSedanPage,
  Route12SeaterTempoPage,
  Route16SeaterTempoPage,
  Route20SeaterTempoPage,
  Route24SeaterTempoPage,
  RouteLuxuryTempoPage,
  RouteTempoTravellerPage,
  RouteUrbaniaPage,
} from "@/components/routes/vehicles";
import { vehicles, type Vehicle } from "@/data/vehicles";
import { noidaRoutes, noidaCabs } from "@/data/routes/noidaRoutes";
import type { ParsedRoute, ParsedCityToCityVehicleRoute } from "@/lib/parse-route";
import type { RouteData } from "@/data/routes/taxiroutes";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const route = parseDynamicRouteSlug(slug);

  const isContactRoute =
    route.vehicleSlug === "contact-number" ||
    slug.toLowerCase().endsWith("-contact-number") ||
    slug.toLowerCase().endsWith("-taxi-contact-number");

  if (isContactRoute) {
    return {
      title: `${route.from} to ${route.to} Taxi Contact Number | 24x7 Cab Booking Helpline: 8377809809`,
      description: `Need an urgent taxi from ${route.from} to ${route.to}? Call ${route.from} to ${route.to} Cab Contact Number +91-8377809809 for immediate doorstep pickup. Clean Sedans, SUVs & Tempo Travellers. Distance: ${route.distance} (${route.duration}). Starting @ ${route.fare}.`,
      keywords: [
        `${route.from} to ${route.to} taxi contact number`,
        `${route.from} to ${route.to} cab contact number`,
        `${route.from} to ${route.to} taxi phone number`,
        `${route.from} to ${route.to} cab helpline`,
        `${route.from} to ${route.to} cab booking number`,
        `call taxi from ${route.from} to ${route.to}`,
        `book cab ${route.from} to ${route.to} phone number`,
        "NoidaCab contact number",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Taxi Contact Number - NoidaCab`,
        description: `24x7 Cab Booking Helpline +91-8377809809 for ${route.from} to ${route.to}. Clean cabs, verified drivers, starting @ ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (route.vehicleSlug === "one-way-taxi" || slug.toLowerCase().endsWith("-one-way-taxi")) {
    return {
      title: `${route.from} to ${route.to} One Way Cab Starting @ ${route.fare} | NoidaCab`,
      description: `Book a reliable one-way cab from ${route.from} to ${route.to} with NoidaCab. Clean AC cars, professional drivers, transparent fares. Distance: ${route.distance} (${route.duration}). Call 8377809809.`,
      keywords: [
        `${route.from} to ${route.to} one way cab`,
        `${route.from} to ${route.to} one way taxi`,
        `${route.from} to ${route.to} drop taxi`,
        `one way taxi from ${route.from} to ${route.to}`,
        `one side cab ${route.from} to ${route.to}`,
        `cheapest one way cab ${route.from} to ${route.to}`,
        `${route.from} to ${route.to} outstation one way cab`,
        "NoidaCab one way drop taxi",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} One Way Cab - NoidaCab`,
        description: `Book one-way cab from ${route.from} to ${route.to}. Starting fare: ${route.fare}. Zero return charges.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  const isFareRoute =
    route.vehicleSlug === "taxi-fare" ||
    slug.toLowerCase().endsWith("-taxi-fare") ||
    slug.toLowerCase().endsWith("-fare-taxi");

  if (isFareRoute) {
    return {
      title: `${route.from} to ${route.to} Taxi Fare Starting @ ${route.fare} - NoidaCab`,
      description: `Check affordable taxi fares from ${route.from} to ${route.to}. Clean AC Sedans & SUVs starting @ ₹10/km. Distance: ${route.distance} (${route.duration}). Transparent pricing, zero hidden charges. Call 8377809809.`,
      keywords: [
        `${route.from} to ${route.to} taxi fare`,
        `${route.from} to ${route.to} cab fare`,
        `${route.from} to ${route.to} taxi price`,
        `${route.from} to ${route.to} taxi rate per km`,
        `${route.from} to ${route.to} cab charges`,
        `how much taxi fare from ${route.from} to ${route.to}`,
        `${route.from} to ${route.to} one way taxi fare`,
        `${route.from} to ${route.to} round trip taxi fare`,
        "NoidaCab fare chart",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Taxi Fare - NoidaCab`,
        description: `Check transparent taxi fares from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (slug.toLowerCase().endsWith("-distance-travel-time")) {
    return {
      title: `${route.from} to ${route.to} Distance & Travel Time | Route Info & Cabs | NoidaCab`,
      description: `Check ${route.from} to ${route.to} distance (${route.distance}), travel time (${route.duration}) and route details. Book clean cabs with NoidaCab. Call 8377809809.`,
      keywords: [
        `${route.from} to ${route.to} distance`,
        `${route.from} to ${route.to} travel time`,
        `${route.from} to ${route.to} road distance`,
        `${route.from} to ${route.to} driving duration`,
        `${route.from} to ${route.to} distance by road`,
        `${route.from} to ${route.to} route map`,
        `${route.from} to ${route.to} expressway route`,
        `${route.from} to ${route.to} cab travel time`,
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${slug.toLowerCase()}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Distance & Travel Time - NoidaCab`,
        description: `Travel info between ${route.from} and ${route.to}: distance ${route.distance}, duration ${route.duration}.`,
        url: `https://www.noidacab.com/route/${slug.toLowerCase()}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (route.vehicleSlug === "suv-taxi" || slug.toLowerCase().endsWith("-suv-taxi")) {
    return {
      title: `${route.from} to ${route.to} SUV Taxi | Ertiga & Innova Cab Starting @ ${route.fare} | NoidaCab`,
      description: `Book 6-7 seater SUV cab from ${route.from} to ${route.to}. Clean Ertiga and Innova Crysta cabs with verified drivers. Distance: ${route.distance} (${route.duration}).`,
      keywords: [
        `${route.from} to ${route.to} SUV taxi`,
        `${route.from} to ${route.to} SUV cab`,
        `${route.from} to ${route.to} 6 seater taxi`,
        `${route.from} to ${route.to} 7 seater cab`,
        `${route.from} to ${route.to} Ertiga taxi`,
        `${route.from} to ${route.to} Innova cab`,
        `SUV car rental ${route.from} to ${route.to}`,
        `family SUV cab ${route.from} to ${route.to}`,
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} SUV Taxi - NoidaCab`,
        description: `Spacious SUV cabs from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "12-seater-tempo-traveller" ||
    slug.toLowerCase().includes("12-seater")
  ) {
    return {
      title: `${route.from} to ${route.to} 12 Seater Tempo Traveller Hire @ ₹20/km | NoidaCab`,
      description: `Book 12 Seater Tempo Traveller from ${route.from} to ${route.to} for family trips & corporate outings. AC pushback seats, luggage carrier & verified driver. Starting @ ₹20/km. Distance: ${route.distance}.`,
      keywords: [
        `${route.from} to ${route.to} 12 seater tempo traveller`,
        `12 seater tempo traveller hire ${route.from} to ${route.to}`,
        `12 seater tempo traveller on rent ${route.from} to ${route.to}`,
        `12 seater tempo traveller fare ${route.from} to ${route.to}`,
        `12 seater luxury tempo traveller ${route.from} to ${route.to}`,
        `12 seater tempo traveller per km rate`,
        `group travel 12 seater tempo ${route.from} to ${route.to}`,
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} 12 Seater Tempo Traveller - NoidaCab`,
        description: `12 Seater Tempo Traveller rental from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "16-seater-tempo-traveller" ||
    slug.toLowerCase().includes("16-seater")
  ) {
    return {
      title: `${route.from} to ${route.to} 16 Seater Tempo Traveller Hire @ ₹25/km | NoidaCab`,
      description: `Rent 16 Seater Tempo Traveller from ${route.from} to ${route.to} with pushback luxury seats, high roof, dual AC & music system. Ideal for medium groups @ ₹25/km. Distance: ${route.distance}.`,
      keywords: [
        `${route.from} to ${route.to} 16 seater tempo traveller`,
        `16 seater tempo traveller hire ${route.from} to ${route.to}`,
        `16 seater tempo traveller on rent ${route.from} to ${route.to}`,
        `16 seater tempo traveller price ${route.from} to ${route.to}`,
        `16 seater luxury tempo traveller ${route.from} to ${route.to}`,
        `16 seater tempo traveller per km rate`,
        `16 seater minibus ${route.from} to ${route.to}`,
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} 16 Seater Tempo Traveller - NoidaCab`,
        description: `16 Seater Tempo Traveller rental from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "20-seater-tempo-traveller" ||
    slug.toLowerCase().includes("20-seater")
  ) {
    return {
      title: `${route.from} to ${route.to} 20 Seater Tempo Traveller Rental @ ₹27/km | NoidaCab`,
      description: `Book 20 Seater Tempo Traveller from ${route.from} to ${route.to}. Spacious 2x1 seating, walk-in aisle, luggage boot & experienced driver @ ₹27/km. Distance: ${route.distance}.`,
      keywords: [
        `${route.from} to ${route.to} 20 seater tempo traveller`,
        `20 seater tempo traveller hire ${route.from} to ${route.to}`,
        `20 seater tempo traveller on rent ${route.from} to ${route.to}`,
        `20 seater tempo traveller fare ${route.from} to ${route.to}`,
        `20 seater luxury tempo traveller ${route.from} to ${route.to}`,
        `20 seater tempo rate per km`,
        `20 seater mini bus rental ${route.from} to ${route.to}`,
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} 20 Seater Tempo Traveller - NoidaCab`,
        description: `20 Seater Tempo Traveller rental from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "24-seater-tempo-traveller" ||
    slug.toLowerCase().includes("24-seater")
  ) {
    return {
      title: `${route.from} to ${route.to} 24 Seater Tempo Traveller / Mini Bus @ ₹29/km | NoidaCab`,
      description: `Hire 24 Seater Tempo Traveller / Mini Bus from ${route.from} to ${route.to} for weddings, pilgrimages & corporate events. 2x2 luxury pushback seats @ ₹29/km. Distance: ${route.distance}.`,
      keywords: [
        `${route.from} to ${route.to} 24 seater tempo traveller`,
        `24 seater tempo traveller hire ${route.from} to ${route.to}`,
        `24 seater mini bus rental ${route.from} to ${route.to}`,
        `24 seater tempo traveller on rent ${route.from} to ${route.to}`,
        `24 seater luxury tempo traveller ${route.from} to ${route.to}`,
        `24 seater tempo traveller per km rate`,
        `wedding 24 seater bus ${route.from} to ${route.to}`,
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} 24 Seater Tempo Traveller - NoidaCab`,
        description: `24 Seater Tempo Traveller / Mini Bus rental from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "luxury-tempo-traveller" ||
    slug.toLowerCase().includes("luxury-tempo") ||
    (slug.toLowerCase().includes("luxury") && slug.toLowerCase().includes("tempo"))
  ) {
    return {
      title: `${route.from} to ${route.to} Luxury Tempo Traveller | Maharaja Recliner Seats @ ₹25/km | NoidaCab`,
      description: `Rent Luxury Maharaja Tempo Traveller from ${route.from} to ${route.to}. 1x1 VIP sofa recliner seats, starlight ambient lighting, ice box & LCD screen @ ₹25/km. Distance: ${route.distance}.`,
      keywords: [
        `${route.from} to ${route.to} luxury tempo traveller`,
        `maharaja tempo traveller ${route.from} to ${route.to}`,
        `luxury tempo traveller hire ${route.from} to ${route.to}`,
        `VIP tempo traveller ${route.from} to ${route.to}`,
        `luxury tempo traveller on rent ${route.from} to ${route.to}`,
        `luxury tempo traveller rate per km`,
        `1x1 recliner sofa tempo traveller ${route.from} to ${route.to}`,
        "luxury tempo traveller booking",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Luxury Tempo Traveller - NoidaCab`,
        description: `Luxury Maharaja Tempo Traveller rental from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "urbania-rental" ||
    route.vehicleSlug === "urbania" ||
    slug.toLowerCase().includes("urbania")
  ) {
    return {
      title: `${route.from} to ${route.to} Force Urbania Rental | 12 Seater Luxury Van @ ₹25/km | NoidaCab`,
      description: `Rent Force Urbania from ${route.from} to ${route.to} for luxury group & corporate travel. European monocoque chassis, individual AC vents, reclining captain seats @ ₹25/km. Distance: ${route.distance}.`,
      keywords: [
        `${route.from} to ${route.to} Force Urbania rental`,
        `Force Urbania hire ${route.from} to ${route.to}`,
        `Force Urbania 12 seater ${route.from} to ${route.to}`,
        `Force Urbania on rent ${route.from} to ${route.to}`,
        `Force Urbania per km rate ${route.from} to ${route.to}`,
        `luxury Urbania van booking ${route.from} to ${route.to}`,
        "Force Urbania luxury tempo",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Force Urbania Rental - NoidaCab`,
        description: `Premium Force Urbania luxury van rental from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "tempo-traveller" ||
    slug.toLowerCase().endsWith("-tempo-traveller") ||
    slug.toLowerCase().endsWith("-tempo")
  ) {
    return {
      title: `${route.from} to ${route.to} Tempo Traveller | 9-26 Seater Hire @ ₹20/km | NoidaCab`,
      description: `Rent Tempo Traveller from ${route.from} to ${route.to} for group tours, weddings, and corporate trips. Choose from 12, 16, 20 & 24 seater luxury tempos with pushback seats. Distance: ${route.distance}.`,
      keywords: [
        `${route.from} to ${route.to} tempo traveller`,
        `tempo traveller hire ${route.from} to ${route.to}`,
        `tempo traveller on rent ${route.from} to ${route.to}`,
        `tempo traveller fare ${route.from} to ${route.to}`,
        `luxury tempo traveller ${route.from} to ${route.to}`,
        `tempo traveller per km rate ${route.from} to ${route.to}`,
        `9 to 26 seater tempo traveller ${route.from} to ${route.to}`,
        `outstation tempo traveller ${route.from} to ${route.to}`,
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Tempo Traveller - NoidaCab`,
        description: `Reliable Tempo Traveller hire from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "innova-crysta" ||
    route.vehicleSlug === "innova-crysta-taxi" ||
    slug.toLowerCase().includes("innova")
  ) {
    return {
      title: `${route.from} to ${route.to} Innova Crysta Taxi | 6-7 Seater Luxury MUV Starting @ ${route.fare} | NoidaCab`,
      description: `Book 6-7 seater Toyota Innova Crysta taxi from ${route.from} to ${route.to}. Reclining captain seats, dual AC, 4-5 bag boot space. Distance: ${route.distance} (${route.duration}). Call 8377809809.`,
      keywords: [
        `${route.from} to ${route.to} Innova Crysta taxi`,
        `${route.from} to ${route.to} Innova Crysta cab`,
        `Innova Crysta hire from ${route.from} to ${route.to}`,
        `Innova Crysta per km rate ${route.from} to ${route.to}`,
        `Toyota Innova Crysta 7 seater ${route.from} to ${route.to}`,
        `Innova Crysta fare ${route.from} to ${route.to}`,
        `luxury Innova cab ${route.from} to ${route.to}`,
        "Innova Crysta outstation taxi",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Innova Crysta Taxi - NoidaCab`,
        description: `Toyota Innova Crysta luxury taxi from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "ertiga" ||
    route.vehicleSlug === "ertiga-taxi" ||
    slug.toLowerCase().includes("ertiga")
  ) {
    return {
      title: `${route.from} to ${route.to} Ertiga Taxi | 6 Seater MUV Cab Starting @ ${route.fare} | NoidaCab`,
      description: `Book affordable 6-seater Maruti Ertiga cab from ${route.from} to ${route.to} starting @ ₹13/km. Roof AC vents, flexible seating, verified drivers. Distance: ${route.distance} (${route.duration}).`,
      keywords: [
        `${route.from} to ${route.to} Ertiga taxi`,
        `${route.from} to ${route.to} Ertiga cab`,
        `Maruti Ertiga hire from ${route.from} to ${route.to}`,
        `Ertiga 6 seater taxi ${route.from} to ${route.to}`,
        `Ertiga taxi fare ${route.from} to ${route.to}`,
        `Ertiga per km rate ${route.from} to ${route.to}`,
        `budget 6 seater SUV ${route.from} to ${route.to}`,
        "Ertiga outstation cab",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Ertiga Taxi - NoidaCab`,
        description: `Maruti Ertiga 6-seater cab from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "dzire" ||
    route.vehicleSlug === "dzire-taxi" ||
    slug.toLowerCase().includes("dzire")
  ) {
    return {
      title: `${route.from} to ${route.to} Dzire Taxi | 4 Seater AC Sedan Cab Starting @ ${route.fare} | NoidaCab`,
      description: `Book Maruti Dzire AC sedan from ${route.from} to ${route.to} starting @ ₹10/km. 378L boot space, clean seats, prompt doorstep pickup. Distance: ${route.distance} (${route.duration}).`,
      keywords: [
        `${route.from} to ${route.to} Dzire taxi`,
        `${route.from} to ${route.to} Dzire cab`,
        `Maruti Dzire taxi fare ${route.from} to ${route.to}`,
        `Dzire sedan hire from ${route.from} to ${route.to}`,
        `Dzire per km rate ${route.from} to ${route.to}`,
        `4 seater AC sedan ${route.from} to ${route.to}`,
        `one way Dzire cab ${route.from} to ${route.to}`,
        "Maruti Dzire outstation taxi",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Dzire Taxi - NoidaCab`,
        description: `Maruti Dzire AC sedan from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "amaze" ||
    route.vehicleSlug === "amaze-taxi" ||
    slug.toLowerCase().includes("amaze")
  ) {
    return {
      title: `${route.from} to ${route.to} Honda Amaze Taxi | 420L Boot Sedan Starting @ ${route.fare} | NoidaCab`,
      description: `Rent Honda Amaze sedan with class-leading 420L boot space from ${route.from} to ${route.to}. Quiet cabin, smooth cruising, transparent ₹10/km fares. Distance: ${route.distance} (${route.duration}).`,
      keywords: [
        `${route.from} to ${route.to} Honda Amaze taxi`,
        `${route.from} to ${route.to} Honda Amaze cab`,
        `Honda Amaze sedan hire ${route.from} to ${route.to}`,
        `Amaze taxi fare ${route.from} to ${route.to}`,
        `Amaze per km rate ${route.from} to ${route.to}`,
        `sedan cab with large boot ${route.from} to ${route.to}`,
        "Honda Amaze outstation taxi",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Honda Amaze Taxi - NoidaCab`,
        description: `Honda Amaze sedan from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "etios" ||
    route.vehicleSlug === "etios-taxi" ||
    slug.toLowerCase().includes("etios")
  ) {
    return {
      title: `${route.from} to ${route.to} Toyota Etios Taxi | 592L Boot Touring Sedan Starting @ ${route.fare} | NoidaCab`,
      description: `Book Toyota Platinum Etios touring sedan from ${route.from} to ${route.to} with massive 592L trunk and flat rear floorboard. ₹10/km highway rates. Distance: ${route.distance} (${route.duration}).`,
      keywords: [
        `${route.from} to ${route.to} Toyota Etios taxi`,
        `${route.from} to ${route.to} Toyota Etios cab`,
        `Toyota Etios hire from ${route.from} to ${route.to}`,
        `Etios sedan rate per km ${route.from} to ${route.to}`,
        `Etios taxi fare ${route.from} to ${route.to}`,
        `spacious sedan cab ${route.from} to ${route.to}`,
        "Toyota Etios outstation taxi",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Toyota Etios Taxi - NoidaCab`,
        description: `Toyota Etios touring sedan from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  if (
    route.vehicleSlug === "sedan-taxi" ||
    route.vehicleSlug === "sedan" ||
    slug.toLowerCase().includes("sedan")
  ) {
    return {
      title: `${route.from} to ${route.to} Sedan Taxi | Dzire, Etios & Amaze Cab Starting @ ${route.fare} | NoidaCab`,
      description: `Book prime AC Sedan cab from ${route.from} to ${route.to} starting @ ₹10/km. Clean cars, professional highway chauffeurs, zero surge. Distance: ${route.distance} (${route.duration}).`,
      keywords: [
        `${route.from} to ${route.to} sedan taxi`,
        `${route.from} to ${route.to} sedan cab`,
        `AC sedan hire from ${route.from} to ${route.to}`,
        `sedan cab fare ${route.from} to ${route.to}`,
        `sedan rate per km ${route.from} to ${route.to}`,
        `Dzire Etios Amaze taxi ${route.from} to ${route.to}`,
        `cheapest sedan cab ${route.from} to ${route.to}`,
        "outstation sedan taxi",
      ],
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Sedan Taxi - NoidaCab`,
        description: `Prime Sedan cab from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  return {
    title: `${route.from} to ${route.to} ${route.vehicle} | Starting ${route.fare} - NoidaCab`,
    description: `Book comfortable ${route.from} to ${route.to} ${route.vehicle.toLowerCase()} and taxi. Distance: ${route.distance} (${route.duration}). Transparent per-km billing, verified drivers, and doorstep pickup.`,
    keywords: [
      `${route.from} to ${route.to} taxi`,
      `${route.from} to ${route.to} cab`,
      `${route.from} to ${route.to} ${route.vehicle.toLowerCase()}`,
      `${route.from} to ${route.to} outstation cab`,
      `book taxi ${route.from} to ${route.to}`,
      `${route.from} to ${route.to} one way cab`,
      `${route.from} to ${route.to} car rental`,
      `${route.from} to ${route.to} taxi service`,
      "NoidaCab outstation taxi",
    ],
    alternates: {
      canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
    },
    openGraph: {
      title: `${route.from} to ${route.to} ${route.vehicle} - NoidaCab`,
      description: `Fast & reliable travel between ${route.from} and ${route.to}. Starting fare: ${route.fare}.`,
      url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      siteName: "NoidaCab",
    },
  };
}

export default async function DynamicRouteDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const route = parseDynamicRouteSlug(slug);

  if (slug.toLowerCase() !== route.canonicalSlug.toLowerCase()) {
    redirect(`/route/${route.canonicalSlug}`);
  }

  if (route.vehicleSlug === "taxi-fare" || slug.toLowerCase().endsWith("-taxi-fare")) {
    const fromSlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const toSlug = route.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const fareRouteData: RouteData = {
      slug: `${fromSlug}-to-${toSlug}`,
      from: {
        name: route.from,
        slug: fromSlug,
      },
      to: {
        name: route.to,
        slug: toSlug,
      },
      distance: route.distance,
      duration: route.duration,
      description:
        route.description ||
        `Book affordable and reliable taxi from ${route.from} to ${route.to} with transparent per-km fares and verified drivers.`,
      popular: true,
    };

    return <RouteFareTemplate route={fareRouteData} />;
  }

  if (route.vehicleSlug === "one-way-taxi" || slug.toLowerCase().endsWith("-one-way-taxi")) {
    return (
      <OneWayRoutePage
        route={{
          slug: route.canonicalSlug,
          from: route.from,
          to: route.to,
          distance: route.distance,
          travelTime: route.duration,
          description:
            route.description ||
            `Book a reliable one-way cab from ${route.from} to ${route.to} with NoidaCab. Choose Sedan, SUV and Innova cabs with professional drivers, comfortable rides and affordable fares.`,
        }}
      />
    );
  }

  if (
    route.vehicleSlug === "contact-number" ||
    slug.toLowerCase().endsWith("-contact-number") ||
    slug.toLowerCase().endsWith("-taxi-contact-number")
  ) {
    return <RouteContactTemplate route={route} />;
  }

  if (slug.toLowerCase().endsWith("-distance-travel-time")) {
    const fromSlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const toSlug = route.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const cityPair = `${fromSlug}-to-${toSlug}`;
    const baseDistanceRoute = noidaRoutes[cityPair] || {
      slug: cityPair,
      from: { name: route.from, slug: fromSlug },
      to: { name: route.to, slug: toSlug },
      distance: parseInt(route.distance) || 20,
      travelTime: route.duration,
      recommendedCab: noidaCabs[0],
      routes: [route.highway || "Expressway", "Main Highway"],
      cabs: noidaCabs,
    };
    return <DistanceRoute route={{ ...baseDistanceRoute, template: "distance" }} />;
  }

  if (route.vehicleSlug === "suv-taxi" || slug.toLowerCase().endsWith("-suv-taxi")) {
    const fromSlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const toSlug = route.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const suvData: ParsedRoute = {
      cityPair: `${fromSlug}-to-${toSlug}`,
      fromSlug,
      fromName: route.from,
      toSlug,
      toName: route.to,
      distance: route.distance,
      travelTime: route.duration,
      vehicleCategory: "suv",
      template: "suv-route",
      description: route.description,
    };
    return <SUVRoutePage route={suvData} />;
  }

  // 1. 12 Seater Tempo Traveller Dedicated Route Page
  if (
    route.vehicleSlug === "12-seater-tempo-traveller" ||
    slug.toLowerCase().includes("12-seater")
  ) {
    return <Route12SeaterTempoPage route={route} />;
  }

  // 2. 16 Seater Tempo Traveller Dedicated Route Page
  if (
    route.vehicleSlug === "16-seater-tempo-traveller" ||
    slug.toLowerCase().includes("16-seater")
  ) {
    return <Route16SeaterTempoPage route={route} />;
  }

  // 3. 20 Seater Tempo Traveller Dedicated Route Page
  if (
    route.vehicleSlug === "20-seater-tempo-traveller" ||
    slug.toLowerCase().includes("20-seater")
  ) {
    return <Route20SeaterTempoPage route={route} />;
  }

  // 4. 24 Seater Tempo Traveller Dedicated Route Page
  if (
    route.vehicleSlug === "24-seater-tempo-traveller" ||
    slug.toLowerCase().includes("24-seater")
  ) {
    return <Route24SeaterTempoPage route={route} />;
  }

  // 5. Luxury Maharaja Tempo Traveller Dedicated Route Page
  if (
    route.vehicleSlug === "luxury-tempo-traveller" ||
    slug.toLowerCase().includes("luxury-tempo") ||
    (slug.toLowerCase().includes("luxury") && slug.toLowerCase().includes("tempo"))
  ) {
    return <RouteLuxuryTempoPage route={route} />;
  }

  // 6. Force Urbania Dedicated Route Page
  if (
    route.vehicleSlug === "urbania-rental" ||
    route.vehicleSlug === "urbania" ||
    slug.toLowerCase().includes("urbania")
  ) {
    return <RouteUrbaniaPage route={route} />;
  }

  // 7. General Tempo Traveller Fleet Route Page
  if (
    route.vehicleSlug === "tempo-traveller" ||
    slug.toLowerCase().endsWith("-tempo-traveller") ||
    slug.toLowerCase().endsWith("-tempo")
  ) {
    return <RouteTempoTravellerPage route={route} />;
  }

  // 1. Innova Crysta Dedicated Route Page
  if (
    route.vehicleSlug === "innova-crysta" ||
    route.vehicleSlug === "innova-crysta-taxi" ||
    slug.toLowerCase().includes("innova")
  ) {
    return <RouteInnovaPage route={route} />;
  }

  // 2. Maruti Ertiga Dedicated Route Page
  if (
    route.vehicleSlug === "ertiga" ||
    route.vehicleSlug === "ertiga-taxi" ||
    slug.toLowerCase().includes("ertiga")
  ) {
    return <RouteErtigaPage route={route} />;
  }

  // 3. Maruti Dzire Dedicated Route Page
  if (
    route.vehicleSlug === "dzire" ||
    route.vehicleSlug === "dzire-taxi" ||
    slug.toLowerCase().includes("dzire")
  ) {
    return <RouteDzirePage route={route} />;
  }

  // 4. Honda Amaze Dedicated Route Page
  if (
    route.vehicleSlug === "amaze" ||
    route.vehicleSlug === "amaze-taxi" ||
    slug.toLowerCase().includes("amaze")
  ) {
    return <RouteAmazePage route={route} />;
  }

  // 5. Toyota Etios Dedicated Route Page
  if (
    route.vehicleSlug === "etios" ||
    route.vehicleSlug === "etios-taxi" ||
    slug.toLowerCase().includes("etios")
  ) {
    return <RouteEtiosPage route={route} />;
  }

  // 6. Prime Sedan Dedicated Route Page
  if (
    route.vehicleSlug === "sedan-taxi" ||
    route.vehicleSlug === "sedan" ||
    slug.toLowerCase().includes("sedan")
  ) {
    return <RouteSedanPage route={route} />;
  }

  const matchedVehicle = vehicles.find((v) => {
    const cleanSlug = v.slug.toLowerCase();
    return (
      slug.toLowerCase().endsWith(`-${cleanSlug}-taxi`) ||
      slug.toLowerCase().endsWith(`-${cleanSlug}`) ||
      route.vehicleSlug === `${cleanSlug}-taxi` ||
      route.vehicleSlug === cleanSlug
    );
  });

  if (matchedVehicle) {
    const fromSlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const toSlug = route.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const cityToCityVehicleRoute: ParsedCityToCityVehicleRoute = {
      cityPair: `${fromSlug}-to-${toSlug}`,
      fromSlug,
      fromName: route.from,
      toSlug,
      toName: route.to,
      distance: route.distance,
      travelTime: route.duration,
      vehicle: matchedVehicle,
      template: matchedVehicle.category === "Tempo Traveller" ? "tempo-traveller" : "route-vehicle",
      description: route.description,
    };
    return <RouteVehicleTemplate route={cityToCityVehicleRoute} />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${route.from} to ${route.to} ${route.vehicle} Service`,
    description: route.description,
    url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
    telephone: "+918377809809",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
    },
    areaServed: [
      { "@type": "City", name: route.from },
      { "@type": "City", name: route.to },
    ],
  };

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${route.vehicle} from ${route.from} to ${route.to} (${route.distance}, Starting ${route.fare}). Please confirm fare & availability.`
  )}`;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Route Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 to-white py-20 md:py-20 border-b border-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>Expressway Certified Route</span>
                <span className="h-1 w-1 rounded-full bg-amber-500" />
                <span>{route.highway}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600 block sm:inline">
                  {route.vehicle} Booking
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl">
                {route.description}
              </p>

              {/* Key Route Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs text-center">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Distance</p>
                  <p className="text-lg sm:text-2xl font-black text-gray-900 mt-1">{route.distance}</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs text-center">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Duration</p>
                  <p className="text-lg sm:text-2xl font-black text-gray-900 mt-1">{route.duration}</p>
                </div>

                <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-4 shadow-xs text-center">
                  <p className="text-xs font-semibold text-amber-800 uppercase">Starting Fare</p>
                  <p className="text-lg sm:text-2xl font-black text-amber-600 mt-1">{route.fare}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-600/25 transition hover:bg-amber-500"
                >
                  <Send className="h-4 w-4" />
                  Book {route.vehicle} on WhatsApp
                </a>

                <a
                  href="tel:+918377809809"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-bold text-gray-800 shadow-xs transition hover:bg-gray-50 hover:border-gray-400"
                >
                  <Phone className="h-4 w-4 text-amber-600" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Card: Quick Booking Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Instant Booking</h3>
                    <p className="text-xs text-gray-500">{route.from} → {route.to}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                    Instant Quote
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>PICKUP LOCATION</span>
                    </div>
                    <p className="text-base font-bold text-gray-900 mt-1">{route.from}</p>
                    <p className="text-xs text-gray-500">Doorstep pickup available across all localities</p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                      <span className="h-2 w-2 rounded-full border-2 border-gray-400 bg-white" />
                      <span>DROP DESTINATION</span>
                    </div>
                    <p className="text-base font-bold text-gray-900 mt-1">{route.to}</p>
                    <p className="text-xs text-gray-500">Direct drop at hotel, temple, or residence</p>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-amber-50/60 border border-amber-200/50">
                    <div>
                      <p className="text-xs text-amber-800 font-medium">Selected Vehicle Tariff</p>
                      <p className="text-lg font-black text-amber-900">{route.vehicle}</p>
                    </div>
                    <span className="text-xl font-black text-amber-600">{route.fare}</span>
                  </div>

                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3.5 text-center text-sm sm:text-base font-bold text-white shadow-md shadow-amber-600/30 transition hover:bg-amber-500 cursor-pointer"
                  >
                    Confirm {route.from} to {route.to} Ride
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Available Vehicle Options & Fare Comparison */}
      <section className="bg-white/95 py-12 sm:py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              VEHICLE OPTIONS & TARIFFS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Choose Your Vehicle for {route.from} to {route.to}
            </h2>
            <p className="mt-2 text-base text-gray-600">
              All fares include vehicle rental, fuel, and experienced highway chauffeur.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {route.vehicleOptions.map((opt) => (
              <div
                key={opt.name}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                      {opt.type}
                    </span>
                    <span className="text-xl font-black text-gray-900">
                      {opt.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{opt.name}</h3>

                  <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-amber-600" /> Seats</span>
                      <strong className="text-gray-900">{opt.seats}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-amber-600" /> Luggage</span>
                      <strong className="text-gray-900">{opt.luggage}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Snowflake className="h-3.5 w-3.5 text-amber-600" /> AC Cabin</span>
                      <strong className="text-gray-900">Yes (Dual AC)</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/918377809809?text=${encodeURIComponent(
                      `Hello NoidaCab, I want to book a ${opt.name} from ${route.from} to ${route.to} (${opt.price}). Please confirm.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-amber-500 transition"
                  >
                    <span>Book {opt.type} Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pickup & Drop Locations Guide */}
      <section className="bg-white/95 py-12 sm:py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Pickup points in origin */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Pickup Locations in {route.from}</h3>
                  <p className="text-xs text-gray-500">Doorstep pickup available everywhere</p>
                </div>
              </div>

              <ul className="space-y-3">
                {route.pickupPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drop points in destination */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Drop Points in {route.to}</h3>
                  <p className="text-xs text-gray-500">Direct drop-off at your destination</p>
                </div>
              </div>

              <ul className="space-y-3">
                {route.dropPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Routes Section (Styled exactly like the user's reference image!) */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug={route.vehicleSlug}
        vehicleName={route.vehicle}
      />

      {/* 5. How to Book Section */}
      <HowToBook />

      {/* 6. Why Choose Us */}
      <WhyChooseCab />

      {/* 7. Testimonials */}
      <CabTestimonials />

      {/* 8. Route Specific FAQs */}
      <RouteFAQs route={route} />

      {/* 9. Final CTA */}
      <CabCTA />
    </main>
  );
}
