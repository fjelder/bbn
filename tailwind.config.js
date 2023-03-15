/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral,
        secondary: colors.teal,
        extra: colors.fuchsia,
        c1: "#E1E3B1",
        c2: "#B8C981",
        c3: "#81A560",
        c4: "#5B8258",
        c5: "#5F5D4F",
        c6: "#DBE9F9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailgrids/plugin"),
  ],
};
