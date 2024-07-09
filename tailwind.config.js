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
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".responsive-padding": {
          padding: "1rem", // default for small screens
        },
        "@media (min-width: 768px)": {
          ".responsive-padding": {
            padding: "1.25rem", // md
          },
        },
        "@media (min-width: 1024px)": {
          ".responsive-padding": {
            padding: "2rem", // lg
          },
        },
        "@media (min-width: 1280px)": {
          ".responsive-padding": {
            padding: "2.5rem", // xl
          },
        },
        "@media (min-width: 1536px)": {
          ".responsive-padding": {
            padding: "3rem", // 2xl
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
