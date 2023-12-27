/** @type {import('tailwindcss').Config} */
const colors = require("./src/styles/colors");
const fontSize = require("./src/styles/fontSize");
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontSize,
    },
  },
  plugins: [],
};
