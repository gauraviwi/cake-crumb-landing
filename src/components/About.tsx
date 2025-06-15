
import { Heart, Clock, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cake is handcrafted with care and passion for perfection"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All cakes are baked fresh to order, ensuring maximum taste"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Using only the finest ingredients for exceptional flavor"
    },
    {
      icon: Users,
      title: "Family Recipe",
      description: "Traditional recipes passed down through generations"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Content */}
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=600"
                alt="Cozy ARA Bakes kitchen"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-card"
              />
              
              {/* Overlay Card */}
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-rose-100 max-w-xs">
                <div className="text-center">
                  <Heart className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-800 mb-1">100% Homemade</div>
                  <div className="text-gray-600 font-medium">Fresh & Delicious</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-200/40 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200/40 rounded-full blur-xl"></div>
          </div>

          {/* Text Content */}
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
              <Heart className="h-4 w-4 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">About Us</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Homemade, Fresh, and 
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"> Full of Flavor</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ARA Bakes specializes in delicious 1kg cakes that are perfect for any occasion. 
              Each cake is lovingly prepared in our home kitchen using traditional recipes 
              and the finest ingredients.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready for pickup and made fresh to order, our cakes bring families together 
              and create sweet memories that last a lifetime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl">
                    <feature.icon className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
