
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, Clock, Heart } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/94775715582', '_blank');
  };

  return (
    <section id="contact" className="py-20 gradient-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
            <Heart className="h-4 w-4 text-rose-500" />
            <span className="text-sm font-medium text-gray-700">Contact Us</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Order Your 
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"> Sweet Treat</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us via WhatsApp to place your order. All cakes are available for pickup only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-green-500" />
                WhatsApp Order
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-green-50 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      WhatsApp Number
                    </h4>
                    <p className="text-gray-600 mb-2 break-all">+94775715582</p>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-4 py-2 text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message Now
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl">
                    <MapPin className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Pickup Only
                    </h4>
                    <p className="text-gray-600">
                      All orders are available for pickup only. Location details will be provided when you place your order.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl">
                    <Clock className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Order Timing
                    </h4>
                    <p className="text-gray-600">
                      Please order at least 24 hours in advance to ensure freshness and availability.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Information */}
          <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="h-6 w-6 text-rose-500" />
                Order Details
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Available Cakes</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex justify-between">
                      <span>Butter Cake</span>
                      <span className="font-semibold">13 €</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Chocolate Cake</span>
                      <span className="font-semibold">14 €</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ribon Cake</span>
                      <span className="font-semibold">15 €</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Date Cake</span>
                      <span className="font-semibold">18 €</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-2">What to Include in Your Order</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Type of cake you want</li>
                    <li>• Pickup date and time</li>
                    <li>• Any special requests</li>
                    <li>• Your contact information</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6 py-3 w-full flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    Start Your Order
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
