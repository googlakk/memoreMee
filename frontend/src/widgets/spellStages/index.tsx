import { STAGES } from "@widgets/spell-SubLevel/words";
import SpellCard from "@pages/games/spellingBeeGame/ui/card";
import junior from "/img/junior.png";
import kids from "/img/kids.png";
import senior from "/img/senior.png";
const SpellStages = () => {
  const stages = [
    { url: STAGES.kids, title: "kids", img: `${kids}` },
    { url: STAGES.junior, title: "junior", img: `${junior}` },
    { url: STAGES.senior, title: "senior", img: `${senior}` },
  ];

  return (
    <>
      <div className="container mx-auto flex mt-[2%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap">
        {stages.map(({ url, title, img }, index) => (
          <SpellCard key={index} url={url} title={title} img={img} />
        ))}
      </div>
    </>
  );
};
export default SpellStages;
