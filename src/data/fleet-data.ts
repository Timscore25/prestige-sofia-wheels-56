
import { Car } from "@/types/car";

export const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "luxury",
    image: "/lovable-uploads/f2474070-389f-4f4c-aa08-633272b87bf3.png",
    pricePerDay: 150,
    minRentalDays: 3,
    description: "Experience unparalleled luxury with the Mercedes-Benz S-Class. Featuring elegant design and cutting-edge technology.",
    features: ["Leather Seats", "Advanced Tech", "Premium Sound", "Climate Control", "Automatic Transmission"]
  },
  {
    id: 2,
    name: "Audi A8",
    category: "luxury",
    image: "/lovable-uploads/e6bd07d4-a58e-4727-b807-06521145fa39.png",
    pricePerDay: 135,
    minRentalDays: 2,
    description: "The Audi A8 combines sophisticated design with outstanding performance and comfort.",
    features: ["Quattro All-Wheel Drive", "Virtual Cockpit", "Premium Sound", "Massage Seats", "Automatic Transmission"]
  },
  {
    id: 3,
    name: "Porsche Panamera",
    category: "sports",
    image: "/lovable-uploads/9285bc76-4cc6-4883-9b9c-9df9a7059d52.png",
    pricePerDay: 220,
    minRentalDays: 4,
    description: "The sleek Porsche Panamera combines sports car performance with luxury sedan comfort and space.",
    features: ["V6/V8 Engine Options", "Sport Chrono Package", "Adaptive Air Suspension", "Premium Sound System", "Automatic Transmission"]
  },
  {
    id: 5,
    name: "Mercedes-Benz GLE",
    category: "suv",
    image: "/lovable-uploads/e283c3b4-17fa-4d59-a80c-9ddb6bead3b5.png",
    pricePerDay: 140,
    minRentalDays: 3,
    description: "The Mercedes-Benz GLE offers spacious comfort, commanding presence, and advanced technology.",
    features: ["7 Seats Available", "MBUX System", "Off-Road Capability", "Panoramic Roof", "Automatic Transmission"]
  },
  {
    id: 6,
    name: "Audi Q7",
    category: "suv",
    image: "/lovable-uploads/3bdaa3a4-01b8-4206-8c1a-f46bc2a29593.png",
    pricePerDay: 110,
    description: "Experience luxury and versatility with the Audi Q7, featuring spacious interiors and powerful performance.",
    features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Sound", "MMI Navigation", "Automatic Transmission"]
  },
  {
    id: 7,
    name: "Porsche Cayenne",
    category: "suv",
    image: "/lovable-uploads/24ff111e-9c55-4a5c-8f5c-309734c0e0a7.png",
    pricePerDay: 200,
    minRentalDays: 4,
    description: "The Porsche Cayenne delivers sports car performance in an SUV package, with unmatched luxury and capability.",
    features: ["V6 Turbo Engine", "Porsche Active Suspension", "Premium Interior", "Sport Chrono Package", "Automatic Transmission"]
  },
  {
    id: 9,
    name: "Honda Civic",
    category: "economy",
    image: "/lovable-uploads/1777f46f-7d2a-4240-8b16-f790d5652765.png",
    pricePerDay: 35,
    description: "The Honda Civic offers excellent reliability, comfort, and driving dynamics at an affordable price.",
    features: ["Spacious Interior", "Fuel Efficient", "Android Auto/Apple CarPlay", "Backup Camera", "Manual Transmission"]
  },
  {
    id: 10,
    name: "VW Tiguan",
    category: "economy-suv",
    image: "/lovable-uploads/52d5f0cd-2c65-4b4b-8820-4fa0280a06cf.png",
    pricePerDay: 53,
    description: "The Volkswagen Tiguan offers German engineering with practicality, comfort and advanced features.",
    features: ["Digital Cockpit", "Spacious Interior", "Advanced Safety Features", "Efficient Engines", "Automatic Transmission"]
  },
  {
    id: 11,
    name: "VW Touareg",
    category: "economy-suv",
    image: "/lovable-uploads/be2de5b1-9b2e-4a3e-9fa0-261b13e29d21.png",
    pricePerDay: 65,
    description: "The Volkswagen Touareg combines premium comfort with practical versatility and excellent value.",
    features: ["Panoramic Roof", "4Motion All-Wheel Drive", "Premium Audio System", "Adaptive Cruise Control", "Automatic Transmission"]
  },
  {
    id: 12,
    name: "Hyundai Tucson",
    category: "economy-suv",
    image: "/lovable-uploads/171ff550-2327-49f9-ada4-c80c85f421f8.png",
    pricePerDay: 48,
    description: "The stylish Hyundai Tucson offers excellent value with modern design, comfort, and practicality.",
    features: ["Panoramic Sunroof", "Advanced Safety Features", "Apple CarPlay/Android Auto", "Rear View Camera", "Automatic Transmission"]
  },
  {
    id: 13,
    name: "Dacia Sandero",
    category: "economy",
    image: "/lovable-uploads/6cf98829-3af1-4e0e-a383-ee628a9c21f8.png",
    pricePerDay: 25,
    description: "The budget-friendly Dacia Sandero offers excellent value with surprising comfort and practicality.",
    features: ["Low Fuel Consumption", "Affordable", "Surprisingly Spacious", "Easy to Drive", "Manual Transmission"]
  },
  {
    id: 14,
    name: "Renault Clio",
    category: "economy",
    image: "/lovable-uploads/774b3747-ea11-4168-9d1a-ea320a4d5bdf.png",
    pricePerDay: 28,
    description: "The stylish Renault Clio combines French design flair with efficiency and engaging driving dynamics.",
    features: ["5-Star Safety Rating", "Touchscreen Infotainment", "Eco Mode", "City-Friendly Size", "Manual Transmission"]
  },
  {
    id: 15,
    name: "Hyundai i30",
    category: "economy",
    image: "/lovable-uploads/42ac24b3-f46a-4ad5-9b1c-2aa6f899f19d.png",
    pricePerDay: 28,
    description: "The well-equipped Hyundai i30 offers exceptional quality, comfort and reliability at a great price.",
    features: ["Wireless Charging", "Lane Keeping Assist", "Apple CarPlay/Android Auto", "Rear View Camera", "Manual Transmission"]
  },
  {
    id: 16,
    name: "Ford Mondeo",
    category: "midsize",
    image: "/lovable-uploads/0b705da3-8a4e-45e8-99e2-31621c29883c.png",
    pricePerDay: 47,
    description: "The Ford Mondeo delivers excellent comfort, advanced technology and a smooth driving experience.",
    features: ["Spacious Interior", "Advanced Safety", "Infotainment System", "Comfortable Suspension", "Manual/Automatic Options"]
  },
  {
    id: 17,
    name: "VW Passat",
    category: "midsize",
    image: "/lovable-uploads/34fefe68-9fdc-4f14-b4a5-f7c2571497f7.png",
    pricePerDay: 55,
    description: "The VW Passat combines German engineering with comfort, style and impressive practicality.",
    features: ["Premium Finish", "Adaptive Cruise Control", "Digital Cockpit", "Spacious Legroom", "Manual/Automatic Options"]
  },
  {
    id: 18,
    name: "Hyundai i30 SW",
    category: "midsize",
    image: "/lovable-uploads/36052a88-99f4-44d9-8f1a-12f820cbd2d1.png",
    pricePerDay: 40,
    description: "The practical Hyundai i30 SW offers impressive cargo space with comfort and reliability.",
    features: ["Large Cargo Space", "Lane Keep Assist", "Apple CarPlay/Android Auto", "Comfortable Seats", "Manual/Automatic Options"]
  },
  {
    id: 19,
    name: "Renault Trafic",
    category: "bus",
    image: "/lovable-uploads/3a60c383-4d5d-41b9-9ae6-afdd89a37cd9.png",
    pricePerDay: 100,
    description: "The Renault Trafic offers comfortable seating for 9 passengers with ample luggage space.",
    features: ["9 Seats", "Air Conditioning", "Ample Luggage Space", "Bluetooth Connectivity", "Manual Transmission"]
  },
  {
    id: 20,
    name: "Opel Vivaro",
    category: "bus",
    image: "/lovable-uploads/17e89497-eb2c-4f65-bd39-dcd351fac9cd.png",
    pricePerDay: 100,
    description: "The versatile Opel Vivaro comfortably seats 9 passengers, perfect for group travel.",
    features: ["9 Seats", "Cruise Control", "USB Charging", "Rear Camera", "Manual Transmission"]
  },
];

export const categoryDisplayNames = {
  "luxury": "Luxury Sedans",
  "sports": "Sports Cars",
  "suv": "Executive SUVs",
  "economy-suv": "Economy SUVs",
  "midsize": "Midsize Cars",
  "economy": "Economy Cars",
  "bus": "Buses (8+1)"
};

export type CarCategory = keyof typeof categoryDisplayNames;

export const categories = Object.keys(categoryDisplayNames) as CarCategory[];
