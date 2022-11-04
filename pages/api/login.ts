import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const handler: NextApiHandler = (req, res) => {
  console.log('method', req.method)

  res.json({ message: 'Hello World' })
}

export default handler
