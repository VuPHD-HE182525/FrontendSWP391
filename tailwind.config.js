/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: '#0066ff',
      },
      backgroundColor: {
        primary: '#0066ff',
      },
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('max-md', '@media (max-width: 767px)');
      addVariant('max-xl', '@media (max-width: 1280px)');
    },
    aspectRatio
  ]
}
