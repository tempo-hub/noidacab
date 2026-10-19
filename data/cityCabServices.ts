export interface CityCabServiceItem {
  name: string;
  href: string;
  isPhone?: boolean;
}

export interface CityCabServiceGroup {
  city: string;
  tagline?: string;
  items: CityCabServiceItem[];
}

export const cityCabServicesData: CityCabServiceGroup[] = [
  {
    city: "Noida",
    tagline: "Delhi NCR Hub & Corporate Corridor",
    items: [
      // Column 1
      { name: "Taxi Service in Noida", href: "/taxi-service-in-noida" },
      { name: "One Way Taxi in Noida", href: "/one-way-taxi-in-noida" },
      { name: "Taxi Fare in Noida", href: "/noida-taxi-fare" },
      { name: "Distance Travel Time in Noida", href: "/distance-travel-time-in-noida" },
      { name: "Sedan Taxi in Noida", href: "/sedan-taxi-in-noida" },
      { name: "Dzire Taxi in Noida", href: "/dzire-taxi-in-noida" },
      { name: "Innova Crysta in Noida", href: "/innova-crysta-in-noida" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-noida" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-noida" },

      // Column 2
      { name: "Airport Service in Noida", href: "/airport-service-routes" },
      { name: "SUV Taxi in Noida", href: "/suv-taxi-in-noida" },
      { name: "Etios Taxi in Noida", href: "/etios-taxi-in-noida" },
      { name: "Tempo Traveller in Noida", href: "/tempo-traveller-in-noida" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-noida" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-noida" },

      // Column 3
      { name: "Local Sightseeing in Noida", href: "/local-sightseeing-routes" },
      { name: "Amaze Taxi in Noida", href: "/amaze-taxi-in-noida" },
      { name: "Ertiga Taxi in Noida", href: "/ertiga-taxi-in-noida" },
      { name: "Urbania Rental in Noida", href: "/urbania-rental-in-noida" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-noida" },
      { name: "Noida Taxi Contact Number", href: "/noida-taxi-contact-number" },
    ],
  },
  {
    city: "Haryana",
    tagline: "Explore Haryana's Cities with Reliable Cab Services",
    items: [
      // Column 1
      { name: "Taxi Service in Haryana", href: "/taxi-service-in-haryana" },
      { name: "One Way Taxi in Haryana", href: "/one-way-taxi-in-haryana" },
      { name: "Taxi Fare in Haryana", href: "/taxi-fare-in-haryana" },
      { name: "Distance Travel Time in Haryana", href: "/distance-travel-time-in-haryana" },
      { name: "Sedan Taxi in Haryana", href: "/sedan-taxi-in-haryana" },
      { name: "Dzire Taxi in Haryana", href: "/dzire-taxi-in-haryana" },
      { name: "Innova Crysta in Haryana", href: "/innova-crysta-in-haryana" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-haryana" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-haryana" },

      // Column 2
      { name: "Airport Service in Haryana", href: "/airport-service-in-haryana" },
      { name: "SUV Taxi in Haryana", href: "/suv-taxi-in-haryana" },
      { name: "Etios Taxi in Haryana", href: "/etios-taxi-in-haryana" },
      { name: "Tempo Traveller in Haryana", href: "/tempo-traveller-in-haryana" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-haryana" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-haryana" },

      // Column 3
      { name: "Local Sightseeing in Haryana", href: "/local-sightseeing-in-haryana" },
      { name: "Amaze Taxi in Haryana", href: "/amaze-taxi-in-haryana" },
      { name: "Ertiga Taxi in Haryana", href: "/ertiga-taxi-in-haryana" },
      { name: "Urbania Rental in Haryana", href: "/urbania-rental-in-haryana" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-haryana" },
      { name: "Haryana Taxi Contact Number", href: "/haryana-taxi-contact-number" },
    ],
  },
  {
    city: "Uttarakhand",
    tagline: "Explore Uttarakhand's Hills & Sacred Circuits with Reliable Cabs",
    items: [
      // Column 1
      { name: "Taxi Service in Uttarakhand", href: "/taxi-service-in-uttarakhand" },
      { name: "One Way Taxi in Uttarakhand", href: "/one-way-taxi-in-uttarakhand" },
      { name: "Taxi Fare in Uttarakhand", href: "/taxi-fare-in-uttarakhand" },
      { name: "Distance Travel Time in Uttarakhand", href: "/distance-travel-time-in-uttarakhand" },
      { name: "Sedan Taxi in Uttarakhand", href: "/sedan-taxi-in-uttarakhand" },
      { name: "Dzire Taxi in Uttarakhand", href: "/dzire-taxi-in-uttarakhand" },
      { name: "Innova Crysta in Uttarakhand", href: "/innova-crysta-in-uttarakhand" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-uttarakhand" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-uttarakhand" },

      // Column 2
      { name: "Airport Service in Uttarakhand", href: "/airport-service-in-uttarakhand" },
      { name: "SUV Taxi in Uttarakhand", href: "/suv-taxi-in-uttarakhand" },
      { name: "Etios Taxi in Uttarakhand", href: "/etios-taxi-in-uttarakhand" },
      { name: "Tempo Traveller in Uttarakhand", href: "/tempo-traveller-in-uttarakhand" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-uttarakhand" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-uttarakhand" },

      // Column 3
      { name: "Local Sightseeing in Uttarakhand", href: "/local-sightseeing-in-uttarakhand" },
      { name: "Amaze Taxi in Uttarakhand", href: "/amaze-taxi-in-uttarakhand" },
      { name: "Ertiga Taxi in Uttarakhand", href: "/ertiga-taxi-in-uttarakhand" },
      { name: "Urbania Rental in Uttarakhand", href: "/urbania-rental-in-uttarakhand" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-uttarakhand" },
      { name: "Uttarakhand Taxi Contact Number", href: "/uttarakhand-taxi-contact-number" },
    ],
  },
  {
    city: "Punjab",
    tagline: "Explore Punjab's Cities & Sacred Shrines with Reliable Cabs",
    items: [
      // Column 1
      { name: "Taxi Service in Punjab", href: "/taxi-service-in-punjab" },
      { name: "One Way Taxi in Punjab", href: "/one-way-taxi-in-punjab" },
      { name: "Taxi Fare in Punjab", href: "/taxi-fare-in-punjab" },
      { name: "Distance Travel Time in Punjab", href: "/distance-travel-time-in-punjab" },
      { name: "Sedan Taxi in Punjab", href: "/sedan-taxi-in-punjab" },
      { name: "Dzire Taxi in Punjab", href: "/dzire-taxi-in-punjab" },
      { name: "Innova Crysta in Punjab", href: "/innova-crysta-in-punjab" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-punjab" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-punjab" },

      // Column 2
      { name: "Airport Service in Punjab", href: "/airport-service-in-punjab" },
      { name: "SUV Taxi in Punjab", href: "/suv-taxi-in-punjab" },
      { name: "Etios Taxi in Punjab", href: "/etios-taxi-in-punjab" },
      { name: "Tempo Traveller in Punjab", href: "/tempo-traveller-in-punjab" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-punjab" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-punjab" },

      // Column 3
      { name: "Local Sightseeing in Punjab", href: "/local-sightseeing-in-punjab" },
      { name: "Amaze Taxi in Punjab", href: "/amaze-taxi-in-punjab" },
      { name: "Ertiga Taxi in Punjab", href: "/ertiga-taxi-in-punjab" },
      { name: "Urbania Rental in Punjab", href: "/urbania-rental-in-punjab" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-punjab" },
      { name: "Punjab Taxi Contact Number", href: "/punjab-taxi-contact-number" },
    ],
  },
  {
    city: "Uttar Pradesh",
    tagline: "Explore Uttar Pradesh's Heritage, Pilgrimage & Express Corridors",
    items: [
      // Column 1
      { name: "Taxi Service in Uttar Pradesh", href: "/taxi-service-in-uttar-pradesh" },
      { name: "One Way Taxi in Uttar Pradesh", href: "/one-way-taxi-in-uttar-pradesh" },
      { name: "Taxi Fare in Uttar Pradesh", href: "/taxi-fare-in-uttar-pradesh" },
      { name: "Distance Travel Time in Uttar Pradesh", href: "/distance-travel-time-in-uttar-pradesh" },
      { name: "Sedan Taxi in Uttar Pradesh", href: "/sedan-taxi-in-uttar-pradesh" },
      { name: "Dzire Taxi in Uttar Pradesh", href: "/dzire-taxi-in-uttar-pradesh" },
      { name: "Innova Crysta in Uttar Pradesh", href: "/innova-crysta-in-uttar-pradesh" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-uttar-pradesh" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-uttar-pradesh" },

      // Column 2
      { name: "Airport Service in Uttar Pradesh", href: "/airport-service-in-uttar-pradesh" },
      { name: "SUV Taxi in Uttar Pradesh", href: "/suv-taxi-in-uttar-pradesh" },
      { name: "Etios Taxi in Uttar Pradesh", href: "/etios-taxi-in-uttar-pradesh" },
      { name: "Tempo Traveller in Uttar Pradesh", href: "/tempo-traveller-in-uttar-pradesh" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-uttar-pradesh" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-uttar-pradesh" },

      // Column 3
      { name: "Local Sightseeing in Uttar Pradesh", href: "/local-sightseeing-in-uttar-pradesh" },
      { name: "Amaze Taxi in Uttar Pradesh", href: "/amaze-taxi-in-uttar-pradesh" },
      { name: "Ertiga Taxi in Uttar Pradesh", href: "/ertiga-taxi-in-uttar-pradesh" },
      { name: "Urbania Rental in Uttar Pradesh", href: "/urbania-rental-in-uttar-pradesh" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-uttar-pradesh" },
      { name: "Uttar Pradesh Taxi Contact Number", href: "/uttar-pradesh-taxi-contact-number" },
    ],
  },
];
