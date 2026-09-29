import React from 'react';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider } from './DecorativePatterns';

export const CTA = () => {
  return (
    <section className="relative py-14 sm:py-32 bg-mehndi-darkest text-cream overflow-hidden">
      
      {/* Background Image with Dark Green Multi-layered Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/upload/cta-bg.jpg"
          alt="Bridal Henna Background"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mehndi-darkest via-mehndi-forest/90 to-mehndi-darkest" />
        <div className="absolute inset-0 bg-gradient-to-b from-mehndi-darkest/90 via-transparent to-mehndi-darkest" />
      </div>

      {/* Decorative Mandala Corner Ornaments */}
      <div className="absolute -top-12 -right-12 pointer-events-none opacity-20">
        <GoldMandalaMotif className="w-64 h-64 text-gold" />
      </div>
      <div className="absolute -bottom-12 -left-12 pointer-events-none opacity-20">
        <GoldMandalaMotif className="w-64 h-64 text-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-light mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold">
            WEDDINGS • DESTINATION EVENTS • FESTIVALS
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream font-medium leading-tight mb-4">
          Ready to Adorn Your <br />
          <span className="italic text-gold-light font-normal">Special Day?</span>
        </h2>

        {/* Divider */}
        <HennaLeafDivider className="mb-6 text-gold" />

        {/* Supporting Text */}
        <p className="font-sans text-cream/90 text-base sm:text-xl font-light max-w-2xl mb-10 leading-relaxed">
          Let's create a mehndi design that feels uniquely yours. Share your wedding dates, dream theme, and preferred venue for personalized service.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl">
          <a
            href={siteConfig.getWhatsappUrl("Hello Jaitrika! I would like to check availability and package pricing for my upcoming bridal/wedding mehndi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-maroon-deep via-maroon-rich to-maroon-ruby hover:from-maroon-rich hover:to-maroon-deep text-cream font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-lg hover:shadow-maroon-glow hover:scale-105 active:scale-95 transition-all duration-300 border border-gold/50"
          >
            <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" />
            <span className="whitespace-nowrap">Chat on WhatsApp</span>
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-cream backdrop-blur-md border border-gold/40 font-medium text-xs sm:text-sm uppercase tracking-widest hover:border-gold hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Eye className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="whitespace-nowrap">View Gallery</span>
          </a>
        </div>

      </div>
    </section>
  );
};
