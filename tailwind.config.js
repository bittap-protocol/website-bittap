/** @type {import('tailwindcss').Config} */

/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: ['prettier-plugin-tailwindcss', require('daisyui')]
}
