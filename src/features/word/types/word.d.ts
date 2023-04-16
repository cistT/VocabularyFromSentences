import { z } from 'zod';

export const WordSchema = z.object({
  id: z.string(),
  word: z.string(),
  meaning: z.string().default(''),
  explanation: z.string().default(''),
});

export type WordType = z.infer<typeof WordSchema>;
