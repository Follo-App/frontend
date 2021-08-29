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
      },
      animation: {
        bounceIn: 'bounceIn  1s infinite'
      },
      keyframes: {
        bounceIn: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'translateY(25%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
