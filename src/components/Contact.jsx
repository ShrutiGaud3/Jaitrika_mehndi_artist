import React from 'react';
import { MessageCircle, Phone, MapPin, Instagram, Sparkles, Clock, Globe } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GoldMandalaMotif, HennaLeafDivider, HennaWatermarkBg } from './DecorativePatterns';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-12 sm:py-28 bg-cream overflow-hidden">
      <HennaWatermarkBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-mehndi-forest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              DIRECT ARTIST BOOKING
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-mehndi-forest font-semibold mb-4">
            Let's Create Something Beautiful
          </h2>

          <HennaLeafDivider className="mb-4" />

          <p className="font-sans text-charcoal-light text-base sm:text-lg">
            Reach out directly for bridal reservations, pricing queries, or destination wedding consultations.
          </p>
        </div>

        {/* Luxury Direct Contact Cards Grid (Strictly Direct Links, No Forms!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: WhatsApp Direct */}
          <div className="relative bg-cream-ivory rounded-2xl p-8 gold-card-border shadow-luxury flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5">
            <div className="w-16 h-16 rounded-2xl bg-maroon-soft border border-maroon-ruby/30 flex items-center justify-center text-maroon-rich mb-6 shadow-sm">
              <MessageCircle className="w-8 h-8 text-maroon-rich" />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-deep mb-1">
              Instant Inquiry
            </span>
            <h3 className="font-serif text-2xl text-mehndi-forest font-medium mb-3">
              WhatsApp Chat
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal-light mb-6">
              Chat directly with our lead artist, send reference photos, and receive immediate slot confirmations.
            </p>

            <a
              href={siteConfig.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-mehndi-forest hover:bg-mehndi-deep text-cream font-medium text-xs uppercase tracking-wider shadow-md hover:shadow-gold-subtle transition-all duration-300 border border-gold/40"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Direct Phone Call */}
          <div className="relative bg-cream-ivory rounded-2xl p-8 gold-card-border shadow-luxury flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5">
            <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold-deep mb-6 shadow-sm">
              <Phone className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-deep mb-1">
              Direct Phone
            </span>
            <h3 className="font-serif text-2xl text-mehndi-forest font-medium mb-3">
              Call Us
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal-light mb-6">
              Speak with us directly for urgent dates, large family bulk bookings, and personalized bridal arrangements.
            </p>

            <a
              href={`tel:${siteConfig.contact.phoneNumber}`}
              className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-mehndi-forest hover:bg-mehndi-deep text-cream font-medium text-xs uppercase tracking-wider shadow-md hover:shadow-gold-subtle transition-all duration-300 border border-gold/30"
            >
              <Phone className="w-4 h-4 text-gold-light" />
              <span>Call {siteConfig.contact.displayPhone}</span>
            </a>
          </div>

          {/* Card 3: Location Service */}
          <div className="relative bg-cream-ivory rounded-2xl p-8 gold-card-border shadow-luxury flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5">
            <div className="w-16 h-16 rounded-2xl bg-henna-soft border border-henna-terracotta/30 flex items-center justify-center text-henna-terracotta mb-6 shadow-sm">
              <MapPin className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-deep mb-1">
              Studio & On-Location
            </span>
            <h3 className="font-serif text-2xl text-mehndi-forest font-medium mb-3">
              Location
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal-light mb-6">
              {siteConfig.contact.location}
            </p>

            <a
              href={siteConfig.getWhatsappUrl("Hello Jaitrika! I would like to book mehndi service in Indore, Madhya Pradesh.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gold/20 hover:bg-gold/30 text-mehndi-forest font-semibold text-xs uppercase tracking-wider border border-gold/50 transition-all duration-300 whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-gold-deep flex-shrink-0" />
              <span>Book in Indore</span>
            </a>
          </div>

        </div>

        {/* Quick Operational Info Bar */}
        <div className="mt-14 max-w-5xl mx-auto p-5 sm:p-7 rounded-2xl bg-gold/10 border border-gold/30 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-gold-deep" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-mehndi-forest block">
                Booking Hours & Response Time
              </span>
              <span className="text-xs sm:text-sm text-charcoal-light">
                {siteConfig.contact.workingHours} • Typical WhatsApp response in &lt; 15 mins
              </span>
            </div>
          </div>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gold/15 hover:bg-gold/25 border border-gold/40 text-xs font-bold uppercase tracking-wider text-mehndi-forest hover:text-henna-terracotta transition-all whitespace-nowrap flex-shrink-0"
          >
            <Instagram className="w-4 h-4 text-henna-terracotta flex-shrink-0" />
            <span>Follow {siteConfig.contact.instagramHandle}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
