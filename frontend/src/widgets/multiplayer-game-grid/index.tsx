import cn from "clsx";

export const MultiplayerGameGrid: React.FC<
  React.PropsWithChildren<{ playersCount: number }>
> = ({ playersCount, children }) => {
  if (!Array.isArray(children)) return null;
  const className = cn(
    "w-full grow  flex justify-center pb-5",
    playersCount === 1 && "basis-full h-[70vh]",
    playersCount === 2 && "basis-1/2 h-[70vh]",
    playersCount === 3 && "basis-1/3 h-[50vh]",
    playersCount === 4 && "basis-1/2 h-[40vh]",
    playersCount === 5 && "basis-1/3 h-[40vh]",
    playersCount === 6 && "basis-1/3 h-[40vh]",
    playersCount === 7 && "basis-1/3 h-[28vh]",
    playersCount === 8 && "basis-1/3 h-[28vh]",
    playersCount === 9 && "basis-1/3 h-[28vh]"
  );

  return (
    <div className="flex flex-wrap h-full">
      {children.map((el) => (
        <div key={el} className={className}>
          {el}
        </div>
      ))}
    </div>
  );
};
