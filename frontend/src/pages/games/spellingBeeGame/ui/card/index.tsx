import { Button, Card } from "react-daisyui";

import { FC } from "react";
import { Link } from "react-router-dom";

interface gameCardProps {
  url: any;
  title: string;
  img?: string;
  stage?: string;
  level?: string;
}
const SpellCard: FC<gameCardProps> = ({ url, title, img }) => {
  return (
    <>
      <Card className="card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-5 disabled w-80 h-2/3 bg-[#0284c7] glass mx-auto">
        <Card.Body className="items-center text-center">
          <Card.Image className=" w-44" src={img} alt="mental" />

          <h1 className="font-arena lowercase text-4xl leading-6 text-base-100">
            {title}
          </h1>

          <Card.Actions className="justify-end">
            <Button className=" btn-ghost">
              <Link
                className=" p-0 m-0 font-arena text-2xl text-neutral-50 "
                to={`/spelling/${url}`}
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
export default SpellCard;
