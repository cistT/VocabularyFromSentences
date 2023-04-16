import { TextField, Typography } from '@mui/material';
import React, { FC } from 'react';
import { z } from 'zod';
import { WordSchema } from '../../types/word.d';
import styles from './Word.module.scss';

const WordPropsSchema = WordSchema.omit({ id: true });

type WordProps = z.infer<typeof WordPropsSchema>;

const Word: FC<WordProps> = (props) => {
  const { word, meaning, explanation } = props;
  return (
    <div className={styles.container}>
      <Typography variant='h2' component='h2' className={styles.word}>
        {word}
      </Typography>
      <form className={styles.form}>
        <TextField label='意味' multiline rows={2} defaultValue={meaning} />
        <TextField label='説明' multiline rows={4} defaultValue={explanation} />
      </form>
    </div>
  );
};

export default Word;
