import cn from "clsx";

export const getClassFontSizeStarter = (playersCount?: number) => {
  const classFontSizeStarter = cn(
    "font-light p-0 m-0 text-center",
    playersCount === 10 && `text-[40px]`,
    playersCount === 9 && `text-[40px]`,
    playersCount === 8 && `text-[45px]`,
    playersCount === 7 && `text-[45px]`,
    playersCount === 6 && `text-[60px]`,
    playersCount === 5 && `text-[60px]`,
    playersCount === 4 && `text-[80px]`,
    playersCount === 3 && `text-[70px]`,
    playersCount === 2 && `text-[80px]`,
    playersCount === 1 && `text-[110px]`
  );
  return classFontSizeStarter;
};

export const getClassFontSizeNumber = (
  Numlenght: number,
  playersCount?: number
) => {
  const classFontSizeNumber = cn(
    "font-jura font-bold p-0 m-0 text-center",
    Numlenght <= 6 &&
      playersCount === 1 &&
      `text-[110px] lg:text-[200px] l:text-[150px] md:[160px] sm:text-[120px]`,
    Numlenght <= 3 &&
      playersCount === 2 &&
      `text-[100px] lg:text-[180px] l:text-[150px] md:[160px] sm:text-[120px]`,
    Numlenght >= 4 &&
      playersCount === 2 &&
      `text-[90px] lg:text-[150px] l:text-[120px] md:[130px] sm:text-[100px]`,
    Numlenght <= 3 &&
      playersCount === 3 &&
      `text-[90px] lg:text-[160px] l:text-[130px] md:[130px] sm:text-[100px]`,
    Numlenght >= 4 &&
      playersCount === 3 &&
      `text-[80px] lg:text-[130px] l:text-[110px] md:[110px] sm:text-[100px]`,
    Numlenght <= 3 &&
      playersCount === 4 &&
      `text-[100px] lg:text-[180px] l:text-[150px] md:[160px] sm:text-[120px]`,
    Numlenght >= 4 &&
      playersCount === 4 &&
      `text-[90px] lg:text-[140px] l:text-[110px] md:[120px] sm:text-[100px]`,
    Numlenght <= 3 &&
      playersCount === 5 &&
      `text-[80px] lg:text-[130px] l:text-[110px] md:[110px] sm:text-[90px]`,
    Numlenght >= 4 &&
      playersCount === 5 &&
      `text-[80px] lg:text-[80px] l:text-[70px] md:[70px] sm:text-[70px]`,
    Numlenght <= 3 &&
      playersCount === 6 &&
      `text-[80px] lg:text-[100px] l:text-[70px] md:[70px] sm:text-[90px]`,
    Numlenght >= 4 &&
      playersCount === 6 &&
      `text-[80px] lg:text-[80px] l:text-[70px] md:[70px] sm:text-[90px]`,
    Numlenght <= 3 &&
      playersCount === 7 &&
      `text-[80px] lg:text-[100px] l:text-[70px] md:[70px] sm:text-[90px]`,
    Numlenght >= 4 &&
      playersCount === 7 &&
      `text-[60px] lg:text-[60px] l:text-[60px] md:[60px] sm:text-[70px]`,
    Numlenght <= 3 &&
      playersCount === 8 &&
      `text-[80px] lg:text-[100px] l:text-[70px] md:[70px] sm:text-[90px]`,
    Numlenght >= 4 &&
      playersCount === 8 &&
      `text-[80px] lg:text-[60px] l:text-[60px] md:[60px] sm:text-[60px]`,
    Numlenght <= 3 &&
      playersCount === 9 &&
      `text-[80px] lg:text-[95px] l:text-[50px] md:[60px] sm:text-[90px]`,
    Numlenght >= 4 &&
      playersCount === 9 &&
      `text-[80px] lg:text-[60px] l:text-[50px] md:[50px] sm:text-[60px]`,
      Numlenght <= 3 &&
      playersCount === 10 &&
      `text-[80px] lg:text-[95px] l:text-[50px] md:[60px] sm:text-[90px]`,
    Numlenght >= 4 &&
      playersCount === 10 &&
      `text-[80px] lg:text-[60px] l:text-[50px] md:[50px] sm:text-[60px]`
  );
  return classFontSizeNumber;
};

// const BASE_SIZE = 200; // Базовый размер шрифта
// const MIN_SIZE = 50; // Минимальный размер шрифта
// const PLAYER_FACTOR = 10; // Фактор уменьшения на количество игроков
// const NUM_LENGTH_FACTOR = 20; // Фактор уменьшения на длину числа

// export const getClassFontSizeNumber = (
//   Numlenght: number,
//   playersCount: number
// ) => {
//   // Вычисляем размер шрифта на основе длины числа и количества игроков
//   let fontSize =
//     BASE_SIZE - playersCount * PLAYER_FACTOR - Numlenght * NUM_LENGTH_FACTOR;

//   // Ограничиваем размер шрифта минимальным значением
//   fontSize = Math.max(fontSize, MIN_SIZE);

//   return `font-jura font-bold p-0 m-0 text-center text-base-100 text-[${fontSize}px]`;
// };
