import React, { useState } from 'react';
import { MessageCircle, Phone, Instagram, Heart, ArrowUp, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider } from './DecorativePatterns';

export const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-mehndi-darkest text-cream border-t border-gold/30 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
      
      {/* Background Decorative Gold Watermark */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-5">
        <GoldMandalaMotif className="w-96 h-96 text-gold" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Info (Always Visible at top) */}
        <div className="flex flex-col items-start mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/60 shadow-md bg-[#FDF8EE] flex-shrink-0">
              <img 
                src={siteConfig.brand.logo || "/upload/logo.jpg"} 
                alt={siteConfig.brand.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-serif tracking-[0.16em] text-base sm:text-lg font-bold uppercase text-cream block">
                JAITRIKA MEHNDI ARTIST
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-gold-light font-medium block">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </div>

          <p className="font-sans text-cream/75 text-xs sm:text-sm leading-relaxed mb-5 max-w-xl">
            Creating timeless mehndi art for beautiful celebrations. Exquisite bridal, Rajasthani, Arabic and customized designer henna services in Vijay Nagar, Indore.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-mehndi-forest border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 hover:text-cream transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneNumber}`}
              aria-label="Phone"
              className="w-9 h-9 rounded-full bg-mehndi-forest border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-mehndi-forest border border-gold/40 flex items-center justify-center text-cream hover:bg-gold/20 hover:text-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Desktop View: 3 Columns Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 lg:gap-12 mb-12 pt-6 border-t border-gold/20">
          
          {/* Col 1: Quick Navigation */}
          <div>
            <h4 className="font-serif text-lg text-gold font-medium mb-4 tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream/80">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold-light transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-gold text-[10px]">✦</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Signature Services */}
          <div>
            <h4 className="font-serif text-lg text-gold font-medium mb-4 tracking-wider uppercase">
              Mehndi Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream/80">
              {siteConfig.services.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-gold-light transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-gold text-[10px]">✦</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Artist Contact */}
          <div>
            <h4 className="font-serif text-lg text-gold font-medium mb-4 tracking-wider uppercase">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-cream/80">
              <p className="leading-relaxed">
                <strong className="text-cream block">WhatsApp & Calling:</strong>
                <a href={`tel:${siteConfig.contact.phoneNumber}`} className="text-gold-light hover:underline font-mono">
                  {siteConfig.contact.displayWhatsapp}
                </a>
              </p>
              <p className="leading-relaxed">
                <strong className="text-cream block">Location & Service:</strong>
                <span>{siteConfig.contact.location}</span>
              </p>
              <p className="leading-relaxed">
                <strong className="text-cream block">Natural Quality:</strong>
                <span className="text-gold-light">100% Herbal Sojat Henna</span>
              </p>
            </div>
          </div>

        </div>

        {/* Mobile View: Collapsible Accordion Dropdowns */}
        <div className="md:hidden space-y-2.5 mb-8 border-t border-gold/20 pt-4">
          
          {/* Accordion 1: Quick Navigation */}
          <div className="border border-gold/30 rounded-xl overflow-hidden bg-mehndi-forest/40 backdrop-blur-sm">
            <button
              onClick={() => toggleSection('nav')}
              className="w-full flex items-center justify-between p-3.5 text-left text-xs uppercase tracking-widest font-serif font-semibold text-gold hover:bg-gold/10 transition-colors"
            >
              <span>Quick Navigation</span>
              <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${openSection === 'nav' ? 'rotate-180' : ''}`} />
            </button>
            
            {openSection === 'nav' && (
              <div className="px-4 pb-4 pt-1.5 border-t border-gold/15 bg-mehndi-darkest/70 animate-fadeIn">
                <ul className="space-y-2 text-xs text-cream/80">
                  {siteConfig.navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-gold-light transition-colors inline-flex items-center gap-1.5 py-0.5"
                      >
                        <span className="text-gold text-[10px]">✦</span>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Accordion 2: Mehndi Services */}
          <div className="border border-gold/30 rounded-xl overflow-hidden bg-mehndi-forest/40 backdrop-blur-sm">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between p-3.5 text-left text-xs uppercase tracking-widest font-serif font-semibold text-gold hover:bg-gold/10 transition-colors"
            >
              <span>Mehndi Services</span>
              <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            {openSection === 'services' && (
              <div className="px-4 pb-4 pt-1.5 border-t border-gold/15 bg-mehndi-darkest/70 animate-fadeIn">
                <ul className="space-y-2 text-xs text-cream/80">
                  {siteConfig.services.map((srv) => (
                    <li key={srv.id}>
                      <a
                        href="#services"
                        className="hover:text-gold-light transition-colors inline-flex items-center gap-1.5 py-0.5"
                      >
                        <span className="text-gold text-[10px]">✦</span>
                        <span>{srv.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Accordion 3: Direct Contact */}
          <div className="border border-gold/30 rounded-xl overflow-hidden bg-mehndi-forest/40 backdrop-blur-sm">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between p-3.5 text-left text-xs uppercase tracking-widest font-serif font-semibold text-gold hover:bg-gold/10 transition-colors"
            >
              <span>Direct Contact</span>
              <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${openSection === 'contact' ? 'rotate-180' : ''}`} />
            </button>
            
            {openSection === 'contact' && (
              <div className="px-4 pb-4 pt-2 border-t border-gold/15 bg-mehndi-darkest/70 animate-fadeIn space-y-2.5 text-xs text-cream/80">
                <p className="leading-relaxed">
                  <strong className="text-cream block font-medium">WhatsApp & Calling:</strong>
                  <a href={`tel:${siteConfig.contact.phoneNumber}`} className="text-gold-light hover:underline font-mono">
                    {siteConfig.contact.displayWhatsapp}
                  </a>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-cream block font-medium">Location & Service:</strong>
                  <span>{siteConfig.contact.location}</span>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-cream block font-medium">Natural Quality:</strong>
                  <span className="text-gold-light">100% Herbal Sojat Henna</span>
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Decorative Divider */}
        <HennaLeafDivider className="my-6 sm:my-8 text-gold" />

        {/* Bottom Bar: Copyright and Scroll to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/70 text-center sm:text-left">
          
          <p className="order-2 sm:order-1 text-[11px] sm:text-xs leading-relaxed max-w-sm sm:max-w-none">
            © {new Date().getFullYear()} {siteConfig.brand.name}. All Rights Reserved. Handcrafted for Royal Celebrations.
          </p>

          <div className="order-1 sm:order-2 flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-cream/80 text-left sm:text-right">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 flex-shrink-0" /> for Brides in Indore
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-full bg-mehndi-forest hover:bg-gold/20 text-gold border border-gold/40 transition-transform active:scale-95 flex-shrink-0 shadow-md"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
