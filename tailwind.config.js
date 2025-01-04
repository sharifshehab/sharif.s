const textFillStroke = require('tailwindcss-text-fill-stroke');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        secondaryColor: 'var(--secondary-color)',
      },
      fontFamily: {
        monts: ['Montserrat', 'serif'],
        nunito: ['Nunito Sans', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    textFillStroke(),
  ],
}