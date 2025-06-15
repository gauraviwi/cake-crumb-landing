
import { Button } from '@/components/ui/button';
import { CakeSlice } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-warm overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-golden blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-soft-pink blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-warm-brown blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <CakeSlice className="h-12 w-12 text-warm-brown" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-deep-brown mb-6 text-shadow leading-tight">
            Artisan Cakes
            <br />
            <span className="text-warm-brown">Made with Love</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            From custom wedding cakes to daily fresh pastries, we create sweet memories 
            that bring joy to every celebration
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-warm-brown hover:bg-deep-brown text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Our Cakes
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Custom Orders
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-brown mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-brown mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm-brown mb-2">50+</div>
              <div className="text-gray-600">Cake Varieties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
