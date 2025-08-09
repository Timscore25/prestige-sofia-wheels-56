import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cars } from '@/data/fleet-data';
import { transfers } from '@/data/transfer-data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from 'uuid';

const Booking = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicle: '',
    pickupLocation: 'airport',
    dropOffLocation: '',
    deliveryAddress: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isTransfer = searchParams.get('transferType') === 'transfer';

  // Pre-fill form with URL parameters
  useEffect(() => {
    const urlPickupDate = searchParams.get('pickupDate');
    const urlReturnDate = searchParams.get('returnDate');
    const urlVehicle = searchParams.get('vehicle');
    const urlTransferType = searchParams.get('transferType');

    if (urlPickupDate) {
      setPickupDate(new Date(urlPickupDate));
    }
    if (urlReturnDate) {
      setReturnDate(new Date(urlReturnDate));
    }
    if (urlVehicle) {
      setFormData(prev => ({ ...prev, vehicle: urlVehicle }));
    }
    if (urlTransferType === 'transfer') {
      setFormData(prev => ({ 
        ...prev, 
        specialRequests: 'Transfer service requested'
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    if (!formData.vehicle || !pickupDate) return 0;
    
    if (isTransfer) {
      const selectedTransfer = transfers.find(t => t.name === formData.vehicle);
      return selectedTransfer ? selectedTransfer.pricePerKm * 50 : 0; // Assuming average 50km trip
    } else {
      const selectedCar = cars.find(c => c.name === formData.vehicle);
      if (!selectedCar || !returnDate) return 0;
      
      const days = Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24));
      let total = selectedCar.pricePerDay * days;
      
      // Add delivery fee for car rentals
      if (formData.pickupLocation === 'hotel' || formData.pickupLocation === 'custom') {
        total += 20;
      }
      
      return total;
    }
  };

  // Helper function to extract UTM parameters
  const getUtmParams = () => {
    const utmParams: Record<string, string> = {};
    const urlParams = new URLSearchParams(window.location.search);
    
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith('utm_')) {
        utmParams[key] = value;
      }
    }
    
    return Object.keys(utmParams).length > 0 ? utmParams : undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pickupDate || (!isTransfer && !returnDate)) {
      toast({
        title: "Date selection required",
        description: isTransfer ? "Please select pickup date." : "Please select both pickup and return dates.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Calculate duration for rentals
      const durationDays = !isTransfer && returnDate 
        ? Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))
        : 1;
      
      // Prepare reservation data
      const reservationData = {
        pickupDate: pickupDate.toISOString(),
        returnDate: returnDate?.toISOString() || pickupDate.toISOString(),
        vehicle: formData.vehicle,
        pickupLocation: formData.pickupLocation,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        specialRequests: formData.specialRequests || '',
        ...(formData.deliveryAddress && { deliveryAddress: formData.deliveryAddress }),
        ...(formData.dropOffLocation && { dropOffLocation: formData.dropOffLocation }),
        summary: {
          vehicle: formData.vehicle,
          period: isTransfer 
            ? format(pickupDate, "PPP")
            : returnDate 
              ? `${format(pickupDate, "PPP")} - ${format(returnDate, "PPP")}`
              : format(pickupDate, "PPP"),
          durationDays,
          totalAmount: calculateTotal(),
          currency: 'EUR'
        },
        metadata: {
          reservationId: uuidv4(),
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          referrer: document.referrer || '',
          userAgent: navigator.userAgent,
          utmParams: getUtmParams()
        }
      };

      // Submit to Make.com webhook directly
      const response = await fetch('https://hook.eu2.make.com/8usev71f3ghg1hr1kjtledtpbnhwfe5r', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        toast({
          title: "✅ Reservation request sent",
          description: "We'll confirm your booking shortly.",
        });
        
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          vehicle: '',
          pickupLocation: 'airport',
          dropOffLocation: '',
          deliveryAddress: '',
          specialRequests: ''
        });
        setPickupDate(undefined);
        setReturnDate(undefined);
      } else {
        toast({
          title: "⚠️ Something went wrong",
          description: "Please try again or contact support.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Reservation submission error:', error);
      toast({
        title: "⚠️ Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-primary-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isTransfer ? 'Book Your Transfer' : 'Book Your Prestige Ride'}
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            {isTransfer ? 'Complete the form below to book your transfer service' : 'Complete the form below to reserve your luxury vehicle'}
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">
                  {isTransfer ? 'Transfer Details' : 'Rental Details'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isTransfer ? 'Service Date' : 'Pick-up Date'}
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          {pickupDate ? (
                            format(pickupDate, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={pickupDate}
                          onSelect={setPickupDate}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {!isTransfer && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            {returnDate ? (
                              format(returnDate, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                            disabled={(date) => date < new Date() || (pickupDate && date < pickupDate)}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Selection</label>
                    <select 
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                      required
                    >
                      <option value="">Select a vehicle</option>
                      {isTransfer 
                        ? transfers.map((transfer) => (
                            <option key={transfer.id} value={transfer.name}>
                              {transfer.name} - €{transfer.pricePerKm}/km
                            </option>
                          ))
                        : cars.map((car) => (
                            <option key={car.id} value={car.name}>
                              {car.name} - €{car.pricePerDay}/day
                            </option>
                          ))
                      }
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isTransfer ? 'Pick-up Location' : 'Pick-up Location'}
                    </label>
                    <select 
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                      required
                    >
                      {isTransfer ? (
                        <>
                          <option value="sofia-airport">Sofia Airport</option>
                          <option value="varna-airport">Varna Airport</option>
                          <option value="custom">Custom Location</option>
                        </>
                      ) : (
                        <>
                          <option value="airport">Sofia Airport</option>
                          <option value="office">LuxRide Office</option>
                          <option value="hotel">Hotel Delivery (+€20)</option>
                          <option value="custom">Custom Location (+€20)</option>
                        </>
                      )}
                    </select>
                  </div>

                  {((formData.pickupLocation === 'hotel' || formData.pickupLocation === 'custom') && !isTransfer) && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Address (Sofia or Varna only)
                      </label>
                      <Input
                        id="deliveryAddress"
                        name="deliveryAddress"
                        value={formData.deliveryAddress || ''}
                        onChange={handleChange}
                        placeholder="Enter address in Sofia or Varna"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Additional €20 delivery fee applies. Service available only in Sofia and Varna.
                      </p>
                    </div>
                  )}

                  {(formData.pickupLocation === 'custom' && isTransfer) && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Custom Pick-up Address
                      </label>
                      <Input
                        name="deliveryAddress"
                        value={formData.deliveryAddress || ''}
                        onChange={handleChange}
                        placeholder="Enter pick-up address"
                        required
                      />
                    </div>
                  )}

                  {isTransfer && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
                      <Input
                        id="dropOffLocation"
                        name="dropOffLocation"
                        value={formData.dropOffLocation}
                        onChange={handleChange}
                        placeholder="Enter your destination address"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {formData.vehicle && pickupDate && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-navy mb-4">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Vehicle:</span>
                      <span className="font-medium" data-summary-vehicle={formData.vehicle}>{formData.vehicle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isTransfer ? 'Service Date:' : 'Rental Period:'}</span>
                      <span 
                        className="font-medium" 
                        data-summary-period={
                          isTransfer 
                            ? format(pickupDate, "PPP")
                            : returnDate 
                              ? `${format(pickupDate, "PPP")} - ${format(returnDate, "PPP")}`
                              : format(pickupDate, "PPP")
                        }
                      >
                        {isTransfer 
                          ? format(pickupDate, "PPP")
                          : returnDate 
                            ? `${format(pickupDate, "PPP")} - ${format(returnDate, "PPP")}`
                            : format(pickupDate, "PPP")
                        }
                      </span>
                    </div>
                    {!isTransfer && returnDate && (
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span 
                          className="font-medium"
                          data-summary-duration-days={Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))}
                        >
                          {Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))} days
                        </span>
                      </div>
                    )}
                    {isTransfer && (
                      <div className="flex justify-between">
                        <span>Estimated Distance:</span>
                        <span className="font-medium">50 km (average)</span>
                      </div>
                    )}
                    <hr className="my-2" />
                    <div className="flex justify-between text-lg font-bold text-primary-navy">
                      <span>Total:</span>
                      <span data-summary-total-amount={calculateTotal()} data-summary-currency="EUR">€{calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <Button
                type="submit"
                className="bg-primary-gold hover:bg-yellow-600 text-white w-full py-6 text-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : (isTransfer ? 'Book Transfer Now' : 'Reserve Your Vehicle Now')}
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
