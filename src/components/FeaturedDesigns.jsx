import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle, Clock, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider } from './DecorativePatterns';

export const FeaturedDesigns = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="featured" className="relative py-20 sm:py-28 bg-cream-ivory overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-10">
        <GoldMandalaMotif className="w-64 h-64 text-gold" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-mehndi-forest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                CURATED MASTERPIECES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mehndi-forest font-semibold mb-3">
              Signature Featured Designs
            </h2>

            <p className="font-sans text-charcoal-light text-sm sm:text-base">
              Time-honored royal motifs and haute couture compositions most beloved by our brides.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-3 rounded-full bg-cream hover:bg-gold/20 text-mehndi-forest hover:text-gold-deep border border-gold/40 shadow-sm transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-3 rounded-full bg-cream hover:bg-gold/20 text-mehndi-forest hover:text-gold-deep border border-gold/40 shadow-sm transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {siteConfig.featuredDesigns.map((design) => (
            <div
              key={design.id}
              className="flex-shrink-0 w-80 sm:w-96 snap-center group relative bg-cream rounded-2xl overflow-hidden gold-card-border shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Card Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-mehndi-darkest/90 via-transparent to-black/30" />

                {/* Category & Style Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="bg-cream/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-mehndi-forest uppercase tracking-wider border border-gold/40">
                    {design.category}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <span className="bg-mehndi-forest/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-gold-light tracking-wide border border-gold/30">
                    {design.style}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl text-cream font-medium leading-tight group-hover:text-gold-light transition-colors">
                    {design.title}
                  </h3>
                </div>
              </div>

              {/* Card Bottom Meta & WhatsApp Inquire */}
              <div className="p-5 flex items-center justify-between border-t border-gold/15 bg-cream">
                <div className="flex items-center gap-1.5 text-xs text-charcoal-muted">
                  <Clock className="w-3.5 h-3.5 text-gold-deep" />
                  <span>{design.duration}</span>
                </div>

                <a
                  href={siteConfig.getWhatsappUrl(`Hi Jaitrika! I would like to book the "${design.title}" (${design.category}) design for my event.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-mehndi-forest hover:bg-mehndi-deep text-cream text-[11px] uppercase tracking-wider font-semibold border border-gold/30 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Book Style</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
