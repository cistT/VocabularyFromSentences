import React, { FC, ReactNode, createContext, useState } from 'react';
import { WordType } from '../../types/word';

type WordProviderProps = {
  children: ReactNode;
};
export const WordContext = createContext<{
  wordList: WordType[];
  register: (words: WordType[]) => void;
}>({
  wordList: [],
  register: () => undefined,
});

const WordProvider: FC<WordProviderProps> = ({ children }) => {
  const [wordList, setWordList] = useState<WordType[]>([]);
  const register = (words: WordType[]) => {
    setWordList(words);
  };
  return (
    <WordContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        wordList,
        register,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;
