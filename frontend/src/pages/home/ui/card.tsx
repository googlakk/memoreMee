import { Button, Card } from "react-daisyui";

import { FC } from "react";
import { Link } from "react-router-dom";

interface gameCardProps {
  titleGame: string;
  imgGame: string;
  routes: string;
  disabled?: boolean;
}
const GameCard: FC<gameCardProps> = ({
  titleGame,
  imgGame,
  routes,
  disabled,
}) => {
  return (
    <>
      <Card className="card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] disabled w-80 h-2/3 bg-[#0284c7] glass mx-auto">
        <Card.Body className="items-center text-center">
          <Card.Title className=" h-16">
            <Card.Image src={titleGame} alt="mental" />
          </Card.Title>
          <Card.Image className=" w-20" src={imgGame} alt="mental" />
          <Card.Actions className="justify-end">
            <Button className=" btn-ghost">
              <Link
                className=" p-0 m-0 font-arena text-2xl text-neutral-50 "
                to={routes}
              >
                Начать
              </Link>
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </>
  );
};
export default GameCard;
