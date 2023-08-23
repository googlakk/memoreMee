import { AnzanConfig, AnzanCore, OPERATIONS } from "@shared/core";
import { Button, ButtonGroup, Card, Center, Container } from "@chakra-ui/react";
import { FC, useState } from "react";

import MyButton from "./myButton";
import MyInput from "./myInput";

const AnzanSettingForm: FC<{ onSave: (config: AnzanConfig) => void }> = () => {
  const usedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const depths = [1, 2, 3, 4, 5, 6];
  const [speed, setSpeed] = useState(1);
  const [numsCount, setNumsCount] = useState(5);

  const [config, setConfig] = useState<AnzanConfig>({
    operations: [OPERATIONS.PLUS],
    numberDepth: 1,
    usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  const [answer, setAnswer] = useState(0);
  const [generatedNumber, setGeneratedNumber] = useState<number | null>(null);

  console.log(generatedNumber);
  console.log(answer);

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

  const startGame = () => {
    const newGame = new AnzanCore(config);
    let count = 1;
    const interval = setInterval(() => {
      if (count === numsCount) {
        window.clearInterval(interval);
      }
      setGeneratedNumber(newGame.generateNumber());
      setGeneratedNumber(newGame.generateNumber());
      count++;
    }, speed * 1000);
    setAnswer(newGame.getAnswer());
  };
  return (
    <Center h="100vh" bgColor={"lightgray"} p={6}>
      <Card>
        <Container mb={2}>
          <h1>Выберите выражение</h1>

          <MyButton
            title="+"
            handleChange={() => handleChangeOperation([OPERATIONS.PLUS])}
          />

          <Button
            mr={2}
            onClick={() => handleChangeOperation([OPERATIONS.MINUS])}
            colorScheme="teal"
            variant="outline"
          >
            -
          </Button>
          <Button
            mr={2}
            onClick={() =>
              handleChangeOperation([OPERATIONS.PLUS, OPERATIONS.MINUS])
            }
            colorScheme="teal"
            variant="outline"
          >
            + -
          </Button>
        </Container>
        <Container mb={4}>
          <h1>Используемые цифры</h1>
          <ButtonGroup variant="outline" spacing="2">
            {usedNumbers.map((num) => (
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
            {depths.map((depth) => (
              <Button
                onClick={() => handleChangeNumberDepth(depth)}
                colorScheme={config.numberDepth === depth ? `green` : `gray`}
              >
                {depth}
              </Button>
            ))}
          </ButtonGroup>
        </Container>
        <Button
          onClick={() => startGame()}
          mr={2}
          colorScheme="teal"
          variant="outline"
        >
          Применить
        </Button>
        <h1>{answer}</h1>
        <h2>{generatedNumber}</h2>
      </Card>
    </Center>
  );
};

export default AnzanSettingForm;
