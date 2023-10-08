import { AnzanConfig, AnzanCore } from "@shared/core";
import { FC, useState } from "react";

import { AnzanGame } from "@widgets/anzang-game/ui";
import AnzanSettingForm from "@widgets/anzan-game-setup-form";
import { Button } from "react-daisyui";
import { MultiplayerGameGrid } from "@widgets/multiplayer-game-grid";
import { range } from "ramda";
import { withMainLayout } from "@app/hocs/withMainLayout";

enum ANZAN_STEPS {
  SETUP,
  PLAY,
}

const Anzan: FC = () => {
  const [step, setStep] = useState<ANZAN_STEPS>(ANZAN_STEPS.SETUP);

  const [config, setConfig] = useState<null | AnzanConfig>(null);

  const [playersCount, setPlayersCount] = useState(1);

  const [autoStart, setStart] = useState(0);
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
    [ANZAN_STEPS.PLAY]: config && (
      <MultiplayerGameGrid playersCount={playersCount}>
        {range(0, playersCount).map((playerIdx) => (
          <AnzanGame
            key={playerIdx}
            game={new AnzanCore(config)}
            autostart={autoStart}
            playersCount={playersCount}
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

      {steps[step]}
    </>
  );
};

export default withMainLayout(Anzan);
