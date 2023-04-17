type SpeechWord = () => {
  startSpeech: (word: string) => void;
};

const speechWord: SpeechWord = () => {
  const startSpeech = (word: string) => {
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = word;
    window.speechSynthesis.speak(uttr);
  };

  return {
    startSpeech,
  };
};

export default speechWord;
