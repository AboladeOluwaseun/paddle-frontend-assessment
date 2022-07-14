/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "446px",
      sm: "640px",
      md: "768px",
      lmd: "924px",
      lg: "1024px",
      xl: "	1280px",
      xxl: "1536px",
    },
    extend: {
      backgroundImage: {
        "background-img": "url('src/Assets/Path1.svg)",
      },
    },
  },
  plugins: [],
};
