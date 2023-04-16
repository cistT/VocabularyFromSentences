import { z } from 'zod';
import { sentencesSchema } from '../types/sentences.d';

const extractWordsSchema = z
  .function()
  .args(sentencesSchema)
  .returns(z.array(z.string()));

type ExtractWordsType = z.infer<typeof extractWordsSchema>;

const extractWords: ExtractWordsType = (sentences) => {
  const extractedWords = sentences
    .trim()
    .replaceAll('.', '')
    .replaceAll(',', '')
    .replaceAll('!', '')
    .replaceAll('?', '')
    .split(' ');

  const duplicateEliminationWords = Array.from(new Set(extractedWords));
  return duplicateEliminationWords;
};

export default extractWords;
