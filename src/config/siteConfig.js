/**
 * Centralized Configuration for Jaitrika Mehndi Artist
 * All media is loaded directly from real uploaded photos and videos.
 */

export const siteConfig = {
  // Brand Details
  brand: {
    name: "Jaitrika Mehndi Artist",
    shortName: "Jaitrika Mehndi Artist",
    tagline: "Beauty in Tradition, Art in Every Detail",
    logo: "/upload/logo.jpg",
    subTagline: "Exquisite bridal and designer mehndi crafted with passion, precision and timeless Indian artistry.",
    experienceYears: "3+",
    bridesAdorned: "1,500+",
    cityCovered: "Vijay Nagar, Indore, Madhya Pradesh",
    naturalHenna: "100% Organic and Chemical-Free",
  },

  // Contact Information
  contact: {
    whatsappNumber: "919244517200",
    displayWhatsapp: "+91 92445 17200",
    phoneNumber: "+919244517200",
    displayPhone: "+91 92445 17200",
    instagramHandle: "@jaitrika_mehandi_designer",
    instagramUrl: "https://www.instagram.com/jaitrika_mehandi_designer?stkn=MXZkMDBpbnlyZGJnaw==",
    location: "Vijay Nagar, Indore, Madhya Pradesh",
    homeServiceCities: "Vijay Nagar, Indore, Madhya Pradesh",
    workingHours: "Mon - Sun: 9:00 AM - 9:00 PM IST",
    defaultWhatsappMessage: "Hello Jaitrika Mehndi Artist! I would like to inquire about booking mehndi services in Vijay Nagar, Indore, Madhya Pradesh.",
  },

  // Helper to generate dynamic WhatsApp links with custom message
  getWhatsappUrl: (customMessage) => {
    const message = customMessage || siteConfig.contact.defaultWhatsappMessage;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Videos", href: "#videos" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Carousel Slides (Loaded from top curated real bridal images)
  heroSlides: [
    {
      id: 1,
      image: "/upload/hero-1.jpg",
      eyebrow: "ARTISTRY • TRADITION • ELEGANCE",
      title: "Beauty in Tradition, Art in Every Detail",
      subtitle: "Exquisite bridal and designer mehndi crafted with passion, precision and timeless Indian artistry.",
      tag: "Royal Bridal Signature",
    },
    {
      id: 2,
      image: "/upload/hero-2.jpg",
      eyebrow: "BESPOKE BRIDAL CREATIONS",
      title: "Intricate Heritage Rajasthani Motifs",
      subtitle: "From customized portraiture to intricate jharokhas and peacock trails, adorned for your special day.",
      tag: "Heritage Rajputana",
    },
    {
      id: 3,
      image: "/upload/hero-3.jpg",
      eyebrow: "CONTEMPORARY AND ARABIC FUSION",
      title: "Delicate Flora and Modern Silhouettes",
      subtitle: "Breathtaking negative space compositions and flowy shaded florals for modern brides.",
      tag: "Arabic and Indo-Western",
    },
    {
      id: 4,
      image: "/upload/hero-4.jpg",
      eyebrow: "ROYAL WEDDING EXPERIENCES",
      title: "Pure Herbal Organic Dark Stain Henna",
      subtitle: "Prepared with love from 100% natural Sojat henna leaves, Nilgiri and pure Eucalyptus oils.",
      tag: "Guaranteed Rich Stain",
    },
    {
      id: 5,
      image: "/upload/hero-5.jpg",
      eyebrow: "ROYAL RAJASTHANI BRIDAL",
      title: "Master Strokes of Pure Elegance",
      subtitle: "Every line drawn with micro-precision for your unforgettable wedding celebrations.",
      tag: "Signature Henna Art",
    },
  ],

  // Services (Real Bridal Henna Photos)
  services: [
    {
      id: "bridal",
      number: "01",
      title: "Bridal Mehndi",
      description: "Make your big day even more special with our exquisite bridal Mehndi designs, crafted with precision and elegance to enhance your wedding look.",
      image: "/upload/service-1.jpg",
    },
    {
      id: "arabic",
      number: "02",
      title: "Arabic Mehndi",
      description: "Enhance your style with bold and elegant Arabic Mehndi patterns, perfect for modern and traditional occasions.",
      image: "/upload/service-2.jpg",
    },
    {
      id: "heavy",
      number: "03",
      title: "Heavy Mehndi",
      description: "Adorn your hands and feet with intricate, dense Mehndi designs, perfect for weddings, festivals, and grand celebrations.",
      image: "/upload/service-3.jpg",
    },
  ],

  // Gallery Categories
  galleryCategories: [
  {
    "id": "all",
    "label": "All Designs"
  },
  {
    "id": "bridal",
    "label": "Bridal Mehandi"
  },
  {
    "id": "feet",
    "label": "Leg-Mehandi"
  },
  {
    "id": "heavy",
    "label": "Heavy Mehandi"
  },
  {
    "id": "rajasthani",
    "label": "Rajasthani Mehandi"
  },
  {
    "id": "arabic",
    "label": "Arabic Mehandi"
  },
  {
    "id": "minimal",
    "label": "Minimal Mehandi"
  }
],

  // Gallery Items (Accurately Categorized Real Photos)
  galleryItems: [
  {
    "id": 1,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.11%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.11 PM.jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 2,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.59%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.59 PM.jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 3,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.05%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.05 PM (2).jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 4,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.22%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.22 PM (1).jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 5,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.12%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.12 PM.jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 6,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.18%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.18 PM (1).jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 7,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.09%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.09 PM.jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 8,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.21%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.21 PM.jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 9,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.07%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.07 PM (1).jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 10,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.53%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.53 PM (2).jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 11,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.58%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.58 PM.jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 12,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.01%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.01 PM.jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 13,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.53%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.53 PM (1).jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 14,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.53%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.53 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 15,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.54%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.54 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 16,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.54%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.54 PM.jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 17,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.55%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.55 PM.jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 18,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.56%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.56 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 19,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.56%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.56 PM.jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 20,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.57%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.57 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 21,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.57%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.57 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 22,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.58%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.58 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 23,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.56.59%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.56.59 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 24,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.00%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.00 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 25,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.00%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.00 PM.jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 26,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.01%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.01 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 27,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.01%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.01 PM (2).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 28,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.02%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.02 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 29,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.02%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.02 PM.jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 30,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.03%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.03 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 31,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.03%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.03 PM (2).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 32,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.03%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.03 PM.jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 33,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.04%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.04 PM.jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 34,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.05%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.05 PM (1).jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 35,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.05%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.05 PM.jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 36,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.06%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.06 PM (1).jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 37,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.06%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.06 PM.jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 38,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.07%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.07 PM (2).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 39,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.07%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.07 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 40,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.08%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.08 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 41,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.08%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.08 PM.jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 42,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.09%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.09 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 43,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.09%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.09 PM (2).jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 44,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.10%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.10 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 45,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.10%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.10 PM.jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 46,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.11%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.11 PM (1).jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 47,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.11%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.11 PM (2).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 48,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.12%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.12 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 49,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.13%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.13 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 50,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.13%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.13 PM (2).jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 51,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.13%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.13 PM.jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 52,
    "title": "Heavy Mehandi",
    "category": "heavy",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.14%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.14 PM.jpeg",
    "description": "Bespoke Heavy Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 53,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.15%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.15 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 54,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.16%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.16 PM (1).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 55,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.16%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.16 PM.jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 56,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.17%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.17 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 57,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.18%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.18 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 58,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.19%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.19 PM.jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 59,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.20%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.20 PM (1).jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 60,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.20%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.20 PM.jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 61,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.22%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.22 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 62,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.23%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.23 PM (1).jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 63,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.23%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.23 PM (2).jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 64,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.23%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.23 PM.jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 65,
    "title": "Rajasthani Mehandi",
    "category": "rajasthani",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.24%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.24 PM (1).jpeg",
    "description": "Bespoke Rajasthani Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 66,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.24%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.24 PM (2).jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 67,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.24%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.24 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 68,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.25%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.25 PM.jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 69,
    "title": "Arabic Mehandi",
    "category": "arabic",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.26%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.26 PM (1).jpeg",
    "description": "Bespoke Arabic Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 70,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.26%20PM%20(2).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.26 PM (2).jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 71,
    "title": "Minimal Mehandi",
    "category": "minimal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.26%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.26 PM.jpeg",
    "description": "Bespoke Minimal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 72,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.27%20PM%20(1).jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.27 PM (1).jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 73,
    "title": "Leg-Mehandi",
    "category": "feet",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%202.57.27%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 2.57.27 PM.jpeg",
    "description": "Bespoke Leg-Mehandi design crafted with 100% natural organic henna."
  },
  {
    "id": 74,
    "title": "Bridal Mehandi",
    "category": "bridal",
    "image": "/upload/WhatsApp%20Image%202026-09-28%20at%205.35.56%20PM.jpeg",
    "rawFileName": "WhatsApp Image 2026-09-28 at 5.35.56 PM.jpeg",
    "description": "Bespoke Bridal Mehandi design crafted with 100% natural organic henna."
  }
],

  // Video Reels (Real Video Clips)
  videoReels: [
  {
    "id": "v-1",
    "title": "Bridal Mehndi Live",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.56.55%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.56.55 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-2",
    "title": "Intricate Bridal Work",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.56.58%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.56.58 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-3",
    "title": "Stain Reveal Video",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.28%20PM%20(1).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.28 PM (1).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-4",
    "title": "Live Henna Artistry",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.28%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.28 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-5",
    "title": "Royal Bride Mehndi",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.29%20PM%20(1).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.29 PM (1).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-6",
    "title": "Arabic Shading Reel",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.29%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.29 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-7",
    "title": "Full Hand Detailing",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.30%20PM%20(1).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.30 PM (1).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-8",
    "title": "Leg Mehndi Artistry",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.30%20PM%20(2).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.30 PM (2).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-9",
    "title": "Traditional Heritage Henna",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.30%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.30 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-10",
    "title": "Bridal Palms Detailing",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.31%20PM%20(1).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.31 PM (1).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-11",
    "title": "Bridal Mehndi Live",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.31%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.31 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-12",
    "title": "Intricate Bridal Work",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.32%20PM%20(1).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.32 PM (1).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-13",
    "title": "Stain Reveal Video",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.32%20PM%20(2).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.32 PM (2).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-14",
    "title": "Live Henna Artistry",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.32%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.32 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-15",
    "title": "Royal Bride Mehndi",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.33%20PM%20(1).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.33 PM (1).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-16",
    "title": "Arabic Shading Reel",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.33%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.33 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-17",
    "title": "Full Hand Detailing",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.34%20PM%20(1).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.34 PM (1).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-18",
    "title": "Leg Mehndi Artistry",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.34%20PM%20(2).mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.34 PM (2).mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-19",
    "title": "Traditional Heritage Henna",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.34%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.34 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  },
  {
    "id": "v-20",
    "title": "Bridal Palms Detailing",
    "videoUrl": "/upload/WhatsApp%20Video%202026-09-28%20at%202.57.35%20PM.mp4",
    "rawFileName": "WhatsApp Video 2026-09-28 at 2.57.35 PM.mp4",
    "caption": "Dark stain reveal and live application by Jaitrika Mehndi Artist"
  }
]
};
