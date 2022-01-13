import { ProductCollection } from "services/repository/products/product-repository";
import { AbstractService } from "../abstract-service";
import { api } from "../config";

export class ProductService extends AbstractService<ProductCollection> {
  constructor() {
    super(api, "products", "/products");
  }

  async sync() {
    return this.api.post(`/products-sync`, {
      data: { reference: Date.now() },
    });
  }
}
