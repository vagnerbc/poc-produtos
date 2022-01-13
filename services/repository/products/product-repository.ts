import { AbstractRepository } from "../config/abstract-repository";

export type ProductCollection = {
  sku: string;
  name: string;
};

export class ProductRepository extends AbstractRepository<ProductCollection> {
  constructor() {
    super("products", "sku");
  }
}
