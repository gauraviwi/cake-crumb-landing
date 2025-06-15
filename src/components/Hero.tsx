
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/947757155821', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-rose-200/30 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-200/30 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-rose-300/20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Small cake icons */}
        <Heart className="absolute top-32 right-32 h-8 w-8 text-rose-300 animate-float" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-32 left-32 h-6 w-6 text-pink-300 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
              <Heart className="h-4 w-4 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">Made with Love</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 mb-6 text-shadow-soft leading-tight">
              ARA Bakes
              <br />
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Homemade Cakes
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Homemade, fresh, and full of flavor. Every cake is baked with love and made to order.
            </p>

            {/* WhatsApp CTA Button */}
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-card flex items-center gap-3 mx-auto lg:mx-0"
            >
              <MessageCircle className="h-6 w-6" />
              Order via WhatsApp
            </Button>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-500 mb-1">1kg</div>
                <div className="text-gray-600 text-sm">Perfect Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-500 mb-1">Fresh</div>
                <div className="text-gray-600 text-sm">Daily Baked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-500 mb-1">Pick-up</div>
                <div className="text-gray-600 text-sm">Ready to Go</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200/50 to-pink-200/50 rounded-3xl blur-xl"></div>
              <img
                src="/lovable-uploads/7fa80119-2339-4916-8129-52a2bb0763b7.png"
                alt="Beautiful homemade cake by ARA Bakes"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-card"
              />
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-rose-100 max-w-xs">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    13-18€
                  </div>
                  <div className="text-gray-600 font-medium">Starting Price</div>
                  <div className="text-sm text-gray-500 mt-1">1kg Premium Cakes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
