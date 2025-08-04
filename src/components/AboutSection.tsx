import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
const AboutSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop" alt="Customer Service" className="w-64 h-auto rounded-lg shadow-lg border-4 border-white" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.description2')}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-primary-gold font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('about.feature1')}</h3>
                  <p className="text-gray-600 text-sm">{t('about.feature1Desc')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-primary-gold font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('about.feature2')}</h3>
                  <p className="text-gray-600 text-sm">{t('about.feature2Desc')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-primary-gold font-bold">03</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('about.feature3')}</h3>
                  <p className="text-gray-600 text-sm">{t('about.feature3Desc')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-gold/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-primary-gold font-bold">04</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('about.feature4')}</h3>
                  <p className="text-gray-600 text-sm">{t('about.feature4Desc')}</p>
                </div>
              </div>
            </div>

            <Button className="bg-primary-gold hover:bg-yellow-600 text-white">
              {t('about.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;