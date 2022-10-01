/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'main-color': '#1B1B1B',
        'white': '#FFFFFF',
        'button': '#E22F2F',
        'input': '#D9D9D9',
        'space': '#1B1B1B'
      },

      height: {
        '937': '50rem',
        '1000': '60rem',
        '800': '53rem'
      }
    },
    

  },
  plugins: [],
}
