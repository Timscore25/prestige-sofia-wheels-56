
import React from 'react';
import { Shield, Clock, Car, Users, Award, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseSection: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      title: t('whyChoose.insurance'),
      description: t('whyChoose.insuranceDesc')
    },
    {
      icon: Clock,
      title: t('whyChoose.support'),
      description: t('whyChoose.supportDesc')
    },
    {
      icon: Car,
      title: t('whyChoose.fleet'),
      description: t('whyChoose.fleetDesc')
    },
    {
      icon: Users,
      title: t('whyChoose.drivers'),
      description: t('whyChoose.driversDesc')
    },
    {
      icon: Award,
      title: t('whyChoose.price'),
      description: t('whyChoose.priceDesc')
    },
    {
      icon: HeartHandshake,
      title: t('whyChoose.service'),
      description: t('whyChoose.serviceDesc')
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-navy mb-4">
          {t('whyChoose.title')}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {t('whyChoose.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-gold/10 p-3 rounded-full mr-4">
                    <IconComponent className="w-6 h-6 text-primary-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
