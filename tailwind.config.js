/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg_main:"#091322",
        hightlight:"#3161BF",
        secondary:"#12264A",
        grey:"#232D39"
      }
    },
  },
  plugins: [],
}