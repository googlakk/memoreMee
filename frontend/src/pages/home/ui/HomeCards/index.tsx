import { Button, Card } from "react-daisyui";

import { FC } from "react";
import { Link } from "react-router-dom";

interface gameCardProps {
  imgGame: string;
  routes: string;
  disabled?: boolean;
}
const HomePageCard: FC<gameCardProps> = ({ imgGame, routes }) => {
  return (
    <>
      <Link className=" w-64 h-fit p-0 m-0" to={routes}>
        <Button className=" bg-transparent border-none hover:bg-transparent">
          <Card className={` h-fit w-60`}>
            <Card.Body className=" h-fit p-2   m-0">
              <img src={imgGame} className=" w-fit" alt="" />
            </Card.Body>
          </Card>
        </Button>
      </Link>
    </>
  );
};
export default HomePageCard;
