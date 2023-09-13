import { Button, Card } from "react-daisyui";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
}
export const AnzanGamePreview: React.FC<FuncProps> = ({
  onStart,
  onSettings,
}) => {
  return (
    <Card>
      <Card.Body>
        <Button onClick={() => onStart()}>Начать</Button>
        <Button onClick={() => onSettings()}>Настройки</Button>
      </Card.Body>
    </Card>
  );
};
