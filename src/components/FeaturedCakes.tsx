
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Star } from 'lucide-react';

const FeaturedCakes = () => {
  const cakes = [
    {
      id: 1,
      name: "Butter Cake",
      description: "Classic butter cake with rich, moist texture and vanilla flavor. Perfect for any celebration.",
      price: "13 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: true,
      color: "from-yellow-100 to-amber-100"
    },
    {
      id: 2,
      name: "Chocolate Cake",
      description: "Decadent chocolate cake with deep cocoa flavor and smooth, rich texture.",
      price: "14 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: false,
      color: "from-amber-100 to-orange-100"
    },
    {
      id: 3,
      name: "Ribon Cake",
      description: "Elegant layered cake with delicate ribbon design and premium taste.",
      price: "15 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: false,
      color: "from-rose-100 to-pink-100"
    },
    {
      id: 4,
      name: "Date Cake",
      description: "Traditional date cake with natural sweetness and rich, authentic flavor.",
      price: "18 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: true,
      color: "from-orange-100 to-red-100"
    }
  ];

  const handleWhatsAppOrder = (cakeName: string) => {
    const message = `Hi! I'd like to order a ${cakeName} from ARA Bakes.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/947757155821?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-rose-200/20 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-200/20 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Small decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-red-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-pink-400/60 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 mb-8 shadow-soft border border-rose-200">
            <Heart className="h-5 w-5 text-rose-500" />
            <span className="text-sm font-bold text-gray-700 tracking-wide uppercase">Our Signature Menu</span>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Only the Most
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              Delicious Cakes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each 1kg cake is freshly baked to order and ready for pickup
          </p>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cakes.map((cake, index) => (
            <Card 
              key={cake.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                {cake.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-soft">
                    <Star className="h-3 w-3 fill-white" />
                    POPULAR
                  </div>
                )}
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cake.color} opacity-10 z-0`}></div>
                
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-3">
                  {cake.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cake.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="font-playfair text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                    {cake.price}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">1kg</span>
                </div>
                
                <Button 
                  onClick={() => handleWhatsAppOrder(cake.name)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-3 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-elegant rounded-3xl p-12 shadow-elegant border border-pink-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
              Ready to Taste Perfection?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contact us via WhatsApp for fresh, homemade cakes ready for pickup. 
              <br />Order at least 24 hours in advance.
            </p>
            <Button 
              onClick={() => handleWhatsAppOrder('a custom cake')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-10 py-4 text-lg font-bold flex items-center gap-4 mx-auto transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp: +947757155821
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
