import { AnzanConfig, AnzanCore, OPERATIONS } from "@shared/core";
import { FC, useState } from "react";

import { AnzanGame } from "@widgets/anzang-game/ui";
import AnzanSettingForm from "@widgets/anzan-game-setup-form";
import { Button } from "react-daisyui";
import { MultiplayerGameGrid } from "@widgets/multiplayer-game-grid";
import { range } from "ramda";
import { useAnzanGame } from "@widgets/anzang-game/model/useAnzanGame";
import { withMainLayout } from "@app/hocs/withMainLayout";

enum ANZAN_STEPS {
  SETUP,
  PLAY,
}

const defaultAnzanConfig: AnzanConfig = {
  numberDepth: 1,
  numbersCount: 5,
  operations: [OPERATIONS.MINUS, OPERATIONS.PLUS],
  speed: 1,
  usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

const Anzan: FC = () => {
  const [step, setStep] = useState<ANZAN_STEPS>(ANZAN_STEPS.SETUP);

  const [config, setConfig] = useState<AnzanConfig>(defaultAnzanConfig);
  const [playersCount, setPlayersCount] = useState(1);
  const { games, setPlayerConfig, isGamesSpeedsEquals } = useAnzanGame(
    config,
    playersCount
  );

  const [autoStart, setStart] = useState(0);
  const [autoVisibleAnswer, setAutoAnswer] = useState(0);
  const [startBtnVisible, setBtnVisible] = useState(false);

  const steps = {
    [ANZAN_STEPS.SETUP]: (
      <AnzanSettingForm
        onSave={(settings) => {
          setConfig(settings.config);
          setPlayersCount(settings.playersCount);
          setStep(ANZAN_STEPS.PLAY);
        }}
        setStartBtnVisible={setBtnVisible}
      />
    ),
    [ANZAN_STEPS.PLAY]: (
      <MultiplayerGameGrid playersCount={playersCount}>
        {games.map((game, idx) => (
          <AnzanGame
            key={idx}
            isSpeedEquals={isGamesSpeedsEquals}
            game={game}
            autostart={autoStart}
            autoAnswer={autoVisibleAnswer}
            playersCount={playersCount}
            onChangeConfig={(config) => {
              setPlayerConfig(config, idx);
            }}
          />
        ))}
      </MultiplayerGameGrid>
    ),
  };

  return (
    <>
      <Button
        className={`${startBtnVisible ? "" : "hidden"} mb-3`}
        onClick={() => {
          setStart((i) => ++i);
        }}
      >
        Начать всем
      </Button>
      <Button
        className={`${startBtnVisible ? "" : "hidden"} mb-3`}
        onClick={() => {
          setAutoAnswer((i) => ++i);
        }}
      >
        Открыть все ответы
      </Button>
      {steps[step]}
    </>
  );
};

export default withMainLayout(Anzan);
