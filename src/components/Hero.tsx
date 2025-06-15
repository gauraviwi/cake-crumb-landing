
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
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-rose-200/40 to-pink-300/30 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-pink-200/40 to-rose-300/30 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-rose-300/30 to-pink-200/40 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-6 h-6 bg-red-400 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-4 h-4 bg-pink-400 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="w-5 h-5 bg-rose-400 rounded-full shadow-lg"></div>
        </div>
        
        <div className="absolute top-24 left-1/3 w-8 h-4 bg-green-400/60 rounded-full transform rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-6 h-3 bg-green-300/60 rounded-full transform -rotate-12 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-elegant border border-rose-100">
              <Heart className="h-5 w-5 text-rose-500" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">HANDCRAFTED WITH LOVE</span>
            </div>

            {/* Brand Name */}
            <h2 className="font-playfair text-3xl md:text-4xl font-medium text-rose-600 mb-4">
              ARA Bakers
            </h2>

            {/* Main Heading */}
            <h1 className="font-gilroy text-5xl md:text-7xl font-black text-gray-800 mb-6 text-shadow-soft leading-tight">
              Homemade Cakes
              <br />
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
                Made with Love
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Fresh, delicious cakes baked daily using premium ingredients. 
              <span className="text-rose-600 font-medium">Ready for pickup only.</span>
            </p>

            {/* WhatsApp CTA Button */}
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-elegant flex items-center gap-4 mx-auto lg:mx-0 mb-12"
            >
              <MessageCircle className="h-7 w-7" />
              Order via WhatsApp
            </Button>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-soft animate-bounce-slow">
                  <div className="text-xl font-bold text-rose-600">Fresh</div>
                </div>
                <div className="text-gray-600 text-sm font-medium">Daily Baked</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-soft animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <Heart className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-gray-600 text-sm font-medium">Made Fresh</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-soft animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <Sparkles className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-gray-600 text-sm font-medium">Premium Quality</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Background decorative circles */}
              <div className="absolute -inset-8 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-3xl blur-xl"></div>
              
              <img
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&h=500"
                alt="Beautiful homemade cake by ARA Bakes"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-elegant border-4 border-white/50 animate-bounce-slow"
              />
              
              {/* Price overlay badge */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-elegant border border-rose-100 max-w-xs animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">
                    13-18€
                  </div>
                  <div className="text-gray-600 font-semibold mb-1">Starting Price</div>
                  <div className="text-sm text-gray-500">Premium Cakes</div>
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
