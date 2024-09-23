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
      mainBg: "url(/newImg/mainBg.png)",
      anzanMenuBg: "url(/newImg/menuAnzanBg.png)",
      anzanGameBg: "url(/newImg/gameBg.png)",
      dialogBg: "url(/newImg/dialog-Bg.png)",
      oneCounterBg: "url(/newImg/counterBg.png)",
      manyCounterBg: "url(/newImg/ramka.png)",
      counterBg: "url(/newImg/counter-bg.png)",
      longBtnBg: "url(/newImg/Button-long.png)",
      btnLongBg: "url(/newImg/Button-long.png)",
      btnWideBg: "url(/newImg/Button-wide.png)",
      miniDialogBg: "url(/newImg/mini-bg-dialog.png)",
      btnSettingBg: "url(/newImg/btn-settings.png)",
    },

    fontFamily: {
      arena: ["CATArena", "sans-serif"],
      jura: ["Jura", " sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        
        l: "990px", // Название точки останова и значение ширины
        xl: "1300px"
        
      },
      animation: {
        "fade-in": "fade-in 3s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
