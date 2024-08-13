import { FC, useCallback, useEffect, useState } from "react";

import { Button } from "react-daisyui";
import btnStart from "@assets/newImg/Button-START.png";

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
    <div className=" w-full min-h-screen flex items-center justify-center bg-anzanGameBg bg-cover bg-no-repeat bg-center">
      <Button
        onClick={handleSavePlayersCount}
        className=" bg-transparent border-none w-60 hover:bg-transparent "
      >
        <img src={btnStart} alt="" />
      </Button>

      <Button
        onClick={handleSavePlayersCount}
        className="mb-5 text-base-100 font-arena text-3xl block lg:hidden xl:hidden text-center h-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#0fba6d] glass  xl:text-xl xl:w-[90%] xl:py-10 md:text-2xl md:p-6 md:w-24 sm:text-2xl sm:p-10 sm:w-24   l:w-32 l:text-xl "
      >
        <div>start</div>
      </Button>
    </div>
  );
};
export default PlayersSettingForm;
