/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary2: colors.neutral,
        secondary: colors.teal,
        extra: colors.fuchsia,
        c1: "#E1E3B1",
        c2: "#B8C981",
        c3: "#81A560",
        c4: "#5B8258",
        c5: "#5F5D4F",
        c6: "#DBE9F9",
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#3056D3",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailgrids/plugin"),
  ],
};
