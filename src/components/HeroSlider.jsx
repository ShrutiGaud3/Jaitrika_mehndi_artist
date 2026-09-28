import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, Eye, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider } from './DecorativePatterns';

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteConfig.heroSlides;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-mehndi-darkest">
      {/* Background Slides with Ken Burns Animation & Crossfade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105 sm:scale-110' : 'scale-100'
              }`}
            />
            
            {/* Multi-layered Luxury Vignette & Dark Green Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-mehndi-darkest/95 via-mehndi-darkest/75 to-mehndi-darkest/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-mehndi-darkest via-transparent to-mehndi-darkest/80" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
          </div>
        );
      })}

      {/* Decorative Henna Watermark Ornaments */}
      <div className="absolute top-24 right-8 sm:right-20 z-20 pointer-events-none opacity-20 hidden md:block">
        <GoldMandalaMotif className="w-48 h-48 text-gold animate-float-gentle" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-40 text-center flex flex-col items-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md text-gold-light mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
          <span className="text-[11px] sm:text-xs tracking-[0.3em] font-semibold uppercase">
            {slides[currentSlide]?.eyebrow || "ARTISTRY • TRADITION • ELEGANCE"}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-medium tracking-wide leading-[1.15] max-w-4xl drop-shadow-lg mb-4">
          Beauty in Tradition, <br className="hidden sm:block" />
          <span className="font-serif italic font-normal text-gold-light relative inline-block">
            Art in Every Detail
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="font-sans text-cream/90 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 drop-shadow-md">
          {siteConfig.brand.subTagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl">
          <a
            href="#gallery"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-rich to-gold-deep text-mehndi-darkest font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-gold-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap flex-shrink-0"
          >
            <Eye className="w-4 h-4 text-mehndi-darkest" />
            <span>View Our Designs</span>
          </a>

          <a
            href={siteConfig.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-cream/10 hover:bg-cream/20 text-cream backdrop-blur-md border border-gold/50 font-medium text-xs sm:text-sm uppercase tracking-widest hover:border-gold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Micro Trust Stats Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gold/20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-gold font-bold">{siteConfig.brand.experienceYears}</span>
            <span className="text-[11px] sm:text-xs text-cream/80 uppercase tracking-wider">Years of Artistry</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-gold font-bold">{siteConfig.brand.bridesAdorned}</span>
            <span className="text-[11px] sm:text-xs text-cream/80 uppercase tracking-wider">Happy Brides</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-gold font-bold">100%</span>
            <span className="text-[11px] sm:text-xs text-cream/80 uppercase tracking-wider">Organic Henna</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-gold font-bold">Pan-India</span>
            <span className="text-[11px] sm:text-xs text-cream/80 uppercase tracking-wider">& Destination</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/30 hover:bg-gold/20 text-cream/80 hover:text-gold border border-gold/30 backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/30 hover:bg-gold/20 text-cream/80 hover:text-gold border border-gold/30 backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/40 px-4 py-2 rounded-full border border-gold/30 backdrop-blur-md">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 rounded-full ${
              idx === currentSlide
                ? 'w-7 h-2 bg-gradient-to-r from-gold-light to-gold'
                : 'w-2 h-2 bg-cream/40 hover:bg-cream/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
