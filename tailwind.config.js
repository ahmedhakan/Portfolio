/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0B',
        'background-lighter': '#0D0D0E',
      },
    },
  },
  plugins: [],
};