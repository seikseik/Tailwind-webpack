const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'grey-1000': '#272727',
      'grey-900': '#3A4045',
      'grey-800': '#61666A',
      'grey-700': '#8A8A8D',
      'blue-800': '#06173B',
      'blue-700': '#0D3282',
      'blue-600': '#1247BA',
      'blue-500': '#0063FF',
      'blue-400': '#1F87FF',
      'blue-200': '#C2D9FF',
      'white': "#FFFFFF",
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
