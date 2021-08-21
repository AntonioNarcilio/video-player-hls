import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    if (slug === 'preview') {
      res.json(
        [{
          // preview: '/assets/preview.png',
        }],
      );
      return;
    }
  }
  res.end(`${slug}: not found`);
}
