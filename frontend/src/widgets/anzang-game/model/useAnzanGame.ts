import { AnzanConfig, AnzanCore } from "@shared/core";
import { useEffect, useState } from "react";

export const useAnzanGame = (config: AnzanConfig, playersCount: number) => {
  const [games, setGames] = useState<AnzanCore[]>([]);

  useEffect(() => {
    setGames(
      new Array(playersCount).fill(null).map(() => new AnzanCore(config))
    );
  }, [config, playersCount]);

  const setPlayerConfig = (newConfig: AnzanConfig, playerIndex: number) => {
    setGames((_games) => {
      return _games.map((_game, idx) => {
        if (idx === playerIndex) {
          return new AnzanCore(newConfig);
        } else {
          return _game;
        }
      });
    });
  };

  //   const gamesSpeeds = games.map(game => game.config.speed);

  //   const isGamesSpeedsEquals = Math.min(...gamesSpeeds) === Math.max(...gamesSpeeds)

  let isGamesSpeedsEquals = true;

  for (let i = 1; i < games.length; i++) {
    if (games[i - 1].config.speed !== games[i].config.speed) {
      isGamesSpeedsEquals = false;
    }
  }

  return {
    games,
    setPlayerConfig,
    isGamesSpeedsEquals,
  };
};
