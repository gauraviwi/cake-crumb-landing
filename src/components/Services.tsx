
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CakeSlice, Users, Truck, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CakeSlice,
      title: "Custom Cakes",
      description: "Personalized cakes for weddings, birthdays, and special occasions. Work with our designers to create your dream cake.",
      features: ["Wedding Cakes", "Birthday Cakes", "Corporate Events", "Custom Designs"],
      color: "bg-soft-pink"
    },
    {
      icon: Clock,
      title: "Daily Fresh Bakes",
      description: "Visit us daily for fresh pastries, cupcakes, and seasonal specialties baked with love every morning.",
      features: ["Fresh Pastries", "Seasonal Specials", "Cupcakes", "Artisan Breads"],
      color: "bg-cream"
    },
    {
      icon: Users,
      title: "Event Catering",
      description: "Complete dessert catering for your events. From intimate gatherings to large celebrations, we've got you covered.",
      features: ["Wedding Catering", "Corporate Events", "Party Platters", "Dessert Tables"],
      color: "bg-golden/20"
    },
    {
      icon: Truck,
      title: "Delivery Service",
      description: "Professional delivery service ensures your cakes arrive fresh and beautiful, right to your doorstep.",
      features: ["Same-Day Delivery", "Setup Service", "Temperature Control", "Safe Transport"],
      color: "bg-soft-pink"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From custom creations to daily delights, we offer comprehensive 
            services to satisfy every sweet craving
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 ${service.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-warm-brown" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl font-semibold text-deep-brown mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-golden rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white transition-colors"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 gradient-warm rounded-xl">
          <h3 className="font-playfair text-3xl font-bold text-deep-brown mb-4">
            Ready to Order?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your cake needs. Our team is ready to help 
            create something truly special for your next celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-warm-brown hover:bg-deep-brown text-white px-8 py-3 rounded-full"
            >
              Place Custom Order
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white px-8 py-3 rounded-full"
            >
              Call (555) 123-CAKE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
