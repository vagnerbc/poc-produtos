import type { NextApiRequest, NextApiResponse } from "next";

const products = (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    { name: "Leite", sku: "1234567890" },
    { name: "Cafe", sku: "1234567891" },
    { name: "Chocolate", sku: "1234567892" },
    { name: "Bombom", sku: "1234567893" },
    { name: "Bis", sku: "1234567894" },
    { name: "Cerveja", sku: "1234567895" },
    { name: "Bombril", sku: "1234567896" },
    { name: "Amaciante", sku: "1234567897" },
  ];
  res.status(200).json(data);
};

export default products;
