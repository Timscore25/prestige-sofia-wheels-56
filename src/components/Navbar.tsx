
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-playfair font-bold ${isScrolled ? 'text-primary-navy' : 'text-white'}`}>
              Lux<span className="text-primary-gold">Ride</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-primary-gold' : 'text-white hover:text-primary-gold'}`}>
              {t('nav.home')}
            </Link>
            <Link to="/fleet" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-primary-gold' : 'text-white hover:text-primary-gold'}`}>
              {t('nav.fleet')}
            </Link>
            <Link to="/transfers" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-primary-gold' : 'text-white hover:text-primary-gold'}`}>
              {t('nav.transfers')}
            </Link>
            <Link to="/about" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-primary-gold' : 'text-white hover:text-primary-gold'}`}>
              {t('nav.about')}
            </Link>
            <Link to="/contact" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-primary-gold' : 'text-white hover:text-primary-gold'}`}>
              {t('nav.contact')}
            </Link>
            <LanguageSelector />
            <Button className="bg-primary-gold hover:bg-yellow-600 text-white">
              {t('nav.bookNow')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 text-gray-700 hover:text-primary-gold" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/fleet" className="px-4 py-2 text-gray-700 hover:text-primary-gold" onClick={() => setIsMenuOpen(false)}>
                {t('nav.fleet')}
              </Link>
              <Link to="/transfers" className="px-4 py-2 text-gray-700 hover:text-primary-gold" onClick={() => setIsMenuOpen(false)}>
                {t('nav.transfers')}
              </Link>
              <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-primary-gold" onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="px-4 py-2 text-gray-700 hover:text-primary-gold" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </Link>
              <Button className="bg-primary-gold hover:bg-yellow-600 text-white mx-4">
                {t('nav.bookNow')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
