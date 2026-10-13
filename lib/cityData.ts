export interface CityInfo {
  name: string;
  slug: string;
  state: string;
  airportName: string;
  airportCode?: string;
  localities: string[];
  attractions: string[];
  popularOutstation: string[];
  tagline: string;
}

export const citiesData: Record<string, CityInfo> = {
  lucknow: {
    name: "Lucknow",
    slug: "lucknow",
    state: "Uttar Pradesh",
    airportName: "Chaudhary Charan Singh International Airport (Amausi)",
    airportCode: "LKO",
    localities: ["Hazratganj", "Gomti Nagar", "Alambagh", "Charbagh", "Indira Nagar", "Mahanagar", "Vikas Nagar", "Aashiana"],
    attractions: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza", "Clock Tower", "Ambedkar Memorial Park", "Hazratganj Market"],
    popularOutstation: ["Ayodhya", "Varanasi", "Prayagraj", "Kanpur", "Noida", "Delhi", "Gorakhpur"],
    tagline: "Heritage City of Nawabs & Awadhi Culture",
  },
  varanasi: {
    name: "Varanasi",
    slug: "varanasi",
    state: "Uttar Pradesh",
    airportName: "Lal Bahadur Shastri International Airport (Babatpur)",
    airportCode: "VNS",
    localities: ["Godowlia", "Assi Ghat", "Dashashwamedh Ghat", "Cantt Station", "BHU Lanka", "Sigra", "Sarnath", "Shivpur"],
    attractions: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat Evening Aarti", "Assi Ghat", "Sarnath Dhamek Stupa", "Manikarnika Ghat", "BHU Vishwanath Temple"],
    popularOutstation: ["Prayagraj", "Ayodhya", "Lucknow", "Bodh Gaya", "Gorakhpur", "Noida", "Delhi"],
    tagline: "World's Oldest Living City & Spiritual Capital",
  },
  ayodhya: {
    name: "Ayodhya",
    slug: "ayodhya",
    state: "Uttar Pradesh",
    airportName: "Maharishi Valmiki International Airport",
    airportCode: "AYJ",
    localities: ["Ram Janmabhoomi Complex", "Hanuman Garhi", "Naya Ghat", "Civil Lines", "Faizabad City", "Devkali", "Ranoopali"],
    attractions: ["Shri Ram Janmabhoomi Mandir", "Hanuman Garhi", "Kanak Bhawan", "Saryu River Aarti Ghat", "Nageshwarnath Temple", "Surya Kund"],
    popularOutstation: ["Lucknow", "Varanasi", "Prayagraj", "Gorakhpur", "Noida", "Delhi"],
    tagline: "Sacred Birthplace of Bhagwan Shri Ram",
  },
  prayagraj: {
    name: "Prayagraj",
    slug: "prayagraj",
    state: "Uttar Pradesh",
    airportName: "Prayagraj Airport (Bamrauli)",
    airportCode: "IXD",
    localities: ["Civil Lines", "Triveni Sangam", "Katra", "George Town", "Naini", "Allahabad Junction", "Tagore Town"],
    attractions: ["Triveni Sangam Snan Ghat", "Bade Hanuman Ji Temple", "Anand Bhavan", "Allahabad Fort", "Alopi Devi Temple", "Khusro Bagh"],
    popularOutstation: ["Varanasi", "Ayodhya", "Lucknow", "Chitrakoot", "Kanpur", "Noida", "Delhi"],
    tagline: "Holy Confluence of Ganga, Yamuna & Saraswati",
  },
  noida: {
    name: "Noida",
    slug: "noida",
    state: "Uttar Pradesh",
    airportName: "Delhi IGI Airport (T1/T2/T3) & upcoming Noida Jewar Airport",
    airportCode: "DEL",
    localities: [
      "Sector 15",
      "Sector 16",
      "Sector 18",
      "Sector 19",
      "Sector 25",
      "Sector 27",
      "Sector 29",
      "Sector 37",
      "Sector 50",
      "Sector 62",
      "Sector 63",
      "Sector 76",
      "Sector 137",
      "Sector 150",
      "Pari Chowk",
      "Noida Extension",
      "Greater Noida",
      "Jewar Airport",
      "Film City",
    ],
    attractions: ["DLF Mall of India", "Okhla Bird Sanctuary", "ISKCON Noida", "Worlds of Wonder", "Botanical Garden", "Akshardham Temple"],
    popularOutstation: ["Delhi", "Gurgaon", "Agra", "Jaipur", "Lucknow", "Chandigarh", "Haridwar", "Dehradun", "Mathura", "Rishikesh", "Vrindavan"],
    tagline: "Modern IT Hub & Prime Delhi NCR Corridor",
  },
  delhi: {
    name: "Delhi",
    slug: "delhi",
    state: "Delhi NCR",
    airportName: "Indira Gandhi International Airport (IGI T1/T2/T3)",
    airportCode: "DEL",
    localities: ["Connaught Place", "South Extension", "Lajpat Nagar", "Dwarka", "Rohini", "Karol Bagh", "Saket", "Aerocity"],
    attractions: ["India Gate", "Red Fort", "Qutub Minar", "Akshardham Temple", "Lotus Temple", "Humayun's Tomb", "Rashtrapati Bhavan"],
    popularOutstation: ["Agra", "Jaipur", "Haridwar", "Rishikesh", "Chandigarh", "Shimla", "Manali", "Dehradun"],
    tagline: "The Capital City of Heritage & Governance",
  },
  haridwar: {
    name: "Haridwar",
    slug: "haridwar",
    state: "Uttarakhand",
    airportName: "Jolly Grant Airport Dehradun (DED) & Delhi IGI Airport",
    airportCode: "DED",
    localities: ["Har Ki Pauri", "Railway Station Road", "Ranipur", "Jwalapur", "Bhopatwala", "Shantikunj", "Kankhal"],
    attractions: ["Har Ki Pauri Evening Ganga Aarti", "Mansa Devi Temple Ropeway", "Chandi Devi Temple", "Daksheshwar Mahadev", "Rishikesh Ram Jhula", "Triveni Ghat"],
    popularOutstation: ["Rishikesh", "Dehradun", "Mussoorie", "Noida", "Delhi", "Chardham Yatra", "Chandigarh"],
    tagline: "Gateway to Devbhoomi & Holy River Ganga",
  },
  agra: {
    name: "Agra",
    slug: "agra",
    state: "Uttar Pradesh",
    airportName: "Agra Kheria Airport (AGR) & Delhi IGI Airport Transfers",
    airportCode: "AGR",
    localities: ["Tajganj", "Sadar Bazar", "Sanjay Place", "Fatehabad Road", "Dayalbagh", "Agra Cantt"],
    attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Itmad-ud-Daulah (Baby Taj)", "Akbar's Tomb Sikandra"],
    popularOutstation: ["Noida", "Delhi", "Mathura", "Vrindavan", "Jaipur", "Gwalior", "Lucknow"],
    tagline: "Home of the Iconic Taj Mahal & Mughal Splendor",
  },
  mathura: {
    name: "Mathura",
    slug: "mathura",
    state: "Uttar Pradesh",
    airportName: "Delhi IGI Airport & upcoming Jewar Airport Transfers",
    airportCode: "DEL",
    localities: ["Krishna Janmasthan", "Dwarkadhish Temple Area", "Vrindavan Raman Reti", "Govardhan", "Barsana", "Chhatikara"],
    attractions: ["Shri Krishna Janmasthan Temple", "Dwarkadhish Temple", "Banke Bihari Temple (Vrindavan)", "Prem Mandir", "ISKCON Vrindavan", "Govardhan Hill"],
    popularOutstation: ["Noida", "Delhi", "Agra", "Jaipur", "Haridwar", "Gurgaon"],
    tagline: "Sacred Land of Lord Krishna & Braj Dham",
  },
  jaipur: {
    name: "Jaipur",
    slug: "jaipur",
    state: "Rajasthan",
    airportName: "Jaipur International Airport (Sanganer)",
    airportCode: "JAI",
    localities: ["MI Road", "Vaishali Nagar", "C-Scheme", "Mansarovar", "Malviya Nagar", "Bani Park", "Tonk Road"],
    attractions: ["Hawa Mahal", "Amer Fort", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jal Mahal", "Chokhi Dhani"],
    popularOutstation: ["Noida", "Delhi", "Agra", "Ajmer", "Pushkar", "Udaipur", "Jodhpur"],
    tagline: "The Pink City & Royal Jewel of Rajasthan",
  },
  gurgaon: {
    name: "Gurgaon",
    slug: "gurgaon",
    state: "Haryana",
    airportName: "Indira Gandhi International Airport (IGI)",
    airportCode: "DEL",
    localities: ["Cyber Hub", "Golf Course Road", "Sohna Road", "MG Road", "Sector 29", "Sector 56", "DLF Phase 1-5"],
    attractions: ["Cyber Hub", "Kingdom of Dreams", "Sultanpur Bird Sanctuary", "Ambience Mall", "Leisure Valley Park"],
    popularOutstation: ["Jaipur", "Agra", "Chandigarh", "Noida", "Delhi", "Haridwar"],
    tagline: "Millennium City & Global Corporate Corridor",
  },
  haryana: {
    name: "Haryana",
    slug: "haryana",
    state: "Haryana",
    airportName: "Delhi IGI Airport (DEL) & Chandigarh International Airport (IXC)",
    airportCode: "DEL",
    localities: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Rohtak", "Sonipat", "Hisar", "Panchkula", "Rewari"],
    attractions: ["Brahma Sarovar Kurukshetra", "Sultanpur National Park", "Murthal Dhabas", "Yadavindra Gardens Pinjore", "Damdama Lake", "Surajkund Crafts Mela"],
    popularOutstation: ["Delhi", "Noida", "Chandigarh", "Shimla", "Manali", "Jaipur", "Haridwar", "Dehradun", "Amritsar"],
    tagline: "Explore Haryana's Cities with Reliable Cab Services",
  },
  ghaziabad: {
    name: "Ghaziabad",
    slug: "ghaziabad",
    state: "Uttar Pradesh",
    airportName: "Hindon Airport (HDO) & Delhi IGI Airport",
    airportCode: "DEL",
    localities: ["Indirapuram", "Vaishali", "Vasundhara", "Raj Nagar Extension", "Crossings Republik", "Kaushambi"],
    attractions: ["Hindon Riverfront", "Swarna Jayanti Park", "ISKCON Ghaziabad", "City Forest"],
    popularOutstation: ["Haridwar", "Meerut", "Noida", "Delhi", "Agra", "Dehradun"],
    tagline: "Gateway of Uttar Pradesh & NCR Residential Hub",
  },
  dehradun: {
    name: "Dehradun",
    slug: "dehradun",
    state: "Uttarakhand",
    airportName: "Jolly Grant Airport (DED)",
    airportCode: "DED",
    localities: ["Rajpur Road", "Clock Tower", "Paltan Bazar", "Clement Town", "Ballupur", "Jakhan"],
    attractions: ["Robber's Cave (Guchhupani)", "Sahastradhara", "Mindrolling Monastery", "Forest Research Institute (FRI)", "Mussoorie Mall Road"],
    popularOutstation: ["Mussoorie", "Rishikesh", "Haridwar", "Noida", "Delhi", "Chandigarh"],
    tagline: "Capital of Uttarakhand & Queen of Hills Gateway",
  },
  rishikesh: {
    name: "Rishikesh",
    slug: "rishikesh",
    state: "Uttarakhand",
    airportName: "Jolly Grant Airport Dehradun (DED)",
    airportCode: "DED",
    localities: ["Tapovan", "Ram Jhula", "Laxman Jhula", "Muni Ki Reti", "Triveni Ghat", "Shivpuri"],
    attractions: ["Triveni Ghat Maha Aarti", "Ram Jhula & Laxman Jhula", "Beatles Ashram", "Neer Garh Waterfall", "Shivpuri River Rafting"],
    popularOutstation: ["Haridwar", "Dehradun", "Noida", "Delhi", "Chardham Yatra"],
    tagline: "Yoga Capital of the World & Holy Himalayan Riverfront",
  },
  uttarakhand: {
    name: "Uttarakhand",
    slug: "uttarakhand",
    state: "Uttarakhand",
    airportName: "Jolly Grant Airport Dehradun (DED) & Pantnagar Airport (PGH)",
    airportCode: "DED",
    localities: ["Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Nainital", "Roorkee", "Rudrapur", "Kashipur", "Kotdwar", "Almora"],
    attractions: ["Har Ki Pauri", "Ram Jhula & Laxman Jhula", "Naini Lake", "Kainchi Dham", "Jim Corbett National Park", "Robber's Cave", "Chardham Yatra"],
    popularOutstation: ["Delhi", "Noida", "Gurgaon", "Chandigarh", "Agra", "Jaipur", "Lucknow", "Amritsar"],
    tagline: "Explore Uttarakhand's Hills & Sacred Circuits with Reliable Cabs",
  },
  uttrakhand: {
    name: "Uttarakhand",
    slug: "uttarakhand",
    state: "Uttarakhand",
    airportName: "Jolly Grant Airport Dehradun (DED) & Pantnagar Airport (PGH)",
    airportCode: "DED",
    localities: ["Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Nainital", "Roorkee", "Rudrapur", "Kashipur", "Kotdwar", "Almora"],
    attractions: ["Har Ki Pauri", "Ram Jhula & Laxman Jhula", "Naini Lake", "Kainchi Dham", "Jim Corbett National Park", "Robber's Cave", "Chardham Yatra"],
    popularOutstation: ["Delhi", "Noida", "Gurgaon", "Chandigarh", "Agra", "Jaipur", "Lucknow", "Amritsar"],
    tagline: "Explore Uttarakhand's Hills & Sacred Circuits with Reliable Cabs",
  },
  punjab: {
    name: "Punjab",
    slug: "punjab",
    state: "Punjab",
    airportName: "Sri Guru Ram Dass Jee International Airport Amritsar (ATQ) & Shaheed Bhagat Singh Airport (IXC)",
    airportCode: "ATQ",
    localities: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot", "Hoshiarpur", "Batala", "Moga", "Phagwara"],
    attractions: ["Golden Temple Amritsar", "Wagah Border Ceremony", "Jallianwala Bagh", "Qila Mubarak Patiala", "Virasat-e-Khalsa Anandpur Sahib", "Takht Sri Damdama Sahib", "Jang-e-Azadi Memorial"],
    popularOutstation: ["Delhi", "Noida", "Gurgaon", "Chandigarh", "Shimla", "Manali", "Dharamshala", "Jammu", "Katra", "Jaipur"],
    tagline: "Explore Punjab's Historic Cities, Gurudwaras & Vibrant Corridors with Reliable Cabs",
  },
};

export function getCityDetails(citySlugOrName?: string): CityInfo {
  if (!citySlugOrName) return citiesData["lucknow"];

  const clean = citySlugOrName.toLowerCase().trim().replace(/^(taxi-service-in-|airport-service-in-|local-sightseeing-in-)/, "");

  // direct match
  if (citiesData[clean]) return citiesData[clean];

  // partial match
  for (const [key, city] of Object.entries(citiesData)) {
    if (key.includes(clean) || clean.includes(key) || city.name.toLowerCase().includes(clean)) {
      return city;
    }
  }

  // fallback generic
  const formatted = clean.charAt(0).toUpperCase() + clean.slice(1);
  return {
    name: formatted,
    slug: clean,
    state: "North India",
    airportName: `${formatted} Airport & Nearest Hubs`,
    localities: [`${formatted} City Center`, "Railway Station Area", "Airport Road", "Civil Lines"],
    attractions: [`${formatted} Heritage Monuments`, "Major Temples", "City Center Shopping"],
    popularOutstation: ["Delhi", "Noida", "Agra", "Lucknow", "Varanasi"],
    tagline: `Prime Travel & Tourism Hub in ${formatted}`,
  };
}
