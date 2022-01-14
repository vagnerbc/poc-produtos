import { AbstractService } from "../abstract-service";
import { api } from "../config";
import { TProduct } from "./types";

export class ProductService extends AbstractService<TProduct> {
  constructor() {
    super(api, "products", "/products");
  }

  async sync(reference?:string) {
    const query = reference ? `?reference=${reference}` : '';
    return this.api.get(`/products-sync${query}`);
  }
}
