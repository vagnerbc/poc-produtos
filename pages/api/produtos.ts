import type { NextApiRequest, NextApiResponse } from "next";

const produtos = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    produtos: [
      { nome: "Leite", sku: "1234567890" },
      { nome: "Cafe", sku: "1234567891" },
      { nome: "Chocolate", sku: "1234567892" },
    ],
  };
  res.status(200).json(data);
};

export default produtos;
