import React from 'react';
import { Sparkles, Heart, CheckCircle2, MessageCircle, Eye } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider, HennaWatermarkBg, RoyalArchFrame } from './DecorativePatterns';

export const About = () => {
  return (
    <section id="about" className="relative py-12 sm:py-28 bg-cream overflow-hidden">
      <HennaWatermarkBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artistic Bridal Frame & Experience Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Royal Arch Framed Image */}
              <RoyalArchFrame className="shadow-2xl">
                <img
                  src="/upload/about.jpg"
                  alt="Jaitrika Mehndi Artist at Work"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </RoyalArchFrame>

              {/* Floating Gold Experience Seal */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-gradient-to-br from-mehndi-forest to-mehndi-darkest text-cream p-5 rounded-2xl border-2 border-gold shadow-luxury flex items-center gap-3.5 max-w-[220px]">
                <div className="p-2.5 rounded-full bg-gold/20 border border-gold/40 text-gold">
                  <GoldMandalaMotif className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <span className="block font-serif text-2xl font-bold text-gold">{siteConfig.brand.experienceYears} Years</span>
                  <span className="text-[11px] text-cream/90 uppercase tracking-wider leading-tight block">
                    Royal Bridal Excellence
                  </span>
                </div>
              </div>

              {/* Top Accent Floating Tag */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-cream-ivory px-4 py-2 rounded-full border border-gold/40 shadow-md flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
                <span className="text-xs font-serif font-semibold text-mehndi-forest tracking-wider uppercase">
                  100% Organic Sojat Henna
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-mehndi-forest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                THE ART OF MEHNDI
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mehndi-forest font-semibold leading-[1.2] mb-4">
              Tradition Crafted Into <br />
              <span className="italic font-normal text-henna-terracotta">Timeless Art</span>
            </h2>

            {/* Decorative Gold Divider */}
            <div className="my-2">
              <HennaLeafDivider />
            </div>

            {/* Original Polished Marketing Story */}
            <p className="font-sans text-charcoal/85 text-base sm:text-lg leading-relaxed mt-4 mb-4">
              Welcome to <strong>{siteConfig.brand.name}</strong>, where ancient heritage meets haute couture bridal artistry. 
              Founded with a reverence for authentic Indian traditions and an obsession with delicate fine-line precision, we specialize in transforming auspicious wedding celebrations into unforgettable visual poetry.
            </p>

            <p className="font-sans text-charcoal-light text-sm sm:text-base leading-relaxed mb-6">
              Every bride is unique, and so is her canvas. Whether you envision grand <strong>Heritage Rajasthani jharokhas</strong>, intricate <strong>Dulha-Dulhan portraiture</strong> with custom wedding vows, romantic <strong>Arabic shaded florals</strong>, or graceful <strong>Minimal Indo-Western</strong> negative space trails — our bespoke master artistry captures your personality with mesmerizing detail and a guaranteed deep, rich mahogany stain.
            </p>

            {/* Specialties Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {[
                "Custom Bridal Storylines & Portraits",
                "Authentic Rajasthani & Marwari Jaal",
                "Flowy Modern Arabic & Floral Vines",
                "Triple-Filtered Chemical-Free Henna",
                "On-Location Luxury Bridal Service",
                "Pre-Wedding & Destination Events"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-mehndi-deep flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.getWhatsappUrl("Hi Jaitrika! I loved reading about your bridal artistry and would like to discuss my wedding mehndi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-mehndi-forest text-cream font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-mehndi-deep shadow-md hover:shadow-gold-subtle transition-all duration-300 border border-gold/40"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Chat With The Artist</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold/15 text-mehndi-forest font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gold/25 border border-gold/40 transition-all duration-300"
              >
                <span>Explore Services</span>
                <span className="text-gold-deep">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
