/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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