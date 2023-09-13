import { AnzanConfig, OPERATIONS } from "@shared/core";
import { Button, ButtonGroup, Card } from "react-daisyui";
import { FC, useCallback, useState } from "react";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

const USED_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH = [1, 2, 3, 4, 5, 6];

const AnzanSettingForm: FC<{
  onSave: (settings: { config: AnzanConfig; playersCount: number }) => void;
}> = ({ onSave }) => {
  // Устонавливаем значение по умолчанию
  const [config, setConfig] = useState<AnzanConfig>({
    operations: [OPERATIONS.PLUS],
    numberDepth: 1,
    usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    speed: 1,
    numbersCount: 5,
  });
  const [playersCount, setPlayersCount] = useState(1);

  // Слущаетли событий
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

  return (
    <div className={`items-center text-center`}>
      <div>
        <div className="flex justify-center">
          <Card className="text-center w-fit mt-10 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-indigo-500 glass bg-opacity-0 ">
            <Card.Body>
              <div className="flex flex-col gap-x-10">
                <div className="my-3 flex justify-between items-center">
                  <h1 className=" text-l font-medium mr-10">
                    Выберите действие
                  </h1>
                  <ButtonGroup className="">
                    <Button
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
                      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      active={config.operations.length === 2}
                      onClick={() =>
                        handleChangeOperation([
                          OPERATIONS.PLUS,
                          OPERATIONS.MINUS,
                        ])
                      }
                    >
                      + | -
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="my-3 flex justify-between items-center">
                  <h1 className=" text-l font-medium  mr-10">
                    Используемые числа
                  </h1>
                  <ButtonGroup className="flex flex-wrap w-58 ">
                    {USED_NUMBERS.map((num) => (
                      <Button
                        className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                        key={num}
                        onClick={() => handleChangeUsedNumbers(num)}
                        active={config.usedNumber.includes(num)}
                      >
                        {num}
                      </Button>
                    ))}
                  </ButtonGroup>
                </div>
                <div className="my-3 flex justify-between items-center">
                  <h1 className=" text-l font-medium  mr-10">
                    Разрядность чисел
                  </h1>
                  <ButtonGroup>
                    {DEPTH.map((depth) => (
                      <Button
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
                <div className="my-3 flex justify-between items-center">
                  <h1 className=" text-l font-medium  mr-10">Скорость</h1>
                  <NumberInput
                    className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                    onChange={(_, value) => handleChangeSpeed(value)}
                    defaultValue={config.speed}
                    clampValueOnBlur={false}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className="my-3 flex justify-between items-center">
                  <h1 className=" text-l font-medium  mr-10">
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
                <div className="my-3 flex justify-between items-center">
                  <h1 className=" text-l font-medium mr-10">
                    Количество игроков
                  </h1>
                  <ButtonGroup>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((cnt) => (
                      <Button
                        key={cnt}
                        className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                        active={playersCount === cnt}
                        onClick={() => setPlayersCount(cnt)}
                      >
                        {cnt}
                      </Button>
                    ))}
                  </ButtonGroup>
                </div>
              </div>
              <Button
                className=" bg-accent max-w-fit"
                onClick={handleSaveConfig}
              >
                Начать
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AnzanSettingForm;
