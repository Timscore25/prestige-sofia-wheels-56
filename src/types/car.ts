
export interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  pricePerDay: number;
  minRentalDays?: number;
  description: string;
  features: string[];
}
