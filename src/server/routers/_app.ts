import { UUID } from 'uuidjs';
import { z } from 'zod';
import { procedure, router } from '../trpc';
import { translator } from '@/lib/deepl';

export const appRouter = router({
  translate: procedure
    .input(
      z.object({
        wordList: z.array(z.string()),
      })
    )
    .mutation(async ({ input }) => {
      const translatedWordList = await translator.translateText(
        input.wordList,
        'en',
        'ja'
      );

      const parsedTranslateWordList = translatedWordList.map((word, i) => ({
        id: UUID.generate(),
        word: input.wordList[i],
        meaning: word.text,
        explanation: '',
      }));
      return parsedTranslateWordList;
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
