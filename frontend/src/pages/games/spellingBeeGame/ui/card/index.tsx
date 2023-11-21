import { Button, Card } from "react-daisyui";
import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

interface gameCardProps {
  url: any;
  title: string;
  img?: string;
  stage?: string;
  level?: string;
  onClick?: () => void;
}
const SpellCard: FC<gameCardProps> = ({ url, title, img }) => {
  const [saveMode, setSaveMode] = useState<string | null>(null);
  useEffect(() => {
    const mode = localStorage.getItem("selectedMode");
    setSaveMode(mode);
  }, []);

  return (
    <>
      <Card className="card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-2 disabled w-1/4  bg-[#0284c7] glass mx-auto ">
        <Card.Body className="items-center text-center">
          <div className="h-2/3">
            <Card.Image
              className=" h-[190px] object-contain"
              src={img}
              alt="mental"
            />
          </div>

          <h1 className="font-arena lowercase text-4xl leading-6 text-base-100">
            {title}
          </h1>

          <Card.Actions className="justify-end">
            <Button className=" btn-ghost">
              <Link
                className=" p-0 m-0 font-arena text-2xl text-neutral-50 tracking-wider"
                to={`/${saveMode}/${url}`}
              >
                Start
              </Link>
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </>
  );
};
export default SpellCard;
