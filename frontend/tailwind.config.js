/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: [
        "bg-gradient-to-r from-[#1f0071] via-[#3f12c5]  to-[#021e8b]",
      ],
    },
    backgroundImage: {
      mainBg: "url(./public/newImg/mainBg.png)",
      anzanMenuBg: "url(./public/newImg/menuAnzanBg.png)",
      anzanGameBg: "url(./public/newImg/gameBg.png)",
      dialogBg: "url(./public/newImg/dialog-Bg.png)",
      oneCounterBg: "url(./public/newImg/counterBg.png)",
      manyCounterBg: "url(./public/newImg/ramka.png)",
      counterBg: "url(./public/newImg/counter-bg.png)",
      longBtnBg: "url(./public/newImg/)",
      btnLongBg: "url(./public/newImg/Button-long.png)",
      btnWideBg: "url(./public/newImg/Button-wide.png)",
      miniDialogBg: "url(./public/newImg/mini-bg-dialog.png)",
      btnSettingBg: "url(./public/newImg/btn-Settings.png)",
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
