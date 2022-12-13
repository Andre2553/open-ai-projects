// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { openai } from '../../libs/openai'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }

  const { prompt, n, size } = req.body;

  const response = await openai.createImage({
    prompt: prompt,
    n: n,
    size: size,
  });


  res.status(response.status).json(response.data)
}
