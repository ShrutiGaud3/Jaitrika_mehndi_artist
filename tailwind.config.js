/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Bridal Maroon Palette
        maroon: {
          darkest: '#220609',
          deep: '#3D0D14',
          rich: '#5C141E',
          ruby: '#7A1C28',
          accent: '#8B2635',
          soft: '#FAECEE',
          pale: '#FDF5F6',
        },
        // Alias for components referencing mehndi
        mehndi: {
          darkest: '#220609',
          forest: '#3D0D14',
          deep: '#5C141E',
          light: '#7A1C28',
          pale: '#FAECEE',
        },
        henna: {
          brown: '#5A1A22',
          terracotta: '#8B2635',
          warm: '#75202C',
          soft: '#F6E6E8',
        },
        gold: {
          light: '#F8E9C9',
          DEFAULT: '#D4AF37',
          rich: '#E5C378',
          deep: '#A68226',
          muted: '#C29F4D',
        },
        cream: {
          DEFAULT: '#FFF9F2',
          ivory: '#FCF5EC',
          soft: '#F7EDE3',
          warm: '#EFE2D3',
        },
        charcoal: {
          DEFAULT: '#241819',
          light: '#423335',
          muted: '#635355',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        sans: ['"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.3)',
        'gold-subtle': '0 4px 20px rgba(212, 175, 55, 0.2)',
        'maroon-glow': '0 10px 30px rgba(92, 20, 30, 0.35)',
        'luxury': '0 20px 40px -15px rgba(61, 13, 20, 0.15)',
        'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #3D0D14 0%, #5C141E 50%, #220609 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F8E9C9 0%, #D4AF37 50%, #A68226 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFF9F2 0%, #FCF5EC 100%)',
      }
    },
  },
  plugins: [],
}
