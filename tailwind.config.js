/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nohemi", "sans-serif"],
        taprom: ["Taprom", "cursive"],
      },
    },
  },
  plugins: [],
};
