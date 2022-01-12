import { NextApiRequest, NextApiResponse } from "next";

const sync = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    updated: [
      { name: "Sabão", sku: "123456789", price: 4 },
      { name: "Leite", sku: "1234567890", price: 11 },
    ],
    deleted: ["1234567896", "1234567897"],
  };

  res.status(200).json(data);
};

export default sync;
