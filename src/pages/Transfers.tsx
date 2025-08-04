
import React from 'react';
import Navbar from '@/components/Navbar';
import TransferSection from '@/components/TransferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Transfers = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-primary-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('page.transfers.title')}</h1>
          <p className="text-lg max-w-3xl mx-auto">
            {t('page.transfers.subtitle')}
          </p>
        </div>
      </div>
      <TransferSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Transfers;
