import { TProduct } from "services/api/products/types";
import { AbstractRepository } from "../config/abstract-repository";
export class ProductRepository extends AbstractRepository<TProduct> {
  constructor() {
    super("products", "sku");
  }
}
