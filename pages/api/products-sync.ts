import { NextApiRequest, NextApiResponse } from "next";

const sync = (req: NextApiRequest, res: NextApiResponse) => {

  const { reference } = req.query;

  const products = [
      { name: "Leite", sku: "1234567890" },
      { name: "Cafe", sku: "1234567891" },
      { name: "Chocolate", sku: "1234567892" },
      { name: "Bombom", sku: "1234567893" },
      { name: "Bis", sku: "1234567894" },
      { name: "Cerveja", sku: "1234567895" },
      { name: "Bombril", sku: "1234567896" },
      { name: "Amaciante", sku: "1234567897" },
  ]

  const updatedProducts = [
      { name: "Leite updated", sku: "1234567890" },
      { name: "Cafe updated", sku: "1234567891" },
      { name: 'Pipoca', sku: '123232'}
  ]
  
  const data = {
    updated: reference ? updatedProducts : products,
    deleted: reference ? ["1234567897", "1234567895"] : [],
    last_sync: new Date().toISOString()
  };

  res.status(200).json(data);
};

export default sync;
