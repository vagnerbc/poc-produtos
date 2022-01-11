import type { NextApiRequest, NextApiResponse } from 'next'

const produtos = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    produtos: [
      { nome: 'Produto 1' },
      { nome: 'Produto 2' },
      { nome: 'Produto 3' },
    ]
  }
  res.status(200).json(data)
}

export default produtos
