import { ProductService } from "services/api/product-service";
import { ProductRepository } from "services/repository/product-repository";

export class ProductUseCase {
  private productService: ProductService;
  private productRepository: ProductRepository;

  constructor() {
    this.productService = new ProductService();
    this.productRepository = new ProductRepository();
  }
  async getAll() {
    const products = await this.productService.getAll();
    this.productRepository.save(products.data);
    return products;
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
}
