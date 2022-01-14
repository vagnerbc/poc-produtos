import { ProductService } from "services/api/products/product-service";
import { TProduct } from "services/api/products/types";
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
    await this.productRepository.save(products.data);
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
    await this.productRepository.delete([id]);
  }

  async sync(): Promise<TProduct[]> {
    const reference = localStorage.getItem('productReference');
    const { data } = await this.productService.sync(reference);

    await this.productRepository.save(data.updated);
    await this.productRepository.delete(data.deleted);

    const products = await this.productRepository.getAll();

    localStorage.setItem('productReference', data.last_sync);

    return products;
  }
}
