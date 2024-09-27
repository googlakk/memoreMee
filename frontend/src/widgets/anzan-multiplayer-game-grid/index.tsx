import cn from "clsx";

export const MultiplayerGameGrid: React.FC<
  React.PropsWithChildren<{
    playersCount: number;
  }>
> = ({ playersCount, children }) => {
  if (!Array.isArray(children)) return null;

  const className = cn(
    " w-96 grow flex ",
    playersCount === 1 && "basis-full h-[80vh]  lg:h-[80vh] xs:h-[80vh]",
    playersCount === 2 && "w-[50%] h-[80vh]",
    playersCount === 3 && "w-[33%] h-[60vh]",
    playersCount === 4 && "w-[50%] h-[45vh]",
    playersCount === 5 && "w-[33%] h-[45vh]",
    playersCount === 6 && "w-[33%] h-[45vh]",
    playersCount === 7 && "w-[25%] h-[45vh]",
    playersCount === 8 && "w-[25%] h-[45vh]",
    playersCount === 9 && " w-[20%] h-[45vh] ",
    playersCount === 10 && " w-[20%] h-[45vh] "
  );

  // Если два игрока, каждый занимает половину ширины

  return (
    <div className="flex flex-wrap w-full h-[80vh]  ">
      {children.map((el) => (
        <div key={el} className={`${className} `}>
          {el}
        </div>
      ))}
    </div>
  );
};
