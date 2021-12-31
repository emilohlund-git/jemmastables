module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      zIndex: ['hover'],
      height: ['hover'],
      filter: ['hover'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-text-fill'),
  ],
};
