
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-md shadow-lg z-50 rounded-full px-10 py-3 flex items-center space-x-10 border border-white/40 border-opacity-30 transition-all" style={{ minWidth: 340, maxWidth: 560 }}>
      {/* Logo Centered + clickable */}
      <a href="/" className="flex items-center gap-3 group">
        <img
          src="/lovable-uploads/ed188ebb-c58d-4bba-b27c-78a976fb11b3.png"
          alt="Business Logo"
          className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
        />
        <span className="text-xl font-gilroy font-black text-rose-600 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500 hidden sm:inline">
          Cakes
        </span>
      </a>

      {/* Center navigations */}
      <div className="flex-1 flex justify-center items-center space-x-8">
        <a href="#home" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">Home</a>
        <a href="#about" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">About</a>
        <a href="#menu" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">Menu</a>
        <a href="#contact" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
