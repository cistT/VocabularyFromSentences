import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Button, TextField, Typography } from '@mui/material';
import React, { FC } from 'react';
import { z } from 'zod';
import { WordSchema } from '../../types/word.d';
import speechWord from '../../utils/speechWord';
import styles from './Word.module.scss';

const WordPropsSchema = WordSchema.omit({ id: true });

type WordProps = z.infer<typeof WordPropsSchema>;

const Word: FC<WordProps> = (props) => {
  const { word, meaning, explanation } = props;
  const { startSpeech } = speechWord();

  const onClick = () => {
    if ('speechSynthesis' in window) {
      startSpeech(word);
    } else {
      // eslint-disable-next-line no-alert
      alert('このブラウザは音声合成に対応していません。');
    }
  };

  return (
    <div className={styles.container}>
      <Typography variant='h2' component='h2' className={styles.word}>
        {word}
      </Typography>

      <Button onClick={onClick} className={styles['speech-button']}>
        <PlayCircleOutlineIcon className={styles.icon} />
        <Typography component='div'>再生</Typography>
      </Button>

      <form className={styles.form}>
        <TextField label='意味' multiline rows={2} defaultValue={meaning} />
        <TextField label='説明' multiline rows={4} defaultValue={explanation} />
      </form>
    </div>
  );
};

export default Word;
