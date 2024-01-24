import { Button } from "react-daisyui";
import { FC } from "react";
import { MultiConfig } from "@shared/core/games/multiplication";
import MultiplyHeaderSettingForm from "@widgets/multiply-headerSettings";

export interface ToolbarProps {
  onStartClick: () => void;
  onSettingsSave: (settings: {
    config: MultiConfig;
    playersCount: number;
  }) => void;
  onOpenAnswersClick: () => void;
  config: MultiConfig;
  playersCount: number;
}
const MultiplyGameNavbar: FC<ToolbarProps> = ({
  onStartClick,
  onSettingsSave,
  onOpenAnswersClick,
  config,
  playersCount,
}) => {
  return (
    <>
      <div className="flex justify-between my-[10%] invisible l:visible l:my-0 lg:visible xl:visible lg:my-0 xl:my-0 lg:mt-5 xl:mt-5 px-3">
        <Button
          className={`mb-3 bg-transparent  text-base-100 hover:text-neutral-900 text-xs`}
          onClick={onStartClick}
        >
          Начать всем
        </Button>
        <div
          className={`w-5  bg-transparent text-base-100 hover:text-neutral-900 text-xs `}
        >
          <MultiplyHeaderSettingForm
            onSave={(settings) => {
              onSettingsSave({
                config: settings.config,
                playersCount: settings.playersCount,
              });
            }}
            defaultSettings={{ config, playersCount }}
          />
        </div>

        <Button
          className={`mb-3  bg-transparent text-base-100 hover:text-neutral-900 text-xs `}
          onClick={onOpenAnswersClick}
        >
          Открыть все ответы
        </Button>
      </div>
    </>
  );
};

export default MultiplyGameNavbar;
