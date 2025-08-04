
import React from 'react';
import { Button } from "@/components/ui/button";
import TransferCard from './TransferCard';
import { Transfer, TransferCategory } from '@/data/transfer-data';
import { useLanguage } from '@/contexts/LanguageContext';

interface TransferGridProps {
  transfers: Transfer[];
  category: TransferCategory;
}

const TransferGrid: React.FC<TransferGridProps> = ({ transfers, category }) => {
  const { t } = useLanguage();

  const getCategoryKey = (category: TransferCategory) => {
    const categoryMap: { [key in TransferCategory]: string } = {
      'vip': 'transferCategories.vip',
      'economy': 'transferCategories.economy',
      'bus': 'transferCategories.bus'
    };
    return categoryMap[category];
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transfers.map(transfer => (
          <TransferCard key={transfer.id} transfer={transfer} />
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

export default TransferGrid;
