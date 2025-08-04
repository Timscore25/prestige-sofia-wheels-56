import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'bg' | 'ru' | 'es' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.fleet': 'Our Fleet',
    'nav.transfers': 'Transfers',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero Section
    'hero.title': 'Drive Prestige. Experience Sofia in Style.',
    'hero.subtitle': 'Discover the elegance of the road with LuxRide — Sofia\'s premier luxury car rental service. Choose from an exclusive fleet of high-end vehicles, tailored for comfort, class, and unforgettable experiences.',
    'hero.cta1': 'Reserve Your Luxury Ride Today',
    'hero.cta2': 'Explore Our Fleet',
    'hero.quickReservation': 'Quick Reservation',
    'hero.pickupDate': 'Pick-up Date',
    'hero.returnDate': 'Return Date',
    'hero.carType': 'Car Type',
    'hero.allCarTypes': 'All Car Types',
    'hero.luxurySedans': 'Luxury Sedans',
    'hero.exoticSportsCars': 'Exotic Sports Cars',
    'hero.executiveSuvs': 'Executive SUVs',
    'hero.economyCars': 'Economy Cars',
    'hero.searchCars': 'Search Available Cars',
    
    // Fleet Section
    'fleet.title': 'Our Fleet',
    'fleet.subtitle': 'Choose from our exceptional selection of vehicles tailored to your needs - from luxury travel to practical transportation.',
    
    // Transfer Section
    'transfers.title': 'Professional Transfers',
    'transfers.subtitle': 'Comfortable and reliable transfer services with professional drivers. From VIP luxury to economy options, we ensure you reach your destination in style and comfort.',
    
    // Features Section
    'features.title': 'Why',
    'features.brandName': 'Prestige',
    'features.titleSuffix': 'Rent?',
    'features.premiumFleet': 'Premium Fleet',
    'features.premiumFleetDesc': 'Exclusive selection of luxury sedans, SUVs, and sports cars maintained to perfection.',
    'features.vipService': 'VIP Service',
    'features.vipServiceDesc': 'Airport pick-up, drop-off, and 24/7 concierge support for all your needs.',
    'features.personalizedExperience': 'Personalized Experience',
    'features.personalizedExperienceDesc': 'Tailored rental options for business, leisure, or special events to suit your needs.',
    'features.trustworthyExcellence': 'Trustworthy Excellence',
    'features.trustworthyExcellenceDesc': 'Impeccable customer care and professional service that puts you first.',
    
    // About Section
    'about.title': 'Why Choose LuxRide?',
    'about.description1': 'At LuxRide, we believe in redefining the car rental experience. With a fleet of high-end vehicles and personalized service, we provide you with more than just transportation – we offer a luxurious journey.',
    'about.description2': 'Whether you\'re in Sofia for business, leisure, or a special event, we ensure that your time here is marked by comfort and style. From luxury sedans to practical economy city cars, we have the perfect vehicle for every occasion and budget. Our team is dedicated to making every moment extraordinary with tailored solutions and professional support.',
    'about.feature1': 'Premium Cars',
    'about.feature1Desc': 'Maintained to perfection',
    'about.feature2': 'Best Pricing',
    'about.feature2Desc': 'Value for luxury',
    'about.feature3': '24/7 Support',
    'about.feature3Desc': 'Always at your service',
    'about.feature4': 'Flexible Terms',
    'about.feature4Desc': 'Tailored to your needs',
    'about.cta': 'Book Your Ride Today',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Whether you have a question about our fleet or need assistance with booking, our team is here to help. Reach out to us anytime!',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.phone': 'Phone Number',
    'contact.message': 'How can we help you?',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.info': 'Contact Information',
    'contact.businessHours': 'Business Hours',
    'contact.mondaySunday': 'Monday - Sunday',
    'contact.hours': '8:00 AM - 11:30 PM',
    
    // Car Categories
    'categories.luxury': 'Luxury Sedans',
    'categories.sports': 'Sports Cars',
    'categories.suv': 'Executive SUVs',
    'categories.economySuv': 'Economy SUVs',
    'categories.midsize': 'Midsize Cars',
    'categories.economy': 'Economy Cars',
    'categories.bus': 'Buses (8+1)',
    
    // Transfer Categories
    'transferCategories.vip': 'VIP Transfers',
    'transferCategories.economy': 'Economy Transfers',
    'transferCategories.bus': 'Bus Transfers (8+1)',
    
    // Car Actions
    'car.reserveNow': 'Reserve Now',
    'car.viewAll': 'View All',
    'car.features': 'Features:',
    'car.perDay': '/day',
    'car.minimum': 'Minimum',
    'car.days': 'days',
    
    // Transfer Actions
    'transfer.bookTransfer': 'Book Transfer',
    'transfer.included': 'Included:',
    'transfer.upTo': 'Up to',
    'transfer.passengers': 'passengers',
    'transfer.perKm': '/km',
    
    // Car Descriptions
    'carDesc.mercedesSClass': 'Experience unparalleled luxury with the Mercedes-Benz S-Class. Featuring elegant design and cutting-edge technology.',
    'carDesc.audiA8': 'The Audi A8 combines sophisticated design with outstanding performance and comfort.',
    'carDesc.porschePanamera': 'The sleek Porsche Panamera combines sports car performance with luxury sedan comfort and space.',
    'carDesc.mercedesGLE': 'The Mercedes-Benz GLE offers spacious comfort, commanding presence, and advanced technology.',
    'carDesc.audiQ7': 'Experience luxury and versatility with the Audi Q7, featuring spacious interiors and powerful performance.',
    'carDesc.porscheCayenne': 'The Porsche Cayenne delivers sports car performance in an SUV package, with unmatched luxury and capability.',
    'carDesc.hondaCivic': 'The Honda Civic offers excellent reliability, comfort, and driving dynamics at an affordable price.',
    'carDesc.vwTiguan': 'The Volkswagen Tiguan offers German engineering with practicality, comfort and advanced features.',
    'carDesc.vwTouareg': 'The Volkswagen Touareg combines premium comfort with practical versatility and excellent value.',
    'carDesc.hyundaiTucson': 'The stylish Hyundai Tucson offers excellent value with modern design, comfort, and practicality.',
    'carDesc.daciaSandero': 'The budget-friendly Dacia Sandero offers excellent value with surprising comfort and practicality.',
    'carDesc.renaultClio': 'The stylish Renault Clio combines French design flair with efficiency and engaging driving dynamics.',
    'carDesc.hyundaiI30': 'The well-equipped Hyundai i30 offers exceptional quality, comfort and reliability at a great price.',
    'carDesc.fordMondeo': 'The Ford Mondeo delivers excellent comfort, advanced technology and a smooth driving experience.',
    'carDesc.vwPassat': 'The VW Passat combines German engineering with comfort, style and impressive practicality.',
    'carDesc.hyundaiI30SW': 'The practical Hyundai i30 SW offers impressive cargo space with comfort and reliability.',
    'carDesc.renaultTrafic': 'The Renault Trafic offers comfortable seating for 9 passengers with ample luggage space.',
    'carDesc.opelVivaro': 'The versatile Opel Vivaro comfortably seats 9 passengers, perfect for group travel.',
    
    // Transfer Descriptions
    'transferDesc.mercedesSClass': 'Experience ultimate luxury transfer with our premium Mercedes-Benz S-Class.',
    'transferDesc.audiA8': 'Sophisticated VIP transfer service with Audi\'s flagship luxury sedan.',
    'transferDesc.mercedesGLE': 'Spacious luxury SUV transfer for larger groups without compromising on comfort.',
    'transferDesc.vwPassat': 'Reliable and comfortable economy transfer with professional service.',
    'transferDesc.fordMondeo': 'Comfortable and affordable transfer option for everyday travel needs.',
    'transferDesc.vwTiguan': 'Practical SUV transfer combining comfort with ample space for luggage.',
    'transferDesc.renaultTrafic': 'Perfect for group transfers with professional driver and comfortable seating for 8 passengers.',
    'transferDesc.opelVivaro': 'Reliable group transport solution with experienced driver for up to 8 passengers.',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Don\'t just take our word for it - hear what our customers have to say about their LuxRide experience.',
    
    // Why Choose Section
    'whyChoose.title': 'Why Choose LuxRide?',
    'whyChoose.subtitle': 'We\'re committed to providing exceptional service and premium vehicles to make your journey comfortable and memorable.',
    'whyChoose.insurance': 'Fully Insured Vehicles',
    'whyChoose.insuranceDesc': 'All our vehicles come with comprehensive insurance coverage for your peace of mind.',
    'whyChoose.support': '24/7 Customer Support',
    'whyChoose.supportDesc': 'Round-the-clock assistance for any questions or emergency situations during your rental.',
    'whyChoose.fleet': 'Premium Fleet',
    'whyChoose.fleetDesc': 'Regularly maintained, high-quality vehicles from luxury to economy options.',
    'whyChoose.drivers': 'Professional Drivers',
    'whyChoose.driversDesc': 'Experienced, licensed drivers for our transfer services with local knowledge.',
    'whyChoose.price': 'Best Price Guarantee',
    'whyChoose.priceDesc': 'Competitive rates with transparent pricing and no hidden fees.',
    'whyChoose.service': 'Personalized Service',
    'whyChoose.serviceDesc': 'Tailored solutions to meet your specific transportation needs and preferences.',
    
    // Car Features
    'features.automatic': 'Automatic',
    'features.airConditioning': 'Air Conditioning',
    'features.leather': 'Leather Seats',
    'features.navigation': 'GPS Navigation',
    'features.bluetooth': 'Bluetooth',
    'features.sunroof': 'Sunroof',
    'features.cruiseControl': 'Cruise Control',
    'features.parkingSensors': 'Parking Sensors',
    'features.premium': 'Premium Audio',
    'features.heated': 'Heated Seats',
    'features.allWheel': 'All-Wheel Drive',
    'features.sportMode': 'Sport Mode',
    'features.keyless': 'Keyless Entry',
    'features.wireless': 'Wireless Charging',
    'features.camera': 'Backup Camera',
    'features.xenon': 'Xenon Lights',
    'features.massage': 'Massage Seats',
    'features.panoramic': 'Panoramic Roof',
    'features.adaptive': 'Adaptive Cruise',
    'features.wifi': 'Wi-Fi Hotspot',
    
    // Transfer Features
    'transferFeatures.professionalDriver': 'Professional Driver',
    'transferFeatures.fuelIncluded': 'Fuel Included',
    'transferFeatures.insurance': 'Full Insurance',
    'transferFeatures.meetGreet': 'Meet & Greet',
    'transferFeatures.flightTracking': 'Flight Tracking',
    'transferFeatures.waitingTime': 'Free Waiting Time',
    'transferFeatures.bottledWater': 'Bottled Water',
    'transferFeatures.wifi': 'Wi-Fi',
    'transferFeatures.childSeat': 'Child Seat Available',
    'transferFeatures.luggage': 'Luggage Assistance',
    'transferFeatures.noHidden': 'No Hidden Fees',
    'transferFeatures.cancelFree': 'Free Cancellation',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.vehicleCategories': 'Vehicle Categories',
    'footer.contact': 'Contact',
    'footer.description': 'Experience Sofia in style with our premium fleet of luxury vehicles.',
    'footer.luxurySedans': 'Luxury Sedans',
    'footer.exoticSportsCars': 'Exotic Sports Cars',
    'footer.executiveSuvs': 'Executive SUVs',
    'footer.weddingCars': 'Wedding Cars',
    'footer.economyCars': 'Economy Cars',
    'footer.address1': 'Sofia Airport',
    'footer.address2': 'Sofia, Bulgaria',
    'footer.address3': 'Varna Airport',
    'footer.address4': 'Business park varna building B1',
    'footer.phone': 'Phone: +359 882713027 (WhatsApp, Viber and Telegram 24/7)',
    'footer.phone2': 'Phone: +359 892799994 (WhatsApp, Viber and Telegram 24/7)',
    'footer.copyright': '© 2025 LuxRide. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Page Titles
    'page.fleet.title': 'Our Fleet',
    'page.fleet.subtitle': 'Explore our extensive collection of premium vehicles for rental',
    'page.transfers.title': 'Professional Transfers',
    'page.transfers.subtitle': 'Comfortable and reliable transfer services with professional drivers across all categories',
    'page.about.title': 'About Us',
    'page.about.subtitle': 'Learn more about LuxRide and our commitment to excellence',
    'page.contact.title': 'Contact Us',
    'page.contact.subtitle': 'Get in touch with our team for bookings, inquiries, and support'
  },
  bg: {
    // Navigation
    'nav.home': 'Начало',
    'nav.fleet': 'Нашият Автопарк',
    'nav.transfers': 'Трансфери',
    'nav.about': 'За Нас',
    'nav.contact': 'Контакти',
    'nav.bookNow': 'Резервирай Сега',
    
    // Hero Section
    'hero.title': 'Караите с Престиж. Изживейте София със Стил.',
    'hero.subtitle': 'Открийте елегантността на пътя с LuxRide — водещата премиум услуга за наем на луксозни автомобили в София. Изберете от ексклузивния ни автопарк от висок клас превозни средства, адаптирани за комфорт, клас и незабравими преживявания.',
    'hero.cta1': 'Резервирайте Вашата Луксозна Езда Днес',
    'hero.cta2': 'Разгледайте Нашия Автопарк',
    'hero.quickReservation': 'Бърза Резервация',
    'hero.pickupDate': 'Дата на Вземане',
    'hero.returnDate': 'Дата на Връщане',
    'hero.carType': 'Тип Автомобил',
    'hero.allCarTypes': 'Всички Типове Автомобили',
    'hero.luxurySedans': 'Луксозни Седани',
    'hero.exoticSportsCars': 'Екзотични Спортни Коли',
    'hero.executiveSuvs': 'Екзекютив SUV-та',
    'hero.economyCars': 'Икономични Коли',
    'hero.searchCars': 'Търсене на Налични Коли',
    
    // Fleet Section
    'fleet.title': 'Нашият Автопарк',
    'fleet.subtitle': 'Изберете от нашата изключителна селекция от превозни средства, адаптирани към вашите нужди - от луксозни пътувания до практичен транспорт.',
    
    // Transfer Section
    'transfers.title': 'Професионални Трансфери',
    'transfers.subtitle': 'Комфортни и надеждни трансферни услуги с професионални шофьори. От VIP луксозни до икономични опции, ние гарантираме, че ще стигнете до дестинацията си със стил и комфорт.',
    
    // Features Section
    'features.title': 'Защо',
    'features.brandName': 'Prestige',
    'features.titleSuffix': 'Rent?',
    'features.premiumFleet': 'Премиум Автопарк',
    'features.premiumFleetDesc': 'Ексклузивна селекция от луксозни седани, SUV-та и спортни коли, поддържани до съвършенство.',
    'features.vipService': 'VIP Услуга',
    'features.vipServiceDesc': 'Вземане от летището, доставяне и 24/7 консиерж поддръжка за всички ваши нужди.',
    'features.personalizedExperience': 'Персонализирано Преживяване',
    'features.personalizedExperienceDesc': 'Адаптирани опции за наем за бизнес, отдих или специални събития според вашите нужди.',
    'features.trustworthyExcellence': 'Надеждно Съвършенство',
    'features.trustworthyExcellenceDesc': 'Безупречна грижа за клиентите и професионално обслужване, което ви поставя на първо място.',
    
    // About Section
    'about.title': 'Защо да Изберете LuxRide?',
    'about.description1': 'В LuxRide вярваме в преосмислянето на опита за наем на автомобили. С автопарк от висок клас превозни средства и персонализирано обслужване, ние ви предоставяме повече от транспорт – предлагаме луксозно пътуване.',
    'about.description2': 'Независимо дали сте в София по работа, за удоволствие или за специално събитие, ние гарантираме, че времето ви тук ще бъде отбелязано с комфорт и стил. От луксозни седани до практични икономични градски автомобили, имаме перфектното превозно средство за всеки повод и бюджет.',
    'about.feature1': 'Премиум Коли',
    'about.feature1Desc': 'Поддържани до съвършенство',
    'about.feature2': 'Най-добри Цени',
    'about.feature2Desc': 'Стойност за лукс',
    'about.feature3': '24/7 Поддръжка',
    'about.feature3Desc': 'Винаги на ваше обслужване',
    'about.feature4': 'Гъвкави Условия',
    'about.feature4Desc': 'Адаптирани към вашите нужди',
    'about.cta': 'Резервирайте Вашата Езда Днес',
    
    // Contact Section
    'contact.title': 'Свържете се с Нас',
    'contact.subtitle': 'Независимо дали имате въпрос относно нашия автопарк или се нуждаете от помощ с резервация, нашият екип е тук, за да помогне. Свържете се с нас по всяко време!',
    'contact.name': 'Вашето Име',
    'contact.email': 'Вашият Имейл',
    'contact.phone': 'Телефонен Номер',
    'contact.message': 'Как можем да ви помогнем?',
    'contact.send': 'Изпрати Съобщение',
    'contact.sending': 'Изпращане...',
    'contact.info': 'Информация за Контакт',
    'contact.businessHours': 'Работно Време',
    'contact.mondaySunday': 'Понеделник - Неделя',
    'contact.hours': '8:00 - 23:30',
    
    // Car Categories
    'categories.luxury': 'Луксозни Седани',
    'categories.sports': 'Спортни Коли',
    'categories.suv': 'Екзекютив SUV-та',
    'categories.economySuv': 'Икономични SUV-та',
    'categories.midsize': 'Средни Коли',
    'categories.economy': 'Икономични Коли',
    'categories.bus': 'Автобуси (8+1)',
    
    // Transfer Categories
    'transferCategories.vip': 'VIP Трансфери',
    'transferCategories.economy': 'Икономични Трансфери',
    'transferCategories.bus': 'Автобусни Трансфери (8+1)',
    
    // Car Actions
    'car.reserveNow': 'Резервирай Сега',
    'car.viewAll': 'Виж Всички',
    'car.features': 'Характеристики:',
    'car.perDay': '/ден',
    'car.minimum': 'Минимум',
    'car.days': 'дни',
    
    // Transfer Actions
    'transfer.bookTransfer': 'Резервирай Трансфер',
    'transfer.included': 'Включено:',
    'transfer.upTo': 'До',
    'transfer.passengers': 'пътници',
    'transfer.perKm': '/км',
    
    // Car Descriptions
    'carDesc.mercedesSClass': 'Изживейте безпрецедентен лукс с Mercedes-Benz S-Class. Отличава се с елегантен дизайн и най-съвременни технологии.',
    'carDesc.audiA8': 'Audi A8 съчетава изискан дизайн с изключителна производителност и комфорт.',
    'carDesc.porschePanamera': 'Елегантната Porsche Panamera съчетава производителността на спортна кола с комфорта и пространството на луксозна седан.',
    'carDesc.mercedesGLE': 'Mercedes-Benz GLE предлага просторен комфорт, внушително присъствие и напреднали технологии.',
    'carDesc.audiQ7': 'Изживейте лукс и универсалност с Audi Q7, отличаващ се с просторен интериор и мощна производителност.',
    'carDesc.porscheCayenne': 'Porsche Cayenne предлага производителност на спортна кола в SUV пакет, с несравним лукс и възможности.',
    'carDesc.hondaCivic': 'Honda Civic предлага отлична надеждност, комфорт и динамика на шофиране на достъпна цена.',
    'carDesc.vwTiguan': 'Volkswagen Tiguan предлага немска инженерност с практичност, комфорт и напреднали функции.',
    'carDesc.vwTouareg': 'Volkswagen Touareg съчетава премиум комфорт с практична универсалност и отлична стойност.',
    'carDesc.hyundaiTucson': 'Стилната Hyundai Tucson предлага отлична стойност с модерен дизайн, комфорт и практичност.',
    'carDesc.daciaSandero': 'Бюджетната Dacia Sandero предлага отлична стойност с изненадващ комфорт и практичност.',
    'carDesc.renaultClio': 'Стилната Renault Clio съчетава френски дизайнерски усет с ефективност и ангажираща динамика на шофиране.',
    'carDesc.hyundaiI30': 'Добре оборудваната Hyundai i30 предлага изключително качество, комфорт и надеждност на страхотна цена.',
    'carDesc.fordMondeo': 'Ford Mondeo предлага отличен комфорт, напреднали технологии и гладко шофьорско изживяване.',
    'carDesc.vwPassat': 'VW Passat съчетава немска инженерност с комфорт, стил и впечатляваща практичност.',
    'carDesc.hyundaiI30SW': 'Практичната Hyundai i30 SW предлага впечатляващо товарно пространство с комфорт и надеждност.',
    'carDesc.renaultTrafic': 'Renault Trafic предлага комфортни места за 9 пътници с достатъчно багажно пространство.',
    'carDesc.opelVivaro': 'Универсалната Opel Vivaro комфортно побира 9 пътници, перфектна за групови пътувания.',
    
    // Transfer Descriptions
    'transferDesc.mercedesSClass': 'Изживейте върховен луксозен трансфер с нашата премиум Mercedes-Benz S-Class.',
    'transferDesc.audiA8': 'Изискана VIP трансферна услуга с флагманската луксозна седан на Audi.',
    'transferDesc.mercedesGLE': 'Просторен луксозен SUV трансфер за по-големи групи без компромис с комфорта.',
    'transferDesc.vwPassat': 'Надежден и комфортен икономичен трансфер с професионално обслужване.',
    'transferDesc.fordMondeo': 'Комфортна и достъпна трансферна опция за ежедневни пътни нужди.',
    'transferDesc.vwTiguan': 'Практичен SUV трансфер, съчетаващ комфорт с достатъчно пространство за багаж.',
    'transferDesc.renaultTrafic': 'Перфектна за групови трансфери с професионален шофьор и комфортни места за 8 пътници.',
    'transferDesc.opelVivaro': 'Надеждно групово транспортно решение с опитен шофьор за до 8 пътници.',
    
    // Testimonials
    'testimonials.title': 'Какво Казват Нашите Клиенти',
    'testimonials.subtitle': 'Не се доверявайте само на нашите думи - чуйте какво имат да кажат нашите клиенти за тяхното преживяване с LuxRide.',
    
    // Why Choose Section
    'whyChoose.title': 'Защо да Изберете LuxRide?',
    'whyChoose.subtitle': 'Ние се ангажираме да предоставим изключително обслужване и премиум превозни средства, за да направим вашето пътуване комфортно и незабравимо.',
    'whyChoose.insurance': 'Напълно Застрахован Автопарк',
    'whyChoose.insuranceDesc': 'Всички наши превозни средства идват с пълно застрахователно покритие за ваше спокойствие.',
    'whyChoose.support': '24/7 Клиентска Поддръжка',
    'whyChoose.supportDesc': 'Денонощна помощ за всякакви въпроси или спешни ситуации по време на вашия наем.',
    'whyChoose.fleet': 'Премиум Автопарк',
    'whyChoose.fleetDesc': 'Редовно поддържани, висококачествени превозни средства от луксозни до икономични опции.',
    'whyChoose.drivers': 'Професионални Шофьори',
    'whyChoose.driversDesc': 'Опитни, лицензирани шофьори за нашите трансферни услуги с местни познания.',
    'whyChoose.price': 'Гаранция за Най-добра Цена',
    'whyChoose.priceDesc': 'Конкурентни цени с прозрачно ценообразуване и без скрити такси.',
    'whyChoose.service': 'Персонализирано Обслужване',
    'whyChoose.serviceDesc': 'Адаптирани решения за задоволяване на вашите специфични транспортни нужди и предпочитания.',
    
    // Car Features
    'features.automatic': 'Автоматик',
    'features.airConditioning': 'Климатик',
    'features.leather': 'Кожени Седалки',
    'features.navigation': 'GPS Навигация',
    'features.bluetooth': 'Bluetooth',
    'features.sunroof': 'Слънчев Покрив',
    'features.cruiseControl': 'Круиз Контрол',
    'features.parkingSensors': 'Сензори за Паркиране',
    'features.premium': 'Премиум Аудио',
    'features.heated': 'Отопляеми Седалки',
    'features.allWheel': 'Задвижване на Всички Колела',
    'features.sportMode': 'Спортен Режим',
    'features.keyless': 'Безключово Влизане',
    'features.wireless': 'Безжично Зареждане',
    'features.camera': 'Камера за Заден Ход',
    'features.xenon': 'Ксенонови Светлини',
    'features.massage': 'Масажни Седалки',
    'features.panoramic': 'Панорамен Покрив',
    'features.adaptive': 'Адаптивен Круиз',
    'features.wifi': 'Wi-Fi Точка',
    
    // Transfer Features
    'transferFeatures.professionalDriver': 'Професионален Шофьор',
    'transferFeatures.fuelIncluded': 'Гориво Включено',
    'transferFeatures.insurance': 'Пълна Застраховка',
    'transferFeatures.meetGreet': 'Посрещане',
    'transferFeatures.flightTracking': 'Проследяване на Полети',
    'transferFeatures.waitingTime': 'Безплатно Време за Чакане',
    'transferFeatures.bottledWater': 'Бутилирана Вода',
    'transferFeatures.wifi': 'Wi-Fi',
    'transferFeatures.childSeat': 'Детско Столче',
    'transferFeatures.luggage': 'Помощ с Багажа',
    'transferFeatures.noHidden': 'Без Скрити Такси',
    'transferFeatures.cancelFree': 'Безплатно Отказване',
    
    // Footer
    'footer.quickLinks': 'Бързи Връзки',
    'footer.vehicleCategories': 'Категории Превозни Средства',
    'footer.contact': 'Контакт',
    'footer.description': 'Изживейте София със стил с нашия премиум автопарк от луксозни превозни средства.',
    'footer.luxurySedans': 'Луксозни Седани',
    'footer.exoticSportsCars': 'Екзотични Спортни Коли',
    'footer.executiveSuvs': 'Екзекютив SUV-та',
    'footer.weddingCars': 'Сватбени Коли',
    'footer.economyCars': 'Икономични Коли',
    'footer.address1': 'Летище София',
    'footer.address2': 'София, България',
    
    'footer.phone': 'Телефон: +359 882713027',
    'footer.copyright': '© 2025 LuxRide. Всички права запазени.',
    'footer.privacy': 'Политика за Поверителност',
    'footer.terms': 'Условия за Ползване',
    
    // Page Titles
    'page.fleet.title': 'Нашият Автопарк',
    'page.fleet.subtitle': 'Разгледайте нашата обширна колекция от премиум превозни средства за наем',
    'page.transfers.title': 'Професионални Трансфери',
    'page.transfers.subtitle': 'Комфортни и надеждни трансферни услуги с професионални шофьори във всички категории',
    'page.about.title': 'За Нас',
    'page.about.subtitle': 'Научете повече за LuxRide и нашия ангажимент към съвършенството',
    'page.contact.title': 'Свържете се с Нас',
    'page.contact.subtitle': 'Свържете се с нашия екип за резервации, запитвания и поддръжка'
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.fleet': 'Наш Автопарк',
    'nav.transfers': 'Трансферы',
    'nav.about': 'О Нас',
    'nav.contact': 'Контакты',
    'nav.bookNow': 'Забронировать',
    
    // Hero Section
    'hero.title': 'Водите с Престижем. Почувствуйте Софию в Стиле.',
    'hero.subtitle': 'Откройте элегантность дороги с LuxRide — ведущим премиум сервисом аренды роскошных автомобилей в Софии. Выберите из нашего эксклюзивного автопарка высококлассных транспортных средств, адаптированных для комфорта, класса и незабываемых впечатлений.',
    'hero.cta1': 'Забронируйте Вашу Роскошную Поездку Сегодня',
    'hero.cta2': 'Посмотреть Наш Автопарк',
    'hero.quickReservation': 'Быстрое Бронирование',
    'hero.pickupDate': 'Дата Получения',
    'hero.returnDate': 'Дата Возврата',
    'hero.carType': 'Тип Автомобиля',
    'hero.allCarTypes': 'Все Типы Автомобилей',
    'hero.luxurySedans': 'Роскошные Седаны',
    'hero.exoticSportsCars': 'Экзотические Спорткары',
    'hero.executiveSuvs': 'Представительские Внедорожники',
    'hero.economyCars': 'Эконом Автомобили',
    'hero.searchCars': 'Поиск Доступных Автомобилей',
    
    // Fleet Section
    'fleet.title': 'Наш Автопарк',
    'fleet.subtitle': 'Выберите из нашего исключительного выбора транспортных средств, адаптированных к вашим потребностям - от роскошных путешествий до практичного транспорта.',
    
    // Transfer Section
    'transfers.title': 'Профессиональные Трансферы',
    'transfers.subtitle': 'Комфортные и надежные трансферные услуги с профессиональными водителями. От VIP роскошных до эконом вариантов, мы гарантируем, что вы доберетесь до места назначения в стиле и комфорте.',
    
    // Features Section
    'features.title': 'Почему',
    'features.brandName': 'Prestige',
    'features.titleSuffix': 'Rent?',
    'features.premiumFleet': 'Премиум Автопарк',
    'features.premiumFleetDesc': 'Эксклюзивный выбор роскошных седанов, внедорожников и спорткаров, поддерживаемых до совершенства.',
    'features.vipService': 'VIP Сервис',
    'features.vipServiceDesc': 'Встреча в аэропорту, доставка и круглосуточная поддержка консьержа для всех ваших потребностей.',
    'features.personalizedExperience': 'Персонализированный Опыт',
    'features.personalizedExperienceDesc': 'Адаптированные варианты аренды для бизнеса, отдыха или особых мероприятий в соответствии с вашими потребностями.',
    'features.trustworthyExcellence': 'Надежное Совершенство',
    'features.trustworthyExcellenceDesc': 'Безупречная забота о клиентах и профессиональный сервис, который ставит вас на первое место.',
    
    // About Section
    'about.title': 'Почему Выбрать LuxRide?',
    'about.description1': 'В LuxRide мы верим в переосмысление опыта аренды автомобилей. С автопарком высококлассных транспортных средств и персонализированным обслуживанием, мы предоставляем вам больше, чем просто транспорт – мы предлагаем роскошное путешествие.',
    'about.description2': 'Независимо от того, находитесь ли вы в Софии по работе, для удовольствия или на особое мероприятие, мы гарантируем, что ваше время здесь будет отмечено комфортом и стилем. От роскошных седанов до практичных эконом городских автомобилей, у нас есть идеальное транспортное средство для любого повода и бюджета.',
    'about.feature1': 'Премиум Автомобили',
    'about.feature1Desc': 'Поддерживаются до совершенства',
    'about.feature2': 'Лучшие Цены',
    'about.feature2Desc': 'Ценность за роскошь',
    'about.feature3': '24/7 Поддержка',
    'about.feature3Desc': 'Всегда к вашим услугам',
    'about.feature4': 'Гибкие Условия',
    'about.feature4Desc': 'Адаптированы к вашим потребностям',
    'about.cta': 'Забронируйте Вашу Поездку Сегодня',
    
    // Contact Section
    'contact.title': 'Свяжитесь с Нами',
    'contact.subtitle': 'Если у вас есть вопрос о нашем автопарке или вам нужна помощь с бронированием, наша команда здесь, чтобы помочь. Свяжитесь с нами в любое время!',
    'contact.name': 'Ваше Имя',
    'contact.email': 'Ваш Email',
    'contact.phone': 'Номер Телефона',
    'contact.message': 'Как мы можем вам помочь?',
    'contact.send': 'Отправить Сообщение',
    'contact.sending': 'Отправка...',
    'contact.info': 'Контактная Информация',
    'contact.businessHours': 'Рабочие Часы',
    'contact.mondaySunday': 'Понедельник - Воскресенье',
    'contact.hours': '8:00 - 23:30',
    
    // Car Categories
    'categories.luxury': 'Роскошные Седаны',
    'categories.sports': 'Спорткары',
    'categories.suv': 'Представительские Внедорожники',
    'categories.economySuv': 'Эконом Внедорожники',
    'categories.midsize': 'Средние Автомобили',
    'categories.economy': 'Эконом Автомобили',
    'categories.bus': 'Автобусы (8+1)',
    
    // Transfer Categories
    'transferCategories.vip': 'VIP Трансферы',
    'transferCategories.economy': 'Эконом Трансферы',
    'transferCategories.bus': 'Автобусные Трансферы (8+1)',
    
    // Car Actions
    'car.reserveNow': 'Забронировать',
    'car.viewAll': 'Посмотреть Все',
    'car.features': 'Особенности:',
    'car.perDay': '/день',
    'car.minimum': 'Минимум',
    'car.days': 'дней',
    
    // Transfer Actions
    'transfer.bookTransfer': 'Забронировать Трансфер',
    'transfer.included': 'Включено:',
    'transfer.upTo': 'До',
    'transfer.passengers': 'пассажиров',
    'transfer.perKm': '/км',
    
    // Car Descriptions
    'carDesc.mercedesSClass': 'Испытайте непревзойденную роскошь с Mercedes-Benz S-Class. Отличается элегантным дизайном и передовыми технологиями.',
    'carDesc.audiA8': 'Audi A8 сочетает изысканный дизайн с выдающейся производительностью и комфортом.',
    'carDesc.porschePanamera': 'Элегантная Porsche Panamera сочетает производительность спорткара с комфортом и пространством роскошного седана.',
    'carDesc.mercedesGLE': 'Mercedes-Benz GLE предлагает просторный комфорт, внушительное присутствие и передовые технологии.',
    'carDesc.audiQ7': 'Испытайте роскошь и универсальность с Audi Q7, отличающимся просторным интерьером и мощной производительностью.',
    'carDesc.porscheCayenne': 'Porsche Cayenne предлагает производительность спорткара в корпусе внедорожника с непревзойденной роскошью и возможностями.',
    'carDesc.hondaCivic': 'Honda Civic предлагает отличную надежность, комфорт и динамику вождения по доступной цене.',
    'carDesc.vwTiguan': 'Volkswagen Tiguan предлагает немецкую инженерию с практичностью, комфортом и передовыми функциями.',
    'carDesc.vwTouareg': 'Volkswagen Touareg сочетает премиум комфорт с практической универсальностью и отличной ценностью.',
    'carDesc.hyundaiTucson': 'Стильная Hyundai Tucson предлагает отличную ценность с современным дизайном, комфортом и практичностью.',
    'carDesc.daciaSandero': 'Бюджетная Dacia Sandero предлагает отличную ценность с удивительным комфортом и практичностью.',
    'carDesc.renaultClio': 'Стильная Renault Clio сочетает французский дизайнерский стиль с эффективностью и захватывающей динамикой вождения.',
    'carDesc.hyundaiI30': 'Хорошо оборудованная Hyundai i30 предлагает исключительное качество, комфорт и надежность по отличной цене.',
    'carDesc.fordMondeo': 'Ford Mondeo предлагает отличный комфорт, передовые технологии и плавный опыт вождения.',
    'carDesc.vwPassat': 'VW Passat сочетает немецкую инженерию с комфортом, стилем и впечатляющей практичностью.',
    'carDesc.hyundaiI30SW': 'Практичная Hyundai i30 SW предлагает впечатляющее грузовое пространство с комфортом и надежностью.',
    'carDesc.renaultTrafic': 'Renault Trafic предлагает комфортные места для 9 пассажиров с достаточным багажным пространством.',
    'carDesc.opelVivaro': 'Универсальная Opel Vivaro комфортно размещает 9 пассажиров, идеальна для групповых поездок.',
    
    // Transfer Descriptions
    'transferDesc.mercedesSClass': 'Испытайте превосходный роскошный трансфер с нашим премиум Mercedes-Benz S-Class.',
    'transferDesc.audiA8': 'Изысканная VIP трансферная услуга с флагманским роскошным седаном Audi.',
    'transferDesc.mercedesGLE': 'Просторный роскошный SUV трансфер для больших групп без компромиссов с комфортом.',
    'transferDesc.vwPassat': 'Надежный и комфортный экономичный трансфер с профессиональным обслуживанием.',
    'transferDesc.fordMondeo': 'Комфортная и доступная трансферная опция для повседневных транспортных нужд.',
    'transferDesc.vwTiguan': 'Практичный SUV трансфер, сочетающий комфорт с достаточным пространством для багажа.',
    'transferDesc.renaultTrafic': 'Идеальна для групповых трансферов с профессиональным водителем и комфортными местами для 8 пассажиров.',
    'transferDesc.opelVivaro': 'Надежное групповое транспортное решение с опытным водителем для до 8 пассажиров.',
    
    // Testimonials
    'testimonials.title': 'Что Говорят Наши Клиенты',
    'testimonials.subtitle': 'Не верьте только нашим словам - послушайте, что наши клиенты говорят о своем опыте с LuxRide.',
    
    // Why Choose Section
    'whyChoose.title': 'Почему Выбрать LuxRide?',
    'whyChoose.subtitle': 'Мы стремимся предоставить исключительный сервис и премиум автомобили, чтобы сделать ваше путешествие комфортным и запоминающимся.',
    'whyChoose.insurance': 'Полностью Застрахованные Автомобили',
    'whyChoose.insuranceDesc': 'Все наши автомобили имеют комплексное страховое покрытие для вашего спокойствия.',
    'whyChoose.support': '24/7 Клиентская Поддержка',
    'whyChoose.supportDesc': 'Круглосуточная помощь для любых вопросов или экстренных ситуаций во время аренды.',
    'whyChoose.fleet': 'Премиум Автопарк',
    'whyChoose.fleetDesc': 'Регулярно обслуживаемые, высококачественные автомобили от роскошных до эконом вариантов.',
    'whyChoose.drivers': 'Профессиональные Водители',
    'whyChoose.driversDesc': 'Опытные, лицензированные водители для наших трансферных услуг с местными знаниями.',
    'whyChoose.price': 'Гарантия Лучшей Цены',
    'whyChoose.priceDesc': 'Конкурентные цены с прозрачным ценообразованием и без скрытых комиссий.',
    'whyChoose.service': 'Персонализированный Сервис',
    'whyChoose.serviceDesc': 'Индивидуальные решения для удовлетворения ваших конкретных транспортных потребностей и предпочтений.',
    
    // Car Features
    'features.automatic': 'Автоматическая',
    'features.airConditioning': 'Кондиционер',
    'features.leather': 'Кожаные Сиденья',
    'features.navigation': 'GPS Навигация',
    'features.bluetooth': 'Bluetooth',
    'features.sunroof': 'Люк',
    'features.cruiseControl': 'Круиз Контроль',
    'features.parkingSensors': 'Датчики Парковки',
    'features.premium': 'Премиум Аудио',
    'features.heated': 'Подогрев Сидений',
    'features.allWheel': 'Полный Привод',
    'features.sportMode': 'Спорт Режим',
    'features.keyless': 'Бесключевой Доступ',
    'features.wireless': 'Беспроводная Зарядка',
    'features.camera': 'Камера Заднего Вида',
    'features.xenon': 'Ксеноновые Фары',
    'features.massage': 'Массажные Сиденья',
    'features.panoramic': 'Панорамная Крыша',
    'features.adaptive': 'Адаптивный Круиз',
    'features.wifi': 'Wi-Fi Точка',
    
    // Transfer Features
    'transferFeatures.professionalDriver': 'Профессиональный Водитель',
    'transferFeatures.fuelIncluded': 'Топливо Включено',
    'transferFeatures.insurance': 'Полная Страховка',
    'transferFeatures.meetGreet': 'Встреча',
    'transferFeatures.flightTracking': 'Отслеживание Рейсов',
    'transferFeatures.waitingTime': 'Бесплатное Время Ожидания',
    'transferFeatures.bottledWater': 'Бутилированная Вода',
    'transferFeatures.wifi': 'Wi-Fi',
    'transferFeatures.childSeat': 'Детское Кресло',
    'transferFeatures.luggage': 'Помощь с Багажом',
    'transferFeatures.noHidden': 'Без Скрытых Комиссий',
    'transferFeatures.cancelFree': 'Бесплатная Отмена',
    
    // Footer
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.vehicleCategories': 'Категории Автомобилей',
    'footer.contact': 'Контакт',
    'footer.description': 'Испытайте Софию в стиле с нашим премиум автопарком роскошных автомобилей.',
    'footer.luxurySedans': 'Роскошные Седаны',
    'footer.exoticSportsCars': 'Экзотические Спорткары',
    'footer.executiveSuvs': 'Представительские Внедорожники',
    'footer.weddingCars': 'Свадебные Автомобили',
    'footer.economyCars': 'Эконом Автомобили',
    'footer.address1': 'Аэропорт София',
    'footer.address2': 'София, Болгария',
    'footer.phone': 'Телефон: +359 882713027',
    'footer.copyright': '© 2025 LuxRide. Все права защищены.',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия Использования',
    
    // Page Titles
    'page.fleet.title': 'Наш Автопарк',
    'page.fleet.subtitle': 'Изучите нашу обширную коллекцию премиум автомобилей для аренды',
    'page.transfers.title': 'Профессиональные Трансферы',
    'page.transfers.subtitle': 'Комфортные и надежные трансферные услуги с профессиональными водителями во всех категориях',
    'page.about.title': 'О Нас',
    'page.about.subtitle': 'Узнайте больше о LuxRide и нашей приверженности к совершенству',
    'page.contact.title': 'Свяжитесь с Нами',
    'page.contact.subtitle': 'Свяжитесь с нашей командой для бронирования, вопросов и поддержки'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.fleet': 'Nuestra Flota',
    'nav.transfers': 'Transfers',
    'nav.about': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar Ahora',
    
    // Hero Section
    'hero.title': 'Conduce con Prestigio. Experimenta Sofía con Estilo.',
    'hero.subtitle': 'Descubre la elegancia del camino con LuxRide — el servicio premier de alquiler de coches de lujo de Sofía. Elige de nuestra flota exclusiva de vehículos de alta gama, adaptados para comodidad, clase y experiencias inolvidables.',
    'hero.cta1': 'Reserva Tu Viaje de Lujo Hoy',
    'hero.cta2': 'Explorar Nuestra Flota',
    'hero.quickReservation': 'Reserva Rápida',
    'hero.pickupDate': 'Fecha de Recogida',
    'hero.returnDate': 'Fecha de Devolución',
    'hero.carType': 'Tipo de Coche',
    'hero.allCarTypes': 'Todos los Tipos de Coches',
    'hero.luxurySedans': 'Sedanes de Lujo',
    'hero.exoticSportsCars': 'Deportivos Exóticos',
    'hero.executiveSuvs': 'SUVs Ejecutivos',
    'hero.economyCars': 'Coches Económicos',
    'hero.searchCars': 'Buscar Coches Disponibles',
    
    // Fleet Section
    'fleet.title': 'Nuestra Flota',
    'fleet.subtitle': 'Elige de nuestra selección excepcional de vehículos adaptados a tus necesidades - desde viajes de lujo hasta transporte práctico.',
    
    // Transfer Section
    'transfers.title': 'Transfers Profesionales',
    'transfers.subtitle': 'Servicios de transfer cómodos y confiables con conductores profesionales. Desde opciones VIP de lujo hasta económicas, aseguramos que llegues a tu destino con estilo y comodidad.',
    
    // Features Section
    'features.title': '¿Por Qué',
    'features.brandName': 'Prestige',
    'features.titleSuffix': 'Rent?',
    'features.premiumFleet': 'Flota Premium',
    'features.premiumFleetDesc': 'Selección exclusiva de sedanes de lujo, SUVs y deportivos mantenidos a la perfección.',
    'features.vipService': 'Servicio VIP',
    'features.vipServiceDesc': 'Recogida en aeropuerto, entrega y soporte de conserjería 24/7 para todas tus necesidades.',
    'features.personalizedExperience': 'Experiencia Personalizada',
    'features.personalizedExperienceDesc': 'Opciones de alquiler adaptadas para negocios, ocio o eventos especiales según tus necesidades.',
    'features.trustworthyExcellence': 'Excelencia Confiable',
    'features.trustworthyExcellenceDesc': 'Atención al cliente impecable y servicio profesional que te pone primero.',
    
    // About Section
    'about.title': '¿Por Qué Elegir LuxRide?',
    'about.description1': 'En LuxRide, creemos en redefinir la experiencia de alquiler de coches. Con una flota de vehículos de alta gama y servicio personalizado, te proporcionamos más que solo transporte – ofrecemos un viaje lujoso.',
    'about.description2': 'Ya sea que estés en Sofía por negocios, placer o un evento especial, aseguramos que tu tiempo aquí esté marcado por comodidad y estilo. Desde sedanes de lujo hasta coches económicos prácticos urbanos, tenemos el vehículo perfecto para cada ocasión y presupuesto.',
    'about.feature1': 'Coches Premium',
    'about.feature1Desc': 'Mantenidos a la perfección',
    'about.feature2': 'Mejores Precios',
    'about.feature2Desc': 'Valor por lujo',
    'about.feature3': 'Soporte 24/7',
    'about.feature3Desc': 'Siempre a tu servicio',
    'about.feature4': 'Términos Flexibles',
    'about.feature4Desc': 'Adaptados a tus necesidades',
    'about.cta': 'Reserva Tu Viaje Hoy',
    
    // Contact Section
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Tienes una pregunta sobre nuestra flota o necesitas ayuda con la reserva? Nuestro equipo está aquí para ayudar. ¡Contáctanos en cualquier momento!',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Tu Email',
    'contact.phone': 'Número de Teléfono',
    'contact.message': '¿Cómo podemos ayudarte?',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.info': 'Información de Contacto',
    'contact.businessHours': 'Horario Comercial',
    'contact.mondaySunday': 'Lunes - Domingo',
    'contact.hours': '8:00 AM - 11:30 PM',
    
    // Car Categories
    'categories.luxury': 'Sedanes de Lujo',
    'categories.sports': 'Deportivos',
    'categories.suv': 'SUVs Ejecutivos',
    'categories.economySuv': 'SUVs Económicos',
    'categories.midsize': 'Coches Medianos',
    'categories.economy': 'Coches Económicos',
    'categories.bus': 'Autobuses (8+1)',
    
    // Transfer Categories
    'transferCategories.vip': 'Transfers VIP',
    'transferCategories.economy': 'Transfers Económicos',
    'transferCategories.bus': 'Transfers en Autobús (8+1)',
    
    // Car Actions
    'car.reserveNow': 'Reservar Ahora',
    'car.viewAll': 'Ver Todos',
    'car.features': 'Características:',
    'car.perDay': '/día',
    'car.minimum': 'Mínimo',
    'car.days': 'días',
    
    // Transfer Actions
    'transfer.bookTransfer': 'Reservar Transfer',
    'transfer.included': 'Incluido:',
    'transfer.upTo': 'Hasta',
    'transfer.passengers': 'pasajeros',
    'transfer.perKm': '/km',
    
    // Car Descriptions
    'carDesc.mercedesSClass': 'Experimente el lujo sin igual con el Mercedes-Benz S-Class. Presenta diseño elegante y tecnología de vanguardia.',
    'carDesc.audiA8': 'El Audi A8 combina diseño sofisticado con rendimiento excepcional y comodidad.',
    'carDesc.porschePanamera': 'El elegante Porsche Panamera combina el rendimiento de un deportivo con la comodidad y el espacio de un sedán de lujo.',
    'carDesc.mercedesGLE': 'El Mercedes-Benz GLE ofrece comodidad espaciosa, presencia imponente y tecnología avanzada.',
    'carDesc.audiQ7': 'Experimente lujo y versatilidad con el Audi Q7, con interiores espaciosos y rendimiento potente.',
    'carDesc.porscheCayenne': 'El Porsche Cayenne ofrece rendimiento de deportivo en un paquete SUV, con lujo y capacidad inigualables.',
    'carDesc.hondaCivic': 'El Honda Civic ofrece excelente confiabilidad, comodidad y dinámicas de conducción a un precio asequible.',
    'carDesc.vwTiguan': 'El Volkswagen Tiguan ofrece ingeniería alemana con practicidad, comodidad y características avanzadas.',
    'carDesc.vwTouareg': 'El Volkswagen Touareg combina comodidad premium con versatilidad práctica y excelente valor.',
    'carDesc.hyundaiTucson': 'El elegante Hyundai Tucson ofrece excelente valor con diseño moderno, comodidad y practicidad.',
    'carDesc.daciaSandero': 'El económico Dacia Sandero ofrece excelente valor con comodidad y practicidad sorprendentes.',
    'carDesc.renaultClio': 'El elegante Renault Clio combina el estilo de diseño francés con eficiencia y dinámicas de conducción atractivas.',
    'carDesc.hyundaiI30': 'El bien equipado Hyundai i30 ofrece calidad excepcional, comodidad y confiabilidad a un gran precio.',
    'carDesc.fordMondeo': 'El Ford Mondeo ofrece excelente comodidad, tecnología avanzada y una experiencia de conducción suave.',
    'carDesc.vwPassat': 'El VW Passat combina ingeniería alemana con comodidad, estilo y practicidad impresionante.',
    'carDesc.hyundaiI30SW': 'El práctico Hyundai i30 SW ofrece espacio de carga impresionante con comodidad y confiabilidad.',
    'carDesc.renaultTrafic': 'El Renault Trafic ofrece asientos cómodos para 9 pasajeros con amplio espacio de equipaje.',
    'carDesc.opelVivaro': 'El versátil Opel Vivaro acomoda cómodamente a 9 pasajeros, perfecto para viajes en grupo.',
    
    // Transfer Descriptions
    'transferDesc.mercedesSClass': 'Experimente el transfer de lujo definitivo con nuestro premium Mercedes-Benz S-Class.',
    'transferDesc.audiA8': 'Servicio de transfer VIP sofisticado con el sedán de lujo insignia de Audi.',
    'transferDesc.mercedesGLE': 'Transfer SUV de lujo espacioso para grupos más grandes sin comprometer la comodidad.',
    'transferDesc.vwPassat': 'Transfer económico confiable y cómodo con servicio profesional.',
    'transferDesc.fordMondeo': 'Opción de transfer cómoda y asequible para necesidades de viaje cotidianas.',
    'transferDesc.vwTiguan': 'Transfer SUV práctico que combina comodidad con amplio espacio para equipaje.',
    'transferDesc.renaultTrafic': 'Perfecto para transfers grupales con conductor profesional y asientos cómodos para 8 pasajeros.',
    'transferDesc.opelVivaro': 'Solución de transporte grupal confiable con conductor experimentado para hasta 8 pasajeros.',
    
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'No solo confíes en nuestra palabra - escucha lo que nuestros clientes tienen que decir sobre su experiencia con LuxRide.',
    
    // Why Choose Section
    'whyChoose.title': '¿Por Qué Elegir LuxRide?',
    'whyChoose.subtitle': 'Estamos comprometidos a brindar un servicio excepcional y vehículos premium para hacer tu viaje cómodo y memorable.',
    'whyChoose.insurance': 'Vehículos Completamente Asegurados',
    'whyChoose.insuranceDesc': 'Todos nuestros vehículos vienen con cobertura de seguro integral para tu tranquilidad.',
    'whyChoose.support': 'Soporte al Cliente 24/7',
    'whyChoose.supportDesc': 'Asistencia las 24 horas para cualquier pregunta o situación de emergencia durante tu alquiler.',
    'whyChoose.fleet': 'Flota Premium',
    'whyChoose.fleetDesc': 'Vehículos de alta calidad mantenidos regularmente, desde opciones de lujo hasta económicas.',
    'whyChoose.drivers': 'Conductores Profesionales',
    'whyChoose.driversDesc': 'Conductores experimentados y licenciados para nuestros servicios de transfer con conocimiento local.',
    'whyChoose.price': 'Garantía del Mejor Precio',
    'whyChoose.priceDesc': 'Precios competitivos con tarifas transparentes y sin comisiones ocultas.',
    'whyChoose.service': 'Servicio Personalizado',
    'whyChoose.serviceDesc': 'Soluciones adaptadas para satisfacer tus necesidades específicas de transporte y preferencias.',
    
    // Car Features
    'features.automatic': 'Automático',
    'features.airConditioning': 'Aire Acondicionado',
    'features.leather': 'Asientos de Cuero',
    'features.navigation': 'Navegación GPS',
    'features.bluetooth': 'Bluetooth',
    'features.sunroof': 'Techo Solar',
    'features.cruiseControl': 'Control de Crucero',
    'features.parkingSensors': 'Sensores de Aparcamiento',
    'features.premium': 'Audio Premium',
    'features.heated': 'Asientos Calefactados',
    'features.allWheel': 'Tracción Total',
    'features.sportMode': 'Modo Deportivo',
    'features.keyless': 'Entrada sin Llave',
    'features.wireless': 'Carga Inalámbrica',
    'features.camera': 'Cámara Trasera',
    'features.xenon': 'Luces Xenón',
    'features.massage': 'Asientos de Masaje',
    'features.panoramic': 'Techo Panorámico',
    'features.adaptive': 'Crucero Adaptativo',
    'features.wifi': 'Punto Wi-Fi',
    
    // Transfer Features
    'transferFeatures.professionalDriver': 'Conductor Profesional',
    'transferFeatures.fuelIncluded': 'Combustible Incluido',
    'transferFeatures.insurance': 'Seguro Completo',
    'transferFeatures.meetGreet': 'Encuentro y Saludo',
    'transferFeatures.flightTracking': 'Seguimiento de Vuelos',
    'transferFeatures.waitingTime': 'Tiempo de Espera Gratuito',
    'transferFeatures.bottledWater': 'Agua Embotellada',
    'transferFeatures.wifi': 'Wi-Fi',
    'transferFeatures.childSeat': 'Asiento Infantil',
    'transferFeatures.luggage': 'Asistencia con Equipaje',
    'transferFeatures.noHidden': 'Sin Comisiones Ocultas',
    'transferFeatures.cancelFree': 'Cancelación Gratuita',
    
    // Footer
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.vehicleCategories': 'Categorías de Vehículos',
    'footer.contact': 'Contacto',
    'footer.description': 'Experimenta Sofía con estilo con nuestra flota premium de vehículos de lujo.',
    'footer.luxurySedans': 'Sedanes de Lujo',
    'footer.exoticSportsCars': 'Deportivos Exóticos',
    'footer.executiveSuvs': 'SUVs Ejecutivos',
    'footer.weddingCars': 'Coches de Boda',
    'footer.economyCars': 'Coches Económicos',
    'footer.address1': 'Aeropuerto de Sofía',
    'footer.address2': 'Sofía, Bulgaria',
    'footer.phone': 'Teléfono: +359 882713027',
    'footer.copyright': '© 2025 LuxRide. Todos los Derechos Reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    
    // Page Titles
    'page.fleet.title': 'Nuestra Flota',
    'page.fleet.subtitle': 'Explora nuestra extensa colección de vehículos premium para alquiler',
    'page.transfers.title': 'Transfers Profesionales',
    'page.transfers.subtitle': 'Servicios de transfer cómodos y confiables con conductores profesionales en todas las categorías',
    'page.about.title': 'Sobre Nosotros',
    'page.about.subtitle': 'Aprende más sobre LuxRide y nuestro compromiso con la excelencia',
    'page.contact.title': 'Contáctanos',
    'page.contact.subtitle': 'Ponte en contacto con nuestro equipo para reservas, consultas y soporte'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.fleet': 'Unsere Flotte',
    'nav.transfers': 'Transfers',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.bookNow': 'Jetzt Buchen',
    
    // Hero Section
    'hero.title': 'Fahren Sie mit Prestige. Erleben Sie Sofia mit Stil.',
    'hero.subtitle': 'Entdecken Sie die Eleganz der Straße mit LuxRide — Sofias führendem Premium-Luxusautovermietungsservice. Wählen Sie aus unserer exklusiven Flotte von High-End-Fahrzeugen, die für Komfort, Klasse und unvergessliche Erfahrungen maßgeschneidert sind.',
    'hero.cta1': 'Buchen Sie Ihre Luxusfahrt Heute',
    'hero.cta2': 'Unsere Flotte Erkunden',
    'hero.quickReservation': 'Schnelle Reservierung',
    'hero.pickupDate': 'Abholdatum',
    'hero.returnDate': 'Rückgabedatum',
    'hero.carType': 'Autotyp',
    'hero.allCarTypes': 'Alle Autotypen',
    'hero.luxurySedans': 'Luxus-Limousinen',
    'hero.exoticSportsCars': 'Exotische Sportwagen',
    'hero.executiveSuvs': 'Executive SUVs',
    'hero.economyCars': 'Wirtschaftsautos',
    'hero.searchCars': 'Verfügbare Autos Suchen',
    
    // Fleet Section
    'fleet.title': 'Unsere Flotte',
    'fleet.subtitle': 'Wählen Sie aus unserer außergewöhnlichen Auswahl an Fahrzeugen, die auf Ihre Bedürfnisse zugeschnitten sind - von Luxusreisen bis hin zu praktischem Transport.',
    
    // Transfer Section
    'transfers.title': 'Professionelle Transfers',
    'transfers.subtitle': 'Komfortable und zuverlässige Transfer-Services mit professionellen Fahrern. Von VIP-Luxus bis hin zu Economy-Optionen stellen wir sicher, dass Sie Ihr Ziel mit Stil und Komfort erreichen.',
    
    // Features Section
    'features.title': 'Warum',
    'features.brandName': 'Prestige',
    'features.titleSuffix': 'Rent?',
    'features.premiumFleet': 'Premium Flotte',
    'features.premiumFleetDesc': 'Exklusive Auswahl von Luxuslimousinen, SUVs und Sportwagen, die bis zur Perfektion gepflegt werden.',
    'features.vipService': 'VIP Service',
    'features.vipServiceDesc': 'Flughafenabholung, Lieferung und 24/7 Concierge-Support für alle Ihre Bedürfnisse.',
    'features.personalizedExperience': 'Personalisierte Erfahrung',
    'features.personalizedExperienceDesc': 'Maßgeschneiderte Mietoptionen für Geschäft, Freizeit oder besondere Veranstaltungen nach Ihren Bedürfnissen.',
    'features.trustworthyExcellence': 'Vertrauenswürdige Exzellenz',
    'features.trustworthyExcellenceDesc': 'Tadellose Kundenbetreuung und professioneller Service, der Sie an erste Stelle setzt.',
    
    // About Section
    'about.title': 'Warum LuxRide Wählen?',
    'about.description1': 'Bei LuxRide glauben wir daran, die Autovermietungserfahrung neu zu definieren. Mit einer Flotte von High-End-Fahrzeugen und personalisiertem Service bieten wir Ihnen mehr als nur Transport – wir bieten eine luxuriöse Reise.',
    'about.description2': 'Ob Sie geschäftlich, zum Vergnügen oder für ein besonderes Ereignis in Sofia sind, wir sorgen dafür, dass Ihre Zeit hier von Komfort und Stil geprägt ist. Von Luxuslimousinen bis hin zu praktischen Economy-Stadtautos haben wir das perfekte Fahrzeug für jeden Anlass und jedes Budget.',
    'about.feature1': 'Premium Autos',
    'about.feature1Desc': 'Bis zur Perfektion gepflegt',
    'about.feature2': 'Beste Preise',
    'about.feature2Desc': 'Wert für Luxus',
    'about.feature3': '24/7 Support',
    'about.feature3Desc': 'Immer zu Ihren Diensten',
    'about.feature4': 'Flexible Bedingungen',
    'about.feature4Desc': 'An Ihre Bedürfnisse angepasst',
    'about.cta': 'Buchen Sie Ihre Fahrt Heute',
    
    // Contact Section
    'contact.title': 'Kontaktieren Sie Uns',
    'contact.subtitle': 'Haben Sie eine Frage zu unserer Flotte oder benötigen Hilfe bei der Buchung? Unser Team ist hier, um zu helfen. Kontaktieren Sie uns jederzeit!',
    'contact.name': 'Ihr Name',
    'contact.email': 'Ihre E-Mail',
    'contact.phone': 'Telefonnummer',
    'contact.message': 'Wie können wir Ihnen helfen?',
    'contact.send': 'Nachricht Senden',
    'contact.sending': 'Senden...',
    'contact.info': 'Kontaktinformationen',
    'contact.businessHours': 'Geschäftszeiten',
    'contact.mondaySunday': 'Montag - Sonntag',
    'contact.hours': '8:00 - 23:30',
    
    // Car Categories
    'categories.luxury': 'Luxus-Limousinen',
    'categories.sports': 'Sportwagen',
    'categories.suv': 'Executive SUVs',
    'categories.economySuv': 'Economy SUVs',
    'categories.midsize': 'Mittelklasse-Autos',
    'categories.economy': 'Wirtschaftsautos',
    'categories.bus': 'Busse (8+1)',
    
    // Transfer Categories
    'transferCategories.vip': 'VIP Transfers',
    'transferCategories.economy': 'Economy Transfers',
    'transferCategories.bus': 'Bus Transfers (8+1)',
    
    // Car Actions
    'car.reserveNow': 'Jetzt Reservieren',
    'car.viewAll': 'Alle Ansehen',
    'car.features': 'Ausstattung:',
    'car.perDay': '/Tag',
    'car.minimum': 'Mindestens',
    'car.days': 'Tage',
    
    // Transfer Actions
    'transfer.bookTransfer': 'Transfer Buchen',
    'transfer.included': 'Inklusive:',
    'transfer.upTo': 'Bis zu',
    'transfer.passengers': 'Passagiere',
    'transfer.perKm': '/km',
    
    // Car Descriptions
    'carDesc.mercedesSClass': 'Erleben Sie unvergleichlichen Luxus mit der Mercedes-Benz S-Klasse. Zeichnet sich durch elegantes Design und modernste Technologie aus.',
    'carDesc.audiA8': 'Der Audi A8 verbindet ausgeklügeltes Design mit herausragender Leistung und Komfort.',
    'carDesc.porschePanamera': 'Der elegante Porsche Panamera verbindet Sportwagen-Performance mit Luxus-Limousinen-Komfort und -Raum.',
    'carDesc.mercedesGLE': 'Der Mercedes-Benz GLE bietet geräumigen Komfort, beeindruckende Präsenz und fortschrittliche Technologie.',
    'carDesc.audiQ7': 'Erleben Sie Luxus und Vielseitigkeit mit dem Audi Q7, mit geräumigen Innenräumen und kraftvoller Leistung.',
    'carDesc.porscheCayenne': 'Der Porsche Cayenne bietet Sportwagen-Performance in einem SUV-Paket mit unvergleichlichem Luxus und Fähigkeiten.',
    'carDesc.hondaCivic': 'Der Honda Civic bietet ausgezeichnete Zuverlässigkeit, Komfort und Fahrdynamik zu einem erschwinglichen Preis.',
    'carDesc.vwTiguan': 'Der Volkswagen Tiguan bietet deutsche Ingenieurskunst mit Praktikabilität, Komfort und fortschrittlichen Funktionen.',
    'carDesc.vwTouareg': 'Der Volkswagen Touareg verbindet Premium-Komfort mit praktischer Vielseitigkeit und ausgezeichnetem Wert.',
    'carDesc.hyundaiTucson': 'Der stilvolle Hyundai Tucson bietet ausgezeichneten Wert mit modernem Design, Komfort und Praktikabilität.',
    'carDesc.daciaSandero': 'Der budgetfreundliche Dacia Sandero bietet ausgezeichneten Wert mit überraschendem Komfort und Praktikabilität.',
    'carDesc.renaultClio': 'Der stilvolle Renault Clio verbindet französisches Design-Flair mit Effizienz und ansprechender Fahrdynamik.',
    'carDesc.hyundaiI30': 'Der gut ausgestattete Hyundai i30 bietet außergewöhnliche Qualität, Komfort und Zuverlässigkeit zu einem großartigen Preis.',
    'carDesc.fordMondeo': 'Der Ford Mondeo bietet ausgezeichneten Komfort, fortschrittliche Technologie und ein geschmeidiges Fahrerlebnis.',
    'carDesc.vwPassat': 'Der VW Passat verbindet deutsche Ingenieurskunst mit Komfort, Stil und beeindruckender Praktikabilität.',
    'carDesc.hyundaiI30SW': 'Der praktische Hyundai i30 SW bietet beeindruckenden Laderaum mit Komfort und Zuverlässigkeit.',
    'carDesc.renaultTrafic': 'Der Renault Trafic bietet komfortable Sitze für 9 Passagiere mit reichlich Gepäckraum.',
    'carDesc.opelVivaro': 'Der vielseitige Opel Vivaro bietet bequem Platz für 9 Passagiere, perfekt für Gruppenreisen.',
    
    // Transfer Descriptions
    'transferDesc.mercedesSClass': 'Erleben Sie ultimativen Luxus-Transfer mit unserer Premium Mercedes-Benz S-Klasse.',
    'transferDesc.audiA8': 'Anspruchsvoller VIP-Transfer-Service mit Audis Flaggschiff-Luxuslimousine.',
    'transferDesc.mercedesGLE': 'Geräumiger Luxus-SUV-Transfer für größere Gruppen ohne Kompromisse beim Komfort.',
    'transferDesc.vwPassat': 'Zuverlässiger und komfortabler Economy-Transfer mit professionellem Service.',
    'transferDesc.fordMondeo': 'Komfortable und erschwingliche Transfer-Option für alltägliche Reisebedürfnisse.',
    'transferDesc.vwTiguan': 'Praktischer SUV-Transfer, der Komfort mit reichlich Gepäckraum verbindet.',
    'transferDesc.renaultTrafic': 'Perfekt für Gruppentransfers mit professionellem Fahrer und komfortablen Sitzen für 8 Passagiere.',
    'transferDesc.opelVivaro': 'Zuverlässige Gruppentransportlösung mit erfahrenem Fahrer für bis zu 8 Passagiere.',
    
    // Testimonials
    'testimonials.title': 'Was Unsere Kunden Sagen',
    'testimonials.subtitle': 'Vertrauen Sie nicht nur unserem Wort - hören Sie, was unsere Kunden über ihre LuxRide Erfahrung zu sagen haben.',
    
    // Why Choose Section
    'whyChoose.title': 'Warum LuxRide Wählen?',
    'whyChoose.subtitle': 'Wir sind bestrebt, außergewöhnlichen Service und Premium-Fahrzeuge zu bieten, um Ihre Reise komfortabel und unvergesslich zu machen.',
    'whyChoose.insurance': 'Vollständig Versicherte Fahrzeuge',
    'whyChoose.insuranceDesc': 'Alle unsere Fahrzeuge sind vollständig versichert für Ihre Sicherheit.',
    'whyChoose.support': '24/7 Kundensupport',
    'whyChoose.supportDesc': 'Rund-um-die-Uhr Unterstützung für alle Fragen oder Notfälle während Ihrer Miete.',
    'whyChoose.fleet': 'Premium Flotte',
    'whyChoose.fleetDesc': 'Regelmäßig gewartete, hochwertige Fahrzeuge von Luxus- bis Economy-Optionen.',
    'whyChoose.drivers': 'Professionelle Fahrer',
    'whyChoose.driversDesc': 'Erfahrene, lizenzierte Fahrer für unsere Transfer-Services mit Ortskenntnissen.',
    'whyChoose.price': 'Bestpreis-Garantie',
    'whyChoose.priceDesc': 'Wettbewerbsfähige Preise mit transparenter Preisgestaltung und ohne versteckte Gebühren.',
    'whyChoose.service': 'Personalisierter Service',
    'whyChoose.serviceDesc': 'Maßgeschneiderte Lösungen für Ihre spezifischen Transportbedürfnisse und Vorlieben.',
    
    // Car Features
    'features.automatic': 'Automatik',
    'features.airConditioning': 'Klimaanlage',
    'features.leather': 'Ledersitze',
    'features.navigation': 'GPS Navigation',
    'features.bluetooth': 'Bluetooth',
    'features.sunroof': 'Schiebedach',
    'features.cruiseControl': 'Tempomat',
    'features.parkingSensors': 'Einparkhilfe',
    'features.premium': 'Premium Audio',
    'features.heated': 'Sitzheizung',
    'features.allWheel': 'Allradantrieb',
    'features.sportMode': 'Sport Modus',
    'features.keyless': 'Keyless Entry',
    'features.wireless': 'Drahtloses Laden',
    'features.camera': 'Rückfahrkamera',
    'features.xenon': 'Xenon Licht',
    'features.massage': 'Massagesitze',
    'features.panoramic': 'Panoramadach',
    'features.adaptive': 'Adaptiver Tempomat',
    'features.wifi': 'Wi-Fi Hotspot',
    
    // Transfer Features
    'transferFeatures.professionalDriver': 'Professioneller Fahrer',
    'transferFeatures.fuelIncluded': 'Kraftstoff Inklusive',
    'transferFeatures.insurance': 'Vollversicherung',
    'transferFeatures.meetGreet': 'Meet & Greet',
    'transferFeatures.flightTracking': 'Flugverfolgung',
    'transferFeatures.waitingTime': 'Kostenlose Wartezeit',
    'transferFeatures.bottledWater': 'Mineralwasser',
    'transferFeatures.wifi': 'Wi-Fi',
    'transferFeatures.childSeat': 'Kindersitz',
    'transferFeatures.luggage': 'Gepäckhilfe',
    'transferFeatures.noHidden': 'Keine Versteckten Kosten',
    'transferFeatures.cancelFree': 'Kostenlose Stornierung',
    
    // Footer
    'footer.quickLinks': 'Schnelle Links',
    'footer.vehicleCategories': 'Fahrzeugkategorien',
    'footer.contact': 'Kontakt',
    'footer.description': 'Erleben Sie Sofia mit Stil mit unserer Premium-Flotte von Luxus-Fahrzeugen.',
    'footer.luxurySedans': 'Luxus-Limousinen',
    'footer.exoticSportsCars': 'Exotische Sportwagen',
    'footer.executiveSuvs': 'Executive SUVs',
    'footer.weddingCars': 'Hochzeitsautos',
    'footer.economyCars': 'Wirtschaftsautos',
    'footer.address1': 'Sofia Flughafen',
    'footer.address2': 'Sofia, Bulgarien',
    
    'footer.phone': 'Telefon: +359 882713027',
    'footer.copyright': '© 2025 LuxRide. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    
    // Page Titles
    'page.fleet.title': 'Unsere Flotte',
    'page.fleet.subtitle': 'Entdecken Sie unsere umfangreiche Sammlung von Premium-Fahrzeugen zur Miete',
    'page.transfers.title': 'Professionelle Transfers',
    'page.transfers.subtitle': 'Komfortable und zuverlässige Transfer-Services mit professionellen Fahrern in allen Kategorien',
    'page.about.title': 'Über Uns',
    'page.about.subtitle': 'Erfahren Sie mehr über LuxRide und unser Engagement für Exzellenz',
    'page.contact.title': 'Kontaktieren Sie Uns',
    'page.contact.subtitle': 'Nehmen Sie Kontakt mit unserem Team auf für Buchungen, Anfragen und Unterstützung'
  }
};
