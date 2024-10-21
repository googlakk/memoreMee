import { Button, ButtonGroup } from "react-daisyui";
import { MultiConfig, OPERATIONS } from "@shared/core/games/multiplication";
import { useCallback, useEffect, useState } from "react";

const USED_NUMBERS1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBERS2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DEPTH2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const MultiGameSettings: React.FC<{
  onSave: (config: MultiConfig) => void;
  defaultSettings: MultiConfig;
  open: boolean;
  onCancel: () => void;
  playersCount: number;
}> = ({ onSave, defaultSettings, open, onCancel }) => {
  const divideLogo = "/img/divide.svg";
  // Устонавливаем значение по умолчанию
  const [config, setConfig] = useState<MultiConfig>(defaultSettings);
  const [maxDepth, setMaxDepth] = useState(0);

  useEffect(() => {
    setConfig(defaultSettings);
  }, [defaultSettings]);

  // Слущаетли событий
  const handleChangeOperation = (operations: MultiConfig["operation"]) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      operation: operations,
    }));
  };
  const handleChangeUsedNumbers1 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumbers1: prevConfig.usedNumbers1.includes(number)
        ? prevConfig.usedNumbers1.filter((num) => num !== number)
        : [...prevConfig.usedNumbers1, number],
    }));
  };
  const handleChangeUsedNumbers2 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumbers2: prevConfig.usedNumbers2.includes(number)
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
  const handleSaveConfig = useCallback(() => {
    onSave(config);
  }, [onSave, config]);

  return (
    <>
      <input
        type="checkbox"
        id="settignsModal"
        className="modal-toggle"
        checked={open}
      />
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
                  active={config.operation[0] === OPERATIONS.MULTIPLY}
                ></Button>
                <Button
                  type="button"
                  className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  active={config.operation === OPERATIONS.DIVIDE}
                  onClick={() => handleChangeOperation(OPERATIONS.DIVIDE)}
                >
                  <img src={divideLogo} alt="" />
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
                  onClick={() => handleChangeOperation(OPERATIONS.QUAEREROOT)}
                >
                  ##
                </Button>
                <Button
                  type="button"
                  className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  active={config.operation === OPERATIONS.CUBEROOT}
                  onClick={() => handleChangeOperation(OPERATIONS.CUBEROOT)}
                >
                  **
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
                      disabled={[
                        OPERATIONS.CUBE,
                        OPERATIONS.SQUAERE,
                        OPERATIONS.CUBEROOT,
                        OPERATIONS.QUAEREROOT,
                      ].includes(config.operation)}
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

            <Button
              type="button"
              className="bg-accent mx-auto"
              onClick={handleSaveConfig}
            >
              Сохранить
            </Button>
          </div>
          <label
            className="modal-backdrop"
            htmlFor="settignsModal"
            onClick={onCancel}
          >
            Close
          </label>
        </div>
      </div>
    </>
  );
};
