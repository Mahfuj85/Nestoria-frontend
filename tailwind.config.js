/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kushan: ["Kaushan Script"],
        sirin: ["Sirin Stencil"],
      },
      colors: {
        primary: "#D7942E",
        secondary: "#fff",
        tertiary: "#202020",
        secondaryRed: "#f42c37",
        secondaryYellow: "#fdc62e",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        secondaryWhite: "#eeeeee",
        bodyRgba: "rgba(32, 32, 32, 0.55)",
        textRgba: "rgba(255, 255, 255, 1)",
        costal: "#9AECDB",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#787878",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        hero: "url(/src/assets/images/bg.png)",
      },
    },
  },
  plugins: [],
};
