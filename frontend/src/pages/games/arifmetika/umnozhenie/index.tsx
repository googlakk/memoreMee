import { Button, ButtonGroup } from "react-daisyui";
import { FC, useState } from "react";
import {
  MultiConfig,
  MultiCore,
  OPERATIONS,
} from "@shared/core/games/multiplication";

import { withMainLayout } from "@app/hocs/withMainLayout";

const USED_NUMBER1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBER2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const defaultMultiConfig: MultiConfig = {
  operation: OPERATIONS.DIVIDE,
  numberDepth: 2,
  usedNumber1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  usedNumber2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
const MultiplicationGame: FC = () => {
  const [config, setConfig] = useState<MultiConfig>(defaultMultiConfig);
  const multiCore = new MultiCore(config);

  const handleChangeUsedNumbers1 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumber1: prevConfig.usedNumber1.includes(number)
        ? prevConfig.usedNumber1.filter((num) => num !== number)
        : [...prevConfig.usedNumber1, number],
    }));
  };
  const handleChangeUsedNumbers2 = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumber2:
        prevConfig.usedNumber2 && prevConfig.usedNumber2.includes(number)
          ? prevConfig.usedNumber2.filter((num) => num !== number)
          : [...prevConfig.usedNumber2, number],
    }));
  };
  const handleChangeOperation = (operations: MultiConfig["operation"]) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      operation: operations,
    }));
  };
  const handleStartGame = () => {
    const { num1, num2 } = multiCore.generateNumbers();
    console.log("operand 1 - ", num1);
    console.log("operand 1 - ", num2);
    const result = multiCore.getResult();
    console.log(result);
  };
  return (
    <>
      <ButtonGroup className="join ">
        <Button
          active={
            config.operation[0] === OPERATIONS.MULTIPLY &&
            config.operation.length === 1
          }
          onClick={() => handleChangeOperation(OPERATIONS.MULTIPLY)}
          className="join-item btn"
        >
          *
        </Button>
        <Button
          active={
            config.operation[0] === OPERATIONS.DIVIDE &&
            config.operation.length === 1
          }
          onClick={() => handleChangeOperation(OPERATIONS.DIVIDE)}
          className="join-item btn"
        >
          /
        </Button>
      </ButtonGroup>
      <div className="join">
        {USED_NUMBER1.map((num) => (
          <Button
            type="button"
            className={`${
              config.usedNumber1.includes(num)
                ? "bg-primary text-base-100"
                : " text-neutral-900"
            } `}
            active={config.usedNumber1.includes(num)}
            onClick={() => handleChangeUsedNumbers1(num)}
            key={num}
          >
            {num}
          </Button>
        ))}
      </div>
      <div className="join">
        {USED_NUMBER2.map((num) => (
          <Button
            className={`${
              config.usedNumber2.includes(num)
                ? "bg-primary text-base-100"
                : " text-neutral-900"
            }`}
            active={config.usedNumber2.includes(num)}
            onClick={() => handleChangeUsedNumbers2(num)}
            type="button"
          >
            {num}
          </Button>
        ))}
      </div>
      <input type="number" name="" id="" />
      <div onClick={handleStartGame} className="btn btn-primary">
        Start
      </div>
    </>
  );
};
export default withMainLayout(MultiplicationGame);
