import { FC, useCallback, useEffect, useState } from "react";

import { Button } from "react-daisyui";

const PLAYERS_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PlayersSettingForm: FC<{
  onSave: (settings: { playersCount?: number }) => void;
  defaultSettings: { playersCount: number };
}> = ({ onSave, defaultSettings }) => {
  const [playersCount, setPlayersCount] = useState(1);

  useEffect(() => {
    setPlayersCount(defaultSettings.playersCount);
  }, [defaultSettings]);

  const handleSavePlayersCount = useCallback(() => {
    onSave({ playersCount });
  }, [playersCount, onSave]);

  return (
    <div className="">
      <div className="flex flex-col items-center ">
        <h1 className="mb-5 text-base-100 font-arena text-5xl hidden lg:block xl:block">
          Количество игроков
        </h1>
        <h1 className="mb-5 text-base-100 font-arena text-3xl block lg:hidden xl:hidden">
          Начать тренировку
        </h1>

        <div className="grid grid-cols-3 grid-flow-row auto-cols-auto gap-3  w-96  ">
          {PLAYERS_COUNT.map((cnt) => (
            <Button
              key={cnt}
              className="card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#0284c7] glass text-base-100 hidden lg:block xl:block xl:text-3xl xl:w-[90%] xl:p-10  md:text-2xl md:p-6 md:w-24 sm:text-2xl sm:p-10 sm:w-24  l:p-10 l:w-32 l:text-3xl "
              active={playersCount === cnt}
              onClick={() => setPlayersCount(cnt)}
            >
              {cnt}
            </Button>
          ))}
          <div className="card glass  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mt-5 invisible bg-[#0fba6d] text-base-100 text-xl py-10 "></div>
          <Button
            onClick={handleSavePlayersCount}
            className="card text-center h-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#0fba6d] glass text-base-100 hidden lg:block xl:block xl:text-xl xl:w-[90%] xl:py-10 md:text-2xl md:p-6 md:w-24 sm:text-2xl sm:p-10 sm:w-24   l:w-32 l:text-xl "
          >
            <div>start</div>
          </Button>
          <div className="card glass  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mt-5 invisible bg-[#0fba6d] text-base-100 text-xl py-10 "></div>
        </div>
        <Button
          onClick={handleSavePlayersCount}
          className="mb-5 text-base-100 font-arena text-3xl block lg:hidden xl:hidden text-center h-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#0fba6d] glass  xl:text-xl xl:w-[90%] xl:py-10 md:text-2xl md:p-6 md:w-24 sm:text-2xl sm:p-10 sm:w-24   l:w-32 l:text-xl "
        >
          <div>start</div>
        </Button>
      </div>
    </div>
  );
};
export default PlayersSettingForm;
