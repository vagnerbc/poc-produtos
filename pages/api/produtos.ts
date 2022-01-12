import type { NextApiRequest, NextApiResponse } from "next";

const produtos = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    produtos: [
      { name: "Leite", sku: "1234567890", price: 10 },
      { name: "Cafe", sku: "1234567891", price: 10 },
      { name: "Chocolate", sku: "1234567892", price: 10 },
      { name: "Bombom", sku: "1234567893", price: 10 },
      { name: "Bis", sku: "1234567894", price: 10 },
      { name: "Cerveja", sku: "1234567895", price: 10 },
      { name: "Bombril", sku: "1234567896", price: 10 },
      { name: "Amaciante", sku: "1234567897", price: 10 },
    ],
  };
  res.status(200).json(data);
};

export default produtos;
