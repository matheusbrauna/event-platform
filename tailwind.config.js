/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        primary: {
          300: 'hsl(var(--green-300) / 100)',
          500: 'hsl(var(--green-500) / 100)',
          700: 'hsl(var(--green-700) / 100)',
        },
        blue: {
          500: 'hsl(var(--blue-500) / 100)',
        },
        orange: {
          500: 'hsl(var(--orange-500) / 100)',
        },
        red: {
          500: 'hsl(var(--red-500) / 100)',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
