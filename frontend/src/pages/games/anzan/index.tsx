import {
  Button,
  ButtonGroup,
  Card,
  Center,
  Container,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FC, useState } from "react";

import { withAuthMiddleware } from "@app/hocs";

const Anzan: FC = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [clickedButton, setClickedButton] = useState("");
  const [count, setCount] = useState("");

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button);
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault;
    const value = event.currentTarget.value;
    setCount(value);
  };

  const numberAdding = () => {
    const value = +clickedButton;
    for (let i = 0; i < +count; i++) {
      const sum: number = value;
      console.log(sum, [i]);
    }
  };

  return (
    <>
      <Center h="100vh" bgColor={"lightgray"} p={6}>
        <Card>
          <Container mb={2}>
            <h1>Выберите выражение</h1>
            <Button mr={2} colorScheme="teal" variant="outline">
              +
            </Button>
            <Button mr={2} colorScheme="teal" variant="outline">
              -
            </Button>

            <Button mr={2} colorScheme="teal" variant="outline">
              + -
            </Button>
          </Container>
          <Container mb={4}>
            <h1>Используемые цифры</h1>
            <ButtonGroup variant="outline" spacing="2">
              <h1>{clickedButton}</h1>
              {numbers.map((num) => (
                <Button key={num} onClick={clickHandler} colorScheme={`green`}>
                  {num}
                </Button>
              ))}
            </ButtonGroup>
          </Container>
          <Container mb={4}>
            <h1>Скорость</h1>
            <NumberInput
              defaultValue={0}
              min={0}
              max={10}
              clampValueOnBlur={false}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Container>
          <Container mb={4}>
            <h1>Количество действий</h1>
            <input type="number" onChange={changeHandler} />
          </Container>
          <Container mb={4}>
            <h1>Разрадность чисел</h1>
            <ButtonGroup variant="outline" spacing="4">
              <Button colorScheme="blue">1</Button>
              <Button colorScheme="blue">2</Button>
              <Button colorScheme="blue">3</Button>
              <Button colorScheme="blue">4</Button>
              <Button colorScheme="blue">5</Button>
              <Button colorScheme="blue">6</Button>
            </ButtonGroup>
          </Container>
          <Button
            onClick={numberAdding}
            mr={2}
            colorScheme="teal"
            variant="outline"
          >
            Применить
          </Button>
        </Card>
      </Center>
    </>
  );
};

export default withAuthMiddleware(Anzan);
