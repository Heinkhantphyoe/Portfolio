/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F875AA",
        secondary : "#0E0D0E"
      },
    },
  },
  plugins: [],
};
