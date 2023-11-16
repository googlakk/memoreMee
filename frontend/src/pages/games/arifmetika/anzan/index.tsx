import { AnzanConfig, OPERATIONS } from "@shared/core";
import React, { FC, useEffect, useRef, useState } from "react";

import { AnzanGame } from "@widgets/anzang-game/ui";
import AnzanSettingForm from "@widgets/anzan-game-setup-form";
import { Button } from "react-daisyui";
import { ENTER_STATE } from "@app/providers/withActiveComponentProvider";
import { MultiplayerGameGrid } from "@widgets/multiplayer-game-grid";
import { useActiveComponent } from "@app/hooks";
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
type RefType = React.MutableRefObject<HTMLDivElement | null>;
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
  const { activeComponent, setActiveComponent } = useActiveComponent();
  useEffect(() => {
    const handleEnterClick = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        setActiveComponent(ENTER_STATE.START);
      }
    };
  }, []);
  const elementRef2: RefType = useRef<HTMLDivElement>(null);

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
      <div
        ref={elementRef2}
        className="flex justify-between my-[10%] invisible l:visible l:my-0 lg:visible xl:visible lg:my-0 xl:my-0 lg:mt-5 xl:mt-5"
      >
        <Button
          className={`${
            startBtnVisible ? "" : "hidden"
          }  mb-3 bg-transparent  text-base-100 hover:text-neutral-900 text-xs`}
          onClick={() => {
            setStart((i) => ++i);
          }}
        >
          Начать всем
        </Button>

        <Button
          className={`${
            startBtnVisible ? "" : "hidden"
          } mb-3  bg-transparent text-base-100 hover:text-neutral-900 text-xs `}
          onClick={() => {
            setAutoAnswer((i) => ++i);
          }}
        >
          Открыть все ответы
        </Button>
      </div>
      {steps[step]}
    </>
  );
};

export default withMainLayout(Anzan);
