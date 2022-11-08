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
      keyframes: {
        click: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(0.95)' },
          '80%': { transform: 'scale(1)' },
        },
      },
      animation: {
        click: 'click 0.2s ease-in-out',
      },
    },
    fontFamily: {
      'RobotoFlex': ['Roboto Flex', 'sans-serif'],
    },
  },
  plugins: [],
}