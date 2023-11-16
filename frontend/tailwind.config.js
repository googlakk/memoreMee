/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: {},
    },

    fontFamily: {
      arena: ["CATArena", "sans-serif"],
      jura: ["Jura", " sans-serif"],
    },
    extend: {
      screens: {
        l: "999px", // Название точки останова и значение ширины
      },
      animation: {
        "fade-in": "fade-in 3s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
