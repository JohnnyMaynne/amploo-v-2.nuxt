const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './helpers/*.js',
    './mixins/*.js',
    './nuxt.config.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
