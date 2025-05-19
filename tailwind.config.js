/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans' : ['Open Sans','sans-serif']
      }
    },
  },
  plugins: [],
}