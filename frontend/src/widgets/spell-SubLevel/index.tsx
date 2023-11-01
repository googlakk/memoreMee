import { FC } from "react";
import { LEVELS } from "./words";
import SpellCard from "@pages/games/spellingBeeGame/ui/card";
import final from "/img/final.png";
import semi from "/img/stage.png";
import { useParams } from "react-router-dom";

const SpellSubLevel: FC = () => {
  const { stage } = useParams();

  const objects = [
    {
      id: 1,
      title: "semi final",
      img: `${semi}`,
      url: `${stage}/${LEVELS.semiFinal}`,
    },
    { id: 1, title: "final", img: `${final}`, url: `${stage}/${LEVELS.Final}` },
  ];
  return (
    <div className="container mx-auto flex mt-[2%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap">
      {objects.map((obj) => (
        <SpellCard key={obj.id} title={obj.title} url={obj.url} img={obj.img} />
      ))}
    </div>
  );
};

export default SpellSubLevel;
