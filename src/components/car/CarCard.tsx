
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar } from 'lucide-react';
import { Car } from '@/types/car';
import { useLanguage } from '@/contexts/LanguageContext';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleReserveNow = () => {
    const searchParams = new URLSearchParams({
      vehicle: car.name,
      category: car.category
    });
    navigate(`/booking?${searchParams.toString()}`);
  };

  const getCarDescriptionKey = (carName: string) => {
    const nameMap: { [key: string]: string } = {
      'Mercedes-Benz S-Class': 'carDesc.mercedesSClass',
      'Audi A8': 'carDesc.audiA8',
      'Porsche Panamera': 'carDesc.porschePanamera',
      'Mercedes-Benz GLE': 'carDesc.mercedesGLE',
      'Audi Q7': 'carDesc.audiQ7',
      'Porsche Cayenne': 'carDesc.porscheCayenne',
      'Honda Civic': 'carDesc.hondaCivic',
      'VW Tiguan': 'carDesc.vwTiguan',
      'VW Touareg': 'carDesc.vwTouareg',
      'Hyundai Tucson': 'carDesc.hyundaiTucson',
      'Dacia Sandero': 'carDesc.daciaSandero',
      'Renault Clio': 'carDesc.renaultClio',
      'Hyundai i30': 'carDesc.hyundaiI30',
      'Ford Mondeo': 'carDesc.fordMondeo',
      'VW Passat': 'carDesc.vwPassat',
      'Hyundai i30 SW': 'carDesc.hyundaiI30SW',
      'Renault Trafic': 'carDesc.renaultTrafic',
      'Opel Vivaro': 'carDesc.opelVivaro'
    };
    return nameMap[carName] || '';
  };
  
  // Translate car features
  const translateFeature = (feature: string) => {
    const featureKeys: { [key: string]: string } = {
      'Automatic': 'features.automatic',
      'Air Conditioning': 'features.airConditioning',
      'Leather Seats': 'features.leather',
      'GPS Navigation': 'features.navigation',
      'Bluetooth': 'features.bluetooth',
      'Sunroof': 'features.sunroof',
      'Cruise Control': 'features.cruiseControl',
      'Parking Sensors': 'features.parkingSensors',
      'Premium Audio': 'features.premium',
      'Heated Seats': 'features.heated',
      'All-Wheel Drive': 'features.allWheel',
      'Sport Mode': 'features.sportMode',
      'Keyless Entry': 'features.keyless',
      'Wireless Charging': 'features.wireless',
      'Backup Camera': 'features.camera',
      'Xenon Lights': 'features.xenon',
      'Massage Seats': 'features.massage',
      'Panoramic Roof': 'features.panoramic',
      'Adaptive Cruise': 'features.adaptive',
      'Wi-Fi Hotspot': 'features.wifi'
    };
    
    return featureKeys[feature] ? t(featureKeys[feature]) : feature;
  };

  return (
    <Card className="overflow-hidden car-card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{car.name}</h3>
          <div className="bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-medium">
            €{car.pricePerDay}{t('car.perDay')}
          </div>
        </div>
        {car.minRentalDays && (
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 text-gray-600 mr-2" />
            <span className="text-sm text-gray-600">{t('car.minimum')} {car.minRentalDays} {t('car.days')}</span>
          </div>
        )}
        <p className="text-gray-600 text-sm mb-4">{t(getCarDescriptionKey(car.name))}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2">{t('car.features')}</h4>
          <div className="grid grid-cols-2 gap-1">
            {car.features.map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-600">
                <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mr-2"></span>
                {translateFeature(feature)}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleReserveNow}
            variant="outline" 
            className="text-primary-gold hover:text-white hover:bg-primary-gold"
          >
            {t('car.reserveNow')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
