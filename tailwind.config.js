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
        blue:"#101B29",
        grey:"#232D39",
        lightGrey:"#29333F",
        whiteGrey:"#353F4A"
      }
    },
  },
  plugins: [],
}