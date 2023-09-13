import { FC, useState } from "react";

import { AnzanConfig } from "@shared/core";
import AnzanSettingForm from "@widgets/anzan-game-setup-form";
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
    [ANZAN_STEPS.PLAY]: (
      <div>
        {range(0, playersCount).map((playerIdx) => (
          <div>Anzan Game {playerIdx}</div>
        ))}
      </div>
    ),
  };

  return steps[step];
};

export default withMainLayout(Anzan);
