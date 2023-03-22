import type { NextApiRequest, NextApiResponse } from 'next';
import { translator } from '@/lib/deepl';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await translator.translateText(
    ['test', 'good', 'god'],
    null,
    'ja'
  );

  res.status(200).json(result);
};

export default handler;
