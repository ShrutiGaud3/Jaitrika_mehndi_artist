import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { HennaLeafDivider, HennaWatermarkBg } from './DecorativePatterns';

export const VideoReels = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const reels = siteConfig.videoReels || [];
  const visibleReels = reels.slice(0, visibleCount);

  const getVideoTitle = (reel, index) => {
    const titles = [
      'Bridal Mehndi Live',
      'Intricate Bridal Work',
      'Stain Reveal Video',
      'Live Henna Artistry',
      'Royal Bride Mehndi',
      'Arabic Shading Reel',
      'Full Hand Detailing',
      'Leg Mehndi Artistry',
      'Traditional Heritage Henna',
      'Bridal Palms Detailing'
    ];
    return titles[index % titles.length] || `Bridal Mehndi Reel #${index + 1}`;
  };

  return (
    <section id="videos" className="relative py-12 sm:py-28 bg-cream overflow-hidden">
      <HennaWatermarkBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-mehndi-forest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              LIVE BRIDAL APPLICATION & STAIN REVEAL
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mehndi-forest font-semibold mb-4">
            Mehndi Video Reels
          </h2>

          <HennaLeafDivider className="mb-4" />

          <p className="font-sans text-charcoal-light text-base sm:text-lg">
            Watch real bridal moments, flawless live henna detailing, and deep dark mahogany stain results.
          </p>
        </div>

        {/* Clean Video Reels Grid (Matching Gallery Card Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleReels.map((reel, idx) => {
            const title = getVideoTitle(reel, idx);
            return (
              <div
                key={reel.id || idx}
                className="group relative bg-cream-ivory rounded-lg overflow-hidden border-2 border-mehndi-forest/25 hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* Clean Video Area */}
                <div className="relative aspect-[9/14] sm:aspect-[3/4] w-full overflow-hidden bg-black flex items-center justify-center">
                  <video
                    src={reel.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Clean Title Panel Below Video */}
                <div className="py-3 px-2 text-center bg-cream-ivory border-t border-mehndi-forest/15 group-hover:bg-gold/10 transition-colors">
                  <h3 className="font-sans font-bold text-xs sm:text-sm md:text-base text-mehndi-forest tracking-wide">
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Videos Button */}
        {visibleCount < reels.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 8, reels.length))}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-mehndi-forest hover:bg-mehndi-deep text-cream text-xs sm:text-sm uppercase tracking-widest font-semibold border border-gold/40 shadow-lg hover:shadow-gold-subtle transition-all duration-300"
            >
              <span>Load More Video Reels ({reels.length - visibleCount} more)</span>
              <span className="text-gold">↓</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
