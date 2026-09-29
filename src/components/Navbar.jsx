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
    <>
      {/* Mobile Menu Full Backdrop (closes on click outside) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#220609] shadow-2xl border-b border-gold/40 py-3 sm:py-3.5'
            : 'bg-gradient-to-b from-[#220609] via-[#220609]/80 to-transparent py-3.5 sm:py-5'
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
              className="p-2 sm:p-2.5 rounded-lg border border-gold/60 text-gold bg-[#3D0D14] shadow-lg hover:bg-gold/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold-light" /> : <Menu className="w-5 h-5 text-gold" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (Solid, High-Contrast & 100% Opaque) */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#220609] border-b-2 border-gold/50 shadow-2xl px-5 py-5 z-50 transition-all duration-300">
            <div className="flex flex-col space-y-2">
              {siteConfig.navLinks.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-xs sm:text-sm uppercase tracking-[0.16em] py-3.5 px-4 rounded-xl font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-gold/25 text-gold-light border border-gold/60 shadow-md'
                        : 'text-cream hover:bg-gold/15 hover:text-gold border border-gold/15'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-gold' : 'bg-gold/40'}`} />
                      <span>{item.label}</span>
                    </span>
                    <span className="text-gold text-xs">✦</span>
                  </a>
                );
              })}

              {/* Quick WhatsApp Inquiry inside Mobile Menu */}
              <div className="pt-3 mt-2 border-t border-gold/30">
                <a
                  href={siteConfig.getWhatsappUrl("Hello Jaitrika! I would like to inquire about booking mehndi services in Indore.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gradient-to-r from-gold via-gold-rich to-gold-deep text-mehndi-darkest font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-gold-glow transition-all"
                >
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
