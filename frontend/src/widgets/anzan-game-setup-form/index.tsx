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

const PLAYERS_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH = [1, 2, 3, 4, 5, 6];
const AnzanSettingForm: FC<{
  onSave: (settings: { config: AnzanConfig; playersCount: number }) => void;
  setStartBtnVisible: (t: boolean) => void;
}> = ({ onSave, setStartBtnVisible }) => {
  // Устонавливаем значение по умолчанию
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

  const clickListner = () => {
    setStartBtnVisible(true);
    handleSaveConfig();
  };

  return (
    <div className="">
      <label className="btn" htmlFor="settingsModal">
        Настройки
      </label>

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
      <div>
        <input type="checkbox" id="settingsModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-2 m-0 ">
            <div className="flex   flex-col items-center lg:gap-x-10 xl:gap-x-10 gap-x-2 ">
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
                <label htmlFor="settingsModal" className="btn">
                  Закрыть
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnzanSettingForm;
