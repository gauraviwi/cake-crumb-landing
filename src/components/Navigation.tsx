
import React, { useState } from 'react';

// Smooth scroll handler
function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  if (hash && hash.startsWith('#')) {
    const targetId = hash.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', hash);
    }
  }
}

const NAV_LINKS = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Menu', target: '#menu' },
  { label: 'Contact', target: '#contact' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-2 sm:top-4 left-1/2 z-50 border border-white/40 border-opacity-30 bg-white/30 backdrop-blur-md shadow-sm rounded-full px-3 sm:px-6 md:px-8 lg:px-10 py-2 flex items-center justify-between transition-all w-[95%] sm:w-full max-w-[600px]"
      style={{ transform: 'translateX(-50%)' }}
    >
      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center flex-1 z-20">
        <button
          onClick={() => setOpen(v => !v)}
          className="focus:outline-none p-1 mr-1"
          aria-label="Open navigation"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="sm:w-7 sm:h-7">
            <rect x="4" y="7" width="16" height="2" rx="1" fill="#d1285a" />
            <rect x="4" y="15" width="16" height="2" rx="1" fill="#d1285a" />
          </svg>
        </button>
      </div>
      
      {/* Left links (desktop) */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-start">
        <a
          href="#home"
          className="font-gilroy font-medium text-gray-700 hover:text-rose-600 transition-colors text-sm lg:text-base"
          onClick={e => handleNavClick(e, '#home')}
        >
          Home
        </a>
        <a
          href="#about"
          className="font-gilroy font-medium text-gray-700 hover:text-rose-600 transition-colors text-sm lg:text-base"
          onClick={e => handleNavClick(e, '#about')}
        >
          About
        </a>
      </div>
      
      {/* Center logo */}
      <a
        href="/"
        className="flex-shrink-0 flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group z-10"
        aria-label="Home"
        style={{ maxWidth: 72 }}
      >
        <img
          src="/lovable-uploads/70ec725c-45a2-4059-ac28-33813fef7c69.png"
          alt="Business Logo"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 object-contain transition-transform group-hover:scale-105"
        />
      </a>
      
      {/* Right links (desktop) */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-end">
        <a
          href="#menu"
          className="font-gilroy font-medium text-gray-700 hover:text-rose-600 transition-colors text-sm lg:text-base"
          onClick={e => handleNavClick(e, '#menu')}
        >
          Menu
        </a>
        <a
          href="#contact"
          className="font-gilroy font-medium text-gray-700 hover:text-rose-600 transition-colors text-sm lg:text-base"
          onClick={e => handleNavClick(e, '#contact')}
        >
          Contact
        </a>
      </div>
      
      {/* Mobile links dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white/95 shadow-md rounded-b-2xl flex flex-col py-1 z-30 border-t border-rose-100 md:hidden animate-fade-in">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.target}
              className="block py-2 px-4 text-sm font-gilroy font-medium text-gray-700 hover:text-rose-600 transition-colors"
              onClick={e => {
                handleNavClick(e, link.target);
                setOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
