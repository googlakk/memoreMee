import { AnzanConfig, AnzanCore } from "@shared/core";

import AnzanHeadSettingForm from "@widgets/anzan-headerSetting-modal";
import { Button } from "react-daisyui";
import { FC } from "react";

export interface ToolbarProps {
  onStartClick: () => void;
  onModalToggle: (isOpen: boolean) => void;
  onSettingsSave: (settings: {
    config: AnzanConfig;
    playersCount: number;
  }) => void;
  onOpenAnswersClick: () => void;
  setPlayerConfig: (config: AnzanConfig, idx: number) => void;
  playersCount: number;
  games: AnzanCore[];
  defaultConfig: AnzanConfig;
  setAllConfigs: (config: AnzanConfig) => void;
}
const AnzanGameNavbar: FC<ToolbarProps> = ({
  onStartClick,
  onSettingsSave,
  onOpenAnswersClick,
  onModalToggle,
  games,
  setPlayerConfig,
  defaultConfig,
  setAllConfigs
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
          <AnzanHeadSettingForm
            setAllConfigs={setAllConfigs}
            defaultConfig={defaultConfig}
            setPlayerConfig={setPlayerConfig}
            onModalToggle={onModalToggle}
            onSave={(settings) => {
              onSettingsSave({
                config: settings.config,
                playersCount: settings.playersCount,
              });
            }}
            games={games}
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

export default AnzanGameNavbar;
