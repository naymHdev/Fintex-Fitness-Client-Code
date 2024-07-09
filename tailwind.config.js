/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', sans-serif",
      },
      colors: {
        primary: {
          text: "#27282C",
          bg: "#C1A78C",
        },
        secondary: {
          text: "#232323",
          bg: "#D5CBC2",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
