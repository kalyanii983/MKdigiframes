/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep purple & royal blue palette
        'royal': {
          950: '#08051a',
          900: '#0d0826',
          850: '#130d33',
          800: '#1a1040',
          700: '#251759',
          600: '#341f7d',
          500: '#482ba6',
        },
        // Radiant divine gold
        'gold': {
          DEFAULT: '#D4AF37',
          light: '#FBE89D',
          medium: '#E5C158',
          dark: '#B38B22',
          metallic: '#C5A059',
        },
        // Warm sacred orange / saffron
        'saffron': {
          DEFAULT: '#FF7722',
          light: '#FF9E59',
          dark: '#E05A00',
          rich: '#F36805',
        },
        // Divine accents & neutrals
        'cream': {
          DEFAULT: '#FAF7F2',
          soft: '#F4EFE6',
          dark: '#EAE1D2',
        },
        'ivory': '#FFFFF4',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.55)',
        'purple-glow': '0 0 35px rgba(72, 43, 166, 0.45)',
        'frame-inner': 'inset 0 0 20px rgba(0, 0, 0, 0.6)',
        'bezel': '0 12px 35px -5px rgba(0, 0, 0, 0.65), 0 0 0 3px rgba(212, 175, 55, 0.4)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 45px rgba(212, 175, 55, 0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
