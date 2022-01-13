import { ProductUseCase } from "./products/product";
import { ProductService } from "services/api/products/product-service";
import { ProductRepository } from "services/repository/products/product-repository";

export const productUseCase = new ProductUseCase(
  new ProductService(),
  new ProductRepository()
);
