/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        light: "var(--light)",
        dark: "var(--dark)",
        lightShadow: "var(--lightShadow)",
        darkShadow: "var(--darkShadow)",
        redShadow: "var(--redShadow)",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
