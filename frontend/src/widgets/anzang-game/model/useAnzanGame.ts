import { AnzanConfig, AnzanCore } from "@shared/core";
import { useEffect, useMemo, useState } from "react";

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

  const isGamesSpeedsEquals = useMemo(() => {
    for (let i = 1; i < games.length; i++) {
      if (games[i - 1].config.speed !== games[i].config.speed) {
        return false;
      }
    }
    return true;
  }, [games]);

  return {
    games,
    setPlayerConfig,
    isGamesSpeedsEquals,
  };
};
