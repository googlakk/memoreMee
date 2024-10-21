import { Button, Card } from "react-daisyui";

import { FC } from "react";
import { Link } from "react-router-dom";

interface gameCardProps {
  imgGame: string;
  routes: string;
  disabled?: boolean;
  width?: string
}
const MyCard: FC<gameCardProps> = ({ imgGame, routes, width }) => {
  return (
    <>
      <Link className={` h-fit p-0 m-0 mt-2`} to={routes} style={{width: width}}>
        <Button className=" bg-transparent border-none hover:bg-transparent">
          <Card className={` h-fit w-full `}>
            <Card.Body className=" h-fit p-0  m-0">
              <img src={imgGame} className="w-fit" alt="" />
            </Card.Body>
          </Card>
        </Button>
      </Link>
    </>
  );
};
export default MyCard;

