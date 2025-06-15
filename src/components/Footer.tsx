
import { Cake, MessageCircle, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = 2025;

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Gallery', href: '#' },
      { name: 'Reviews', href: '#' }
    ],
    services: [
      { name: 'Custom Cakes', href: '#services' },
      { name: 'Contact Us for Custom Cakes', href: '#contact' },
      { name: 'Birthday Cakes', href: '#services' },
      { name: 'Special Occasions', href: '#services' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Pickup Information', href: '#' },
      { name: 'Care Instructions', href: '#' }
    ]
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/947757155821', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 border-t border-rose-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Cake className="h-8 w-8 text-rose-500" />
              <span className="font-playfair text-2xl font-bold text-gray-800">ARA Bakes</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creating delicious memories since 2025. Every cake tells a story, 
              and we're here to help you tell yours with sweetness and love.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-soft"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <a 
                href="#" 
                className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-105 shadow-soft"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-soft"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-rose-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} ARA Bakes. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-600 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
