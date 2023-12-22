import { AnzanConfig, OPERATIONS } from "@shared/core";
import AnzanGameNavbar, { ToolbarProps } from "@widgets/anzan-game-navbar";
import { FC, useState } from "react";

import { AnzanGame } from "@widgets/anzang-game/ui";
import AnzanSettingForm from "@widgets/anzan-game-setup-form";
import { MultiplayerGameGrid } from "@widgets/anzan-multiplayer-game-grid";
import { useAnzanGame } from "@widgets/anzang-game/model/useAnzanGame";
import { withMainLayout } from "@app/hocs/withMainLayout";

enum ANZAN_STEPS {
  SETUP,
  PLAY,
}

const defaultAnzanConfig: AnzanConfig = {
  numberDepth: 3,
  numbersCount: 5,
  operations: [OPERATIONS.MINUS, OPERATIONS.PLUS],
  speed: 1,
  usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  usedNumberMinus: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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

  const toolbarProps: ToolbarProps = {
    onStartClick: () => {
      setStart((i) => ++i);
    },
    onSettingsSave: (settings) => {
      setConfig(settings.config);
      setPlayersCount(settings.playersCount);
      setStep(ANZAN_STEPS.PLAY);
    },
    onOpenAnswersClick: () => {
      setAutoAnswer((i) => ++i);
    },
    config,
    playersCount,
  };

  const toolbarMarkup = <AnzanGameNavbar {...toolbarProps} />;

  const steps = {
    [ANZAN_STEPS.SETUP]: (
      <AnzanSettingForm
        onSave={(settings) => {
          if (settings.config) setConfig(settings.config);
          if (settings.playersCount) setPlayersCount(settings.playersCount);
          setStep(ANZAN_STEPS.PLAY);
        }}
        defaultSettings={{ config, playersCount }}
      />
    ),
    [ANZAN_STEPS.PLAY]: (
      <>
        {toolbarMarkup}
        <MultiplayerGameGrid playersCount={playersCount}>
          {games.map((game, idx) => (
            <AnzanGame
              key={idx}
              index={idx}
              isSpeedEquals={isGamesSpeedsEquals}
              game={game}
              autostart={autoStart}
              autoAnswer={autoVisibleAnswer}
              playersCount={playersCount}
              setAutoAnser={setAutoAnswer}
              onChangeConfig={(config) => {
                setPlayerConfig(config, idx);
              }}
            />
          ))}
        </MultiplayerGameGrid>
      </>
    ),
  };

  return <>{steps[step]}</>;
};

export default withMainLayout(Anzan);
