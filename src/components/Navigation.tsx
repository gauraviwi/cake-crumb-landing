
import React from 'react';

const Navigation = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-md shadow-lg z-50 rounded-full px-16 py-3 flex items-center justify-between border border-white/40 border-opacity-30 transition-all"
      style={{ minWidth: 540, maxWidth: 820 }}
    >
      {/* Left: Home + About */}
      <div className="flex items-center space-x-12 flex-1 justify-start">
        <a href="#home" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">Home</a>
        <a href="#about" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">About</a>
      </div>

      {/* Logo Centered, clickable */}
      <a
        href="/"
        className="flex-shrink-0 flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
        style={{ zIndex: 10 }}
        aria-label="Home"
      >
        <img
          src="/lovable-uploads/ed188ebb-c58d-4bba-b27c-78a976fb11b3.png"
          alt="Business Logo"
          className="h-14 w-14 object-contain transition-transform group-hover:scale-105"
        />
      </a>

      {/* Right: Menu + Contact */}
      <div className="flex items-center space-x-12 flex-1 justify-end">
        <a href="#menu" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">Menu</a>
        <a href="#contact" className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;

