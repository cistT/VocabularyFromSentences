import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import styles from './index.module.scss';
import WordList from '@/features/word/components/WordList/WordList';
import { WordContext } from '@/features/word/components/WordProvider/WordProvider';
import useBrowserBack from '@/hooks/browserBack';

const Index = () => {
  const { wordList } = useContext(WordContext);
  const { browserBack } = useBrowserBack();

  return (
    <>
      <Typography variant='h4' component='h4' className={styles.header}>
        単語リスト
      </Typography>
      <WordList wordList={wordList} />
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
