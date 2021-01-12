const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', +'./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      gray: colors.blueGray,
      pink: colors.pink,
      blue: colors.lightBlue,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
