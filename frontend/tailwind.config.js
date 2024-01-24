/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: [
        "bg-gradient-to-r from-[#1f0071] via-[#3f12c5]  to-[#021e8b]",
      ],
    },

    fontFamily: {
      arena: ["CATArena", "sans-serif"],
      jura: ["Jura", " sans-serif"],
      roboto: ["Roboto", "sans-serif"],
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
