
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-navy mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.name')}</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.name')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.email')}</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.email')}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.phone')}</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.phone')}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.message')}</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.message')}
                  required
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary-gold hover:bg-yellow-600 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-primary-navy text-white p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-4 text-primary-gold mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('footer.phone').replace('Phone: ', '')}</h4>
                    <p className="text-gray-300">+359 882713027</p>
                    <p className="text-gray-300">+359 892799994</p>
                  </div>
                </div>
                
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 text-primary-gold mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{t('footer.contact')}</h4>
                    <p className="text-gray-300">{t('footer.address1')}<br />{t('footer.address2')}</p>
                    <p className="text-gray-300 mt-2">{t('footer.address3')}<br />{t('footer.address4')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold mb-4">{t('contact.businessHours')}</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>{t('contact.mondaySunday')}</div>
                  <div className="text-gray-300">{t('contact.hours')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
