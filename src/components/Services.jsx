import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { HennaLeafDivider, HennaWatermarkBg } from './DecorativePatterns';

export const Services = () => {
  return (
    <section id="services" className="relative py-12 sm:py-28 bg-cream-ivory overflow-hidden">
      <HennaWatermarkBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-mehndi-forest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              OUR SERVICES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mehndi-forest font-semibold mb-4">
            Our Mehndi Services
          </h2>

          <HennaLeafDivider className="mb-4" />

          <p className="font-sans text-charcoal-light text-base sm:text-lg">
            Beautiful designs for every celebration and every special moment.
          </p>
        </div>

        {/* Reference-Styled Clean Service Cards Grid with Full-Height Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#7A3626] text-cream rounded-none sm:rounded-sm overflow-hidden p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-[#914331]/40"
            >
              {/* Subtle Card Henna Texture Watermark */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

              {/* Number with Underline */}
              <div className="relative z-10 flex flex-col items-center mb-5">
                <span className="font-sans font-bold text-3xl sm:text-4xl text-cream tracking-tight">
                  {service.number}
                </span>
                <span className="w-8 h-[2px] bg-cream/70 mt-1.5" />
              </div>

              {/* Full-View Portrait Image Container (Prevents Clipping) */}
              <div className="relative z-10 w-full h-[400px] sm:h-[460px] md:h-[480px] mb-5 overflow-hidden bg-black/25 shadow-inner flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Service Title */}
              <h3 className="relative z-10 font-sans font-bold text-xl sm:text-2xl text-cream mb-2 tracking-wide group-hover:text-gold-light transition-colors">
                {service.title}
              </h3>

              {/* Short Clean Description */}
              <p className="relative z-10 font-sans text-cream/90 text-xs sm:text-sm leading-relaxed max-w-xs mt-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
