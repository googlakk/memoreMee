import { Button } from "react-daisyui";
import { FC } from "react";
import { OPERATIONS } from "@shared/core";

interface FuncProps {
  usedNumbers?: [];
  depth?: [];
  handleChange: (val: any) => void;
  title: string;
}
const MyButton: FC<FuncProps> = ({ handleChange, title }) => {
  return (
    <>
      <Button color="accent" onClick={handleChange}>
        {title}
      </Button>
    </>
  );
};
export default MyButton;
