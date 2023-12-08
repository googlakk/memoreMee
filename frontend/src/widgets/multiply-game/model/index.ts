import { MultiConfig, MultiCore } from "@shared/core/games/multiplication";
import { useEffect, useState } from "react";

export const useMultiplyGame = (config: MultiConfig, playersCount: number) => {
  const [games, setGames] = useState<MultiCore[]>([]);

  useEffect(() => {
    setGames(
      new Array(playersCount).fill(null).map(() => new MultiCore(config))
    );
  }, [config, playersCount]);

  const setPlayerConfig = (newConfig: MultiConfig, playerIndex: number) => {
    setGames((_games) => {
      return _games.map((_game, idx) => {
        if (idx === playerIndex) {
          return new MultiCore(newConfig);
        } else {
          return _game;
        }
      });
    });
  };

  //   const gamesSpeeds = games.map(game => game.config.speed);

  //   const isGamesSpeedsEquals = Math.min(...gamesSpeeds) === Math.max(...gamesSpeeds)

  return {
    games,
    setPlayerConfig,
  };
};
