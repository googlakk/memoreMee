import { Button, ButtonGroup } from "react-daisyui";
import { FC, useCallback, useEffect, useState } from "react";
import { MultiConfig, OPERATIONS } from "@shared/core/games/multiplication";

import { CgMathDivide } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons";
import { TbMath } from "react-icons/tb";

const USED_NUMBERS1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBERS2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MultiplyHeaderSettingForm: FC<{
  onSave: (settings: { config: MultiConfig; playersCount: number }) => void;
  defaultSettings: { config: MultiConfig; playersCount: number };
}> = ({ onSave, defaultSettings }) => {
  // Устонавливаем значение по умолчанию
  const [config, setConfig] = useState<MultiConfig>(defaultSettings.config);
  const [playersCount, setPlayersCount] = useState(
    defaultSettings.playersCount
  );
  const [maxDepth, setMaxDepth] = useState(0);
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
      if (newCount <= 9) {
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

  const handleChangeUsedNumbers1 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumber: prevConfig.usedNumbers1.includes(number)
        ? prevConfig.usedNumbers1.filter((num) => num !== number)
        : [...prevConfig.usedNumbers1, number],
    }));
  };
  const handleChangeUsedNumbers2 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumber: prevConfig.usedNumbers2.includes(number)
        ? prevConfig.usedNumbers2.filter((num) => num !== number)
        : [...prevConfig.usedNumbers2, number],
    }));
  };

  const handleChangeNumberDepth1 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numberDepth1: number,
    }));
    setMaxDepth(number);
  };
  const handleChangeNumberDepth2 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numberDepth2: number,
    }));
  };
  const handleChangeOperation = (operations: MultiConfig["operation"]) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      operation: operations,
    }));
  };
  const handleSaveConfig = useCallback(() => {
    onSave({ config, playersCount });
  }, [onSave, config, playersCount]);

  return (
    <>
      <div className="flex">
        <label className="" htmlFor="settingsModal">
          <IconContext.Provider
            value={{ color: "black", className: "w-10 h-10" }}
          >
            <div className="btn">
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

        <div className="">
          <input type="checkbox" id="settingsModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box p-2 m-0 ">
              <div className="flex flex-col items-center lg:gap-x-10 xl:gap-x-10 gap-x-2 ">
                <div className="w-full my-3  text-center flex flex-col justify-between items-center">
                  <h1 className=" text-l font-medium lg:mr-10 xl:mr-10 mr-0">
                    Выберите действие
                  </h1>
                  <ButtonGroup className="flex justify-center">
                    <Button
                      type="button"
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      onClick={() => handleChangeOperation(OPERATIONS.MULTIPLY)}
                      active={config.operation === OPERATIONS.MULTIPLY}
                    >
                      x
                    </Button>
                    <Button
                      type="button"
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      active={config.operation === OPERATIONS.DIVIDE}
                      onClick={() => handleChangeOperation(OPERATIONS.DIVIDE)}
                    >
                      <CgMathDivide />
                    </Button>
                    <Button
                      type="button"
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      active={config.operation === OPERATIONS.SQUAERE}
                      onClick={() => handleChangeOperation(OPERATIONS.SQUAERE)}
                    >
                      **
                    </Button>
                    <Button
                      type="button"
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      active={config.operation === OPERATIONS.CUBE}
                      onClick={() => handleChangeOperation(OPERATIONS.CUBE)}
                    >
                      ***
                    </Button>
                    <Button
                      type="button"
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      active={config.operation === OPERATIONS.QUAEREROOT}
                      onClick={() =>
                        handleChangeOperation(OPERATIONS.QUAEREROOT)
                      }
                    >
                      <TbMath />
                    </Button>
                    <Button
                      type="button"
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      active={config.operation === OPERATIONS.CUBEROOT}
                      onClick={() => handleChangeOperation(OPERATIONS.CUBEROOT)}
                    >
                      ###
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="flex text-center  p-0 m-0">
                  <div className="my-3 w-1/2   lg:flex-row xl:flex-row justify-between items-center">
                    <h1 className=" text-l font-medium lg:mr-10 xl:mr-10 mr-0">
                      1ый операнд
                    </h1>
                    <div className="gri grid-cols-2 gap-5 ">
                      {USED_NUMBERS1.map((num) => (
                        <Button
                          type="button"
                          className={`${
                            config.usedNumbers1.includes(num)
                              ? "bg-primary text-base-100"
                              : " text-neutral-900"
                          } `}
                          key={num}
                          onClick={() => handleChangeUsedNumbers1(num)}
                          active={config.usedNumbers1.includes(num)}
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="my-3 w-1/2  lg:flex-row xl:flex-row justify-between items-center">
                    <h1 className=" text-l font-medium lg:mr-10 xl:mr-10 mr-0">
                      2ой операнд
                    </h1>
                    <div className=" gri grid-cols-2 gap-5">
                      {USED_NUMBERS2.map((num) => (
                        <Button
                          type="button"
                          className={`${
                            config.usedNumbers2.includes(num)
                              ? "bg-primary text-base-100"
                              : " text-neutral-900"
                          } `}
                          key={num}
                          onClick={() => handleChangeUsedNumbers2(num)}
                          active={config.usedNumbers2.includes(num)}
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-5 text-center">
                  <div className="my-3 w-1/2 lg:flex-row xl:flex-row justify-between items-center">
                    <h1 className="text-l font-medium lg:mr-10 xl:mr-10 mr-0 ">
                      Разрядность чисел
                    </h1>
                    <div className="flex flex-wrap justify-center gap-x-2 lg:gap-y-2">
                      {DEPTH1.map((depth) => (
                        <Button
                          type="button"
                          className={`shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
                            config.numberDepth1 === depth
                              ? "bg-primary text-base-100"
                              : " text-neutral-900"
                          }`}
                          key={depth}
                          onClick={() => handleChangeNumberDepth1(depth)}
                        >
                          {depth}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="my-3 w-1/2 lg:flex-row xl:flex-row justify-between items-center">
                    <h1 className="text-l font-medium lg:mr-10 xl:mr-10 mr-0 ">
                      Разрядность чисел
                    </h1>

                    <div className="flex flex-wrap justify-center gap-x-2 lg:gap-y-2">
                      {DEPTH2.map((depth) => (
                        <Button
                          type="button"
                          className={`shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
                            config.numberDepth2 === depth
                              ? "bg-primary text-base-100"
                              : " text-neutral-900"
                          }`}
                          key={depth}
                          onClick={() => handleChangeNumberDepth2(depth)}
                          active={config.numberDepth2 === depth}
                          disabled={depth > maxDepth}
                        >
                          {depth}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-action">
                <label
                  htmlFor="settingsModal"
                  className="btn"
                  onClick={handleSaveConfig}
                >
                  Применить
                </label>
              </div>
            </div>
            <label htmlFor="settingsModal" className="modal-backdrop" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MultiplyHeaderSettingForm;
