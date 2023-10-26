import { FC } from "react";
import { LEVELS } from "./words";
import SpellCard from "@pages/games/spellingBeeGame/ui/card";
import final from "/img/final.png";
import grand from "/img/grandFinal.png";
import semi from "/img/stage.png";
import { useParams } from "react-router-dom";

const SpellSubLevel: FC = () => {
  const { stage } = useParams();

  const objects = [
    {
      title: "semi final",
      img: `${semi}`,
      url: `${stage}/${LEVELS.semiFinal}`,
    },
    { title: "final", img: `${final}`, url: `${stage}/${LEVELS.Final}` },
    {
      title: "grand final",
      img: `${grand}`,
      url: `${stage}/${LEVELS.grandFinal}`,
    },
  ];
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-md shadow-md mt-[10%]">
      <div className="flex justify-around">
        {objects.map((obj) => (
          <SpellCard title={obj.title} url={obj.url} img={obj.img} />
        ))}
      </div>
    </div>
  );
};

export default SpellSubLevel;
