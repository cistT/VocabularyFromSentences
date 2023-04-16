import { z } from 'zod';

export const sentencesSchema = z.string();
export const SentencesType = z.infer<typeof sentencesSchema>;
