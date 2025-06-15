
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Bakery",
      details: ["123 Sweet Street", "Bakery District, BD 12345"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-CAKE", "(555) 123-2253"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@sweetdreamsbakery.com", "orders@sweetdreamsbakery.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 7:00 AM - 8:00 PM", "Sunday: 8:00 AM - 6:00 PM"],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond 
            as soon as possible to help make your sweet dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-deep-brown mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      className="border-gray-300 focus:border-warm-brown"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      className="border-gray-300 focus:border-warm-brown"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-gray-300 focus:border-warm-brown"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="border-gray-300 focus:border-warm-brown"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your cake needs..." 
                    rows={5}
                    className="border-gray-300 focus:border-warm-brown resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-warm-brown hover:bg-deep-brown text-white py-3 rounded-full text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-white shadow-md ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-brown mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Coming Soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
