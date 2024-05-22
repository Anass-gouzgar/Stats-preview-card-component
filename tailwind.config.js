const { Lexend_Deca, Inter } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Verydarkblue: "hsl(233, 47%, 7%)",
        Darkdesaturatedblue: "hsl(244, 38%, 16%)",
        Softviolet: "hsl(277, 64%, 61%)",
        White: "hsl(0, 0%, 100%)",
        Slightlytransparentwhite: "hsla(0, 0%, 100%, 0.75)",
        Slightlytransparentw: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        Lexend_Deca: ["Lexend Deca", "sans-serif"],
        Inter: ["Inter", "sans-seri"],
      },
    },
  },
  plugins: [],
};
