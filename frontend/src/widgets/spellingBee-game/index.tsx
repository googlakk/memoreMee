import { FC, useState } from "react";

interface Words {
  semiFinal: string[];
  Final: string[];
  grandFinal: string[];
}
const SpellingBee: FC = () => {
  const [active, setActive] = useState(0);
  // const words: Words = {
  //   semiFinal: ["semi"],
  //   Final: ["final"],
  //   grandFinal: ["grand"],
  // };
  const [selectedLevel, setSelectedLevel] = useState<
    "semiFinal" | "Final" | "grandFinal"
  >("semiFinal");
  const handleClick = () => {
    setActive(1);
    setSelectedLevel("semiFinal");
  };
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl mb-4 text-center">Speech Component</h2>

      <div className="flex justify-center space-x-4">
        <div className="tabs ">
          <div
            onClick={() => handleClick()}
            className={`${
              selectedLevel === "semiFinal" ? "bg-blue-500" : "bg-gray-300"
            } text-white px-4 py-2 rounded`}
          >
            semi Final
          </div>
        </div>
        <div className="tabd-content">
          {/* {active === 1 ? (
            <VoiceSelection
              words={words[selectedLevel]}
              // selectedLevel={selectedLevel}
            />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SpellingBee;
