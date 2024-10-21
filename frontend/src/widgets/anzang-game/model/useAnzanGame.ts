// import { AnzanConfig, AnzanCore } from "@shared/core";
// import { useEffect, useMemo, useState } from "react";

// export const useAnzanGame = (config: AnzanConfig, playersCount: number) => {
//   const [games, setGames] = useState<AnzanCore[]>([]);

//   useEffect(() => {
//     // Проверяем, сколько игроков было ранее
//     const newGames = [...games]; // Копируем текущий массив игр

//     // Если количество игроков увеличилось
//     if (playersCount > games.length) {
//       const gamesToAdd = playersCount - games.length; // Сколько новых игр нужно добавить
//       for (let i = 0; i < gamesToAdd; i++) {
//         newGames.push(new AnzanCore(config)); // Добавляем новые игры с дефолтным конфигом
//       }
//     } else {
//       // Если количество игроков уменьшилось, обрезаем массив до нового размера
//       newGames.splice(playersCount); // Оставляем только те игры, которые соответствуют новому количеству игроков
//     }

//     setGames(newGames); // Обновляем состояние с новым массивом игр
//   }, [config, playersCount]); // Зависимости - конфиг и количество игроков

//   const setPlayerConfig = (newConfig: AnzanConfig, playerIndex: number) => {
//     setGames((_games) => {
//       return _games.map((_game, idx) => {
//         if (idx === playerIndex) {
//           return new AnzanCore(newConfig); // Обновляем конфиг только для указанного игрока
//         } else {
//           return _game; // Возвращаем старую игру без изменений
//         }
//       });
//     });
//   };

//   const isGamesSpeedsEquals = useMemo(() => {
//     for (let i = 1; i < games.length; i++) {
//       if (games[i - 1].config.speed !== games[i].config.speed) {
//         return false; // Проверка, равны ли скорости у всех игр
//       }
//     }
//     return true;
//   }, [games]);

//   return {
//     games,
//     setPlayerConfig,
//     isGamesSpeedsEquals,
//   };
// };

// import { AnzanConfig, AnzanCore } from "@shared/core";
// import { useEffect, useMemo, useState } from "react";

// export const useAnzanGame = (config: AnzanConfig, playersCount: number) => {
//   const [games, setGames] = useState<AnzanCore[]>([]);

//   useEffect(() => {
//     setGames(
//       new Array(playersCount).fill(null).map(() => new AnzanCore(config))
//     );
//   }, [config, playersCount]);

//   const setPlayerConfig = (newConfig: AnzanConfig, playerIndex: number) => {
//     setGames((_games) => {
//       return _games.map((_game, idx) => {
//         if (idx === playerIndex) {
//           return new AnzanCore(newConfig);
//         } else {
//           return _game;
//         }
//       });
//     });
//   };

//   const isGamesSpeedsEquals = useMemo(() => {
//     for (let i = 1; i < games.length; i++) {
//       if (games[i - 1].config.speed !== games[i].config.speed) {
//         return false;
//       }
//     }
//     return true;
//   }, [games]);

//   return {
//     games,
//     setPlayerConfig,
//     isGamesSpeedsEquals,
//   };
// };

import { AnzanConfig, AnzanCore } from "@shared/core";
import { useEffect, useMemo, useState } from "react";

export const useAnzanGame = (config: AnzanConfig, playersCount: number) => {
  const [games, setGames] = useState<AnzanCore[]>([]);

  useEffect(() => {
    setGames((prevGames) => {
      const newGames = [...prevGames]; // Копируем старые игры

      // Если количество игроков увеличилось
      if (playersCount > prevGames.length) {
        const gamesToAdd = playersCount - prevGames.length; // Определяем, сколько новых игр нужно добавить
        for (let i = 0; i < gamesToAdd; i++) {
          newGames.push(new AnzanCore(config)); // Добавляем новые игры с дефолтным конфигом
        }
      } else if (playersCount < prevGames.length) {
        // Если количество игроков уменьшилось
        newGames.splice(playersCount); // Обрезаем массив до нового количества игроков
      }

      return newGames; // Возвращаем обновленный массив игр
    });
  }, [config, playersCount]); // Обновляем массив при изменении количества игроков или конфига

  // Функция для обновления конфига конкретного игрока
  const setPlayerConfig = (newConfig: AnzanConfig, playerIndex: number) => {
    setGames((prevGames) => {
      return prevGames.map((game, idx) => {
        if (idx === playerIndex) {
          return new AnzanCore(newConfig); // Обновляем конфиг конкретного игрока
        } else {
          return game; // Оставляем остальные игры без изменений
        }
      });
    });
  };

  // Функция для обновления конфигов всех игроков сразу
  const setAllConfigs = (newConfig: AnzanConfig) => {
    setGames((prevGames) => {
      return prevGames.map(() => new AnzanCore(newConfig)); // Обновляем конфиг для всех игр
    });
  };

  const isGamesSpeedsEquals = useMemo(() => {
    for (let i = 1; i < games.length; i++) {
      if (games[i - 1].config.speed !== games[i].config.speed) {
        return false; // Если скорости разных игр не совпадают
      }
    }
    return true; // Все скорости одинаковые
  }, [games]);

  return {
    games,
    setPlayerConfig,
    setAllConfigs, // Добавляем новую функцию для изменения всех конфигов
    isGamesSpeedsEquals,
  };
};
