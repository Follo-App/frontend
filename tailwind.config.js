const color = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '475px',
      '3xl': '1920px',
      ...defaultTheme.screens
    },
    fontFamily: {
      sans: ["'Mulish'", ...defaultTheme.fontFamily.sans],
      serif: ["'Montserrat Alternates'", ...defaultTheme.fontFamily.serif]
    },
    extend: {
      colors: {
        gray: color.trueGray,
        sky: color.sky,
        lime: color.lime,
        rose: color.rose,
        orange: color.orange,
        amber: color.amber
      },
      boxShadow: {},
      backgroundImage: {},
      listStyleType: {
        square: 'square',
        roman: 'upper-roman'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
