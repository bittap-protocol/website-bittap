/** @type {import('tailwindcss').Config} */

/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7F02FF',
        secondary: '#00b000',
        accent: '#7F02FF',
        neutral: '#0579FF',
        'base-100': '#000000',
        info: '#0075e0',
        success: '#a2e732',
        warning: '#b18300',
        error: '#f10029'
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#7F02FF',
          secondary: '#00b000',
          accent: '#7F02FF',
          neutral: '#0579FF',
          'base-100': '#000000',
          info: '#0075e0',
          success: '#a2e732',
          warning: '#b18300',
          error: '#f10029'
        }
      }
    ]
  },
  plugins: ['prettier-plugin-tailwindcss', require('daisyui')]
}
