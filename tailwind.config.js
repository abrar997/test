/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1285px",
        "2xl": "1536px",
      },
      background: {
        main: "#2c2c6c",
      },
    },
  },
  plugins: [],
};
