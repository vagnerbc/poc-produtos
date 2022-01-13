import { DbCollection } from "services/dbCollection";

export type ProductCollection = {
  sku: string;
  name: string;
}

export const config = { tableName: "products", keyName: "sku" }

export const productCollection = new DbCollection<ProductCollection>(config);
