import { AbstractService } from "./abstract-service";
import { api } from "./config";

export type Product = {
  sku: string;
  name: string;
};

export class ProductService extends AbstractService<Product> {
  constructor() {
    super(api, "products", "/products");
  }
}
