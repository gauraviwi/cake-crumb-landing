
import React from 'react';

const NAV_LINKS = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Menu', target: '#menu' },
  { label: 'Contact', target: '#contact' },
];

// Smooth scroll handler
function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  if (hash && hash.startsWith('#')) {
    const targetId = hash.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Optionally, update URL hash without jumping:
      window.history.replaceState(null, '', hash);
    }
  }
}

const Navigation = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-md shadow-lg z-50 rounded-full px-20 py-4 flex items-center justify-between border border-white/40 border-opacity-30 transition-all"
      style={{ minWidth: 660, maxWidth: 1040 }}
    >
      {/* Left: Home + About */}
      <div className="flex items-center space-x-16 flex-1 justify-start">
        <a
          href="#home"
          className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md"
          onClick={e => handleNavClick(e, '#home')}
        >
          Home
        </a>
        <a
          href="#about"
          className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md"
          onClick={e => handleNavClick(e, '#about')}
        >
          About
        </a>
      </div>

      {/* Logo Centered, clickable */}
      <a
        href="/"
        className="flex-shrink-0 flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
        style={{ zIndex: 10 }}
        aria-label="Home"
      >
        <img
          src="/lovable-uploads/70ec725c-45a2-4059-ac28-33813fef7c69.png"
          alt="Business Logo"
          className="h-16 w-16 object-contain transition-transform group-hover:scale-105"
        />
      </a>

      {/* Right: Menu + Contact */}
      <div className="flex items-center space-x-16 flex-1 justify-end">
        <a
          href="#menu"
          className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md"
          onClick={e => handleNavClick(e, '#menu')}
        >
          Menu
        </a>
        <a
          href="#contact"
          className="font-gilroy font-semibold text-gray-700 hover:text-rose-600 transition-colors text-md"
          onClick={e => handleNavClick(e, '#contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
