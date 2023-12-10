import cn from "clsx";

export const MultiplayerGameGrid: React.FC<
  React.PropsWithChildren<{
    playersCount: number;
  }>
> = ({ playersCount, children }) => {
  if (!Array.isArray(children)) return null;

  const className = cn(
    "w-full grow flex p-2",
    playersCount === 1 && "basis-full h-[80vh]  lg:h-[80vh] xs:h-[80vh]",
    playersCount === 2 && "basis-1/2 h-[60vh]",
    playersCount === 3 && "basis-1/3 h-[60vh]",
    playersCount === 4 && "basis-1/2 h-[40vh]",
    playersCount === 5 && "basis-1/3 h-[40vh]",
    playersCount === 6 && "basis-1/3 h-[40vh]",
    playersCount === 7 && "basis-1/4 h-[40vh]",
    playersCount === 8 && "basis-1/4 h-[40vh]",
    playersCount === 9 && "basis-1/5 h-[40vh] "
  );

  const rowStyle = playersCount === 2 ? "w-[50%]" : "w-full"; // Если два игрока, каждый занимает половину ширины

  return (
    <div className="flex flex-wrap w-full h-[80vh]">
      {children.map((el) => (
        <div key={el} className={`${className} ${rowStyle}`}>
          {el}
        </div>
      ))}
    </div>
  );
};
