
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-primary-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('page.about.title')}</h1>
          <p className="text-lg max-w-3xl mx-auto">
            {t('page.about.subtitle')}
          </p>
        </div>
      </div>
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default About;
