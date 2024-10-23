// usePlayerConfigs.ts
import { useEffect, useState } from "react";

import { AnzanConfig } from "@shared/core";

export const usePlayerConfigs = (defaultConfig: AnzanConfig, initialCount: number) => {
  const [configs, setConfigs] = useState<AnzanConfig[]>(Array(initialCount).fill(defaultConfig));
  const [playersCount, setPlayersCount] = useState(initialCount);

  useEffect(() => {
    setConfigs(Array(playersCount).fill(defaultConfig));
  }, [defaultConfig, playersCount]);

  const updateConfigAtIndex = (index: number, newConfig: Partial<AnzanConfig>) => {
    setConfigs((prevConfigs) => {
      const updatedConfigs = [...prevConfigs];
      updatedConfigs[index] = { ...updatedConfigs[index], ...newConfig };
      return updatedConfigs;
    });
  };

  const handlePlayerIncrement = () => {
    setPlayersCount((prevCount) => Math.min(prevCount + 1, 10));
    setConfigs((prevConfigs) => [...prevConfigs, defaultConfig]);
  };



  return {
    configs,
    playersCount,
    updateConfigAtIndex,
    handlePlayerIncrement,
   
  };
};
