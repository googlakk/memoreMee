import { FC, useEffect, useState } from "react";

import { Countdown } from "react-daisyui";
import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";

interface MyCardProps {
  bgColor: string;
  title?: string;
}
const MyCard: FC<MyCardProps> = ({ bgColor, title }) => {
  const color = bgColor;
  const headerTitle = title;
  const args = { value: 60 };
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <>
      <div className={`card w-96 glass ${color}`}>
        <div className="card-body">
          <h2 className="card-title ">{headerTitle}</h2>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-primary-content">
              <Countdown className="font-mono text-4xl" value={value} />
              Points
            </div>
          </div>
          <div className="card-actions justify-end text-primary-content">
            <button className="btn">
              <Link to={ROUTES.ANZAN}>Начать</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyCard;
