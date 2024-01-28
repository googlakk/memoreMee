import { FC, useState } from "react";
import { MultiConfig, MultiCore } from "@shared/core/games/multiplication";

import { MultiGameSettings } from "./steps/settings-modal/indxe";
import { MultiPreview } from "./steps/preview";
import MultiResult from "./steps/result";
import MultiTusk from "./steps/tusk";

export enum GAME_STEPS {
  PREVIEW,
  TUSKS,

  RESULT,
}

interface MultiplicationStepsProps {
  defaultConfig: MultiConfig;
  game: MultiCore;
  autostart?: number;
  playersCount: number;
  onChangeConfig: (config: MultiConfig) => void;
  autoAnswer?: number;
  setAutoAnser?: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}
const MultiplicationGame: FC<MultiplicationStepsProps> = ({
  index,
  game,
  playersCount,
  onChangeConfig,
}) => {
  const [step, setStep] = useState(GAME_STEPS.PREVIEW);
  const [userAnswer, setUserAnswer] = useState<number>(0);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [name, setName] = useState<string>(`Игрок`);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const handleTotalSecondsChange = (value: number) => {
    setTotalSeconds(value);
  };
  const steps = {
    [GAME_STEPS.PREVIEW]: (
      <MultiPreview
        onStart={() => setStep(GAME_STEPS.TUSKS)}
        onSettings={() => setIsOpenSettings(true)}
        name={name}
        setName={setName}
        setStep={setStep}
        playersCount={index + 1}
        game={game}
      />
    ),
    [GAME_STEPS.TUSKS]: (
      <MultiTusk
        setTotalSeconds={handleTotalSecondsChange}
        name={name}
        onAnswer={(answer) => {
          setUserAnswer(answer);
          setStep(GAME_STEPS.RESULT);
        }}
        playersCount={playersCount}
        game={game}
      />
    ),

    [GAME_STEPS.RESULT]: (
      <MultiResult
        onStart={() => setStep(GAME_STEPS.TUSKS)}
        onSettings={() => setIsOpenSettings(true)}
        userAnwer={userAnswer}
        name={name}
        game={game}
        playersCount={playersCount}
        setStep={setStep}
        setName={setName}
        totalSeconds={totalSeconds}
      />
    ),
  };

  return (
    <>
      {steps[step]}
      <MultiGameSettings
        playersCount={playersCount}
        open={isOpenSettings}
        onSave={(config) => {
          onChangeConfig(config);
          setIsOpenSettings(false);
        }}
        onCancel={() => {
          setIsOpenSettings(false);
        }}
        defaultSettings={game.config}
      />
    </>
  );
};
export default MultiplicationGame;
