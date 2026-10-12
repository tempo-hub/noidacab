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
    city: "Lucknow",
    tagline: "Heritage City & Awadh Hub",
    items: [
      // Column 1
      { name: "Taxi Service in Lucknow", href: "/taxi-service-in-lucknow" },
      { name: "One Way Taxi in Lucknow", href: "/one-way-taxi-in-lucknow" },
      { name: "Taxi Fare in Lucknow", href: "/taxi-fare-in-lucknow" },
      { name: "Sedan Taxi in Lucknow", href: "/sedan-taxi-in-lucknow" },
      { name: "Dzire Taxi in Lucknow", href: "/dzire-taxi-in-lucknow" },
      { name: "Innova Crysta in Lucknow", href: "/innova-crysta-in-lucknow" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-lucknow" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-lucknow" },

      // Column 2
      { name: "Airport Service in Lucknow", href: "/airport-service-in-lucknow" },
      { name: "SUV Taxi in Lucknow", href: "/suv-taxi-in-lucknow" },
      { name: "Etios Taxi in Lucknow", href: "/etios-taxi-in-lucknow" },
      { name: "Tempo Traveller in Lucknow", href: "/tempo-traveller-in-lucknow" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-lucknow" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-lucknow" },

      // Column 3
      { name: "Local Sightseeing in Lucknow", href: "/local-sightseeing-in-lucknow" },
      { name: "Amaze Taxi in Lucknow", href: "/amaze-taxi-in-lucknow" },
      { name: "Ertiga Taxi in Lucknow", href: "/ertiga-taxi-in-lucknow" },
      { name: "Urbania Rental in Lucknow", href: "/urbania-rental-in-lucknow" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-lucknow" },
      { name: "Lucknow Taxi Contact Number", href: "/lucknow-taxi-contact-number" },
    ],
  },
  {
    city: "Varanasi",
    tagline: "Spiritual Capital & Kashi Vishwanath Dham",
    items: [
      // Column 1
      { name: "Taxi Service in Varanasi", href: "/taxi-service-in-varanasi" },
      { name: "One Way Taxi in Varanasi", href: "/one-way-taxi-in-varanasi" },
      { name: "Taxi Fare in Varanasi", href: "/taxi-fare-in-varanasi" },
      { name: "Sedan Taxi in Varanasi", href: "/sedan-taxi-in-varanasi" },
      { name: "Dzire Taxi in Varanasi", href: "/dzire-taxi-in-varanasi" },
      { name: "Innova Crysta in Varanasi", href: "/innova-crysta-in-varanasi" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-varanasi" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-varanasi" },

      // Column 2
      { name: "Airport Service in Varanasi", href: "/airport-service-in-varanasi" },
      { name: "SUV Taxi in Varanasi", href: "/suv-taxi-in-varanasi" },
      { name: "Etios Taxi in Varanasi", href: "/etios-taxi-in-varanasi" },
      { name: "Tempo Traveller in Varanasi", href: "/tempo-traveller-in-varanasi" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-varanasi" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-varanasi" },

      // Column 3
      { name: "Local Sightseeing in Varanasi", href: "/local-sightseeing-in-varanasi" },
      { name: "Amaze Taxi in Varanasi", href: "/amaze-taxi-in-varanasi" },
      { name: "Ertiga Taxi in Varanasi", href: "/ertiga-taxi-in-varanasi" },
      { name: "Urbania Rental in Varanasi", href: "/urbania-rental-in-varanasi" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-varanasi" },
      { name: "Varanasi Taxi Contact Number", href: "/varanasi-taxi-contact-number" },
    ],
  },
  {
    city: "Ayodhya",
    tagline: "Shri Ram Janmabhoomi & Sacred City",
    items: [
      // Column 1
      { name: "Taxi Service in Ayodhya", href: "/taxi-service-in-ayodhya" },
      { name: "One Way Taxi in Ayodhya", href: "/one-way-taxi-in-ayodhya" },
      { name: "Taxi Fare in Ayodhya", href: "/taxi-fare-in-ayodhya" },
      { name: "Sedan Taxi in Ayodhya", href: "/sedan-taxi-in-ayodhya" },
      { name: "Dzire Taxi in Ayodhya", href: "/dzire-taxi-in-ayodhya" },
      { name: "Innova Crysta in Ayodhya", href: "/innova-crysta-in-ayodhya" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-ayodhya" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-ayodhya" },

      // Column 2
      { name: "Airport Service in Ayodhya", href: "/airport-service-in-ayodhya" },
      { name: "SUV Taxi in Ayodhya", href: "/suv-taxi-in-ayodhya" },
      { name: "Etios Taxi in Ayodhya", href: "/etios-taxi-in-ayodhya" },
      { name: "Tempo Traveller in Ayodhya", href: "/tempo-traveller-in-ayodhya" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-ayodhya" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-ayodhya" },

      // Column 3
      { name: "Local Sightseeing in Ayodhya", href: "/local-sightseeing-in-ayodhya" },
      { name: "Amaze Taxi in Ayodhya", href: "/amaze-taxi-in-ayodhya" },
      { name: "Ertiga Taxi in Ayodhya", href: "/ertiga-taxi-in-ayodhya" },
      { name: "Urbania Rental in Ayodhya", href: "/urbania-rental-in-ayodhya" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-ayodhya" },
      { name: "Ayodhya Taxi Contact Number", href: "/ayodhya-taxi-contact-number" },
    ],
  },
  {
    city: "Prayagraj",
    tagline: "Triveni Sangam & Sacred Pilgrimage Hub",
    items: [
      // Column 1
      { name: "Taxi Service in Prayagraj", href: "/taxi-service-in-prayagraj" },
      { name: "One Way Taxi in Prayagraj", href: "/one-way-taxi-in-prayagraj" },
      { name: "Taxi Fare in Prayagraj", href: "/taxi-fare-in-prayagraj" },
      { name: "Sedan Taxi in Prayagraj", href: "/sedan-taxi-in-prayagraj" },
      { name: "Dzire Taxi in Prayagraj", href: "/dzire-taxi-in-prayagraj" },
      { name: "Innova Crysta in Prayagraj", href: "/innova-crysta-in-prayagraj" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-prayagraj" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-prayagraj" },

      // Column 2
      { name: "Airport Service in Prayagraj", href: "/airport-service-in-prayagraj" },
      { name: "SUV Taxi in Prayagraj", href: "/suv-taxi-in-prayagraj" },
      { name: "Etios Taxi in Prayagraj", href: "/etios-taxi-in-prayagraj" },
      { name: "Tempo Traveller in Prayagraj", href: "/tempo-traveller-in-prayagraj" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-prayagraj" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-prayagraj" },

      // Column 3
      { name: "Local Sightseeing in Prayagraj", href: "/local-sightseeing-in-prayagraj" },
      { name: "Amaze Taxi in Prayagraj", href: "/amaze-taxi-in-prayagraj" },
      { name: "Ertiga Taxi in Prayagraj", href: "/ertiga-taxi-in-prayagraj" },
      { name: "Urbania Rental in Prayagraj", href: "/urbania-rental-in-prayagraj" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-prayagraj" },
      { name: "Prayagraj Taxi Contact Number", href: "/prayagraj-taxi-contact-number" },
    ],
  },
  {
    city: "Noida",
    tagline: "Delhi NCR Hub & Corporate Corridor",
    items: [
      // Column 1
      { name: "Taxi Service in Noida", href: "/taxi-service-in-noida" },
      { name: "One Way Taxi in Noida", href: "/one-way-taxi-in-noida" },
      { name: "Taxi Fare in Noida", href: "/noida-taxi-fare" },
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
    city: "Haridwar",
    tagline: "Gateway to Devbhoomi & Chardham Yatra",
    items: [
      // Column 1
      { name: "Taxi Service in Haridwar", href: "/taxi-service-in-haridwar" },
      { name: "One Way Taxi in Haridwar", href: "/one-way-taxi-in-haridwar" },
      { name: "Taxi Fare in Haridwar", href: "/taxi-fare-in-haridwar" },
      { name: "Sedan Taxi in Haridwar", href: "/sedan-taxi-in-haridwar" },
      { name: "Dzire Taxi in Haridwar", href: "/dzire-taxi-in-haridwar" },
      { name: "Innova Crysta in Haridwar", href: "/innova-crysta-in-haridwar" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-haridwar" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-haridwar" },

      // Column 2
      { name: "Railway Station Taxi Haridwar", href: "/booking?city=Haridwar&service=station" },
      { name: "SUV Taxi in Haridwar", href: "/suv-taxi-in-haridwar" },
      { name: "Etios Taxi in Haridwar", href: "/etios-taxi-in-haridwar" },
      { name: "Tempo Traveller in Haridwar", href: "/tempo-traveller-in-haridwar" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-haridwar" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-haridwar" },

      // Column 3
      { name: "Local Sightseeing in Haridwar", href: "/local-sightseeing-in-haridwar" },
      { name: "Amaze Taxi in Haridwar", href: "/amaze-taxi-in-haridwar" },
      { name: "Ertiga Taxi in Haridwar", href: "/ertiga-taxi-in-haridwar" },
      { name: "Urbania Rental in Haridwar", href: "/urbania-rental-in-haridwar" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-haridwar" },
      { name: "Haridwar Taxi Contact Number", href: "/haridwar-taxi-contact-number" },
    ],
  },
  {
    city: "Agra",
    tagline: "City of the Taj Mahal & Mughal Heritage",
    items: [
      // Column 1
      { name: "Taxi Service in Agra", href: "/taxi-service-in-agra" },
      { name: "One Way Taxi in Agra", href: "/one-way-taxi-in-agra" },
      { name: "Taxi Fare in Agra", href: "/taxi-fare-in-agra" },
      { name: "Sedan Taxi in Agra", href: "/sedan-taxi-in-agra" },
      { name: "Dzire Taxi in Agra", href: "/dzire-taxi-in-agra" },
      { name: "Innova Crysta in Agra", href: "/innova-crysta-in-agra" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-agra" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-agra" },

      // Column 2
      { name: "Airport Service in Agra", href: "/airport-service-in-agra" },
      { name: "SUV Taxi in Agra", href: "/suv-taxi-in-agra" },
      { name: "Etios Taxi in Agra", href: "/etios-taxi-in-agra" },
      { name: "Tempo Traveller in Agra", href: "/tempo-traveller-in-agra" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-agra" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-agra" },

      // Column 3
      { name: "Taj Mahal Sightseeing in Agra", href: "/local-sightseeing-in-agra" },
      { name: "Amaze Taxi in Agra", href: "/amaze-taxi-in-agra" },
      { name: "Ertiga Taxi in Agra", href: "/ertiga-taxi-in-agra" },
      { name: "Urbania Rental in Agra", href: "/urbania-rental-in-agra" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-agra" },
      { name: "Agra Taxi Contact Number", href: "/agra-taxi-contact-number" },
    ],
  },
  {
    city: "Mathura",
    tagline: "Braj Bhoomi & Shri Krishna Janmasthan",
    items: [
      // Column 1
      { name: "Taxi Service in Mathura", href: "/taxi-service-in-mathura" },
      { name: "One Way Taxi in Mathura", href: "/one-way-taxi-in-mathura" },
      { name: "Taxi Fare in Mathura", href: "/taxi-fare-in-mathura" },
      { name: "Sedan Taxi in Mathura", href: "/sedan-taxi-in-mathura" },
      { name: "Dzire Taxi in Mathura", href: "/dzire-taxi-in-mathura" },
      { name: "Innova Crysta in Mathura", href: "/innova-crysta-in-mathura" },
      { name: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-mathura" },
      { name: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-mathura" },

      // Column 2
      { name: "Vrindavan Temple Tour Taxi", href: "/local-sightseeing-in-mathura" },
      { name: "SUV Taxi in Mathura", href: "/suv-taxi-in-mathura" },
      { name: "Etios Taxi in Mathura", href: "/etios-taxi-in-mathura" },
      { name: "Tempo Traveller in Mathura", href: "/tempo-traveller-in-mathura" },
      { name: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-mathura" },
      { name: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-mathura" },

      // Column 3
      { name: "Govardhan Parikrama Taxi", href: "/local-sightseeing-in-mathura" },
      { name: "Amaze Taxi in Mathura", href: "/amaze-taxi-in-mathura" },
      { name: "Ertiga Taxi in Mathura", href: "/ertiga-taxi-in-mathura" },
      { name: "Urbania Rental in Mathura", href: "/urbania-rental-in-mathura" },
      { name: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-mathura" },
      { name: "Mathura Taxi Contact Number", href: "/mathura-taxi-contact-number" },
    ],
  },
];
