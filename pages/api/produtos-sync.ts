import { NextApiRequest, NextApiResponse } from "next";

const sync = (req: NextApiRequest, res: NextApiResponse) => {
  const { reference } = req.query;

  const produtos = [
    { name: "Leite", sku: "1" },
    { name: "Cafe", sku: "2" },
    { name: "Chocolate", sku: "3" },
    { name: "Bombom", sku: "4" },
    { name: "Bis", sku: "5" },
    { name: "Cerveja", sku: "6" },
    { name: "Bombril", sku: "7" },
    { name: "Amaciante", sku: "8" },
    { name: "Leite", sku: "9" },
    { name: "Cafe", sku: "10" },
    { name: "Chocolate", sku: "11" },
    { name: "Bombom", sku: "12" },
    { name: "Bis", sku: "13" },
    { name: "Cerveja", sku: "14" },
    { name: "Bombril", sku: "15" },
    { name: "Amaciante", sku: "16" },
    
  ];

  const updatedProdutos = [
    { name: "Leite updated", sku: "1" },
    { name: "Cafe updated", sku: "2" },
    { name: "Pipoca", sku: "17" },
  ];

  const data = {
    updated: reference ? updatedProdutos : produtos,
    deleted: reference ? ["14", "15"] : [],
    last_sync: new Date().toISOString(),
  };

  res.status(200).json(data);
};

export default sync;
