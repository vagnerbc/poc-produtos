import type { NextApiRequest, NextApiResponse } from "next";

const produtos = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    produtos: [
      { nome: "Leite", sku: "1234567890" },
      { nome: "Cafe", sku: "1234567891" },
      { nome: "Chocolate", sku: "1234567892" },
      { nome: "Bombom", sku: "1234567893" },
      { nome: "Bis", sku: "1234567894" },
      { nome: "Cerveja", sku: "1234567895" },
      { nome: "Bombril", sku: "1234567896" },
      { nome: "Amaciante", sku: "1234567897" },
    ],
  };
  res.status(200).json(data);
};

export default produtos;
