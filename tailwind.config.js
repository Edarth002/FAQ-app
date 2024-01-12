/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        Lightpink: "hsl(275, 100%, 97%)",
        Grayishpurple: "hsl(292, 16%, 49%)",
        Darkpurple: "hsl(292, 42%, 14%)",
      },
      minWidth: {
        small: "300px",
      },
    },
  },
  plugins: [],
};
