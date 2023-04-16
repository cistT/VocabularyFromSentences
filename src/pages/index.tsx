import { useRouter } from 'next/router';
import { useContext } from 'react';
import SentencesForm from '@/features/sentences/components/SentencesForm/SentencesForm';
import extractWords from '@/features/sentences/utils/extractWords';
import { WordContext } from '@/features/word/components/WordProvider/WordProvider';
import { trpc } from '@/utils/trpc';

const Home = () => {
  const router = useRouter();

  const { register } = useContext(WordContext);
  const translate = trpc.translate.useMutation();

  const onSubmit = (data: { value: string }) => {
    const wordList = extractWords(data.value);

    translate.mutate(
      { wordList },
      {
        onSuccess: (d) => {
          register(d);
          router.push('/wordList');
        },
      }
    );
  };
  return <SentencesForm defaultValue='' onSubmit={onSubmit} />;
};

export default Home;
