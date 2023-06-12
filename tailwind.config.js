/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logoFont' : ['Titillium Web', 'sans-serif'],
        'menuFont' : ['Inter', 'sans-serif']
      },
      colors : {
        logoBlue: "#19609D"
      }
    }
    ,
    screens: {
      'sm': '300px',
      // => @media (min-width: 400px) { ... }

      'md': '1080px',
      // => @media (min-width: 1367px) { ... }

      'lg': '1370px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}