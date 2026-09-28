import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif } from './DecorativePatterns';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll
      const sections = siteConfig.navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-mehndi-darkest/95 backdrop-blur-md shadow-xl border-b border-gold/30 py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-mehndi-darkest/90 via-mehndi-darkest/50 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold/60 shadow-md group-hover:scale-105 transition-transform bg-[#FDF8EE] flex-shrink-0">
            <img 
              src={siteConfig.brand.logo || "/upload/logo.jpg"} 
              alt={siteConfig.brand.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.14em] text-sm sm:text-base md:text-lg font-bold uppercase text-cream transition-colors leading-tight">
              JAITRIKA MEHNDI ARTIST
            </span>
            <span className="text-[7.5px] sm:text-[9px] tracking-[0.18em] uppercase font-medium text-gold-light transition-colors mt-0.5">
              {siteConfig.brand.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {siteConfig.navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-xs xl:text-sm uppercase tracking-widest font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-gold-light font-bold bg-white/10 backdrop-blur-xs border border-gold/30 shadow-sm'
                    : 'text-cream/85 hover:text-gold-light hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gold rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 sm:p-2.5 rounded-lg border border-gold/50 text-gold bg-mehndi-forest/80 backdrop-blur-md shadow-md hover:bg-gold/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gold-light" /> : <Menu className="w-5 h-5 text-gold" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Solid, High-Contrast & Clear) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-mehndi-darkest/98 border-b-2 border-gold/40 shadow-2xl px-5 py-5 backdrop-blur-xl transition-all duration-300">
          <div className="flex flex-col space-y-1.5">
            {siteConfig.navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-xs sm:text-sm uppercase tracking-[0.16em] py-3.5 px-4 rounded-lg font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-gold/25 text-gold-light border border-gold/50 shadow-sm'
                      : 'text-[#FFF8EE] hover:bg-white/10 hover:text-gold border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-gold' : 'bg-gold/40'}`} />
                    {item.label}
                  </span>
                  <span className="text-gold text-xs">✦</span>
                </a>
              );
            })}

            {/* Quick WhatsApp Inquiry inside Mobile Menu */}
            <div className="pt-3 mt-2 border-t border-gold/20">
              <a
                href={siteConfig.getWhatsappUrl("Hello Jaitrika! I would like to inquire about booking mehndi services.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gold hover:bg-gold-light text-[#1A0C08] font-bold text-xs uppercase tracking-widest shadow-lg transition-all"
              >
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
