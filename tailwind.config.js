/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "https://fonts.googleapis.com/css2?family=Genos&display=swap"
  ],
  theme: {
    extend: {
      fontFamily: {
        comforta: ['Comfortaa', "sans-serif"]
      }
    },
  },
  plugins: [],
}