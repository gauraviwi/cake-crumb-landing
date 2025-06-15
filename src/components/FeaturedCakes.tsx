
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart } from 'lucide-react';

const FeaturedCakes = () => {
  const cakes = [
    {
      id: 1,
      name: "Butter Cake",
      description: "Classic butter cake with rich, moist texture and vanilla flavor",
      price: "13 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: true
    },
    {
      id: 2,
      name: "Chocolate Cake",
      description: "Decadent chocolate cake with deep cocoa flavor and smooth texture",
      price: "14 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: false
    },
    {
      id: 3,
      name: "Ribon Cake",
      description: "Elegant layered cake with delicate ribbon design and premium taste",
      price: "15 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: false
    },
    {
      id: 4,
      name: "Date Cake",
      description: "Traditional date cake with natural sweetness and rich flavor",
      price: "18 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: true
    }
  ];

  const handleWhatsAppOrder = (cakeName: string) => {
    const message = `Hi! I'd like to order a ${cakeName} from ARA Bakes.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/947757155821?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-4 py-2 mb-6 shadow-soft">
            <Heart className="h-4 w-4 text-rose-500" />
            <span className="text-sm font-medium text-gray-700">Our Menu</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Delicious 
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"> Homemade Cakes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All cakes are 1kg, freshly baked to order, and ready for pickup
          </p>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cakes.map((cake, index) => (
            <Card 
              key={cake.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                {cake.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-soft">
                    <Heart className="h-3 w-3" />
                    Popular
                  </div>
                )}
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                  {cake.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {cake.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                    {cake.price}
                  </span>
                  <span className="text-sm text-gray-500">1kg</span>
                </div>
                
                <Button 
                  onClick={() => handleWhatsAppOrder(cake.name)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full flex items-center gap-2 transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 gradient-soft rounded-3xl shadow-soft">
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
            Ready to Order Your Perfect Cake?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us via WhatsApp for fresh, homemade cakes ready for pickup
          </p>
          <Button 
            onClick={() => handleWhatsAppOrder('a custom cake')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-3 flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp: +947757155821
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
