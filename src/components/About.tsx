
import { Cake, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Cake,
      title: "Artisan Quality",
      description: "Every cake is handcrafted with premium ingredients and traditional techniques"
    },
    {
      icon: Users,
      title: "Family Owned",
      description: "A family business with recipes passed down through generations"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in taste, design, and customer satisfaction"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All our cakes and pastries are baked fresh every single day"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
              Sweet Dreams Since 2008
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              What started as a small family bakery has grown into a beloved destination 
              for cake lovers throughout the city. Our passion for creating exceptional 
              cakes drives everything we do.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Using only the finest ingredients and time-honored techniques, we craft 
              each cake with meticulous attention to detail. From intimate celebrations 
              to grand events, we're here to make your special moments even sweeter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md">
                    <feature.icon className="h-6 w-6 text-warm-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-brown mb-1">
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

          {/* Image Content */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=600"
                alt="Our bakery kitchen"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
              />
              
              {/* Overlay Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl border-l-4 border-golden max-w-xs">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-brown mb-1">15+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                  <div className="text-sm text-gray-500 mt-1">Serving the community</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-pink rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-golden rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
