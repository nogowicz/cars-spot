/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      robotoFlex: ['Roboto Flex', 'sans-serif'],
      robotoCondensed: ['Roboto Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#F7F7F7',
        secondary: '#282828',
        primary: '#0147FF',
        textLight: '#FFFFFF',
        tertiary: '#EDEDED',
        hint: '#F1F1F1',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
