import {
  Container,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { FC } from "react";

interface FuncProps {
  maxValue: number;
  handleChange: (num: number) => void;
  title: string;
}
const MyInput: FC<FuncProps> = ({ maxValue, handleChange, title }) => {
  const maxNum = maxValue;
  return (
    <>
      <Container mb={4}>
        <h1>{title}</h1>
        <NumberInput
          onChange={(_, value) => handleChange(value)}
          defaultValue={0}
          min={0}
          max={maxNum}
          clampValueOnBlur={false}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Container>
    </>
  );
};
export default MyInput;
