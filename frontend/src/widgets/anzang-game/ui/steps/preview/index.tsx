import { Button } from "react-daisyui";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
}
export const AnzanGamePreview: React.FC<FuncProps> = ({
  onStart,
  onSettings,
}) => {
  return (
    <div>
      <Button onClick={() => onStart()}>Начать</Button>
      <Button onClick={() => onSettings()}>Настройки</Button>
    </div>
  );
};
