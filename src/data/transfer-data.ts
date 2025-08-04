
export interface Transfer {
  id: number;
  name: string;
  category: "vip" | "economy" | "bus";
  image: string;
  pricePerKm: number;
  description: string;
  features: string[];
  capacity: number;
}

export const transfers: Transfer[] = [
  // VIP Transfers
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "vip",
    image: "/lovable-uploads/f2474070-389f-4f4c-aa08-633272b87bf3.png",
    pricePerKm: 3.5,
    capacity: 3,
    description: "Experience ultimate luxury transfer with our premium Mercedes-Benz S-Class.",
    features: ["Professional Driver", "Leather Seats", "Climate Control", "Complimentary Water", "Wi-Fi"]
  },
  {
    id: 2,
    name: "Audi A8",
    category: "vip",
    image: "/lovable-uploads/e6bd07d4-a58e-4727-b807-06521145fa39.png",
    pricePerKm: 3.2,
    capacity: 3,
    description: "Sophisticated VIP transfer service with Audi's flagship luxury sedan.",
    features: ["Professional Driver", "Virtual Cockpit", "Premium Sound", "Massage Seats", "Refreshments"]
  },
  {
    id: 3,
    name: "Mercedes-Benz GLE",
    category: "vip",
    image: "/lovable-uploads/e283c3b4-17fa-4d59-a80c-9ddb6bead3b5.png",
    pricePerKm: 3.0,
    capacity: 6,
    description: "Spacious luxury SUV transfer for larger groups without compromising on comfort.",
    features: ["Professional Driver", "7 Seats", "Panoramic Roof", "Premium Audio", "Airport Meet & Greet"]
  },
  // Economy Transfers
  {
    id: 4,
    name: "VW Passat",
    category: "economy",
    image: "/lovable-uploads/34fefe68-9fdc-4f14-b4a5-f7c2571497f7.png",
    pricePerKm: 1.8,
    capacity: 4,
    description: "Reliable and comfortable economy transfer with professional service.",
    features: ["Professional Driver", "Air Conditioning", "Spacious Interior", "Luggage Space", "On-time Service"]
  },
  {
    id: 5,
    name: "Ford Mondeo",
    category: "economy",
    image: "/lovable-uploads/0b705da3-8a4e-45e8-99e2-31621c29883c.png",
    pricePerKm: 1.6,
    capacity: 4,
    description: "Comfortable and affordable transfer option for everyday travel needs.",
    features: ["Professional Driver", "Comfortable Seats", "Climate Control", "Phone Chargers", "Clean Vehicle"]
  },
  {
    id: 6,
    name: "VW Tiguan",
    category: "economy",
    image: "/lovable-uploads/52d5f0cd-2c65-4b4b-8820-4fa0280a06cf.png",
    pricePerKm: 1.9,
    capacity: 5,
    description: "Practical SUV transfer combining comfort with ample space for luggage.",
    features: ["Professional Driver", "5 Seats", "Large Luggage Space", "All-Weather Capability", "Safety Features"]
  },
  // Bus Transfers (8+1)
  {
    id: 7,
    name: "Renault Trafic",
    category: "bus",
    image: "/lovable-uploads/3a60c383-4d5d-41b9-9ae6-afdd89a37cd9.png",
    pricePerKm: 2.5,
    capacity: 8,
    description: "Perfect for group transfers with professional driver and comfortable seating for 8 passengers.",
    features: ["Professional Driver", "8 Passenger Seats", "Air Conditioning", "Luggage Compartment", "Group Discounts"]
  },
  {
    id: 8,
    name: "Opel Vivaro",
    category: "bus",
    image: "/lovable-uploads/17e89497-eb2c-4f65-bd39-dcd351fac9cd.png",
    pricePerKm: 2.4,
    capacity: 8,
    description: "Reliable group transport solution with experienced driver for up to 8 passengers.",
    features: ["Professional Driver", "8 Passenger Seats", "Cruise Control", "USB Charging", "Comfortable Seating"]
  }
];

export const transferCategoryDisplayNames = {
  "vip": "VIP Transfers",
  "economy": "Economy Transfers", 
  "bus": "Bus Transfers (8+1)"
};

export type TransferCategory = keyof typeof transferCategoryDisplayNames;

export const transferCategories = Object.keys(transferCategoryDisplayNames) as TransferCategory[];
