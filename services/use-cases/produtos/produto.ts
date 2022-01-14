import { ProdutoService } from "services/api/produtos/produto-service";
import { TProduto, TSyncStatus } from "services/api/produtos/types";
import { ProdutoRepository } from "services/repository/produtos/produto-repository";
export class ProdutoUseCase {
  private produtoService: ProdutoService;
  private produtoRepository: ProdutoRepository;

  constructor(
    produtoService: ProdutoService,
    produtoRepository: ProdutoRepository
  ) {
    this.produtoService = produtoService;
    this.produtoRepository = produtoRepository;
  }

  async getAll() {
    const produtos = await this.produtoService.getAll();
    await this.produtoRepository.save(produtos.data);
    return produtos.data;
  }

  async changeStatus(produto: TProduto, status?: TSyncStatus) {
    await this.produtoRepository.save([{...produto, status}]);
  }

  async update(produto: TProduto) {
    await this.changeStatus(produto, 'updated');
  }

  async delete(produto: TProduto) {
    await this.changeStatus(produto, 'deleted');
  }

  async getSync(): Promise<TProduto[]> {
    const reference = localStorage.getItem("produto_last_sync");
    const { data } = await this.produtoService.getSync(reference);

    await this.produtoRepository.save(data.updated);
    await this.produtoRepository.delete(data.deleted);

    const produtos = await this.produtoRepository.getAll();

    localStorage.setItem("produto_last_sync", data.last_sync);

    return produtos;
  }

  async sendSync(): Promise<void> {
    const updatedProdutos = await this.produtoRepository.getByKey('status', 'updated');
    const deletedProdutos = await this.produtoRepository.getByKey('status', 'deleted');

    const updated = updatedProdutos.map(produto => ({ ...produto, status: undefined, indexed_id: undefined }));
    const deleted = deletedProdutos.map(produto => produto.sku);

    await this.produtoService.sendSync({ updated, deleted });

    await this.produtoRepository.save(updated);
    await this.produtoRepository.delete(deleted);
  }

  async sync(): Promise<TProduto[]> {
    await this.sendSync();
    const produtos = await this.getSync();
    return produtos;
  }
}
