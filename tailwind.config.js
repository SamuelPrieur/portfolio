/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fragment: ["Fragment", "sans-serif"],
        fragmentExBol: ["Fragment-ExBol", "sans-serif"],
      },
      backgroundImage: {
        "noise-pattern": 'url("../assets/noise2.png")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        principal: "#1E1E1E",
        secondary: "#292929",
        important: "#b48cf5",
        text: "#F2F2F2",
        cube: "#19376D",
        blue: {
          950: "#0B2447",
        },
      },
    },
  },
  plugins: [],
};
