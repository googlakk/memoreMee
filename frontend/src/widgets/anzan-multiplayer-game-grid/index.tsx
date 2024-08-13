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
    playersCount === 2 && "basis-1/2 h-[80vh]",
    playersCount === 3 && "basis-1/3 h-[60vh]",
    playersCount === 4 && "basis-1/2 h-[45vh]",
    playersCount === 5 && " w-[550px]   h-[45vh]",
    playersCount === 6 && "basis-1/3 h-[45vh]",
    playersCount === 7 && "basis-1/4 h-[45vh]",
    playersCount === 8 && "basis-1/4 h-[45vh]",
    playersCount === 9 && "basis-1/5 h-[45vh] ",
    playersCount === 10 && "basis-1/5 h-[45vh] "
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
