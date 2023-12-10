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

import { FaCheck } from "react-icons/fa6";

const PLAYERS_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH = [1, 2, 3, 4, 5, 6];
const ModalSetting: FC<{
  open: boolean;
  onSave: (settings: { config: AnzanConfig; playersCount: number }) => void;
  setStartBtnVisible: (t: boolean) => void;
  clickListner: () => void;
}> = ({ open, onSave, setStartBtnVisible, clickListner }) => {
  const [config, setConfig] = useState<AnzanConfig>({
    operations: [OPERATIONS.PLUS],
    numberDepth: 1,
    usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    speed: 1,
    numbersCount: 5,
  });
  const [playersCount, setPlayersCount] = useState(1);

  const handleChangeSpeed = (speed: number) => {
    setConfig((prevConfig) => ({ ...prevConfig, speed }));
  };
  const handleChangeNumsCount = (numbersCount: number) => {
    setConfig((prevConfig) => ({ ...prevConfig, numbersCount }));
  };
  const handleChangeUsedNumbers = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumber: prevConfig.usedNumber.includes(number)
        ? prevConfig.usedNumber.filter((num) => num !== number)
        : [...prevConfig.usedNumber, number],
    }));
  };
  const handleToggleAllNumbers = () => {
    // Если все числа уже активны, деактивируем их; иначе активируем все
    const allNumbersActive = config.usedNumber.length === USED_NUMBERS.length;
    const newUsedNumbers = allNumbersActive ? [] : [...USED_NUMBERS];
    setConfig({ ...config, usedNumber: newUsedNumbers });
  };
  const handleChangeNumberDepth = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numberDepth: number,
    }));
  };
  const handleChangeOperation = (operations: AnzanConfig["operations"]) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      operations: operations,
    }));
  };
  const handleSaveConfig = useCallback(() => {
    onSave({ config, playersCount });
  }, [onSave, config, playersCount]);

  clickListner = () => {
    setStartBtnVisible(true);
    handleSaveConfig();
  };
  return (
    <>
      <div className="">
        <input
          type="checkbox"
          id="settingModal"
          className="modal-toggle"
          checked={open}
        />
        <div className="modal ">
          <div className="modal-box p-2 m-0 ">
            <div className="flex px-5  flex-col items-center lg:gap-x-10 xl:gap-x-10 gap-x-2 ">
              <div className="w-full my-3 flex flex-col lg:flex-row xl:flex-row justify-between items-center">
                <h1 className=" text-l font-medium lg:mr-10 xl:mr-10 mr-0">
                  Выберите действие
                </h1>
                <ButtonGroup className="flex justify-center">
                  <Button
                    type="button"
                    className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                    onClick={() => handleChangeOperation([OPERATIONS.PLUS])}
                    active={
                      config.operations.length === 1 &&
                      config.operations[0] === OPERATIONS.PLUS
                    }
                  >
                    +
                  </Button>
                  <Button
                    type="button"
                    className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                    active={
                      config.operations.length === 1 &&
                      config.operations[0] === OPERATIONS.MINUS
                    }
                    onClick={() => handleChangeOperation([OPERATIONS.MINUS])}
                  >
                    -
                  </Button>
                  <Button
                    type="button"
                    className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                    active={config.operations.length === 2}
                    onClick={() =>
                      handleChangeOperation([OPERATIONS.PLUS, OPERATIONS.MINUS])
                    }
                  >
                    + | -
                  </Button>
                </ButtonGroup>
              </div>
              <div className="my-3 w-full flex flex-col lg:flex-row xl:flex-row justify-between items-center">
                <h1 className=" text-l font-medium lg:mr-10 xl:mr-10 mr-0">
                  Используемые числа
                </h1>
                <div className="flex flex-wrap justify-center gap-x-2 lg:gap-y-2">
                  {USED_NUMBERS.map((num) => (
                    <Button
                      type="button"
                      className={`${
                        config.usedNumber.includes(num)
                          ? "bg-primary text-base-100"
                          : " text-neutral-900"
                      } `}
                      key={num}
                      onClick={() => handleChangeUsedNumbers(num)}
                      active={config.usedNumber.includes(num)}
                    >
                      {num}
                    </Button>
                  ))}
                  <Button type="button" onClick={handleToggleAllNumbers}>
                    <FaCheck />
                  </Button>
                </div>
              </div>
              <div className="my-3 w-full flex flex-col lg:flex-row xl:flex-row justify-between items-center">
                <h1 className=" text-l font-medium lg:mr-10 xl:mr-10 mr-0">
                  Кол-во игроков
                </h1>
                <div className="flex flex-wrap justify-center gap-x-2 lg:gap-y-2">
                  {PLAYERS_COUNT.map((cnt) => (
                    <Button
                      type="button"
                      key={cnt}
                      active={playersCount === cnt}
                      onClick={() => setPlayersCount(cnt)}
                      className={`${
                        playersCount === cnt
                          ? "bg-primary text-base-100"
                          : " text-neutral-900"
                      }`}
                    >
                      {cnt}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="my-3 w-full flex flex-col lg:flex-row xl:flex-row justify-between items-center">
                <h1 className="text-l font-medium lg:mr-10 xl:mr-10 mr-0 ">
                  Разрядность чисел
                </h1>
                <ButtonGroup>
                  {DEPTH.map((depth) => (
                    <Button
                      type="button"
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      key={depth}
                      onClick={() => handleChangeNumberDepth(depth)}
                      active={config.numberDepth === depth}
                    >
                      {depth}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>
              <div className="my-3 w-full flex flex-col lg:flex-row xl:flex-row justify-between items-center">
                <h1 className="text-l font-medium lg:mr-10 xl:mr-10 mr-0">
                  Скорость
                </h1>
                <NumberInput
                  className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  onChange={(_, value) => handleChangeSpeed(value)}
                  defaultValue={config.speed}
                  step={0.1}
                  clampValueOnBlur={false}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
              <div className="my-3  w-full flex flex-col lg:flex-row xl:flex-row justify-between items-center">
                <h1 className=" text-l font-medium lg:mr-10 xl:mr-10 mr-0  ">
                  Количество действий
                </h1>
                <NumberInput
                  className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  onChange={(_, value) => handleChangeNumsCount(value)}
                  defaultValue={config.numbersCount}
                  clampValueOnBlur={false}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>

              <div className="modal-action">
                <label
                  htmlFor="settingsModal"
                  className="btn"
                  onClick={clickListner}
                >
                  Применить
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSetting;
