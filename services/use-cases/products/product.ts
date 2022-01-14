import { ProductService } from "services/api/products/product-service";
import { ProductRepository } from "services/repository/products/product-repository";

export class ProductUseCase {
  private productService: ProductService;
  private productRepository: ProductRepository;

  constructor(
    productService: ProductService,
    productRepository: ProductRepository
  ) {
    this.productService = productService;
    this.productRepository = productRepository;
  }

  async getAll() {
    const products = await this.productService.getAll();
    this.productRepository.save(products.data);
    return products.data;
  }

  async save(product: any) {
    await this.productService.save([product]);
  }

  async update(product: any) {
    await this.productService.update([product]);
    this.productRepository.save([product]);
  }

  async delete(id: string) {
    await this.productService.delete([id]);
    this.productRepository.delete([id]);
  }

  async sync() {
    const response = await this.productService.sync();

    this.productRepository.save(response.data.updated);
    this.productRepository.delete(response.data.deleted);
  }
}
