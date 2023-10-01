import React, { useEffect, useState } from "react";

const SpeechSynthesisComponent: React.FC = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    let speech = new SpeechSynthesisUtterance();
    let availableVoices: SpeechSynthesisVoice[] = [];

    const handleVoicesChanged = () => {
      availableVoices = window.speechSynthesis.getVoices();
      speech.voice = availableVoices[0];
      setVoices([...availableVoices]);
      setSelectedVoice(availableVoices[0] || null);
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []); // Запускать только при монтировании компонента

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    if (text !== "" && selectedVoice) {
      let speech = new SpeechSynthesisUtterance(text);
      speech.voice = selectedVoice;
      window.speechSynthesis.speak(speech);
    }
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVoice = voices.find((voice) => voice.name === e.target.value);
    setSelectedVoice(selectedVoice || null);
  };

  return (
    <div>
      <h1>Speech Synthesis App</h1>
      <select value={selectedVoice?.name || ""} onChange={handleVoiceChange}>
        <option value="">Select a Voice</option>
        {voices.map((voice, index) => (
          <option key={index} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text to speak..."
      />
      <button onClick={() => handleSpeak()}>Speak</button>
    </div>
  );
};

export default SpeechSynthesisComponent;
