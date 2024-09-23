import { AnzanConfig, OPERATIONS } from "@shared/core";
import { FC, useCallback, useEffect, useState } from "react";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { Button } from "react-daisyui";
import { FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons";
import anzanLogo from "@assets/newImg/Button-Anzan.png";

const PLAYERS_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const USED_NUMBERS_MINUS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBERS_PLUS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DEPTH_PLUS = [1, 2, 3, 4, 5, 6];
const DEPTH_MINUS = [1, 2, 3, 4, 5, 6];
export interface nzanHeadSettingFormProps {
  onSave: () => {};
  defaultSettings: {};
  onModalToggle: (isOpen: boolean) => void;
}
const AnzanHeadSettingForm: FC<{
  onSave: (settings: { config: AnzanConfig; playersCount: number }) => void;
  defaultSettings: { config: AnzanConfig; playersCount: number };
  onModalToggle: (isOpen: boolean) => void;
}> = ({ onSave, defaultSettings, onModalToggle }) => {
  // Устонавливаем значение по умолчанию
  const [config, setConfig] = useState<AnzanConfig>(defaultSettings.config);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [playersCount, setPlayersCount] = useState(
    defaultSettings.playersCount
  );

  useEffect(() => {
    setConfig(defaultSettings.config);
    setPlayersCount(defaultSettings.playersCount);
  }, [defaultSettings, setConfig]);

  useEffect(() => {
    onSave({ config, playersCount });
  }, [config, playersCount, onSave]);

  const handlePlayerIncrement = () => {
    setPlayersCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount <= 10) {
        return newCount;
      } else {
        return prevCount;
      }
    });
  };

  const handlePLayerDiccrement = () => {
    setPlayersCount((prevCount) => {
      const newCount = prevCount - 1;

      if (newCount >= 1) {
        return newCount;
      } else {
        return prevCount;
      }
    });
  };
  const handleSpeedIncrement = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      speed: Math.round((prevConfig.speed + 0.1) * 10) / 10,
    }));
  };

  const handleSpeedDecrement = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      speed: Math.max(Math.round((prevConfig.speed - 0.1) * 10) / 10, 0.1),
    }));
  };

  const handleNumbersCountIncrement = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numbersCount: prevConfig.numbersCount + 1 + 1,
    }));
    handleSaveConfig();
  };

  const handleNumbersCountDecrement = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numbersCount: Math.max(prevConfig.numbersCount - 1, 1),
    }));
    handleSaveConfig();
  };

  const handleChangeSpeed = (speed: number) => {
    setConfig((prevConfig) => ({ ...prevConfig, speed }));
  };
  const handleChangeNumsCount = (numbersCount: number) => {
    setConfig((prevConfig) => ({ ...prevConfig, numbersCount }));
  };

  const handleChangeUsedNumbersPlus = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumberPlus: prevConfig.usedNumberPlus.includes(number)
        ? prevConfig.usedNumberPlus.filter((num) => num !== number)
        : [...prevConfig.usedNumberPlus, number],
    }));
  };
  const handleChangeUsedNumbersMinus = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumberMinus: prevConfig.usedNumberMinus.includes(number)
        ? prevConfig.usedNumberMinus.filter((num) => num !== number)
        : [...prevConfig.usedNumberMinus, number],
    }));
  };
  const handleToggleAllNumbersPlus = () => {
    // Если все числа уже активны, деактивируем их; иначе активируем все
    const allNumbersActive =
      config.usedNumberPlus.length === USED_NUMBERS_PLUS.length;
    const newUsedNumbers = allNumbersActive ? [] : [...USED_NUMBERS_PLUS];
    setConfig({ ...config, usedNumberPlus: newUsedNumbers });
  };
  const handleToggleAllNumbersMinus = () => {
    // Если все числа уже активны, деактивируем их; иначе активируем все
    const allNumbersActive =
      config.usedNumberMinus.length === USED_NUMBERS_MINUS.length;
    const newUsedNumbers = allNumbersActive ? [] : [...USED_NUMBERS_MINUS];
    setConfig({ ...config, usedNumberMinus: newUsedNumbers });
  };

  const handleChangeNumberDepthPlus = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numberDepthPlus: number,
    }));
  };
  const handleChangeNumberDepthMinus = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numberDepthMinus: number,
    }));
  };
  const handleChangeOperation = (operations: AnzanConfig["operations"]) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      operations: operations,
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    onModalToggle(true); // Pass true when opening the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onModalToggle(false); // Pass false when closing the modal
  };

  const handleSaveConfig = useCallback(() => {
    onSave({ config, playersCount });
    handleCloseModal();
  }, [onSave, config, playersCount]);

  return (
    <>
      <div className="flex">
        <label className="" htmlFor="settingsModal">
          <IconContext.Provider
            value={{ color: "black", className: "w-10 h-10" }}
          >
            <div className="btn" onClick={handleOpenModal}>
              <FiSettings />
            </div>
          </IconContext.Provider>
        </label>
        <div className="join mx-2 relative text-center">
          <div onClick={handlePLayerDiccrement} className="join-item btn">
            «
          </div>
          <div className="absolute text-base-100 z-20  -top-4 w-full">
            Кол-во игроков
          </div>
          <div className="join-item btn">{playersCount}</div>
          <div onClick={handlePlayerIncrement} className="join-item btn">
            »
          </div>
        </div>

        <div className="join mx-2 relative text-center">
          <div onClick={handleNumbersCountDecrement} className=" join-item btn">
            «
          </div>
          <div className="absolute text-base-100 z-20 w-full -top-4">
            Кол-во действий
          </div>
          <div className=" join-item btn">{config.numbersCount}</div>
          <div onClick={handleNumbersCountIncrement} className=" join-item btn">
            »
          </div>
        </div>
        <div className="join mx-2 relative text-center">
          <div onClick={handleSpeedDecrement} className=" join-item btn">
            «
          </div>
          <div className="absolute text-base-100 z-20 w-full -top-4">
            Скорость
          </div>
          <div className=" join-item btn">{config.speed}</div>
          <div onClick={handleSpeedIncrement} className=" join-item btn">
            »
          </div>
        </div>

        <input
          type="checkbox"
          id="settingsModal"
          className="modal-toggle"
          checked={isModalOpen} // Use isModalOpen
          onChange={() => {}} //
        />
        <div className="modal  ">
          <div
            className=" absolute w-[1500px] h-[700px]  bg-dialogBg bg-center  bg-no-repeat  p-0 m-0  flex flex-col items-center justify-center min-l:w-[600px]"
            style={{ backgroundSize: "" }}
          >
            <div className="modal-action absolute -top-2 w-56">
              <img src={anzanLogo} alt="" />
            </div>
            <div className="flex px-5  flex-col items-center lg:gap-x-10 xl:gap-x-10 gap-x-2 ">
              <div className=" flex justify-around w-full gap-x-16 mb-14">
                {/*  1 block */}
                <div className="flex flex-col items-center w-[260px]">
                  <div className=" w-full h-36 flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className=" bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className=" text-l font-bold text-[#ffff]  mr-0 ">
                        Выберите действие
                      </h1>
                    </div>
                    <div>
                      <Button
                        type="button"
                        className=" bg-transparent border-none p-0 w-20 text-xl  hover:bg-transparent "
                        onClick={() => handleChangeOperation([OPERATIONS.PLUS])}
                        active={
                          config.operations.length === 1 &&
                          config.operations[0] === OPERATIONS.PLUS
                        }
                      >
                        <div className=" w-full pb-1 bg-btnWideBg bg-contain bg-center bg-no-repeat ">
                          +
                        </div>
                      </Button>
                      <Button
                        type="button"
                        className=" bg-transparent border-none p-0 w-20 text-xl  hover:bg-transparent "
                        active={
                          config.operations.length === 1 &&
                          config.operations[0] === OPERATIONS.MINUS
                        }
                        onClick={() =>
                          handleChangeOperation([OPERATIONS.MINUS])
                        }
                      >
                        <div className="w-full pb-1 bg-btnWideBg bg-contain bg-center bg-no-repeat">
                          -
                        </div>
                      </Button>
                      <Button
                        type="button"
                        className=" bg-transparent border-none p-0 w-20 text-xl  hover:bg-transparent "
                        active={config.operations.length === 2}
                        onClick={() =>
                          handleChangeOperation([
                            OPERATIONS.PLUS,
                            OPERATIONS.MINUS,
                          ])
                        }
                      >
                        <div className="w-full pb-1 bg-btnWideBg bg-contain bg-center bg-no-repeat">
                          + | -
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                {/*  2 block */}

                <div className="flex flex-col items-center w-[260px]">
                  <div className="w-full h-36  flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className="bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className=" text-l font-medium ">
                        Используемые числа (+)
                      </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-y-3 ">
                      {USED_NUMBERS_PLUS &&
                        USED_NUMBERS_PLUS.map((num) => (
                          <button
                            type="button"
                            className={`flex items-start max-h-5 h-fit bg-transparent border-none p-0  w-11 m-0  hover:bg-transparent disabled:bg-transparent ${
                              config.usedNumberPlus.includes(num)
                                ? "text-base-100"
                                : " text-neutral-900"
                            } `}
                            key={num}
                            onClick={() => handleChangeUsedNumbersPlus(num)}
                          >
                            <div className=" w-11 py-1 bg-btnSettingBg bg-contain bg-center bg-no-repeat text-sm">
                              {num}
                            </div>
                          </button>
                        ))}
                      <button
                        className=" bg-transparent   flex items-start border-none p-0 h-fit w-12 m-0 gap-0 hover:bg-transparent "
                        type="button"
                        onClick={handleToggleAllNumbersPlus}
                      >
                        <div className=" w-full py-1 bg-btnSettingBg bg-contain bg-center text-center bg-no-repeat text-sm">
                          all
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {/*  3 block */}
                <div className="flex flex-col items-center w-[260px]">
                  <div className="w-full h-36 flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className="bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className=" text-l font-medium ">
                        Используемые числа (-)
                      </h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-y-3 ">
                      {USED_NUMBERS_MINUS &&
                        USED_NUMBERS_MINUS.map((num) => (
                          <button
                            type="button"
                            className={`flex items-start max-h-5 h-fit bg-transparent border-none p-0  w-11 m-0  hover:bg-transparent disabled:bg-transparent ${
                              config.usedNumberMinus.includes(num)
                                ? "text-base-100"
                                : " text-neutral-900"
                            } `}
                            key={num}
                            onClick={() => handleChangeUsedNumbersMinus(num)}
                          >
                            <div className=" w-11 py-1 bg-btnSettingBg bg-contain bg-center bg-no-repeat text-sm">
                              {num}
                            </div>
                          </button>
                        ))}
                      <Button
                        className=" bg-transparent flex items-start border-none p-0 h-3 w-12 m-0 gap-0 hover:bg-transparent "
                        type="button"
                        onClick={handleToggleAllNumbersMinus}
                      >
                        <div className=" w-full py-1 bg-btnSettingBg bg-contain bg-center text-center bg-no-repeat text-sm">
                          _+
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                {/*  4 block */}
                <div className="flex flex-col items-center w-[260px]">
                  <div className="w-full h-36  flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className="bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className=" text-l font-medium ">
                        Количество игроков
                      </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-y-3">
                      {PLAYERS_COUNT.map((cnt) => (
                        <button
                          type="button"
                          key={cnt}
                          onClick={() => setPlayersCount(cnt)}
                          className={` flex items-start max-h-5  bg-transparent border-none p-0  w-11 m-0  hover:bg-transparent ${
                            playersCount === cnt
                              ? "text-base-100"
                              : " text-neutral-900"
                          }`}
                        >
                          <div className=" w-full py-1 bg-btnSettingBg bg-contain bg-center text-center bg-no-repeat text-sm">
                            {cnt}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/*  2 row */}

              <div className=" flex w-full gap-x-16">
                {/*  1 block */}
                <div className="flex flex-col items-center w-[260px]">
                  <div className="w-full h-36  flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className="bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className="text-l font-medium  ">
                        Разрядность чисел (+)
                      </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-y-3">
                      {DEPTH_PLUS.map((depth) => (
                        <button
                          type="button"
                          className={` flex items-start max-h-5  bg-transparent border-none p-0  w-11 m-0  hover:bg-transparent ${
                            config.numberDepthPlus === depth
                              ? `text-base-100`
                              : `text-neutral-700`
                          }`}
                          key={depth}
                          onClick={() => handleChangeNumberDepthPlus(depth)}
                        >
                          <div className=" w-full py-1 bg-btnSettingBg bg-contain bg-center text-center bg-no-repeat text-sm">
                            {depth}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {/*  2 block */}
                <div className="flex flex-col items-center w-[260px]">
                  <div className="w-full h-36  flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className="bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className="text-l font-medium  ">
                        Разрядность чисел (-)
                      </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-y-3">
                      {DEPTH_MINUS.map((depth) => (
                        <button
                          type="button"
                          className={` flex items-start max-h-5  bg-transparent border-none p-0  w-11 m-0  hover:bg-transparent ${
                            config.numberDepthMinus === depth
                              ? `text-base-100`
                              : `text-neutral-900`
                          }`}
                          key={depth}
                          onClick={() => handleChangeNumberDepthMinus(depth)}
                        >
                          <div className=" w-full py-1 bg-btnSettingBg bg-contain bg-center text-center bg-no-repeat text-sm">
                            {depth}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/*  3 block */}
                <div className="flex flex-col items-center w-[260px]">
                  <div className="w-full h-36  flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className="bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className="text-l font-medium ">Скорость</h1>
                    </div>
                    <div>
                      <NumberInput
                        className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                        onChange={(_, value) => handleChangeSpeed(value)}
                        defaultValue={config.speed}
                        step={0.1}
                        clampValueOnBlur={false}
                        key={config.speed}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </div>
                  </div>
                </div>
                {/*  4 block */}
                <div className="flex flex-col items-center w-[260px]">
                  <div className="w-full h-36  flex flex-col row items-center px-2 bg-miniDialogBg bg-cover py-0 bg-center text-center">
                    <div className="bg-btnLongBg bg-no-repeat bg-cover py-4 w-52 mb-3 text-center">
                      <h1 className="text-l font-medium  ">
                        Количество действий
                      </h1>
                    </div>
                    <NumberInput
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      onChange={(_, value) => handleChangeNumsCount(value)}
                      defaultValue={config.numbersCount}
                      clampValueOnBlur={false}
                      key={config.numbersCount}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </div>
                </div>
              </div>

              {/*  3 row */}
              <div className="modal-action absolute bottom-0">
                <label
                  htmlFor="settingsModal"
                  className=" border-none bg-transparent cursor-pointer  py-9 w-60 text-center bg-btnLongBg bg-contain bg-no-repeat bg-center text-xl  "
                  onClick={handleSaveConfig}
                >
                  Apply
                </label>
              </div>
            </div>
          </div>
          <label htmlFor="settingsModal" className="modal-backdrop" />
        </div>
      </div>
    </>
  );
};
export default AnzanHeadSettingForm;
