/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '60': '#181A27',
        '30': '#282A41',
        '10': '#FF4B57',
        'hover': '#FE3845',
      },
    },
    fontFamily: {
      'RobotoFlex': ['Roboto Flex', 'sans-serif'],
    },
  },
  plugins: [],
}