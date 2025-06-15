
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Heart, Star } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/947757155821', '_blank');
  };

  const floatingParticles = [
    { id: 1, icon: <Star size={20} className="text-yellow-400" />, style: "top-24 left-16 animate-float", delay: "0s" },
    { id: 2, icon: <Heart size={20} className="text-rose-400" />, style: "bottom-28 right-24 animate-float", delay: "0.5s" },
    { id: 3, icon: <Star size={14} className="text-pink-400" />, style: "top-1/2 left-32 animate-float", delay: "1s" },
    { id: 4, icon: <Heart size={16} className="text-pink-500" />, style: "top-1/3 right-20 animate-float", delay: "1.5s" },
    { id: 5, icon: <Star size={18} className="text-yellow-300" />, style: "bottom-32 left-1/4 animate-float", delay: "2s" },
    { id: 6, icon: <Heart size={15} className="text-rose-300" />, style: "top-44 right-1/4 animate-float", delay: "2.5s" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated stars & hearts */}
        {floatingParticles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute ${particle.style}`}
            style={{ animationDelay: particle.delay }}
          >
            {particle.icon}
          </div>
        ))}

        {/* Decorative pink/rose circles - keep for smoothness & consistency */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-rose-200/40 to-pink-300/30 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-gradient-to-br from-pink-200/40 to-rose-300/30 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-rose-300/30 to-pink-200/40 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Brand Name - ARA BAKES */}
            <div className="mb-3">
              <span className="inline-block text-rose-600 font-playfair text-3xl md:text-4xl tracking-wide font-bold uppercase drop-shadow-md transition-all duration-500">
                ARA BAKES
              </span>
            </div>
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
              Fresh, delicious cakes baked daily using premium ingredients for your special moments.
            </p>

            {/* WhatsApp CTA Button */}
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-elegant flex items-center gap-4 mx-auto lg:mx-0"
            >
              <MessageCircle className="h-7 w-7" />
              Order via WhatsApp
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Background decorative circles */}
              <div className="absolute -inset-8 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-3xl blur-xl"></div>
              
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=500"
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
