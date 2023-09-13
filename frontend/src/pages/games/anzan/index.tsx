import { AnzanConfig, AnzanCore } from "@shared/core";
import { FC, useState } from "react";

import { AnzanGame } from "@widgets/anzang-game/ui";
import AnzanSettingForm from "@widgets/anzan-game-setup-form";
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

  const steps = {
    [ANZAN_STEPS.SETUP]: (
      <AnzanSettingForm
        onSave={(settings) => {
          setConfig(settings.config);
          setPlayersCount(settings.playersCount);
          setStep(ANZAN_STEPS.PLAY);
        }}
      />
    ),
    [ANZAN_STEPS.PLAY]: config && (
      <MultiplayerGameGrid playersCount={playersCount}>
        {range(0, playersCount).map((playerIdx) => (
          <AnzanGame key={playerIdx} game={new AnzanCore(config)} />
        ))}
      </MultiplayerGameGrid>
    ),
  };

  return steps[step];
};

export default withMainLayout(Anzan);
