import { ProdutoService } from "services/api/produtos/produto-service";
import { TProduto, TSyncStatus } from "services/api/produtos/types";
import { TEntityFilter } from "services/repository/config/repository";
import { ProdutoRepository } from "services/repository/produtos/produto-repository";
import { removeAttributeByKey } from "utils/array";
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

  async getByFilter(filter?: TEntityFilter<TProduto>) {
    return await this.produtoRepository.getByFilter(filter);
  }

  async changeStatus(produto: TProduto, status: TSyncStatus) {
    await this.produtoRepository.save([{...produto, status}]);
  }

  async update(produto: TProduto) {
    await this.changeStatus(produto, 'updated');
  }

  async delete(produto: TProduto) {
    await this.changeStatus(produto, 'deleted');
    const produtos = await this.produtoRepository.getAll();
    return produtos;
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
    const updatedProdutos = await this.getByFilter({ status: 'updated' });
    const deletedProdutos = await this.getByFilter({ status: 'deleted' });

    const updatedToRepository = removeAttributeByKey<TProduto>(updatedProdutos, 'status');
    const updated = removeAttributeByKey<TProduto>(updatedToRepository, 'indexed_id');
    const deleted = deletedProdutos.map(produto => produto.sku);

    if (updated.length > 0 || deleted.length > 0) {
      await this.produtoService.sendSync({ updated, deleted });

      await this.produtoRepository.save(updatedToRepository);
      await this.produtoRepository.delete(deleted);
    }
  }

  async sync(): Promise<TProduto[]> {
    await this.sendSync();
    const produtos = await this.getSync();
    return produtos;
  }
}
