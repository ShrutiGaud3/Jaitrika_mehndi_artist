import React from 'react';
import { Award, Sparkles, HeartHandshake, Leaf, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider } from './DecorativePatterns';

const iconMap = {
  Award: Award,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Leaf: Leaf,
  Clock: Clock,
  ShieldCheck: ShieldCheck,
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-12 sm:py-28 bg-mehndi-forest text-cream overflow-hidden">
      
      {/* Background Decorative Gold Watermarks */}
      <div className="absolute -top-16 -left-16 pointer-events-none opacity-10">
        <GoldMandalaMotif className="w-80 h-80 text-gold" />
      </div>
      <div className="absolute -bottom-16 -right-16 pointer-events-none opacity-10">
        <GoldMandalaMotif className="w-80 h-80 text-gold" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-light mb-3">
            <Award className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              THE JAITRIKA DISTINCTION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream font-semibold mb-4">
            Why Choose Our Mehndi Artistry?
          </h2>

          <HennaLeafDivider className="mb-4 text-gold" />

          <p className="font-sans text-cream/80 text-base sm:text-lg">
            Uncompromising dedication to regal aesthetics, purity, comfort, and dark staining perfection.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group relative bg-mehndi-darkest/60 backdrop-blur-md rounded-2xl p-7 border border-gold/25 hover:border-gold/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold-glow flex flex-col justify-between"
              >
                {/* Subtle Card Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none group-hover:bg-gold/10 transition-colors" />

                <div>
                  {/* Elegant Line Icon in Gold Roundel */}
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                    <IconComponent className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-cream font-medium mb-3 group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-cream/75 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Gold Accent Notch */}
                <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest uppercase text-gold/80 font-medium">
                    Pillar 0{index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Natural Henna Guarantee Banner */}
        <div className="mt-16 bg-mehndi-darkest/80 rounded-2xl p-6 sm:p-8 border border-gold/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-cream font-semibold">
                Pure Sojat Organic Cone Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-cream/70 mt-0.5">
                Zero chemicals, zero PPD, zero synthetic dyes. Safe for sensitive bridal skin and expectant mothers.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.getWhatsappUrl("Hi Jaitrika! I would like to know more about your 100% natural henna cones and bridal bookings.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-gold hover:bg-gold-rich text-mehndi-darkest font-semibold text-xs uppercase tracking-wider shadow-gold-subtle hover:scale-105 transition-all duration-300"
          >
            Inquire on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
