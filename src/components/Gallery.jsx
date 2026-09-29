import React, { useState } from 'react';
import { Sparkles, ZoomIn, Eye, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { HennaLeafDivider, HennaWatermarkBg } from './DecorativePatterns';
import { LightboxModal } from './LightboxModal';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter gallery items based on active category
  const filteredItems = selectedCategory === 'all'
    ? siteConfig.galleryItems
    : siteConfig.galleryItems.filter(item => item.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const openLightbox = (item) => {
    const indexInFiltered = filteredItems.findIndex(i => i.id === item.id);
    setCurrentImageIndex(indexInFiltered >= 0 ? indexInFiltered : 0);
    setLightboxOpen(true);
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setVisibleCount(12); // reset pagination when switching filter
  };

  const getDisplayTitle = (item) => {
    switch (item.category) {
      case 'feet':
        return 'Leg-Mehandi';
      case 'bridal':
        return 'Bridal Mehandi';
      case 'heavy':
      case 'fullhand':
        return 'Heavy Mehandi';
      case 'rajasthani':
        return 'Rajasthani Mehandi';
      case 'arabic':
        return 'Arabic Mehandi';
      case 'minimal':
        return 'Minimal Mehandi';
      case 'baby_shower':
        return 'Baby Shower Mehandi';
      default:
        return item.title || item.categoryLabel || 'Bridal Mehandi';
    }
  };

  return (
    <section id="gallery" className="relative py-12 sm:py-28 bg-cream overflow-hidden">
      <HennaWatermarkBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-mehndi-forest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              REAL CLIENT PORTFOLIO ({siteConfig.galleryItems.length} DESIGNS)
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mehndi-forest font-semibold mb-4">
            Our Mehndi Collection
          </h2>

          <HennaLeafDivider className="mb-4" />

          <p className="font-sans text-charcoal-light text-base sm:text-lg">
            Explore authentic creations crafted for our royal brides, pre-wedding festivities, and celebratory occasions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {siteConfig.galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'bg-mehndi-forest text-cream border-gold shadow-md scale-105'
                    : 'bg-cream-ivory text-charcoal-light border-gold/25 hover:border-gold/60 hover:text-mehndi-forest hover:bg-gold/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Clean Portfolio Card Grid (Matches Reference Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleItems.map((item) => {
            const displayTitle = getDisplayTitle(item);
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative bg-cream-ivory rounded-lg overflow-hidden cursor-pointer border-2 border-mehndi-forest/25 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* Clean Image Area */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/5">
                  <img
                    src={item.image}
                    alt={displayTitle}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Zoom Icon on Hover */}
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-cream/90 text-mehndi-forest opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ZoomIn className="w-3.5 h-3.5 text-gold-deep" />
                  </div>
                </div>

                {/* Clean Title Panel Below Image */}
                <div className="py-3 px-2 text-center bg-cream-ivory border-t border-mehndi-forest/15 group-hover:bg-gold/10 transition-colors">
                  <h3 className="font-sans font-bold text-xs sm:text-sm md:text-base text-mehndi-forest tracking-wide">
                    {displayTitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Pagination */}
        {visibleCount < filteredItems.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-mehndi-forest hover:bg-mehndi-deep text-cream text-xs sm:text-sm uppercase tracking-widest font-semibold border border-gold/40 shadow-lg hover:shadow-gold-subtle transition-all duration-300"
            >
              <span>Load More Designs ({filteredItems.length - visibleCount} more)</span>
              <span className="text-gold">↓</span>
            </button>
          </div>
        )}

        {/* Gallery WhatsApp Custom Design CTA */}
        <div className="mt-16 text-center">
          <p className="font-serif italic text-lg sm:text-xl text-mehndi-forest mb-4">
            Have a custom dream design in mind?
          </p>
          <a
            href={siteConfig.getWhatsappUrl("Hello Jaitrika! I have reference images of my dream mehndi design and would like to ask if you can create a customized version for my wedding.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-mehndi-forest hover:bg-mehndi-deep text-cream text-xs sm:text-sm uppercase tracking-widest font-medium border border-gold/40 shadow-lg hover:shadow-gold-glow transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            <span>Send Custom Design on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentImageIndex}
        onNavigate={(newIdx) => setCurrentImageIndex(newIdx)}
      />
    </section>
  );
};
