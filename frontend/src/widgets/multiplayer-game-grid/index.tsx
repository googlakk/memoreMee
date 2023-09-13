import cn from "clsx";

export const MultiplayerGameGrid: React.FC<
  React.PropsWithChildren<{ playersCount: number }>
> = ({ playersCount, children }) => {
  if (!Array.isArray(children)) return null;

  const className = cn(
    "w-full grow",
    playersCount === 2 && "basis-1/2",
    playersCount === 3 && "basis-1/3",
    playersCount === 4 && "basis-1/2",
    playersCount === 5 && "basis-1/3",
    playersCount === 6 && "basis-1/3",
    playersCount === 7 && "basis-1/3",
    playersCount === 8 && "basis-1/3",
    playersCount === 9 && "basis-1/3",
    playersCount === 10 && "basis-1/3"
  );

  return (
    <div className="flex flex-wrap h-full">
      {children.map((el) => (
        <div className={className}>{el}</div>
      ))}
    </div>
  );
};
