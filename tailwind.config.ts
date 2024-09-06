/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  mode: "jit",
  darkMode: "class",
  plugins: [require("tailwindcss-animate")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        "white-primary": "#eaeaea",
      },
      borderRadius: {
        custom: "5px",
      },
      animation: {
        "custom-pulse": "custom-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "custom-fadein": "custom-fadein 0.2s ease-in-out",
      },
      keyframes: {
        "custom-pulse": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "0.5" },
        },
        "custom-fadein": {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "1" },
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    fontSize: {
      base: ["16px", { fontWeight: "500" }],
      xs: "12px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "2xl": "26px",
      "3xl": "32px",
      "4xl": "40px",
      "5xl": "48px",
      "6xl": "64px",
    },
  },
})
