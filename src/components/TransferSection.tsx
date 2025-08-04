
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransferGrid from './transfer/TransferGrid';
import { transfers, transferCategories, TransferCategory } from '@/data/transfer-data';
import { useLanguage } from '@/contexts/LanguageContext';

const TransferSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TransferCategory>("vip");
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
    <section id="transfers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-navy mb-4">
          {t('transfers.title')}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {t('transfers.subtitle')}
        </p>

        <Tabs defaultValue="vip" className="w-full" onValueChange={(value) => setActiveTab(value as TransferCategory)}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {transferCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {t(getCategoryKey(category))}
              </TabsTrigger>
            ))}
          </TabsList>

          {transferCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <TransferGrid 
                transfers={transfers.filter(transfer => transfer.category === category)} 
                category={category} 
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TransferSection;
