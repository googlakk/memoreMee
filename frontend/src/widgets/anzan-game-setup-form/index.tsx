import { AnzanConfig, OPERATIONS } from "@shared/core";
import { FC, useCallback, useState } from "react";

import { Button } from "react-daisyui";

const PLAYERS_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const AnzanSettingForm: FC<{
  onSave: (settings: { config: AnzanConfig; playersCount: number }) => void;
  setStartBtnVisible: (t: boolean) => void;
}> = ({ onSave, setStartBtnVisible }) => {
  // Устонавливаем значение по умолчанию
  const [config] = useState<AnzanConfig>({
    operations: [OPERATIONS.PLUS],
    numberDepth: 1,
    usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    speed: 1,
    numbersCount: 5,
  });
  const [playersCount, setPlayersCount] = useState(1);

  // Слущаетли событий
  // const handleChangeSpeed = (speed: number) => {
  //   setConfig((prevConfig) => ({ ...prevConfig, speed }));
  // };
  // const handleChangeNumsCount = (numbersCount: number) => {
  //   setConfig((prevConfig) => ({ ...prevConfig, numbersCount }));
  // };
  // const handleChangeUsedNumbers = (number: number) => {
  //   setConfig((prevConfig) => ({
  //     ...prevConfig,
  //     usedNumber: prevConfig.usedNumber.includes(number)
  //       ? prevConfig.usedNumber.filter((num) => num !== number)
  //       : [...prevConfig.usedNumber, number],
  //   }));
  // };
  // const handleChangeNumberDepth = (number: number) => {
  //   setConfig((prevConfig) => ({
  //     ...prevConfig,
  //     numberDepth: number,
  //   }));
  // };
  // const handleChangeOperation = (operations: AnzanConfig["operations"]) => {
  //   setConfig((prevConfig) => ({
  //     ...prevConfig,
  //     operations: operations,
  //   }));
  // };
  const handleSaveConfig = useCallback(() => {
    onSave({ config, playersCount });
  }, [onSave, config, playersCount]);

  const clickListner = () => {
    setStartBtnVisible(true);
    handleSaveConfig();
    window.localStorage.setItem("myGame", "");
  };

  return (
    <div className="">
      <div className="flex flex-col items-center ">
        <h1 className="mb-5 text-base-100 font-arena text-7xl hidden lg:block xl:block">
          Количество игроков
        </h1>
        <h1 className="mb-5 text-base-100 font-arena text-3xl block lg:hidden xl:hidden">
          Начать тренировку
        </h1>
        <div className="grid grid-cols-3 grid-flow-row  gap-8 w-96   ">
          {PLAYERS_COUNT.map((cnt) => (
            <Button
              key={cnt}
              className="card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#0284c7] glass text-base-100 hidden lg:block xl:block xl:text-4xl xl:p-10 xl:w-32 md:text-2xl md:p-6 md:w-24 sm:text-2xl sm:p-10 sm:w-24  l:p-10 l:w-32 l:text-3xl "
              active={playersCount === cnt}
              onClick={() => setPlayersCount(cnt)}
            >
              {cnt}
            </Button>
          ))}
        </div>
        <Button
          className="card glass shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mt-5 ml-5  w-32 bg-[#0fba6d] text-base-100 text-xl py-10 "
          onClick={clickListner}
        >
          Начать
        </Button>
      </div>
    </div>
  );
};
export default AnzanSettingForm;
