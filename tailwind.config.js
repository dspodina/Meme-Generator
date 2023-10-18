/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.css",
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primaryFont: ["Audiowide", "sans-serif"],
      secondaryFont: ["Montserrat Alternates", "sans-serif"],
  },
    extend: {
      colors: {
        green: "#B3C890",
        darknight: "#445069",
        grey: "#EEEEEE",
        violet: "#6554AF",
    },
    },
  },
  plugins: [],
}