/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
      },
    },
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
    ],
  },
};
