import { Button, Card } from "react-daisyui";

import { useCallback } from "react";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
  name: string;
  setName: (s: string) => void;
}

export const AnzanGamePreview: React.FC<FuncProps> = ({
  onStart,
  onSettings,
  name,
  setName,
}) => {
  const handleContentChange = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      setName(event.currentTarget.innerHTML);
    },
    []
  );
  return (
    <Card className="card w-[100%] mx-0 lg:mx-3 xl:mx-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#0284c7] glass ">
      <Card.Title>
        <div
          className=" text-l lg:text-[14px] xl:text-[14px] l:text-[10px] ml-2"
          contentEditable
          onBlur={handleContentChange}
          dangerouslySetInnerHTML={{ __html: name }}
        ></div>
      </Card.Title>
      <Card.Body className="card-body items-center justify-center  text-center">
        <Button className="btn btn-primary" onClick={() => onStart()}>
          Начать
        </Button>
        <Button
          className="btn btn-ghost xl:text-[12px]"
          onClick={() => onSettings()}
        >
          Настройки
        </Button>
      </Card.Body>
    </Card>
  );
};
