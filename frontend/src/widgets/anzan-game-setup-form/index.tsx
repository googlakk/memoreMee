import { AnzanConfig, OPERATIONS } from "@shared/core";
import { Button, ButtonGroup } from "react-daisyui";
import { FC, useCallback, useState } from "react";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons";
import ModalSetting from "./ui-settings-modal";

const PLAYERS_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH = [1, 2, 3, 4, 5, 6];
const AnzanSettingForm: FC<{
  onSave: (settings: { config: AnzanConfig; playersCount: number }) => void;
  setStartBtnVisible: (t: boolean) => void;
}> = ({ onSave, setStartBtnVisible }) => {
  const [open, setOpen] = useState(false);
  const [playersCount, setPlayersCount] = useState(1);
  const clickListner = () => {
    setStartBtnVisible(true);
  };
  return (
    <div className="">
      <label
        className=""
        htmlFor="settingModal"
        onClick={() => setOpen(!false)}
      >
        <IconContext.Provider
          value={{ color: "black", className: "w-10 h-10" }}
        >
          <div className="btn">
            <FiSettings />
          </div>
        </IconContext.Provider>
      </label>
      <ModalSetting
        onSave={onSave}
        setStartBtnVisible={setStartBtnVisible}
        open={open}
        clickListner={clickListner}
      />
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
