
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart } from 'lucide-react';

const FeaturedCakes = () => {
  const cakes = [
    {
      id: 1,
      name: "Classic Chocolate Delight",
      description: "Rich, moist chocolate cake with premium cocoa and silky ganache",
      price: "$45",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: true
    },
    {
      id: 2,
      name: "Vanilla Rose Garden",
      description: "Delicate vanilla sponge with rose buttercream and fresh petals",
      price: "$52",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: false
    },
    {
      id: 3,
      name: "Red Velvet Royale",
      description: "Traditional red velvet with cream cheese frosting perfection",
      price: "$48",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400",
      popular: true
    }
  ];

  return (
    <section id="cakes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Featured Creations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved cakes, crafted with the finest ingredients 
            and perfected through years of passionate baking
          </p>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <Card 
              key={cake.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                {cake.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-golden text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    Popular
                  </div>
                )}
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-playfair text-xl font-semibold text-deep-brown">
                    {cake.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-golden text-golden" />
                    <span className="text-sm font-medium text-gray-600">{cake.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cake.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-2xl font-bold text-warm-brown">
                    {cake.price}
                  </span>
                  <Button 
                    className="bg-warm-brown hover:bg-deep-brown text-white rounded-full px-6"
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white px-8 py-3 rounded-full"
          >
            View All Cakes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
