import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // AURA palette — quiet luxury
        ivory: {
          50:  '#FBF8F2',
          100: '#F7F2EA',
          200: '#F0E8DD',
          300: '#ECE3D6',
          400: '#E0D4C2',
        },
        ink: {
          900: '#0E0E0E',
          800: '#1F1F1F',
          700: '#2D2D2D',
          500: '#5A554D',
          400: '#7A7368',
        },
        gold: {
          300: '#D9C39A',
          400: '#C9A96A',
          500: '#B9975B',
          600: '#A98B5C',
          700: '#8E7349',
        },
        sand: '#D9CDB8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Canela', 'serif'],
        sans: ['Inter', '"Neue Haas Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      fontSize: {
        'hero':   ['clamp(3.5rem, 8vw, 6.5rem)',  { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'title':  ['clamp(2.5rem, 5vw, 4.5rem)',  { lineHeight: '1.05', letterSpacing: '-0.005em' }],
        'eyebrow':['0.7rem',                       { lineHeight: '1.4',  letterSpacing: '0.32em' }],
        'body':   ['1.125rem',                     { lineHeight: '1.85', letterSpacing: '0' }],
        'body-lg':['1.25rem',                      { lineHeight: '1.9' }],
      },
      animation: {
        'marquee': 'marquee 60s linear infinite',
        'fade-up': 'fadeUp 1.2s ease-out forwards',
        'breath':  'breath 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breath: {
          '0%, 100%': { opacity: '0.55' },
          '50%':      { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
