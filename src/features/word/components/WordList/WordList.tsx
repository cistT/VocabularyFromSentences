import { List, ListItemButton, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { z } from 'zod';
import { WordSchema } from '../../types/word.d';
import styles from './WordList.module.scss';

const WordListPropsSchema = z.object({
  wordList: z.array(WordSchema),
});

type WordListProps = z.infer<typeof WordListPropsSchema>;

const WordList: FC<WordListProps> = (props) => {
  const { wordList } = props;

  const router = useRouter();
  const onClickItem = (id: string) => {
    router.push(`word/${id}`);
  };

  return (
    <List className={styles.container}>
      {wordList.map((word) => (
        <ListItemButton
          key={word.id}
          divider
          className={styles.item}
          onClick={() => onClickItem(word.id)}
        >
          <ListItemText primary={word.word} />
          <ListItemText primary={word.meaning} className={styles.meaning} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default WordList;
