import { AnzanConfig, AnzanCore, OPERATIONS } from "@shared/core";
import { Button, ButtonGroup, Card, Center, Container } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";

import MyButton from "./myButton";
import MyInput from "./myInput";

const USED_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEPTH = [1, 2, 3, 4, 5, 6];

const AnzanSettingForm: FC<{
  onSave: (settings: {
    config: AnzanConfig;
    speed: number;
    numsCount: number;
  }) => void;
}> = ({ onSave }) => {
  const [speed, setSpeed] = useState(1);
  const [numsCount, setNumsCount] = useState(5);

  const [config, setConfig] = useState<AnzanConfig>({
    operations: [OPERATIONS.PLUS],
    numberDepth: 1,
    usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  const handleChangeSpeed = (num: number) => {
    setSpeed(num);
  };

  const handleChangeNumsCount = (num: number) => {
    setNumsCount(num);
  };

  const handleChangeNumberDepth = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numberDepth: number,
    }));
  };

  const handleChangeUsedNumbers = (number: number) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      usedNumber: prevConfig.usedNumber.includes(number)
        ? prevConfig.usedNumber.filter((num) => num !== number)
        : [...prevConfig.usedNumber, number],
    }));
  };

  const handleChangeOperation = (operations: AnzanConfig["operations"]) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      operations: operations,
    }));
  };

  const handleSaveConfig = useCallback(() => {
    onSave({ config, speed, numsCount });
  }, [onSave, config, speed, numsCount]);

  return (
    <Center h="100vh" bgColor={"lightgray"} p={6}>
      <Card>
        <Container mb={2}>
          <h1>Выберите выражение</h1>

          <Button
            title="+"
            variant="outline"
            onClick={() => handleChangeOperation([OPERATIONS.PLUS])}
            colorScheme={
              config.operations.length === 1 &&
              config.operations[0] === OPERATIONS.PLUS
                ? `green`
                : `gray`
            }
          />

          <Button
            mr={2}
            onClick={() => handleChangeOperation([OPERATIONS.MINUS])}
            variant="outline"
            colorScheme={
              config.operations.length === 1 &&
              config.operations[0] === OPERATIONS.MINUS
                ? `green`
                : `gray`
            }
          >
            -
          </Button>
          <Button
            mr={2}
            onClick={() =>
              handleChangeOperation([OPERATIONS.PLUS, OPERATIONS.MINUS])
            }
            variant="outline"
            colorScheme={config.operations.length === 2 ? `green` : `gray`}
          >
            + -
          </Button>
        </Container>
        <Container mb={4}>
          <h1>Используемые цифры</h1>
          <ButtonGroup variant="outline" spacing="2">
            {USED_NUMBERS.map((num) => (
              <Button
                key={num}
                colorScheme={config.usedNumber.includes(num) ? `green` : `gray`}
                onClick={() => handleChangeUsedNumbers(num)}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </Container>

        <MyInput
          title="Скорость"
          maxValue={10}
          handleChange={handleChangeSpeed}
        />
        <MyInput
          title="Количество действий"
          maxValue={300}
          handleChange={handleChangeNumsCount}
        />
        <Container mb={4}>
          <h1>Разрадность чисел</h1>
          <ButtonGroup variant="outline" spacing="4">
            {DEPTH.map((depth) => (
              <Button
                key={depth}
                onClick={() => handleChangeNumberDepth(depth)}
                colorScheme={config.numberDepth === depth ? `green` : `gray`}
              >
                {depth}
              </Button>
            ))}
          </ButtonGroup>
        </Container>
        <Button
          onClick={handleSaveConfig}
          mr={2}
          colorScheme="teal"
          variant="outline"
        >
          Применить
        </Button>
      </Card>
    </Center>
  );
};

export default AnzanSettingForm;
