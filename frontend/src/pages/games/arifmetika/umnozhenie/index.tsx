import { FC, useState } from "react";
import { MultiConfig, OPERATIONS } from "@shared/core/games/multiplication";
import MultiplyGameNavbar, {
  ToolbarProps,
} from "@widgets/multiply-game-navbar";

import { MultiplayerGameGrid } from "@widgets/anzan-multiplayer-game-grid";
import MultiplicationGame from "@widgets/multiply-game/ui";
import PlayersSettingForm from "@widgets/anzan/anzan-game-setup-form";
import { compose } from "ramda";
import { useMultiplyGame } from "@widgets/multiply-game/model";
import { withMainLayout } from "@app/hocs/withMainLayout";

enum MULTIPLY_STEPS {
  SETUP,
  PLAY,
}

const defaultMultiplyConfig: MultiConfig = {
  operation: OPERATIONS.MULTIPLY,
  numberDepth1: 5,
  numberDepth2: 5,
  usedNumbers1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  usedNumbers2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
const Multiplication: FC = () => {
  const [step, setStep] = useState<MULTIPLY_STEPS>(MULTIPLY_STEPS.SETUP);
  const [config, setConfig] = useState<MultiConfig>(defaultMultiplyConfig);
  const [playersCount, setPlayersCount] = useState(1);

  const [autoStart, setStart] = useState(0);
  const [autoVisibleAnswer, setAutoAnswer] = useState(0);
  const { games, setPlayerConfig } = useMultiplyGame(config, playersCount);
  const toolbarProps: ToolbarProps = {
    onStartClick: () => {
      setStart((i) => i++);
    },
    onSettingsSave: (settings) => {
      setConfig(settings.config);
      setPlayersCount(settings.playersCount);
      setStep(MULTIPLY_STEPS.PLAY);
    },
    onOpenAnswersClick: () => {
      setAutoAnswer((i) => ++i);
    },
    config,
    playersCount,
  };

  const toolbarMarkup = <MultiplyGameNavbar {...toolbarProps} />;

  const steps = {
    [MULTIPLY_STEPS.SETUP]: (
      <PlayersSettingForm
        onSave={(settings) => {
          if (settings.playersCount) setPlayersCount(settings.playersCount);
          setStep(MULTIPLY_STEPS.PLAY);
        }}
        defaultSettings={{ playersCount }}
      />
    ),
    [MULTIPLY_STEPS.PLAY]: (
      <>
        {toolbarMarkup}
        <MultiplayerGameGrid playersCount={playersCount}>
          {games.map((game, idx) => (
            <MultiplicationGame
              key={idx}
              game={game}
              index={idx}
              playersCount={playersCount}
              autostart={autoStart}
              autoAnswer={autoVisibleAnswer}
              setAutoAnser={setAutoAnswer}
              onChangeConfig={(config) => {
                setPlayerConfig(config, idx);
              }}
              defaultConfig={config}
            />
          ))}
        </MultiplayerGameGrid>
      </>
    ),
  };

  return <>{steps[step]}</>;
};
export default compose(withMainLayout)(Multiplication);
