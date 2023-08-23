import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { OPERATIONS } from "@shared/core";

interface FuncProps {
  usedNumbers?: [];
  depth?: [];
  handleChange: (val: any) => void;
  title: string;
}
const MyButton: FC<FuncProps> = ({
  usedNumbers,
  depth,
  handleChange,
  title,
}) => {
  return (
    <>
      <Button
        mr={2}
        onClick={(val) => handleChange(val)}
        colorScheme="teal"
        variant="outline"
      >
        {title}
      </Button>
    </>
  );
};
export default MyButton;
