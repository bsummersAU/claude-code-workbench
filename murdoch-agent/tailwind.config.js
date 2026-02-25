/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Murdoch Brand Colours ─────────────────────────────────────────────
      colors: {
        // Primary (Murdoch Red scale)
        primary: {
          200: '#F5C3CB',
          400: '#E0728A',
          600: '#C8203A',   // Murdoch Red — the canonical brand red
          800: '#8C0E26',
        },
        // Neutrals
        neutrals: {
          white:    '#FFFFFF',
          black:    '#000000',
          grey: {
            100: '#F5F5F5',
            300: '#E0E0E0',
            500: '#9E9E9E',
            700: '#616161',
            900: '#212121',
          },
        },
        // Secondary
        aqua: {
          100: '#D4F4F3',
          200: '#A9EEEC',
          400: '#4DD5D2',
          600: '#009C98',
          800: '#006B68',
        },
        pink: {
          100: '#FDE4ED',
          200: '#FBCADB',
          400: '#F592B5',
          600: '#EE5590',
          800: '#A63865',
        },
        // Tertiary
        green: {
          200: '#A8E6C2',
          400: '#52CC8A',
          600: '#00AA5B',
          800: '#007840',
        },
        yellow: {
          200: '#FFF0A3',
          400: '#FFE033',
          600: '#F5CC00',
          800: '#B39400',
        },
        orange: {
          200: '#FFD4A8',
          400: '#FFAB52',
          600: '#FF8400',
          800: '#B35C00',
        },
        purple: {
          200: '#DDD4F5',
          400: '#BAA9EC',
          600: '#7B5EDB',
          800: '#4D3299',
        },
        blue: {
          200: '#C4DCF5',
          400: '#6AAAE8',
          600: '#2278D4',
          800: '#1550A0',
        },
      },

      // ─── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // Font sizes aligned to the Murdoch type scale
      fontSize: {
        // Body
        'body-sm':  ['12px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-md':  ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-lg':  ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        // Lead
        'lead-sm':  ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
        'lead-md':  ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'lead-lg':  ['20px', { lineHeight: '1.5', letterSpacing: '0' }],
        // Headings (line-height 1.2, letter-spacing -0.03em)
        'h6': ['14px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'h5': ['16px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'h4': ['18px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'h3': ['20px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'h2': ['24px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'h1': ['32px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        // Large headings
        'h1-md': ['38px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'h1-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
      },

      // ─── Effect / Shadow tokens ────────────────────────────────────────────
      boxShadow: {
        // Shadow/Regular
        'brand':       '0px 4px 16px 4px rgba(0, 0, 0, 0.10)',
        // Shadow/Hover
        'brand-hover': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },

      // ─── Spectrum Gradients (background-image utilities) ──────────────────
      backgroundImage: {
        // Spectrum/Redtail — external brand gradient
        'spectrum-redtail':  'linear-gradient(135deg, #C8203A 0%, #EE5590 100%)',
        // Spectrum/Twiight — external brand gradient
        'spectrum-twiight':  'linear-gradient(135deg, #4D3299 0%, #2278D4 100%)',
        // Spectrum/Internal/Wetlands — internal digital use
        'spectrum-wetlands': 'linear-gradient(140deg, #005654 0%, #007a77 35%, #008481 65%, #009C98 100%)',
        // Spectrum/Internal/Sunrise — internal digital use
        'spectrum-sunrise':  'linear-gradient(135deg, #FF8400 0%, #F5CC00 100%)',
      },

      // ─── Animations (unchanged) ────────────────────────────────────────────
      animation: {
        'fade-up':    'fadeUp 0.4s ease-out',
        'fade-in':    'fadeIn 0.3s ease-out',
        'pulse-dot':  'pulseDot 1.4s infinite',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '40%':           { transform: 'scale(1)',   opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
