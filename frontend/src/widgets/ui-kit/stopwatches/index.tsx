import { FC } from "react";
import { useStopwatch } from "react-timer-hook";

interface StopWatchesProps {
  setTotalSeconds: (sec: number) => void;
  isStarting: boolean;
}
const StopWatches: FC<StopWatchesProps> = ({ setTotalSeconds, isStarting }) => {
  const { totalSeconds, seconds, minutes } = useStopwatch({
    autoStart: isStarting,
  });
  setTotalSeconds(totalSeconds);
  return (
    <>
      <div>
        <div>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    </>
  );
};
export default StopWatches;
