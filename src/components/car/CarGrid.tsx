
import React from 'react';
import { Button } from "@/components/ui/button";
import CarCard from './CarCard';
import { Car } from '@/types/car';
import { CarCategory } from '@/data/fleet-data';
import { useLanguage } from '@/contexts/LanguageContext';

interface CarGridProps {
  cars: Car[];
  category: CarCategory;
}

const CarGrid: React.FC<CarGridProps> = ({ cars, category }) => {
  const { t } = useLanguage();

  const getCategoryKey = (category: CarCategory) => {
    const categoryMap: { [key in CarCategory]: string } = {
      'luxury': 'categories.luxury',
      'sports': 'categories.sports',
      'suv': 'categories.suv',
      'economy-suv': 'categories.economySuv',
      'midsize': 'categories.midsize',
      'economy': 'categories.economy',
      'bus': 'categories.bus'
    };
    return categoryMap[category];
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button className="bg-primary-gold hover:bg-yellow-600 text-white">
          {t('car.viewAll')} {t(getCategoryKey(category))}
        </Button>
      </div>
    </>
  );
};

export default CarGrid;
