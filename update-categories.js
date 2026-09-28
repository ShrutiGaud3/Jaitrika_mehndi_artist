import fs from 'fs';
import path from 'path';

// Complete curated mapping of each image to its exact category
const imageCategoryMap = {
  // Feet / Leg Mehndi
  "WhatsApp Image 2026-09-28 at 2.56.56 PM.jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.07 PM (1).jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.11 PM.jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.12 PM.jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.20 PM (1).jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.23 PM.jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.26 PM (2).jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.27 PM.jpeg": { cat: "feet", title: "Leg-Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.06 PM (1).jpeg": { cat: "feet", title: "Leg-Mehandi" },

  // Minimal Mehandi
  "WhatsApp Image 2026-09-28 at 2.56.53 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.56 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.57 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.00 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.01 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.01 PM (2).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.02 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.03 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.03 PM (2).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.07 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.08 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.09 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.15 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.16 PM (1).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.17 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.18 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.22 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.24 PM (2).jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.24 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.26 PM.jpeg": { cat: "minimal", title: "Minimal Mehandi" },

  // Arabic Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.01 PM.jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.03 PM.jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.05 PM (1).jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.05 PM.jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.19 PM.jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.20 PM.jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.21 PM.jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.22 PM (1).jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.23 PM (1).jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.23 PM (2).jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.25 PM.jpeg": { cat: "arabic", title: "Arabic Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.26 PM (1).jpeg": { cat: "arabic", title: "Arabic Mehandi" },

  // Heavy Mehandi (Full Hand Intricate)
  "WhatsApp Image 2026-09-28 at 2.56.54 PM.jpeg": { cat: "heavy", title: "Heavy Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.58 PM.jpeg": { cat: "heavy", title: "Heavy Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.05 PM (2).jpeg": { cat: "heavy", title: "Heavy Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.08 PM.jpeg": { cat: "heavy", title: "Heavy Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.09 PM.jpeg": { cat: "heavy", title: "Heavy Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.11 PM (1).jpeg": { cat: "heavy", title: "Heavy Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.13 PM (2).jpeg": { cat: "heavy", title: "Heavy Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.14 PM.jpeg": { cat: "heavy", title: "Heavy Mehandi" },

  // Rajasthani Traditional
  "WhatsApp Image 2026-09-28 at 2.56.54 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.55 PM.jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.57 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.58 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.59 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.00 PM.jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.02 PM.jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.04 PM.jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.06 PM.jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.07 PM (2).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.10 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.10 PM.jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.11 PM (2).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.12 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.13 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.16 PM.jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.24 PM (1).jpeg": { cat: "rajasthani", title: "Rajasthani Mehandi" },

  // Bridal Signature
  "WhatsApp Image 2026-09-28 at 2.56.53 PM (1).jpeg": { cat: "bridal", title: "Bridal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.53 PM (2).jpeg": { cat: "bridal", title: "Bridal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.56.59 PM.jpeg": { cat: "bridal", title: "Bridal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.09 PM (2).jpeg": { cat: "bridal", title: "Bridal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.13 PM.jpeg": { cat: "bridal", title: "Bridal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.18 PM (1).jpeg": { cat: "bridal", title: "Bridal Mehandi" },
  "WhatsApp Image 2026-09-28 at 2.57.27 PM (1).jpeg": { cat: "bridal", title: "Bridal Mehandi" },
};

const uploadDir = path.join(process.cwd(), 'public', 'upload');
const files = fs.readdirSync(uploadDir);
const userImages = files.filter(f => f.startsWith('WhatsApp Image') && (f.endsWith('.jpeg') || f.endsWith('.jpg')));
const userVideos = files.filter(f => f.startsWith('WhatsApp Video') && f.endsWith('.mp4'));

// Prioritize key sample cards at the top like user reference
const priorityFiles = [
  "WhatsApp Image 2026-09-28 at 2.57.11 PM.jpeg", // 1. Leg-Mehandi (feet on cushion)
  "WhatsApp Image 2026-09-28 at 2.56.59 PM.jpeg", // 2. Bridal Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.05 PM (2).jpeg", // 3. Heavy Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.22 PM (1).jpeg", // 4. Arabic Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.12 PM.jpeg", // 5. Leg-Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.18 PM (1).jpeg", // 6. Bridal Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.09 PM.jpeg", // 7. Heavy Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.21 PM.jpeg", // 8. Arabic Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.07 PM (1).jpeg", // 9. Leg-Mehandi
  "WhatsApp Image 2026-09-28 at 2.56.53 PM (2).jpeg", // 10. Bridal Mehandi
  "WhatsApp Image 2026-09-28 at 2.56.58 PM.jpeg", // 11. Heavy Mehandi
  "WhatsApp Image 2026-09-28 at 2.57.01 PM.jpeg", // 12. Arabic Mehandi
];

const remainingFiles = userImages.filter(f => !priorityFiles.includes(f));
const sortedImages = [...priorityFiles.filter(f => userImages.includes(f)), ...remainingFiles];

const galleryItems = sortedImages.map((imgName, index) => {
  const mapped = imageCategoryMap[imgName] || { cat: "bridal", title: "Bridal Mehandi" };
  return {
    id: index + 1,
    title: mapped.title,
    category: mapped.cat,
    image: '/upload/' + encodeURIComponent(imgName),
    rawFileName: imgName,
    description: `Bespoke ${mapped.title} design crafted with 100% natural organic henna.`
  };
});

const videoItems = userVideos.map((vidName, index) => {
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
  return {
    id: 'v-' + (index + 1),
    title: titles[index % titles.length] || `Bridal Mehndi Reel #${index + 1}`,
    videoUrl: '/upload/' + encodeURIComponent(vidName),
    rawFileName: vidName,
    caption: 'Dark stain reveal and live application by Jaitrika Mehndi Artist'
  };
});

const galleryCategories = [
  { id: "all", label: "All Designs" },
  { id: "bridal", label: "Bridal Mehandi" },
  { id: "feet", label: "Leg-Mehandi" },
  { id: "heavy", label: "Heavy Mehandi" },
  { id: "rajasthani", label: "Rajasthani Mehandi" },
  { id: "arabic", label: "Arabic Mehandi" },
  { id: "minimal", label: "Minimal Mehandi" },
];

const configOutput = `/**
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
    experienceYears: "10+",
    bridesAdorned: "1,500+",
    cityCovered: "Indore, Madhya Pradesh & Worldwide",
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
    homeServiceCities: "Indore, Ujjain, Bhopal, Dewas, Madhya Pradesh & Available Worldwide",
    workingHours: "Mon - Sun: 9:00 AM - 9:00 PM IST",
    defaultWhatsappMessage: "Hello Jaitrika Mehndi Artist! I would like to inquire about booking mehndi services for my upcoming wedding/event.",
  },

  // Helper to generate dynamic WhatsApp links with custom message
  getWhatsappUrl: (customMessage) => {
    const message = customMessage || siteConfig.contact.defaultWhatsappMessage;
    return \`https://wa.me/\${siteConfig.contact.whatsappNumber}?text=\${encodeURIComponent(message)}\`;
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
  galleryCategories: ${JSON.stringify(galleryCategories, null, 2)},

  // Gallery Items (Accurately Categorized Real Photos)
  galleryItems: ${JSON.stringify(galleryItems, null, 2)},

  // Video Reels (Real Video Clips)
  videoReels: ${JSON.stringify(videoItems, null, 2)}
};
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'config', 'siteConfig.js'), configOutput, 'utf-8');
console.log('Successfully updated siteConfig.js with accurate categories! Total images:', galleryItems.length);
