import React from 'react';
import { Star, Sparkles, Quote, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider, HennaWatermarkBg } from './DecorativePatterns';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-12 sm:py-28 bg-cream overflow-hidden">
      <HennaWatermarkBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-mehndi-forest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              LOVE LETTERS & BLESSINGS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mehndi-forest font-semibold mb-4">
            Words From Our Royal Brides
          </h2>

          <HennaLeafDivider className="mb-4" />

          <p className="font-sans text-charcoal-light text-base sm:text-lg">
            Honored to be a part of cherished bridal beginnings and lifelong memories.
          </p>
        </div>

        {/* 3 Luxury Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-cream-ivory rounded-2xl p-8 gold-card-border shadow-luxury flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Floating Quote Stamp */}
              <div className="absolute top-6 right-6 text-gold/30">
                <Quote className="w-10 h-10 rotate-180" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-charcoal text-base sm:text-lg leading-relaxed mb-8">
                  "{item.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 border-t border-gold/20 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-mehndi-forest">
                    {item.name}
                  </h3>
                  <span className="text-xs text-charcoal-muted tracking-wide">
                    {item.event}
                  </span>
                </div>

                <div className="p-2 rounded-full bg-gold/10 border border-gold/30 text-gold-deep">
                  <Heart className="w-4 h-4 fill-gold/20 text-gold-deep" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
