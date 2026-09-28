import React, { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover / view */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mehndi-darkest/95 text-cream border border-gold/40 shadow-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <Sparkles className="w-3 h-3 text-gold animate-spin-slow" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={siteConfig.getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 animate-gold-pulse"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-75 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
      </a>
    </div>
  );
};
