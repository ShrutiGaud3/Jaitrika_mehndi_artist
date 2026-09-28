import React from 'react';

/**
 * Reusable Indian Henna / Mandala Ornamental Vectors
 */

export const GoldMandalaMotif = ({ className = "w-6 h-6 text-gold" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="14" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    {/* 8 Petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M50 14 C44 26, 44 34, 50 36 C56 34, 56 26, 50 14 Z"
          fill="currentColor"
          fillOpacity="0.3"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="50" cy="12" r="1.8" fill="currentColor" />
      </g>
    ))}
  </svg>
);

export const HennaLeafDivider = ({ className = "text-gold" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-gold/80" />
    <svg className="w-5 h-5 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C12 2 13.5 6.5 17 8C20.5 9.5 22 12 22 12C22 12 17.5 13.5 16 17C14.5 20.5 12 22 12 22C12 22 10.5 17.5 7 16C3.5 14.5 2 12 2 12C2 12 6.5 10.5 8 7C9.5 3.5 12 2 12 2Z" />
    </svg>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold to-gold/80" />
  </div>
);

export const PaisleyMotif = ({ className = "w-8 h-8 text-gold" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 10 C30 10 15 30 15 52 C15 75 35 90 60 90 C80 90 90 70 90 50 C90 30 80 15 65 15 C55 15 50 25 50 35 C50 42 55 48 60 48 C65 48 68 45 68 40"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="45" cy="55" r="8" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const HennaWatermarkBg = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none opacity-[0.035] select-none overflow-hidden ${className}`}>
    <svg className="w-full h-full object-cover" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hennaPattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
          <circle cx="80" cy="80" r="40" stroke="#C9A45C" strokeWidth="1.5" />
          <circle cx="80" cy="80" r="20" stroke="#C9A45C" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M80 20 Q95 50 80 80 Q65 50 80 20 Z" fill="#C9A45C" fillOpacity="0.1" stroke="#C9A45C" strokeWidth="1" />
          <path d="M80 80 Q95 110 80 140 Q65 110 80 80 Z" fill="#C9A45C" fillOpacity="0.1" stroke="#C9A45C" strokeWidth="1" />
          <path d="M20 80 Q50 95 80 80 Q50 65 20 80 Z" fill="#C9A45C" fillOpacity="0.1" stroke="#C9A45C" strokeWidth="1" />
          <path d="M80 80 Q110 95 140 80 Q110 65 80 80 Z" fill="#C9A45C" fillOpacity="0.1" stroke="#C9A45C" strokeWidth="1" />
          <circle cx="80" cy="80" r="4" fill="#C9A45C" />
          <circle cx="0" cy="0" r="15" stroke="#C9A45C" strokeWidth="1" />
          <circle cx="160" cy="0" r="15" stroke="#C9A45C" strokeWidth="1" />
          <circle cx="0" cy="160" r="15" stroke="#C9A45C" strokeWidth="1" />
          <circle cx="160" cy="160" r="15" stroke="#C9A45C" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hennaPattern)" />
    </svg>
  </div>
);

export const RoyalArchFrame = ({ children, className = "" }) => (
  <div className={`relative p-2 rounded-t-[100px] sm:rounded-t-[140px] border-2 border-gold/30 bg-cream-ivory shadow-luxury ${className}`}>
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cream px-3 py-1 text-gold">
      <GoldMandalaMotif className="w-5 h-5 text-gold" />
    </div>
    <div className="overflow-hidden rounded-t-[92px] sm:rounded-t-[132px] w-full h-full">
      {children}
    </div>
  </div>
);
