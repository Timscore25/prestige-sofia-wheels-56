
import React from 'react';
import { Instagram } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">
              Prestige <span className="text-primary-gold">Rent</span>
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-gold transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary-gold transition-colors">{t('nav.home')}</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary-gold transition-colors">{t('nav.about')}</a></li>
              <li><a href="/fleet" className="text-gray-300 hover:text-primary-gold transition-colors">{t('nav.fleet')}</a></li>
              <li><a href="/transfers" className="text-gray-300 hover:text-primary-gold transition-colors">{t('nav.transfers')}</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary-gold transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.vehicleCategories')}</h3>
            <ul className="space-y-2">
              <li><a href="/fleet" className="text-gray-300 hover:text-primary-gold transition-colors">{t('footer.luxurySedans')}</a></li>
              <li><a href="/fleet" className="text-gray-300 hover:text-primary-gold transition-colors">{t('footer.exoticSportsCars')}</a></li>
              <li><a href="/fleet" className="text-gray-300 hover:text-primary-gold transition-colors">{t('footer.executiveSuvs')}</a></li>
              <li><a href="/fleet" className="text-gray-300 hover:text-primary-gold transition-colors">{t('footer.weddingCars')}</a></li>
              <li><a href="/fleet" className="text-gray-300 hover:text-primary-gold transition-colors">{t('footer.economyCars')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">{t('footer.address1')}</p>
              <p className="mb-2">{t('footer.address2')}</p>
              <p className="mb-2">{t('footer.address3')}</p>
              <p className="mb-2">{t('footer.address4')}</p>
              <p className="mb-2">{t('footer.email')}</p>
              <p className="mb-2">{t('footer.phone')}</p>
              <p>{t('footer.phone2')}</p>
            </address>
          </div>

          <div>
            <LanguageSelector variant="footer" />
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-primary-gold transition-colors">{t('footer.privacy')}</a>
              <a href="/terms" className="hover:text-primary-gold transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
