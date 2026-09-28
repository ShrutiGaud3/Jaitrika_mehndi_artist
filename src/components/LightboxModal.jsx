import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      
      {/* Top Bar Controls */}
      <div 
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-50 pointer-events-none"
      >
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold/40 text-xs text-cream pointer-events-auto shadow-lg">
          <span className="text-gold font-serif font-bold text-sm">
            {currentIndex + 1}
          </span>
          <span className="text-cream/50">/</span>
          <span className="text-cream/80">{items.length}</span>
          <span className="mx-1 text-gold/50">•</span>
          <span className="text-gold-light uppercase tracking-wider text-[11px] font-medium">
            {currentItem.title}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="pointer-events-auto p-2.5 rounded-full bg-black/60 hover:bg-gold/30 text-cream hover:text-gold border border-gold/40 backdrop-blur-md transition-all duration-200 shadow-lg cursor-pointer"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Main Image Container (Clean, No Details Sidebar) */}
      <div 
        className="relative max-w-4xl max-h-[88vh] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg border border-gold/30 shadow-2xl"
        />

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-mehndi-forest text-cream hover:text-gold border border-gold/40 backdrop-blur-md transition-all shadow-xl cursor-pointer hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-mehndi-forest text-cream hover:text-gold border border-gold/40 backdrop-blur-md transition-all shadow-xl cursor-pointer hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
};
