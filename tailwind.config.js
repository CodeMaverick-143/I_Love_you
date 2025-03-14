/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rose-gold': {
          50: '#FFF1F1',
          100: '#FBD3E9',
          200: '#F7B6D5',
          300: '#F498C1',
          400: '#F07BAE',
          500: '#EC5D9A',
          600: '#D94B87',
          700: '#C63974',
          800: '#B32761',
          900: '#A0154E',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};