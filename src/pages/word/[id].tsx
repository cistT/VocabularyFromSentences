import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styles from './index.module.scss';
import Word from '@/features/word/components/Word/Word';
import { WordContext } from '@/features/word/components/WordProvider/WordProvider';
import useBrowserBack from '@/hooks/browserBack';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { wordList } = useContext(WordContext);
  const word = wordList.filter((w) => w.id === id)[0];

  const { browserBack } = useBrowserBack();

  return (
    <>
      <Word
        word={word.word}
        meaning={word.meaning}
        explanation={word.explanation}
      />
      <Button
        variant='outlined'
        onClick={browserBack}
        className={styles.button}
      >
        戻る
      </Button>
    </>
  );
};

export default Index;
