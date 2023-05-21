import { useState } from 'react';

type UseSpeechWord = () => {
  isSpeech: boolean;
  startSpeech: (word: string) => void;
  pauseSpeech: () => void;
};

const useSpeechWord: UseSpeechWord = () => {
  const [isSpeech, setIsSpeech] = useState(false);

  const startSpeech = (word: string) => {
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = word;
    setIsSpeech(true);
    window.speechSynthesis.speak(uttr);
  };
  const pauseSpeech = () => {
    window.speechSynthesis.pause();
    setIsSpeech(false);
  };
  return {
    isSpeech,
    startSpeech,
    pauseSpeech,
  };
};

export default useSpeechWord;
