import { FC, useEffect, useState } from "react";

import { Button } from "react-daisyui";

interface SpellingBeeProps {
  selectedLvl: any;
  words: string[];
}
const VoiceSelection: FC<SpellingBeeProps> = ({ words, selectedLvl }) => {
  const voices = speechSynthesis ? speechSynthesis.getVoices() : [];
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const selectAlexVoice = (): SpeechSynthesisVoice | null => {
    return voices.find((v) => v.name === "Alex") || null;
  };
  let selectedLevel = selectedLvl;
  console.log(selectedLvl);
  useEffect(() => {
    const alexVoice = selectAlexVoice();
    if (alexVoice) {
      setVoice(alexVoice);
    }
  }, [setVoice]);

  const [rate, setRate] = useState(1);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const selectedWords = words[selectedLevel];
  console.log(selectedWords);
  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % selectedWords.length);
    setIsCorrect(true);
    setInputValue("");
  };

  // const handleRateChange = (event: Event, value: number | number[]) => {
  //   setRate(Array.isArray(value) ? value[0] : value);
  // };

  const handleSpeak = () => {
    if (voice) {
      const utterance = new SpeechSynthesisUtterance(
        selectedWords[currentWordIndex]
      );
      utterance.voice = voice;
      utterance.rate = rate;
      speechSynthesis.speak(utterance);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsCorrect(true);
  };

  const handleCheckSpelling = () => {
    if (
      inputValue.toLowerCase() === selectedWords[currentWordIndex].toLowerCase()
    ) {
      handleNextWord();
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSpeak}
          disabled={!voice}
        >
          Speak Word
        </Button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleNextWord}
        >
          Next Word
        </button>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <label className="text-xl">Rate:</label>
        <input
          type="range"
          min={0.1}
          max={2}
          step={0.1}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <span className="text-xl">{rate.toFixed(1)}</span>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCheckSpelling}
        >
          Check Spelling
        </button>
        {!isCorrect && (
          <div className="text-red-600">
            Incorrect spelling, please try again.
          </div>
        )}
      </div>
      <label htmlFor="voiceSelect">Select Voice:</label>
      <select
        id="voiceSelect"
        onChange={(e) => {
          const selectedVoice = voices.find((v) => v.name === e.target.value);
          setVoice(selectedVoice || null);
        }}
        value={voice?.name || ""}
      >
        {voices.map((v) => (
          <option key={v.name} value={v.name}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default VoiceSelection;
