import { Button, FormControl, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { sentencesSchema } from '../../types/sentences.d';
import styles from './SentencesForm.module.scss';

const sentencesFormPropsSchema = z.object({
  defaultValue: sentencesSchema,
  onSubmit: z.function().args(z.object({ value: sentencesSchema })),
});

type SentencesFormProps = z.infer<typeof sentencesFormPropsSchema>;

const SentencesForm: FC<SentencesFormProps> = (props) => {
  const { defaultValue, onSubmit } = props;
  const { register, handleSubmit } = useForm<{ value: string }>();

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <TextField
          label='英文の入力'
          multiline
          rows={12}
          defaultValue={defaultValue}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('value', { required: '英文を入力してください' })}
        />
      </FormControl>
      <div className={styles['button-group']}>
        <Button className={styles.button} variant='outlined'>
          やめる
        </Button>
        <Button className={styles.button} type='submit' variant='outlined'>
          作成する
        </Button>
      </div>
    </form>
  );
};

export default SentencesForm;
