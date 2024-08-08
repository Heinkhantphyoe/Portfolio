/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F875AA",
        secondary : "#0E0D0E",
        rgba : 'rgba(0, 0, 0, 0.7) '
      },
    },
  },
  plugins: [],
};
