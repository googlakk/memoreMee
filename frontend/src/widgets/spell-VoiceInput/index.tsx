import React, { FC, useEffect, useState } from "react";

import { Button } from "react-daisyui";
import { FaMicrophone } from "react-icons/fa";

interface VoiceInputProps {
  words: string[];
  currentIndex: number;
}

const VoiceInput: FC<VoiceInputProps> = ({ words, currentIndex }) => {
  const currentWord = words[currentIndex];
  const [transcript, setTranscript] = useState<string>("");
  const [spokenText, setSpokenText] = useState<string>("");

  const startSpeechRecognition = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      recognition.lang = "en-US";
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const interimTranscript = event.results[0][0].transcript;
        setSpokenText(interimTranscript);
        console.log(transcript);
      };

      recognition.onend = () => {
        // Ничего не трогаем здесь, обработка обновления transcript происходит в useEffect
      };

      recognition.start();
    } else {
      console.error("Браузер не поддерживает SpeechRecognition");
    }
  };

  useEffect(() => {
    setTranscript(spokenText.split("").join(""));
  }, [spokenText]);

  useEffect(() => {
    if (currentWord.toLowerCase().trim() === transcript.toLowerCase().trim()) {
      console.log(true);
    } else {
      console.log(false, currentWord.length, "and", transcript.length);
    }
  }, [transcript, currentWord]);

  const styleMicro = { color: "black", fontSize: "3rem" };

  return (
    <div className="flex justify-center flex-col items-center">
      <Button
        className=" bg-transparent border-hidden"
        onClick={startSpeechRecognition}
      >
        <FaMicrophone style={styleMicro} />
      </Button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceInput;
