
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users } from 'lucide-react';
import { Transfer } from '@/data/transfer-data';
import { useLanguage } from '@/contexts/LanguageContext';

interface TransferCardProps {
  transfer: Transfer;
}

const TransferCard: React.FC<TransferCardProps> = ({ transfer }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBookTransfer = () => {
    const searchParams = new URLSearchParams({
      vehicle: transfer.name,
      category: transfer.category,
      transferType: 'transfer'
    });
    navigate(`/booking?${searchParams.toString()}`);
  };

  const getTransferDescriptionKey = (transferName: string) => {
    const nameMap: { [key: string]: string } = {
      'Mercedes-Benz S-Class': 'transferDesc.mercedesSClass',
      'Audi A8': 'transferDesc.audiA8',
      'Mercedes-Benz GLE': 'transferDesc.mercedesGLE',
      'VW Passat': 'transferDesc.vwPassat',
      'Ford Mondeo': 'transferDesc.fordMondeo',
      'VW Tiguan': 'transferDesc.vwTiguan',
      'Renault Trafic': 'transferDesc.renaultTrafic',
      'Opel Vivaro': 'transferDesc.opelVivaro'
    };
    return nameMap[transferName] || '';
  };
  
  // Translate transfer features
  const translateFeature = (feature: string) => {
    const featureKeys: { [key: string]: string } = {
      'Professional Driver': 'transferFeatures.professionalDriver',
      'Fuel Included': 'transferFeatures.fuelIncluded',
      'Full Insurance': 'transferFeatures.insurance',
      'Meet & Greet': 'transferFeatures.meetGreet',
      'Flight Tracking': 'transferFeatures.flightTracking',
      'Free Waiting Time': 'transferFeatures.waitingTime',
      'Bottled Water': 'transferFeatures.bottledWater',
      'Wi-Fi': 'transferFeatures.wifi',
      'Child Seat Available': 'transferFeatures.childSeat',
      'Luggage Assistance': 'transferFeatures.luggage',
      'No Hidden Fees': 'transferFeatures.noHidden',
      'Free Cancellation': 'transferFeatures.cancelFree'
    };
    
    return featureKeys[feature] ? t(featureKeys[feature]) : feature;
  };

  return (
    <Card className="overflow-hidden car-card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={transfer.image}
          alt={transfer.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{transfer.name}</h3>
          <div className="bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-medium">
            €{transfer.pricePerKm}{t('transfer.perKm')}
          </div>
        </div>
        <div className="flex items-center mb-2">
          <Users className="h-4 w-4 text-gray-600 mr-2" />
          <span className="text-sm text-gray-600">{t('transfer.upTo')} {transfer.capacity} {t('transfer.passengers')}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{t(getTransferDescriptionKey(transfer.name))}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2">{t('transfer.included')}</h4>
          <div className="grid grid-cols-1 gap-1">
            {transfer.features.map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-600">
                <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mr-2"></span>
                {translateFeature(feature)}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleBookTransfer}
            variant="outline" 
            className="text-primary-gold hover:text-white hover:bg-primary-gold"
          >
            {t('transfer.bookTransfer')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TransferCard;
