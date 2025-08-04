
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarGrid from './car/CarGrid';
import { cars, categories, CarCategory } from '@/data/fleet-data';
import { useLanguage } from '@/contexts/LanguageContext';

const FleetSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CarCategory>("luxury");
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-navy mb-4">
          {t('fleet.title')}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {t('fleet.subtitle')}
        </p>

        <Tabs defaultValue="luxury" className="w-full" onValueChange={(value) => setActiveTab(value as CarCategory)}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 mb-8 h-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-xs sm:text-sm px-2 py-2 sm:px-3"
              >
                {t(getCategoryKey(category))}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <CarGrid 
                cars={cars.filter(car => car.category === category)} 
                category={category} 
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FleetSection;
