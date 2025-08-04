
import React from 'react';
import { CheckCircle, Clock, Star, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-navy mb-12">
          {t('features.title')} <span className="text-primary-gold">{t('features.brandName')}</span> {t('features.titleSuffix')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-primary-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-navy">{t('features.premiumFleet')}</h3>
            <p className="text-gray-600">
              {t('features.premiumFleetDesc')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-primary-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-navy">{t('features.vipService')}</h3>
            <p className="text-gray-600">
              {t('features.vipServiceDesc')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Star className="h-12 w-12 text-primary-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-navy">{t('features.personalizedExperience')}</h3>
            <p className="text-gray-600">
              {t('features.personalizedExperienceDesc')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-navy">{t('features.trustworthyExcellence')}</h3>
            <p className="text-gray-600">
              {t('features.trustworthyExcellenceDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
