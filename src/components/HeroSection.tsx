
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [carType, setCarType] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleQuickReservation = () => {
    if (!pickupDate || !returnDate) {
      toast({
        title: "Date selection required",
        description: "Please select both pickup and return dates.",
        variant: "destructive"
      });
      return;
    }

    // Navigate to booking page with pre-filled data
    const searchParams = new URLSearchParams({
      pickupDate: pickupDate.toISOString(),
      returnDate: returnDate.toISOString(),
      ...(carType && { carType })
    });
    
    navigate(`/booking?${searchParams.toString()}`);
  };

  return (
    <section className="hero-section min-h-screen flex flex-col justify-center items-center text-white py-32 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl mb-6 font-bold leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <Button 
            onClick={() => navigate('/booking')}
            className="bg-primary-gold hover:bg-yellow-600 text-white font-medium text-lg px-8 py-6"
          >
            {t('hero.cta1')}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/fleet')}
            className="border-white bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg px-8 py-6"
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-primary-navy to-blue-900 rounded-xl shadow-xl p-6 mt-10 border border-blue-700/30">
        <h3 className="text-white text-2xl font-bold text-center mb-6">{t('hero.quickReservation')}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-white mb-1">{t('hero.pickupDate')}</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-blue-800/50 border-blue-600 hover:bg-blue-800 text-white"
                >
                  {pickupDate ? (
                    format(pickupDate, "PPP")
                  ) : (
                    <span>Select date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-slate-800 border-blue-700" align="start">
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={setPickupDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto bg-slate-800 text-white")}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">{t('hero.returnDate')}</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-blue-800/50 border-blue-600 hover:bg-blue-800 text-white"
                >
                  {returnDate ? (
                    format(returnDate, "PPP")
                  ) : (
                    <span>Select date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-slate-800 border-blue-700" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto bg-slate-800 text-white")}
                  disabled={(date) => date < new Date() || (pickupDate && date < pickupDate)}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">{t('hero.carType')}</label>
            <Select onValueChange={setCarType}>
              <SelectTrigger className="w-full bg-blue-800/50 border-blue-600 text-white hover:bg-blue-800">
                <SelectValue placeholder={t('hero.allCarTypes')} />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 text-white border-blue-700">
                <SelectItem value="all">{t('hero.allCarTypes')}</SelectItem>
                <SelectItem value="luxury">{t('hero.luxurySedans')}</SelectItem>
                <SelectItem value="sports">{t('hero.exoticSportsCars')}</SelectItem>
                <SelectItem value="suv">{t('hero.executiveSuvs')}</SelectItem>
                <SelectItem value="economy">{t('hero.economyCars')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button 
              onClick={handleQuickReservation}
              className="w-full bg-primary-gold hover:bg-yellow-600 text-white py-2 font-medium"
            >
              {t('hero.searchCars')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
