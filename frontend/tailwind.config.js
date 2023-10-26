/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      mainColor: ""
    },
    fontFamily: {
      arena: ['CATArena', "sans-serif"]
    },
    extend: {
      screens: {
        'l': '999px', // Название точки останова и значение ширины
      },
    },
  },
  plugins: [require("daisyui")],
}

