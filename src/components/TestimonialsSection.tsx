
import React from 'react';
import { Card } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  comment: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Define testimonials with multi-language support
  const getTestimonials = (): Testimonial[] => {
    // Default English testimonials
    const testimonials: Testimonial[] = [
      {
        id: 1,
        name: "John Doe",
        role: "Executive",
        image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop",
        comment: "LuxRide provided me with an incredible experience during my trip to Sofia. The service was impeccable, and the car was a dream to drive. Highly recommend!",
        rating: 5
      },
      {
        id: 2,
        name: "Emily & Mark",
        role: "Newlyweds",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",
        comment: "I rented a Range Rover for my wedding day, and it made everything feel even more magical. Thank you for such fantastic service!",
        rating: 5
      },
      {
        id: 3,
        name: "Sofia Martinez",
        role: "Business Traveler",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        comment: "The Audi A8 was perfect for my business meetings around Sofia. Clean, comfortable, and made a great impression on clients.",
        rating: 4
      },
      {
        id: 4,
        name: "Alexander Petrov",
        role: "Tourist",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
        comment: "The economy car was reliable and fuel-efficient. Pick-up was delayed by 30 minutes, but otherwise a good experience.",
        rating: 3
      },
      {
        id: 5,
        name: "Laura Johnson",
        role: "Family Vacation",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        comment: "We rented the VW Tiguan for our family trip around Bulgaria. Comfortable, spacious, and excellent fuel economy. The kids loved it!",
        rating: 5
      },
      {
        id: 6,
        name: "Marco Rossi",
        role: "Business Executive",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
        comment: "The Mercedes S-Class was the perfect choice for my business trip. The service from LuxRide was exceptional from start to finish.",
        rating: 5
      }
    ];

    // Localized roles based on language
    if (language === 'bg') {
      testimonials[0].role = "Бизнесмен";
      testimonials[1].role = "Младоженци";
      testimonials[2].role = "Бизнес Пътуващ";
      testimonials[3].role = "Турист";
      testimonials[4].role = "Семейна Почивка";
      testimonials[5].role = "Бизнес Директор";
    } else if (language === 'ru') {
      testimonials[0].role = "Бизнесмен";
      testimonials[1].role = "Молодожены";
      testimonials[2].role = "Деловой Путешественник";
      testimonials[3].role = "Турист";
      testimonials[4].role = "Семейный Отдых";
      testimonials[5].role = "Бизнес Директор";
    } else if (language === 'es') {
      testimonials[0].role = "Ejecutivo";
      testimonials[1].role = "Recién Casados";
      testimonials[2].role = "Viajera de Negocios";
      testimonials[3].role = "Turista";
      testimonials[4].role = "Vacaciones Familiares";
      testimonials[5].role = "Ejecutivo de Negocios";
    } else if (language === 'de') {
      testimonials[0].role = "Führungskraft";
      testimonials[1].role = "Frischvermählte";
      testimonials[2].role = "Geschäftsreisende";
      testimonials[3].role = "Tourist";
      testimonials[4].role = "Familienurlaub";
      testimonials[5].role = "Geschäftsführer";
    }

    return testimonials;
  };

  const testimonials = getTestimonials();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-navy mb-4">
          {t('testimonials.title')}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {t('testimonials.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
