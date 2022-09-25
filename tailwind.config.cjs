/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inconsolata', ...defaultTheme.fontFamily.sans],
        mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
        serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
