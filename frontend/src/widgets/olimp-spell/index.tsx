import { FC, useEffect, useMemo, useState } from "react";

import { Button } from "react-daisyui";
import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";
import VoiceInput from "@widgets/spell-VoiceInput";
import colorBg from "/img/colorGradientBg.jpeg";

interface SpellingAudioPlayerProps {
  words: string[];
}

const OlimpSpellingAudioPlayer: FC<SpellingAudioPlayerProps> = ({ words }) => {
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, _] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const randomWords = useMemo(
    () => words.sort(() => (Math.random() > 0.5 ? 1 : -1)),
    [words]
  );
  useEffect(() => {
    handleSpeak();
  }, [currentIndex]);
  const currentWord = randomWords[currentIndex].toLowerCase().trim();
  const SoundWord = new Howl({
    src: [`/sounds/${currentWord}.mp3`],
    volume: 1,
    rate: rate,
  });

  const SoundRight = new Howl({
    src: ["/sounds/win.mp3"],
    volume: 0.3,
    rate: 1.5,
  });

  const handleSpeak = () => {
    setTimeout(() => {
      SoundWord.play();
    }, 1000);
  };

  const handleNextWord = async () => {
    setDisabled(true);
    SoundRight.play();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setCorrectCount((count) => count + 1);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const totalWords = words.length;
  const wordsShown = currentIndex + 1;
  const wordsRemaining = totalWords - wordsShown;

  return (
    <div className=" rounded-3xl  relative h-[70vh] overflow-hidden ">
      <img
        src={colorBg}
        className="absolute h-full w-full right-0 left-0 top-0 bottom-0 -z-10 brightness-90"
        alt=""
      />
      <div className=" flex justify-around pt-2 shadow-xl l:flex-col l:p-2  lg:flex-col lg:items-end l:absolute lg:absolute lg:p-3 lg:gap-2  right-0 bg-base-100 rounded-xl tabs md:flex-row l:gap-0 ">
        <Link to={ROUTES.SPELLINGBEE} className="text-primary active pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
        <label
          htmlFor="staticsModal"
          className="cursor-pointer text-primary pb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </label>
        <label
          htmlFor="voiceModal"
          className=" cursor-pointer text-primary pb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
              d="M5 7h2v10H5V7zm-4 3h2v4H1v-4zm8-8h2v18H9V2zm4 2h2v18h-2V4zm4 3h2v10h-2V7zm4 3h2v4h-2v-4z"
            />
            <path />
          </svg>
        </label>
        <button className="text-primary pb-4" onClick={handleSpeak}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 12.052c1.995 0 3.5-1.505 3.5-3.5s-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5 1.505 3.5 3.5 3.5zM9 13H7c-2.757 0-5 2.243-5 5v1h12v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.535 5.464L14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"
            />
          </svg>
        </button>
        <label
          htmlFor="wordsModal"
          className=" cursor-pointer text-primary pb-4"
        >
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 00-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z"
            />
          </svg>
        </label>
      </div>

      <div className="l:flex l:justify-around l:py-5 flex justify-center mt-5">
        <Button
          className=" hidden l:block bg-blue-500 text-white px-4 py-2 rounded bg-transparent text-primary font-bold"
          onClick={handleSpeak}
        >
          Speak Word
        </Button>
        <Button
          className="  bg-blue-500 text-white rounded bg-transparent text-primary font-bold "
          disabled={disabled}
          onClick={handleNextWord}
        >
          Next word
        </Button>
      </div>

      <div className=" flex justify-center items-center h-[40vh]">
        <div className=" text-center ">
          {!loading && (
            <div className="text-[5rem] sm:text-[10rem] md:text-[10rem] xl:text-[10rem] font-bold text-primary">
              {words[currentIndex]}
            </div>
          )}
          {loading && (
            <>
              <div className="flex gap-x-2">
                <span className="loading loading-infinity w-40 text-primary"></span>
              </div>
            </>
          )}
          <VoiceInput words={words} currentIndex={currentIndex} />
        </div>
      </div>

      <div>
        <input type="checkbox" id="voiceModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-2 m-0 flex flex-col">
            <label className="text-xl text-base-primary">Rate:</label>
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

          <label className="modal-backdrop" htmlFor="voiceModal">
            Close
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="wordsModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-4 m-0 ">
            <div className=" text-center text-2xl font bold">
              {words[currentIndex]}
            </div>
          </div>

          <label className="modal-backdrop" htmlFor="wordsModal">
            Close
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="staticsModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-4 m-0 ">
            <div className=" text-center text-2xl font bold">
              <p>Total Words: {totalWords}</p>
              <p>Words Shown: {wordsShown}</p>
              <p>Words Remaining: {wordsRemaining}</p>
              <p>Correct Answers: {correctCount}</p>
              <p>Incorrect Answers: {incorrectCount}</p>
            </div>
          </div>

          <label className="modal-backdrop" htmlFor="staticsModal">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default OlimpSpellingAudioPlayer;
